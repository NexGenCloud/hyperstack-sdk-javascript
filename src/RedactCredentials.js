/**
 * Keeps the api_key from travelling somewhere it was never meant to go.
 *
 * Maintained in sdk-generator (util/javascript/RedactCredentials.js) and copied into
 * the generated SDK's src/ by the `add-hyperstack-headers` task, then compiled into
 * dist/ by babel. Do not edit in the SDK repo.
 *
 * superagent clears authorization, cookie and host when a redirect changes origin,
 * but it never touches arbitrary custom headers -- and the Hyperstack credential
 * lives in a custom `api_key` header, exactly the case it leaves in place. A single
 * cross-host 3xx would therefore hand the key to the redirect target, silently,
 * because the SDK still resolves with an ordinary success object.
 */

// Matched case-insensitively: superagent lower-cases header names it stores, but a
// caller-supplied one can arrive in any casing.
const AUTH_HEADERS = ['api_key', 'authorization'];

const REDACTED = '<redacted>';

const hostOf = (url, base) => {
  try {
    return new URL(url, base).host;
  } catch {
    return null;
  }
};

/**
 * Drops credential headers when a redirect sends the request to another host.
 *
 * Node only: in a browser the XHR/fetch layer follows redirects itself and exposes
 * no hook, so there is nothing to strip from. Browser callers are covered by the
 * origin restrictions the platform already enforces.
 *
 * @param {Object} request A superagent request.
 */
export default function stripAuthOnCrossHostRedirect(request) {
  if (!request || typeof request.on !== 'function') return request;

  // superagent rewrites request.url to the redirect target *before* emitting the
  // event, so the original has to be captured here or every hop looks same-host.
  // Comparing against the original also means a chain A -> A -> B still strips.
  const origin = hostOf(request.url);

  request.on('redirect', (res) => {
    const location = res && res.headers && res.headers.location;
    if (!location) return;

    const to = hostOf(location, request.url);
    // Unparseable either way: drop the credentials rather than guess.
    if (origin && to && origin === to) return;

    for (const name of Object.keys(request.header || {})) {
      if (AUTH_HEADERS.includes(name.toLowerCase())) {
        delete request.header[name];
      }
    }
  });

  return request;
}

/**
 * Removes credential headers from the response object handed back to callers.
 *
 * superagent attaches the completed request to its response, so the api_key that
 * was sent is still reachable from anything the SDK resolves or rejects with.
 * `console.error(err)` reaches it at the default inspect depth, which puts a live
 * credential into application logs and error aggregators on every failed call --
 * and failures are routine (429, transient 5xx, validation 4xx).
 *
 * The request has already been sent by the time this runs, so clearing these is
 * safe; they are only kept for introspection.
 *
 * @param {Object} response A superagent response.
 * @returns {Object} The same response, with credentials removed.
 */
export function redactCredentials(response) {
  if (!response) return response;

  const request = response.request;
  if (request) {
    // superagent keeps two copies: the caller-cased map and a lower-cased one.
    for (const bag of [request.header, request._header]) {
      if (!bag) continue;
      for (const name of Object.keys(bag)) {
        if (AUTH_HEADERS.includes(name.toLowerCase())) bag[name] = REDACTED;
      }
    }
  }

  // Node keeps the serialised request head as a string on the ClientRequest, which
  // is reachable through the response's socket.
  const clientRequest =
    (request && request.req) ||
    (response.res && response.res.socket && response.res.socket._httpMessage);
  if (clientRequest) {
    if (typeof clientRequest._header === 'string') {
      clientRequest._header = clientRequest._header.replace(
        new RegExp(`^(${AUTH_HEADERS.join('|')}):.*$`, 'gim'),
        (match) => `${match.split(':')[0]}: ${REDACTED}`,
      );
    }

    // Node also keeps the outgoing headers under a symbol key, which Object.keys
    // does not enumerate but util.inspect prints -- so Sentry and friends would
    // still pick the credential up from there.
    for (const symbol of Object.getOwnPropertySymbols(clientRequest)) {
      if (String(symbol) !== 'Symbol(kOutHeaders)') continue;
      const bag = clientRequest[symbol];
      if (!bag) continue;
      for (const name of Object.keys(bag)) {
        // Each entry is [originalName, value].
        if (AUTH_HEADERS.includes(name.toLowerCase()) && Array.isArray(bag[name])) {
          bag[name][1] = REDACTED;
        }
      }
    }
  }

  return response;
}

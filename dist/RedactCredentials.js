"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = stripAuthOnCrossHostRedirect;
exports.redactCredentials = redactCredentials;
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
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
var AUTH_HEADERS = ['api_key', 'authorization'];
var REDACTED = '<redacted>';
var hostOf = function hostOf(url, base) {
  try {
    return new URL(url, base).host;
  } catch (_unused) {
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
function stripAuthOnCrossHostRedirect(request) {
  if (!request || typeof request.on !== 'function') return request;

  // superagent rewrites request.url to the redirect target *before* emitting the
  // event, so the original has to be captured here or every hop looks same-host.
  // Comparing against the original also means a chain A -> A -> B still strips.
  var origin = hostOf(request.url);
  request.on('redirect', function (res) {
    var location = res && res.headers && res.headers.location;
    if (!location) return;
    var to = hostOf(location, request.url);
    // Unparseable either way: drop the credentials rather than guess.
    if (origin && to && origin === to) return;
    for (var _i = 0, _Object$keys = Object.keys(request.header || {}); _i < _Object$keys.length; _i++) {
      var name = _Object$keys[_i];
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
function redactCredentials(response) {
  if (!response) return response;
  var request = response.request;
  if (request) {
    // superagent keeps two copies: the caller-cased map and a lower-cased one.
    for (var _i2 = 0, _arr = [request.header, request._header]; _i2 < _arr.length; _i2++) {
      var bag = _arr[_i2];
      if (!bag) continue;
      for (var _i3 = 0, _Object$keys2 = Object.keys(bag); _i3 < _Object$keys2.length; _i3++) {
        var name = _Object$keys2[_i3];
        if (AUTH_HEADERS.includes(name.toLowerCase())) bag[name] = REDACTED;
      }
    }
  }

  // Node keeps the serialised request head as a string on the ClientRequest, which
  // is reachable through the response's socket.
  var clientRequest = request && request.req || response.res && response.res.socket && response.res.socket._httpMessage;
  if (clientRequest) {
    if (typeof clientRequest._header === 'string') {
      clientRequest._header = clientRequest._header.replace(new RegExp("^(".concat(AUTH_HEADERS.join('|'), "):.*$"), 'gim'), function (match) {
        return "".concat(match.split(':')[0], ": ").concat(REDACTED);
      });
    }

    // Node also keeps the outgoing headers under a symbol key, which Object.keys
    // does not enumerate but util.inspect prints -- so Sentry and friends would
    // still pick the credential up from there.
    var _iterator = _createForOfIteratorHelper(Object.getOwnPropertySymbols(clientRequest)),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var symbol = _step.value;
        if (String(symbol) !== 'Symbol(kOutHeaders)') continue;
        var _bag = clientRequest[symbol];
        if (!_bag) continue;
        for (var _i4 = 0, _Object$keys3 = Object.keys(_bag); _i4 < _Object$keys3.length; _i4++) {
          var _name = _Object$keys3[_i4];
          // Each entry is [originalName, value].
          if (AUTH_HEADERS.includes(_name.toLowerCase()) && Array.isArray(_bag[_name])) {
            _bag[_name][1] = REDACTED;
          }
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
  return response;
}
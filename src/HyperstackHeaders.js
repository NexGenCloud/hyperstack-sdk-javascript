/**
 * Forced Hyperstack client identification headers.
 *
 * Maintained in sdk-generator (util/javascript/HyperstackHeaders.js) and copied into
 * the generated SDK's src/ by the `add-hyperstack-headers` task, then compiled into
 * dist/ by babel. Do not edit in the SDK repo.
 */

const SDK_NAME = 'hyperstack-javascript-sdk';
const SDK_VERSION = 'v1.55.6-alpha';

export const CLIENT_HEADER = 'Hyperstack-Client';
export const USER_AGENT_HEADER = 'User-Agent';

/** Printable ASCII only, capped at 256 chars. */
const sanitize = (value) => String(value).replace(/[^\x20-\x7e]/g, '').slice(0, 256);

const normalizeOs = (value) => {
  const v = String(value || '').toLowerCase();
  if (v.startsWith('darwin') || v.startsWith('mac')) return 'darwin';
  if (v.startsWith('win')) return 'windows';
  if (v.startsWith('linux')) return 'linux';
  return v.replace(/ /g, '-') || 'unknown';
};

const normalizeArch = (value) => {
  const v = String(value || '').toLowerCase();
  if (v === 'x64' || v === 'x86_64' || v === 'amd64') return 'x86_64';
  if (v === 'arm64' || v === 'aarch64') return 'arm64';
  if (v === 'ia32' || v === 'x86' || v === 'i386') return '386';
  return v || 'unknown';
};

const isNode = typeof process !== 'undefined'
  && process.versions != null
  && process.versions.node != null;

export const CLIENT_VALUE = sanitize(`${SDK_NAME}/${SDK_VERSION}`);

/**
 * User-Agent is a forbidden header name in browsers: XHR and fetch silently drop any
 * attempt to set it. It is therefore only emitted under Node, and browser traffic is
 * identified by Hyperstack-Client alone.
 */
export const USER_AGENT_VALUE = isNode
  ? sanitize(`${CLIENT_VALUE} (Node.js/${process.versions.node}; `
      + `${normalizeOs(process.platform)}/${normalizeArch(process.arch)})`)
  : null;

/** Forces the identification headers onto a superagent request. */
export default function applyHyperstackHeaders(request) {
  if (!request || typeof request.set !== 'function') return request;
  request.set(CLIENT_HEADER, CLIENT_VALUE);
  if (USER_AGENT_VALUE !== null) {
    request.set(USER_AGENT_HEADER, USER_AGENT_VALUE);
  }
  return request;
}

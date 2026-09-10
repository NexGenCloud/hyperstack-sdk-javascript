"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.USER_AGENT_VALUE = exports.USER_AGENT_HEADER = exports.CLIENT_VALUE = exports.CLIENT_HEADER = void 0;
exports["default"] = applyHyperstackHeaders;
/**
 * Forced Hyperstack client identification headers.
 *
 * Maintained in sdk-generator (util/javascript/HyperstackHeaders.js) and copied into
 * the generated SDK's src/ by the `add-hyperstack-headers` task, then compiled into
 * dist/ by babel. Do not edit in the SDK repo.
 */

var SDK_NAME = 'hyperstack-javascript-sdk';
var SDK_VERSION = 'v1.55.4-alpha';
var CLIENT_HEADER = exports.CLIENT_HEADER = 'Hyperstack-Client';
var USER_AGENT_HEADER = exports.USER_AGENT_HEADER = 'User-Agent';

/** Printable ASCII only, capped at 256 chars. */
var sanitize = function sanitize(value) {
  return String(value).replace(/[^\x20-\x7e]/g, '').slice(0, 256);
};
var normalizeOs = function normalizeOs(value) {
  var v = String(value || '').toLowerCase();
  if (v.startsWith('darwin') || v.startsWith('mac')) return 'darwin';
  if (v.startsWith('win')) return 'windows';
  if (v.startsWith('linux')) return 'linux';
  return v.replace(/ /g, '-') || 'unknown';
};
var normalizeArch = function normalizeArch(value) {
  var v = String(value || '').toLowerCase();
  if (v === 'x64' || v === 'x86_64' || v === 'amd64') return 'x86_64';
  if (v === 'arm64' || v === 'aarch64') return 'arm64';
  if (v === 'ia32' || v === 'x86' || v === 'i386') return '386';
  return v || 'unknown';
};
var isNode = typeof process !== 'undefined' && process.versions != null && process.versions.node != null;
var CLIENT_VALUE = exports.CLIENT_VALUE = sanitize("".concat(SDK_NAME, "/").concat(SDK_VERSION));

/**
 * User-Agent is a forbidden header name in browsers: XHR and fetch silently drop any
 * attempt to set it. It is therefore only emitted under Node, and browser traffic is
 * identified by Hyperstack-Client alone.
 */
var USER_AGENT_VALUE = exports.USER_AGENT_VALUE = isNode ? sanitize("".concat(CLIENT_VALUE, " (Node.js/").concat(process.versions.node, "; ") + "".concat(normalizeOs(process.platform), "/").concat(normalizeArch(process.arch), ")")) : null;

/** Forces the identification headers onto a superagent request. */
function applyHyperstackHeaders(request) {
  if (!request || typeof request.set !== 'function') return request;
  request.set(CLIENT_HEADER, CLIENT_VALUE);
  if (USER_AGENT_VALUE !== null) {
    request.set(USER_AGENT_HEADER, USER_AGENT_VALUE);
  }
  return request;
}
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _DashboardInfoResponse = _interopRequireDefault(require("../model/DashboardInfoResponse"));
var _ErrorResponseModel = _interopRequireDefault(require("../model/ErrorResponseModel"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * Infrahub-API
 * Leverage the Infrahub API and Hyperstack platform to easily create, manage, and scale powerful GPU virtual machines and their associated resources.   Access this SDK to automate the deployment of your workloads and streamline your infrastructure management.  To contribute, please raise an issue with a bug report, feature request, feedback, or general inquiry.
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */
/**
* Dashboard service.
* @module api/DashboardApi
* @version v1.25.0-alpha
*/
var DashboardApi = exports["default"] = /*#__PURE__*/function () {
  /**
  * Constructs a new DashboardApi. 
  * @alias module:api/DashboardApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function DashboardApi(apiClient) {
    _classCallCheck(this, DashboardApi);
    this.apiClient = apiClient || _ApiClient["default"].instance;
  }

  /**
   * Retrieve Dashboard
   * Returns hardware and pricing overview for your active resources, including virtual machines, containers, and volumes. For additional information on the Dashboard feature, [**click here**](https://infrahub-doc.nexgencloud.com/docs/features/dashboard).
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DashboardInfoResponse} and HTTP response
   */
  return _createClass(DashboardApi, [{
    key: "retrieveDashboardWithHttpInfo",
    value: function retrieveDashboardWithHttpInfo() {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['apiKey', 'accessToken'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _DashboardInfoResponse["default"];
      return this.apiClient.callApi('/core/dashboard', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Retrieve Dashboard
     * Returns hardware and pricing overview for your active resources, including virtual machines, containers, and volumes. For additional information on the Dashboard feature, [**click here**](https://infrahub-doc.nexgencloud.com/docs/features/dashboard).
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DashboardInfoResponse}
     */
  }, {
    key: "retrieveDashboard",
    value: function retrieveDashboard() {
      return this.retrieveDashboardWithHttpInfo().then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);
}();
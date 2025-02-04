"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _CreateFirewallPayload = _interopRequireDefault(require("../model/CreateFirewallPayload"));
var _CreateFirewallRulePayload = _interopRequireDefault(require("../model/CreateFirewallRulePayload"));
var _ErrorResponseModel = _interopRequireDefault(require("../model/ErrorResponseModel"));
var _FirewallDetailResponse = _interopRequireDefault(require("../model/FirewallDetailResponse"));
var _FirewallResponse = _interopRequireDefault(require("../model/FirewallResponse"));
var _FirewallRule = _interopRequireDefault(require("../model/FirewallRule"));
var _FirewallsListResponse = _interopRequireDefault(require("../model/FirewallsListResponse"));
var _ResponseModel = _interopRequireDefault(require("../model/ResponseModel"));
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
* Firewalls service.
* @module api/FirewallsApi
* @version v1.25.0-alpha
*/
var FirewallsApi = exports["default"] = /*#__PURE__*/function () {
  /**
  * Constructs a new FirewallsApi. 
  * @alias module:api/FirewallsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function FirewallsApi(apiClient) {
    _classCallCheck(this, FirewallsApi);
    this.apiClient = apiClient || _ApiClient["default"].instance;
  }

  /**
   * Add firewall rule to firewall
   * Creates a [**firewall rule**](https://infrahub-doc.nexgencloud.com/docs/network-security/security-rules) and adds it to an existing firewall. Include the firewall ID in the path, and provide the firewall rule configuration in the request body.
   * @param {Number} firewallId 
   * @param {module:model/CreateFirewallRulePayload} payload 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/FirewallRule} and HTTP response
   */
  return _createClass(FirewallsApi, [{
    key: "addFirewallRuleToFirewallWithHttpInfo",
    value: function addFirewallRuleToFirewallWithHttpInfo(firewallId, payload) {
      var postBody = payload;
      // verify the required parameter 'firewallId' is set
      if (firewallId === undefined || firewallId === null) {
        throw new Error("Missing the required parameter 'firewallId' when calling addFirewallRuleToFirewall");
      }
      // verify the required parameter 'payload' is set
      if (payload === undefined || payload === null) {
        throw new Error("Missing the required parameter 'payload' when calling addFirewallRuleToFirewall");
      }
      var pathParams = {
        'firewall_id': firewallId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['apiKey', 'accessToken'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _FirewallRule["default"];
      return this.apiClient.callApi('/core/firewalls/{firewall_id}/firewall-rules', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Add firewall rule to firewall
     * Creates a [**firewall rule**](https://infrahub-doc.nexgencloud.com/docs/network-security/security-rules) and adds it to an existing firewall. Include the firewall ID in the path, and provide the firewall rule configuration in the request body.
     * @param {Number} firewallId 
     * @param {module:model/CreateFirewallRulePayload} payload 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/FirewallRule}
     */
  }, {
    key: "addFirewallRuleToFirewall",
    value: function addFirewallRuleToFirewall(firewallId, payload) {
      return this.addFirewallRuleToFirewallWithHttpInfo(firewallId, payload).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Create firewall
     * Creates a firewall to which firewall rules can be added. A firewall can be attached to one or more virtual machines to control inbound and outbound traffic. In the body of the request, include the name of the firewall, the ID of the environment within which the firewall will be created, and an optional description. To obtain the ID of the environment, make a request to the [**list environments**](https://infrahub-doc.nexgencloud.com/docs/api-reference/core-resources/environments/list-environments) endpoint.
     * @param {module:model/CreateFirewallPayload} payload 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/FirewallResponse} and HTTP response
     */
  }, {
    key: "createFirewallWithHttpInfo",
    value: function createFirewallWithHttpInfo(payload) {
      var postBody = payload;
      // verify the required parameter 'payload' is set
      if (payload === undefined || payload === null) {
        throw new Error("Missing the required parameter 'payload' when calling createFirewall");
      }
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['apiKey', 'accessToken'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _FirewallResponse["default"];
      return this.apiClient.callApi('/core/firewalls', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Create firewall
     * Creates a firewall to which firewall rules can be added. A firewall can be attached to one or more virtual machines to control inbound and outbound traffic. In the body of the request, include the name of the firewall, the ID of the environment within which the firewall will be created, and an optional description. To obtain the ID of the environment, make a request to the [**list environments**](https://infrahub-doc.nexgencloud.com/docs/api-reference/core-resources/environments/list-environments) endpoint.
     * @param {module:model/CreateFirewallPayload} payload 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/FirewallResponse}
     */
  }, {
    key: "createFirewall",
    value: function createFirewall(payload) {
      return this.createFirewallWithHttpInfo(payload).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Delete firewall
     * Deletes a firewall by specifying the firewall ID in the path. If the firewall is currently attached to a virtual machine, it must be detached before deletion. For more information, [**click here**](https://infrahub-doc.nexgencloud.com/docs/api-reference/core-resources/firewalls/delete-firewall).
     * @param {Number} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ResponseModel} and HTTP response
     */
  }, {
    key: "deleteFirewallWithHttpInfo",
    value: function deleteFirewallWithHttpInfo(id) {
      var postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteFirewall");
      }
      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['apiKey', 'accessToken'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ResponseModel["default"];
      return this.apiClient.callApi('/core/firewalls/{id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Delete firewall
     * Deletes a firewall by specifying the firewall ID in the path. If the firewall is currently attached to a virtual machine, it must be detached before deletion. For more information, [**click here**](https://infrahub-doc.nexgencloud.com/docs/api-reference/core-resources/firewalls/delete-firewall).
     * @param {Number} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ResponseModel}
     */
  }, {
    key: "deleteFirewall",
    value: function deleteFirewall(id) {
      return this.deleteFirewallWithHttpInfo(id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Delete firewall rules from firewall
     * Removes a firewall rule from firewall by providing the firewall ID and firewall rule ID in the path. For more information, [**click here**](https://infrahub-doc.nexgencloud.com/docs/api-reference/core-resources/firewalls/remove-firewall-rule-from-firewall).
     * @param {Number} firewallId 
     * @param {Number} firewallRuleId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ResponseModel} and HTTP response
     */
  }, {
    key: "deleteFirewallRulesFromFirewallWithHttpInfo",
    value: function deleteFirewallRulesFromFirewallWithHttpInfo(firewallId, firewallRuleId) {
      var postBody = null;
      // verify the required parameter 'firewallId' is set
      if (firewallId === undefined || firewallId === null) {
        throw new Error("Missing the required parameter 'firewallId' when calling deleteFirewallRulesFromFirewall");
      }
      // verify the required parameter 'firewallRuleId' is set
      if (firewallRuleId === undefined || firewallRuleId === null) {
        throw new Error("Missing the required parameter 'firewallRuleId' when calling deleteFirewallRulesFromFirewall");
      }
      var pathParams = {
        'firewall_id': firewallId,
        'firewall_rule_id': firewallRuleId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['apiKey', 'accessToken'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ResponseModel["default"];
      return this.apiClient.callApi('/core/firewalls/{firewall_id}/firewall-rules/{firewall_rule_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Delete firewall rules from firewall
     * Removes a firewall rule from firewall by providing the firewall ID and firewall rule ID in the path. For more information, [**click here**](https://infrahub-doc.nexgencloud.com/docs/api-reference/core-resources/firewalls/remove-firewall-rule-from-firewall).
     * @param {Number} firewallId 
     * @param {Number} firewallRuleId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ResponseModel}
     */
  }, {
    key: "deleteFirewallRulesFromFirewall",
    value: function deleteFirewallRulesFromFirewall(firewallId, firewallRuleId) {
      return this.deleteFirewallRulesFromFirewallWithHttpInfo(firewallId, firewallRuleId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * List firewalls
     * Retrieves a list of existing firewalls and their details, including the security rules they contain and information about the virtual machines to which they are attached. For more information about the firewalls features offered by Infrahub, [**click here**](https://infrahub-doc.nexgencloud.com/docs/network-security/security-groups).
     * @param {Object} opts Optional parameters
     * @param {Number} [page] 
     * @param {Number} [pageSize] 
     * @param {String} [search] 
     * @param {String} [environment] Filter Environment ID or Name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/FirewallsListResponse} and HTTP response
     */
  }, {
    key: "listFirewallsWithHttpInfo",
    value: function listFirewallsWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'page': opts['page'],
        'pageSize': opts['pageSize'],
        'search': opts['search'],
        'environment': opts['environment']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['apiKey', 'accessToken'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _FirewallsListResponse["default"];
      return this.apiClient.callApi('/core/firewalls', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * List firewalls
     * Retrieves a list of existing firewalls and their details, including the security rules they contain and information about the virtual machines to which they are attached. For more information about the firewalls features offered by Infrahub, [**click here**](https://infrahub-doc.nexgencloud.com/docs/network-security/security-groups).
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page 
     * @param {Number} opts.pageSize 
     * @param {String} opts.search 
     * @param {String} opts.environment Filter Environment ID or Name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/FirewallsListResponse}
     */
  }, {
    key: "listFirewalls",
    value: function listFirewalls(opts) {
      return this.listFirewallsWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Retrieve firewall details
     * Retrieves the details of an existing firewall, including the security rules it contains and information about the virtual machines to which it is attached.
     * @param {Number} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/FirewallDetailResponse} and HTTP response
     */
  }, {
    key: "retrieveFirewallDetailsWithHttpInfo",
    value: function retrieveFirewallDetailsWithHttpInfo(id) {
      var postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling retrieveFirewallDetails");
      }
      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['apiKey', 'accessToken'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _FirewallDetailResponse["default"];
      return this.apiClient.callApi('/core/firewalls/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Retrieve firewall details
     * Retrieves the details of an existing firewall, including the security rules it contains and information about the virtual machines to which it is attached.
     * @param {Number} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/FirewallDetailResponse}
     */
  }, {
    key: "retrieveFirewallDetails",
    value: function retrieveFirewallDetails(id) {
      return this.retrieveFirewallDetailsWithHttpInfo(id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);
}();
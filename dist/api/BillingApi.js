"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _BillingMetricesResponse = _interopRequireDefault(require("../model/BillingMetricesResponse"));
var _DataSynthesisBillingHistoryDetailsResponseSchema = _interopRequireDefault(require("../model/DataSynthesisBillingHistoryDetailsResponseSchema"));
var _ErrorResponseModel = _interopRequireDefault(require("../model/ErrorResponseModel"));
var _LastDayCostResponse = _interopRequireDefault(require("../model/LastDayCostResponse"));
var _ModelEvaluationBillingHistoryDetailsResponseSchema = _interopRequireDefault(require("../model/ModelEvaluationBillingHistoryDetailsResponseSchema"));
var _OrganizationLevelBillingHistoryResponseModel = _interopRequireDefault(require("../model/OrganizationLevelBillingHistoryResponseModel"));
var _OrganizationThresholdUpdateResponse = _interopRequireDefault(require("../model/OrganizationThresholdUpdateResponse"));
var _OrganizationThresholdsResponse = _interopRequireDefault(require("../model/OrganizationThresholdsResponse"));
var _ResourceBillingEventsHistoryResponse = _interopRequireDefault(require("../model/ResourceBillingEventsHistoryResponse"));
var _ResourceLevelBucketBillingDetailsResponseModel = _interopRequireDefault(require("../model/ResourceLevelBucketBillingDetailsResponseModel"));
var _ResourceLevelBucketBillingHistoryResponseModel = _interopRequireDefault(require("../model/ResourceLevelBucketBillingHistoryResponseModel"));
var _ResourceLevelClusterBillingDetailsResponseModel = _interopRequireDefault(require("../model/ResourceLevelClusterBillingDetailsResponseModel"));
var _ResourceLevelClusterBillingHistoryResponseModel = _interopRequireDefault(require("../model/ResourceLevelClusterBillingHistoryResponseModel"));
var _ResourceLevelClusterGraphBillingDetailsResponseModel = _interopRequireDefault(require("../model/ResourceLevelClusterGraphBillingDetailsResponseModel"));
var _ResourceLevelGraphBillingDetailsBucket = _interopRequireDefault(require("../model/ResourceLevelGraphBillingDetailsBucket"));
var _ResourceLevelVMBillingDetailsResponseModel = _interopRequireDefault(require("../model/ResourceLevelVMBillingDetailsResponseModel"));
var _ResourceLevelVmBillingHistoryResponseModel = _interopRequireDefault(require("../model/ResourceLevelVmBillingHistoryResponseModel"));
var _ResourceLevelVmGraphBillingDetailsResponseModel = _interopRequireDefault(require("../model/ResourceLevelVmGraphBillingDetailsResponseModel"));
var _ResourceLevelVolumeBillingDetailsResponseModel = _interopRequireDefault(require("../model/ResourceLevelVolumeBillingDetailsResponseModel"));
var _ResourceLevelVolumeBillingHistoryResponseModel = _interopRequireDefault(require("../model/ResourceLevelVolumeBillingHistoryResponseModel"));
var _ResourceLevelVolumeGraphBillingDetailsResponseModel = _interopRequireDefault(require("../model/ResourceLevelVolumeGraphBillingDetailsResponseModel"));
var _ServerlessInferencedBillingHistoryDetailsResponseSchema = _interopRequireDefault(require("../model/ServerlessInferencedBillingHistoryDetailsResponseSchema"));
var _SubResourcesCostsResponseModel = _interopRequireDefault(require("../model/SubResourcesCostsResponseModel"));
var _SubResourcesGraphResponseModel = _interopRequireDefault(require("../model/SubResourcesGraphResponseModel"));
var _SubscribeOrUnsubscribeUpdatePayload = _interopRequireDefault(require("../model/SubscribeOrUnsubscribeUpdatePayload"));
var _TokenBasedBillingHistoryResponse = _interopRequireDefault(require("../model/TokenBasedBillingHistoryResponse"));
var _WorkloadBillingHistoryResponse = _interopRequireDefault(require("../model/WorkloadBillingHistoryResponse"));
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
* Billing service.
* @module api/BillingApi
* @version v1.42.0-alpha
*/
var BillingApi = exports["default"] = /*#__PURE__*/function () {
  /**
  * Constructs a new BillingApi. 
  * @alias module:api/BillingApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function BillingApi(apiClient) {
    _classCallCheck(this, BillingApi);
    this.apiClient = apiClient || _ApiClient["default"].instance;
  }

  /**
   * GET: Last Day Cost
   * Retrieve the previous day's costs for instances, volumes, and clusters. Returns a breakdown of  the costs and the total cost for the last day. For additional information on Retrieve Previous Day Usage Costs, [**click here**](None/docs/api-reference/billing-resources/last-day-usage/)
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LastDayCostResponse} and HTTP response
   */
  return _createClass(BillingApi, [{
    key: "getLastDayCostWithHttpInfo",
    value: function getLastDayCostWithHttpInfo() {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['apiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _LastDayCostResponse["default"];
      return this.apiClient.callApi('/billing/billing/last-day-cost', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * GET: Last Day Cost
     * Retrieve the previous day's costs for instances, volumes, and clusters. Returns a breakdown of  the costs and the total cost for the last day. For additional information on Retrieve Previous Day Usage Costs, [**click here**](None/docs/api-reference/billing-resources/last-day-usage/)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LastDayCostResponse}
     */
  }, {
    key: "getLastDayCost",
    value: function getLastDayCost() {
      return this.getLastDayCostWithHttpInfo().then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * GET: All Thresholds for Organization
     * Retrieve all the notification thresholds for an organization.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OrganizationThresholdsResponse} and HTTP response
     */
  }, {
    key: "getOrganizationThresholdWithHttpInfo",
    value: function getOrganizationThresholdWithHttpInfo() {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['apiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _OrganizationThresholdsResponse["default"];
      return this.apiClient.callApi('/billing/billing/threshold', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * GET: All Thresholds for Organization
     * Retrieve all the notification thresholds for an organization.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OrganizationThresholdsResponse}
     */
  }, {
    key: "getOrganizationThreshold",
    value: function getOrganizationThreshold() {
      return this.getOrganizationThresholdWithHttpInfo().then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * GET: Billing usage
     * Retrieve active billing metrics for the organization's resources, including pricing, uptime, and total cost. Returns usage details for each active resource by defualt(`deleted=false` will return active resources). Additionally, adding `deleted=true` in query parameter will return inactive resources. For additional information on view usage costs for all resources, [**click here**](None/docs/billing/pricebook/)
     * @param {Object} opts Optional parameters
     * @param {String} [deleted] `true` will return inactive resources and `false` will return active resources. By defualt(`deleted=false`)
     * @param {String} [environment] Filter resources by environment ID or Name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/BillingMetricesResponse} and HTTP response
     */
  }, {
    key: "getUsage2WithHttpInfo",
    value: function getUsage2WithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'deleted': opts['deleted'],
        'environment': opts['environment']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['apiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _BillingMetricesResponse["default"];
      return this.apiClient.callApi('/billing/billing/usage', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * GET: Billing usage
     * Retrieve active billing metrics for the organization's resources, including pricing, uptime, and total cost. Returns usage details for each active resource by defualt(`deleted=false` will return active resources). Additionally, adding `deleted=true` in query parameter will return inactive resources. For additional information on view usage costs for all resources, [**click here**](None/docs/billing/pricebook/)
     * @param {Object} opts Optional parameters
     * @param {String} opts.deleted `true` will return inactive resources and `false` will return active resources. By defualt(`deleted=false`)
     * @param {String} opts.environment Filter resources by environment ID or Name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BillingMetricesResponse}
     */
  }, {
    key: "getUsage2",
    value: function getUsage2(opts) {
      return this.getUsage2WithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Retrieve hourly cost datapoints of a Specific Bucket for a specific billing cycle
     * User will recieve hourly cost datapoints for a Bucket for a specified billing cycle. This data will include 'incurred_bill' graph datapoints.
     * @param {Number} bucketId 
     * @param {Object} opts Optional parameters
     * @param {String} [startDate] Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @param {String} [endDate] Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ResourceLevelGraphBillingDetailsBucket} and HTTP response
     */
  }, {
    key: "getUserBillingBucketDetailsGraphWithHttpInfo",
    value: function getUserBillingBucketDetailsGraphWithHttpInfo(bucketId, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'bucketId' is set
      if (bucketId === undefined || bucketId === null) {
        throw new Error("Missing the required parameter 'bucketId' when calling getUserBillingBucketDetailsGraph");
      }
      var pathParams = {
        'bucket_id': bucketId
      };
      var queryParams = {
        'start_date': opts['startDate'],
        'end_date': opts['endDate']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['apiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ResourceLevelGraphBillingDetailsBucket["default"];
      return this.apiClient.callApi('/billing/billing/history/bucket/{bucket_id}/graph', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Retrieve hourly cost datapoints of a Specific Bucket for a specific billing cycle
     * User will recieve hourly cost datapoints for a Bucket for a specified billing cycle. This data will include 'incurred_bill' graph datapoints.
     * @param {Number} bucketId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.startDate Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @param {String} opts.endDate Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ResourceLevelGraphBillingDetailsBucket}
     */
  }, {
    key: "getUserBillingBucketDetailsGraph",
    value: function getUserBillingBucketDetailsGraph(bucketId, opts) {
      return this.getUserBillingBucketDetailsGraphWithHttpInfo(bucketId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Retrieve hourly cost datapoints of a specific Cluster for a specific billing cycle
     * User will receive hourly cost datapoints for a Cluster for a specified billing cycle. This data will include 'incurred_bill' graph datapoints.
     * @param {Number} clusterId 
     * @param {Object} opts Optional parameters
     * @param {String} [startDate] Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @param {String} [endDate] Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ResourceLevelClusterGraphBillingDetailsResponseModel} and HTTP response
     */
  }, {
    key: "getUserBillingClusterDetailsGraphWithHttpInfo",
    value: function getUserBillingClusterDetailsGraphWithHttpInfo(clusterId, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'clusterId' is set
      if (clusterId === undefined || clusterId === null) {
        throw new Error("Missing the required parameter 'clusterId' when calling getUserBillingClusterDetailsGraph");
      }
      var pathParams = {
        'cluster_id': clusterId
      };
      var queryParams = {
        'start_date': opts['startDate'],
        'end_date': opts['endDate']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['apiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ResourceLevelClusterGraphBillingDetailsResponseModel["default"];
      return this.apiClient.callApi('/billing/billing/history/cluster/{cluster_id}/graph', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Retrieve hourly cost datapoints of a specific Cluster for a specific billing cycle
     * User will receive hourly cost datapoints for a Cluster for a specified billing cycle. This data will include 'incurred_bill' graph datapoints.
     * @param {Number} clusterId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.startDate Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @param {String} opts.endDate Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ResourceLevelClusterGraphBillingDetailsResponseModel}
     */
  }, {
    key: "getUserBillingClusterDetailsGraph",
    value: function getUserBillingClusterDetailsGraph(clusterId, opts) {
      return this.getUserBillingClusterDetailsGraphWithHttpInfo(clusterId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Retrieve hourly cost datapoints of a Specific Data Synthesis for a specific
     * User will receive hourly cost datapoints for a data synthesis job for a specified billing cycle. This data will include 'incurred_bill' graph datapoints. billing cycle
     * @param {Number} resourceId 
     * @param {Object} opts Optional parameters
     * @param {String} [startDate] Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @param {String} [endDate] Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DataSynthesisBillingHistoryDetailsResponseSchema} and HTTP response
     */
  }, {
    key: "getUserBillingDataSynthesisDetailsGraphWithHttpInfo",
    value: function getUserBillingDataSynthesisDetailsGraphWithHttpInfo(resourceId, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'resourceId' is set
      if (resourceId === undefined || resourceId === null) {
        throw new Error("Missing the required parameter 'resourceId' when calling getUserBillingDataSynthesisDetailsGraph");
      }
      var pathParams = {
        'resource_id': resourceId
      };
      var queryParams = {
        'start_date': opts['startDate'],
        'end_date': opts['endDate']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['apiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _DataSynthesisBillingHistoryDetailsResponseSchema["default"];
      return this.apiClient.callApi('/billing/billing/history/data_synthesis/{resource_id}/graph', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Retrieve hourly cost datapoints of a Specific Data Synthesis for a specific
     * User will receive hourly cost datapoints for a data synthesis job for a specified billing cycle. This data will include 'incurred_bill' graph datapoints. billing cycle
     * @param {Number} resourceId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.startDate Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @param {String} opts.endDate Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DataSynthesisBillingHistoryDetailsResponseSchema}
     */
  }, {
    key: "getUserBillingDataSynthesisDetailsGraph",
    value: function getUserBillingDataSynthesisDetailsGraph(resourceId, opts) {
      return this.getUserBillingDataSynthesisDetailsGraphWithHttpInfo(resourceId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Retrieve hourly cost datapoints of a Specific Fine Tuning for a specific billing cycle
     * User will recieve hourly cost datapoints for a Fine Tunings for a specified billing cycle. This data will include 'incurred_bill' graph datapoints.
     * @param {Number} resourceId 
     * @param {Object} opts Optional parameters
     * @param {String} [startDate] Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @param {String} [endDate] Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ResourceLevelVolumeGraphBillingDetailsResponseModel} and HTTP response
     */
  }, {
    key: "getUserBillingFineTuningDetailsGraphWithHttpInfo",
    value: function getUserBillingFineTuningDetailsGraphWithHttpInfo(resourceId, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'resourceId' is set
      if (resourceId === undefined || resourceId === null) {
        throw new Error("Missing the required parameter 'resourceId' when calling getUserBillingFineTuningDetailsGraph");
      }
      var pathParams = {
        'resource_id': resourceId
      };
      var queryParams = {
        'start_date': opts['startDate'],
        'end_date': opts['endDate']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['apiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ResourceLevelVolumeGraphBillingDetailsResponseModel["default"];
      return this.apiClient.callApi('/billing/billing/history/fine_tuning/{resource_id}/graph', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Retrieve hourly cost datapoints of a Specific Fine Tuning for a specific billing cycle
     * User will recieve hourly cost datapoints for a Fine Tunings for a specified billing cycle. This data will include 'incurred_bill' graph datapoints.
     * @param {Number} resourceId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.startDate Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @param {String} opts.endDate Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ResourceLevelVolumeGraphBillingDetailsResponseModel}
     */
  }, {
    key: "getUserBillingFineTuningDetailsGraph",
    value: function getUserBillingFineTuningDetailsGraph(resourceId, opts) {
      return this.getUserBillingFineTuningDetailsGraphWithHttpInfo(resourceId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Retrieve Billing History for a specific Billing Cycle
     * User will recieve billing history for the specified billing cycle. This data will include 'incurred_bill', 'non_discounted_bill', 'vm_cost', 'volume_cost'
     * @param {Object} opts Optional parameters
     * @param {String} [startDate] Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @param {String} [endDate] Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @param {String} [graph] Set this value to \"true\" for getting graph value
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OrganizationLevelBillingHistoryResponseModel} and HTTP response
     */
  }, {
    key: "getUserBillingHistory2WithHttpInfo",
    value: function getUserBillingHistory2WithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'start_date': opts['startDate'],
        'end_date': opts['endDate'],
        'graph': opts['graph']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['apiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _OrganizationLevelBillingHistoryResponseModel["default"];
      return this.apiClient.callApi('/billing/billing/history', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Retrieve Billing History for a specific Billing Cycle
     * User will recieve billing history for the specified billing cycle. This data will include 'incurred_bill', 'non_discounted_bill', 'vm_cost', 'volume_cost'
     * @param {Object} opts Optional parameters
     * @param {String} opts.startDate Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @param {String} opts.endDate Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @param {String} opts.graph Set this value to \"true\" for getting graph value
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OrganizationLevelBillingHistoryResponseModel}
     */
  }, {
    key: "getUserBillingHistory2",
    value: function getUserBillingHistory2(opts) {
      return this.getUserBillingHistory2WithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Retrieve Billing History of Volume for a specific Billing Cycle
     * User will recieve billing history of buckets for thespecified billing cycle. This data will include 'resource_name', 'infrahub_id', 'status', 'incurred_bill', 'usage_time', 'price_per_hour'
     * @param {Object} opts Optional parameters
     * @param {String} [startDate] Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @param {String} [endDate] Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @param {String} [search] Search by resource \"Name\" or \"ID\"
     * @param {Number} [perPage] Number of items to return per page
     * @param {Number} [page] Page number
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ResourceLevelBucketBillingHistoryResponseModel} and HTTP response
     */
  }, {
    key: "getUserBillingHistoryBucket2WithHttpInfo",
    value: function getUserBillingHistoryBucket2WithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'start_date': opts['startDate'],
        'end_date': opts['endDate'],
        'search': opts['search'],
        'per_page': opts['perPage'],
        'page': opts['page']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['apiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ResourceLevelBucketBillingHistoryResponseModel["default"];
      return this.apiClient.callApi('/billing/billing/history/bucket', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Retrieve Billing History of Volume for a specific Billing Cycle
     * User will recieve billing history of buckets for thespecified billing cycle. This data will include 'resource_name', 'infrahub_id', 'status', 'incurred_bill', 'usage_time', 'price_per_hour'
     * @param {Object} opts Optional parameters
     * @param {String} opts.startDate Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @param {String} opts.endDate Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @param {String} opts.search Search by resource \"Name\" or \"ID\"
     * @param {Number} opts.perPage Number of items to return per page
     * @param {Number} opts.page Page number
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ResourceLevelBucketBillingHistoryResponseModel}
     */
  }, {
    key: "getUserBillingHistoryBucket2",
    value: function getUserBillingHistoryBucket2(opts) {
      return this.getUserBillingHistoryBucket2WithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Retrieve Billing History of a Specific Snapshot for a specific Billing Cycle
     * Retrieve billing history of a specific Bucket for the specified billing cycle. This data will include 'resource_name', 'infrahub_id', 'price_per_hour', 'incurred_bill', 'usage_time', 'non_discounted_price_per_hour', 'non_discounted_bill'.
     * @param {Number} bucketId 
     * @param {Object} opts Optional parameters
     * @param {String} [startDate] Datetime should be formatted in YYYY-MM-DDTHH:MM:SS
     * @param {String} [endDate] Datetime should be formatted in YYYY-MM-DDTHH:MM:SS
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ResourceLevelBucketBillingDetailsResponseModel} and HTTP response
     */
  }, {
    key: "getUserBillingHistoryBucketDetailsWithHttpInfo",
    value: function getUserBillingHistoryBucketDetailsWithHttpInfo(bucketId, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'bucketId' is set
      if (bucketId === undefined || bucketId === null) {
        throw new Error("Missing the required parameter 'bucketId' when calling getUserBillingHistoryBucketDetails");
      }
      var pathParams = {
        'bucket_id': bucketId
      };
      var queryParams = {
        'start_date': opts['startDate'],
        'end_date': opts['endDate']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['apiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ResourceLevelBucketBillingDetailsResponseModel["default"];
      return this.apiClient.callApi('/billing/billing/history/bucket/{bucket_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Retrieve Billing History of a Specific Snapshot for a specific Billing Cycle
     * Retrieve billing history of a specific Bucket for the specified billing cycle. This data will include 'resource_name', 'infrahub_id', 'price_per_hour', 'incurred_bill', 'usage_time', 'non_discounted_price_per_hour', 'non_discounted_bill'.
     * @param {Number} bucketId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.startDate Datetime should be formatted in YYYY-MM-DDTHH:MM:SS
     * @param {String} opts.endDate Datetime should be formatted in YYYY-MM-DDTHH:MM:SS
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ResourceLevelBucketBillingDetailsResponseModel}
     */
  }, {
    key: "getUserBillingHistoryBucketDetails",
    value: function getUserBillingHistoryBucketDetails(bucketId, opts) {
      return this.getUserBillingHistoryBucketDetailsWithHttpInfo(bucketId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Retrieve Billing History of Clusters for a specific Billing Cycle
     * User will receive billing history of clusters for the specified billing cycle. This data will include 'resource_name', 'infrahub_id', 'status', 'incurred_bill', 'usage_time', 'price_per_hour'
     * @param {Object} opts Optional parameters
     * @param {String} [startDate] Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @param {String} [endDate] Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @param {String} [search] Search by resource \"Name\" or \"ID\"
     * @param {Number} [perPage] Number of items to return per page
     * @param {Number} [page] Page number
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ResourceLevelClusterBillingHistoryResponseModel} and HTTP response
     */
  }, {
    key: "getUserBillingHistoryClusterWithHttpInfo",
    value: function getUserBillingHistoryClusterWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'start_date': opts['startDate'],
        'end_date': opts['endDate'],
        'search': opts['search'],
        'per_page': opts['perPage'],
        'page': opts['page']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['apiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ResourceLevelClusterBillingHistoryResponseModel["default"];
      return this.apiClient.callApi('/billing/billing/history/cluster', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Retrieve Billing History of Clusters for a specific Billing Cycle
     * User will receive billing history of clusters for the specified billing cycle. This data will include 'resource_name', 'infrahub_id', 'status', 'incurred_bill', 'usage_time', 'price_per_hour'
     * @param {Object} opts Optional parameters
     * @param {String} opts.startDate Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @param {String} opts.endDate Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @param {String} opts.search Search by resource \"Name\" or \"ID\"
     * @param {Number} opts.perPage Number of items to return per page
     * @param {Number} opts.page Page number
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ResourceLevelClusterBillingHistoryResponseModel}
     */
  }, {
    key: "getUserBillingHistoryCluster",
    value: function getUserBillingHistoryCluster(opts) {
      return this.getUserBillingHistoryClusterWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Retrieve Billing History of a Specific Cluster for a specific Billing Cycle
     * User will receive billing history of a specific Cluster for the specified billing cycle. This data will include 'resource_name', 'infrahub_id', 'price_per_hour', 'non_discounted_price_per_hour', 'incurred_bill', 'non_discounted_bill', 'usage_time', 'usage_time_ACTIVE', 'usage_time_SHUTOFF', 'usage_time_HIBERNATED'.
     * @param {Number} clusterId 
     * @param {Object} opts Optional parameters
     * @param {String} [startDate] Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @param {String} [endDate] Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ResourceLevelClusterBillingDetailsResponseModel} and HTTP response
     */
  }, {
    key: "getUserBillingHistoryClusterDetailsWithHttpInfo",
    value: function getUserBillingHistoryClusterDetailsWithHttpInfo(clusterId, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'clusterId' is set
      if (clusterId === undefined || clusterId === null) {
        throw new Error("Missing the required parameter 'clusterId' when calling getUserBillingHistoryClusterDetails");
      }
      var pathParams = {
        'cluster_id': clusterId
      };
      var queryParams = {
        'start_date': opts['startDate'],
        'end_date': opts['endDate']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['apiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ResourceLevelClusterBillingDetailsResponseModel["default"];
      return this.apiClient.callApi('/billing/billing/history/cluster/{cluster_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Retrieve Billing History of a Specific Cluster for a specific Billing Cycle
     * User will receive billing history of a specific Cluster for the specified billing cycle. This data will include 'resource_name', 'infrahub_id', 'price_per_hour', 'non_discounted_price_per_hour', 'incurred_bill', 'non_discounted_bill', 'usage_time', 'usage_time_ACTIVE', 'usage_time_SHUTOFF', 'usage_time_HIBERNATED'.
     * @param {Number} clusterId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.startDate Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @param {String} opts.endDate Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ResourceLevelClusterBillingDetailsResponseModel}
     */
  }, {
    key: "getUserBillingHistoryClusterDetails",
    value: function getUserBillingHistoryClusterDetails(clusterId, opts) {
      return this.getUserBillingHistoryClusterDetailsWithHttpInfo(clusterId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Retrieve Billing History of Contract for a specific Billing Cycle
     * User will recieve billing history of contracts for the specified billing cycle. This data will include 'description', gpu_type','infrahub_id', 'status', 'incurred_bill', 'price_per_hour'
     * @param {Object} opts Optional parameters
     * @param {String} [startDate] Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @param {String} [endDate] Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @param {String} [search] Search by Contract \"Description\" or \"ID\"
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
  }, {
    key: "getUserBillingHistoryContractWithHttpInfo",
    value: function getUserBillingHistoryContractWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'start_date': opts['startDate'],
        'end_date': opts['endDate'],
        'search': opts['search']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['apiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/billing/billing/history/contract', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Retrieve Billing History of Contract for a specific Billing Cycle
     * User will recieve billing history of contracts for the specified billing cycle. This data will include 'description', gpu_type','infrahub_id', 'status', 'incurred_bill', 'price_per_hour'
     * @param {Object} opts Optional parameters
     * @param {String} opts.startDate Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @param {String} opts.endDate Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @param {String} opts.search Search by Contract \"Description\" or \"ID\"
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
  }, {
    key: "getUserBillingHistoryContract",
    value: function getUserBillingHistoryContract(opts) {
      return this.getUserBillingHistoryContractWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Retrieve Billing History of data synthesis for a specific Billing Cycle
     * User will recieve billing history of data_synthesis for the specified billing cycle.
     * @param {Object} opts Optional parameters
     * @param {String} [startDate] Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @param {String} [endDate] Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @param {String} [search] Search by resource \"Name\" or \"ID\"
     * @param {Number} [perPage] Number of items to return per page
     * @param {Number} [page] Page number
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TokenBasedBillingHistoryResponse} and HTTP response
     */
  }, {
    key: "getUserBillingHistoryDataSynthesisWithHttpInfo",
    value: function getUserBillingHistoryDataSynthesisWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'start_date': opts['startDate'],
        'end_date': opts['endDate'],
        'search': opts['search'],
        'per_page': opts['perPage'],
        'page': opts['page']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['apiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _TokenBasedBillingHistoryResponse["default"];
      return this.apiClient.callApi('/billing/billing/history/data_synthesis', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Retrieve Billing History of data synthesis for a specific Billing Cycle
     * User will recieve billing history of data_synthesis for the specified billing cycle.
     * @param {Object} opts Optional parameters
     * @param {String} opts.startDate Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @param {String} opts.endDate Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @param {String} opts.search Search by resource \"Name\" or \"ID\"
     * @param {Number} opts.perPage Number of items to return per page
     * @param {Number} opts.page Page number
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TokenBasedBillingHistoryResponse}
     */
  }, {
    key: "getUserBillingHistoryDataSynthesis",
    value: function getUserBillingHistoryDataSynthesis(opts) {
      return this.getUserBillingHistoryDataSynthesisWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Retrieve billing history for a specific Data Synthesis resource. Includes: 'resource_name', 'infrahub_id', 'base_model', 'base_model_display_name', 'lora_adapter', 'incurred_bill', 'non_discounted_bill', 'usage_time', 'input_tokens', 'output_tokens', 'input_tokens_incurred_bill', 'input_tokens_non_discounted_bill', 'output_tokens_incurred_bill', 'output_tokens_non_discounted_bill'
     * @param {Number} resourceId 
     * @param {Object} opts Optional parameters
     * @param {String} [startDate] YYYY-MM-DDTHH:MM:SS
     * @param {String} [endDate] YYYY-MM-DDTHH:MM:SS
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DataSynthesisBillingHistoryDetailsResponseSchema} and HTTP response
     */
  }, {
    key: "getUserBillingHistoryDataSynthesisDetailsWithHttpInfo",
    value: function getUserBillingHistoryDataSynthesisDetailsWithHttpInfo(resourceId, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'resourceId' is set
      if (resourceId === undefined || resourceId === null) {
        throw new Error("Missing the required parameter 'resourceId' when calling getUserBillingHistoryDataSynthesisDetails");
      }
      var pathParams = {
        'resource_id': resourceId
      };
      var queryParams = {
        'start_date': opts['startDate'],
        'end_date': opts['endDate']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['apiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _DataSynthesisBillingHistoryDetailsResponseSchema["default"];
      return this.apiClient.callApi('/billing/billing/history/data_synthesis/{resource_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Retrieve billing history for a specific Data Synthesis resource. Includes: 'resource_name', 'infrahub_id', 'base_model', 'base_model_display_name', 'lora_adapter', 'incurred_bill', 'non_discounted_bill', 'usage_time', 'input_tokens', 'output_tokens', 'input_tokens_incurred_bill', 'input_tokens_non_discounted_bill', 'output_tokens_incurred_bill', 'output_tokens_non_discounted_bill'
     * @param {Number} resourceId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.startDate YYYY-MM-DDTHH:MM:SS
     * @param {String} opts.endDate YYYY-MM-DDTHH:MM:SS
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DataSynthesisBillingHistoryDetailsResponseSchema}
     */
  }, {
    key: "getUserBillingHistoryDataSynthesisDetails",
    value: function getUserBillingHistoryDataSynthesisDetails(resourceId, opts) {
      return this.getUserBillingHistoryDataSynthesisDetailsWithHttpInfo(resourceId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Retrieve Billing History of model evaluation for a specific Billing Cycle
     * User will recieve billing history of fine_tuning for the specified billing cycle.
     * @param {Object} opts Optional parameters
     * @param {String} [startDate] Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @param {String} [endDate] Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @param {String} [search] Search by resource \"Name\" or \"ID\"
     * @param {Number} [perPage] Number of items to return per page
     * @param {Number} [page] Page number
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/WorkloadBillingHistoryResponse} and HTTP response
     */
  }, {
    key: "getUserBillingHistoryFineTuningWithHttpInfo",
    value: function getUserBillingHistoryFineTuningWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'start_date': opts['startDate'],
        'end_date': opts['endDate'],
        'search': opts['search'],
        'per_page': opts['perPage'],
        'page': opts['page']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['apiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _WorkloadBillingHistoryResponse["default"];
      return this.apiClient.callApi('/billing/billing/history/fine_tuning', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Retrieve Billing History of model evaluation for a specific Billing Cycle
     * User will recieve billing history of fine_tuning for the specified billing cycle.
     * @param {Object} opts Optional parameters
     * @param {String} opts.startDate Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @param {String} opts.endDate Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @param {String} opts.search Search by resource \"Name\" or \"ID\"
     * @param {Number} opts.perPage Number of items to return per page
     * @param {Number} opts.page Page number
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/WorkloadBillingHistoryResponse}
     */
  }, {
    key: "getUserBillingHistoryFineTuning",
    value: function getUserBillingHistoryFineTuning(opts) {
      return this.getUserBillingHistoryFineTuningWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Retrieve Billing History of a Specific Fine Tuning for a specific Billing Cycle
     * Retrieve billing history of a specific Fine tunning for the specified billing cycle. This data will include 'resource_name', 'infrahub_id', 'price_per_hour', 'incurred_bill', 'usage_time', 'non_discounted_price_per_hour', 'non_discounted_bill'.
     * @param {Number} resourceId 
     * @param {Object} opts Optional parameters
     * @param {String} [startDate] Datetime should be formatted in YYYY-MM-DDTHH:MM:SS
     * @param {String} [endDate] Datetime should be formatted in YYYY-MM-DDTHH:MM:SS
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ResourceLevelVolumeBillingDetailsResponseModel} and HTTP response
     */
  }, {
    key: "getUserBillingHistoryFineTuningDetailsWithHttpInfo",
    value: function getUserBillingHistoryFineTuningDetailsWithHttpInfo(resourceId, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'resourceId' is set
      if (resourceId === undefined || resourceId === null) {
        throw new Error("Missing the required parameter 'resourceId' when calling getUserBillingHistoryFineTuningDetails");
      }
      var pathParams = {
        'resource_id': resourceId
      };
      var queryParams = {
        'start_date': opts['startDate'],
        'end_date': opts['endDate']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['apiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ResourceLevelVolumeBillingDetailsResponseModel["default"];
      return this.apiClient.callApi('/billing/billing/history/fine_tuning/{resource_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Retrieve Billing History of a Specific Fine Tuning for a specific Billing Cycle
     * Retrieve billing history of a specific Fine tunning for the specified billing cycle. This data will include 'resource_name', 'infrahub_id', 'price_per_hour', 'incurred_bill', 'usage_time', 'non_discounted_price_per_hour', 'non_discounted_bill'.
     * @param {Number} resourceId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.startDate Datetime should be formatted in YYYY-MM-DDTHH:MM:SS
     * @param {String} opts.endDate Datetime should be formatted in YYYY-MM-DDTHH:MM:SS
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ResourceLevelVolumeBillingDetailsResponseModel}
     */
  }, {
    key: "getUserBillingHistoryFineTuningDetails",
    value: function getUserBillingHistoryFineTuningDetails(resourceId, opts) {
      return this.getUserBillingHistoryFineTuningDetailsWithHttpInfo(resourceId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Retrieve Billing History of model evaluation for a specific Billing Cycle
     * User will recieve billing history of model_evaluation for the specified billing cycle.
     * @param {Object} opts Optional parameters
     * @param {String} [startDate] Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @param {String} [endDate] Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @param {String} [search] Search by resource \"Name\" or \"ID\"
     * @param {Number} [perPage] Number of items to return per page
     * @param {Number} [page] Page number
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TokenBasedBillingHistoryResponse} and HTTP response
     */
  }, {
    key: "getUserBillingHistoryModelEvaluationWithHttpInfo",
    value: function getUserBillingHistoryModelEvaluationWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'start_date': opts['startDate'],
        'end_date': opts['endDate'],
        'search': opts['search'],
        'per_page': opts['perPage'],
        'page': opts['page']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['apiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _TokenBasedBillingHistoryResponse["default"];
      return this.apiClient.callApi('/billing/billing/history/model_evaluation', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Retrieve Billing History of model evaluation for a specific Billing Cycle
     * User will recieve billing history of model_evaluation for the specified billing cycle.
     * @param {Object} opts Optional parameters
     * @param {String} opts.startDate Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @param {String} opts.endDate Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @param {String} opts.search Search by resource \"Name\" or \"ID\"
     * @param {Number} opts.perPage Number of items to return per page
     * @param {Number} opts.page Page number
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TokenBasedBillingHistoryResponse}
     */
  }, {
    key: "getUserBillingHistoryModelEvaluation",
    value: function getUserBillingHistoryModelEvaluation(opts) {
      return this.getUserBillingHistoryModelEvaluationWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Retrieve billing history for a specific Model Evaluation resource. Includes: 'resource_name', 'infrahub_id', 'base_model', 'base_model_display_name', 'lora_adapter', 'incurred_bill', 'non_discounted_bill', 'usage_time', 'input_tokens', 'output_tokens', 'input_tokens_incurred_bill', 'input_tokens_non_discounted_bill', 'output_tokens_incurred_bill', 'output_tokens_non_discounted_bill'
     * @param {Number} resourceId 
     * @param {Object} opts Optional parameters
     * @param {String} [startDate] YYYY-MM-DDTHH:MM:SS
     * @param {String} [endDate] YYYY-MM-DDTHH:MM:SS
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ModelEvaluationBillingHistoryDetailsResponseSchema} and HTTP response
     */
  }, {
    key: "getUserBillingHistoryModelEvaluationDetailsWithHttpInfo",
    value: function getUserBillingHistoryModelEvaluationDetailsWithHttpInfo(resourceId, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'resourceId' is set
      if (resourceId === undefined || resourceId === null) {
        throw new Error("Missing the required parameter 'resourceId' when calling getUserBillingHistoryModelEvaluationDetails");
      }
      var pathParams = {
        'resource_id': resourceId
      };
      var queryParams = {
        'start_date': opts['startDate'],
        'end_date': opts['endDate']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['apiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ModelEvaluationBillingHistoryDetailsResponseSchema["default"];
      return this.apiClient.callApi('/billing/billing/history/model_evaluation/{resource_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Retrieve billing history for a specific Model Evaluation resource. Includes: 'resource_name', 'infrahub_id', 'base_model', 'base_model_display_name', 'lora_adapter', 'incurred_bill', 'non_discounted_bill', 'usage_time', 'input_tokens', 'output_tokens', 'input_tokens_incurred_bill', 'input_tokens_non_discounted_bill', 'output_tokens_incurred_bill', 'output_tokens_non_discounted_bill'
     * @param {Number} resourceId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.startDate YYYY-MM-DDTHH:MM:SS
     * @param {String} opts.endDate YYYY-MM-DDTHH:MM:SS
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ModelEvaluationBillingHistoryDetailsResponseSchema}
     */
  }, {
    key: "getUserBillingHistoryModelEvaluationDetails",
    value: function getUserBillingHistoryModelEvaluationDetails(resourceId, opts) {
      return this.getUserBillingHistoryModelEvaluationDetailsWithHttpInfo(resourceId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Retrieve Billing History of serverless inference for a specific Billing Cycle
     * User will recieve billing history of serverless_inference for the specified billing cycle.
     * @param {Object} opts Optional parameters
     * @param {String} [startDate] Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @param {String} [endDate] Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @param {String} [search] Search by resource \"Name\" or \"ID\"
     * @param {Number} [perPage] Number of items to return per page
     * @param {Number} [page] Page number
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TokenBasedBillingHistoryResponse} and HTTP response
     */
  }, {
    key: "getUserBillingHistoryServerlessInferenceWithHttpInfo",
    value: function getUserBillingHistoryServerlessInferenceWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'start_date': opts['startDate'],
        'end_date': opts['endDate'],
        'search': opts['search'],
        'per_page': opts['perPage'],
        'page': opts['page']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['apiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _TokenBasedBillingHistoryResponse["default"];
      return this.apiClient.callApi('/billing/billing/history/serverless_inference', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Retrieve Billing History of serverless inference for a specific Billing Cycle
     * User will recieve billing history of serverless_inference for the specified billing cycle.
     * @param {Object} opts Optional parameters
     * @param {String} opts.startDate Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @param {String} opts.endDate Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @param {String} opts.search Search by resource \"Name\" or \"ID\"
     * @param {Number} opts.perPage Number of items to return per page
     * @param {Number} opts.page Page number
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TokenBasedBillingHistoryResponse}
     */
  }, {
    key: "getUserBillingHistoryServerlessInference",
    value: function getUserBillingHistoryServerlessInference(opts) {
      return this.getUserBillingHistoryServerlessInferenceWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Retrieve billing history for a specific Serverless Inference resource. Includes: 'resource_name', 'infrahub_id', 'base_model', 'base_model_display_name', 'lora_adapter', 'incurred_bill', 'non_discounted_bill', 'usage_time', 'input_tokens', 'output_tokens', 'input_tokens_incurred_bill', 'input_tokens_non_discounted_bill', 'output_tokens_incurred_bill', 'output_tokens_non_discounted_bill'
     * @param {Number} resourceId 
     * @param {Object} opts Optional parameters
     * @param {String} [startDate] YYYY-MM-DDTHH:MM:SS
     * @param {String} [endDate] YYYY-MM-DDTHH:MM:SS
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ServerlessInferencedBillingHistoryDetailsResponseSchema} and HTTP response
     */
  }, {
    key: "getUserBillingHistoryServerlessInferenceDetailsWithHttpInfo",
    value: function getUserBillingHistoryServerlessInferenceDetailsWithHttpInfo(resourceId, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'resourceId' is set
      if (resourceId === undefined || resourceId === null) {
        throw new Error("Missing the required parameter 'resourceId' when calling getUserBillingHistoryServerlessInferenceDetails");
      }
      var pathParams = {
        'resource_id': resourceId
      };
      var queryParams = {
        'start_date': opts['startDate'],
        'end_date': opts['endDate']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['apiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ServerlessInferencedBillingHistoryDetailsResponseSchema["default"];
      return this.apiClient.callApi('/billing/billing/history/serverless_inference/{resource_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Retrieve billing history for a specific Serverless Inference resource. Includes: 'resource_name', 'infrahub_id', 'base_model', 'base_model_display_name', 'lora_adapter', 'incurred_bill', 'non_discounted_bill', 'usage_time', 'input_tokens', 'output_tokens', 'input_tokens_incurred_bill', 'input_tokens_non_discounted_bill', 'output_tokens_incurred_bill', 'output_tokens_non_discounted_bill'
     * @param {Number} resourceId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.startDate YYYY-MM-DDTHH:MM:SS
     * @param {String} opts.endDate YYYY-MM-DDTHH:MM:SS
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ServerlessInferencedBillingHistoryDetailsResponseSchema}
     */
  }, {
    key: "getUserBillingHistoryServerlessInferenceDetails",
    value: function getUserBillingHistoryServerlessInferenceDetails(resourceId, opts) {
      return this.getUserBillingHistoryServerlessInferenceDetailsWithHttpInfo(resourceId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Retrieve Billing History of Snapshot for a specific Billing Cycle
     * User will recieve billing history of snapshots for thespecified billing cycle. This data will include 'resource_name', 'infrahub_id', 'status', 'incurred_bill', 'usage_time', 'price_per_hour'
     * @param {Object} opts Optional parameters
     * @param {String} [startDate] Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @param {String} [endDate] Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @param {String} [search] Search by resource \"Name\" or \"ID\"
     * @param {Number} [perPage] Number of items to return per page
     * @param {Number} [page] Page number
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ResourceLevelVolumeBillingHistoryResponseModel} and HTTP response
     */
  }, {
    key: "getUserBillingHistorySnapshotWithHttpInfo",
    value: function getUserBillingHistorySnapshotWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'start_date': opts['startDate'],
        'end_date': opts['endDate'],
        'search': opts['search'],
        'per_page': opts['perPage'],
        'page': opts['page']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['apiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ResourceLevelVolumeBillingHistoryResponseModel["default"];
      return this.apiClient.callApi('/billing/billing/history/snapshot', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Retrieve Billing History of Snapshot for a specific Billing Cycle
     * User will recieve billing history of snapshots for thespecified billing cycle. This data will include 'resource_name', 'infrahub_id', 'status', 'incurred_bill', 'usage_time', 'price_per_hour'
     * @param {Object} opts Optional parameters
     * @param {String} opts.startDate Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @param {String} opts.endDate Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @param {String} opts.search Search by resource \"Name\" or \"ID\"
     * @param {Number} opts.perPage Number of items to return per page
     * @param {Number} opts.page Page number
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ResourceLevelVolumeBillingHistoryResponseModel}
     */
  }, {
    key: "getUserBillingHistorySnapshot",
    value: function getUserBillingHistorySnapshot(opts) {
      return this.getUserBillingHistorySnapshotWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Retrieve Billing History of a Specific Snapshot for a specific Billing Cycle
     * Retrieve billing history of a specific Snapshot for the specified billing cycle. This data will include 'resource_name', 'infrahub_id', 'price_per_hour', 'incurred_bill', 'usage_time', 'non_discounted_price_per_hour', 'non_discounted_bill'.
     * @param {Number} snapshotId 
     * @param {Object} opts Optional parameters
     * @param {String} [startDate] Datetime should be formatted in YYYY-MM-DDTHH:MM:SS
     * @param {String} [endDate] Datetime should be formatted in YYYY-MM-DDTHH:MM:SS
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ResourceLevelVolumeBillingDetailsResponseModel} and HTTP response
     */
  }, {
    key: "getUserBillingHistorySnapshotDetailsWithHttpInfo",
    value: function getUserBillingHistorySnapshotDetailsWithHttpInfo(snapshotId, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'snapshotId' is set
      if (snapshotId === undefined || snapshotId === null) {
        throw new Error("Missing the required parameter 'snapshotId' when calling getUserBillingHistorySnapshotDetails");
      }
      var pathParams = {
        'snapshot_id': snapshotId
      };
      var queryParams = {
        'start_date': opts['startDate'],
        'end_date': opts['endDate']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['apiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ResourceLevelVolumeBillingDetailsResponseModel["default"];
      return this.apiClient.callApi('/billing/billing/history/snapshot/{snapshot_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Retrieve Billing History of a Specific Snapshot for a specific Billing Cycle
     * Retrieve billing history of a specific Snapshot for the specified billing cycle. This data will include 'resource_name', 'infrahub_id', 'price_per_hour', 'incurred_bill', 'usage_time', 'non_discounted_price_per_hour', 'non_discounted_bill'.
     * @param {Number} snapshotId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.startDate Datetime should be formatted in YYYY-MM-DDTHH:MM:SS
     * @param {String} opts.endDate Datetime should be formatted in YYYY-MM-DDTHH:MM:SS
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ResourceLevelVolumeBillingDetailsResponseModel}
     */
  }, {
    key: "getUserBillingHistorySnapshotDetails",
    value: function getUserBillingHistorySnapshotDetails(snapshotId, opts) {
      return this.getUserBillingHistorySnapshotDetailsWithHttpInfo(snapshotId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Retrieve Billing History of Virtual Machine for a specific Billing Cycle
     * User will recieve billing history of virtual machine for the specified billing cycle. This data will include 'resource_name', 'infrahub_id', 'status', 'incurred_bill', 'usage_time', 'price_per_hour'
     * @param {Object} opts Optional parameters
     * @param {String} [startDate] Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @param {String} [endDate] Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @param {String} [search] Search by resource \"Name\" or \"ID\"
     * @param {Number} [perPage] Number of items to return per page
     * @param {Number} [page] Page number
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ResourceLevelVmBillingHistoryResponseModel} and HTTP response
     */
  }, {
    key: "getUserBillingHistoryVm2WithHttpInfo",
    value: function getUserBillingHistoryVm2WithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'start_date': opts['startDate'],
        'end_date': opts['endDate'],
        'search': opts['search'],
        'per_page': opts['perPage'],
        'page': opts['page']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['apiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ResourceLevelVmBillingHistoryResponseModel["default"];
      return this.apiClient.callApi('/billing/billing/history/virtual-machine', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Retrieve Billing History of Virtual Machine for a specific Billing Cycle
     * User will recieve billing history of virtual machine for the specified billing cycle. This data will include 'resource_name', 'infrahub_id', 'status', 'incurred_bill', 'usage_time', 'price_per_hour'
     * @param {Object} opts Optional parameters
     * @param {String} opts.startDate Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @param {String} opts.endDate Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @param {String} opts.search Search by resource \"Name\" or \"ID\"
     * @param {Number} opts.perPage Number of items to return per page
     * @param {Number} opts.page Page number
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ResourceLevelVmBillingHistoryResponseModel}
     */
  }, {
    key: "getUserBillingHistoryVm2",
    value: function getUserBillingHistoryVm2(opts) {
      return this.getUserBillingHistoryVm2WithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Retrieve Billing History of a Specific Virtual Machine for a specific Billing Cycle
     * User will recieve billing history of a specific Virtual Machine for the specified billing cycle. This data will include 'resource_name', 'infrahub_id', 'price_per_hour', 'non_discounted_price_per_hour', 'incurred_bill', 'non_discounted_bill', 'usage_time', 'usage_time_ACTIVE', 'usage_time_SHUTOFF', 'usage_time_HIBERNATED'
     * @param {Number} vmId 
     * @param {Object} opts Optional parameters
     * @param {String} [startDate] Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @param {String} [endDate] Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ResourceLevelVMBillingDetailsResponseModel} and HTTP response
     */
  }, {
    key: "getUserBillingHistoryVmDetails2WithHttpInfo",
    value: function getUserBillingHistoryVmDetails2WithHttpInfo(vmId, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'vmId' is set
      if (vmId === undefined || vmId === null) {
        throw new Error("Missing the required parameter 'vmId' when calling getUserBillingHistoryVmDetails2");
      }
      var pathParams = {
        'vm_id': vmId
      };
      var queryParams = {
        'start_date': opts['startDate'],
        'end_date': opts['endDate']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['apiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ResourceLevelVMBillingDetailsResponseModel["default"];
      return this.apiClient.callApi('/billing/billing/history/virtual-machine/{vm_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Retrieve Billing History of a Specific Virtual Machine for a specific Billing Cycle
     * User will recieve billing history of a specific Virtual Machine for the specified billing cycle. This data will include 'resource_name', 'infrahub_id', 'price_per_hour', 'non_discounted_price_per_hour', 'incurred_bill', 'non_discounted_bill', 'usage_time', 'usage_time_ACTIVE', 'usage_time_SHUTOFF', 'usage_time_HIBERNATED'
     * @param {Number} vmId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.startDate Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @param {String} opts.endDate Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ResourceLevelVMBillingDetailsResponseModel}
     */
  }, {
    key: "getUserBillingHistoryVmDetails2",
    value: function getUserBillingHistoryVmDetails2(vmId, opts) {
      return this.getUserBillingHistoryVmDetails2WithHttpInfo(vmId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Retrieve Sub-Resources Historical Cost datapoints of a Virtual
     * User will recieve sub-resources historical cost datapoints for a VM sub resources for a specified billing cycle. This data will include 'incurred_bill' graph datapoints. Machine sub resources for a specific billing cycle
     * @param {Number} vmId 
     * @param {Object} opts Optional parameters
     * @param {String} [startDate] Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @param {String} [endDate] Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SubResourcesGraphResponseModel} and HTTP response
     */
  }, {
    key: "getUserBillingHistoryVmSubResourceGraph2WithHttpInfo",
    value: function getUserBillingHistoryVmSubResourceGraph2WithHttpInfo(vmId, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'vmId' is set
      if (vmId === undefined || vmId === null) {
        throw new Error("Missing the required parameter 'vmId' when calling getUserBillingHistoryVmSubResourceGraph2");
      }
      var pathParams = {
        'vm_id': vmId
      };
      var queryParams = {
        'start_date': opts['startDate'],
        'end_date': opts['endDate']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['apiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _SubResourcesGraphResponseModel["default"];
      return this.apiClient.callApi('/billing/billing/virtual-machine/{vm_id}/sub-resource/graph', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Retrieve Sub-Resources Historical Cost datapoints of a Virtual
     * User will recieve sub-resources historical cost datapoints for a VM sub resources for a specified billing cycle. This data will include 'incurred_bill' graph datapoints. Machine sub resources for a specific billing cycle
     * @param {Number} vmId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.startDate Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @param {String} opts.endDate Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SubResourcesGraphResponseModel}
     */
  }, {
    key: "getUserBillingHistoryVmSubResourceGraph2",
    value: function getUserBillingHistoryVmSubResourceGraph2(vmId, opts) {
      return this.getUserBillingHistoryVmSubResourceGraph2WithHttpInfo(vmId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Retrieve Total Costs and Non Discount Costs for Sub Resources
     * User will get total costs and non_discount costs of sub resources on a specific Virtual Machine for the specified billing cycle. on a Specific VM for the Specified Billing Cycle
     * @param {Number} vmId 
     * @param {Object} opts Optional parameters
     * @param {String} [startDate] Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @param {String} [endDate] Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SubResourcesCostsResponseModel} and HTTP response
     */
  }, {
    key: "getUserBillingHistoryVmTotalCostsWithHttpInfo",
    value: function getUserBillingHistoryVmTotalCostsWithHttpInfo(vmId, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'vmId' is set
      if (vmId === undefined || vmId === null) {
        throw new Error("Missing the required parameter 'vmId' when calling getUserBillingHistoryVmTotalCosts");
      }
      var pathParams = {
        'vm_id': vmId
      };
      var queryParams = {
        'start_date': opts['startDate'],
        'end_date': opts['endDate']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['apiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _SubResourcesCostsResponseModel["default"];
      return this.apiClient.callApi('/billing/billing/virtual-machine/{vm_id}/sub-resource', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Retrieve Total Costs and Non Discount Costs for Sub Resources
     * User will get total costs and non_discount costs of sub resources on a specific Virtual Machine for the specified billing cycle. on a Specific VM for the Specified Billing Cycle
     * @param {Number} vmId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.startDate Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @param {String} opts.endDate Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SubResourcesCostsResponseModel}
     */
  }, {
    key: "getUserBillingHistoryVmTotalCosts",
    value: function getUserBillingHistoryVmTotalCosts(vmId, opts) {
      return this.getUserBillingHistoryVmTotalCostsWithHttpInfo(vmId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Retrieve Billing History of Volume for a specific Billing Cycle
     * User will recieve billing history of volumes for thespecified billing cycle. This data will include 'resource_name', 'infrahub_id', 'status', 'incurred_bill', 'usage_time', 'price_per_hour'
     * @param {Object} opts Optional parameters
     * @param {String} [startDate] Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @param {String} [endDate] Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @param {String} [search] Search by resource \"Name\" or \"ID\"
     * @param {Number} [perPage] Number of items to return per page
     * @param {Number} [page] Page number
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ResourceLevelVolumeBillingHistoryResponseModel} and HTTP response
     */
  }, {
    key: "getUserBillingHistoryVolume2WithHttpInfo",
    value: function getUserBillingHistoryVolume2WithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'start_date': opts['startDate'],
        'end_date': opts['endDate'],
        'search': opts['search'],
        'per_page': opts['perPage'],
        'page': opts['page']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['apiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ResourceLevelVolumeBillingHistoryResponseModel["default"];
      return this.apiClient.callApi('/billing/billing/history/volume', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Retrieve Billing History of Volume for a specific Billing Cycle
     * User will recieve billing history of volumes for thespecified billing cycle. This data will include 'resource_name', 'infrahub_id', 'status', 'incurred_bill', 'usage_time', 'price_per_hour'
     * @param {Object} opts Optional parameters
     * @param {String} opts.startDate Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @param {String} opts.endDate Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @param {String} opts.search Search by resource \"Name\" or \"ID\"
     * @param {Number} opts.perPage Number of items to return per page
     * @param {Number} opts.page Page number
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ResourceLevelVolumeBillingHistoryResponseModel}
     */
  }, {
    key: "getUserBillingHistoryVolume2",
    value: function getUserBillingHistoryVolume2(opts) {
      return this.getUserBillingHistoryVolume2WithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Retrieve Billing History of a Specific Volume for a specific Billing Cycle
     * Retrieve billing history of a specific Volume for the specified billing cycle. This data will include 'resource_name', 'infrahub_id', 'price_per_hour', 'incurred_bill', 'usage_time', 'non_discounted_price_per_hour', 'non_discounted_bill'.
     * @param {Number} volumeId 
     * @param {Object} opts Optional parameters
     * @param {String} [startDate] Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @param {String} [endDate] Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ResourceLevelVolumeBillingDetailsResponseModel} and HTTP response
     */
  }, {
    key: "getUserBillingHistoryVolumeDetails2WithHttpInfo",
    value: function getUserBillingHistoryVolumeDetails2WithHttpInfo(volumeId, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'volumeId' is set
      if (volumeId === undefined || volumeId === null) {
        throw new Error("Missing the required parameter 'volumeId' when calling getUserBillingHistoryVolumeDetails2");
      }
      var pathParams = {
        'volume_id': volumeId
      };
      var queryParams = {
        'start_date': opts['startDate'],
        'end_date': opts['endDate']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['apiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ResourceLevelVolumeBillingDetailsResponseModel["default"];
      return this.apiClient.callApi('/billing/billing/history/volume/{volume_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Retrieve Billing History of a Specific Volume for a specific Billing Cycle
     * Retrieve billing history of a specific Volume for the specified billing cycle. This data will include 'resource_name', 'infrahub_id', 'price_per_hour', 'incurred_bill', 'usage_time', 'non_discounted_price_per_hour', 'non_discounted_bill'.
     * @param {Number} volumeId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.startDate Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @param {String} opts.endDate Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ResourceLevelVolumeBillingDetailsResponseModel}
     */
  }, {
    key: "getUserBillingHistoryVolumeDetails2",
    value: function getUserBillingHistoryVolumeDetails2(volumeId, opts) {
      return this.getUserBillingHistoryVolumeDetails2WithHttpInfo(volumeId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Retrieve hourly cost datapoints of a Specific Model Evaluation for a specific
     * User will receive hourly cost datapoints for a model evaluation for a specified billing cycle. This data will include 'incurred_bill' graph datapoints. billing cycle
     * @param {Number} resourceId 
     * @param {Object} opts Optional parameters
     * @param {String} [startDate] Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @param {String} [endDate] Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ModelEvaluationBillingHistoryDetailsResponseSchema} and HTTP response
     */
  }, {
    key: "getUserBillingModelEvaluationDetailsGraphWithHttpInfo",
    value: function getUserBillingModelEvaluationDetailsGraphWithHttpInfo(resourceId, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'resourceId' is set
      if (resourceId === undefined || resourceId === null) {
        throw new Error("Missing the required parameter 'resourceId' when calling getUserBillingModelEvaluationDetailsGraph");
      }
      var pathParams = {
        'resource_id': resourceId
      };
      var queryParams = {
        'start_date': opts['startDate'],
        'end_date': opts['endDate']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['apiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ModelEvaluationBillingHistoryDetailsResponseSchema["default"];
      return this.apiClient.callApi('/billing/billing/history/model_evaluation/{resource_id}/graph', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Retrieve hourly cost datapoints of a Specific Model Evaluation for a specific
     * User will receive hourly cost datapoints for a model evaluation for a specified billing cycle. This data will include 'incurred_bill' graph datapoints. billing cycle
     * @param {Number} resourceId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.startDate Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @param {String} opts.endDate Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ModelEvaluationBillingHistoryDetailsResponseSchema}
     */
  }, {
    key: "getUserBillingModelEvaluationDetailsGraph",
    value: function getUserBillingModelEvaluationDetailsGraph(resourceId, opts) {
      return this.getUserBillingModelEvaluationDetailsGraphWithHttpInfo(resourceId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Retrieve hourly cost datapoints of a Specific Serverless Inference for a specific
     * User will recieve hourly cost datapoints for a serverles inference for a specified billing cycle. This data will include 'incurred_bill' graph datapoints. billing cycle
     * @param {Number} resourceId 
     * @param {Object} opts Optional parameters
     * @param {String} [startDate] Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @param {String} [endDate] Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ServerlessInferencedBillingHistoryDetailsResponseSchema} and HTTP response
     */
  }, {
    key: "getUserBillingServerlessInferenceDetailsGraphWithHttpInfo",
    value: function getUserBillingServerlessInferenceDetailsGraphWithHttpInfo(resourceId, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'resourceId' is set
      if (resourceId === undefined || resourceId === null) {
        throw new Error("Missing the required parameter 'resourceId' when calling getUserBillingServerlessInferenceDetailsGraph");
      }
      var pathParams = {
        'resource_id': resourceId
      };
      var queryParams = {
        'start_date': opts['startDate'],
        'end_date': opts['endDate']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['apiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ServerlessInferencedBillingHistoryDetailsResponseSchema["default"];
      return this.apiClient.callApi('/billing/billing/history/serverless_inference/{resource_id}/graph', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Retrieve hourly cost datapoints of a Specific Serverless Inference for a specific
     * User will recieve hourly cost datapoints for a serverles inference for a specified billing cycle. This data will include 'incurred_bill' graph datapoints. billing cycle
     * @param {Number} resourceId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.startDate Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @param {String} opts.endDate Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ServerlessInferencedBillingHistoryDetailsResponseSchema}
     */
  }, {
    key: "getUserBillingServerlessInferenceDetailsGraph",
    value: function getUserBillingServerlessInferenceDetailsGraph(resourceId, opts) {
      return this.getUserBillingServerlessInferenceDetailsGraphWithHttpInfo(resourceId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Retrieve hourly cost datapoints of a Specific Snapshot for a specific billing cycle
     * User will recieve hourly cost datapoints for a Snapshot for a specified billing cycle. This data will include 'incurred_bill' graph datapoints.
     * @param {Number} snapshotId 
     * @param {Object} opts Optional parameters
     * @param {String} [startDate] Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @param {String} [endDate] Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ResourceLevelVolumeGraphBillingDetailsResponseModel} and HTTP response
     */
  }, {
    key: "getUserBillingSnapshotDetailsGraphWithHttpInfo",
    value: function getUserBillingSnapshotDetailsGraphWithHttpInfo(snapshotId, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'snapshotId' is set
      if (snapshotId === undefined || snapshotId === null) {
        throw new Error("Missing the required parameter 'snapshotId' when calling getUserBillingSnapshotDetailsGraph");
      }
      var pathParams = {
        'snapshot_id': snapshotId
      };
      var queryParams = {
        'start_date': opts['startDate'],
        'end_date': opts['endDate']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['apiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ResourceLevelVolumeGraphBillingDetailsResponseModel["default"];
      return this.apiClient.callApi('/billing/billing/history/snapshot/{snapshot_id}/graph', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Retrieve hourly cost datapoints of a Specific Snapshot for a specific billing cycle
     * User will recieve hourly cost datapoints for a Snapshot for a specified billing cycle. This data will include 'incurred_bill' graph datapoints.
     * @param {Number} snapshotId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.startDate Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @param {String} opts.endDate Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ResourceLevelVolumeGraphBillingDetailsResponseModel}
     */
  }, {
    key: "getUserBillingSnapshotDetailsGraph",
    value: function getUserBillingSnapshotDetailsGraph(snapshotId, opts) {
      return this.getUserBillingSnapshotDetailsGraphWithHttpInfo(snapshotId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Retrieve hourly cost datapoints of a Specific Virtual Machine for a specific billing cycle
     * User will recieve hourly cost datapoints for a VM for a specified billing cycle. This data will include 'incurred_bill' graph datapoints.
     * @param {Number} vmId 
     * @param {Object} opts Optional parameters
     * @param {String} [startDate] Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @param {String} [endDate] Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ResourceLevelVmGraphBillingDetailsResponseModel} and HTTP response
     */
  }, {
    key: "getUserBillingVmDetailsGraph2WithHttpInfo",
    value: function getUserBillingVmDetailsGraph2WithHttpInfo(vmId, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'vmId' is set
      if (vmId === undefined || vmId === null) {
        throw new Error("Missing the required parameter 'vmId' when calling getUserBillingVmDetailsGraph2");
      }
      var pathParams = {
        'vm_id': vmId
      };
      var queryParams = {
        'start_date': opts['startDate'],
        'end_date': opts['endDate']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['apiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ResourceLevelVmGraphBillingDetailsResponseModel["default"];
      return this.apiClient.callApi('/billing/billing/history/virtual-machine/{vm_id}/graph', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Retrieve hourly cost datapoints of a Specific Virtual Machine for a specific billing cycle
     * User will recieve hourly cost datapoints for a VM for a specified billing cycle. This data will include 'incurred_bill' graph datapoints.
     * @param {Number} vmId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.startDate Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @param {String} opts.endDate Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ResourceLevelVmGraphBillingDetailsResponseModel}
     */
  }, {
    key: "getUserBillingVmDetailsGraph2",
    value: function getUserBillingVmDetailsGraph2(vmId, opts) {
      return this.getUserBillingVmDetailsGraph2WithHttpInfo(vmId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Retrieve hourly cost datapoints of a Specific Volume for a specific billing cycle
     * User will recieve hourly cost datapoints for a Volume for a specified billing cycle. This data will include 'incurred_bill' graph datapoints.
     * @param {Number} volumeId 
     * @param {Object} opts Optional parameters
     * @param {String} [startDate] Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @param {String} [endDate] Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ResourceLevelVolumeGraphBillingDetailsResponseModel} and HTTP response
     */
  }, {
    key: "getUserBillingVolumeDetailsGraphWithHttpInfo",
    value: function getUserBillingVolumeDetailsGraphWithHttpInfo(volumeId, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'volumeId' is set
      if (volumeId === undefined || volumeId === null) {
        throw new Error("Missing the required parameter 'volumeId' when calling getUserBillingVolumeDetailsGraph");
      }
      var pathParams = {
        'volume_id': volumeId
      };
      var queryParams = {
        'start_date': opts['startDate'],
        'end_date': opts['endDate']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['apiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ResourceLevelVolumeGraphBillingDetailsResponseModel["default"];
      return this.apiClient.callApi('/billing/billing/history/volume/{volume_id}/graph', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Retrieve hourly cost datapoints of a Specific Volume for a specific billing cycle
     * User will recieve hourly cost datapoints for a Volume for a specified billing cycle. This data will include 'incurred_bill' graph datapoints.
     * @param {Number} volumeId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.startDate Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @param {String} opts.endDate Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ResourceLevelVolumeGraphBillingDetailsResponseModel}
     */
  }, {
    key: "getUserBillingVolumeDetailsGraph",
    value: function getUserBillingVolumeDetailsGraph(volumeId, opts) {
      return this.getUserBillingVolumeDetailsGraphWithHttpInfo(volumeId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Retrieve VM billing events history
     * User will receive vm billing events history
     * @param {Number} vmId 
     * @param {Object} opts Optional parameters
     * @param {String} [startDate] Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @param {String} [endDate] Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ResourceBillingEventsHistoryResponse} and HTTP response
     */
  }, {
    key: "getUserVmBillingEventsWithHttpInfo",
    value: function getUserVmBillingEventsWithHttpInfo(vmId, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'vmId' is set
      if (vmId === undefined || vmId === null) {
        throw new Error("Missing the required parameter 'vmId' when calling getUserVmBillingEvents");
      }
      var pathParams = {
        'vm_id': vmId
      };
      var queryParams = {
        'start_date': opts['startDate'],
        'end_date': opts['endDate']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['apiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ResourceBillingEventsHistoryResponse["default"];
      return this.apiClient.callApi('/billing/billing/virtual-machine/{vm_id}/billing-events', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Retrieve VM billing events history
     * User will receive vm billing events history
     * @param {Number} vmId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.startDate Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @param {String} opts.endDate Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ResourceBillingEventsHistoryResponse}
     */
  }, {
    key: "getUserVmBillingEvents",
    value: function getUserVmBillingEvents(vmId, opts) {
      return this.getUserVmBillingEventsWithHttpInfo(vmId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Retrieve Volume billing events history
     * User will receive volume billing events history
     * @param {Number} volumeId 
     * @param {Object} opts Optional parameters
     * @param {String} [startDate] Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @param {String} [endDate] Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ResourceBillingEventsHistoryResponse} and HTTP response
     */
  }, {
    key: "getUserVolumeBillingEventsWithHttpInfo",
    value: function getUserVolumeBillingEventsWithHttpInfo(volumeId, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'volumeId' is set
      if (volumeId === undefined || volumeId === null) {
        throw new Error("Missing the required parameter 'volumeId' when calling getUserVolumeBillingEvents");
      }
      var pathParams = {
        'volume_id': volumeId
      };
      var queryParams = {
        'start_date': opts['startDate'],
        'end_date': opts['endDate']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['apiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ResourceBillingEventsHistoryResponse["default"];
      return this.apiClient.callApi('/billing/billing/volume/{volume_id}/billing-events', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Retrieve Volume billing events history
     * User will receive volume billing events history
     * @param {Number} volumeId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.startDate Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @param {String} opts.endDate Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ResourceBillingEventsHistoryResponse}
     */
  }, {
    key: "getUserVolumeBillingEvents",
    value: function getUserVolumeBillingEvents(volumeId, opts) {
      return this.getUserVolumeBillingEventsWithHttpInfo(volumeId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Update: Subscribe or Unsubscribe Notification Threshold
     * By default, you are subscribed to all the threshold values and you will be receiving the email notification for these default thresholds values. `false` indicates that the user will no longer receive notifications for this specific threshold, whereas `true` signifies that the user will receive notification emails.
     * @param {Number} thresholdId 
     * @param {module:model/SubscribeOrUnsubscribeUpdatePayload} payload 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OrganizationThresholdUpdateResponse} and HTTP response
     */
  }, {
    key: "putOrganizationThresholdWithHttpInfo",
    value: function putOrganizationThresholdWithHttpInfo(thresholdId, payload) {
      var postBody = payload;
      // verify the required parameter 'thresholdId' is set
      if (thresholdId === undefined || thresholdId === null) {
        throw new Error("Missing the required parameter 'thresholdId' when calling putOrganizationThreshold");
      }
      // verify the required parameter 'payload' is set
      if (payload === undefined || payload === null) {
        throw new Error("Missing the required parameter 'payload' when calling putOrganizationThreshold");
      }
      var pathParams = {
        'threshold_id': thresholdId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['apiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _OrganizationThresholdUpdateResponse["default"];
      return this.apiClient.callApi('/billing/billing/threshold/{threshold_id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Update: Subscribe or Unsubscribe Notification Threshold
     * By default, you are subscribed to all the threshold values and you will be receiving the email notification for these default thresholds values. `false` indicates that the user will no longer receive notifications for this specific threshold, whereas `true` signifies that the user will receive notification emails.
     * @param {Number} thresholdId 
     * @param {module:model/SubscribeOrUnsubscribeUpdatePayload} payload 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OrganizationThresholdUpdateResponse}
     */
  }, {
    key: "putOrganizationThreshold",
    value: function putOrganizationThreshold(thresholdId, payload) {
      return this.putOrganizationThresholdWithHttpInfo(thresholdId, payload).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);
}();
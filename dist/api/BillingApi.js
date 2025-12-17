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
* @version v1.46.4-alpha
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
   * Retrieve hourly cost datapoints of a Specific Bucket for a specific billing cycle
   * User will receive hourly cost datapoints for a Bucket for a specified billing cycle. This data will include 'incurred_bill' graph datapoints.
   * @param {Number} bucketId 
   * @param {Object} opts Optional parameters
   * @param {String} [startDate] Date should be formatted in YYYY-MM-DDTHH:MM:SS
   * @param {String} [endDate] Date should be formatted in YYYY-MM-DDTHH:MM:SS
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ResourceLevelGraphBillingDetailsBucket} and HTTP response
   */
  return _createClass(BillingApi, [{
    key: "bucketsBillingHistoryHourlyChartWithHttpInfo",
    value: function bucketsBillingHistoryHourlyChartWithHttpInfo(bucketId, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'bucketId' is set
      if (bucketId === undefined || bucketId === null) {
        throw new Error("Missing the required parameter 'bucketId' when calling bucketsBillingHistoryHourlyChart");
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
     * User will receive hourly cost datapoints for a Bucket for a specified billing cycle. This data will include 'incurred_bill' graph datapoints.
     * @param {Number} bucketId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.startDate Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @param {String} opts.endDate Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ResourceLevelGraphBillingDetailsBucket}
     */
  }, {
    key: "bucketsBillingHistoryHourlyChart",
    value: function bucketsBillingHistoryHourlyChart(bucketId, opts) {
      return this.bucketsBillingHistoryHourlyChartWithHttpInfo(bucketId, opts).then(function (response_and_data) {
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
    key: "getBucketBillingHistoryWithHttpInfo",
    value: function getBucketBillingHistoryWithHttpInfo(bucketId, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'bucketId' is set
      if (bucketId === undefined || bucketId === null) {
        throw new Error("Missing the required parameter 'bucketId' when calling getBucketBillingHistory");
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
    key: "getBucketBillingHistory",
    value: function getBucketBillingHistory(bucketId, opts) {
      return this.getBucketBillingHistoryWithHttpInfo(bucketId, opts).then(function (response_and_data) {
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
    key: "getClusterBillingHistoryWithHttpInfo",
    value: function getClusterBillingHistoryWithHttpInfo(clusterId, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'clusterId' is set
      if (clusterId === undefined || clusterId === null) {
        throw new Error("Missing the required parameter 'clusterId' when calling getClusterBillingHistory");
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
    key: "getClusterBillingHistory",
    value: function getClusterBillingHistory(clusterId, opts) {
      return this.getClusterBillingHistoryWithHttpInfo(clusterId, opts).then(function (response_and_data) {
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
    key: "getClusterBillingHistoryGraphWithHttpInfo",
    value: function getClusterBillingHistoryGraphWithHttpInfo(clusterId, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'clusterId' is set
      if (clusterId === undefined || clusterId === null) {
        throw new Error("Missing the required parameter 'clusterId' when calling getClusterBillingHistoryGraph");
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
    key: "getClusterBillingHistoryGraph",
    value: function getClusterBillingHistoryGraph(clusterId, opts) {
      return this.getClusterBillingHistoryGraphWithHttpInfo(clusterId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Retrieve Billing History of data synthesis for a specific Billing Cycle
     * User will receive billing history of data_synthesis for the specified billing cycle.
     * @param {Object} opts Optional parameters
     * @param {String} [startDate] Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @param {String} [endDate] Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @param {String} [search] Search by resource \"Name\" or \"ID\"
     * @param {Number} [perPage] Number of items to return per page
     * @param {Number} [page] Page number
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TokenBasedBillingHistoryResponse} and HTTP response
     */
  }, {
    key: "getDataSynthesisBillingHistoryWithHttpInfo",
    value: function getDataSynthesisBillingHistoryWithHttpInfo(opts) {
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
     * User will receive billing history of data_synthesis for the specified billing cycle.
     * @param {Object} opts Optional parameters
     * @param {String} opts.startDate Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @param {String} opts.endDate Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @param {String} opts.search Search by resource \"Name\" or \"ID\"
     * @param {Number} opts.perPage Number of items to return per page
     * @param {Number} opts.page Page number
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TokenBasedBillingHistoryResponse}
     */
  }, {
    key: "getDataSynthesisBillingHistory",
    value: function getDataSynthesisBillingHistory(opts) {
      return this.getDataSynthesisBillingHistoryWithHttpInfo(opts).then(function (response_and_data) {
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
    key: "getDataSynthesisBillingHistoryGraphWithHttpInfo",
    value: function getDataSynthesisBillingHistoryGraphWithHttpInfo(resourceId, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'resourceId' is set
      if (resourceId === undefined || resourceId === null) {
        throw new Error("Missing the required parameter 'resourceId' when calling getDataSynthesisBillingHistoryGraph");
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
    key: "getDataSynthesisBillingHistoryGraph",
    value: function getDataSynthesisBillingHistoryGraph(resourceId, opts) {
      return this.getDataSynthesisBillingHistoryGraphWithHttpInfo(resourceId, opts).then(function (response_and_data) {
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
    key: "getDataSynthesisHistoryForResourceWithHttpInfo",
    value: function getDataSynthesisHistoryForResourceWithHttpInfo(resourceId, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'resourceId' is set
      if (resourceId === undefined || resourceId === null) {
        throw new Error("Missing the required parameter 'resourceId' when calling getDataSynthesisHistoryForResource");
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
    key: "getDataSynthesisHistoryForResource",
    value: function getDataSynthesisHistoryForResource(resourceId, opts) {
      return this.getDataSynthesisHistoryForResourceWithHttpInfo(resourceId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Retrieve Billing History of model evaluation for a specific Billing Cycle
     * User will receive billing history of fine_tuning for the specified billing cycle.
     * @param {Object} opts Optional parameters
     * @param {String} [startDate] Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @param {String} [endDate] Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @param {String} [search] Search by resource \"Name\" or \"ID\"
     * @param {Number} [perPage] Number of items to return per page
     * @param {Number} [page] Page number
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/WorkloadBillingHistoryResponse} and HTTP response
     */
  }, {
    key: "getFineTuningBillingHistoryWithHttpInfo",
    value: function getFineTuningBillingHistoryWithHttpInfo(opts) {
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
     * User will receive billing history of fine_tuning for the specified billing cycle.
     * @param {Object} opts Optional parameters
     * @param {String} opts.startDate Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @param {String} opts.endDate Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @param {String} opts.search Search by resource \"Name\" or \"ID\"
     * @param {Number} opts.perPage Number of items to return per page
     * @param {Number} opts.page Page number
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/WorkloadBillingHistoryResponse}
     */
  }, {
    key: "getFineTuningBillingHistory",
    value: function getFineTuningBillingHistory(opts) {
      return this.getFineTuningBillingHistoryWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Retrieve hourly cost datapoints of a Specific Fine Tuning for a specific billing cycle
     * User will receive hourly cost datapoints for a Fine Tunings for a specified billing cycle. This data will include 'incurred_bill' graph datapoints.
     * @param {Number} resourceId 
     * @param {Object} opts Optional parameters
     * @param {String} [startDate] Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @param {String} [endDate] Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ResourceLevelVolumeGraphBillingDetailsResponseModel} and HTTP response
     */
  }, {
    key: "getFineTuningBillingHistoryGraphWithHttpInfo",
    value: function getFineTuningBillingHistoryGraphWithHttpInfo(resourceId, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'resourceId' is set
      if (resourceId === undefined || resourceId === null) {
        throw new Error("Missing the required parameter 'resourceId' when calling getFineTuningBillingHistoryGraph");
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
     * User will receive hourly cost datapoints for a Fine Tunings for a specified billing cycle. This data will include 'incurred_bill' graph datapoints.
     * @param {Number} resourceId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.startDate Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @param {String} opts.endDate Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ResourceLevelVolumeGraphBillingDetailsResponseModel}
     */
  }, {
    key: "getFineTuningBillingHistoryGraph",
    value: function getFineTuningBillingHistoryGraph(resourceId, opts) {
      return this.getFineTuningBillingHistoryGraphWithHttpInfo(resourceId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * GET: Last Day Cost
     * Retrieve the previous day's costs for instances, volumes, and clusters. Returns a breakdown of  the costs and the total cost for the last day. For additional information on Retrieve Previous Day Usage Costs, [**click here**](None/docs/api-reference/billing-resources/last-day-usage/)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LastDayCostResponse} and HTTP response
     */
  }, {
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
     * Retrieve Billing History of model evaluation for a specific Billing Cycle
     * User will receive billing history of model_evaluation for the specified billing cycle.
     * @param {Object} opts Optional parameters
     * @param {String} [startDate] Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @param {String} [endDate] Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @param {String} [search] Search by resource \"Name\" or \"ID\"
     * @param {Number} [perPage] Number of items to return per page
     * @param {Number} [page] Page number
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TokenBasedBillingHistoryResponse} and HTTP response
     */
  }, {
    key: "getModelEvaluationBillingHistoryWithHttpInfo",
    value: function getModelEvaluationBillingHistoryWithHttpInfo(opts) {
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
     * User will receive billing history of model_evaluation for the specified billing cycle.
     * @param {Object} opts Optional parameters
     * @param {String} opts.startDate Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @param {String} opts.endDate Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @param {String} opts.search Search by resource \"Name\" or \"ID\"
     * @param {Number} opts.perPage Number of items to return per page
     * @param {Number} opts.page Page number
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TokenBasedBillingHistoryResponse}
     */
  }, {
    key: "getModelEvaluationBillingHistory",
    value: function getModelEvaluationBillingHistory(opts) {
      return this.getModelEvaluationBillingHistoryWithHttpInfo(opts).then(function (response_and_data) {
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
    key: "getModelEvaluationBillingHistoryGraphWithHttpInfo",
    value: function getModelEvaluationBillingHistoryGraphWithHttpInfo(resourceId, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'resourceId' is set
      if (resourceId === undefined || resourceId === null) {
        throw new Error("Missing the required parameter 'resourceId' when calling getModelEvaluationBillingHistoryGraph");
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
    key: "getModelEvaluationBillingHistoryGraph",
    value: function getModelEvaluationBillingHistoryGraph(resourceId, opts) {
      return this.getModelEvaluationBillingHistoryGraphWithHttpInfo(resourceId, opts).then(function (response_and_data) {
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
    key: "getNotificationThresholdWithHttpInfo",
    value: function getNotificationThresholdWithHttpInfo(thresholdId, payload) {
      var postBody = payload;
      // verify the required parameter 'thresholdId' is set
      if (thresholdId === undefined || thresholdId === null) {
        throw new Error("Missing the required parameter 'thresholdId' when calling getNotificationThreshold");
      }
      // verify the required parameter 'payload' is set
      if (payload === undefined || payload === null) {
        throw new Error("Missing the required parameter 'payload' when calling getNotificationThreshold");
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
    key: "getNotificationThreshold",
    value: function getNotificationThreshold(thresholdId, payload) {
      return this.getNotificationThresholdWithHttpInfo(thresholdId, payload).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Retrieve Billing History of a Specific Fine Tuning for a specific Billing Cycle
     * Retrieve billing history of a specific Fine tuning for the specified billing cycle. This data will include 'resource_name', 'infrahub_id', 'price_per_hour', 'incurred_bill', 'usage_time', 'non_discounted_price_per_hour', 'non_discounted_bill'.
     * @param {Number} resourceId 
     * @param {Object} opts Optional parameters
     * @param {String} [startDate] Datetime should be formatted in YYYY-MM-DDTHH:MM:SS
     * @param {String} [endDate] Datetime should be formatted in YYYY-MM-DDTHH:MM:SS
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ResourceLevelVolumeBillingDetailsResponseModel} and HTTP response
     */
  }, {
    key: "getResourceFineTuningBillingHistoryWithHttpInfo",
    value: function getResourceFineTuningBillingHistoryWithHttpInfo(resourceId, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'resourceId' is set
      if (resourceId === undefined || resourceId === null) {
        throw new Error("Missing the required parameter 'resourceId' when calling getResourceFineTuningBillingHistory");
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
     * Retrieve billing history of a specific Fine tuning for the specified billing cycle. This data will include 'resource_name', 'infrahub_id', 'price_per_hour', 'incurred_bill', 'usage_time', 'non_discounted_price_per_hour', 'non_discounted_bill'.
     * @param {Number} resourceId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.startDate Datetime should be formatted in YYYY-MM-DDTHH:MM:SS
     * @param {String} opts.endDate Datetime should be formatted in YYYY-MM-DDTHH:MM:SS
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ResourceLevelVolumeBillingDetailsResponseModel}
     */
  }, {
    key: "getResourceFineTuningBillingHistory",
    value: function getResourceFineTuningBillingHistory(resourceId, opts) {
      return this.getResourceFineTuningBillingHistoryWithHttpInfo(resourceId, opts).then(function (response_and_data) {
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
    key: "getResourceModelEvaluationBillingHistoryWithHttpInfo",
    value: function getResourceModelEvaluationBillingHistoryWithHttpInfo(resourceId, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'resourceId' is set
      if (resourceId === undefined || resourceId === null) {
        throw new Error("Missing the required parameter 'resourceId' when calling getResourceModelEvaluationBillingHistory");
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
    key: "getResourceModelEvaluationBillingHistory",
    value: function getResourceModelEvaluationBillingHistory(resourceId, opts) {
      return this.getResourceModelEvaluationBillingHistoryWithHttpInfo(resourceId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Retrieve hourly cost datapoints of a Specific Serverless Inference for a specific
     * User will receive hourly cost datapoints for a serverless inference for a specified billing cycle. This data will include 'incurred_bill' graph datapoints. billing cycle
     * @param {Number} resourceId 
     * @param {Object} opts Optional parameters
     * @param {String} [startDate] Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @param {String} [endDate] Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ServerlessInferencedBillingHistoryDetailsResponseSchema} and HTTP response
     */
  }, {
    key: "getServerlessInferenceBillingHistoryGraphWithHttpInfo",
    value: function getServerlessInferenceBillingHistoryGraphWithHttpInfo(resourceId, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'resourceId' is set
      if (resourceId === undefined || resourceId === null) {
        throw new Error("Missing the required parameter 'resourceId' when calling getServerlessInferenceBillingHistoryGraph");
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
     * User will receive hourly cost datapoints for a serverless inference for a specified billing cycle. This data will include 'incurred_bill' graph datapoints. billing cycle
     * @param {Number} resourceId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.startDate Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @param {String} opts.endDate Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ServerlessInferencedBillingHistoryDetailsResponseSchema}
     */
  }, {
    key: "getServerlessInferenceBillingHistoryGraph",
    value: function getServerlessInferenceBillingHistoryGraph(resourceId, opts) {
      return this.getServerlessInferenceBillingHistoryGraphWithHttpInfo(resourceId, opts).then(function (response_and_data) {
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
    key: "getServerlessInferencesBillingHistoryWithHttpInfo",
    value: function getServerlessInferencesBillingHistoryWithHttpInfo(resourceId, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'resourceId' is set
      if (resourceId === undefined || resourceId === null) {
        throw new Error("Missing the required parameter 'resourceId' when calling getServerlessInferencesBillingHistory");
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
    key: "getServerlessInferencesBillingHistory",
    value: function getServerlessInferencesBillingHistory(resourceId, opts) {
      return this.getServerlessInferencesBillingHistoryWithHttpInfo(resourceId, opts).then(function (response_and_data) {
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
    key: "getSnapshotBillingHistoryWithHttpInfo",
    value: function getSnapshotBillingHistoryWithHttpInfo(snapshotId, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'snapshotId' is set
      if (snapshotId === undefined || snapshotId === null) {
        throw new Error("Missing the required parameter 'snapshotId' when calling getSnapshotBillingHistory");
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
    key: "getSnapshotBillingHistory",
    value: function getSnapshotBillingHistory(snapshotId, opts) {
      return this.getSnapshotBillingHistoryWithHttpInfo(snapshotId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Retrieve hourly cost datapoints of a Specific Snapshot for a specific billing cycle
     * User will receive hourly cost datapoints for a Snapshot for a specified billing cycle. This data will include 'incurred_bill' graph datapoints.
     * @param {Number} snapshotId 
     * @param {Object} opts Optional parameters
     * @param {String} [startDate] Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @param {String} [endDate] Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ResourceLevelVolumeGraphBillingDetailsResponseModel} and HTTP response
     */
  }, {
    key: "getSnapshotBillingHistoryGraphWithHttpInfo",
    value: function getSnapshotBillingHistoryGraphWithHttpInfo(snapshotId, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'snapshotId' is set
      if (snapshotId === undefined || snapshotId === null) {
        throw new Error("Missing the required parameter 'snapshotId' when calling getSnapshotBillingHistoryGraph");
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
     * User will receive hourly cost datapoints for a Snapshot for a specified billing cycle. This data will include 'incurred_bill' graph datapoints.
     * @param {Number} snapshotId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.startDate Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @param {String} opts.endDate Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ResourceLevelVolumeGraphBillingDetailsResponseModel}
     */
  }, {
    key: "getSnapshotBillingHistoryGraph",
    value: function getSnapshotBillingHistoryGraph(snapshotId, opts) {
      return this.getSnapshotBillingHistoryGraphWithHttpInfo(snapshotId, opts).then(function (response_and_data) {
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
    key: "getUsageWithHttpInfo",
    value: function getUsageWithHttpInfo(opts) {
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
    key: "getUsage",
    value: function getUsage(opts) {
      return this.getUsageWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Retrieve Billing History for a specific Billing Cycle
     * User will receive billing history for the specified billing cycle. This data will include 'incurred_bill', 'non_discounted_bill', 'vm_cost', 'volume_cost'
     * @param {Object} opts Optional parameters
     * @param {String} [startDate] Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @param {String} [endDate] Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @param {String} [graph] Set this value to \"true\" for getting graph value
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OrganizationLevelBillingHistoryResponseModel} and HTTP response
     */
  }, {
    key: "getUserBillingHistoryWithHttpInfo",
    value: function getUserBillingHistoryWithHttpInfo(opts) {
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
     * User will receive billing history for the specified billing cycle. This data will include 'incurred_bill', 'non_discounted_bill', 'vm_cost', 'volume_cost'
     * @param {Object} opts Optional parameters
     * @param {String} opts.startDate Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @param {String} opts.endDate Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @param {String} opts.graph Set this value to \"true\" for getting graph value
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OrganizationLevelBillingHistoryResponseModel}
     */
  }, {
    key: "getUserBillingHistory",
    value: function getUserBillingHistory(opts) {
      return this.getUserBillingHistoryWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Retrieve Billing History of a Specific Virtual Machine for a specific Billing Cycle
     * User will receive billing history of a specific Virtual Machine for the specified billing cycle. This data will include 'resource_name', 'infrahub_id', 'price_per_hour', 'non_discounted_price_per_hour', 'incurred_bill', 'non_discounted_bill', 'usage_time', 'usage_time_ACTIVE', 'usage_time_SHUTOFF', 'usage_time_HIBERNATED'
     * @param {Number} vmId 
     * @param {Object} opts Optional parameters
     * @param {String} [startDate] Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @param {String} [endDate] Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ResourceLevelVMBillingDetailsResponseModel} and HTTP response
     */
  }, {
    key: "getVMBillingDetailsWithHttpInfo",
    value: function getVMBillingDetailsWithHttpInfo(vmId, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'vmId' is set
      if (vmId === undefined || vmId === null) {
        throw new Error("Missing the required parameter 'vmId' when calling getVMBillingDetails");
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
     * User will receive billing history of a specific Virtual Machine for the specified billing cycle. This data will include 'resource_name', 'infrahub_id', 'price_per_hour', 'non_discounted_price_per_hour', 'incurred_bill', 'non_discounted_bill', 'usage_time', 'usage_time_ACTIVE', 'usage_time_SHUTOFF', 'usage_time_HIBERNATED'
     * @param {Number} vmId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.startDate Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @param {String} opts.endDate Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ResourceLevelVMBillingDetailsResponseModel}
     */
  }, {
    key: "getVMBillingDetails",
    value: function getVMBillingDetails(vmId, opts) {
      return this.getVMBillingDetailsWithHttpInfo(vmId, opts).then(function (response_and_data) {
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
    key: "getVMBillingEventsWithHttpInfo",
    value: function getVMBillingEventsWithHttpInfo(vmId, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'vmId' is set
      if (vmId === undefined || vmId === null) {
        throw new Error("Missing the required parameter 'vmId' when calling getVMBillingEvents");
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
    key: "getVMBillingEvents",
    value: function getVMBillingEvents(vmId, opts) {
      return this.getVMBillingEventsWithHttpInfo(vmId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Retrieve hourly cost datapoints of a Specific Virtual Machine for a specific billing cycle
     * User will receive hourly cost datapoints for a VM for a specified billing cycle. This data will include 'incurred_bill' graph datapoints.
     * @param {Number} vmId 
     * @param {Object} opts Optional parameters
     * @param {String} [startDate] Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @param {String} [endDate] Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ResourceLevelVmGraphBillingDetailsResponseModel} and HTTP response
     */
  }, {
    key: "getVMBillingGraphWithHttpInfo",
    value: function getVMBillingGraphWithHttpInfo(vmId, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'vmId' is set
      if (vmId === undefined || vmId === null) {
        throw new Error("Missing the required parameter 'vmId' when calling getVMBillingGraph");
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
     * User will receive hourly cost datapoints for a VM for a specified billing cycle. This data will include 'incurred_bill' graph datapoints.
     * @param {Number} vmId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.startDate Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @param {String} opts.endDate Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ResourceLevelVmGraphBillingDetailsResponseModel}
     */
  }, {
    key: "getVMBillingGraph",
    value: function getVMBillingGraph(vmId, opts) {
      return this.getVMBillingGraphWithHttpInfo(vmId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Retrieve Billing History of Virtual Machine for a specific Billing Cycle
     * User will receive billing history of virtual machine for the specified billing cycle. This data will include 'resource_name', 'infrahub_id', 'status', 'incurred_bill', 'usage_time', 'price_per_hour'
     * @param {Object} opts Optional parameters
     * @param {String} [startDate] Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @param {String} [endDate] Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @param {String} [search] Search by resource \"Name\" or \"ID\"
     * @param {Number} [perPage] Number of items to return per page
     * @param {Number} [page] Page number
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ResourceLevelVmBillingHistoryResponseModel} and HTTP response
     */
  }, {
    key: "getVMBillingHistoryWithHttpInfo",
    value: function getVMBillingHistoryWithHttpInfo(opts) {
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
     * User will receive billing history of virtual machine for the specified billing cycle. This data will include 'resource_name', 'infrahub_id', 'status', 'incurred_bill', 'usage_time', 'price_per_hour'
     * @param {Object} opts Optional parameters
     * @param {String} opts.startDate Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @param {String} opts.endDate Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @param {String} opts.search Search by resource \"Name\" or \"ID\"
     * @param {Number} opts.perPage Number of items to return per page
     * @param {Number} opts.page Page number
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ResourceLevelVmBillingHistoryResponseModel}
     */
  }, {
    key: "getVMBillingHistory",
    value: function getVMBillingHistory(opts) {
      return this.getVMBillingHistoryWithHttpInfo(opts).then(function (response_and_data) {
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
    key: "getVMSubResourceCostsWithHttpInfo",
    value: function getVMSubResourceCostsWithHttpInfo(vmId, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'vmId' is set
      if (vmId === undefined || vmId === null) {
        throw new Error("Missing the required parameter 'vmId' when calling getVMSubResourceCosts");
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
    key: "getVMSubResourceCosts",
    value: function getVMSubResourceCosts(vmId, opts) {
      return this.getVMSubResourceCostsWithHttpInfo(vmId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Retrieve Sub-Resources Historical Cost datapoints of a Virtual
     * User will receive sub-resources historical cost datapoints for a VM sub resources for a specified billing cycle. This data will include 'incurred_bill' graph datapoints. Machine sub resources for a specific billing cycle
     * @param {Number} vmId 
     * @param {Object} opts Optional parameters
     * @param {String} [startDate] Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @param {String} [endDate] Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SubResourcesGraphResponseModel} and HTTP response
     */
  }, {
    key: "getVMSubResourceGraphWithHttpInfo",
    value: function getVMSubResourceGraphWithHttpInfo(vmId, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'vmId' is set
      if (vmId === undefined || vmId === null) {
        throw new Error("Missing the required parameter 'vmId' when calling getVMSubResourceGraph");
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
     * User will receive sub-resources historical cost datapoints for a VM sub resources for a specified billing cycle. This data will include 'incurred_bill' graph datapoints. Machine sub resources for a specific billing cycle
     * @param {Number} vmId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.startDate Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @param {String} opts.endDate Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SubResourcesGraphResponseModel}
     */
  }, {
    key: "getVMSubResourceGraph",
    value: function getVMSubResourceGraph(vmId, opts) {
      return this.getVMSubResourceGraphWithHttpInfo(vmId, opts).then(function (response_and_data) {
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
    key: "getVolumeBillingDetailsWithHttpInfo",
    value: function getVolumeBillingDetailsWithHttpInfo(volumeId, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'volumeId' is set
      if (volumeId === undefined || volumeId === null) {
        throw new Error("Missing the required parameter 'volumeId' when calling getVolumeBillingDetails");
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
    key: "getVolumeBillingDetails",
    value: function getVolumeBillingDetails(volumeId, opts) {
      return this.getVolumeBillingDetailsWithHttpInfo(volumeId, opts).then(function (response_and_data) {
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
    key: "getVolumeBillingEventsWithHttpInfo",
    value: function getVolumeBillingEventsWithHttpInfo(volumeId, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'volumeId' is set
      if (volumeId === undefined || volumeId === null) {
        throw new Error("Missing the required parameter 'volumeId' when calling getVolumeBillingEvents");
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
    key: "getVolumeBillingEvents",
    value: function getVolumeBillingEvents(volumeId, opts) {
      return this.getVolumeBillingEventsWithHttpInfo(volumeId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Retrieve Billing History of Volume for a specific Billing Cycle
     * User will receive billing history of volumes for thespecified billing cycle. This data will include 'resource_name', 'infrahub_id', 'status', 'incurred_bill', 'usage_time', 'price_per_hour'
     * @param {Object} opts Optional parameters
     * @param {String} [startDate] Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @param {String} [endDate] Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @param {String} [search] Search by resource \"Name\" or \"ID\"
     * @param {Number} [perPage] Number of items to return per page
     * @param {Number} [page] Page number
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ResourceLevelVolumeBillingHistoryResponseModel} and HTTP response
     */
  }, {
    key: "getVolumeBillingHistoryWithHttpInfo",
    value: function getVolumeBillingHistoryWithHttpInfo(opts) {
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
     * User will receive billing history of volumes for thespecified billing cycle. This data will include 'resource_name', 'infrahub_id', 'status', 'incurred_bill', 'usage_time', 'price_per_hour'
     * @param {Object} opts Optional parameters
     * @param {String} opts.startDate Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @param {String} opts.endDate Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @param {String} opts.search Search by resource \"Name\" or \"ID\"
     * @param {Number} opts.perPage Number of items to return per page
     * @param {Number} opts.page Page number
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ResourceLevelVolumeBillingHistoryResponseModel}
     */
  }, {
    key: "getVolumeBillingHistory",
    value: function getVolumeBillingHistory(opts) {
      return this.getVolumeBillingHistoryWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Retrieve hourly cost datapoints of a Specific Volume for a specific billing cycle
     * User will receive hourly cost datapoints for a Volume for a specified billing cycle. This data will include 'incurred_bill' graph datapoints.
     * @param {Number} volumeId 
     * @param {Object} opts Optional parameters
     * @param {String} [startDate] Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @param {String} [endDate] Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ResourceLevelVolumeGraphBillingDetailsResponseModel} and HTTP response
     */
  }, {
    key: "getVolumeBillingHistoryGraphWithHttpInfo",
    value: function getVolumeBillingHistoryGraphWithHttpInfo(volumeId, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'volumeId' is set
      if (volumeId === undefined || volumeId === null) {
        throw new Error("Missing the required parameter 'volumeId' when calling getVolumeBillingHistoryGraph");
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
     * User will receive hourly cost datapoints for a Volume for a specified billing cycle. This data will include 'incurred_bill' graph datapoints.
     * @param {Number} volumeId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.startDate Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @param {String} opts.endDate Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ResourceLevelVolumeGraphBillingDetailsResponseModel}
     */
  }, {
    key: "getVolumeBillingHistoryGraph",
    value: function getVolumeBillingHistoryGraph(volumeId, opts) {
      return this.getVolumeBillingHistoryGraphWithHttpInfo(volumeId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Retrieve Billing History of Contract for a specific Billing Cycle
     * User will receive billing history of contracts for the specified billing cycle. This data will include 'description', gpu_type','infrahub_id', 'status', 'incurred_bill', 'price_per_hour'
     * @param {Object} opts Optional parameters
     * @param {String} [startDate] Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @param {String} [endDate] Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @param {String} [search] Search by Contract \"Description\" or \"ID\"
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
  }, {
    key: "listBillingContractHistoryWithHttpInfo",
    value: function listBillingContractHistoryWithHttpInfo(opts) {
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
     * User will receive billing history of contracts for the specified billing cycle. This data will include 'description', gpu_type','infrahub_id', 'status', 'incurred_bill', 'price_per_hour'
     * @param {Object} opts Optional parameters
     * @param {String} opts.startDate Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @param {String} opts.endDate Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @param {String} opts.search Search by Contract \"Description\" or \"ID\"
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
  }, {
    key: "listBillingContractHistory",
    value: function listBillingContractHistory(opts) {
      return this.listBillingContractHistoryWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Retrieve Billing History of a Bucket for a specific Billing Cycle
     * User will receive billing history of buckets for thespecified billing cycle. This data will include 'resource_name', 'infrahub_id', 'status', 'incurred_bill', 'usage_time', 'price_per_hour'
     * @param {Object} opts Optional parameters
     * @param {String} [startDate] Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @param {String} [endDate] Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @param {String} [search] Search by resource \"Name\" or \"ID\"
     * @param {Number} [perPage] Number of items to return per page
     * @param {Number} [page] Page number
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ResourceLevelBucketBillingHistoryResponseModel} and HTTP response
     */
  }, {
    key: "listBucketBillingHistoryWithHttpInfo",
    value: function listBucketBillingHistoryWithHttpInfo(opts) {
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
     * Retrieve Billing History of a Bucket for a specific Billing Cycle
     * User will receive billing history of buckets for thespecified billing cycle. This data will include 'resource_name', 'infrahub_id', 'status', 'incurred_bill', 'usage_time', 'price_per_hour'
     * @param {Object} opts Optional parameters
     * @param {String} opts.startDate Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @param {String} opts.endDate Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @param {String} opts.search Search by resource \"Name\" or \"ID\"
     * @param {Number} opts.perPage Number of items to return per page
     * @param {Number} opts.page Page number
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ResourceLevelBucketBillingHistoryResponseModel}
     */
  }, {
    key: "listBucketBillingHistory",
    value: function listBucketBillingHistory(opts) {
      return this.listBucketBillingHistoryWithHttpInfo(opts).then(function (response_and_data) {
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
    key: "listClustersBillingHistoryWithHttpInfo",
    value: function listClustersBillingHistoryWithHttpInfo(opts) {
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
    key: "listClustersBillingHistory",
    value: function listClustersBillingHistory(opts) {
      return this.listClustersBillingHistoryWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * GET: All Thresholds for Organization
     * Retrieve all the notification thresholds for an organization.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OrganizationThresholdsResponse} and HTTP response
     */
  }, {
    key: "listOrgNotificationThresholdsWithHttpInfo",
    value: function listOrgNotificationThresholdsWithHttpInfo() {
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
    key: "listOrgNotificationThresholds",
    value: function listOrgNotificationThresholds() {
      return this.listOrgNotificationThresholdsWithHttpInfo().then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Retrieve Billing History of serverless inference for a specific Billing Cycle
     * User will receive billing history of serverless_inference for the specified billing cycle.
     * @param {Object} opts Optional parameters
     * @param {String} [startDate] Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @param {String} [endDate] Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @param {String} [search] Search by resource \"Name\" or \"ID\"
     * @param {Number} [perPage] Number of items to return per page
     * @param {Number} [page] Page number
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TokenBasedBillingHistoryResponse} and HTTP response
     */
  }, {
    key: "listServerlessInferenceBillingHistoryWithHttpInfo",
    value: function listServerlessInferenceBillingHistoryWithHttpInfo(opts) {
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
     * User will receive billing history of serverless_inference for the specified billing cycle.
     * @param {Object} opts Optional parameters
     * @param {String} opts.startDate Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @param {String} opts.endDate Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @param {String} opts.search Search by resource \"Name\" or \"ID\"
     * @param {Number} opts.perPage Number of items to return per page
     * @param {Number} opts.page Page number
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TokenBasedBillingHistoryResponse}
     */
  }, {
    key: "listServerlessInferenceBillingHistory",
    value: function listServerlessInferenceBillingHistory(opts) {
      return this.listServerlessInferenceBillingHistoryWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Retrieve Billing History of Snapshot for a specific Billing Cycle
     * User will receive billing history of snapshots for thespecified billing cycle. This data will include 'resource_name', 'infrahub_id', 'status', 'incurred_bill', 'usage_time', 'price_per_hour'
     * @param {Object} opts Optional parameters
     * @param {String} [startDate] Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @param {String} [endDate] Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @param {String} [search] Search by resource \"Name\" or \"ID\"
     * @param {Number} [perPage] Number of items to return per page
     * @param {Number} [page] Page number
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ResourceLevelVolumeBillingHistoryResponseModel} and HTTP response
     */
  }, {
    key: "listSnapshotBillingHistoryWithHttpInfo",
    value: function listSnapshotBillingHistoryWithHttpInfo(opts) {
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
     * User will receive billing history of snapshots for thespecified billing cycle. This data will include 'resource_name', 'infrahub_id', 'status', 'incurred_bill', 'usage_time', 'price_per_hour'
     * @param {Object} opts Optional parameters
     * @param {String} opts.startDate Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @param {String} opts.endDate Date should be formatted in YYYY-MM-DDTHH:MM:SS
     * @param {String} opts.search Search by resource \"Name\" or \"ID\"
     * @param {Number} opts.perPage Number of items to return per page
     * @param {Number} opts.page Page number
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ResourceLevelVolumeBillingHistoryResponseModel}
     */
  }, {
    key: "listSnapshotBillingHistory",
    value: function listSnapshotBillingHistory(opts) {
      return this.listSnapshotBillingHistoryWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);
}();
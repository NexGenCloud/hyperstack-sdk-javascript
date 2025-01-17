"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _CreateVolumePayload = _interopRequireDefault(require("../model/CreateVolumePayload"));
var _ErrorResponseModel = _interopRequireDefault(require("../model/ErrorResponseModel"));
var _NameAvailableModel = _interopRequireDefault(require("../model/NameAvailableModel"));
var _ResponseModel = _interopRequireDefault(require("../model/ResponseModel"));
var _Volume = _interopRequireDefault(require("../model/Volume"));
var _VolumeTypes = _interopRequireDefault(require("../model/VolumeTypes"));
var _Volumes = _interopRequireDefault(require("../model/Volumes"));
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
* Volume service.
* @module api/VolumeApi
* @version v1.25.0-alpha
*/
var VolumeApi = exports["default"] = /*#__PURE__*/function () {
  /**
  * Constructs a new VolumeApi. 
  * @alias module:api/VolumeApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function VolumeApi(apiClient) {
    _classCallCheck(this, VolumeApi);
    this.apiClient = apiClient || _ApiClient["default"].instance;
  }

  /**
   * Create volume
   * Creates a volume that can be attached to a virtual machine, expanding its storage capacity. Specify the volume type and custom configuration in the request body. For additional details on volumes, [**click here**](https://infrahub-doc.nexgencloud.com/docs/features/volumes-available-features).
   * @param {module:model/CreateVolumePayload} payload 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Volume} and HTTP response
   */
  return _createClass(VolumeApi, [{
    key: "createVolumeWithHttpInfo",
    value: function createVolumeWithHttpInfo(payload) {
      var postBody = payload;
      // verify the required parameter 'payload' is set
      if (payload === undefined || payload === null) {
        throw new Error("Missing the required parameter 'payload' when calling createVolume");
      }
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['apiKey', 'accessToken'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Volume["default"];
      return this.apiClient.callApi('/core/volumes', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Create volume
     * Creates a volume that can be attached to a virtual machine, expanding its storage capacity. Specify the volume type and custom configuration in the request body. For additional details on volumes, [**click here**](https://infrahub-doc.nexgencloud.com/docs/features/volumes-available-features).
     * @param {module:model/CreateVolumePayload} payload 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Volume}
     */
  }, {
    key: "createVolume",
    value: function createVolume(payload) {
      return this.createVolumeWithHttpInfo(payload).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Delete volume
     * Deletes a volume permanently. Provide the volume ID in the path to specify the volume to be deleted.
     * @param {Number} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ResponseModel} and HTTP response
     */
  }, {
    key: "deleteVolumeWithHttpInfo",
    value: function deleteVolumeWithHttpInfo(id) {
      var postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteVolume");
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
      return this.apiClient.callApi('/core/volumes/{id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Delete volume
     * Deletes a volume permanently. Provide the volume ID in the path to specify the volume to be deleted.
     * @param {Number} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ResponseModel}
     */
  }, {
    key: "deleteVolume",
    value: function deleteVolume(id) {
      return this.deleteVolumeWithHttpInfo(id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Fetch Volume Details
     * Fetch volume details for specific volume. This endpoint returns id, name, volume size, volume type, status, description, image_id, os_image, created_at, updated_at etc.
     * @param {Number} volumeId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Volumes} and HTTP response
     */
  }, {
    key: "fetchVolumeDetailsWithHttpInfo",
    value: function fetchVolumeDetailsWithHttpInfo(volumeId) {
      var postBody = null;
      // verify the required parameter 'volumeId' is set
      if (volumeId === undefined || volumeId === null) {
        throw new Error("Missing the required parameter 'volumeId' when calling fetchVolumeDetails");
      }
      var pathParams = {
        'volume_id': volumeId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['apiKey', 'accessToken'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Volumes["default"];
      return this.apiClient.callApi('/core/volume/{volume_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Fetch Volume Details
     * Fetch volume details for specific volume. This endpoint returns id, name, volume size, volume type, status, description, image_id, os_image, created_at, updated_at etc.
     * @param {Number} volumeId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Volumes}
     */
  }, {
    key: "fetchVolumeDetails",
    value: function fetchVolumeDetails(volumeId) {
      return this.fetchVolumeDetailsWithHttpInfo(volumeId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Fetch volume name availability
     * Check if a Volume name is available
     * @param {String} name 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/NameAvailableModel} and HTTP response
     */
  }, {
    key: "fetchVolumeNameAvailabilityWithHttpInfo",
    value: function fetchVolumeNameAvailabilityWithHttpInfo(name) {
      var postBody = null;
      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling fetchVolumeNameAvailability");
      }
      var pathParams = {
        'name': name
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['apiKey', 'accessToken'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _NameAvailableModel["default"];
      return this.apiClient.callApi('/core/volume/name-availability/{name}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Fetch volume name availability
     * Check if a Volume name is available
     * @param {String} name 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/NameAvailableModel}
     */
  }, {
    key: "fetchVolumeNameAvailability",
    value: function fetchVolumeNameAvailability(name) {
      return this.fetchVolumeNameAvailabilityWithHttpInfo(name).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * List volume types
     * Retrieves a list of available volume types that can be used in the creation of a new volume.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/VolumeTypes} and HTTP response
     */
  }, {
    key: "listVolumeTypesWithHttpInfo",
    value: function listVolumeTypesWithHttpInfo() {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['apiKey', 'accessToken'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _VolumeTypes["default"];
      return this.apiClient.callApi('/core/volume-types', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * List volume types
     * Retrieves a list of available volume types that can be used in the creation of a new volume.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/VolumeTypes}
     */
  }, {
    key: "listVolumeTypes",
    value: function listVolumeTypes() {
      return this.listVolumeTypesWithHttpInfo().then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * List volumes
     * Returns a list of your existing volumes, providing details for each. For more information on volumes, [**click here**](https://infrahub-doc.nexgencloud.com/docs/features/volumes-available-features).
     * @param {Object} opts Optional parameters
     * @param {String} [page] Page Number
     * @param {String} [pageSize] Data Per Page
     * @param {String} [search] 
     * @param {String} [environment] Filter Environment ID or Name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Volumes} and HTTP response
     */
  }, {
    key: "listVolumesWithHttpInfo",
    value: function listVolumesWithHttpInfo(opts) {
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
      var returnType = _Volumes["default"];
      return this.apiClient.callApi('/core/volumes', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * List volumes
     * Returns a list of your existing volumes, providing details for each. For more information on volumes, [**click here**](https://infrahub-doc.nexgencloud.com/docs/features/volumes-available-features).
     * @param {Object} opts Optional parameters
     * @param {String} opts.page Page Number
     * @param {String} opts.pageSize Data Per Page
     * @param {String} opts.search 
     * @param {String} opts.environment Filter Environment ID or Name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Volumes}
     */
  }, {
    key: "listVolumes",
    value: function listVolumes(opts) {
      return this.listVolumesWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);
}();
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _ErrorResponseModel = _interopRequireDefault(require("../model/ErrorResponseModel"));
var _Image = _interopRequireDefault(require("../model/Image"));
var _Images = _interopRequireDefault(require("../model/Images"));
var _NameAvailableModel = _interopRequireDefault(require("../model/NameAvailableModel"));
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
* Image service.
* @module api/ImageApi
* @version v1.25.0-alpha
*/
var ImageApi = exports["default"] = /*#__PURE__*/function () {
  /**
  * Constructs a new ImageApi. 
  * @alias module:api/ImageApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function ImageApi(apiClient) {
    _classCallCheck(this, ImageApi);
    this.apiClient = apiClient || _ApiClient["default"].instance;
  }

  /**
   * Delete an image
   * Deletes an image permanently. Provide the image ID in the path to specify the image to be deleted.
   * @param {Number} id 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ResponseModel} and HTTP response
   */
  return _createClass(ImageApi, [{
    key: "deleteAnImageWithHttpInfo",
    value: function deleteAnImageWithHttpInfo(id) {
      var postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteAnImage");
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
      return this.apiClient.callApi('/core/images/{id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Delete an image
     * Deletes an image permanently. Provide the image ID in the path to specify the image to be deleted.
     * @param {Number} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ResponseModel}
     */
  }, {
    key: "deleteAnImage",
    value: function deleteAnImage(id) {
      return this.deleteAnImageWithHttpInfo(id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Fetch name availability for Images
     * Check if an Image name is available
     * @param {String} name 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/NameAvailableModel} and HTTP response
     */
  }, {
    key: "fetchNameAvailabilityForImagesWithHttpInfo",
    value: function fetchNameAvailabilityForImagesWithHttpInfo(name) {
      var postBody = null;
      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling fetchNameAvailabilityForImages");
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
      return this.apiClient.callApi('/core/image/name-availability/{name}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Fetch name availability for Images
     * Check if an Image name is available
     * @param {String} name 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/NameAvailableModel}
     */
  }, {
    key: "fetchNameAvailabilityForImages",
    value: function fetchNameAvailabilityForImages(name) {
      return this.fetchNameAvailabilityForImagesWithHttpInfo(name).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Get Private Image Details
     * Retrieve details of a specific image by providing the image ID.
     * @param {Number} id 
     * @param {Object} opts Optional parameters
     * @param {Boolean} [includeRelatedVms] 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Image} and HTTP response
     */
  }, {
    key: "getPrivateImageDetailsWithHttpInfo",
    value: function getPrivateImageDetailsWithHttpInfo(id, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getPrivateImageDetails");
      }
      var pathParams = {
        'id': id
      };
      var queryParams = {
        'include_related_vms': opts['includeRelatedVms']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['apiKey', 'accessToken'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Image["default"];
      return this.apiClient.callApi('/core/images/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Get Private Image Details
     * Retrieve details of a specific image by providing the image ID.
     * @param {Number} id 
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.includeRelatedVms 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Image}
     */
  }, {
    key: "getPrivateImageDetails",
    value: function getPrivateImageDetails(id, opts) {
      return this.getPrivateImageDetailsWithHttpInfo(id, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * List Images
     * Returns a list of all available operating system (OS) images, providing details about each image's corresponding virtual machine operating system. You can include the optional `region` parameter in the query string of the request to specifically return OS images from the designated region. Additionally, use the `include_public` parameter to specify whether to include public images in the response. For more information onOS images, [**click here**](https://infrahub-doc.nexgencloud.com/docs/virtual-machines/images).
     * @param {Object} opts Optional parameters
     * @param {String} [region] Region Name
     * @param {Boolean} [includePublic] Flag to include public images in the response (true/false). Default is true.
     * @param {String} [search] Search query to filter images by name
     * @param {Number} [page] Page number for pagination
     * @param {Number} [perPage] Number of Images per page
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Images} and HTTP response
     */
  }, {
    key: "listImagesWithHttpInfo",
    value: function listImagesWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'region': opts['region'],
        'include_public': opts['includePublic'],
        'search': opts['search'],
        'page': opts['page'],
        'per_page': opts['perPage']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['apiKey', 'accessToken'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Images["default"];
      return this.apiClient.callApi('/core/images', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * List Images
     * Returns a list of all available operating system (OS) images, providing details about each image's corresponding virtual machine operating system. You can include the optional `region` parameter in the query string of the request to specifically return OS images from the designated region. Additionally, use the `include_public` parameter to specify whether to include public images in the response. For more information onOS images, [**click here**](https://infrahub-doc.nexgencloud.com/docs/virtual-machines/images).
     * @param {Object} opts Optional parameters
     * @param {String} opts.region Region Name
     * @param {Boolean} opts.includePublic Flag to include public images in the response (true/false). Default is true.
     * @param {String} opts.search Search query to filter images by name
     * @param {Number} opts.page Page number for pagination
     * @param {Number} opts.perPage Number of Images per page
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Images}
     */
  }, {
    key: "listImages",
    value: function listImages(opts) {
      return this.listImagesWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);
}();
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _AttachVolumes = _interopRequireDefault(require("../model/AttachVolumes"));
var _AttachVolumesPayload = _interopRequireDefault(require("../model/AttachVolumesPayload"));
var _DetachVolumes = _interopRequireDefault(require("../model/DetachVolumes"));
var _DetachVolumesPayload = _interopRequireDefault(require("../model/DetachVolumesPayload"));
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
* VolumeAttachment service.
* @module api/VolumeAttachmentApi
* @version v1.25.0-alpha
*/
var VolumeAttachmentApi = exports["default"] = /*#__PURE__*/function () {
  /**
  * Constructs a new VolumeAttachmentApi. 
  * @alias module:api/VolumeAttachmentApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function VolumeAttachmentApi(apiClient) {
    _classCallCheck(this, VolumeAttachmentApi);
    this.apiClient = apiClient || _ApiClient["default"].instance;
  }

  /**
   * Attach volumes to virtual machine
   * Attaches one or more volumes to an existing virtual machine, expanding its storage capacity by 2PB per attached volume. Include the virtual machine ID in the path and the volume IDs in the request body to attach the specified volumes to the designated virtual machine. For additional details on volume attachment, [**click here**](https://infrahub-doc.nexgencloud.com/docs/features/volumes-available-features#attach-a-volume-to-a-virtual-machine-1).
   * @param {Number} virtualMachineId 
   * @param {module:model/AttachVolumesPayload} payload 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AttachVolumes} and HTTP response
   */
  return _createClass(VolumeAttachmentApi, [{
    key: "attachVolumesToVirtualMachineWithHttpInfo",
    value: function attachVolumesToVirtualMachineWithHttpInfo(virtualMachineId, payload) {
      var postBody = payload;
      // verify the required parameter 'virtualMachineId' is set
      if (virtualMachineId === undefined || virtualMachineId === null) {
        throw new Error("Missing the required parameter 'virtualMachineId' when calling attachVolumesToVirtualMachine");
      }
      // verify the required parameter 'payload' is set
      if (payload === undefined || payload === null) {
        throw new Error("Missing the required parameter 'payload' when calling attachVolumesToVirtualMachine");
      }
      var pathParams = {
        'virtual_machine_id': virtualMachineId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['apiKey', 'accessToken'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _AttachVolumes["default"];
      return this.apiClient.callApi('/core/virtual-machines/{virtual_machine_id}/attach-volumes', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Attach volumes to virtual machine
     * Attaches one or more volumes to an existing virtual machine, expanding its storage capacity by 2PB per attached volume. Include the virtual machine ID in the path and the volume IDs in the request body to attach the specified volumes to the designated virtual machine. For additional details on volume attachment, [**click here**](https://infrahub-doc.nexgencloud.com/docs/features/volumes-available-features#attach-a-volume-to-a-virtual-machine-1).
     * @param {Number} virtualMachineId 
     * @param {module:model/AttachVolumesPayload} payload 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AttachVolumes}
     */
  }, {
    key: "attachVolumesToVirtualMachine",
    value: function attachVolumesToVirtualMachine(virtualMachineId, payload) {
      return this.attachVolumesToVirtualMachineWithHttpInfo(virtualMachineId, payload).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Detach volumes from virtual machine
     * Detaches one or more volumes currently attached to an existing virtual machine. Include the virtual machine ID in the path and the volume IDs in the request body to detach the specified volumes from the designated virtual machine.
     * @param {Number} virtualMachineId 
     * @param {module:model/DetachVolumesPayload} payload 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DetachVolumes} and HTTP response
     */
  }, {
    key: "detachVolumesFromVirtualMachineWithHttpInfo",
    value: function detachVolumesFromVirtualMachineWithHttpInfo(virtualMachineId, payload) {
      var postBody = payload;
      // verify the required parameter 'virtualMachineId' is set
      if (virtualMachineId === undefined || virtualMachineId === null) {
        throw new Error("Missing the required parameter 'virtualMachineId' when calling detachVolumesFromVirtualMachine");
      }
      // verify the required parameter 'payload' is set
      if (payload === undefined || payload === null) {
        throw new Error("Missing the required parameter 'payload' when calling detachVolumesFromVirtualMachine");
      }
      var pathParams = {
        'virtual_machine_id': virtualMachineId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['apiKey', 'accessToken'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _DetachVolumes["default"];
      return this.apiClient.callApi('/core/virtual-machines/{virtual_machine_id}/detach-volumes', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Detach volumes from virtual machine
     * Detaches one or more volumes currently attached to an existing virtual machine. Include the virtual machine ID in the path and the volume IDs in the request body to detach the specified volumes from the designated virtual machine.
     * @param {Number} virtualMachineId 
     * @param {module:model/DetachVolumesPayload} payload 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DetachVolumes}
     */
  }, {
    key: "detachVolumesFromVirtualMachine",
    value: function detachVolumesFromVirtualMachine(virtualMachineId, payload) {
      return this.detachVolumesFromVirtualMachineWithHttpInfo(virtualMachineId, payload).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);
}();
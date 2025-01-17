"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _FirewallAttachmentVMModel = _interopRequireDefault(require("./FirewallAttachmentVMModel"));
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
 * The FirewallAttachmentModel model module.
 * @module model/FirewallAttachmentModel
 * @version v1.25.0-alpha
 */
var FirewallAttachmentModel = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>FirewallAttachmentModel</code>.
   * @alias module:model/FirewallAttachmentModel
   */
  function FirewallAttachmentModel() {
    _classCallCheck(this, FirewallAttachmentModel);
    FirewallAttachmentModel.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  return _createClass(FirewallAttachmentModel, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>FirewallAttachmentModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FirewallAttachmentModel} obj Optional instance to populate.
     * @return {module:model/FirewallAttachmentModel} The populated <code>FirewallAttachmentModel</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new FirewallAttachmentModel();
        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'Date');
        }
        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }
        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }
        if (data.hasOwnProperty('vm')) {
          obj['vm'] = _FirewallAttachmentVMModel["default"].constructFromObject(data['vm']);
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>FirewallAttachmentModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>FirewallAttachmentModel</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // ensure the json data is a string
      if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
        throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
      }
      // validate the optional field `vm`
      if (data['vm']) {
        // data not null
        _FirewallAttachmentVMModel["default"].validateJSON(data['vm']);
      }
      return true;
    }
  }]);
}();
/**
 * @member {Date} created_at
 */
FirewallAttachmentModel.prototype['created_at'] = undefined;

/**
 * @member {Number} id
 */
FirewallAttachmentModel.prototype['id'] = undefined;

/**
 * @member {String} status
 */
FirewallAttachmentModel.prototype['status'] = undefined;

/**
 * @member {module:model/FirewallAttachmentVMModel} vm
 */
FirewallAttachmentModel.prototype['vm'] = undefined;
var _default = exports["default"] = FirewallAttachmentModel;
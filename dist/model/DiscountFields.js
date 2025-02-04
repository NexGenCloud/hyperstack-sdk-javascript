"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
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
 * The DiscountFields model module.
 * @module model/DiscountFields
 * @version v1.25.0-alpha
 */
var DiscountFields = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>DiscountFields</code>.
   * @alias module:model/DiscountFields
   */
  function DiscountFields() {
    _classCallCheck(this, DiscountFields);
    DiscountFields.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  return _createClass(DiscountFields, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>DiscountFields</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DiscountFields} obj Optional instance to populate.
     * @return {module:model/DiscountFields} The populated <code>DiscountFields</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DiscountFields();
        if (data.hasOwnProperty('discount_status')) {
          obj['discount_status'] = _ApiClient["default"].convertToType(data['discount_status'], 'String');
        }
        if (data.hasOwnProperty('end_date')) {
          obj['end_date'] = _ApiClient["default"].convertToType(data['end_date'], 'Date');
        }
        if (data.hasOwnProperty('org_id')) {
          obj['org_id'] = _ApiClient["default"].convertToType(data['org_id'], 'Number');
        }
        if (data.hasOwnProperty('org_name')) {
          obj['org_name'] = _ApiClient["default"].convertToType(data['org_name'], 'String');
        }
        if (data.hasOwnProperty('plan_type')) {
          obj['plan_type'] = _ApiClient["default"].convertToType(data['plan_type'], 'String');
        }
        if (data.hasOwnProperty('vm_id')) {
          obj['vm_id'] = _ApiClient["default"].convertToType(data['vm_id'], 'Number');
        }
        if (data.hasOwnProperty('vm_name')) {
          obj['vm_name'] = _ApiClient["default"].convertToType(data['vm_name'], 'String');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DiscountFields</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DiscountFields</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // ensure the json data is a string
      if (data['discount_status'] && !(typeof data['discount_status'] === 'string' || data['discount_status'] instanceof String)) {
        throw new Error("Expected the field `discount_status` to be a primitive type in the JSON string but got " + data['discount_status']);
      }
      // ensure the json data is a string
      if (data['org_name'] && !(typeof data['org_name'] === 'string' || data['org_name'] instanceof String)) {
        throw new Error("Expected the field `org_name` to be a primitive type in the JSON string but got " + data['org_name']);
      }
      // ensure the json data is a string
      if (data['plan_type'] && !(typeof data['plan_type'] === 'string' || data['plan_type'] instanceof String)) {
        throw new Error("Expected the field `plan_type` to be a primitive type in the JSON string but got " + data['plan_type']);
      }
      // ensure the json data is a string
      if (data['vm_name'] && !(typeof data['vm_name'] === 'string' || data['vm_name'] instanceof String)) {
        throw new Error("Expected the field `vm_name` to be a primitive type in the JSON string but got " + data['vm_name']);
      }
      return true;
    }
  }]);
}();
/**
 * @member {String} discount_status
 */
DiscountFields.prototype['discount_status'] = undefined;

/**
 * @member {Date} end_date
 */
DiscountFields.prototype['end_date'] = undefined;

/**
 * @member {Number} org_id
 */
DiscountFields.prototype['org_id'] = undefined;

/**
 * @member {String} org_name
 */
DiscountFields.prototype['org_name'] = undefined;

/**
 * @member {String} plan_type
 */
DiscountFields.prototype['plan_type'] = undefined;

/**
 * @member {Number} vm_id
 */
DiscountFields.prototype['vm_id'] = undefined;

/**
 * @member {String} vm_name
 */
DiscountFields.prototype['vm_name'] = undefined;
var _default = exports["default"] = DiscountFields;
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
 * The DiscountPlanFields model module.
 * @module model/DiscountPlanFields
 * @version v1.25.0-alpha
 */
var DiscountPlanFields = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>DiscountPlanFields</code>.
   * @alias module:model/DiscountPlanFields
   */
  function DiscountPlanFields() {
    _classCallCheck(this, DiscountPlanFields);
    DiscountPlanFields.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  return _createClass(DiscountPlanFields, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>DiscountPlanFields</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DiscountPlanFields} obj Optional instance to populate.
     * @return {module:model/DiscountPlanFields} The populated <code>DiscountPlanFields</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DiscountPlanFields();
        if (data.hasOwnProperty('discount_amount')) {
          obj['discount_amount'] = _ApiClient["default"].convertToType(data['discount_amount'], 'Number');
        }
        if (data.hasOwnProperty('discount_code')) {
          obj['discount_code'] = _ApiClient["default"].convertToType(data['discount_code'], 'String');
        }
        if (data.hasOwnProperty('discount_percent')) {
          obj['discount_percent'] = _ApiClient["default"].convertToType(data['discount_percent'], 'Number');
        }
        if (data.hasOwnProperty('discount_status')) {
          obj['discount_status'] = _ApiClient["default"].convertToType(data['discount_status'], 'String');
        }
        if (data.hasOwnProperty('discount_type')) {
          obj['discount_type'] = _ApiClient["default"].convertToType(data['discount_type'], 'String');
        }
        if (data.hasOwnProperty('end_date')) {
          obj['end_date'] = _ApiClient["default"].convertToType(data['end_date'], 'Date');
        }
        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }
        if (data.hasOwnProperty('resource')) {
          obj['resource'] = _ApiClient["default"].convertToType(data['resource'], 'String');
        }
        if (data.hasOwnProperty('start_date')) {
          obj['start_date'] = _ApiClient["default"].convertToType(data['start_date'], 'Date');
        }
        if (data.hasOwnProperty('validity_days')) {
          obj['validity_days'] = _ApiClient["default"].convertToType(data['validity_days'], 'Number');
        }
        if (data.hasOwnProperty('vm_id')) {
          obj['vm_id'] = _ApiClient["default"].convertToType(data['vm_id'], 'Number');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DiscountPlanFields</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DiscountPlanFields</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // ensure the json data is a string
      if (data['discount_code'] && !(typeof data['discount_code'] === 'string' || data['discount_code'] instanceof String)) {
        throw new Error("Expected the field `discount_code` to be a primitive type in the JSON string but got " + data['discount_code']);
      }
      // ensure the json data is a string
      if (data['discount_status'] && !(typeof data['discount_status'] === 'string' || data['discount_status'] instanceof String)) {
        throw new Error("Expected the field `discount_status` to be a primitive type in the JSON string but got " + data['discount_status']);
      }
      // ensure the json data is a string
      if (data['discount_type'] && !(typeof data['discount_type'] === 'string' || data['discount_type'] instanceof String)) {
        throw new Error("Expected the field `discount_type` to be a primitive type in the JSON string but got " + data['discount_type']);
      }
      // ensure the json data is a string
      if (data['resource'] && !(typeof data['resource'] === 'string' || data['resource'] instanceof String)) {
        throw new Error("Expected the field `resource` to be a primitive type in the JSON string but got " + data['resource']);
      }
      return true;
    }
  }]);
}();
/**
 * @member {Number} discount_amount
 */
DiscountPlanFields.prototype['discount_amount'] = undefined;

/**
 * @member {String} discount_code
 */
DiscountPlanFields.prototype['discount_code'] = undefined;

/**
 * @member {Number} discount_percent
 */
DiscountPlanFields.prototype['discount_percent'] = undefined;

/**
 * @member {String} discount_status
 */
DiscountPlanFields.prototype['discount_status'] = undefined;

/**
 * @member {String} discount_type
 */
DiscountPlanFields.prototype['discount_type'] = undefined;

/**
 * @member {Date} end_date
 */
DiscountPlanFields.prototype['end_date'] = undefined;

/**
 * @member {Number} id
 */
DiscountPlanFields.prototype['id'] = undefined;

/**
 * @member {String} resource
 */
DiscountPlanFields.prototype['resource'] = undefined;

/**
 * @member {Date} start_date
 */
DiscountPlanFields.prototype['start_date'] = undefined;

/**
 * @member {Number} validity_days
 */
DiscountPlanFields.prototype['validity_days'] = undefined;

/**
 * @member {Number} vm_id
 */
DiscountPlanFields.prototype['vm_id'] = undefined;
var _default = exports["default"] = DiscountPlanFields;
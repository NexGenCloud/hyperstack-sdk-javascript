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
 * The PaymentDetailsFields model module.
 * @module model/PaymentDetailsFields
 * @version v1.25.0-alpha
 */
var PaymentDetailsFields = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PaymentDetailsFields</code>.
   * @alias module:model/PaymentDetailsFields
   */
  function PaymentDetailsFields() {
    _classCallCheck(this, PaymentDetailsFields);
    PaymentDetailsFields.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  return _createClass(PaymentDetailsFields, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>PaymentDetailsFields</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PaymentDetailsFields} obj Optional instance to populate.
     * @return {module:model/PaymentDetailsFields} The populated <code>PaymentDetailsFields</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PaymentDetailsFields();
        if (data.hasOwnProperty('amount')) {
          obj['amount'] = _ApiClient["default"].convertToType(data['amount'], 'Number');
        }
        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'Date');
        }
        if (data.hasOwnProperty('currency')) {
          obj['currency'] = _ApiClient["default"].convertToType(data['currency'], 'String');
        }
        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }
        if (data.hasOwnProperty('gateway_response')) {
          obj['gateway_response'] = _ApiClient["default"].convertToType(data['gateway_response'], 'String');
        }
        if (data.hasOwnProperty('paid_from')) {
          obj['paid_from'] = _ApiClient["default"].convertToType(data['paid_from'], 'String');
        }
        if (data.hasOwnProperty('payment_id')) {
          obj['payment_id'] = _ApiClient["default"].convertToType(data['payment_id'], 'String');
        }
        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }
        if (data.hasOwnProperty('transaction_id')) {
          obj['transaction_id'] = _ApiClient["default"].convertToType(data['transaction_id'], 'String');
        }
        if (data.hasOwnProperty('updated_at')) {
          obj['updated_at'] = _ApiClient["default"].convertToType(data['updated_at'], 'Date');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PaymentDetailsFields</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PaymentDetailsFields</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // ensure the json data is a string
      if (data['currency'] && !(typeof data['currency'] === 'string' || data['currency'] instanceof String)) {
        throw new Error("Expected the field `currency` to be a primitive type in the JSON string but got " + data['currency']);
      }
      // ensure the json data is a string
      if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
        throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
      }
      // ensure the json data is a string
      if (data['gateway_response'] && !(typeof data['gateway_response'] === 'string' || data['gateway_response'] instanceof String)) {
        throw new Error("Expected the field `gateway_response` to be a primitive type in the JSON string but got " + data['gateway_response']);
      }
      // ensure the json data is a string
      if (data['paid_from'] && !(typeof data['paid_from'] === 'string' || data['paid_from'] instanceof String)) {
        throw new Error("Expected the field `paid_from` to be a primitive type in the JSON string but got " + data['paid_from']);
      }
      // ensure the json data is a string
      if (data['payment_id'] && !(typeof data['payment_id'] === 'string' || data['payment_id'] instanceof String)) {
        throw new Error("Expected the field `payment_id` to be a primitive type in the JSON string but got " + data['payment_id']);
      }
      // ensure the json data is a string
      if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
        throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
      }
      // ensure the json data is a string
      if (data['transaction_id'] && !(typeof data['transaction_id'] === 'string' || data['transaction_id'] instanceof String)) {
        throw new Error("Expected the field `transaction_id` to be a primitive type in the JSON string but got " + data['transaction_id']);
      }
      return true;
    }
  }]);
}();
/**
 * @member {Number} amount
 */
PaymentDetailsFields.prototype['amount'] = undefined;

/**
 * @member {Date} created_at
 */
PaymentDetailsFields.prototype['created_at'] = undefined;

/**
 * @member {String} currency
 */
PaymentDetailsFields.prototype['currency'] = undefined;

/**
 * @member {String} description
 */
PaymentDetailsFields.prototype['description'] = undefined;

/**
 * @member {String} gateway_response
 */
PaymentDetailsFields.prototype['gateway_response'] = undefined;

/**
 * @member {String} paid_from
 */
PaymentDetailsFields.prototype['paid_from'] = undefined;

/**
 * @member {String} payment_id
 */
PaymentDetailsFields.prototype['payment_id'] = undefined;

/**
 * @member {String} status
 */
PaymentDetailsFields.prototype['status'] = undefined;

/**
 * @member {String} transaction_id
 */
PaymentDetailsFields.prototype['transaction_id'] = undefined;

/**
 * @member {Date} updated_at
 */
PaymentDetailsFields.prototype['updated_at'] = undefined;
var _default = exports["default"] = PaymentDetailsFields;
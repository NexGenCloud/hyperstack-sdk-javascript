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
 * The InstanceOverviewFields model module.
 * @module model/InstanceOverviewFields
 * @version v1.25.0-alpha
 */
var InstanceOverviewFields = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InstanceOverviewFields</code>.
   * @alias module:model/InstanceOverviewFields
   */
  function InstanceOverviewFields() {
    _classCallCheck(this, InstanceOverviewFields);
    InstanceOverviewFields.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  return _createClass(InstanceOverviewFields, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>InstanceOverviewFields</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InstanceOverviewFields} obj Optional instance to populate.
     * @return {module:model/InstanceOverviewFields} The populated <code>InstanceOverviewFields</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InstanceOverviewFields();
        if (data.hasOwnProperty('cost_per_hour')) {
          obj['cost_per_hour'] = _ApiClient["default"].convertToType(data['cost_per_hour'], 'Number');
        }
        if (data.hasOwnProperty('count')) {
          obj['count'] = _ApiClient["default"].convertToType(data['count'], 'Number');
        }
        if (data.hasOwnProperty('gpus')) {
          obj['gpus'] = _ApiClient["default"].convertToType(data['gpus'], 'Number');
        }
        if (data.hasOwnProperty('ram')) {
          obj['ram'] = _ApiClient["default"].convertToType(data['ram'], 'Number');
        }
        if (data.hasOwnProperty('vcpus')) {
          obj['vcpus'] = _ApiClient["default"].convertToType(data['vcpus'], 'Number');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>InstanceOverviewFields</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>InstanceOverviewFields</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      return true;
    }
  }]);
}();
/**
 * @member {Number} cost_per_hour
 */
InstanceOverviewFields.prototype['cost_per_hour'] = undefined;

/**
 * @member {Number} count
 */
InstanceOverviewFields.prototype['count'] = undefined;

/**
 * @member {Number} gpus
 */
InstanceOverviewFields.prototype['gpus'] = undefined;

/**
 * @member {Number} ram
 */
InstanceOverviewFields.prototype['ram'] = undefined;

/**
 * @member {Number} vcpus
 */
InstanceOverviewFields.prototype['vcpus'] = undefined;
var _default = exports["default"] = InstanceOverviewFields;
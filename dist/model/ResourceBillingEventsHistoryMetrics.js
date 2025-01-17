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
 * The ResourceBillingEventsHistoryMetrics model module.
 * @module model/ResourceBillingEventsHistoryMetrics
 * @version v1.25.0-alpha
 */
var ResourceBillingEventsHistoryMetrics = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ResourceBillingEventsHistoryMetrics</code>.
   * @alias module:model/ResourceBillingEventsHistoryMetrics
   */
  function ResourceBillingEventsHistoryMetrics() {
    _classCallCheck(this, ResourceBillingEventsHistoryMetrics);
    ResourceBillingEventsHistoryMetrics.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  return _createClass(ResourceBillingEventsHistoryMetrics, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>ResourceBillingEventsHistoryMetrics</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ResourceBillingEventsHistoryMetrics} obj Optional instance to populate.
     * @return {module:model/ResourceBillingEventsHistoryMetrics} The populated <code>ResourceBillingEventsHistoryMetrics</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ResourceBillingEventsHistoryMetrics();
        if (data.hasOwnProperty('event')) {
          obj['event'] = _ApiClient["default"].convertToType(data['event'], 'String');
        }
        if (data.hasOwnProperty('event_duration')) {
          obj['event_duration'] = _ApiClient["default"].convertToType(data['event_duration'], 'Number');
        }
        if (data.hasOwnProperty('price_per_hour')) {
          obj['price_per_hour'] = _ApiClient["default"].convertToType(data['price_per_hour'], 'Number');
        }
        if (data.hasOwnProperty('start')) {
          obj['start'] = _ApiClient["default"].convertToType(data['start'], 'String');
        }
        if (data.hasOwnProperty('total_cost')) {
          obj['total_cost'] = _ApiClient["default"].convertToType(data['total_cost'], 'Number');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ResourceBillingEventsHistoryMetrics</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ResourceBillingEventsHistoryMetrics</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // ensure the json data is a string
      if (data['event'] && !(typeof data['event'] === 'string' || data['event'] instanceof String)) {
        throw new Error("Expected the field `event` to be a primitive type in the JSON string but got " + data['event']);
      }
      // ensure the json data is a string
      if (data['start'] && !(typeof data['start'] === 'string' || data['start'] instanceof String)) {
        throw new Error("Expected the field `start` to be a primitive type in the JSON string but got " + data['start']);
      }
      return true;
    }
  }]);
}();
/**
 * @member {String} event
 */
ResourceBillingEventsHistoryMetrics.prototype['event'] = undefined;

/**
 * @member {Number} event_duration
 */
ResourceBillingEventsHistoryMetrics.prototype['event_duration'] = undefined;

/**
 * @member {Number} price_per_hour
 */
ResourceBillingEventsHistoryMetrics.prototype['price_per_hour'] = undefined;

/**
 * @member {String} start
 */
ResourceBillingEventsHistoryMetrics.prototype['start'] = undefined;

/**
 * @member {Number} total_cost
 */
ResourceBillingEventsHistoryMetrics.prototype['total_cost'] = undefined;
var _default = exports["default"] = ResourceBillingEventsHistoryMetrics;
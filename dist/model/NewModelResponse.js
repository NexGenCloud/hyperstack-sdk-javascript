"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _NewConfigurationsResponse = _interopRequireDefault(require("./NewConfigurationsResponse"));
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
 * The NewModelResponse model module.
 * @module model/NewModelResponse
 * @version v1.25.0-alpha
 */
var NewModelResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>NewModelResponse</code>.
   * @alias module:model/NewModelResponse
   */
  function NewModelResponse() {
    _classCallCheck(this, NewModelResponse);
    NewModelResponse.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  return _createClass(NewModelResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>NewModelResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewModelResponse} obj Optional instance to populate.
     * @return {module:model/NewModelResponse} The populated <code>NewModelResponse</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new NewModelResponse();
        if (data.hasOwnProperty('available')) {
          obj['available'] = _ApiClient["default"].convertToType(data['available'], 'String');
        }
        if (data.hasOwnProperty('configurations')) {
          obj['configurations'] = _NewConfigurationsResponse["default"].constructFromObject(data['configurations']);
        }
        if (data.hasOwnProperty('model')) {
          obj['model'] = _ApiClient["default"].convertToType(data['model'], 'String');
        }
        if (data.hasOwnProperty('planned_100_days')) {
          obj['planned_100_days'] = _ApiClient["default"].convertToType(data['planned_100_days'], 'String');
        }
        if (data.hasOwnProperty('planned_30_days')) {
          obj['planned_30_days'] = _ApiClient["default"].convertToType(data['planned_30_days'], 'String');
        }
        if (data.hasOwnProperty('planned_7_days')) {
          obj['planned_7_days'] = _ApiClient["default"].convertToType(data['planned_7_days'], 'String');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>NewModelResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>NewModelResponse</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // ensure the json data is a string
      if (data['available'] && !(typeof data['available'] === 'string' || data['available'] instanceof String)) {
        throw new Error("Expected the field `available` to be a primitive type in the JSON string but got " + data['available']);
      }
      // validate the optional field `configurations`
      if (data['configurations']) {
        // data not null
        _NewConfigurationsResponse["default"].validateJSON(data['configurations']);
      }
      // ensure the json data is a string
      if (data['model'] && !(typeof data['model'] === 'string' || data['model'] instanceof String)) {
        throw new Error("Expected the field `model` to be a primitive type in the JSON string but got " + data['model']);
      }
      // ensure the json data is a string
      if (data['planned_100_days'] && !(typeof data['planned_100_days'] === 'string' || data['planned_100_days'] instanceof String)) {
        throw new Error("Expected the field `planned_100_days` to be a primitive type in the JSON string but got " + data['planned_100_days']);
      }
      // ensure the json data is a string
      if (data['planned_30_days'] && !(typeof data['planned_30_days'] === 'string' || data['planned_30_days'] instanceof String)) {
        throw new Error("Expected the field `planned_30_days` to be a primitive type in the JSON string but got " + data['planned_30_days']);
      }
      // ensure the json data is a string
      if (data['planned_7_days'] && !(typeof data['planned_7_days'] === 'string' || data['planned_7_days'] instanceof String)) {
        throw new Error("Expected the field `planned_7_days` to be a primitive type in the JSON string but got " + data['planned_7_days']);
      }
      return true;
    }
  }]);
}();
/**
 * @member {String} available
 */
NewModelResponse.prototype['available'] = undefined;

/**
 * @member {module:model/NewConfigurationsResponse} configurations
 */
NewModelResponse.prototype['configurations'] = undefined;

/**
 * @member {String} model
 */
NewModelResponse.prototype['model'] = undefined;

/**
 * @member {String} planned_100_days
 */
NewModelResponse.prototype['planned_100_days'] = undefined;

/**
 * @member {String} planned_30_days
 */
NewModelResponse.prototype['planned_30_days'] = undefined;

/**
 * @member {String} planned_7_days
 */
NewModelResponse.prototype['planned_7_days'] = undefined;
var _default = exports["default"] = NewModelResponse;
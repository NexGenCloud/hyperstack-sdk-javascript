"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _ResourceLevelBillingDetailsVolumeAttributes = _interopRequireDefault(require("./ResourceLevelBillingDetailsVolumeAttributes"));
var _ResourceLevelBillingDetailsVolumeMetrics = _interopRequireDefault(require("./ResourceLevelBillingDetailsVolumeMetrics"));
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
 * The ResourceLevelBillingVolumeDetailsResources model module.
 * @module model/ResourceLevelBillingVolumeDetailsResources
 * @version v1.25.0-alpha
 */
var ResourceLevelBillingVolumeDetailsResources = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ResourceLevelBillingVolumeDetailsResources</code>.
   * @alias module:model/ResourceLevelBillingVolumeDetailsResources
   */
  function ResourceLevelBillingVolumeDetailsResources() {
    _classCallCheck(this, ResourceLevelBillingVolumeDetailsResources);
    ResourceLevelBillingVolumeDetailsResources.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  return _createClass(ResourceLevelBillingVolumeDetailsResources, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>ResourceLevelBillingVolumeDetailsResources</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ResourceLevelBillingVolumeDetailsResources} obj Optional instance to populate.
     * @return {module:model/ResourceLevelBillingVolumeDetailsResources} The populated <code>ResourceLevelBillingVolumeDetailsResources</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ResourceLevelBillingVolumeDetailsResources();
        if (data.hasOwnProperty('attributes')) {
          obj['attributes'] = _ResourceLevelBillingDetailsVolumeAttributes["default"].constructFromObject(data['attributes']);
        }
        if (data.hasOwnProperty('metrics')) {
          obj['metrics'] = _ResourceLevelBillingDetailsVolumeMetrics["default"].constructFromObject(data['metrics']);
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ResourceLevelBillingVolumeDetailsResources</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ResourceLevelBillingVolumeDetailsResources</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // validate the optional field `attributes`
      if (data['attributes']) {
        // data not null
        _ResourceLevelBillingDetailsVolumeAttributes["default"].validateJSON(data['attributes']);
      }
      // validate the optional field `metrics`
      if (data['metrics']) {
        // data not null
        _ResourceLevelBillingDetailsVolumeMetrics["default"].validateJSON(data['metrics']);
      }
      return true;
    }
  }]);
}();
/**
 * @member {module:model/ResourceLevelBillingDetailsVolumeAttributes} attributes
 */
ResourceLevelBillingVolumeDetailsResources.prototype['attributes'] = undefined;

/**
 * @member {module:model/ResourceLevelBillingDetailsVolumeMetrics} metrics
 */
ResourceLevelBillingVolumeDetailsResources.prototype['metrics'] = undefined;
var _default = exports["default"] = ResourceLevelBillingVolumeDetailsResources;
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
 * The HistoricalInstancesFields model module.
 * @module model/HistoricalInstancesFields
 * @version v1.25.0-alpha
 */
var HistoricalInstancesFields = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>HistoricalInstancesFields</code>.
   * @alias module:model/HistoricalInstancesFields
   */
  function HistoricalInstancesFields() {
    _classCallCheck(this, HistoricalInstancesFields);
    HistoricalInstancesFields.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  return _createClass(HistoricalInstancesFields, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>HistoricalInstancesFields</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HistoricalInstancesFields} obj Optional instance to populate.
     * @return {module:model/HistoricalInstancesFields} The populated <code>HistoricalInstancesFields</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new HistoricalInstancesFields();
        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'Date');
        }
        if (data.hasOwnProperty('environment')) {
          obj['environment'] = _ApiClient["default"].convertToType(data['environment'], 'String');
        }
        if (data.hasOwnProperty('environment_id')) {
          obj['environment_id'] = _ApiClient["default"].convertToType(data['environment_id'], 'Number');
        }
        if (data.hasOwnProperty('flavor')) {
          obj['flavor'] = _ApiClient["default"].convertToType(data['flavor'], 'String');
        }
        if (data.hasOwnProperty('flavor_id')) {
          obj['flavor_id'] = _ApiClient["default"].convertToType(data['flavor_id'], 'Number');
        }
        if (data.hasOwnProperty('floating_ip')) {
          obj['floating_ip'] = _ApiClient["default"].convertToType(data['floating_ip'], 'String');
        }
        if (data.hasOwnProperty('host')) {
          obj['host'] = _ApiClient["default"].convertToType(data['host'], 'String');
        }
        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }
        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }
        if (data.hasOwnProperty('openstack_id')) {
          obj['openstack_id'] = _ApiClient["default"].convertToType(data['openstack_id'], 'String');
        }
        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }
        if (data.hasOwnProperty('updated_at')) {
          obj['updated_at'] = _ApiClient["default"].convertToType(data['updated_at'], 'Date');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>HistoricalInstancesFields</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>HistoricalInstancesFields</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // ensure the json data is a string
      if (data['environment'] && !(typeof data['environment'] === 'string' || data['environment'] instanceof String)) {
        throw new Error("Expected the field `environment` to be a primitive type in the JSON string but got " + data['environment']);
      }
      // ensure the json data is a string
      if (data['flavor'] && !(typeof data['flavor'] === 'string' || data['flavor'] instanceof String)) {
        throw new Error("Expected the field `flavor` to be a primitive type in the JSON string but got " + data['flavor']);
      }
      // ensure the json data is a string
      if (data['floating_ip'] && !(typeof data['floating_ip'] === 'string' || data['floating_ip'] instanceof String)) {
        throw new Error("Expected the field `floating_ip` to be a primitive type in the JSON string but got " + data['floating_ip']);
      }
      // ensure the json data is a string
      if (data['host'] && !(typeof data['host'] === 'string' || data['host'] instanceof String)) {
        throw new Error("Expected the field `host` to be a primitive type in the JSON string but got " + data['host']);
      }
      // ensure the json data is a string
      if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
        throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
      }
      // ensure the json data is a string
      if (data['openstack_id'] && !(typeof data['openstack_id'] === 'string' || data['openstack_id'] instanceof String)) {
        throw new Error("Expected the field `openstack_id` to be a primitive type in the JSON string but got " + data['openstack_id']);
      }
      // ensure the json data is a string
      if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
        throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
      }
      return true;
    }
  }]);
}();
/**
 * @member {Date} created_at
 */
HistoricalInstancesFields.prototype['created_at'] = undefined;

/**
 * @member {String} environment
 */
HistoricalInstancesFields.prototype['environment'] = undefined;

/**
 * @member {Number} environment_id
 */
HistoricalInstancesFields.prototype['environment_id'] = undefined;

/**
 * @member {String} flavor
 */
HistoricalInstancesFields.prototype['flavor'] = undefined;

/**
 * @member {Number} flavor_id
 */
HistoricalInstancesFields.prototype['flavor_id'] = undefined;

/**
 * @member {String} floating_ip
 */
HistoricalInstancesFields.prototype['floating_ip'] = undefined;

/**
 * @member {String} host
 */
HistoricalInstancesFields.prototype['host'] = undefined;

/**
 * @member {Number} id
 */
HistoricalInstancesFields.prototype['id'] = undefined;

/**
 * @member {String} name
 */
HistoricalInstancesFields.prototype['name'] = undefined;

/**
 * @member {String} openstack_id
 */
HistoricalInstancesFields.prototype['openstack_id'] = undefined;

/**
 * @member {String} status
 */
HistoricalInstancesFields.prototype['status'] = undefined;

/**
 * @member {Date} updated_at
 */
HistoricalInstancesFields.prototype['updated_at'] = undefined;
var _default = exports["default"] = HistoricalInstancesFields;
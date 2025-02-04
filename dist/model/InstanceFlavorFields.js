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
 * The InstanceFlavorFields model module.
 * @module model/InstanceFlavorFields
 * @version v1.25.0-alpha
 */
var InstanceFlavorFields = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InstanceFlavorFields</code>.
   * @alias module:model/InstanceFlavorFields
   */
  function InstanceFlavorFields() {
    _classCallCheck(this, InstanceFlavorFields);
    InstanceFlavorFields.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  return _createClass(InstanceFlavorFields, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>InstanceFlavorFields</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InstanceFlavorFields} obj Optional instance to populate.
     * @return {module:model/InstanceFlavorFields} The populated <code>InstanceFlavorFields</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InstanceFlavorFields();
        if (data.hasOwnProperty('cpu')) {
          obj['cpu'] = _ApiClient["default"].convertToType(data['cpu'], 'Number');
        }
        if (data.hasOwnProperty('disk')) {
          obj['disk'] = _ApiClient["default"].convertToType(data['disk'], 'Number');
        }
        if (data.hasOwnProperty('ephemeral')) {
          obj['ephemeral'] = _ApiClient["default"].convertToType(data['ephemeral'], 'Number');
        }
        if (data.hasOwnProperty('gpu')) {
          obj['gpu'] = _ApiClient["default"].convertToType(data['gpu'], 'String');
        }
        if (data.hasOwnProperty('gpu_count')) {
          obj['gpu_count'] = _ApiClient["default"].convertToType(data['gpu_count'], 'Number');
        }
        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }
        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }
        if (data.hasOwnProperty('ram')) {
          obj['ram'] = _ApiClient["default"].convertToType(data['ram'], 'Number');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>InstanceFlavorFields</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>InstanceFlavorFields</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // ensure the json data is a string
      if (data['gpu'] && !(typeof data['gpu'] === 'string' || data['gpu'] instanceof String)) {
        throw new Error("Expected the field `gpu` to be a primitive type in the JSON string but got " + data['gpu']);
      }
      // ensure the json data is a string
      if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
        throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
      }
      return true;
    }
  }]);
}();
/**
 * @member {Number} cpu
 */
InstanceFlavorFields.prototype['cpu'] = undefined;

/**
 * @member {Number} disk
 */
InstanceFlavorFields.prototype['disk'] = undefined;

/**
 * @member {Number} ephemeral
 */
InstanceFlavorFields.prototype['ephemeral'] = undefined;

/**
 * @member {String} gpu
 */
InstanceFlavorFields.prototype['gpu'] = undefined;

/**
 * @member {Number} gpu_count
 */
InstanceFlavorFields.prototype['gpu_count'] = undefined;

/**
 * @member {Number} id
 */
InstanceFlavorFields.prototype['id'] = undefined;

/**
 * @member {String} name
 */
InstanceFlavorFields.prototype['name'] = undefined;

/**
 * @member {Number} ram
 */
InstanceFlavorFields.prototype['ram'] = undefined;
var _default = exports["default"] = InstanceFlavorFields;
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
 * The ApiKeyVerifyFields model module.
 * @module model/ApiKeyVerifyFields
 * @version v1.25.0-alpha
 */
var ApiKeyVerifyFields = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ApiKeyVerifyFields</code>.
   * @alias module:model/ApiKeyVerifyFields
   */
  function ApiKeyVerifyFields() {
    _classCallCheck(this, ApiKeyVerifyFields);
    ApiKeyVerifyFields.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  return _createClass(ApiKeyVerifyFields, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>ApiKeyVerifyFields</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApiKeyVerifyFields} obj Optional instance to populate.
     * @return {module:model/ApiKeyVerifyFields} The populated <code>ApiKeyVerifyFields</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ApiKeyVerifyFields();
        if (data.hasOwnProperty('org_id')) {
          obj['org_id'] = _ApiClient["default"].convertToType(data['org_id'], 'Number');
        }
        if (data.hasOwnProperty('sub')) {
          obj['sub'] = _ApiClient["default"].convertToType(data['sub'], 'String');
        }
        if (data.hasOwnProperty('user_id')) {
          obj['user_id'] = _ApiClient["default"].convertToType(data['user_id'], 'Number');
        }
        if (data.hasOwnProperty('user_role')) {
          obj['user_role'] = _ApiClient["default"].convertToType(data['user_role'], 'String');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ApiKeyVerifyFields</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ApiKeyVerifyFields</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // ensure the json data is a string
      if (data['sub'] && !(typeof data['sub'] === 'string' || data['sub'] instanceof String)) {
        throw new Error("Expected the field `sub` to be a primitive type in the JSON string but got " + data['sub']);
      }
      // ensure the json data is a string
      if (data['user_role'] && !(typeof data['user_role'] === 'string' || data['user_role'] instanceof String)) {
        throw new Error("Expected the field `user_role` to be a primitive type in the JSON string but got " + data['user_role']);
      }
      return true;
    }
  }]);
}();
/**
 * @member {Number} org_id
 */
ApiKeyVerifyFields.prototype['org_id'] = undefined;

/**
 * @member {String} sub
 */
ApiKeyVerifyFields.prototype['sub'] = undefined;

/**
 * @member {Number} user_id
 */
ApiKeyVerifyFields.prototype['user_id'] = undefined;

/**
 * @member {String} user_role
 */
ApiKeyVerifyFields.prototype['user_role'] = undefined;
var _default = exports["default"] = ApiKeyVerifyFields;
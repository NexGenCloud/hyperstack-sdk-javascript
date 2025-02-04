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
 * The Creditrequests model module.
 * @module model/Creditrequests
 * @version v1.25.0-alpha
 */
var Creditrequests = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Creditrequests</code>.
   * @alias module:model/Creditrequests
   */
  function Creditrequests() {
    _classCallCheck(this, Creditrequests);
    Creditrequests.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  return _createClass(Creditrequests, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>Creditrequests</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Creditrequests} obj Optional instance to populate.
     * @return {module:model/Creditrequests} The populated <code>Creditrequests</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Creditrequests();
        if (data.hasOwnProperty('admin_user_id')) {
          obj['admin_user_id'] = _ApiClient["default"].convertToType(data['admin_user_id'], 'Number');
        }
        if (data.hasOwnProperty('amount')) {
          obj['amount'] = _ApiClient["default"].convertToType(data['amount'], 'Number');
        }
        if (data.hasOwnProperty('reason')) {
          obj['reason'] = _ApiClient["default"].convertToType(data['reason'], 'String');
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
     * Validates the JSON data with respect to <code>Creditrequests</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Creditrequests</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // ensure the json data is a string
      if (data['reason'] && !(typeof data['reason'] === 'string' || data['reason'] instanceof String)) {
        throw new Error("Expected the field `reason` to be a primitive type in the JSON string but got " + data['reason']);
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
 * @member {Number} admin_user_id
 */
Creditrequests.prototype['admin_user_id'] = undefined;

/**
 * @member {Number} amount
 */
Creditrequests.prototype['amount'] = undefined;

/**
 * @member {String} reason
 */
Creditrequests.prototype['reason'] = undefined;

/**
 * @member {String} status
 */
Creditrequests.prototype['status'] = undefined;

/**
 * @member {Date} updated_at
 */
Creditrequests.prototype['updated_at'] = undefined;
var _default = exports["default"] = Creditrequests;
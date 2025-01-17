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
 * The DeploymentFieldsforstartdeployments model module.
 * @module model/DeploymentFieldsforstartdeployments
 * @version v1.25.0-alpha
 */
var DeploymentFieldsforstartdeployments = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>DeploymentFieldsforstartdeployments</code>.
   * @alias module:model/DeploymentFieldsforstartdeployments
   */
  function DeploymentFieldsforstartdeployments() {
    _classCallCheck(this, DeploymentFieldsforstartdeployments);
    DeploymentFieldsforstartdeployments.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  return _createClass(DeploymentFieldsforstartdeployments, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>DeploymentFieldsforstartdeployments</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeploymentFieldsforstartdeployments} obj Optional instance to populate.
     * @return {module:model/DeploymentFieldsforstartdeployments} The populated <code>DeploymentFieldsforstartdeployments</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DeploymentFieldsforstartdeployments();
        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'Date');
        }
        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }
        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }
        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }
        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }
        if (data.hasOwnProperty('template')) {
          obj['template'] = _ApiClient["default"].convertToType(data['template'], 'String');
        }
        if (data.hasOwnProperty('variables')) {
          obj['variables'] = _ApiClient["default"].convertToType(data['variables'], 'String');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DeploymentFieldsforstartdeployments</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DeploymentFieldsforstartdeployments</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // ensure the json data is a string
      if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
        throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
      }
      // ensure the json data is a string
      if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
        throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
      }
      // ensure the json data is a string
      if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
        throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
      }
      // ensure the json data is a string
      if (data['template'] && !(typeof data['template'] === 'string' || data['template'] instanceof String)) {
        throw new Error("Expected the field `template` to be a primitive type in the JSON string but got " + data['template']);
      }
      // ensure the json data is a string
      if (data['variables'] && !(typeof data['variables'] === 'string' || data['variables'] instanceof String)) {
        throw new Error("Expected the field `variables` to be a primitive type in the JSON string but got " + data['variables']);
      }
      return true;
    }
  }]);
}();
/**
 * @member {Date} created_at
 */
DeploymentFieldsforstartdeployments.prototype['created_at'] = undefined;

/**
 * @member {String} description
 */
DeploymentFieldsforstartdeployments.prototype['description'] = undefined;

/**
 * @member {Number} id
 */
DeploymentFieldsforstartdeployments.prototype['id'] = undefined;

/**
 * @member {String} name
 */
DeploymentFieldsforstartdeployments.prototype['name'] = undefined;

/**
 * @member {String} status
 */
DeploymentFieldsforstartdeployments.prototype['status'] = undefined;

/**
 * @member {String} template
 */
DeploymentFieldsforstartdeployments.prototype['template'] = undefined;

/**
 * @member {String} variables
 */
DeploymentFieldsforstartdeployments.prototype['variables'] = undefined;
var _default = exports["default"] = DeploymentFieldsforstartdeployments;
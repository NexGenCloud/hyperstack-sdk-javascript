"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _ImageFields = _interopRequireDefault(require("./ImageFields"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
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
 * The ImageGetResponse model module.
 * @module model/ImageGetResponse
 * @version v1.25.0-alpha
 */
var ImageGetResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ImageGetResponse</code>.
   * @alias module:model/ImageGetResponse
   */
  function ImageGetResponse() {
    _classCallCheck(this, ImageGetResponse);
    ImageGetResponse.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  return _createClass(ImageGetResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>ImageGetResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ImageGetResponse} obj Optional instance to populate.
     * @return {module:model/ImageGetResponse} The populated <code>ImageGetResponse</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ImageGetResponse();
        if (data.hasOwnProperty('images')) {
          obj['images'] = _ApiClient["default"].convertToType(data['images'], [_ImageFields["default"]]);
        }
        if (data.hasOwnProperty('logo')) {
          obj['logo'] = _ApiClient["default"].convertToType(data['logo'], 'String');
        }
        if (data.hasOwnProperty('region_name')) {
          obj['region_name'] = _ApiClient["default"].convertToType(data['region_name'], 'String');
        }
        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ImageGetResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ImageGetResponse</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      if (data['images']) {
        // data not null
        // ensure the json data is an array
        if (!Array.isArray(data['images'])) {
          throw new Error("Expected the field `images` to be an array in the JSON data but got " + data['images']);
        }
        // validate the optional field `images` (array)
        var _iterator = _createForOfIteratorHelper(data['images']),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var item = _step.value;
            _ImageFields["default"].validateJSON(item);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        ;
      }
      // ensure the json data is a string
      if (data['logo'] && !(typeof data['logo'] === 'string' || data['logo'] instanceof String)) {
        throw new Error("Expected the field `logo` to be a primitive type in the JSON string but got " + data['logo']);
      }
      // ensure the json data is a string
      if (data['region_name'] && !(typeof data['region_name'] === 'string' || data['region_name'] instanceof String)) {
        throw new Error("Expected the field `region_name` to be a primitive type in the JSON string but got " + data['region_name']);
      }
      // ensure the json data is a string
      if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
        throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
      }
      return true;
    }
  }]);
}();
/**
 * @member {Array.<module:model/ImageFields>} images
 */
ImageGetResponse.prototype['images'] = undefined;

/**
 * @member {String} logo
 */
ImageGetResponse.prototype['logo'] = undefined;

/**
 * @member {String} region_name
 */
ImageGetResponse.prototype['region_name'] = undefined;

/**
 * @member {String} type
 */
ImageGetResponse.prototype['type'] = undefined;
var _default = exports["default"] = ImageGetResponse;
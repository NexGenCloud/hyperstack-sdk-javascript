"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _OrganizationUserResponseModel = _interopRequireDefault(require("./OrganizationUserResponseModel"));
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
 * The OrganizationFields model module.
 * @module model/OrganizationFields
 * @version v1.25.0-alpha
 */
var OrganizationFields = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OrganizationFields</code>.
   * @alias module:model/OrganizationFields
   * @param id {Number} 
   * @param name {String} 
   */
  function OrganizationFields(id, name) {
    _classCallCheck(this, OrganizationFields);
    OrganizationFields.initialize(this, id, name);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  return _createClass(OrganizationFields, null, [{
    key: "initialize",
    value: function initialize(obj, id, name) {
      obj['id'] = id;
      obj['name'] = name;
    }

    /**
     * Constructs a <code>OrganizationFields</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrganizationFields} obj Optional instance to populate.
     * @return {module:model/OrganizationFields} The populated <code>OrganizationFields</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OrganizationFields();
        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'Date');
        }
        if (data.hasOwnProperty('credit')) {
          obj['credit'] = _ApiClient["default"].convertToType(data['credit'], 'Number');
        }
        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }
        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }
        if (data.hasOwnProperty('threshold')) {
          obj['threshold'] = _ApiClient["default"].convertToType(data['threshold'], 'Number');
        }
        if (data.hasOwnProperty('total_clusters')) {
          obj['total_clusters'] = _ApiClient["default"].convertToType(data['total_clusters'], 'Number');
        }
        if (data.hasOwnProperty('total_containers')) {
          obj['total_containers'] = _ApiClient["default"].convertToType(data['total_containers'], 'Number');
        }
        if (data.hasOwnProperty('total_instances')) {
          obj['total_instances'] = _ApiClient["default"].convertToType(data['total_instances'], 'Number');
        }
        if (data.hasOwnProperty('total_volumes')) {
          obj['total_volumes'] = _ApiClient["default"].convertToType(data['total_volumes'], 'Number');
        }
        if (data.hasOwnProperty('users')) {
          obj['users'] = _ApiClient["default"].convertToType(data['users'], [_OrganizationUserResponseModel["default"]]);
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OrganizationFields</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OrganizationFields</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // check to make sure all required properties are present in the JSON string
      var _iterator = _createForOfIteratorHelper(OrganizationFields.RequiredProperties),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var property = _step.value;
          if (!data.hasOwnProperty(property)) {
            throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
          }
        }
        // ensure the json data is a string
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
        throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
      }
      if (data['users']) {
        // data not null
        // ensure the json data is an array
        if (!Array.isArray(data['users'])) {
          throw new Error("Expected the field `users` to be an array in the JSON data but got " + data['users']);
        }
        // validate the optional field `users` (array)
        var _iterator2 = _createForOfIteratorHelper(data['users']),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var item = _step2.value;
            _OrganizationUserResponseModel["default"].validateJSON(item);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        ;
      }
      return true;
    }
  }]);
}();
OrganizationFields.RequiredProperties = ["id", "name"];

/**
 * @member {Date} created_at
 */
OrganizationFields.prototype['created_at'] = undefined;

/**
 * @member {Number} credit
 */
OrganizationFields.prototype['credit'] = undefined;

/**
 * @member {Number} id
 */
OrganizationFields.prototype['id'] = undefined;

/**
 * @member {String} name
 */
OrganizationFields.prototype['name'] = undefined;

/**
 * @member {Number} threshold
 */
OrganizationFields.prototype['threshold'] = undefined;

/**
 * @member {Number} total_clusters
 */
OrganizationFields.prototype['total_clusters'] = undefined;

/**
 * @member {Number} total_containers
 */
OrganizationFields.prototype['total_containers'] = undefined;

/**
 * @member {Number} total_instances
 */
OrganizationFields.prototype['total_instances'] = undefined;

/**
 * @member {Number} total_volumes
 */
OrganizationFields.prototype['total_volumes'] = undefined;

/**
 * @member {Array.<module:model/OrganizationUserResponseModel>} users
 */
OrganizationFields.prototype['users'] = undefined;
var _default = exports["default"] = OrganizationFields;
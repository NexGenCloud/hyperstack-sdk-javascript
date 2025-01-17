"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
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
 * The SnapshotFields model module.
 * @module model/SnapshotFields
 * @version v1.25.0-alpha
 */
var SnapshotFields = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SnapshotFields</code>.
   * @alias module:model/SnapshotFields
   * @param description {String} Description of the snapshot
   * @param id {Number} Snapshot ID
   * @param isImage {Boolean} Indicates if the snapshot is an image
   * @param name {String} Snapshot name
   * @param regionId {Number} Region where the snapshot will be available
   * @param size {Number} Size in GB of the snapshot
   * @param status {String} Status of the snapshot
   * @param vmId {Number} ID of the VM from which the snapshot is created
   */
  function SnapshotFields(description, id, isImage, name, regionId, size, status, vmId) {
    _classCallCheck(this, SnapshotFields);
    SnapshotFields.initialize(this, description, id, isImage, name, regionId, size, status, vmId);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  return _createClass(SnapshotFields, null, [{
    key: "initialize",
    value: function initialize(obj, description, id, isImage, name, regionId, size, status, vmId) {
      obj['description'] = description;
      obj['id'] = id;
      obj['is_image'] = isImage;
      obj['name'] = name;
      obj['region_id'] = regionId;
      obj['size'] = size;
      obj['status'] = status;
      obj['vm_id'] = vmId;
    }

    /**
     * Constructs a <code>SnapshotFields</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SnapshotFields} obj Optional instance to populate.
     * @return {module:model/SnapshotFields} The populated <code>SnapshotFields</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SnapshotFields();
        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }
        if (data.hasOwnProperty('has_floating_ip')) {
          obj['has_floating_ip'] = _ApiClient["default"].convertToType(data['has_floating_ip'], 'Boolean');
        }
        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }
        if (data.hasOwnProperty('is_image')) {
          obj['is_image'] = _ApiClient["default"].convertToType(data['is_image'], 'Boolean');
        }
        if (data.hasOwnProperty('labels')) {
          obj['labels'] = _ApiClient["default"].convertToType(data['labels'], ['String']);
        }
        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }
        if (data.hasOwnProperty('region_id')) {
          obj['region_id'] = _ApiClient["default"].convertToType(data['region_id'], 'Number');
        }
        if (data.hasOwnProperty('size')) {
          obj['size'] = _ApiClient["default"].convertToType(data['size'], 'Number');
        }
        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }
        if (data.hasOwnProperty('vm_id')) {
          obj['vm_id'] = _ApiClient["default"].convertToType(data['vm_id'], 'Number');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SnapshotFields</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SnapshotFields</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // check to make sure all required properties are present in the JSON string
      var _iterator = _createForOfIteratorHelper(SnapshotFields.RequiredProperties),
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
      if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
        throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
      }
      // ensure the json data is an array
      if (!Array.isArray(data['labels'])) {
        throw new Error("Expected the field `labels` to be an array in the JSON data but got " + data['labels']);
      }
      // ensure the json data is a string
      if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
        throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
      }
      // ensure the json data is a string
      if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
        throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
      }
      return true;
    }
  }]);
}();
SnapshotFields.RequiredProperties = ["description", "id", "is_image", "name", "region_id", "size", "status", "vm_id"];

/**
 * Description of the snapshot
 * @member {String} description
 */
SnapshotFields.prototype['description'] = undefined;

/**
 * Indicates if the VM had a floating IP assigned
 * @member {Boolean} has_floating_ip
 */
SnapshotFields.prototype['has_floating_ip'] = undefined;

/**
 * Snapshot ID
 * @member {Number} id
 */
SnapshotFields.prototype['id'] = undefined;

/**
 * Indicates if the snapshot is an image
 * @member {Boolean} is_image
 */
SnapshotFields.prototype['is_image'] = undefined;

/**
 * Labels associated with snapshot
 * @member {Array.<String>} labels
 */
SnapshotFields.prototype['labels'] = undefined;

/**
 * Snapshot name
 * @member {String} name
 */
SnapshotFields.prototype['name'] = undefined;

/**
 * Region where the snapshot will be available
 * @member {Number} region_id
 */
SnapshotFields.prototype['region_id'] = undefined;

/**
 * Size in GB of the snapshot
 * @member {Number} size
 */
SnapshotFields.prototype['size'] = undefined;

/**
 * Status of the snapshot
 * @member {String} status
 */
SnapshotFields.prototype['status'] = undefined;

/**
 * ID of the VM from which the snapshot is created
 * @member {Number} vm_id
 */
SnapshotFields.prototype['vm_id'] = undefined;
var _default = exports["default"] = SnapshotFields;
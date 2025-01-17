/**
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

import ApiClient from '../ApiClient';

/**
 * The SnapshotFields model module.
 * @module model/SnapshotFields
 * @version v1.25.0-alpha
 */
class SnapshotFields {
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
    constructor(description, id, isImage, name, regionId, size, status, vmId) { 
        
        SnapshotFields.initialize(this, description, id, isImage, name, regionId, size, status, vmId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, description, id, isImage, name, regionId, size, status, vmId) { 
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
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SnapshotFields();

            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('has_floating_ip')) {
                obj['has_floating_ip'] = ApiClient.convertToType(data['has_floating_ip'], 'Boolean');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('is_image')) {
                obj['is_image'] = ApiClient.convertToType(data['is_image'], 'Boolean');
            }
            if (data.hasOwnProperty('labels')) {
                obj['labels'] = ApiClient.convertToType(data['labels'], ['String']);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('region_id')) {
                obj['region_id'] = ApiClient.convertToType(data['region_id'], 'Number');
            }
            if (data.hasOwnProperty('size')) {
                obj['size'] = ApiClient.convertToType(data['size'], 'Number');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('vm_id')) {
                obj['vm_id'] = ApiClient.convertToType(data['vm_id'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SnapshotFields</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SnapshotFields</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of SnapshotFields.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
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


}

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






export default SnapshotFields;


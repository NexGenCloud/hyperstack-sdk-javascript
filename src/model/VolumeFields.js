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
import EnvironmentFieldsforVolume from './EnvironmentFieldsforVolume';

/**
 * The VolumeFields model module.
 * @module model/VolumeFields
 * @version v1.25.0-alpha
 */
class VolumeFields {
    /**
     * Constructs a new <code>VolumeFields</code>.
     * @alias module:model/VolumeFields
     */
    constructor() { 
        
        VolumeFields.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>VolumeFields</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VolumeFields} obj Optional instance to populate.
     * @return {module:model/VolumeFields} The populated <code>VolumeFields</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VolumeFields();

            if (data.hasOwnProperty('bootable')) {
                obj['bootable'] = ApiClient.convertToType(data['bootable'], 'Boolean');
            }
            if (data.hasOwnProperty('callback_url')) {
                obj['callback_url'] = ApiClient.convertToType(data['callback_url'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('environment')) {
                obj['environment'] = EnvironmentFieldsforVolume.constructFromObject(data['environment']);
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('image_id')) {
                obj['image_id'] = ApiClient.convertToType(data['image_id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('os_image')) {
                obj['os_image'] = ApiClient.convertToType(data['os_image'], 'String');
            }
            if (data.hasOwnProperty('size')) {
                obj['size'] = ApiClient.convertToType(data['size'], 'Number');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
            if (data.hasOwnProperty('volume_type')) {
                obj['volume_type'] = ApiClient.convertToType(data['volume_type'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>VolumeFields</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>VolumeFields</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['callback_url'] && !(typeof data['callback_url'] === 'string' || data['callback_url'] instanceof String)) {
            throw new Error("Expected the field `callback_url` to be a primitive type in the JSON string but got " + data['callback_url']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // validate the optional field `environment`
        if (data['environment']) { // data not null
          EnvironmentFieldsforVolume.validateJSON(data['environment']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['os_image'] && !(typeof data['os_image'] === 'string' || data['os_image'] instanceof String)) {
            throw new Error("Expected the field `os_image` to be a primitive type in the JSON string but got " + data['os_image']);
        }
        // ensure the json data is a string
        if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
            throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
        }
        // ensure the json data is a string
        if (data['volume_type'] && !(typeof data['volume_type'] === 'string' || data['volume_type'] instanceof String)) {
            throw new Error("Expected the field `volume_type` to be a primitive type in the JSON string but got " + data['volume_type']);
        }

        return true;
    }


}



/**
 * @member {Boolean} bootable
 */
VolumeFields.prototype['bootable'] = undefined;

/**
 * @member {String} callback_url
 */
VolumeFields.prototype['callback_url'] = undefined;

/**
 * @member {Date} created_at
 */
VolumeFields.prototype['created_at'] = undefined;

/**
 * @member {String} description
 */
VolumeFields.prototype['description'] = undefined;

/**
 * @member {module:model/EnvironmentFieldsforVolume} environment
 */
VolumeFields.prototype['environment'] = undefined;

/**
 * @member {Number} id
 */
VolumeFields.prototype['id'] = undefined;

/**
 * @member {Number} image_id
 */
VolumeFields.prototype['image_id'] = undefined;

/**
 * @member {String} name
 */
VolumeFields.prototype['name'] = undefined;

/**
 * @member {String} os_image
 */
VolumeFields.prototype['os_image'] = undefined;

/**
 * @member {Number} size
 */
VolumeFields.prototype['size'] = undefined;

/**
 * @member {String} status
 */
VolumeFields.prototype['status'] = undefined;

/**
 * @member {Date} updated_at
 */
VolumeFields.prototype['updated_at'] = undefined;

/**
 * @member {String} volume_type
 */
VolumeFields.prototype['volume_type'] = undefined;






export default VolumeFields;


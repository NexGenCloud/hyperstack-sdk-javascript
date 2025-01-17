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
 * The VolumeStatusChangeFields model module.
 * @module model/VolumeStatusChangeFields
 * @version v1.25.0-alpha
 */
class VolumeStatusChangeFields {
    /**
     * Constructs a new <code>VolumeStatusChangeFields</code>.
     * @alias module:model/VolumeStatusChangeFields
     */
    constructor() { 
        
        VolumeStatusChangeFields.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>VolumeStatusChangeFields</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VolumeStatusChangeFields} obj Optional instance to populate.
     * @return {module:model/VolumeStatusChangeFields} The populated <code>VolumeStatusChangeFields</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VolumeStatusChangeFields();

            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('current_status')) {
                obj['current_status'] = ApiClient.convertToType(data['current_status'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('previous_status')) {
                obj['previous_status'] = ApiClient.convertToType(data['previous_status'], 'String');
            }
            if (data.hasOwnProperty('volume_id')) {
                obj['volume_id'] = ApiClient.convertToType(data['volume_id'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>VolumeStatusChangeFields</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>VolumeStatusChangeFields</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['current_status'] && !(typeof data['current_status'] === 'string' || data['current_status'] instanceof String)) {
            throw new Error("Expected the field `current_status` to be a primitive type in the JSON string but got " + data['current_status']);
        }
        // ensure the json data is a string
        if (data['previous_status'] && !(typeof data['previous_status'] === 'string' || data['previous_status'] instanceof String)) {
            throw new Error("Expected the field `previous_status` to be a primitive type in the JSON string but got " + data['previous_status']);
        }

        return true;
    }


}



/**
 * @member {Date} created_at
 */
VolumeStatusChangeFields.prototype['created_at'] = undefined;

/**
 * @member {String} current_status
 */
VolumeStatusChangeFields.prototype['current_status'] = undefined;

/**
 * @member {Number} id
 */
VolumeStatusChangeFields.prototype['id'] = undefined;

/**
 * @member {String} previous_status
 */
VolumeStatusChangeFields.prototype['previous_status'] = undefined;

/**
 * @member {Number} volume_id
 */
VolumeStatusChangeFields.prototype['volume_id'] = undefined;






export default VolumeStatusChangeFields;


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
 * The InternalVolumeFields model module.
 * @module model/InternalVolumeFields
 * @version v1.25.0-alpha
 */
class InternalVolumeFields {
    /**
     * Constructs a new <code>InternalVolumeFields</code>.
     * @alias module:model/InternalVolumeFields
     */
    constructor() { 
        
        InternalVolumeFields.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InternalVolumeFields</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InternalVolumeFields} obj Optional instance to populate.
     * @return {module:model/InternalVolumeFields} The populated <code>InternalVolumeFields</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InternalVolumeFields();

            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('size')) {
                obj['size'] = ApiClient.convertToType(data['size'], 'Number');
            }
            if (data.hasOwnProperty('volume_type')) {
                obj['volume_type'] = ApiClient.convertToType(data['volume_type'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>InternalVolumeFields</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>InternalVolumeFields</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['volume_type'] && !(typeof data['volume_type'] === 'string' || data['volume_type'] instanceof String)) {
            throw new Error("Expected the field `volume_type` to be a primitive type in the JSON string but got " + data['volume_type']);
        }

        return true;
    }


}



/**
 * @member {String} description
 */
InternalVolumeFields.prototype['description'] = undefined;

/**
 * @member {Number} id
 */
InternalVolumeFields.prototype['id'] = undefined;

/**
 * @member {String} name
 */
InternalVolumeFields.prototype['name'] = undefined;

/**
 * @member {Number} size
 */
InternalVolumeFields.prototype['size'] = undefined;

/**
 * @member {String} volume_type
 */
InternalVolumeFields.prototype['volume_type'] = undefined;






export default InternalVolumeFields;


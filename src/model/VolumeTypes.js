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
 * The VolumeTypes model module.
 * @module model/VolumeTypes
 * @version v1.25.0-alpha
 */
class VolumeTypes {
    /**
     * Constructs a new <code>VolumeTypes</code>.
     * @alias module:model/VolumeTypes
     */
    constructor() { 
        
        VolumeTypes.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>VolumeTypes</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VolumeTypes} obj Optional instance to populate.
     * @return {module:model/VolumeTypes} The populated <code>VolumeTypes</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VolumeTypes();

            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'Boolean');
            }
            if (data.hasOwnProperty('volume_types')) {
                obj['volume_types'] = ApiClient.convertToType(data['volume_types'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>VolumeTypes</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>VolumeTypes</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['message'] && !(typeof data['message'] === 'string' || data['message'] instanceof String)) {
            throw new Error("Expected the field `message` to be a primitive type in the JSON string but got " + data['message']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['volume_types'])) {
            throw new Error("Expected the field `volume_types` to be an array in the JSON data but got " + data['volume_types']);
        }

        return true;
    }


}



/**
 * @member {String} message
 */
VolumeTypes.prototype['message'] = undefined;

/**
 * @member {Boolean} status
 */
VolumeTypes.prototype['status'] = undefined;

/**
 * @member {Array.<String>} volume_types
 */
VolumeTypes.prototype['volume_types'] = undefined;






export default VolumeTypes;


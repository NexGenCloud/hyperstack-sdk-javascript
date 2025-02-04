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
 * The AttachVolumesPayload model module.
 * @module model/AttachVolumesPayload
 * @version v1.25.0-alpha
 */
class AttachVolumesPayload {
    /**
     * Constructs a new <code>AttachVolumesPayload</code>.
     * @alias module:model/AttachVolumesPayload
     */
    constructor() { 
        
        AttachVolumesPayload.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AttachVolumesPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AttachVolumesPayload} obj Optional instance to populate.
     * @return {module:model/AttachVolumesPayload} The populated <code>AttachVolumesPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AttachVolumesPayload();

            if (data.hasOwnProperty('volume_ids')) {
                obj['volume_ids'] = ApiClient.convertToType(data['volume_ids'], ['Number']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AttachVolumesPayload</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AttachVolumesPayload</code>.
     */
    static validateJSON(data) {
        // ensure the json data is an array
        if (!Array.isArray(data['volume_ids'])) {
            throw new Error("Expected the field `volume_ids` to be an array in the JSON data but got " + data['volume_ids']);
        }

        return true;
    }


}



/**
 * @member {Array.<Number>} volume_ids
 */
AttachVolumesPayload.prototype['volume_ids'] = undefined;






export default AttachVolumesPayload;


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
import AttachVolumeFields from './AttachVolumeFields';

/**
 * The DetachVolumes model module.
 * @module model/DetachVolumes
 * @version v1.25.0-alpha
 */
class DetachVolumes {
    /**
     * Constructs a new <code>DetachVolumes</code>.
     * @alias module:model/DetachVolumes
     */
    constructor() { 
        
        DetachVolumes.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DetachVolumes</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DetachVolumes} obj Optional instance to populate.
     * @return {module:model/DetachVolumes} The populated <code>DetachVolumes</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DetachVolumes();

            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'Boolean');
            }
            if (data.hasOwnProperty('volume_attachments')) {
                obj['volume_attachments'] = ApiClient.convertToType(data['volume_attachments'], [AttachVolumeFields]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DetachVolumes</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DetachVolumes</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['message'] && !(typeof data['message'] === 'string' || data['message'] instanceof String)) {
            throw new Error("Expected the field `message` to be a primitive type in the JSON string but got " + data['message']);
        }
        if (data['volume_attachments']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['volume_attachments'])) {
                throw new Error("Expected the field `volume_attachments` to be an array in the JSON data but got " + data['volume_attachments']);
            }
            // validate the optional field `volume_attachments` (array)
            for (const item of data['volume_attachments']) {
                AttachVolumeFields.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {String} message
 */
DetachVolumes.prototype['message'] = undefined;

/**
 * @member {Boolean} status
 */
DetachVolumes.prototype['status'] = undefined;

/**
 * @member {Array.<module:model/AttachVolumeFields>} volume_attachments
 */
DetachVolumes.prototype['volume_attachments'] = undefined;






export default DetachVolumes;


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
import VolumeFieldsforInstance from './VolumeFieldsforInstance';

/**
 * The VolumeAttachmentFields model module.
 * @module model/VolumeAttachmentFields
 * @version v1.25.0-alpha
 */
class VolumeAttachmentFields {
    /**
     * Constructs a new <code>VolumeAttachmentFields</code>.
     * @alias module:model/VolumeAttachmentFields
     */
    constructor() { 
        
        VolumeAttachmentFields.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>VolumeAttachmentFields</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VolumeAttachmentFields} obj Optional instance to populate.
     * @return {module:model/VolumeAttachmentFields} The populated <code>VolumeAttachmentFields</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VolumeAttachmentFields();

            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('device')) {
                obj['device'] = ApiClient.convertToType(data['device'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('volume')) {
                obj['volume'] = VolumeFieldsforInstance.constructFromObject(data['volume']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>VolumeAttachmentFields</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>VolumeAttachmentFields</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['device'] && !(typeof data['device'] === 'string' || data['device'] instanceof String)) {
            throw new Error("Expected the field `device` to be a primitive type in the JSON string but got " + data['device']);
        }
        // ensure the json data is a string
        if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
            throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
        }
        // validate the optional field `volume`
        if (data['volume']) { // data not null
          VolumeFieldsforInstance.validateJSON(data['volume']);
        }

        return true;
    }


}



/**
 * @member {Date} created_at
 */
VolumeAttachmentFields.prototype['created_at'] = undefined;

/**
 * @member {String} device
 */
VolumeAttachmentFields.prototype['device'] = undefined;

/**
 * @member {String} status
 */
VolumeAttachmentFields.prototype['status'] = undefined;

/**
 * @member {module:model/VolumeFieldsforInstance} volume
 */
VolumeAttachmentFields.prototype['volume'] = undefined;






export default VolumeAttachmentFields;


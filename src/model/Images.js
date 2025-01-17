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
import ImageGetResponse from './ImageGetResponse';

/**
 * The Images model module.
 * @module model/Images
 * @version v1.25.0-alpha
 */
class Images {
    /**
     * Constructs a new <code>Images</code>.
     * @alias module:model/Images
     */
    constructor() { 
        
        Images.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Images</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Images} obj Optional instance to populate.
     * @return {module:model/Images} The populated <code>Images</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Images();

            if (data.hasOwnProperty('images')) {
                obj['images'] = ApiClient.convertToType(data['images'], [ImageGetResponse]);
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Images</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Images</code>.
     */
    static validateJSON(data) {
        if (data['images']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['images'])) {
                throw new Error("Expected the field `images` to be an array in the JSON data but got " + data['images']);
            }
            // validate the optional field `images` (array)
            for (const item of data['images']) {
                ImageGetResponse.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['message'] && !(typeof data['message'] === 'string' || data['message'] instanceof String)) {
            throw new Error("Expected the field `message` to be a primitive type in the JSON string but got " + data['message']);
        }

        return true;
    }


}



/**
 * @member {Array.<module:model/ImageGetResponse>} images
 */
Images.prototype['images'] = undefined;

/**
 * @member {String} message
 */
Images.prototype['message'] = undefined;

/**
 * @member {Boolean} status
 */
Images.prototype['status'] = undefined;






export default Images;


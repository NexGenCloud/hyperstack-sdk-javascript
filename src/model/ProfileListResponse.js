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
import ProfileFields from './ProfileFields';

/**
 * The ProfileListResponse model module.
 * @module model/ProfileListResponse
 * @version v1.25.0-alpha
 */
class ProfileListResponse {
    /**
     * Constructs a new <code>ProfileListResponse</code>.
     * @alias module:model/ProfileListResponse
     */
    constructor() { 
        
        ProfileListResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProfileListResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProfileListResponse} obj Optional instance to populate.
     * @return {module:model/ProfileListResponse} The populated <code>ProfileListResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProfileListResponse();

            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('profiles')) {
                obj['profiles'] = ApiClient.convertToType(data['profiles'], [ProfileFields]);
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ProfileListResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ProfileListResponse</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['message'] && !(typeof data['message'] === 'string' || data['message'] instanceof String)) {
            throw new Error("Expected the field `message` to be a primitive type in the JSON string but got " + data['message']);
        }
        if (data['profiles']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['profiles'])) {
                throw new Error("Expected the field `profiles` to be an array in the JSON data but got " + data['profiles']);
            }
            // validate the optional field `profiles` (array)
            for (const item of data['profiles']) {
                ProfileFields.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {String} message
 */
ProfileListResponse.prototype['message'] = undefined;

/**
 * @member {Array.<module:model/ProfileFields>} profiles
 */
ProfileListResponse.prototype['profiles'] = undefined;

/**
 * @member {Boolean} status
 */
ProfileListResponse.prototype['status'] = undefined;






export default ProfileListResponse;


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
import DiscountPlanFields from './DiscountPlanFields';

/**
 * The GetEntityDiscountDetailResponse model module.
 * @module model/GetEntityDiscountDetailResponse
 * @version v1.25.0-alpha
 */
class GetEntityDiscountDetailResponse {
    /**
     * Constructs a new <code>GetEntityDiscountDetailResponse</code>.
     * @alias module:model/GetEntityDiscountDetailResponse
     */
    constructor() { 
        
        GetEntityDiscountDetailResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetEntityDiscountDetailResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetEntityDiscountDetailResponse} obj Optional instance to populate.
     * @return {module:model/GetEntityDiscountDetailResponse} The populated <code>GetEntityDiscountDetailResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetEntityDiscountDetailResponse();

            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('organization')) {
                obj['organization'] = ApiClient.convertToType(data['organization'], [DiscountPlanFields]);
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'Boolean');
            }
            if (data.hasOwnProperty('virtual-machine')) {
                obj['virtual-machine'] = ApiClient.convertToType(data['virtual-machine'], [DiscountPlanFields]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GetEntityDiscountDetailResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetEntityDiscountDetailResponse</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['message'] && !(typeof data['message'] === 'string' || data['message'] instanceof String)) {
            throw new Error("Expected the field `message` to be a primitive type in the JSON string but got " + data['message']);
        }
        if (data['organization']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['organization'])) {
                throw new Error("Expected the field `organization` to be an array in the JSON data but got " + data['organization']);
            }
            // validate the optional field `organization` (array)
            for (const item of data['organization']) {
                DiscountPlanFields.validateJSON(item);
            };
        }
        if (data['virtual-machine']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['virtual-machine'])) {
                throw new Error("Expected the field `virtual-machine` to be an array in the JSON data but got " + data['virtual-machine']);
            }
            // validate the optional field `virtual-machine` (array)
            for (const item of data['virtual-machine']) {
                DiscountPlanFields.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {String} message
 */
GetEntityDiscountDetailResponse.prototype['message'] = undefined;

/**
 * @member {Array.<module:model/DiscountPlanFields>} organization
 */
GetEntityDiscountDetailResponse.prototype['organization'] = undefined;

/**
 * @member {Boolean} status
 */
GetEntityDiscountDetailResponse.prototype['status'] = undefined;

/**
 * @member {Array.<module:model/DiscountPlanFields>} virtual-machine
 */
GetEntityDiscountDetailResponse.prototype['virtual-machine'] = undefined;






export default GetEntityDiscountDetailResponse;


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
import PolicyFields from './PolicyFields';

/**
 * The GetPoliciesResponseModel model module.
 * @module model/GetPoliciesResponseModel
 * @version v1.25.0-alpha
 */
class GetPoliciesResponseModel {
    /**
     * Constructs a new <code>GetPoliciesResponseModel</code>.
     * @alias module:model/GetPoliciesResponseModel
     */
    constructor() { 
        
        GetPoliciesResponseModel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetPoliciesResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetPoliciesResponseModel} obj Optional instance to populate.
     * @return {module:model/GetPoliciesResponseModel} The populated <code>GetPoliciesResponseModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetPoliciesResponseModel();

            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('policies')) {
                obj['policies'] = ApiClient.convertToType(data['policies'], [PolicyFields]);
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GetPoliciesResponseModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetPoliciesResponseModel</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['message'] && !(typeof data['message'] === 'string' || data['message'] instanceof String)) {
            throw new Error("Expected the field `message` to be a primitive type in the JSON string but got " + data['message']);
        }
        if (data['policies']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['policies'])) {
                throw new Error("Expected the field `policies` to be an array in the JSON data but got " + data['policies']);
            }
            // validate the optional field `policies` (array)
            for (const item of data['policies']) {
                PolicyFields.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {String} message
 */
GetPoliciesResponseModel.prototype['message'] = undefined;

/**
 * @member {Array.<module:model/PolicyFields>} policies
 */
GetPoliciesResponseModel.prototype['policies'] = undefined;

/**
 * @member {Boolean} status
 */
GetPoliciesResponseModel.prototype['status'] = undefined;






export default GetPoliciesResponseModel;


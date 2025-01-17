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
import ApiKeyFields from './ApiKeyFields';

/**
 * The GetApiKeysResponseModel model module.
 * @module model/GetApiKeysResponseModel
 * @version v1.25.0-alpha
 */
class GetApiKeysResponseModel {
    /**
     * Constructs a new <code>GetApiKeysResponseModel</code>.
     * @alias module:model/GetApiKeysResponseModel
     */
    constructor() { 
        
        GetApiKeysResponseModel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetApiKeysResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetApiKeysResponseModel} obj Optional instance to populate.
     * @return {module:model/GetApiKeysResponseModel} The populated <code>GetApiKeysResponseModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetApiKeysResponseModel();

            if (data.hasOwnProperty('api_keys')) {
                obj['api_keys'] = ApiClient.convertToType(data['api_keys'], [ApiKeyFields]);
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
     * Validates the JSON data with respect to <code>GetApiKeysResponseModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetApiKeysResponseModel</code>.
     */
    static validateJSON(data) {
        if (data['api_keys']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['api_keys'])) {
                throw new Error("Expected the field `api_keys` to be an array in the JSON data but got " + data['api_keys']);
            }
            // validate the optional field `api_keys` (array)
            for (const item of data['api_keys']) {
                ApiKeyFields.validateJSON(item);
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
 * @member {Array.<module:model/ApiKeyFields>} api_keys
 */
GetApiKeysResponseModel.prototype['api_keys'] = undefined;

/**
 * @member {String} message
 */
GetApiKeysResponseModel.prototype['message'] = undefined;

/**
 * @member {Boolean} status
 */
GetApiKeysResponseModel.prototype['status'] = undefined;






export default GetApiKeysResponseModel;


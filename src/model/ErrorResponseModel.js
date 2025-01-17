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
 * The ErrorResponseModel model module.
 * @module model/ErrorResponseModel
 * @version v1.25.0-alpha
 */
class ErrorResponseModel {
    /**
     * Constructs a new <code>ErrorResponseModel</code>.
     * @alias module:model/ErrorResponseModel
     */
    constructor() { 
        
        ErrorResponseModel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
        obj['status'] = false;
    }

    /**
     * Constructs a <code>ErrorResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ErrorResponseModel} obj Optional instance to populate.
     * @return {module:model/ErrorResponseModel} The populated <code>ErrorResponseModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ErrorResponseModel();

            if (data.hasOwnProperty('error_reason')) {
                obj['error_reason'] = ApiClient.convertToType(data['error_reason'], 'String');
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
     * Validates the JSON data with respect to <code>ErrorResponseModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ErrorResponseModel</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['error_reason'] && !(typeof data['error_reason'] === 'string' || data['error_reason'] instanceof String)) {
            throw new Error("Expected the field `error_reason` to be a primitive type in the JSON string but got " + data['error_reason']);
        }
        // ensure the json data is a string
        if (data['message'] && !(typeof data['message'] === 'string' || data['message'] instanceof String)) {
            throw new Error("Expected the field `message` to be a primitive type in the JSON string but got " + data['message']);
        }

        return true;
    }


}



/**
 * @member {String} error_reason
 */
ErrorResponseModel.prototype['error_reason'] = undefined;

/**
 * @member {String} message
 */
ErrorResponseModel.prototype['message'] = undefined;

/**
 * @member {Boolean} status
 * @default false
 */
ErrorResponseModel.prototype['status'] = false;






export default ErrorResponseModel;


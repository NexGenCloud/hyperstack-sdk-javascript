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
import NewModelResponse from './NewModelResponse';

/**
 * The NewStockResponse model module.
 * @module model/NewStockResponse
 * @version v1.25.0-alpha
 */
class NewStockResponse {
    /**
     * Constructs a new <code>NewStockResponse</code>.
     * @alias module:model/NewStockResponse
     */
    constructor() { 
        
        NewStockResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>NewStockResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewStockResponse} obj Optional instance to populate.
     * @return {module:model/NewStockResponse} The populated <code>NewStockResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NewStockResponse();

            if (data.hasOwnProperty('models')) {
                obj['models'] = ApiClient.convertToType(data['models'], [NewModelResponse]);
            }
            if (data.hasOwnProperty('region')) {
                obj['region'] = ApiClient.convertToType(data['region'], 'String');
            }
            if (data.hasOwnProperty('stock-type')) {
                obj['stock-type'] = ApiClient.convertToType(data['stock-type'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>NewStockResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>NewStockResponse</code>.
     */
    static validateJSON(data) {
        if (data['models']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['models'])) {
                throw new Error("Expected the field `models` to be an array in the JSON data but got " + data['models']);
            }
            // validate the optional field `models` (array)
            for (const item of data['models']) {
                NewModelResponse.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['region'] && !(typeof data['region'] === 'string' || data['region'] instanceof String)) {
            throw new Error("Expected the field `region` to be a primitive type in the JSON string but got " + data['region']);
        }
        // ensure the json data is a string
        if (data['stock-type'] && !(typeof data['stock-type'] === 'string' || data['stock-type'] instanceof String)) {
            throw new Error("Expected the field `stock-type` to be a primitive type in the JSON string but got " + data['stock-type']);
        }

        return true;
    }


}



/**
 * @member {Array.<module:model/NewModelResponse>} models
 */
NewStockResponse.prototype['models'] = undefined;

/**
 * @member {String} region
 */
NewStockResponse.prototype['region'] = undefined;

/**
 * @member {String} stock-type
 */
NewStockResponse.prototype['stock-type'] = undefined;






export default NewStockResponse;


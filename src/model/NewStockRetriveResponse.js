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
import NewStockResponse from './NewStockResponse';

/**
 * The NewStockRetriveResponse model module.
 * @module model/NewStockRetriveResponse
 * @version v1.25.0-alpha
 */
class NewStockRetriveResponse {
    /**
     * Constructs a new <code>NewStockRetriveResponse</code>.
     * @alias module:model/NewStockRetriveResponse
     */
    constructor() { 
        
        NewStockRetriveResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>NewStockRetriveResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewStockRetriveResponse} obj Optional instance to populate.
     * @return {module:model/NewStockRetriveResponse} The populated <code>NewStockRetriveResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NewStockRetriveResponse();

            if (data.hasOwnProperty('stocks')) {
                obj['stocks'] = ApiClient.convertToType(data['stocks'], [NewStockResponse]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>NewStockRetriveResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>NewStockRetriveResponse</code>.
     */
    static validateJSON(data) {
        if (data['stocks']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['stocks'])) {
                throw new Error("Expected the field `stocks` to be an array in the JSON data but got " + data['stocks']);
            }
            // validate the optional field `stocks` (array)
            for (const item of data['stocks']) {
                NewStockResponse.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {Array.<module:model/NewStockResponse>} stocks
 */
NewStockRetriveResponse.prototype['stocks'] = undefined;






export default NewStockRetriveResponse;


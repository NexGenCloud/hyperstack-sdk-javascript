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
import Data from './Data';

/**
 * The ExcludeBillingPostResponse model module.
 * @module model/ExcludeBillingPostResponse
 * @version v1.25.0-alpha
 */
class ExcludeBillingPostResponse {
    /**
     * Constructs a new <code>ExcludeBillingPostResponse</code>.
     * @alias module:model/ExcludeBillingPostResponse
     */
    constructor() { 
        
        ExcludeBillingPostResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ExcludeBillingPostResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ExcludeBillingPostResponse} obj Optional instance to populate.
     * @return {module:model/ExcludeBillingPostResponse} The populated <code>ExcludeBillingPostResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ExcludeBillingPostResponse();

            if (data.hasOwnProperty('data')) {
                obj['data'] = Data.constructFromObject(data['data']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ExcludeBillingPostResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ExcludeBillingPostResponse</code>.
     */
    static validateJSON(data) {
        // validate the optional field `data`
        if (data['data']) { // data not null
          Data.validateJSON(data['data']);
        }

        return true;
    }


}



/**
 * @member {module:model/Data} data
 */
ExcludeBillingPostResponse.prototype['data'] = undefined;






export default ExcludeBillingPostResponse;


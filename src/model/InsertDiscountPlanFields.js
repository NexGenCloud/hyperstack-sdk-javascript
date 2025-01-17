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
import CustomerFields from './CustomerFields';
import DiscountResourceFields from './DiscountResourceFields';

/**
 * The InsertDiscountPlanFields model module.
 * @module model/InsertDiscountPlanFields
 * @version v1.25.0-alpha
 */
class InsertDiscountPlanFields {
    /**
     * Constructs a new <code>InsertDiscountPlanFields</code>.
     * @alias module:model/InsertDiscountPlanFields
     */
    constructor() { 
        
        InsertDiscountPlanFields.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InsertDiscountPlanFields</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InsertDiscountPlanFields} obj Optional instance to populate.
     * @return {module:model/InsertDiscountPlanFields} The populated <code>InsertDiscountPlanFields</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InsertDiscountPlanFields();

            if (data.hasOwnProperty('customers')) {
                obj['customers'] = ApiClient.convertToType(data['customers'], [CustomerFields]);
            }
            if (data.hasOwnProperty('discount_resources')) {
                obj['discount_resources'] = ApiClient.convertToType(data['discount_resources'], [DiscountResourceFields]);
            }
            if (data.hasOwnProperty('discount_status')) {
                obj['discount_status'] = ApiClient.convertToType(data['discount_status'], 'String');
            }
            if (data.hasOwnProperty('end_date')) {
                obj['end_date'] = ApiClient.convertToType(data['end_date'], 'Date');
            }
            if (data.hasOwnProperty('start_date')) {
                obj['start_date'] = ApiClient.convertToType(data['start_date'], 'Date');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>InsertDiscountPlanFields</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>InsertDiscountPlanFields</code>.
     */
    static validateJSON(data) {
        if (data['customers']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['customers'])) {
                throw new Error("Expected the field `customers` to be an array in the JSON data but got " + data['customers']);
            }
            // validate the optional field `customers` (array)
            for (const item of data['customers']) {
                CustomerFields.validateJSON(item);
            };
        }
        if (data['discount_resources']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['discount_resources'])) {
                throw new Error("Expected the field `discount_resources` to be an array in the JSON data but got " + data['discount_resources']);
            }
            // validate the optional field `discount_resources` (array)
            for (const item of data['discount_resources']) {
                DiscountResourceFields.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['discount_status'] && !(typeof data['discount_status'] === 'string' || data['discount_status'] instanceof String)) {
            throw new Error("Expected the field `discount_status` to be a primitive type in the JSON string but got " + data['discount_status']);
        }

        return true;
    }


}



/**
 * @member {Array.<module:model/CustomerFields>} customers
 */
InsertDiscountPlanFields.prototype['customers'] = undefined;

/**
 * @member {Array.<module:model/DiscountResourceFields>} discount_resources
 */
InsertDiscountPlanFields.prototype['discount_resources'] = undefined;

/**
 * @member {String} discount_status
 */
InsertDiscountPlanFields.prototype['discount_status'] = undefined;

/**
 * @member {Date} end_date
 */
InsertDiscountPlanFields.prototype['end_date'] = undefined;

/**
 * @member {Date} start_date
 */
InsertDiscountPlanFields.prototype['start_date'] = undefined;






export default InsertDiscountPlanFields;


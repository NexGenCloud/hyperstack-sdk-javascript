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
 * The DiscountResourcePayload model module.
 * @module model/DiscountResourcePayload
 * @version v1.25.0-alpha
 */
class DiscountResourcePayload {
    /**
     * Constructs a new <code>DiscountResourcePayload</code>.
     * @alias module:model/DiscountResourcePayload
     * @param discountAmount {Number} 
     * @param discountPercent {Number} 
     * @param discountType {String} 
     * @param resourceId {Number} 
     */
    constructor(discountAmount, discountPercent, discountType, resourceId) { 
        
        DiscountResourcePayload.initialize(this, discountAmount, discountPercent, discountType, resourceId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, discountAmount, discountPercent, discountType, resourceId) { 
        obj['discount_amount'] = discountAmount;
        obj['discount_percent'] = discountPercent;
        obj['discount_type'] = discountType;
        obj['resource_id'] = resourceId;
    }

    /**
     * Constructs a <code>DiscountResourcePayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DiscountResourcePayload} obj Optional instance to populate.
     * @return {module:model/DiscountResourcePayload} The populated <code>DiscountResourcePayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DiscountResourcePayload();

            if (data.hasOwnProperty('discount_amount')) {
                obj['discount_amount'] = ApiClient.convertToType(data['discount_amount'], 'Number');
            }
            if (data.hasOwnProperty('discount_percent')) {
                obj['discount_percent'] = ApiClient.convertToType(data['discount_percent'], 'Number');
            }
            if (data.hasOwnProperty('discount_type')) {
                obj['discount_type'] = ApiClient.convertToType(data['discount_type'], 'String');
            }
            if (data.hasOwnProperty('resource_id')) {
                obj['resource_id'] = ApiClient.convertToType(data['resource_id'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DiscountResourcePayload</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DiscountResourcePayload</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of DiscountResourcePayload.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['discount_type'] && !(typeof data['discount_type'] === 'string' || data['discount_type'] instanceof String)) {
            throw new Error("Expected the field `discount_type` to be a primitive type in the JSON string but got " + data['discount_type']);
        }

        return true;
    }


}

DiscountResourcePayload.RequiredProperties = ["discount_amount", "discount_percent", "discount_type", "resource_id"];

/**
 * @member {Number} discount_amount
 */
DiscountResourcePayload.prototype['discount_amount'] = undefined;

/**
 * @member {Number} discount_percent
 */
DiscountResourcePayload.prototype['discount_percent'] = undefined;

/**
 * @member {String} discount_type
 */
DiscountResourcePayload.prototype['discount_type'] = undefined;

/**
 * @member {Number} resource_id
 */
DiscountResourcePayload.prototype['resource_id'] = undefined;






export default DiscountResourcePayload;


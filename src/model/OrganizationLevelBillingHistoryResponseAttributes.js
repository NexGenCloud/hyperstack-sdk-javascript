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
 * The OrganizationLevelBillingHistoryResponseAttributes model module.
 * @module model/OrganizationLevelBillingHistoryResponseAttributes
 * @version v1.25.0-alpha
 */
class OrganizationLevelBillingHistoryResponseAttributes {
    /**
     * Constructs a new <code>OrganizationLevelBillingHistoryResponseAttributes</code>.
     * @alias module:model/OrganizationLevelBillingHistoryResponseAttributes
     */
    constructor() { 
        
        OrganizationLevelBillingHistoryResponseAttributes.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrganizationLevelBillingHistoryResponseAttributes</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrganizationLevelBillingHistoryResponseAttributes} obj Optional instance to populate.
     * @return {module:model/OrganizationLevelBillingHistoryResponseAttributes} The populated <code>OrganizationLevelBillingHistoryResponseAttributes</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrganizationLevelBillingHistoryResponseAttributes();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OrganizationLevelBillingHistoryResponseAttributes</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OrganizationLevelBillingHistoryResponseAttributes</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }

        return true;
    }


}



/**
 * @member {String} id
 */
OrganizationLevelBillingHistoryResponseAttributes.prototype['id'] = undefined;






export default OrganizationLevelBillingHistoryResponseAttributes;


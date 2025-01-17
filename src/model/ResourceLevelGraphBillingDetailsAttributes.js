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
 * The ResourceLevelGraphBillingDetailsAttributes model module.
 * @module model/ResourceLevelGraphBillingDetailsAttributes
 * @version v1.25.0-alpha
 */
class ResourceLevelGraphBillingDetailsAttributes {
    /**
     * Constructs a new <code>ResourceLevelGraphBillingDetailsAttributes</code>.
     * @alias module:model/ResourceLevelGraphBillingDetailsAttributes
     */
    constructor() { 
        
        ResourceLevelGraphBillingDetailsAttributes.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ResourceLevelGraphBillingDetailsAttributes</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ResourceLevelGraphBillingDetailsAttributes} obj Optional instance to populate.
     * @return {module:model/ResourceLevelGraphBillingDetailsAttributes} The populated <code>ResourceLevelGraphBillingDetailsAttributes</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ResourceLevelGraphBillingDetailsAttributes();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('infrahub_id')) {
                obj['infrahub_id'] = ApiClient.convertToType(data['infrahub_id'], 'Number');
            }
            if (data.hasOwnProperty('resource_name')) {
                obj['resource_name'] = ApiClient.convertToType(data['resource_name'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ResourceLevelGraphBillingDetailsAttributes</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ResourceLevelGraphBillingDetailsAttributes</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['resource_name'] && !(typeof data['resource_name'] === 'string' || data['resource_name'] instanceof String)) {
            throw new Error("Expected the field `resource_name` to be a primitive type in the JSON string but got " + data['resource_name']);
        }

        return true;
    }


}



/**
 * @member {String} id
 */
ResourceLevelGraphBillingDetailsAttributes.prototype['id'] = undefined;

/**
 * @member {Number} infrahub_id
 */
ResourceLevelGraphBillingDetailsAttributes.prototype['infrahub_id'] = undefined;

/**
 * @member {String} resource_name
 */
ResourceLevelGraphBillingDetailsAttributes.prototype['resource_name'] = undefined;






export default ResourceLevelGraphBillingDetailsAttributes;


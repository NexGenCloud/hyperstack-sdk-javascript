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
 * The ProfileFields model module.
 * @module model/ProfileFields
 * @version v1.25.0-alpha
 */
class ProfileFields {
    /**
     * Constructs a new <code>ProfileFields</code>.
     * @alias module:model/ProfileFields
     */
    constructor() { 
        
        ProfileFields.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProfileFields</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProfileFields} obj Optional instance to populate.
     * @return {module:model/ProfileFields} The populated <code>ProfileFields</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProfileFields();

            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ProfileFields</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ProfileFields</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['data'] && !(typeof data['data'] === 'string' || data['data'] instanceof String)) {
            throw new Error("Expected the field `data` to be a primitive type in the JSON string but got " + data['data']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }

        return true;
    }


}



/**
 * @member {Date} created_at
 */
ProfileFields.prototype['created_at'] = undefined;

/**
 * @member {String} data
 */
ProfileFields.prototype['data'] = undefined;

/**
 * @member {String} description
 */
ProfileFields.prototype['description'] = undefined;

/**
 * @member {Number} id
 */
ProfileFields.prototype['id'] = undefined;

/**
 * @member {String} name
 */
ProfileFields.prototype['name'] = undefined;






export default ProfileFields;


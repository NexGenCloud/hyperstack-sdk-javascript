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
 * The UsersInfoFields model module.
 * @module model/UsersInfoFields
 * @version v1.25.0-alpha
 */
class UsersInfoFields {
    /**
     * Constructs a new <code>UsersInfoFields</code>.
     * @alias module:model/UsersInfoFields
     */
    constructor() { 
        
        UsersInfoFields.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UsersInfoFields</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UsersInfoFields} obj Optional instance to populate.
     * @return {module:model/UsersInfoFields} The populated <code>UsersInfoFields</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UsersInfoFields();

            if (data.hasOwnProperty('billing_address1')) {
                obj['billing_address1'] = ApiClient.convertToType(data['billing_address1'], 'String');
            }
            if (data.hasOwnProperty('billing_address2')) {
                obj['billing_address2'] = ApiClient.convertToType(data['billing_address2'], 'String');
            }
            if (data.hasOwnProperty('business')) {
                obj['business'] = ApiClient.convertToType(data['business'], 'Boolean');
            }
            if (data.hasOwnProperty('company_name')) {
                obj['company_name'] = ApiClient.convertToType(data['company_name'], 'String');
            }
            if (data.hasOwnProperty('country')) {
                obj['country'] = ApiClient.convertToType(data['country'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('organization_id')) {
                obj['organization_id'] = ApiClient.convertToType(data['organization_id'], 'Number');
            }
            if (data.hasOwnProperty('phone')) {
                obj['phone'] = ApiClient.convertToType(data['phone'], 'String');
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = ApiClient.convertToType(data['state'], 'String');
            }
            if (data.hasOwnProperty('vat_number')) {
                obj['vat_number'] = ApiClient.convertToType(data['vat_number'], 'String');
            }
            if (data.hasOwnProperty('zip_code')) {
                obj['zip_code'] = ApiClient.convertToType(data['zip_code'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UsersInfoFields</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UsersInfoFields</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['billing_address1'] && !(typeof data['billing_address1'] === 'string' || data['billing_address1'] instanceof String)) {
            throw new Error("Expected the field `billing_address1` to be a primitive type in the JSON string but got " + data['billing_address1']);
        }
        // ensure the json data is a string
        if (data['billing_address2'] && !(typeof data['billing_address2'] === 'string' || data['billing_address2'] instanceof String)) {
            throw new Error("Expected the field `billing_address2` to be a primitive type in the JSON string but got " + data['billing_address2']);
        }
        // ensure the json data is a string
        if (data['company_name'] && !(typeof data['company_name'] === 'string' || data['company_name'] instanceof String)) {
            throw new Error("Expected the field `company_name` to be a primitive type in the JSON string but got " + data['company_name']);
        }
        // ensure the json data is a string
        if (data['country'] && !(typeof data['country'] === 'string' || data['country'] instanceof String)) {
            throw new Error("Expected the field `country` to be a primitive type in the JSON string but got " + data['country']);
        }
        // ensure the json data is a string
        if (data['email'] && !(typeof data['email'] === 'string' || data['email'] instanceof String)) {
            throw new Error("Expected the field `email` to be a primitive type in the JSON string but got " + data['email']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['phone'] && !(typeof data['phone'] === 'string' || data['phone'] instanceof String)) {
            throw new Error("Expected the field `phone` to be a primitive type in the JSON string but got " + data['phone']);
        }
        // ensure the json data is a string
        if (data['state'] && !(typeof data['state'] === 'string' || data['state'] instanceof String)) {
            throw new Error("Expected the field `state` to be a primitive type in the JSON string but got " + data['state']);
        }
        // ensure the json data is a string
        if (data['vat_number'] && !(typeof data['vat_number'] === 'string' || data['vat_number'] instanceof String)) {
            throw new Error("Expected the field `vat_number` to be a primitive type in the JSON string but got " + data['vat_number']);
        }
        // ensure the json data is a string
        if (data['zip_code'] && !(typeof data['zip_code'] === 'string' || data['zip_code'] instanceof String)) {
            throw new Error("Expected the field `zip_code` to be a primitive type in the JSON string but got " + data['zip_code']);
        }

        return true;
    }


}



/**
 * @member {String} billing_address1
 */
UsersInfoFields.prototype['billing_address1'] = undefined;

/**
 * @member {String} billing_address2
 */
UsersInfoFields.prototype['billing_address2'] = undefined;

/**
 * @member {Boolean} business
 */
UsersInfoFields.prototype['business'] = undefined;

/**
 * @member {String} company_name
 */
UsersInfoFields.prototype['company_name'] = undefined;

/**
 * @member {String} country
 */
UsersInfoFields.prototype['country'] = undefined;

/**
 * @member {Date} created_at
 */
UsersInfoFields.prototype['created_at'] = undefined;

/**
 * @member {String} email
 */
UsersInfoFields.prototype['email'] = undefined;

/**
 * @member {Number} id
 */
UsersInfoFields.prototype['id'] = undefined;

/**
 * @member {String} name
 */
UsersInfoFields.prototype['name'] = undefined;

/**
 * @member {Number} organization_id
 */
UsersInfoFields.prototype['organization_id'] = undefined;

/**
 * @member {String} phone
 */
UsersInfoFields.prototype['phone'] = undefined;

/**
 * @member {String} state
 */
UsersInfoFields.prototype['state'] = undefined;

/**
 * @member {String} vat_number
 */
UsersInfoFields.prototype['vat_number'] = undefined;

/**
 * @member {String} zip_code
 */
UsersInfoFields.prototype['zip_code'] = undefined;






export default UsersInfoFields;


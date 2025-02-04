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
 * The WarningMailLogFields model module.
 * @module model/WarningMailLogFields
 * @version v1.25.0-alpha
 */
class WarningMailLogFields {
    /**
     * Constructs a new <code>WarningMailLogFields</code>.
     * @alias module:model/WarningMailLogFields
     */
    constructor() { 
        
        WarningMailLogFields.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WarningMailLogFields</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WarningMailLogFields} obj Optional instance to populate.
     * @return {module:model/WarningMailLogFields} The populated <code>WarningMailLogFields</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WarningMailLogFields();

            if (data.hasOwnProperty('content')) {
                obj['content'] = ApiClient.convertToType(data['content'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('organization_id')) {
                obj['organization_id'] = ApiClient.convertToType(data['organization_id'], 'Number');
            }
            if (data.hasOwnProperty('threshold')) {
                obj['threshold'] = ApiClient.convertToType(data['threshold'], 'Number');
            }
            if (data.hasOwnProperty('topic')) {
                obj['topic'] = ApiClient.convertToType(data['topic'], 'String');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>WarningMailLogFields</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WarningMailLogFields</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['content'] && !(typeof data['content'] === 'string' || data['content'] instanceof String)) {
            throw new Error("Expected the field `content` to be a primitive type in the JSON string but got " + data['content']);
        }
        // ensure the json data is a string
        if (data['created_at'] && !(typeof data['created_at'] === 'string' || data['created_at'] instanceof String)) {
            throw new Error("Expected the field `created_at` to be a primitive type in the JSON string but got " + data['created_at']);
        }
        // ensure the json data is a string
        if (data['topic'] && !(typeof data['topic'] === 'string' || data['topic'] instanceof String)) {
            throw new Error("Expected the field `topic` to be a primitive type in the JSON string but got " + data['topic']);
        }
        // ensure the json data is a string
        if (data['updated_at'] && !(typeof data['updated_at'] === 'string' || data['updated_at'] instanceof String)) {
            throw new Error("Expected the field `updated_at` to be a primitive type in the JSON string but got " + data['updated_at']);
        }

        return true;
    }


}



/**
 * @member {String} content
 */
WarningMailLogFields.prototype['content'] = undefined;

/**
 * @member {String} created_at
 */
WarningMailLogFields.prototype['created_at'] = undefined;

/**
 * @member {Number} id
 */
WarningMailLogFields.prototype['id'] = undefined;

/**
 * @member {Number} organization_id
 */
WarningMailLogFields.prototype['organization_id'] = undefined;

/**
 * @member {Number} threshold
 */
WarningMailLogFields.prototype['threshold'] = undefined;

/**
 * @member {String} topic
 */
WarningMailLogFields.prototype['topic'] = undefined;

/**
 * @member {String} updated_at
 */
WarningMailLogFields.prototype['updated_at'] = undefined;






export default WarningMailLogFields;


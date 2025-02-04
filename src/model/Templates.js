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
import TemplateFields from './TemplateFields';

/**
 * The Templates model module.
 * @module model/Templates
 * @version v1.25.0-alpha
 */
class Templates {
    /**
     * Constructs a new <code>Templates</code>.
     * @alias module:model/Templates
     */
    constructor() { 
        
        Templates.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Templates</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Templates} obj Optional instance to populate.
     * @return {module:model/Templates} The populated <code>Templates</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Templates();

            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'Boolean');
            }
            if (data.hasOwnProperty('templates')) {
                obj['templates'] = ApiClient.convertToType(data['templates'], [TemplateFields]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Templates</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Templates</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['message'] && !(typeof data['message'] === 'string' || data['message'] instanceof String)) {
            throw new Error("Expected the field `message` to be a primitive type in the JSON string but got " + data['message']);
        }
        if (data['templates']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['templates'])) {
                throw new Error("Expected the field `templates` to be an array in the JSON data but got " + data['templates']);
            }
            // validate the optional field `templates` (array)
            for (const item of data['templates']) {
                TemplateFields.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {String} message
 */
Templates.prototype['message'] = undefined;

/**
 * @member {Boolean} status
 */
Templates.prototype['status'] = undefined;

/**
 * @member {Array.<module:model/TemplateFields>} templates
 */
Templates.prototype['templates'] = undefined;






export default Templates;


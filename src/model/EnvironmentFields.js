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
import EnvironmentFeatures from './EnvironmentFeatures';

/**
 * The EnvironmentFields model module.
 * @module model/EnvironmentFields
 * @version v1.25.0-alpha
 */
class EnvironmentFields {
    /**
     * Constructs a new <code>EnvironmentFields</code>.
     * @alias module:model/EnvironmentFields
     */
    constructor() { 
        
        EnvironmentFields.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EnvironmentFields</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EnvironmentFields} obj Optional instance to populate.
     * @return {module:model/EnvironmentFields} The populated <code>EnvironmentFields</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EnvironmentFields();

            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('features')) {
                obj['features'] = EnvironmentFeatures.constructFromObject(data['features']);
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('region')) {
                obj['region'] = ApiClient.convertToType(data['region'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EnvironmentFields</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EnvironmentFields</code>.
     */
    static validateJSON(data) {
        // validate the optional field `features`
        if (data['features']) { // data not null
          EnvironmentFeatures.validateJSON(data['features']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['region'] && !(typeof data['region'] === 'string' || data['region'] instanceof String)) {
            throw new Error("Expected the field `region` to be a primitive type in the JSON string but got " + data['region']);
        }

        return true;
    }


}



/**
 * @member {Date} created_at
 */
EnvironmentFields.prototype['created_at'] = undefined;

/**
 * @member {module:model/EnvironmentFeatures} features
 */
EnvironmentFields.prototype['features'] = undefined;

/**
 * @member {Number} id
 */
EnvironmentFields.prototype['id'] = undefined;

/**
 * @member {String} name
 */
EnvironmentFields.prototype['name'] = undefined;

/**
 * @member {String} region
 */
EnvironmentFields.prototype['region'] = undefined;






export default EnvironmentFields;


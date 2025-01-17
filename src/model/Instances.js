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
import InstanceFields from './InstanceFields';

/**
 * The Instances model module.
 * @module model/Instances
 * @version v1.25.0-alpha
 */
class Instances {
    /**
     * Constructs a new <code>Instances</code>.
     * @alias module:model/Instances
     */
    constructor() { 
        
        Instances.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Instances</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Instances} obj Optional instance to populate.
     * @return {module:model/Instances} The populated <code>Instances</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Instances();

            if (data.hasOwnProperty('count')) {
                obj['count'] = ApiClient.convertToType(data['count'], 'Number');
            }
            if (data.hasOwnProperty('instances')) {
                obj['instances'] = ApiClient.convertToType(data['instances'], [InstanceFields]);
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('page')) {
                obj['page'] = ApiClient.convertToType(data['page'], 'Number');
            }
            if (data.hasOwnProperty('page_size')) {
                obj['page_size'] = ApiClient.convertToType(data['page_size'], 'Number');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Instances</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Instances</code>.
     */
    static validateJSON(data) {
        if (data['instances']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['instances'])) {
                throw new Error("Expected the field `instances` to be an array in the JSON data but got " + data['instances']);
            }
            // validate the optional field `instances` (array)
            for (const item of data['instances']) {
                InstanceFields.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['message'] && !(typeof data['message'] === 'string' || data['message'] instanceof String)) {
            throw new Error("Expected the field `message` to be a primitive type in the JSON string but got " + data['message']);
        }

        return true;
    }


}



/**
 * @member {Number} count
 */
Instances.prototype['count'] = undefined;

/**
 * @member {Array.<module:model/InstanceFields>} instances
 */
Instances.prototype['instances'] = undefined;

/**
 * @member {String} message
 */
Instances.prototype['message'] = undefined;

/**
 * @member {Number} page
 */
Instances.prototype['page'] = undefined;

/**
 * @member {Number} page_size
 */
Instances.prototype['page_size'] = undefined;

/**
 * @member {Boolean} status
 */
Instances.prototype['status'] = undefined;






export default Instances;


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
import FlavorObjectFields from './FlavorObjectFields';

/**
 * The InstanceResizePayload model module.
 * @module model/InstanceResizePayload
 * @version v1.25.0-alpha
 */
class InstanceResizePayload {
    /**
     * Constructs a new <code>InstanceResizePayload</code>.
     * @alias module:model/InstanceResizePayload
     */
    constructor() { 
        
        InstanceResizePayload.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InstanceResizePayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InstanceResizePayload} obj Optional instance to populate.
     * @return {module:model/InstanceResizePayload} The populated <code>InstanceResizePayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InstanceResizePayload();

            if (data.hasOwnProperty('flavor')) {
                obj['flavor'] = FlavorObjectFields.constructFromObject(data['flavor']);
            }
            if (data.hasOwnProperty('flavor_name')) {
                obj['flavor_name'] = ApiClient.convertToType(data['flavor_name'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>InstanceResizePayload</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>InstanceResizePayload</code>.
     */
    static validateJSON(data) {
        // validate the optional field `flavor`
        if (data['flavor']) { // data not null
          FlavorObjectFields.validateJSON(data['flavor']);
        }
        // ensure the json data is a string
        if (data['flavor_name'] && !(typeof data['flavor_name'] === 'string' || data['flavor_name'] instanceof String)) {
            throw new Error("Expected the field `flavor_name` to be a primitive type in the JSON string but got " + data['flavor_name']);
        }

        return true;
    }


}



/**
 * @member {module:model/FlavorObjectFields} flavor
 */
InstanceResizePayload.prototype['flavor'] = undefined;

/**
 * @member {String} flavor_name
 */
InstanceResizePayload.prototype['flavor_name'] = undefined;






export default InstanceResizePayload;


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
 * The AllocatedGPUCountGraph model module.
 * @module model/AllocatedGPUCountGraph
 * @version v1.25.0-alpha
 */
class AllocatedGPUCountGraph {
    /**
     * Constructs a new <code>AllocatedGPUCountGraph</code>.
     * @alias module:model/AllocatedGPUCountGraph
     */
    constructor() { 
        
        AllocatedGPUCountGraph.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AllocatedGPUCountGraph</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AllocatedGPUCountGraph} obj Optional instance to populate.
     * @return {module:model/AllocatedGPUCountGraph} The populated <code>AllocatedGPUCountGraph</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AllocatedGPUCountGraph();

            if (data.hasOwnProperty('datetime')) {
                obj['datetime'] = ApiClient.convertToType(data['datetime'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AllocatedGPUCountGraph</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AllocatedGPUCountGraph</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['datetime'] && !(typeof data['datetime'] === 'string' || data['datetime'] instanceof String)) {
            throw new Error("Expected the field `datetime` to be a primitive type in the JSON string but got " + data['datetime']);
        }

        return true;
    }


}



/**
 * @member {String} datetime
 */
AllocatedGPUCountGraph.prototype['datetime'] = undefined;

/**
 * @member {Number} value
 */
AllocatedGPUCountGraph.prototype['value'] = undefined;






export default AllocatedGPUCountGraph;


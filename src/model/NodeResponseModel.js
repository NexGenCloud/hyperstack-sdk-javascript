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
import NodeModel from './NodeModel';

/**
 * The NodeResponseModel model module.
 * @module model/NodeResponseModel
 * @version v1.25.0-alpha
 */
class NodeResponseModel {
    /**
     * Constructs a new <code>NodeResponseModel</code>.
     * @alias module:model/NodeResponseModel
     */
    constructor() { 
        
        NodeResponseModel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>NodeResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NodeResponseModel} obj Optional instance to populate.
     * @return {module:model/NodeResponseModel} The populated <code>NodeResponseModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NodeResponseModel();

            if (data.hasOwnProperty('nodes')) {
                obj['nodes'] = ApiClient.convertToType(data['nodes'], [NodeModel]);
            }
            if (data.hasOwnProperty('region')) {
                obj['region'] = ApiClient.convertToType(data['region'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>NodeResponseModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>NodeResponseModel</code>.
     */
    static validateJSON(data) {
        if (data['nodes']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['nodes'])) {
                throw new Error("Expected the field `nodes` to be an array in the JSON data but got " + data['nodes']);
            }
            // validate the optional field `nodes` (array)
            for (const item of data['nodes']) {
                NodeModel.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['region'] && !(typeof data['region'] === 'string' || data['region'] instanceof String)) {
            throw new Error("Expected the field `region` to be a primitive type in the JSON string but got " + data['region']);
        }

        return true;
    }


}



/**
 * @member {Array.<module:model/NodeModel>} nodes
 */
NodeResponseModel.prototype['nodes'] = undefined;

/**
 * @member {String} region
 */
NodeResponseModel.prototype['region'] = undefined;






export default NodeResponseModel;


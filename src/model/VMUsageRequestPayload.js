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
 * The VMUsageRequestPayload model module.
 * @module model/VMUsageRequestPayload
 * @version v1.25.0-alpha
 */
class VMUsageRequestPayload {
    /**
     * Constructs a new <code>VMUsageRequestPayload</code>.
     * @alias module:model/VMUsageRequestPayload
     * @param vmIds {Array.<Number>} List of virtual machine IDs
     */
    constructor(vmIds) { 
        
        VMUsageRequestPayload.initialize(this, vmIds);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, vmIds) { 
        obj['vm_ids'] = vmIds;
    }

    /**
     * Constructs a <code>VMUsageRequestPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VMUsageRequestPayload} obj Optional instance to populate.
     * @return {module:model/VMUsageRequestPayload} The populated <code>VMUsageRequestPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VMUsageRequestPayload();

            if (data.hasOwnProperty('vm_ids')) {
                obj['vm_ids'] = ApiClient.convertToType(data['vm_ids'], ['Number']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>VMUsageRequestPayload</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>VMUsageRequestPayload</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of VMUsageRequestPayload.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is an array
        if (!Array.isArray(data['vm_ids'])) {
            throw new Error("Expected the field `vm_ids` to be an array in the JSON data but got " + data['vm_ids']);
        }

        return true;
    }


}

VMUsageRequestPayload.RequiredProperties = ["vm_ids"];

/**
 * List of virtual machine IDs
 * @member {Array.<Number>} vm_ids
 */
VMUsageRequestPayload.prototype['vm_ids'] = undefined;






export default VMUsageRequestPayload;


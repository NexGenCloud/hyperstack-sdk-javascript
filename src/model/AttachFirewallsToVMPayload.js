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
 * The AttachFirewallsToVMPayload model module.
 * @module model/AttachFirewallsToVMPayload
 * @version v1.25.0-alpha
 */
class AttachFirewallsToVMPayload {
    /**
     * Constructs a new <code>AttachFirewallsToVMPayload</code>.
     * @alias module:model/AttachFirewallsToVMPayload
     * @param firewalls {Array.<Number>} Ids of the firewalls to be attached with a virtual machine.
     */
    constructor(firewalls) { 
        
        AttachFirewallsToVMPayload.initialize(this, firewalls);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, firewalls) { 
        obj['firewalls'] = firewalls;
    }

    /**
     * Constructs a <code>AttachFirewallsToVMPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AttachFirewallsToVMPayload} obj Optional instance to populate.
     * @return {module:model/AttachFirewallsToVMPayload} The populated <code>AttachFirewallsToVMPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AttachFirewallsToVMPayload();

            if (data.hasOwnProperty('firewalls')) {
                obj['firewalls'] = ApiClient.convertToType(data['firewalls'], ['Number']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AttachFirewallsToVMPayload</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AttachFirewallsToVMPayload</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of AttachFirewallsToVMPayload.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is an array
        if (!Array.isArray(data['firewalls'])) {
            throw new Error("Expected the field `firewalls` to be an array in the JSON data but got " + data['firewalls']);
        }

        return true;
    }


}

AttachFirewallsToVMPayload.RequiredProperties = ["firewalls"];

/**
 * Ids of the firewalls to be attached with a virtual machine.
 * @member {Array.<Number>} firewalls
 */
AttachFirewallsToVMPayload.prototype['firewalls'] = undefined;






export default AttachFirewallsToVMPayload;


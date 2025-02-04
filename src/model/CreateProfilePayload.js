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
 * The CreateProfilePayload model module.
 * @module model/CreateProfilePayload
 * @version v1.25.0-alpha
 */
class CreateProfilePayload {
    /**
     * Constructs a new <code>CreateProfilePayload</code>.
     * @alias module:model/CreateProfilePayload
     * @param data {Object.<String, String>} The data object which contains the configuration of the virtual machine profile being created.
     * @param name {String} The name of the profile being created.
     */
    constructor(data, name) { 
        
        CreateProfilePayload.initialize(this, data, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, data, name) { 
        obj['data'] = data;
        obj['name'] = name;
    }

    /**
     * Constructs a <code>CreateProfilePayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateProfilePayload} obj Optional instance to populate.
     * @return {module:model/CreateProfilePayload} The populated <code>CreateProfilePayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateProfilePayload();

            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], {'String': 'String'});
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateProfilePayload</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateProfilePayload</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CreateProfilePayload.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }

        return true;
    }


}

CreateProfilePayload.RequiredProperties = ["data", "name"];

/**
 * The data object which contains the configuration of the virtual machine profile being created.
 * @member {Object.<String, String>} data
 */
CreateProfilePayload.prototype['data'] = undefined;

/**
 * The optional description for the profile being created.
 * @member {String} description
 */
CreateProfilePayload.prototype['description'] = undefined;

/**
 * The name of the profile being created.
 * @member {String} name
 */
CreateProfilePayload.prototype['name'] = undefined;






export default CreateProfilePayload;


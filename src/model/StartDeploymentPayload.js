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
 * The StartDeploymentPayload model module.
 * @module model/StartDeploymentPayload
 * @version v1.25.0-alpha
 */
class StartDeploymentPayload {
    /**
     * Constructs a new <code>StartDeploymentPayload</code>.
     * @alias module:model/StartDeploymentPayload
     * @param description {String} 
     * @param name {String} 
     * @param templateId {Number} 
     */
    constructor(description, name, templateId) { 
        
        StartDeploymentPayload.initialize(this, description, name, templateId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, description, name, templateId) { 
        obj['description'] = description;
        obj['name'] = name;
        obj['template_id'] = templateId;
    }

    /**
     * Constructs a <code>StartDeploymentPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StartDeploymentPayload} obj Optional instance to populate.
     * @return {module:model/StartDeploymentPayload} The populated <code>StartDeploymentPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StartDeploymentPayload();

            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('template_id')) {
                obj['template_id'] = ApiClient.convertToType(data['template_id'], 'Number');
            }
            if (data.hasOwnProperty('variables')) {
                obj['variables'] = ApiClient.convertToType(data['variables'], {'String': 'String'});
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>StartDeploymentPayload</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>StartDeploymentPayload</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of StartDeploymentPayload.RequiredProperties) {
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

StartDeploymentPayload.RequiredProperties = ["description", "name", "template_id"];

/**
 * @member {String} description
 */
StartDeploymentPayload.prototype['description'] = undefined;

/**
 * @member {String} name
 */
StartDeploymentPayload.prototype['name'] = undefined;

/**
 * @member {Number} template_id
 */
StartDeploymentPayload.prototype['template_id'] = undefined;

/**
 * @member {Object.<String, String>} variables
 */
StartDeploymentPayload.prototype['variables'] = undefined;






export default StartDeploymentPayload;


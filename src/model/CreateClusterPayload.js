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
 * The CreateClusterPayload model module.
 * @module model/CreateClusterPayload
 * @version v1.25.0-alpha
 */
class CreateClusterPayload {
    /**
     * Constructs a new <code>CreateClusterPayload</code>.
     * @alias module:model/CreateClusterPayload
     * @param environmentName {String} 
     * @param imageName {String} 
     * @param keypairName {String} 
     * @param kubernetesVersion {String} 
     * @param masterFlavorName {String} 
     * @param name {String} 
     * @param nodeCount {Number} 
     * @param nodeFlavorName {String} 
     */
    constructor(environmentName, imageName, keypairName, kubernetesVersion, masterFlavorName, name, nodeCount, nodeFlavorName) { 
        
        CreateClusterPayload.initialize(this, environmentName, imageName, keypairName, kubernetesVersion, masterFlavorName, name, nodeCount, nodeFlavorName);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, environmentName, imageName, keypairName, kubernetesVersion, masterFlavorName, name, nodeCount, nodeFlavorName) { 
        obj['environment_name'] = environmentName;
        obj['image_name'] = imageName;
        obj['keypair_name'] = keypairName;
        obj['kubernetes_version'] = kubernetesVersion;
        obj['master_flavor_name'] = masterFlavorName;
        obj['name'] = name;
        obj['node_count'] = nodeCount;
        obj['node_flavor_name'] = nodeFlavorName;
    }

    /**
     * Constructs a <code>CreateClusterPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateClusterPayload} obj Optional instance to populate.
     * @return {module:model/CreateClusterPayload} The populated <code>CreateClusterPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateClusterPayload();

            if (data.hasOwnProperty('environment_name')) {
                obj['environment_name'] = ApiClient.convertToType(data['environment_name'], 'String');
            }
            if (data.hasOwnProperty('image_name')) {
                obj['image_name'] = ApiClient.convertToType(data['image_name'], 'String');
            }
            if (data.hasOwnProperty('keypair_name')) {
                obj['keypair_name'] = ApiClient.convertToType(data['keypair_name'], 'String');
            }
            if (data.hasOwnProperty('kubernetes_version')) {
                obj['kubernetes_version'] = ApiClient.convertToType(data['kubernetes_version'], 'String');
            }
            if (data.hasOwnProperty('master_flavor_name')) {
                obj['master_flavor_name'] = ApiClient.convertToType(data['master_flavor_name'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('node_count')) {
                obj['node_count'] = ApiClient.convertToType(data['node_count'], 'Number');
            }
            if (data.hasOwnProperty('node_flavor_name')) {
                obj['node_flavor_name'] = ApiClient.convertToType(data['node_flavor_name'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateClusterPayload</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateClusterPayload</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CreateClusterPayload.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['environment_name'] && !(typeof data['environment_name'] === 'string' || data['environment_name'] instanceof String)) {
            throw new Error("Expected the field `environment_name` to be a primitive type in the JSON string but got " + data['environment_name']);
        }
        // ensure the json data is a string
        if (data['image_name'] && !(typeof data['image_name'] === 'string' || data['image_name'] instanceof String)) {
            throw new Error("Expected the field `image_name` to be a primitive type in the JSON string but got " + data['image_name']);
        }
        // ensure the json data is a string
        if (data['keypair_name'] && !(typeof data['keypair_name'] === 'string' || data['keypair_name'] instanceof String)) {
            throw new Error("Expected the field `keypair_name` to be a primitive type in the JSON string but got " + data['keypair_name']);
        }
        // ensure the json data is a string
        if (data['kubernetes_version'] && !(typeof data['kubernetes_version'] === 'string' || data['kubernetes_version'] instanceof String)) {
            throw new Error("Expected the field `kubernetes_version` to be a primitive type in the JSON string but got " + data['kubernetes_version']);
        }
        // ensure the json data is a string
        if (data['master_flavor_name'] && !(typeof data['master_flavor_name'] === 'string' || data['master_flavor_name'] instanceof String)) {
            throw new Error("Expected the field `master_flavor_name` to be a primitive type in the JSON string but got " + data['master_flavor_name']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['node_flavor_name'] && !(typeof data['node_flavor_name'] === 'string' || data['node_flavor_name'] instanceof String)) {
            throw new Error("Expected the field `node_flavor_name` to be a primitive type in the JSON string but got " + data['node_flavor_name']);
        }

        return true;
    }


}

CreateClusterPayload.RequiredProperties = ["environment_name", "image_name", "keypair_name", "kubernetes_version", "master_flavor_name", "name", "node_count", "node_flavor_name"];

/**
 * @member {String} environment_name
 */
CreateClusterPayload.prototype['environment_name'] = undefined;

/**
 * @member {String} image_name
 */
CreateClusterPayload.prototype['image_name'] = undefined;

/**
 * @member {String} keypair_name
 */
CreateClusterPayload.prototype['keypair_name'] = undefined;

/**
 * @member {String} kubernetes_version
 */
CreateClusterPayload.prototype['kubernetes_version'] = undefined;

/**
 * @member {String} master_flavor_name
 */
CreateClusterPayload.prototype['master_flavor_name'] = undefined;

/**
 * @member {String} name
 */
CreateClusterPayload.prototype['name'] = undefined;

/**
 * @member {Number} node_count
 */
CreateClusterPayload.prototype['node_count'] = undefined;

/**
 * @member {String} node_flavor_name
 */
CreateClusterPayload.prototype['node_flavor_name'] = undefined;






export default CreateClusterPayload;


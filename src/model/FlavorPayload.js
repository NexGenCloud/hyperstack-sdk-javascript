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
 * The FlavorPayload model module.
 * @module model/FlavorPayload
 * @version v1.25.0-alpha
 */
class FlavorPayload {
    /**
     * Constructs a new <code>FlavorPayload</code>.
     * @alias module:model/FlavorPayload
     * @param cpu {Number} 
     * @param disk {Number} 
     * @param gpu {String} 
     * @param gpuCount {Number} 
     * @param isPublic {Boolean} 
     * @param name {String} 
     * @param ram {Number} 
     * @param regionName {String} 
     */
    constructor(cpu, disk, gpu, gpuCount, isPublic, name, ram, regionName) { 
        
        FlavorPayload.initialize(this, cpu, disk, gpu, gpuCount, isPublic, name, ram, regionName);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, cpu, disk, gpu, gpuCount, isPublic, name, ram, regionName) { 
        obj['cpu'] = cpu;
        obj['disk'] = disk;
        obj['gpu'] = gpu;
        obj['gpu_count'] = gpuCount;
        obj['is_public'] = isPublic;
        obj['name'] = name;
        obj['ram'] = ram;
        obj['region_name'] = regionName;
    }

    /**
     * Constructs a <code>FlavorPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FlavorPayload} obj Optional instance to populate.
     * @return {module:model/FlavorPayload} The populated <code>FlavorPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FlavorPayload();

            if (data.hasOwnProperty('cpu')) {
                obj['cpu'] = ApiClient.convertToType(data['cpu'], 'Number');
            }
            if (data.hasOwnProperty('disk')) {
                obj['disk'] = ApiClient.convertToType(data['disk'], 'Number');
            }
            if (data.hasOwnProperty('gpu')) {
                obj['gpu'] = ApiClient.convertToType(data['gpu'], 'String');
            }
            if (data.hasOwnProperty('gpu_count')) {
                obj['gpu_count'] = ApiClient.convertToType(data['gpu_count'], 'Number');
            }
            if (data.hasOwnProperty('is_public')) {
                obj['is_public'] = ApiClient.convertToType(data['is_public'], 'Boolean');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('ram')) {
                obj['ram'] = ApiClient.convertToType(data['ram'], 'Number');
            }
            if (data.hasOwnProperty('region_name')) {
                obj['region_name'] = ApiClient.convertToType(data['region_name'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>FlavorPayload</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>FlavorPayload</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of FlavorPayload.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['gpu'] && !(typeof data['gpu'] === 'string' || data['gpu'] instanceof String)) {
            throw new Error("Expected the field `gpu` to be a primitive type in the JSON string but got " + data['gpu']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['region_name'] && !(typeof data['region_name'] === 'string' || data['region_name'] instanceof String)) {
            throw new Error("Expected the field `region_name` to be a primitive type in the JSON string but got " + data['region_name']);
        }

        return true;
    }


}

FlavorPayload.RequiredProperties = ["cpu", "disk", "gpu", "gpu_count", "is_public", "name", "ram", "region_name"];

/**
 * @member {Number} cpu
 */
FlavorPayload.prototype['cpu'] = undefined;

/**
 * @member {Number} disk
 */
FlavorPayload.prototype['disk'] = undefined;

/**
 * @member {String} gpu
 */
FlavorPayload.prototype['gpu'] = undefined;

/**
 * @member {Number} gpu_count
 */
FlavorPayload.prototype['gpu_count'] = undefined;

/**
 * @member {Boolean} is_public
 */
FlavorPayload.prototype['is_public'] = undefined;

/**
 * @member {String} name
 */
FlavorPayload.prototype['name'] = undefined;

/**
 * @member {Number} ram
 */
FlavorPayload.prototype['ram'] = undefined;

/**
 * @member {String} region_name
 */
FlavorPayload.prototype['region_name'] = undefined;






export default FlavorPayload;


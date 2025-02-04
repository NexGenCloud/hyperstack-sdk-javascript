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
import InstanceFlavorFields from './InstanceFlavorFields';

/**
 * The ClusterFields model module.
 * @module model/ClusterFields
 * @version v1.25.0-alpha
 */
class ClusterFields {
    /**
     * Constructs a new <code>ClusterFields</code>.
     * @alias module:model/ClusterFields
     */
    constructor() { 
        
        ClusterFields.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ClusterFields</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ClusterFields} obj Optional instance to populate.
     * @return {module:model/ClusterFields} The populated <code>ClusterFields</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ClusterFields();

            if (data.hasOwnProperty('api_address')) {
                obj['api_address'] = ApiClient.convertToType(data['api_address'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('environment_name')) {
                obj['environment_name'] = ApiClient.convertToType(data['environment_name'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('keypair_name')) {
                obj['keypair_name'] = ApiClient.convertToType(data['keypair_name'], 'String');
            }
            if (data.hasOwnProperty('kube_config')) {
                obj['kube_config'] = ApiClient.convertToType(data['kube_config'], 'String');
            }
            if (data.hasOwnProperty('kubernetes_version')) {
                obj['kubernetes_version'] = ApiClient.convertToType(data['kubernetes_version'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('node_count')) {
                obj['node_count'] = ApiClient.convertToType(data['node_count'], 'Number');
            }
            if (data.hasOwnProperty('node_flavor')) {
                obj['node_flavor'] = InstanceFlavorFields.constructFromObject(data['node_flavor']);
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('status_reason')) {
                obj['status_reason'] = ApiClient.convertToType(data['status_reason'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ClusterFields</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ClusterFields</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['api_address'] && !(typeof data['api_address'] === 'string' || data['api_address'] instanceof String)) {
            throw new Error("Expected the field `api_address` to be a primitive type in the JSON string but got " + data['api_address']);
        }
        // ensure the json data is a string
        if (data['environment_name'] && !(typeof data['environment_name'] === 'string' || data['environment_name'] instanceof String)) {
            throw new Error("Expected the field `environment_name` to be a primitive type in the JSON string but got " + data['environment_name']);
        }
        // ensure the json data is a string
        if (data['keypair_name'] && !(typeof data['keypair_name'] === 'string' || data['keypair_name'] instanceof String)) {
            throw new Error("Expected the field `keypair_name` to be a primitive type in the JSON string but got " + data['keypair_name']);
        }
        // ensure the json data is a string
        if (data['kube_config'] && !(typeof data['kube_config'] === 'string' || data['kube_config'] instanceof String)) {
            throw new Error("Expected the field `kube_config` to be a primitive type in the JSON string but got " + data['kube_config']);
        }
        // ensure the json data is a string
        if (data['kubernetes_version'] && !(typeof data['kubernetes_version'] === 'string' || data['kubernetes_version'] instanceof String)) {
            throw new Error("Expected the field `kubernetes_version` to be a primitive type in the JSON string but got " + data['kubernetes_version']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // validate the optional field `node_flavor`
        if (data['node_flavor']) { // data not null
          InstanceFlavorFields.validateJSON(data['node_flavor']);
        }
        // ensure the json data is a string
        if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
            throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
        }
        // ensure the json data is a string
        if (data['status_reason'] && !(typeof data['status_reason'] === 'string' || data['status_reason'] instanceof String)) {
            throw new Error("Expected the field `status_reason` to be a primitive type in the JSON string but got " + data['status_reason']);
        }

        return true;
    }


}



/**
 * @member {String} api_address
 */
ClusterFields.prototype['api_address'] = undefined;

/**
 * @member {Date} created_at
 */
ClusterFields.prototype['created_at'] = undefined;

/**
 * @member {String} environment_name
 */
ClusterFields.prototype['environment_name'] = undefined;

/**
 * @member {Number} id
 */
ClusterFields.prototype['id'] = undefined;

/**
 * @member {String} keypair_name
 */
ClusterFields.prototype['keypair_name'] = undefined;

/**
 * @member {String} kube_config
 */
ClusterFields.prototype['kube_config'] = undefined;

/**
 * @member {String} kubernetes_version
 */
ClusterFields.prototype['kubernetes_version'] = undefined;

/**
 * @member {String} name
 */
ClusterFields.prototype['name'] = undefined;

/**
 * @member {Number} node_count
 */
ClusterFields.prototype['node_count'] = undefined;

/**
 * @member {module:model/InstanceFlavorFields} node_flavor
 */
ClusterFields.prototype['node_flavor'] = undefined;

/**
 * @member {String} status
 */
ClusterFields.prototype['status'] = undefined;

/**
 * @member {String} status_reason
 */
ClusterFields.prototype['status_reason'] = undefined;






export default ClusterFields;


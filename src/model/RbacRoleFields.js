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
import RolePermissionFields from './RolePermissionFields';
import RolePolicyFields from './RolePolicyFields';

/**
 * The RbacRoleFields model module.
 * @module model/RbacRoleFields
 * @version v1.25.0-alpha
 */
class RbacRoleFields {
    /**
     * Constructs a new <code>RbacRoleFields</code>.
     * @alias module:model/RbacRoleFields
     */
    constructor() { 
        
        RbacRoleFields.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RbacRoleFields</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RbacRoleFields} obj Optional instance to populate.
     * @return {module:model/RbacRoleFields} The populated <code>RbacRoleFields</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RbacRoleFields();

            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('permissions')) {
                obj['permissions'] = ApiClient.convertToType(data['permissions'], [RolePermissionFields]);
            }
            if (data.hasOwnProperty('policies')) {
                obj['policies'] = ApiClient.convertToType(data['policies'], [RolePolicyFields]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RbacRoleFields</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RbacRoleFields</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        if (data['permissions']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['permissions'])) {
                throw new Error("Expected the field `permissions` to be an array in the JSON data but got " + data['permissions']);
            }
            // validate the optional field `permissions` (array)
            for (const item of data['permissions']) {
                RolePermissionFields.validateJSON(item);
            };
        }
        if (data['policies']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['policies'])) {
                throw new Error("Expected the field `policies` to be an array in the JSON data but got " + data['policies']);
            }
            // validate the optional field `policies` (array)
            for (const item of data['policies']) {
                RolePolicyFields.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {Date} created_at
 */
RbacRoleFields.prototype['created_at'] = undefined;

/**
 * @member {String} description
 */
RbacRoleFields.prototype['description'] = undefined;

/**
 * @member {Number} id
 */
RbacRoleFields.prototype['id'] = undefined;

/**
 * @member {String} name
 */
RbacRoleFields.prototype['name'] = undefined;

/**
 * @member {Array.<module:model/RolePermissionFields>} permissions
 */
RbacRoleFields.prototype['permissions'] = undefined;

/**
 * @member {Array.<module:model/RolePolicyFields>} policies
 */
RbacRoleFields.prototype['policies'] = undefined;






export default RbacRoleFields;


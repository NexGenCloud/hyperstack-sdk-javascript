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
import RbacRoleField from './RbacRoleField';

/**
 * The OrganizationUserResponseModel model module.
 * @module model/OrganizationUserResponseModel
 * @version v1.25.0-alpha
 */
class OrganizationUserResponseModel {
    /**
     * Constructs a new <code>OrganizationUserResponseModel</code>.
     * @alias module:model/OrganizationUserResponseModel
     */
    constructor() { 
        
        OrganizationUserResponseModel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrganizationUserResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrganizationUserResponseModel} obj Optional instance to populate.
     * @return {module:model/OrganizationUserResponseModel} The populated <code>OrganizationUserResponseModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrganizationUserResponseModel();

            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('joined_at')) {
                obj['joined_at'] = ApiClient.convertToType(data['joined_at'], 'Date');
            }
            if (data.hasOwnProperty('last_login')) {
                obj['last_login'] = ApiClient.convertToType(data['last_login'], 'Date');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('rbac_roles')) {
                obj['rbac_roles'] = ApiClient.convertToType(data['rbac_roles'], [RbacRoleField]);
            }
            if (data.hasOwnProperty('role')) {
                obj['role'] = ApiClient.convertToType(data['role'], 'String');
            }
            if (data.hasOwnProperty('sub')) {
                obj['sub'] = ApiClient.convertToType(data['sub'], 'String');
            }
            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OrganizationUserResponseModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OrganizationUserResponseModel</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['email'] && !(typeof data['email'] === 'string' || data['email'] instanceof String)) {
            throw new Error("Expected the field `email` to be a primitive type in the JSON string but got " + data['email']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        if (data['rbac_roles']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['rbac_roles'])) {
                throw new Error("Expected the field `rbac_roles` to be an array in the JSON data but got " + data['rbac_roles']);
            }
            // validate the optional field `rbac_roles` (array)
            for (const item of data['rbac_roles']) {
                RbacRoleField.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['role'] && !(typeof data['role'] === 'string' || data['role'] instanceof String)) {
            throw new Error("Expected the field `role` to be a primitive type in the JSON string but got " + data['role']);
        }
        // ensure the json data is a string
        if (data['sub'] && !(typeof data['sub'] === 'string' || data['sub'] instanceof String)) {
            throw new Error("Expected the field `sub` to be a primitive type in the JSON string but got " + data['sub']);
        }
        // ensure the json data is a string
        if (data['username'] && !(typeof data['username'] === 'string' || data['username'] instanceof String)) {
            throw new Error("Expected the field `username` to be a primitive type in the JSON string but got " + data['username']);
        }

        return true;
    }


}



/**
 * @member {String} email
 */
OrganizationUserResponseModel.prototype['email'] = undefined;

/**
 * @member {Number} id
 */
OrganizationUserResponseModel.prototype['id'] = undefined;

/**
 * @member {Date} joined_at
 */
OrganizationUserResponseModel.prototype['joined_at'] = undefined;

/**
 * @member {Date} last_login
 */
OrganizationUserResponseModel.prototype['last_login'] = undefined;

/**
 * @member {String} name
 */
OrganizationUserResponseModel.prototype['name'] = undefined;

/**
 * @member {Array.<module:model/RbacRoleField>} rbac_roles
 */
OrganizationUserResponseModel.prototype['rbac_roles'] = undefined;

/**
 * @member {String} role
 */
OrganizationUserResponseModel.prototype['role'] = undefined;

/**
 * @member {String} sub
 */
OrganizationUserResponseModel.prototype['sub'] = undefined;

/**
 * @member {String} username
 */
OrganizationUserResponseModel.prototype['username'] = undefined;






export default OrganizationUserResponseModel;


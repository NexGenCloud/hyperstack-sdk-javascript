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
 * The SingleVisibilityUserResponse model module.
 * @module model/SingleVisibilityUserResponse
 * @version v1.25.0-alpha
 */
class SingleVisibilityUserResponse {
    /**
     * Constructs a new <code>SingleVisibilityUserResponse</code>.
     * @alias module:model/SingleVisibilityUserResponse
     * @param id {Number} 
     * @param stockVisible {Boolean} 
     * @param userId {Number} 
     */
    constructor(id, stockVisible, userId) { 
        
        SingleVisibilityUserResponse.initialize(this, id, stockVisible, userId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, stockVisible, userId) { 
        obj['id'] = id;
        obj['stock_visible'] = stockVisible;
        obj['user_id'] = userId;
    }

    /**
     * Constructs a <code>SingleVisibilityUserResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SingleVisibilityUserResponse} obj Optional instance to populate.
     * @return {module:model/SingleVisibilityUserResponse} The populated <code>SingleVisibilityUserResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SingleVisibilityUserResponse();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('stock_visible')) {
                obj['stock_visible'] = ApiClient.convertToType(data['stock_visible'], 'Boolean');
            }
            if (data.hasOwnProperty('user_id')) {
                obj['user_id'] = ApiClient.convertToType(data['user_id'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SingleVisibilityUserResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SingleVisibilityUserResponse</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of SingleVisibilityUserResponse.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }

        return true;
    }


}

SingleVisibilityUserResponse.RequiredProperties = ["id", "stock_visible", "user_id"];

/**
 * @member {Number} id
 */
SingleVisibilityUserResponse.prototype['id'] = undefined;

/**
 * @member {Boolean} stock_visible
 */
SingleVisibilityUserResponse.prototype['stock_visible'] = undefined;

/**
 * @member {Number} user_id
 */
SingleVisibilityUserResponse.prototype['user_id'] = undefined;






export default SingleVisibilityUserResponse;


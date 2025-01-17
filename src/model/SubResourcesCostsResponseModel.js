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
import SubResourcesGraphBillingHistoryFields from './SubResourcesGraphBillingHistoryFields';

/**
 * The SubResourcesCostsResponseModel model module.
 * @module model/SubResourcesCostsResponseModel
 * @version v1.25.0-alpha
 */
class SubResourcesCostsResponseModel {
    /**
     * Constructs a new <code>SubResourcesCostsResponseModel</code>.
     * @alias module:model/SubResourcesCostsResponseModel
     */
    constructor() { 
        
        SubResourcesCostsResponseModel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SubResourcesCostsResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SubResourcesCostsResponseModel} obj Optional instance to populate.
     * @return {module:model/SubResourcesCostsResponseModel} The populated <code>SubResourcesCostsResponseModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SubResourcesCostsResponseModel();

            if (data.hasOwnProperty('billing_history')) {
                obj['billing_history'] = ApiClient.convertToType(data['billing_history'], [SubResourcesGraphBillingHistoryFields]);
            }
            if (data.hasOwnProperty('granularity')) {
                obj['granularity'] = ApiClient.convertToType(data['granularity'], 'Number');
            }
            if (data.hasOwnProperty('org_id')) {
                obj['org_id'] = ApiClient.convertToType(data['org_id'], 'Number');
            }
            if (data.hasOwnProperty('total_count')) {
                obj['total_count'] = ApiClient.convertToType(data['total_count'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SubResourcesCostsResponseModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SubResourcesCostsResponseModel</code>.
     */
    static validateJSON(data) {
        if (data['billing_history']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['billing_history'])) {
                throw new Error("Expected the field `billing_history` to be an array in the JSON data but got " + data['billing_history']);
            }
            // validate the optional field `billing_history` (array)
            for (const item of data['billing_history']) {
                SubResourcesGraphBillingHistoryFields.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {Array.<module:model/SubResourcesGraphBillingHistoryFields>} billing_history
 */
SubResourcesCostsResponseModel.prototype['billing_history'] = undefined;

/**
 * @member {Number} granularity
 */
SubResourcesCostsResponseModel.prototype['granularity'] = undefined;

/**
 * @member {Number} org_id
 */
SubResourcesCostsResponseModel.prototype['org_id'] = undefined;

/**
 * @member {Number} total_count
 */
SubResourcesCostsResponseModel.prototype['total_count'] = undefined;






export default SubResourcesCostsResponseModel;


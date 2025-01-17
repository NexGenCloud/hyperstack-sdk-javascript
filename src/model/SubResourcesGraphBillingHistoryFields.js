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
import ResourceLevelBillingDetailsAttributes from './ResourceLevelBillingDetailsAttributes';
import SubResourceGraphBillingDetailsMetrics from './SubResourceGraphBillingDetailsMetrics';

/**
 * The SubResourcesGraphBillingHistoryFields model module.
 * @module model/SubResourcesGraphBillingHistoryFields
 * @version v1.25.0-alpha
 */
class SubResourcesGraphBillingHistoryFields {
    /**
     * Constructs a new <code>SubResourcesGraphBillingHistoryFields</code>.
     * @alias module:model/SubResourcesGraphBillingHistoryFields
     */
    constructor() { 
        
        SubResourcesGraphBillingHistoryFields.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SubResourcesGraphBillingHistoryFields</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SubResourcesGraphBillingHistoryFields} obj Optional instance to populate.
     * @return {module:model/SubResourcesGraphBillingHistoryFields} The populated <code>SubResourcesGraphBillingHistoryFields</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SubResourcesGraphBillingHistoryFields();

            if (data.hasOwnProperty('attributes')) {
                obj['attributes'] = ResourceLevelBillingDetailsAttributes.constructFromObject(data['attributes']);
            }
            if (data.hasOwnProperty('metrics')) {
                obj['metrics'] = SubResourceGraphBillingDetailsMetrics.constructFromObject(data['metrics']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SubResourcesGraphBillingHistoryFields</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SubResourcesGraphBillingHistoryFields</code>.
     */
    static validateJSON(data) {
        // validate the optional field `attributes`
        if (data['attributes']) { // data not null
          ResourceLevelBillingDetailsAttributes.validateJSON(data['attributes']);
        }
        // validate the optional field `metrics`
        if (data['metrics']) { // data not null
          SubResourceGraphBillingDetailsMetrics.validateJSON(data['metrics']);
        }

        return true;
    }


}



/**
 * @member {module:model/ResourceLevelBillingDetailsAttributes} attributes
 */
SubResourcesGraphBillingHistoryFields.prototype['attributes'] = undefined;

/**
 * @member {module:model/SubResourceGraphBillingDetailsMetrics} metrics
 */
SubResourcesGraphBillingHistoryFields.prototype['metrics'] = undefined;






export default SubResourcesGraphBillingHistoryFields;


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
import OrganizationLevelBillingHistoryResponseAttributes from './OrganizationLevelBillingHistoryResponseAttributes';
import OrganizationLevelBillingHistoryResponseMetrics from './OrganizationLevelBillingHistoryResponseMetrics';

/**
 * The OrganizationLevelBillingHistoryResources model module.
 * @module model/OrganizationLevelBillingHistoryResources
 * @version v1.25.0-alpha
 */
class OrganizationLevelBillingHistoryResources {
    /**
     * Constructs a new <code>OrganizationLevelBillingHistoryResources</code>.
     * @alias module:model/OrganizationLevelBillingHistoryResources
     */
    constructor() { 
        
        OrganizationLevelBillingHistoryResources.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrganizationLevelBillingHistoryResources</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrganizationLevelBillingHistoryResources} obj Optional instance to populate.
     * @return {module:model/OrganizationLevelBillingHistoryResources} The populated <code>OrganizationLevelBillingHistoryResources</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrganizationLevelBillingHistoryResources();

            if (data.hasOwnProperty('attributes')) {
                obj['attributes'] = OrganizationLevelBillingHistoryResponseAttributes.constructFromObject(data['attributes']);
            }
            if (data.hasOwnProperty('metrics')) {
                obj['metrics'] = OrganizationLevelBillingHistoryResponseMetrics.constructFromObject(data['metrics']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OrganizationLevelBillingHistoryResources</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OrganizationLevelBillingHistoryResources</code>.
     */
    static validateJSON(data) {
        // validate the optional field `attributes`
        if (data['attributes']) { // data not null
          OrganizationLevelBillingHistoryResponseAttributes.validateJSON(data['attributes']);
        }
        // validate the optional field `metrics`
        if (data['metrics']) { // data not null
          OrganizationLevelBillingHistoryResponseMetrics.validateJSON(data['metrics']);
        }

        return true;
    }


}



/**
 * @member {module:model/OrganizationLevelBillingHistoryResponseAttributes} attributes
 */
OrganizationLevelBillingHistoryResources.prototype['attributes'] = undefined;

/**
 * @member {module:model/OrganizationLevelBillingHistoryResponseMetrics} metrics
 */
OrganizationLevelBillingHistoryResources.prototype['metrics'] = undefined;






export default OrganizationLevelBillingHistoryResources;


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
import ResourceLevelBillingHistoryResponseAttributes from './ResourceLevelBillingHistoryResponseAttributes';
import ResourceLevelBillingHistoryResponseMetrics from './ResourceLevelBillingHistoryResponseMetrics';

/**
 * The ResourceLevelBillingHistoryResources model module.
 * @module model/ResourceLevelBillingHistoryResources
 * @version v1.25.0-alpha
 */
class ResourceLevelBillingHistoryResources {
    /**
     * Constructs a new <code>ResourceLevelBillingHistoryResources</code>.
     * @alias module:model/ResourceLevelBillingHistoryResources
     */
    constructor() { 
        
        ResourceLevelBillingHistoryResources.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ResourceLevelBillingHistoryResources</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ResourceLevelBillingHistoryResources} obj Optional instance to populate.
     * @return {module:model/ResourceLevelBillingHistoryResources} The populated <code>ResourceLevelBillingHistoryResources</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ResourceLevelBillingHistoryResources();

            if (data.hasOwnProperty('attributes')) {
                obj['attributes'] = ResourceLevelBillingHistoryResponseAttributes.constructFromObject(data['attributes']);
            }
            if (data.hasOwnProperty('metrics')) {
                obj['metrics'] = ResourceLevelBillingHistoryResponseMetrics.constructFromObject(data['metrics']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ResourceLevelBillingHistoryResources</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ResourceLevelBillingHistoryResources</code>.
     */
    static validateJSON(data) {
        // validate the optional field `attributes`
        if (data['attributes']) { // data not null
          ResourceLevelBillingHistoryResponseAttributes.validateJSON(data['attributes']);
        }
        // validate the optional field `metrics`
        if (data['metrics']) { // data not null
          ResourceLevelBillingHistoryResponseMetrics.validateJSON(data['metrics']);
        }

        return true;
    }


}



/**
 * @member {module:model/ResourceLevelBillingHistoryResponseAttributes} attributes
 */
ResourceLevelBillingHistoryResources.prototype['attributes'] = undefined;

/**
 * @member {module:model/ResourceLevelBillingHistoryResponseMetrics} metrics
 */
ResourceLevelBillingHistoryResources.prototype['metrics'] = undefined;






export default ResourceLevelBillingHistoryResources;


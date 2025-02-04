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
 * The EnvironmentFeatures model module.
 * @module model/EnvironmentFeatures
 * @version v1.25.0-alpha
 */
class EnvironmentFeatures {
    /**
     * Constructs a new <code>EnvironmentFeatures</code>.
     * @alias module:model/EnvironmentFeatures
     */
    constructor() { 
        
        EnvironmentFeatures.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EnvironmentFeatures</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EnvironmentFeatures} obj Optional instance to populate.
     * @return {module:model/EnvironmentFeatures} The populated <code>EnvironmentFeatures</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EnvironmentFeatures();

            if (data.hasOwnProperty('network_optimised')) {
                obj['network_optimised'] = ApiClient.convertToType(data['network_optimised'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EnvironmentFeatures</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EnvironmentFeatures</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * @member {Boolean} network_optimised
 */
EnvironmentFeatures.prototype['network_optimised'] = undefined;






export default EnvironmentFeatures;


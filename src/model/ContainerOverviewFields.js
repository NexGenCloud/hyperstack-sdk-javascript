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
 * The ContainerOverviewFields model module.
 * @module model/ContainerOverviewFields
 * @version v1.25.0-alpha
 */
class ContainerOverviewFields {
    /**
     * Constructs a new <code>ContainerOverviewFields</code>.
     * @alias module:model/ContainerOverviewFields
     */
    constructor() { 
        
        ContainerOverviewFields.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ContainerOverviewFields</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ContainerOverviewFields} obj Optional instance to populate.
     * @return {module:model/ContainerOverviewFields} The populated <code>ContainerOverviewFields</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ContainerOverviewFields();

            if (data.hasOwnProperty('cost_per_hour')) {
                obj['cost_per_hour'] = ApiClient.convertToType(data['cost_per_hour'], 'Number');
            }
            if (data.hasOwnProperty('count')) {
                obj['count'] = ApiClient.convertToType(data['count'], 'Number');
            }
            if (data.hasOwnProperty('gpus')) {
                obj['gpus'] = ApiClient.convertToType(data['gpus'], 'Number');
            }
            if (data.hasOwnProperty('ram')) {
                obj['ram'] = ApiClient.convertToType(data['ram'], 'Number');
            }
            if (data.hasOwnProperty('vcpus')) {
                obj['vcpus'] = ApiClient.convertToType(data['vcpus'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ContainerOverviewFields</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ContainerOverviewFields</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * @member {Number} cost_per_hour
 */
ContainerOverviewFields.prototype['cost_per_hour'] = undefined;

/**
 * @member {Number} count
 */
ContainerOverviewFields.prototype['count'] = undefined;

/**
 * @member {Number} gpus
 */
ContainerOverviewFields.prototype['gpus'] = undefined;

/**
 * @member {Number} ram
 */
ContainerOverviewFields.prototype['ram'] = undefined;

/**
 * @member {Number} vcpus
 */
ContainerOverviewFields.prototype['vcpus'] = undefined;






export default ContainerOverviewFields;


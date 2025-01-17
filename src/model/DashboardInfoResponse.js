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
import OverviewInfo from './OverviewInfo';

/**
 * The DashboardInfoResponse model module.
 * @module model/DashboardInfoResponse
 * @version v1.25.0-alpha
 */
class DashboardInfoResponse {
    /**
     * Constructs a new <code>DashboardInfoResponse</code>.
     * @alias module:model/DashboardInfoResponse
     */
    constructor() { 
        
        DashboardInfoResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DashboardInfoResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DashboardInfoResponse} obj Optional instance to populate.
     * @return {module:model/DashboardInfoResponse} The populated <code>DashboardInfoResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DashboardInfoResponse();

            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('overview')) {
                obj['overview'] = OverviewInfo.constructFromObject(data['overview']);
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DashboardInfoResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DashboardInfoResponse</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['message'] && !(typeof data['message'] === 'string' || data['message'] instanceof String)) {
            throw new Error("Expected the field `message` to be a primitive type in the JSON string but got " + data['message']);
        }
        // validate the optional field `overview`
        if (data['overview']) { // data not null
          OverviewInfo.validateJSON(data['overview']);
        }

        return true;
    }


}



/**
 * @member {String} message
 */
DashboardInfoResponse.prototype['message'] = undefined;

/**
 * @member {module:model/OverviewInfo} overview
 */
DashboardInfoResponse.prototype['overview'] = undefined;

/**
 * @member {Boolean} status
 */
DashboardInfoResponse.prototype['status'] = undefined;






export default DashboardInfoResponse;


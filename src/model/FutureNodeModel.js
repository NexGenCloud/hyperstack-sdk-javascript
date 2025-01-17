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
import FutureNodeStockModel from './FutureNodeStockModel';

/**
 * The FutureNodeModel model module.
 * @module model/FutureNodeModel
 * @version v1.25.0-alpha
 */
class FutureNodeModel {
    /**
     * Constructs a new <code>FutureNodeModel</code>.
     * @alias module:model/FutureNodeModel
     * @param expectedProvisionDate {Date} Date and time in the format YYYY-MM-DD HH:mm:ss
     */
    constructor(expectedProvisionDate) { 
        
        FutureNodeModel.initialize(this, expectedProvisionDate);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, expectedProvisionDate) { 
        obj['expected_provision_date'] = expectedProvisionDate;
    }

    /**
     * Constructs a <code>FutureNodeModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FutureNodeModel} obj Optional instance to populate.
     * @return {module:model/FutureNodeModel} The populated <code>FutureNodeModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FutureNodeModel();

            if (data.hasOwnProperty('expected_provision_date')) {
                obj['expected_provision_date'] = ApiClient.convertToType(data['expected_provision_date'], 'Date');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('nexgen_name')) {
                obj['nexgen_name'] = ApiClient.convertToType(data['nexgen_name'], 'String');
            }
            if (data.hasOwnProperty('openstack_name')) {
                obj['openstack_name'] = ApiClient.convertToType(data['openstack_name'], 'String');
            }
            if (data.hasOwnProperty('stocks')) {
                obj['stocks'] = ApiClient.convertToType(data['stocks'], [FutureNodeStockModel]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>FutureNodeModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>FutureNodeModel</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of FutureNodeModel.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['nexgen_name'] && !(typeof data['nexgen_name'] === 'string' || data['nexgen_name'] instanceof String)) {
            throw new Error("Expected the field `nexgen_name` to be a primitive type in the JSON string but got " + data['nexgen_name']);
        }
        // ensure the json data is a string
        if (data['openstack_name'] && !(typeof data['openstack_name'] === 'string' || data['openstack_name'] instanceof String)) {
            throw new Error("Expected the field `openstack_name` to be a primitive type in the JSON string but got " + data['openstack_name']);
        }
        if (data['stocks']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['stocks'])) {
                throw new Error("Expected the field `stocks` to be an array in the JSON data but got " + data['stocks']);
            }
            // validate the optional field `stocks` (array)
            for (const item of data['stocks']) {
                FutureNodeStockModel.validateJSON(item);
            };
        }

        return true;
    }


}

FutureNodeModel.RequiredProperties = ["expected_provision_date"];

/**
 * Date and time in the format YYYY-MM-DD HH:mm:ss
 * @member {Date} expected_provision_date
 */
FutureNodeModel.prototype['expected_provision_date'] = undefined;

/**
 * @member {Number} id
 */
FutureNodeModel.prototype['id'] = undefined;

/**
 * @member {String} nexgen_name
 */
FutureNodeModel.prototype['nexgen_name'] = undefined;

/**
 * @member {String} openstack_name
 */
FutureNodeModel.prototype['openstack_name'] = undefined;

/**
 * @member {Array.<module:model/FutureNodeStockModel>} stocks
 */
FutureNodeModel.prototype['stocks'] = undefined;






export default FutureNodeModel;


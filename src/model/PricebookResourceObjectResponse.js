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
 * The PricebookResourceObjectResponse model module.
 * @module model/PricebookResourceObjectResponse
 * @version v1.25.0-alpha
 */
class PricebookResourceObjectResponse {
    /**
     * Constructs a new <code>PricebookResourceObjectResponse</code>.
     * @alias module:model/PricebookResourceObjectResponse
     */
    constructor() { 
        
        PricebookResourceObjectResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PricebookResourceObjectResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PricebookResourceObjectResponse} obj Optional instance to populate.
     * @return {module:model/PricebookResourceObjectResponse} The populated <code>PricebookResourceObjectResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PricebookResourceObjectResponse();

            if (data.hasOwnProperty('actual_price')) {
                obj['actual_price'] = ApiClient.convertToType(data['actual_price'], 'Number');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('discounted_rate')) {
                obj['discounted_rate'] = ApiClient.convertToType(data['discounted_rate'], 'Number');
            }
            if (data.hasOwnProperty('host_original_price')) {
                obj['host_original_price'] = ApiClient.convertToType(data['host_original_price'], 'Number');
            }
            if (data.hasOwnProperty('host_price')) {
                obj['host_price'] = ApiClient.convertToType(data['host_price'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('nexgen_original_price')) {
                obj['nexgen_original_price'] = ApiClient.convertToType(data['nexgen_original_price'], 'Number');
            }
            if (data.hasOwnProperty('nexgen_price')) {
                obj['nexgen_price'] = ApiClient.convertToType(data['nexgen_price'], 'Number');
            }
            if (data.hasOwnProperty('price')) {
                obj['price'] = ApiClient.convertToType(data['price'], 'Number');
            }
            if (data.hasOwnProperty('rate')) {
                obj['rate'] = ApiClient.convertToType(data['rate'], 'Number');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PricebookResourceObjectResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PricebookResourceObjectResponse</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }

        return true;
    }


}



/**
 * @member {Number} actual_price
 */
PricebookResourceObjectResponse.prototype['actual_price'] = undefined;

/**
 * @member {Number} amount
 */
PricebookResourceObjectResponse.prototype['amount'] = undefined;

/**
 * @member {Number} discounted_rate
 */
PricebookResourceObjectResponse.prototype['discounted_rate'] = undefined;

/**
 * @member {Number} host_original_price
 */
PricebookResourceObjectResponse.prototype['host_original_price'] = undefined;

/**
 * @member {Number} host_price
 */
PricebookResourceObjectResponse.prototype['host_price'] = undefined;

/**
 * @member {String} name
 */
PricebookResourceObjectResponse.prototype['name'] = undefined;

/**
 * @member {Number} nexgen_original_price
 */
PricebookResourceObjectResponse.prototype['nexgen_original_price'] = undefined;

/**
 * @member {Number} nexgen_price
 */
PricebookResourceObjectResponse.prototype['nexgen_price'] = undefined;

/**
 * @member {Number} price
 */
PricebookResourceObjectResponse.prototype['price'] = undefined;

/**
 * @member {Number} rate
 */
PricebookResourceObjectResponse.prototype['rate'] = undefined;

/**
 * @member {String} type
 */
PricebookResourceObjectResponse.prototype['type'] = undefined;






export default PricebookResourceObjectResponse;


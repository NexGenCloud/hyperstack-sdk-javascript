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
import KeypairFields from './KeypairFields';

/**
 * The ImportKeypairResponse model module.
 * @module model/ImportKeypairResponse
 * @version v1.25.0-alpha
 */
class ImportKeypairResponse {
    /**
     * Constructs a new <code>ImportKeypairResponse</code>.
     * @alias module:model/ImportKeypairResponse
     */
    constructor() { 
        
        ImportKeypairResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ImportKeypairResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ImportKeypairResponse} obj Optional instance to populate.
     * @return {module:model/ImportKeypairResponse} The populated <code>ImportKeypairResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ImportKeypairResponse();

            if (data.hasOwnProperty('keypair')) {
                obj['keypair'] = KeypairFields.constructFromObject(data['keypair']);
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ImportKeypairResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ImportKeypairResponse</code>.
     */
    static validateJSON(data) {
        // validate the optional field `keypair`
        if (data['keypair']) { // data not null
          KeypairFields.validateJSON(data['keypair']);
        }
        // ensure the json data is a string
        if (data['message'] && !(typeof data['message'] === 'string' || data['message'] instanceof String)) {
            throw new Error("Expected the field `message` to be a primitive type in the JSON string but got " + data['message']);
        }

        return true;
    }


}



/**
 * @member {module:model/KeypairFields} keypair
 */
ImportKeypairResponse.prototype['keypair'] = undefined;

/**
 * @member {String} message
 */
ImportKeypairResponse.prototype['message'] = undefined;

/**
 * @member {Boolean} status
 */
ImportKeypairResponse.prototype['status'] = undefined;






export default ImportKeypairResponse;


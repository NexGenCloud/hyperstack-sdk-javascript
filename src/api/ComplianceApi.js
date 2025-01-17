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


import ApiClient from "../ApiClient";
import CompliancePayload from '../model/CompliancePayload';
import ComplianceResponse from '../model/ComplianceResponse';
import CreateUpdateComplianceResponse from '../model/CreateUpdateComplianceResponse';
import ErrorResponseModel from '../model/ErrorResponseModel';
import ResponseModel from '../model/ResponseModel';

/**
* Compliance service.
* @module api/ComplianceApi
* @version v1.25.0-alpha
*/
export default class ComplianceApi {

    /**
    * Constructs a new ComplianceApi. 
    * @alias module:api/ComplianceApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Create compliance
     * @param {module:model/CompliancePayload} payload 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CreateUpdateComplianceResponse} and HTTP response
     */
    createComplianceWithHttpInfo(payload) {
      let postBody = payload;
      // verify the required parameter 'payload' is set
      if (payload === undefined || payload === null) {
        throw new Error("Missing the required parameter 'payload' when calling createCompliance");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['apiKey', 'accessToken'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = CreateUpdateComplianceResponse;
      return this.apiClient.callApi(
        '/core/compliance', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create compliance
     * @param {module:model/CompliancePayload} payload 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreateUpdateComplianceResponse}
     */
    createCompliance(payload) {
      return this.createComplianceWithHttpInfo(payload)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete a compliance
     * @param {String} gpuModel 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ResponseModel} and HTTP response
     */
    deleteAComplianceWithHttpInfo(gpuModel) {
      let postBody = null;
      // verify the required parameter 'gpuModel' is set
      if (gpuModel === undefined || gpuModel === null) {
        throw new Error("Missing the required parameter 'gpuModel' when calling deleteACompliance");
      }

      let pathParams = {
        'gpu_model': gpuModel
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['apiKey', 'accessToken'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ResponseModel;
      return this.apiClient.callApi(
        '/core/compliance/{gpu_model}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete a compliance
     * @param {String} gpuModel 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ResponseModel}
     */
    deleteACompliance(gpuModel) {
      return this.deleteAComplianceWithHttpInfo(gpuModel)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Retrieve GPU compliance
     * Returns a list of compliance objects each corresponding to available GPU models. These compliance objects contain minimum and maximum values for RAM in GB, number of vCPUs, and system disk capacity in GB. Use the optional `gpu` model parameter in the query string to filter responses by GPU model. For additional details on GPU compliance, [**click here**](https://infrahub-doc.nexgencloud.com/docs/hardware/flavors#adhering-to-gpu-compliance).
     * @param {Object} opts Optional parameters
     * @param {String} [gpu] This is for gpu model
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ComplianceResponse} and HTTP response
     */
    retrieveGpuComplianceWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'gpu': opts['gpu']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['apiKey', 'accessToken'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ComplianceResponse;
      return this.apiClient.callApi(
        '/core/compliance', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Retrieve GPU compliance
     * Returns a list of compliance objects each corresponding to available GPU models. These compliance objects contain minimum and maximum values for RAM in GB, number of vCPUs, and system disk capacity in GB. Use the optional `gpu` model parameter in the query string to filter responses by GPU model. For additional details on GPU compliance, [**click here**](https://infrahub-doc.nexgencloud.com/docs/hardware/flavors#adhering-to-gpu-compliance).
     * @param {Object} opts Optional parameters
     * @param {String} opts.gpu This is for gpu model
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ComplianceResponse}
     */
    retrieveGpuCompliance(opts) {
      return this.retrieveGpuComplianceWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update a compliance
     * @param {module:model/CompliancePayload} payload 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CreateUpdateComplianceResponse} and HTTP response
     */
    updateAComplianceWithHttpInfo(payload) {
      let postBody = payload;
      // verify the required parameter 'payload' is set
      if (payload === undefined || payload === null) {
        throw new Error("Missing the required parameter 'payload' when calling updateACompliance");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['apiKey', 'accessToken'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = CreateUpdateComplianceResponse;
      return this.apiClient.callApi(
        '/core/compliance', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update a compliance
     * @param {module:model/CompliancePayload} payload 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreateUpdateComplianceResponse}
     */
    updateACompliance(payload) {
      return this.updateAComplianceWithHttpInfo(payload)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}

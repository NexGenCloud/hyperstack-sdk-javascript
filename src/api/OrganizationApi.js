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
import ErrorResponseModel from '../model/ErrorResponseModel';
import GetOrganizationResponseModel from '../model/GetOrganizationResponseModel';
import RemoveMemberFromOrganizationResponseModel from '../model/RemoveMemberFromOrganizationResponseModel';
import RemoveMemberPayload from '../model/RemoveMemberPayload';
import UpdateOrganizationPayload from '../model/UpdateOrganizationPayload';
import UpdateOrganizationResponseModel from '../model/UpdateOrganizationResponseModel';

/**
* Organization service.
* @module api/OrganizationApi
* @version v1.25.0-alpha
*/
export default class OrganizationApi {

    /**
    * Constructs a new OrganizationApi. 
    * @alias module:api/OrganizationApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Remove Organization Member
     * Removes a member from your organization. For additional information, [click here](https://infrahub-doc.nexgencloud.com/docs/api-reference/auth-resources/organization/remove-member).
     * @param {module:model/RemoveMemberPayload} payload 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RemoveMemberFromOrganizationResponseModel} and HTTP response
     */
    removeOrganizationMemberWithHttpInfo(payload) {
      let postBody = payload;
      // verify the required parameter 'payload' is set
      if (payload === undefined || payload === null) {
        throw new Error("Missing the required parameter 'payload' when calling removeOrganizationMember");
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
      let returnType = RemoveMemberFromOrganizationResponseModel;
      return this.apiClient.callApi(
        '/auth/organizations/remove-member', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Remove Organization Member
     * Removes a member from your organization. For additional information, [click here](https://infrahub-doc.nexgencloud.com/docs/api-reference/auth-resources/organization/remove-member).
     * @param {module:model/RemoveMemberPayload} payload 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RemoveMemberFromOrganizationResponseModel}
     */
    removeOrganizationMember(payload) {
      return this.removeOrganizationMemberWithHttpInfo(payload)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Retrieve Organization Information
     * Retrieves detailed information about your organization, including current credit, threshold, number of instances, and number of volumes. For additional information on organizations, [click here](https://infrahub-doc.nexgencloud.com/docs/api-reference/auth-resources/organization/retrieve-org-details).
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetOrganizationResponseModel} and HTTP response
     */
    retrieveOrganizationInformationWithHttpInfo() {
      let postBody = null;

      let pathParams = {
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
      let returnType = GetOrganizationResponseModel;
      return this.apiClient.callApi(
        '/auth/organizations', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Retrieve Organization Information
     * Retrieves detailed information about your organization, including current credit, threshold, number of instances, and number of volumes. For additional information on organizations, [click here](https://infrahub-doc.nexgencloud.com/docs/api-reference/auth-resources/organization/retrieve-org-details).
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetOrganizationResponseModel}
     */
    retrieveOrganizationInformation() {
      return this.retrieveOrganizationInformationWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update Organization Information
     * Updates the name of the organization. For additional information, [click here](https://infrahub-doc.nexgencloud.com/docs/api-reference/auth-resources/organization/update-org-name).
     * @param {module:model/UpdateOrganizationPayload} payload 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/UpdateOrganizationResponseModel} and HTTP response
     */
    updateOrganizationInformationWithHttpInfo(payload) {
      let postBody = payload;
      // verify the required parameter 'payload' is set
      if (payload === undefined || payload === null) {
        throw new Error("Missing the required parameter 'payload' when calling updateOrganizationInformation");
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
      let returnType = UpdateOrganizationResponseModel;
      return this.apiClient.callApi(
        '/auth/organizations/update', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update Organization Information
     * Updates the name of the organization. For additional information, [click here](https://infrahub-doc.nexgencloud.com/docs/api-reference/auth-resources/organization/update-org-name).
     * @param {module:model/UpdateOrganizationPayload} payload 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UpdateOrganizationResponseModel}
     */
    updateOrganizationInformation(payload) {
      return this.updateOrganizationInformationWithHttpInfo(payload)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}

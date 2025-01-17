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
import ClusterListResponse from '../model/ClusterListResponse';
import ClusterResponse from '../model/ClusterResponse';
import ClusterVersions from '../model/ClusterVersions';
import CreateClusterPayload from '../model/CreateClusterPayload';
import ErrorResponseModel from '../model/ErrorResponseModel';
import NameAvailableModel from '../model/NameAvailableModel';
import ResponseModel from '../model/ResponseModel';

/**
* Clusters service.
* @module api/ClustersApi
* @version v1.25.0-alpha
*/
export default class ClustersApi {

    /**
    * Constructs a new ClustersApi. 
    * @alias module:api/ClustersApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Create Cluster
     * @param {module:model/CreateClusterPayload} payload 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ClusterResponse} and HTTP response
     */
    createClusterWithHttpInfo(payload) {
      let postBody = payload;
      // verify the required parameter 'payload' is set
      if (payload === undefined || payload === null) {
        throw new Error("Missing the required parameter 'payload' when calling createCluster");
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
      let returnType = ClusterResponse;
      return this.apiClient.callApi(
        '/core/clusters', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create Cluster
     * @param {module:model/CreateClusterPayload} payload 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ClusterResponse}
     */
    createCluster(payload) {
      return this.createClusterWithHttpInfo(payload)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete a cluster
     * @param {Number} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ResponseModel} and HTTP response
     */
    deleteAClusterWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteACluster");
      }

      let pathParams = {
        'id': id
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
        '/core/clusters/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete a cluster
     * @param {Number} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ResponseModel}
     */
    deleteACluster(id) {
      return this.deleteAClusterWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Fetch cluster name availability
     * Check if a Cluster name is available
     * @param {String} name 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/NameAvailableModel} and HTTP response
     */
    fetchClusterNameAvailabilityWithHttpInfo(name) {
      let postBody = null;
      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling fetchClusterNameAvailability");
      }

      let pathParams = {
        'name': name
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
      let returnType = NameAvailableModel;
      return this.apiClient.callApi(
        '/core/clusters/name-availability/{name}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Fetch cluster name availability
     * Check if a Cluster name is available
     * @param {String} name 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/NameAvailableModel}
     */
    fetchClusterNameAvailability(name) {
      return this.fetchClusterNameAvailabilityWithHttpInfo(name)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * GET Cluster Versions
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ClusterVersions} and HTTP response
     */
    getClusterVersionsWithHttpInfo() {
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
      let returnType = ClusterVersions;
      return this.apiClient.callApi(
        '/core/clusters/versions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * GET Cluster Versions
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ClusterVersions}
     */
    getClusterVersions() {
      return this.getClusterVersionsWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Getting Cluster Detail
     * @param {Number} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ClusterResponse} and HTTP response
     */
    gettingClusterDetailWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling gettingClusterDetail");
      }

      let pathParams = {
        'id': id
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
      let returnType = ClusterResponse;
      return this.apiClient.callApi(
        '/core/clusters/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Getting Cluster Detail
     * @param {Number} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ClusterResponse}
     */
    gettingClusterDetail(id) {
      return this.gettingClusterDetailWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List Clusters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ClusterListResponse} and HTTP response
     */
    listClustersWithHttpInfo() {
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
      let returnType = ClusterListResponse;
      return this.apiClient.callApi(
        '/core/clusters', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List Clusters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ClusterListResponse}
     */
    listClusters() {
      return this.listClustersWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}

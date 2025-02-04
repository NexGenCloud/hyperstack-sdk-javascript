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
import ClusterEvents from '../model/ClusterEvents';
import ErrorResponseModel from '../model/ErrorResponseModel';

/**
* ClusterEvents service.
* @module api/ClusterEventsApi
* @version v1.25.0-alpha
*/
export default class ClusterEventsApi {

    /**
    * Constructs a new ClusterEventsApi. 
    * @alias module:api/ClusterEventsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Fetch all of a cluster events
     * @param {String} clusterId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ClusterEvents} and HTTP response
     */
    fetchAllOfAClusterEventsWithHttpInfo(clusterId) {
      let postBody = null;
      // verify the required parameter 'clusterId' is set
      if (clusterId === undefined || clusterId === null) {
        throw new Error("Missing the required parameter 'clusterId' when calling fetchAllOfAClusterEvents");
      }

      let pathParams = {
        'cluster_id': clusterId
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
      let returnType = ClusterEvents;
      return this.apiClient.callApi(
        '/core/clusters/{cluster_id}/events', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Fetch all of a cluster events
     * @param {String} clusterId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ClusterEvents}
     */
    fetchAllOfAClusterEvents(clusterId) {
      return this.fetchAllOfAClusterEventsWithHttpInfo(clusterId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}

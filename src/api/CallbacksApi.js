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
import AttachCallbackPayload from '../model/AttachCallbackPayload';
import AttachCallbackResponse from '../model/AttachCallbackResponse';
import ErrorResponseModel from '../model/ErrorResponseModel';
import ResponseModel from '../model/ResponseModel';

/**
* Callbacks service.
* @module api/CallbacksApi
* @version v1.25.0-alpha
*/
export default class CallbacksApi {

    /**
    * Constructs a new CallbacksApi. 
    * @alias module:api/CallbacksApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Attach callback to virtual machine
     * Creates a callback URL for a specified virtual machine, enabling the posting of action events executed on the virtual machine to the specified URL. Provide the callback URL in the request body and the ID of the virtual machine to which it is being attached in the path. For more details on virtual machine callback URLs, [**click here**](https://infrahub-doc.nexgencloud.com/docs/features/webhooks-callbacks#attach-a-callback-url-to-an-existing-virtual-machine).
     * @param {Number} id 
     * @param {module:model/AttachCallbackPayload} payload 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AttachCallbackResponse} and HTTP response
     */
    attachCallbackToVirtualMachineWithHttpInfo(id, payload) {
      let postBody = payload;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling attachCallbackToVirtualMachine");
      }
      // verify the required parameter 'payload' is set
      if (payload === undefined || payload === null) {
        throw new Error("Missing the required parameter 'payload' when calling attachCallbackToVirtualMachine");
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
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = AttachCallbackResponse;
      return this.apiClient.callApi(
        '/core/virtual-machines/{id}/attach-callback', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Attach callback to virtual machine
     * Creates a callback URL for a specified virtual machine, enabling the posting of action events executed on the virtual machine to the specified URL. Provide the callback URL in the request body and the ID of the virtual machine to which it is being attached in the path. For more details on virtual machine callback URLs, [**click here**](https://infrahub-doc.nexgencloud.com/docs/features/webhooks-callbacks#attach-a-callback-url-to-an-existing-virtual-machine).
     * @param {Number} id 
     * @param {module:model/AttachCallbackPayload} payload 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AttachCallbackResponse}
     */
    attachCallbackToVirtualMachine(id, payload) {
      return this.attachCallbackToVirtualMachineWithHttpInfo(id, payload)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Attach callback to volume
     * Creates a callback URL for a specified volume, enabling the posting of action events executed on the volume to the specified URL. Provide the callback URL in the request body and the ID of the volume to which it is being attached in the path. For more details on volume callback URLs, [**click here**](https://infrahub-doc.nexgencloud.com/docs/features/webhooks-callbacks).
     * @param {Number} id 
     * @param {module:model/AttachCallbackPayload} payload 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AttachCallbackResponse} and HTTP response
     */
    attachCallbackToVolumeWithHttpInfo(id, payload) {
      let postBody = payload;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling attachCallbackToVolume");
      }
      // verify the required parameter 'payload' is set
      if (payload === undefined || payload === null) {
        throw new Error("Missing the required parameter 'payload' when calling attachCallbackToVolume");
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
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = AttachCallbackResponse;
      return this.apiClient.callApi(
        '/core/volumes/{id}/attach-callback', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Attach callback to volume
     * Creates a callback URL for a specified volume, enabling the posting of action events executed on the volume to the specified URL. Provide the callback URL in the request body and the ID of the volume to which it is being attached in the path. For more details on volume callback URLs, [**click here**](https://infrahub-doc.nexgencloud.com/docs/features/webhooks-callbacks).
     * @param {Number} id 
     * @param {module:model/AttachCallbackPayload} payload 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AttachCallbackResponse}
     */
    attachCallbackToVolume(id, payload) {
      return this.attachCallbackToVolumeWithHttpInfo(id, payload)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete virtual machine callback
     * Permanently deletes the callback URL associated with a specified virtual machine by providing the virtual machine ID in the request path. For additional information on virtual machine callback URLs, [**click here**](https://infrahub-doc.nexgencloud.com/docs/features/webhooks-callbacks).
     * @param {Number} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ResponseModel} and HTTP response
     */
    deleteVirtualMachineCallbackWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteVirtualMachineCallback");
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
        '/core/virtual-machines/{id}/delete-callback', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete virtual machine callback
     * Permanently deletes the callback URL associated with a specified virtual machine by providing the virtual machine ID in the request path. For additional information on virtual machine callback URLs, [**click here**](https://infrahub-doc.nexgencloud.com/docs/features/webhooks-callbacks).
     * @param {Number} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ResponseModel}
     */
    deleteVirtualMachineCallback(id) {
      return this.deleteVirtualMachineCallbackWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete volume callback
     * Permanently deletes the callback URL associated with a specified volume by providing the volume ID in the request path. For additional information on volume callback URLs, [**click here**](https://infrahub-doc.nexgencloud.com/docs/features/webhooks-callbacks).
     * @param {Number} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ResponseModel} and HTTP response
     */
    deleteVolumeCallbackWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteVolumeCallback");
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
        '/core/volumes/{id}/delete-callback', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete volume callback
     * Permanently deletes the callback URL associated with a specified volume by providing the volume ID in the request path. For additional information on volume callback URLs, [**click here**](https://infrahub-doc.nexgencloud.com/docs/features/webhooks-callbacks).
     * @param {Number} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ResponseModel}
     */
    deleteVolumeCallback(id) {
      return this.deleteVolumeCallbackWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update virtual machine callback
     * Updates the callback URL for a specified virtual machine. Provide the new callback URL in the request body, along with the ID of the associated virtual machine in the path. For additional information on virtual machine callback URLs, [**click here**](https://infrahub-doc.nexgencloud.com/docs/features/webhooks-callbacks).
     * @param {Number} id 
     * @param {module:model/AttachCallbackPayload} payload 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AttachCallbackResponse} and HTTP response
     */
    updateVirtualMachineCallbackWithHttpInfo(id, payload) {
      let postBody = payload;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateVirtualMachineCallback");
      }
      // verify the required parameter 'payload' is set
      if (payload === undefined || payload === null) {
        throw new Error("Missing the required parameter 'payload' when calling updateVirtualMachineCallback");
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
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = AttachCallbackResponse;
      return this.apiClient.callApi(
        '/core/virtual-machines/{id}/update-callback', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update virtual machine callback
     * Updates the callback URL for a specified virtual machine. Provide the new callback URL in the request body, along with the ID of the associated virtual machine in the path. For additional information on virtual machine callback URLs, [**click here**](https://infrahub-doc.nexgencloud.com/docs/features/webhooks-callbacks).
     * @param {Number} id 
     * @param {module:model/AttachCallbackPayload} payload 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AttachCallbackResponse}
     */
    updateVirtualMachineCallback(id, payload) {
      return this.updateVirtualMachineCallbackWithHttpInfo(id, payload)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update volume callback
     * Updates the callback URL for a specified volume. Provide the new callback URL in the request body, along with the ID of the associated volume in the path. For additional information on volume callback URLs, [**click here**](https://infrahub-doc.nexgencloud.com/docs/features/webhooks-callbacks).
     * @param {Number} id 
     * @param {module:model/AttachCallbackPayload} payload 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AttachCallbackResponse} and HTTP response
     */
    updateVolumeCallbackWithHttpInfo(id, payload) {
      let postBody = payload;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateVolumeCallback");
      }
      // verify the required parameter 'payload' is set
      if (payload === undefined || payload === null) {
        throw new Error("Missing the required parameter 'payload' when calling updateVolumeCallback");
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
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = AttachCallbackResponse;
      return this.apiClient.callApi(
        '/core/volumes/{id}/update-callback', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update volume callback
     * Updates the callback URL for a specified volume. Provide the new callback URL in the request body, along with the ID of the associated volume in the path. For additional information on volume callback URLs, [**click here**](https://infrahub-doc.nexgencloud.com/docs/features/webhooks-callbacks).
     * @param {Number} id 
     * @param {module:model/AttachCallbackPayload} payload 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AttachCallbackResponse}
     */
    updateVolumeCallback(id, payload) {
      return this.updateVolumeCallbackWithHttpInfo(id, payload)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}

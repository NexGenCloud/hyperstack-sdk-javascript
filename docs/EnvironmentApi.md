# HyperstackApi.EnvironmentApi

All URIs are relative to *https://infrahub-api.nexgencloud.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createEnvironment**](EnvironmentApi.md#createEnvironment) | **POST** /core/environments | Create environment
[**deleteEnvironment**](EnvironmentApi.md#deleteEnvironment) | **DELETE** /core/environments/{id} | Delete environment
[**fetchEnvironmentNameAvailability**](EnvironmentApi.md#fetchEnvironmentNameAvailability) | **GET** /core/environments/name-availability/{name} | Fetch environment name availability
[**getEnvironment**](EnvironmentApi.md#getEnvironment) | **GET** /core/environments/{id} | Retrieve environment
[**listEnvironments**](EnvironmentApi.md#listEnvironments) | **GET** /core/environments | List environments
[**updateEnvironment**](EnvironmentApi.md#updateEnvironment) | **PUT** /core/environments/{id} | Update environment



## createEnvironment

> Environment createEnvironment(payload)

Create environment

Creates an environment—a container to organize your resources, including SSH key pairs, virtual machines, and volumes. To create your environment, provide your desired environment name, and [**region**](https://docs.hyperstack.cloud/docs/resource-management/regions/) in the request body.

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.EnvironmentApi();
let payload = new HyperstackApi.CreateEnvironment(); // CreateEnvironment | 
apiInstance.createEnvironment(payload).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **payload** | [**CreateEnvironment**](CreateEnvironment.md)|  | 

### Return type

[**Environment**](Environment.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteEnvironment

> ResponseModel deleteEnvironment(id)

Delete environment

Deletes an environment permanently. Provide the environment ID in the path to remove the specified environment.

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.EnvironmentApi();
let id = 56; // Number | 
apiInstance.deleteEnvironment(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

[**ResponseModel**](ResponseModel.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## fetchEnvironmentNameAvailability

> NameAvailableModel fetchEnvironmentNameAvailability(name)

Fetch environment name availability

Check if a Environment name is available

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.EnvironmentApi();
let name = "name_example"; // String | 
apiInstance.fetchEnvironmentNameAvailability(name).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**|  | 

### Return type

[**NameAvailableModel**](NameAvailableModel.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getEnvironment

> Environment getEnvironment(id)

Retrieve environment

Retrieves details about a specific environment. Provide the environment ID in the path and the new environment &#x60;name&#x60; in the request body to modify the specified environment.

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.EnvironmentApi();
let id = 56; // Number | 
apiInstance.getEnvironment(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

[**Environment**](Environment.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listEnvironments

> Environments listEnvironments(opts)

List environments

Returns a list of your existing environments, providing the following details for each; environment ID, name, [**region**](https://docs.hyperstack.cloud/docs/api-reference/core-resources/environments/), and the date and time of creation. For more information on environments, [**click here**](https://docs.hyperstack.cloud/docs/api-reference/core-resources/environments/).

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.EnvironmentApi();
let opts = {
  'page': "page_example", // String | Page Number
  'pageSize': "pageSize_example", // String | Data Per Page
  'search': "search_example" // String | Search By ID or Name or Region
};
apiInstance.listEnvironments(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **String**| Page Number | [optional] 
 **pageSize** | **String**| Data Per Page | [optional] 
 **search** | **String**| Search By ID or Name or Region | [optional] 

### Return type

[**Environments**](Environments.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateEnvironment

> Environment updateEnvironment(id, payload)

Update environment

Updates the name of an existing environment. Provide the environment ID in the path and the new environment &#x60;name&#x60; in the request body to modify the specified environment.

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.EnvironmentApi();
let id = 56; // Number | 
let payload = new HyperstackApi.UpdateEnvironment(); // UpdateEnvironment | 
apiInstance.updateEnvironment(id, payload).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **payload** | [**UpdateEnvironment**](UpdateEnvironment.md)|  | 

### Return type

[**Environment**](Environment.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


# HyperstackApi.ComplianceApi

All URIs are relative to *https://infrahub-api.nexgencloud.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCompliance**](ComplianceApi.md#createCompliance) | **POST** /core/compliance | Create compliance
[**deleteACompliance**](ComplianceApi.md#deleteACompliance) | **DELETE** /core/compliance/{gpu_model} | Delete a compliance
[**retrieveGpuCompliance**](ComplianceApi.md#retrieveGpuCompliance) | **GET** /core/compliance | Retrieve GPU compliance
[**updateACompliance**](ComplianceApi.md#updateACompliance) | **PUT** /core/compliance | Update a compliance



## createCompliance

> CreateUpdateComplianceResponse createCompliance(payload)

Create compliance

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';
// Configure API key authorization: accessToken
let accessToken = defaultClient.authentications['accessToken'];
accessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//accessToken.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.ComplianceApi();
let payload = new HyperstackApi.CompliancePayload(); // CompliancePayload | 
apiInstance.createCompliance(payload).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **payload** | [**CompliancePayload**](CompliancePayload.md)|  | 

### Return type

[**CreateUpdateComplianceResponse**](CreateUpdateComplianceResponse.md)

### Authorization

[apiKey](../README.md#apiKey), [accessToken](../README.md#accessToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteACompliance

> ResponseModel deleteACompliance(gpuModel)

Delete a compliance

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';
// Configure API key authorization: accessToken
let accessToken = defaultClient.authentications['accessToken'];
accessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//accessToken.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.ComplianceApi();
let gpuModel = "gpuModel_example"; // String | 
apiInstance.deleteACompliance(gpuModel).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gpuModel** | **String**|  | 

### Return type

[**ResponseModel**](ResponseModel.md)

### Authorization

[apiKey](../README.md#apiKey), [accessToken](../README.md#accessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## retrieveGpuCompliance

> ComplianceResponse retrieveGpuCompliance(opts)

Retrieve GPU compliance

Returns a list of compliance objects each corresponding to available GPU models. These compliance objects contain minimum and maximum values for RAM in GB, number of vCPUs, and system disk capacity in GB. Use the optional &#x60;gpu&#x60; model parameter in the query string to filter responses by GPU model. For additional details on GPU compliance, [**click here**](https://infrahub-doc.nexgencloud.com/docs/hardware/flavors#adhering-to-gpu-compliance).

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';
// Configure API key authorization: accessToken
let accessToken = defaultClient.authentications['accessToken'];
accessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//accessToken.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.ComplianceApi();
let opts = {
  'gpu': "gpu_example" // String | This is for gpu model
};
apiInstance.retrieveGpuCompliance(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gpu** | **String**| This is for gpu model | [optional] 

### Return type

[**ComplianceResponse**](ComplianceResponse.md)

### Authorization

[apiKey](../README.md#apiKey), [accessToken](../README.md#accessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateACompliance

> CreateUpdateComplianceResponse updateACompliance(payload)

Update a compliance

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';
// Configure API key authorization: accessToken
let accessToken = defaultClient.authentications['accessToken'];
accessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//accessToken.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.ComplianceApi();
let payload = new HyperstackApi.CompliancePayload(); // CompliancePayload | 
apiInstance.updateACompliance(payload).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **payload** | [**CompliancePayload**](CompliancePayload.md)|  | 

### Return type

[**CreateUpdateComplianceResponse**](CreateUpdateComplianceResponse.md)

### Authorization

[apiKey](../README.md#apiKey), [accessToken](../README.md#accessToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


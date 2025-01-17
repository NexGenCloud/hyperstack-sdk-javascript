# HyperstackApi.CalculateApi

All URIs are relative to *https://infrahub-api.nexgencloud.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**retrieveBillingRateForResource**](CalculateApi.md#retrieveBillingRateForResource) | **GET** /pricebook/calculate/resource/{resource_type}/{id} | Retrieve Billing Rate for Resource



## retrieveBillingRateForResource

> ResourceBillingResponseForCustomer retrieveBillingRateForResource(resourceType, id)

Retrieve Billing Rate for Resource

Calculate the hourly billing rate of a specified resource by including the resource ID in the path.

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

let apiInstance = new HyperstackApi.CalculateApi();
let resourceType = "resourceType_example"; // String | 
let id = 56; // Number | 
apiInstance.retrieveBillingRateForResource(resourceType, id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resourceType** | **String**|  | 
 **id** | **Number**|  | 

### Return type

[**ResourceBillingResponseForCustomer**](ResourceBillingResponseForCustomer.md)

### Authorization

[apiKey](../README.md#apiKey), [accessToken](../README.md#accessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


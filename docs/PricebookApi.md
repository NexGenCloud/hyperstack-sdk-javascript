# HyperstackApi.PricebookApi

All URIs are relative to *https://infrahub-api.nexgencloud.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getPricebook**](PricebookApi.md#getPricebook) | **GET** /pricebook | 



## getPricebook

> [PricebookModel] getPricebook()



Retrieves the Infrahub Pricebook, detailing hourly running costs for all resources offered by Infrahub. For more information on Pricebook [**click here**](None/docs/api-reference/pricebook-resources/pricebook/).

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.PricebookApi();
apiInstance.getPricebook().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[PricebookModel]**](PricebookModel.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


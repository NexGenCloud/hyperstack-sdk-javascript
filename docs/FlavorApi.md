# HyperstackApi.FlavorApi

All URIs are relative to *https://infrahub-api.nexgencloud.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listFlavors**](FlavorApi.md#listFlavors) | **GET** /core/flavors | List Flavors



## listFlavors

> FlavorListResponse listFlavors(opts)

List Flavors

Returns a list of available virtual machine hardware configurations, known as**flavors**. You can specify a &#x60;region_name&#x60; in the query string of the request toretrieve flavors available only in the specified region; by default, it returnsflavors available in all regions. For more details on flavors,[**click here**](https://docs.hyperstack.cloud/docs/hardware/flavors).

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.FlavorApi();
let opts = {
  'region': "region_example" // String | Region Name
};
apiInstance.listFlavors(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **region** | **String**| Region Name | [optional] 

### Return type

[**FlavorListResponse**](FlavorListResponse.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


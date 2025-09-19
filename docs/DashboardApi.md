# HyperstackApi.DashboardApi

All URIs are relative to *https://infrahub-api.nexgencloud.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**retrieveDashboard**](DashboardApi.md#retrieveDashboard) | **GET** /core/dashboard | Retrieve Dashboard



## retrieveDashboard

> DashboardInfoResponse retrieveDashboard()

Retrieve Dashboard

Returns hardware and pricing overview for your active resources, includingvirtual machines, containers, and volumes. For more details on the Dashboard feature, [**click here**](https://docs.hyperstack.cloud/docs/resource-management/dashboard/).

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.DashboardApi();
apiInstance.retrieveDashboard().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**DashboardInfoResponse**](DashboardInfoResponse.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


# HyperstackApi.StockApi

All URIs are relative to *https://infrahub-api.nexgencloud.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**retrieveGpuStocks**](StockApi.md#retrieveGpuStocks) | **GET** /core/stocks | Retrieve GPU stocks



## retrieveGpuStocks

> NewStockRetriveResponse retrieveGpuStocks()

Retrieve GPU stocks

Returns information on current and upcoming GPU availability, organized by region and GPU model. For additional information on GPU stocks, [**click here**](https://infrahub-doc.nexgencloud.com/docs/hardware/gpu-stock-information).

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

let apiInstance = new HyperstackApi.StockApi();
apiInstance.retrieveGpuStocks().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**NewStockRetriveResponse**](NewStockRetriveResponse.md)

### Authorization

[apiKey](../README.md#apiKey), [accessToken](../README.md#accessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


# HyperstackApi.AliveApi

All URIs are relative to *https://infrahub-api.nexgencloud.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAlive**](AliveApi.md#getAlive) | **GET** /billing/alive | GET: Alive



## getAlive

> getAlive()

GET: Alive

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';

let apiInstance = new HyperstackApi.AliveApi();
apiInstance.getAlive().then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


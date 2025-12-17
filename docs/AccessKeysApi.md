# HyperstackApi.AccessKeysApi

All URIs are relative to *https://infrahub-api.nexgencloud.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createAccessKeyEndpoint**](AccessKeysApi.md#createAccessKeyEndpoint) | **POST** /object-storage/access-keys | Generate a new access key
[**deleteAccessKeyEndpoint**](AccessKeysApi.md#deleteAccessKeyEndpoint) | **DELETE** /object-storage/access-keys/{access_key_id} | Remove an existing access key
[**listAccessKeysEndpoint**](AccessKeysApi.md#listAccessKeysEndpoint) | **GET** /object-storage/access-keys | List access keys



## createAccessKeyEndpoint

> ObjectStorageAccessKeyCreateResponse createAccessKeyEndpoint(opts)

Generate a new access key

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.AccessKeysApi();
let opts = {
  'body': new HyperstackApi.ObjectStorageAccessKeyCreateRequest() // ObjectStorageAccessKeyCreateRequest | 
};
apiInstance.createAccessKeyEndpoint(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ObjectStorageAccessKeyCreateRequest**](ObjectStorageAccessKeyCreateRequest.md)|  | [optional] 

### Return type

[**ObjectStorageAccessKeyCreateResponse**](ObjectStorageAccessKeyCreateResponse.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteAccessKeyEndpoint

> ObjectStorageDeleteResponse deleteAccessKeyEndpoint(accessKeyId)

Remove an existing access key

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.AccessKeysApi();
let accessKeyId = "accessKeyId_example"; // String | 
apiInstance.deleteAccessKeyEndpoint(accessKeyId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accessKeyId** | **String**|  | 

### Return type

[**ObjectStorageDeleteResponse**](ObjectStorageDeleteResponse.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listAccessKeysEndpoint

> ObjectStorageAccessKeyListResponse listAccessKeysEndpoint(opts)

List access keys

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.AccessKeysApi();
let opts = {
  'search': "search_example", // String | 
  'page': "page_example", // String | 
  'pageSize': "pageSize_example" // String | 
};
apiInstance.listAccessKeysEndpoint(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **search** | **String**|  | [optional] 
 **page** | **String**|  | [optional] 
 **pageSize** | **String**|  | [optional] 

### Return type

[**ObjectStorageAccessKeyListResponse**](ObjectStorageAccessKeyListResponse.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


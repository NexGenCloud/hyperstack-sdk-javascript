# HyperstackApi.BucketsApi

All URIs are relative to *https://infrahub-api.nexgencloud.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteBucketEndpoint**](BucketsApi.md#deleteBucketEndpoint) | **DELETE** /object-storage/buckets/{bucket_name} | Delete a bucket
[**listBucketsEndpoint**](BucketsApi.md#listBucketsEndpoint) | **GET** /object-storage/buckets | List buckets
[**retrieveBucketEndpoint**](BucketsApi.md#retrieveBucketEndpoint) | **GET** /object-storage/buckets/{bucket_name} | Retrieve a bucket



## deleteBucketEndpoint

> ObjectStorageDeleteResponse deleteBucketEndpoint(bucketName, region)

Delete a bucket

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.BucketsApi();
let bucketName = "bucketName_example"; // String | 
let region = "region_example"; // String | 
apiInstance.deleteBucketEndpoint(bucketName, region).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bucketName** | **String**|  | 
 **region** | **String**|  | 

### Return type

[**ObjectStorageDeleteResponse**](ObjectStorageDeleteResponse.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listBucketsEndpoint

> ObjectStorageBucketListResponse listBucketsEndpoint(opts)

List buckets

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.BucketsApi();
let opts = {
  'search': "search_example" // String | 
};
apiInstance.listBucketsEndpoint(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **search** | **String**|  | [optional] 

### Return type

[**ObjectStorageBucketListResponse**](ObjectStorageBucketListResponse.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## retrieveBucketEndpoint

> ObjectStorageBucketResponse retrieveBucketEndpoint(bucketName, region)

Retrieve a bucket

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.BucketsApi();
let bucketName = "bucketName_example"; // String | 
let region = "region_example"; // String | 
apiInstance.retrieveBucketEndpoint(bucketName, region).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bucketName** | **String**|  | 
 **region** | **String**|  | 

### Return type

[**ObjectStorageBucketResponse**](ObjectStorageBucketResponse.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


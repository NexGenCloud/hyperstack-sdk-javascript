# HyperstackApi.ImageApi

All URIs are relative to *https://infrahub-api.nexgencloud.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteImage**](ImageApi.md#deleteImage) | **DELETE** /core/images/{id} | Delete an image
[**fetchImageNameAvailability**](ImageApi.md#fetchImageNameAvailability) | **GET** /core/image/name-availability/{name} | Fetch name availability for Images
[**getImage**](ImageApi.md#getImage) | **GET** /core/images/{id} | Get Private Image Details
[**listImages**](ImageApi.md#listImages) | **GET** /core/images | List Images



## deleteImage

> ResponseModel deleteImage(id)

Delete an image

Deletes an image permanently. Provide the image ID in the path to specify the image to be deleted.

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.ImageApi();
let id = 56; // Number | 
apiInstance.deleteImage(id).then((data) => {
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


## fetchImageNameAvailability

> NameAvailableModel fetchImageNameAvailability(name)

Fetch name availability for Images

Check if an Image name is available

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.ImageApi();
let name = "name_example"; // String | 
apiInstance.fetchImageNameAvailability(name).then((data) => {
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


## getImage

> Image getImage(id, opts)

Get Private Image Details

Retrieve details of a specific image by providing the image ID.

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.ImageApi();
let id = 56; // Number | 
let opts = {
  'includeRelatedVms': true // Boolean | 
};
apiInstance.getImage(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **includeRelatedVms** | **Boolean**|  | [optional] 

### Return type

[**Image**](Image.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listImages

> Images listImages(opts)

List Images

Returns a list of all available operating system (OS) images, providing details about each image&#39;s corresponding virtual machine operating system. You can include the optional &#x60;region&#x60; parameter in the query string of the request to specifically return OS images from the designated region. Additionally, use the &#x60;include_public&#x60; parameter to specify whether to include public images in the response. For more information onOS images, [**click here**](https://docs.hyperstack.cloud/docs/virtual-machines/images).

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.ImageApi();
let opts = {
  'region': "region_example", // String | Region Name
  'includePublic': true, // Boolean | Flag to include public images in the response (true/false). Default is true.
  'search': "search_example", // String | Search query to filter images by name
  'page': 56, // Number | Page number for pagination
  'perPage': 56 // Number | Number of Images per page
};
apiInstance.listImages(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **region** | **String**| Region Name | [optional] 
 **includePublic** | **Boolean**| Flag to include public images in the response (true/false). Default is true. | [optional] 
 **search** | **String**| Search query to filter images by name | [optional] 
 **page** | **Number**| Page number for pagination | [optional] 
 **perPage** | **Number**| Number of Images per page | [optional] 

### Return type

[**Images**](Images.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


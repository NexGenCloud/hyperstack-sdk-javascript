# HyperstackApi.VolumeApi

All URIs are relative to *https://infrahub-api.nexgencloud.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createVolume**](VolumeApi.md#createVolume) | **POST** /core/volumes | Create volume
[**deleteVolume**](VolumeApi.md#deleteVolume) | **DELETE** /core/volumes/{volume_id} | Delete volume
[**fetchVolumeNameAvailability**](VolumeApi.md#fetchVolumeNameAvailability) | **GET** /core/volume/name-availability/{name} | Fetch volume name availability
[**getVolume**](VolumeApi.md#getVolume) | **GET** /core/volumes/{volume_id} | Fetch Volume Details
[**listVolumeTypes**](VolumeApi.md#listVolumeTypes) | **GET** /core/volume-types | List volume types
[**listVolumes**](VolumeApi.md#listVolumes) | **GET** /core/volumes | List volumes
[**updateVolume**](VolumeApi.md#updateVolume) | **PATCH** /core/volumes/{volume_id} | Update volume fields



## createVolume

> Volume createVolume(payload)

Create volume

Creates a volume that can be attached to a virtual machine, expanding its storage capacity. Specify the volume type and custom configuration in the request body. For additional details on volumes, [**click here**]({Config.INFRAHUB_DOCS_BASE}/docs/api-reference/core-resources/volumes/create-volume).

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.VolumeApi();
let payload = new HyperstackApi.CreateVolumePayload(); // CreateVolumePayload | 
apiInstance.createVolume(payload).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **payload** | [**CreateVolumePayload**](CreateVolumePayload.md)|  | 

### Return type

[**Volume**](Volume.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteVolume

> ResponseModel deleteVolume(volumeId)

Delete volume

Deletes a volume permanently. Provide the volume ID in the path to specify the volume to be deleted.

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.VolumeApi();
let volumeId = 56; // Number | 
apiInstance.deleteVolume(volumeId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **volumeId** | **Number**|  | 

### Return type

[**ResponseModel**](ResponseModel.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## fetchVolumeNameAvailability

> NameAvailableModel fetchVolumeNameAvailability(name)

Fetch volume name availability

Check if a Volume name is available

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.VolumeApi();
let name = "name_example"; // String | 
apiInstance.fetchVolumeNameAvailability(name).then((data) => {
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


## getVolume

> Volume getVolume(volumeId)

Fetch Volume Details

Fetch volume details for specific volume. This endpoint returns id, name, volume size, volume type, status, description, image_id, os_image, created_at, updated_at etc.

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.VolumeApi();
let volumeId = 56; // Number | 
apiInstance.getVolume(volumeId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **volumeId** | **Number**|  | 

### Return type

[**Volume**](Volume.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listVolumeTypes

> VolumeTypes listVolumeTypes()

List volume types

Retrieves a list of available volume types that can be used in the creation of a new volume.

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.VolumeApi();
apiInstance.listVolumeTypes().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**VolumeTypes**](VolumeTypes.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listVolumes

> Volumes listVolumes(opts)

List volumes

Returns a list of your existing volumes, providing details for each. For more information on volumes, [**click here**]({Config.INFRAHUB_DOCS_BASE}/docs/api-reference/core-resources/volumes/).

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.VolumeApi();
let opts = {
  'page': "page_example", // String | Page Number
  'pageSize': "pageSize_example", // String | Data Per Page
  'search': "search_example", // String | 
  'environment': "environment_example" // String | Filter Environment ID or Name
};
apiInstance.listVolumes(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **String**| Page Number | [optional] 
 **pageSize** | **String**| Data Per Page | [optional] 
 **search** | **String**|  | [optional] 
 **environment** | **String**| Filter Environment ID or Name | [optional] 

### Return type

[**Volumes**](Volumes.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateVolume

> UpdateVolumeResponse updateVolume(volumeId, payload)

Update volume fields

Update volume properties. Currently supports updating the environment by providing &#39;environment_name&#39;. The volume must not be attached to any instance when changing environments, and the target environment must be in the same region.

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.VolumeApi();
let volumeId = 56; // Number | 
let payload = new HyperstackApi.UpdateVolumePayload(); // UpdateVolumePayload | 
apiInstance.updateVolume(volumeId, payload).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **volumeId** | **Number**|  | 
 **payload** | [**UpdateVolumePayload**](UpdateVolumePayload.md)|  | 

### Return type

[**UpdateVolumeResponse**](UpdateVolumeResponse.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


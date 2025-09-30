# HyperstackApi.SnapshotsApi

All URIs are relative to *https://infrahub-api.nexgencloud.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createANewCustomImage**](SnapshotsApi.md#createANewCustomImage) | **POST** /core/snapshots/{snapshot_id}/image | Create an image from a snapshot
[**deleteAnExistingSnapshot**](SnapshotsApi.md#deleteAnExistingSnapshot) | **DELETE** /core/snapshots/{id} | Delete snapshot
[**fetchSnapshotNameAvailability**](SnapshotsApi.md#fetchSnapshotNameAvailability) | **GET** /core/snapshots/name-availability/{name} | Fetch snapshot name availability
[**restoreASnapshot**](SnapshotsApi.md#restoreASnapshot) | **POST** /core/snapshots/{id}/restore | Restore a snapshot
[**retrieveAnExistingSnapshot**](SnapshotsApi.md#retrieveAnExistingSnapshot) | **GET** /core/snapshots/{id} | Retrieve a snapshot
[**retrievesAListOfSnapshots**](SnapshotsApi.md#retrievesAListOfSnapshots) | **GET** /core/snapshots | Retrieve list of snapshots with pagination



## createANewCustomImage

> CreateImage createANewCustomImage(snapshotId, payload)

Create an image from a snapshot

Create a new custom image from an existing snapshot.Requires a name and any labels for your new custom image.

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.SnapshotsApi();
let snapshotId = 56; // Number | 
let payload = new HyperstackApi.CreateImagePayload(); // CreateImagePayload | 
apiInstance.createANewCustomImage(snapshotId, payload).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **snapshotId** | **Number**|  | 
 **payload** | [**CreateImagePayload**](CreateImagePayload.md)|  | 

### Return type

[**CreateImage**](CreateImage.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteAnExistingSnapshot

> ResponseModel deleteAnExistingSnapshot(id)

Delete snapshot

Delete a snapshot. Provide the snapshot ID in the path to delete the specified snapshot. If the snapshot is connected with an image, that image will also bedeleted and the deleted image ID will be returned in the success message response.

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.SnapshotsApi();
let id = 56; // Number | 
apiInstance.deleteAnExistingSnapshot(id).then((data) => {
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


## fetchSnapshotNameAvailability

> NameAvailableModel fetchSnapshotNameAvailability(name)

Fetch snapshot name availability

Check if a Snapshot name is available

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.SnapshotsApi();
let name = "name_example"; // String | 
apiInstance.fetchSnapshotNameAvailability(name).then((data) => {
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


## restoreASnapshot

> Instance restoreASnapshot(id, payload)

Restore a snapshot

Restore a snapshot.

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.SnapshotsApi();
let id = 56; // Number | 
let payload = new HyperstackApi.SnapshotRestoreRequest(); // SnapshotRestoreRequest | 
apiInstance.restoreASnapshot(id, payload).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **payload** | [**SnapshotRestoreRequest**](SnapshotRestoreRequest.md)|  | 

### Return type

[**Instance**](Instance.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## retrieveAnExistingSnapshot

> SnapshotRetrieve retrieveAnExistingSnapshot(id)

Retrieve a snapshot

Retrieve a snapshot.

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.SnapshotsApi();
let id = 56; // Number | 
apiInstance.retrieveAnExistingSnapshot(id).then((data) => {
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

[**SnapshotRetrieve**](SnapshotRetrieve.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## retrievesAListOfSnapshots

> Snapshots retrievesAListOfSnapshots(opts)

Retrieve list of snapshots with pagination

Retrieves a list of snapshots, providing details such as snapshot name, timestamp, VM ID, and other relevant information.

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.SnapshotsApi();
let opts = {
  'page': "page_example", // String | Page Number
  'pageSize': "pageSize_example", // String | Data Per Page
  'search': "search_example" // String | Search By Snapshot ID or Name
};
apiInstance.retrievesAListOfSnapshots(opts).then((data) => {
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
 **search** | **String**| Search By Snapshot ID or Name | [optional] 

### Return type

[**Snapshots**](Snapshots.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


# HyperstackApi.SnapshotEventsApi

All URIs are relative to *https://infrahub-api.nexgencloud.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**fetchAllEventsForASnapshot**](SnapshotEventsApi.md#fetchAllEventsForASnapshot) | **GET** /core/snapshots/{snapshot_id}/events | Fetch all events for a snapshot



## fetchAllEventsForASnapshot

> fetchAllEventsForASnapshot(snapshotId)

Fetch all events for a snapshot

Retrieves a list of all events for a Snapshot&#39;s history, which records actions performed on the specific snapshot. Requires the snapshot ID in the path.

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

let apiInstance = new HyperstackApi.SnapshotEventsApi();
let snapshotId = 56; // Number | 
apiInstance.fetchAllEventsForASnapshot(snapshotId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **snapshotId** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[apiKey](../README.md#apiKey), [accessToken](../README.md#accessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


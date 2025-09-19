# HyperstackApi.ClusterEventsApi

All URIs are relative to *https://infrahub-api.nexgencloud.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**fetchAllOfAClusterEvents**](ClusterEventsApi.md#fetchAllOfAClusterEvents) | **GET** /core/clusters/{cluster_id}/events | Fetch all of a cluster events



## fetchAllOfAClusterEvents

> ClusterEvents fetchAllOfAClusterEvents(clusterId)

Fetch all of a cluster events

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.ClusterEventsApi();
let clusterId = "clusterId_example"; // String | 
apiInstance.fetchAllOfAClusterEvents(clusterId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clusterId** | **String**|  | 

### Return type

[**ClusterEvents**](ClusterEvents.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


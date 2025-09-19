# HyperstackApi.VirtualMachineEventsApi

All URIs are relative to *https://infrahub-api.nexgencloud.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listVirtualMachineEvents**](VirtualMachineEventsApi.md#listVirtualMachineEvents) | **GET** /core/virtual-machines/{vm_id}/events | List virtual machine events



## listVirtualMachineEvents

> InstanceEvents listVirtualMachineEvents(vmId)

List virtual machine events

Retrieves a list of all events in a virtual machine&#39;s history, which records actions performed on the specified virtual machine. Include the virtual machine ID in the path to retrieve the history of events. For more details on virtual machine events history, [**click here**](https://docs.hyperstack.cloud/docs/virtual-machines/vm-performance-metrics-and-events-history#events-history).

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.VirtualMachineEventsApi();
let vmId = 56; // Number | 
apiInstance.listVirtualMachineEvents(vmId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vmId** | **Number**|  | 

### Return type

[**InstanceEvents**](InstanceEvents.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


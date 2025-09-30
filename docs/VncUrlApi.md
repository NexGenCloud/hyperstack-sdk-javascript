# HyperstackApi.VncUrlApi

All URIs are relative to *https://infrahub-api.nexgencloud.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getVNCURL**](VncUrlApi.md#getVNCURL) | **GET** /core/virtual-machines/{vm_id}/console/{job_id} | Get VNC Console Link
[**getVncUrl**](VncUrlApi.md#getVncUrl) | **GET** /core/virtual-machines/{vm_id}/request-console | Request Instance Console



## getVNCURL

> VNCURL getVNCURL(vmId, jobId)

Get VNC Console Link

Retrieves the URL to access the VNC console for a specified virtual machine by providing the virtual machine ID and the job ID in the path. For more information, [**click here**](https://docs.hyperstack.cloud/docs/api-reference/core-resources/virtual-machines/vnc-console/retrieve-vnc-url).

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.VncUrlApi();
let vmId = 56; // Number | 
let jobId = 56; // Number | 
apiInstance.getVNCURL(vmId, jobId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vmId** | **Number**|  | 
 **jobId** | **Number**|  | 

### Return type

[**VNCURL**](VNCURL.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getVncUrl

> RequestConsole getVncUrl(vmId)

Request Instance Console

Retrieves the path of the VNC console for the given virtual machine ID by providing the virtual machine ID in the path. For more information, [**click here**](https://docs.hyperstack.cloud/docs/api-reference/core-resources/virtual-machines/vnc-console/retrieve-console-path).

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.VncUrlApi();
let vmId = 56; // Number | 
apiInstance.getVncUrl(vmId).then((data) => {
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

[**RequestConsole**](RequestConsole.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


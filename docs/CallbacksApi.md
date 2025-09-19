# HyperstackApi.CallbacksApi

All URIs are relative to *https://infrahub-api.nexgencloud.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**attachCallbackToVirtualMachine**](CallbacksApi.md#attachCallbackToVirtualMachine) | **POST** /core/virtual-machines/{vm_id}/attach-callback | Attach callback to virtual machine
[**attachCallbackToVolume**](CallbacksApi.md#attachCallbackToVolume) | **POST** /core/volumes/{volume_id}/attach-callback | Attach callback to volume
[**deleteVirtualMachineCallback**](CallbacksApi.md#deleteVirtualMachineCallback) | **DELETE** /core/virtual-machines/{vm_id}/delete-callback | Delete virtual machine callback
[**deleteVolumeCallback**](CallbacksApi.md#deleteVolumeCallback) | **DELETE** /core/volumes/{volume_id}/delete-callback | Delete volume callback
[**updateVirtualMachineCallback**](CallbacksApi.md#updateVirtualMachineCallback) | **PUT** /core/virtual-machines/{vm_id}/update-callback | Update virtual machine callback
[**updateVolumeCallback**](CallbacksApi.md#updateVolumeCallback) | **PUT** /core/volumes/{volume_id}/update-callback | Update volume callback



## attachCallbackToVirtualMachine

> AttachCallbackResponse attachCallbackToVirtualMachine(vmId, payload)

Attach callback to virtual machine

Creates a callback URL for a specified virtual machine, enabling the posting of action events executed on the virtual machine to the specified URL. Provide the callback URL in the request body and the ID of the virtual machine to which it is being attached in the path. For more details on virtual machine callback URLs, [**click here**](https://docs.hyperstack.cloud/docs/api-reference/core-resources/virtual-machines/callbacks-vms/attach-callback-vm).

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.CallbacksApi();
let vmId = 56; // Number | 
let payload = new HyperstackApi.AttachCallbackPayload(); // AttachCallbackPayload | 
apiInstance.attachCallbackToVirtualMachine(vmId, payload).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vmId** | **Number**|  | 
 **payload** | [**AttachCallbackPayload**](AttachCallbackPayload.md)|  | 

### Return type

[**AttachCallbackResponse**](AttachCallbackResponse.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## attachCallbackToVolume

> AttachCallbackResponse attachCallbackToVolume(volumeId, payload)

Attach callback to volume

Creates a callback URL for a specified volume, enabling the posting of action events executed on the volume to the specified URL. Provide the callback URL in the request body and the ID of the volume to which it is being attached in the path. For more details on volume callback URLs, [**click here**](https://docs.hyperstack.cloud/docs/api-reference/core-resources/volumes/volume-callbacks/attach-callback-volume).

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.CallbacksApi();
let volumeId = 56; // Number | 
let payload = new HyperstackApi.AttachCallbackPayload(); // AttachCallbackPayload | 
apiInstance.attachCallbackToVolume(volumeId, payload).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **volumeId** | **Number**|  | 
 **payload** | [**AttachCallbackPayload**](AttachCallbackPayload.md)|  | 

### Return type

[**AttachCallbackResponse**](AttachCallbackResponse.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteVirtualMachineCallback

> ResponseModel deleteVirtualMachineCallback(vmId)

Delete virtual machine callback

Permanently deletes the callback URL associated with a specified virtual machine by providing the virtual machine ID in the request path. For additional information on virtual machine callback URLs, [**click here**](https://docs.hyperstack.cloud/docs/api-reference/core-resources/virtual-machines/callbacks-vms/delete-callback-vm).

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.CallbacksApi();
let vmId = 56; // Number | 
apiInstance.deleteVirtualMachineCallback(vmId).then((data) => {
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

[**ResponseModel**](ResponseModel.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteVolumeCallback

> ResponseModel deleteVolumeCallback(volumeId)

Delete volume callback

Permanently deletes the callback URL associated with a specified volume by providing the volume ID in the request path. For additional information on volume callback URLs, [**click here**](https://docs.hyperstack.cloud/docs/api-reference/core-resources/volumes/volume-callbacks/delete-callback-volume).

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.CallbacksApi();
let volumeId = 56; // Number | 
apiInstance.deleteVolumeCallback(volumeId).then((data) => {
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


## updateVirtualMachineCallback

> AttachCallbackResponse updateVirtualMachineCallback(vmId, payload)

Update virtual machine callback

Updates the callback URL for a specified virtual machine. Provide the new callback URL in the request body, along with the ID of the associated virtual machine in the path. For additional information on virtual machine callback URLs, [**click here**](https://docs.hyperstack.cloud/docs/api-reference/core-resources/virtual-machines/callbacks-vms).

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.CallbacksApi();
let vmId = 56; // Number | 
let payload = new HyperstackApi.AttachCallbackPayload(); // AttachCallbackPayload | 
apiInstance.updateVirtualMachineCallback(vmId, payload).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vmId** | **Number**|  | 
 **payload** | [**AttachCallbackPayload**](AttachCallbackPayload.md)|  | 

### Return type

[**AttachCallbackResponse**](AttachCallbackResponse.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateVolumeCallback

> AttachCallbackResponse updateVolumeCallback(volumeId, payload)

Update volume callback

Updates the callback URL for a specified volume. Provide the new callback URL in the request body, along with the ID of the associated volume in the path. For additional information on volume callback URLs, [**click here**](https://docs.hyperstack.cloud/docs/api-reference/core-resources/volumes/volume-callbacks/update-callback-volume/).

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.CallbacksApi();
let volumeId = 56; // Number | 
let payload = new HyperstackApi.AttachCallbackPayload(); // AttachCallbackPayload | 
apiInstance.updateVolumeCallback(volumeId, payload).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **volumeId** | **Number**|  | 
 **payload** | [**AttachCallbackPayload**](AttachCallbackPayload.md)|  | 

### Return type

[**AttachCallbackResponse**](AttachCallbackResponse.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


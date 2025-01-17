# HyperstackApi.VolumeAttachmentApi

All URIs are relative to *https://infrahub-api.nexgencloud.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**attachVolumesToVirtualMachine**](VolumeAttachmentApi.md#attachVolumesToVirtualMachine) | **POST** /core/virtual-machines/{virtual_machine_id}/attach-volumes | Attach volumes to virtual machine
[**detachVolumesFromVirtualMachine**](VolumeAttachmentApi.md#detachVolumesFromVirtualMachine) | **POST** /core/virtual-machines/{virtual_machine_id}/detach-volumes | Detach volumes from virtual machine



## attachVolumesToVirtualMachine

> AttachVolumes attachVolumesToVirtualMachine(virtualMachineId, payload)

Attach volumes to virtual machine

Attaches one or more volumes to an existing virtual machine, expanding its storage capacity by 2PB per attached volume. Include the virtual machine ID in the path and the volume IDs in the request body to attach the specified volumes to the designated virtual machine. For additional details on volume attachment, [**click here**](https://infrahub-doc.nexgencloud.com/docs/features/volumes-available-features#attach-a-volume-to-a-virtual-machine-1).

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

let apiInstance = new HyperstackApi.VolumeAttachmentApi();
let virtualMachineId = 56; // Number | 
let payload = new HyperstackApi.AttachVolumesPayload(); // AttachVolumesPayload | 
apiInstance.attachVolumesToVirtualMachine(virtualMachineId, payload).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **virtualMachineId** | **Number**|  | 
 **payload** | [**AttachVolumesPayload**](AttachVolumesPayload.md)|  | 

### Return type

[**AttachVolumes**](AttachVolumes.md)

### Authorization

[apiKey](../README.md#apiKey), [accessToken](../README.md#accessToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## detachVolumesFromVirtualMachine

> DetachVolumes detachVolumesFromVirtualMachine(virtualMachineId, payload)

Detach volumes from virtual machine

Detaches one or more volumes currently attached to an existing virtual machine. Include the virtual machine ID in the path and the volume IDs in the request body to detach the specified volumes from the designated virtual machine.

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

let apiInstance = new HyperstackApi.VolumeAttachmentApi();
let virtualMachineId = 56; // Number | 
let payload = new HyperstackApi.DetachVolumesPayload(); // DetachVolumesPayload | 
apiInstance.detachVolumesFromVirtualMachine(virtualMachineId, payload).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **virtualMachineId** | **Number**|  | 
 **payload** | [**DetachVolumesPayload**](DetachVolumesPayload.md)|  | 

### Return type

[**DetachVolumes**](DetachVolumes.md)

### Authorization

[apiKey](../README.md#apiKey), [accessToken](../README.md#accessToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


# HyperstackApi.VolumeAttachmentApi

All URIs are relative to *https://infrahub-api.nexgencloud.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**attachVolumesToVM**](VolumeAttachmentApi.md#attachVolumesToVM) | **POST** /core/virtual-machines/{vm_id}/attach-volumes | Attach volumes to virtual machine
[**detachVolumesFromVM**](VolumeAttachmentApi.md#detachVolumesFromVM) | **POST** /core/virtual-machines/{vm_id}/detach-volumes | Detach volumes from virtual machine
[**updateVolumeAttachment**](VolumeAttachmentApi.md#updateVolumeAttachment) | **PATCH** /core/volume-attachments/{volume_attachment_id} | Update a volume attachment



## attachVolumesToVM

> AttachVolumes attachVolumesToVM(vmId, payload)

Attach volumes to virtual machine

Attaches one or more volumes to an existing virtual machine, expanding its storage capacity by 2PB per attached volume. Include the VM ID in the path and the volume IDs in the request body to attach the specified volumes. For more detailson volume attachment, [**click here**](https://docs.hyperstack.cloud/docs/api-reference/core-resources/volumes/volume-attachment/attach-volumes/).

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.VolumeAttachmentApi();
let vmId = 56; // Number | 
let payload = new HyperstackApi.AttachVolumesPayload(); // AttachVolumesPayload | 
apiInstance.attachVolumesToVM(vmId, payload).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vmId** | **Number**|  | 
 **payload** | [**AttachVolumesPayload**](AttachVolumesPayload.md)|  | 

### Return type

[**AttachVolumes**](AttachVolumes.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## detachVolumesFromVM

> DetachVolumes detachVolumesFromVM(vmId, payload)

Detach volumes from virtual machine

Detaches one or more volumes attached to an existing virtual machine. Include the VM ID in the path and volume IDs in the request body to detach the specified volumes from the virtual machine.

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.VolumeAttachmentApi();
let vmId = 56; // Number | 
let payload = new HyperstackApi.DetachVolumesPayload(); // DetachVolumesPayload | 
apiInstance.detachVolumesFromVM(vmId, payload).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vmId** | **Number**|  | 
 **payload** | [**DetachVolumesPayload**](DetachVolumesPayload.md)|  | 

### Return type

[**DetachVolumes**](DetachVolumes.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateVolumeAttachment

> AttachVolumes updateVolumeAttachment(volumeAttachmentId, payload)

Update a volume attachment

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.VolumeAttachmentApi();
let volumeAttachmentId = 56; // Number | 
let payload = new HyperstackApi.UpdateVolumeAttachmentPayload(); // UpdateVolumeAttachmentPayload | 
apiInstance.updateVolumeAttachment(volumeAttachmentId, payload).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **volumeAttachmentId** | **Number**|  | 
 **payload** | [**UpdateVolumeAttachmentPayload**](UpdateVolumeAttachmentPayload.md)|  | 

### Return type

[**AttachVolumes**](AttachVolumes.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


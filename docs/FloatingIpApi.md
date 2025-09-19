# HyperstackApi.FloatingIpApi

All URIs are relative to *https://infrahub-api.nexgencloud.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**attachPublicIPToVirtualMachine**](FloatingIpApi.md#attachPublicIPToVirtualMachine) | **POST** /core/virtual-machines/{vm_id}/attach-floatingip | Attach public IP to virtual machine
[**detachPublicIPFromVirtualMachine**](FloatingIpApi.md#detachPublicIPFromVirtualMachine) | **POST** /core/virtual-machines/{vm_id}/detach-floatingip | Detach public IP from virtual machine



## attachPublicIPToVirtualMachine

> ResponseModel attachPublicIPToVirtualMachine(vmId)

Attach public IP to virtual machine

Initiates the creation of a public IP address and attaches it to an existing virtual machine, making it accessible through the internet. Include the virtual machine ID in the path to attach a public IP to the specified VM. For more information on public IP addresses, [**click here**](https://docs.hyperstack.cloud/docs/api-reference/core-resources/virtual-machines/floating-ip/attach-floating-ip/).

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.FloatingIpApi();
let vmId = 56; // Number | 
apiInstance.attachPublicIPToVirtualMachine(vmId).then((data) => {
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


## detachPublicIPFromVirtualMachine

> ResponseModel detachPublicIPFromVirtualMachine(vmId)

Detach public IP from virtual machine

Removes a public IP address from an existing virtual machine, disabling internet accessibility to the VM. Include the virtual machine ID in the path to detach the public IP from the specified VM. For more information on public IP addresses, [**click here**](https://docs.hyperstack.cloud/docs/virtual-machines/public-ip).

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.FloatingIpApi();
let vmId = 56; // Number | 
apiInstance.detachPublicIPFromVirtualMachine(vmId).then((data) => {
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


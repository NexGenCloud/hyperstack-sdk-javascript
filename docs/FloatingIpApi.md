# HyperstackApi.FloatingIpApi

All URIs are relative to *https://infrahub-api.nexgencloud.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**attachPublicIpToVirtualMachine**](FloatingIpApi.md#attachPublicIpToVirtualMachine) | **POST** /core/virtual-machines/{id}/attach-floatingip | Attach public IP to virtual machine
[**detachPublicIpFromVirtualMachine**](FloatingIpApi.md#detachPublicIpFromVirtualMachine) | **POST** /core/virtual-machines/{id}/detach-floatingip | Detach public IP from virtual machine



## attachPublicIpToVirtualMachine

> ResponseModel attachPublicIpToVirtualMachine(id)

Attach public IP to virtual machine

Initiates the creation of a public IP address and attaches it to an existing virtual machine, making it accessible through the internet. Include the virtual machine ID in the path to attach a public IP to the specified VM. For more information on public IP addresses, [**click here**](https://infrahub-doc.nexgencloud.com/docs/virtual-machines/public-ip).

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

let apiInstance = new HyperstackApi.FloatingIpApi();
let id = 56; // Number | 
apiInstance.attachPublicIpToVirtualMachine(id).then((data) => {
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

[apiKey](../README.md#apiKey), [accessToken](../README.md#accessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## detachPublicIpFromVirtualMachine

> ResponseModel detachPublicIpFromVirtualMachine(id)

Detach public IP from virtual machine

Removes a public IP address from an existing virtual machine, disabling internet accessibility to the VM. Include the virtual machine ID in the path to detach the public IP from the specified VM. For more information on public IP addresses, [**click here**](https://infrahub-doc.nexgencloud.com/docs/virtual-machines/public-ip).

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

let apiInstance = new HyperstackApi.FloatingIpApi();
let id = 56; // Number | 
apiInstance.detachPublicIpFromVirtualMachine(id).then((data) => {
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

[apiKey](../README.md#apiKey), [accessToken](../README.md#accessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


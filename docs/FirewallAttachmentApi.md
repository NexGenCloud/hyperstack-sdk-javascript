# HyperstackApi.FirewallAttachmentApi

All URIs are relative to *https://infrahub-api.nexgencloud.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**attachFirewallToVirtualMachines**](FirewallAttachmentApi.md#attachFirewallToVirtualMachines) | **POST** /core/firewalls/{firewall_id}/update-attachments | Attach Firewalls to VMs



## attachFirewallToVirtualMachines

> ResponseModel attachFirewallToVirtualMachines(firewallId, payload)

Attach Firewalls to VMs

Attach a firewall to one or more virtual machines by providing the virtual machine IDs in the request body and the firewall ID in the path. For more information, [**click here**](https://docs.hyperstack.cloud/docs/api-reference/core-resources/firewalls/attach-firewall-to-vms).

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.FirewallAttachmentApi();
let firewallId = 56; // Number | 
let payload = new HyperstackApi.AttachFirewallWithVM(); // AttachFirewallWithVM | 
apiInstance.attachFirewallToVirtualMachines(firewallId, payload).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **firewallId** | **Number**|  | 
 **payload** | [**AttachFirewallWithVM**](AttachFirewallWithVM.md)|  | 

### Return type

[**ResponseModel**](ResponseModel.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


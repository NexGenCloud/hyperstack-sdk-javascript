# HyperstackApi.FirewallAttachmentApi

All URIs are relative to *https://infrahub-api.nexgencloud.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**attachFirewallsToVms**](FirewallAttachmentApi.md#attachFirewallsToVms) | **POST** /core/firewalls/{firewall_id}/update-attachments | Attach Firewalls to VMs



## attachFirewallsToVms

> ResponseModel attachFirewallsToVms(firewallId, payload)

Attach Firewalls to VMs

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

let apiInstance = new HyperstackApi.FirewallAttachmentApi();
let firewallId = 56; // Number | 
let payload = new HyperstackApi.AttachFirewallWithVM(); // AttachFirewallWithVM | 
apiInstance.attachFirewallsToVms(firewallId, payload).then((data) => {
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

[apiKey](../README.md#apiKey), [accessToken](../README.md#accessToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


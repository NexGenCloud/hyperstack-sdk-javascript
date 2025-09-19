# HyperstackApi.SecurityRulesApi

All URIs are relative to *https://infrahub-api.nexgencloud.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listFirewallRuleProtocols**](SecurityRulesApi.md#listFirewallRuleProtocols) | **GET** /core/sg-rules-protocols | List firewall rule protocols



## listFirewallRuleProtocols

> SecurityRulesProtocolFields listFirewallRuleProtocols()

List firewall rule protocols

Returns a list of all available protocols that can be used in the creation of firewall rules for your virtual machines.

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.SecurityRulesApi();
apiInstance.listFirewallRuleProtocols().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**SecurityRulesProtocolFields**](SecurityRulesProtocolFields.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


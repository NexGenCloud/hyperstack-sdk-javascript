# HyperstackApi.FirewallsApi

All URIs are relative to *https://infrahub-api.nexgencloud.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteSecurityGroupDetails**](FirewallsApi.md#deleteSecurityGroupDetails) | **DELETE** /core/firewalls/{id} | Delete firewall
[**deleteSecurityGroupRuleDelete**](FirewallsApi.md#deleteSecurityGroupRuleDelete) | **DELETE** /core/firewalls/{firewall_id}/firewall-rules/{firewall_rule_id} | Delete firewall rules from firewall
[**getSecurityGroup**](FirewallsApi.md#getSecurityGroup) | **GET** /core/firewalls | List firewalls
[**getSecurityGroupDetails**](FirewallsApi.md#getSecurityGroupDetails) | **GET** /core/firewalls/{id} | Retrieve firewall details
[**postSecurityGroup**](FirewallsApi.md#postSecurityGroup) | **POST** /core/firewalls | Create firewall
[**postSecurityGroupRules**](FirewallsApi.md#postSecurityGroupRules) | **POST** /core/firewalls/{firewall_id}/firewall-rules | Add firewall rule to firewall



## deleteSecurityGroupDetails

> ResponseModel deleteSecurityGroupDetails(id)

Delete firewall

Deletes a firewall by specifying the firewall ID in the path. If the firewall is currently attached to a virtual machine, it must be detached before deletion. For more information, [**click here**](https://docs.hyperstack.cloud/docs/api-reference/core-resources/firewalls/delete-firewall).

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.FirewallsApi();
let id = 56; // Number | 
apiInstance.deleteSecurityGroupDetails(id).then((data) => {
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

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteSecurityGroupRuleDelete

> ResponseModel deleteSecurityGroupRuleDelete(firewallId, firewallRuleId)

Delete firewall rules from firewall

Removes a firewall rule from firewall by providing the firewall ID and firewall rule ID in the path. For more information, [**click here**](https://docs.hyperstack.cloud/docs/api-reference/core-resources/firewalls/remove-firewall-rule-from-firewall).

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.FirewallsApi();
let firewallId = 56; // Number | 
let firewallRuleId = 56; // Number | 
apiInstance.deleteSecurityGroupRuleDelete(firewallId, firewallRuleId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **firewallId** | **Number**|  | 
 **firewallRuleId** | **Number**|  | 

### Return type

[**ResponseModel**](ResponseModel.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSecurityGroup

> FirewallsListResponse getSecurityGroup(opts)

List firewalls

Retrieves a list of existing firewalls and their details, including the security rules they contain and information about the virtual machines to which they are attached. For more information about the firewalls features offered by Infrahub, [**click here**](https://docs.hyperstack.cloud/docs/network-security/security-groups).

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.FirewallsApi();
let opts = {
  'page': 56, // Number | 
  'pageSize': 56, // Number | 
  'search': "search_example", // String | 
  'environment': "environment_example" // String | Filter Environment ID or Name
};
apiInstance.getSecurityGroup(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**|  | [optional] 
 **pageSize** | **Number**|  | [optional] 
 **search** | **String**|  | [optional] 
 **environment** | **String**| Filter Environment ID or Name | [optional] 

### Return type

[**FirewallsListResponse**](FirewallsListResponse.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSecurityGroupDetails

> FirewallDetailResponse getSecurityGroupDetails(id)

Retrieve firewall details

Retrieves the details of an existing firewall, including the security rules it contains and information about the virtual machines to which it is attached.

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.FirewallsApi();
let id = 56; // Number | 
apiInstance.getSecurityGroupDetails(id).then((data) => {
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

[**FirewallDetailResponse**](FirewallDetailResponse.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postSecurityGroup

> FirewallResponse postSecurityGroup(payload)

Create firewall

Creates a firewall to which firewall rules can be added. A firewall can be attached to one or more virtual machines to control inbound and outbound traffic. In the body of the request, include the name of the firewall, the ID of the environment within which the firewall will be created, and an optional description. To obtain the ID of the environment, make a request to the [**list environments**](https://docs.hyperstack.cloud/docs/api-reference/core-resources/environments/list-environments) endpoint.

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.FirewallsApi();
let payload = new HyperstackApi.CreateFirewallPayload(); // CreateFirewallPayload | 
apiInstance.postSecurityGroup(payload).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **payload** | [**CreateFirewallPayload**](CreateFirewallPayload.md)|  | 

### Return type

[**FirewallResponse**](FirewallResponse.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postSecurityGroupRules

> FirewallRule postSecurityGroupRules(firewallId, payload)

Add firewall rule to firewall

Creates a [**firewall rule**](https://docs.hyperstack.cloud/docs/network-security/security-rules) and adds it to an existing firewall. Include the firewall ID in the path, and provide the firewall rule configuration in the request body.

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.FirewallsApi();
let firewallId = 56; // Number | 
let payload = new HyperstackApi.CreateFirewallRulePayload(); // CreateFirewallRulePayload | 
apiInstance.postSecurityGroupRules(firewallId, payload).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **firewallId** | **Number**|  | 
 **payload** | [**CreateFirewallRulePayload**](CreateFirewallRulePayload.md)|  | 

### Return type

[**FirewallRule**](FirewallRule.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


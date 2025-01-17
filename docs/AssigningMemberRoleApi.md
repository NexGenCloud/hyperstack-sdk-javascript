# HyperstackApi.AssigningMemberRoleApi

All URIs are relative to *https://infrahub-api.nexgencloud.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**assignRbacRole**](AssigningMemberRoleApi.md#assignRbacRole) | **PUT** /auth/users/{user_id}/assign-roles | Assign RBAC Role
[**removeRbacRoleFromUser**](AssigningMemberRoleApi.md#removeRbacRoleFromUser) | **DELETE** /auth/users/{user_id}/roles | Remove RBAC Role From User



## assignRbacRole

> RbacRoleDetailResponseModel assignRbacRole(userId, payload)

Assign RBAC Role

Assigns a specific RBAC role to a user within your organization, granting them access to the resource actions permitted by the role. Provide the user ID in the path and the role ID in the request body. For additional information, [click here](https://infrahub-doc.nexgencloud.com/docs/api-reference/auth-resources/rbac/manage-member-roles/assign-rbac-role).

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

let apiInstance = new HyperstackApi.AssigningMemberRoleApi();
let userId = 56; // Number | 
let payload = new HyperstackApi.AssignRbacRolePayload(); // AssignRbacRolePayload | 
apiInstance.assignRbacRole(userId, payload).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**|  | 
 **payload** | [**AssignRbacRolePayload**](AssignRbacRolePayload.md)|  | 

### Return type

[**RbacRoleDetailResponseModel**](RbacRoleDetailResponseModel.md)

### Authorization

[apiKey](../README.md#apiKey), [accessToken](../README.md#accessToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## removeRbacRoleFromUser

> CommonResponseModel removeRbacRoleFromUser(userId)

Remove RBAC Role From User

Removes an RBAC role from a user within your organization, revoking the resource permissions they had access to. Provide the user ID in the path. For additional information, [click here](https://infrahub-doc.nexgencloud.com/docs/api-reference/auth-resources/rbac/manage-member-roles/revoke-rbac-role).

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

let apiInstance = new HyperstackApi.AssigningMemberRoleApi();
let userId = 56; // Number | 
apiInstance.removeRbacRoleFromUser(userId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**|  | 

### Return type

[**CommonResponseModel**](CommonResponseModel.md)

### Authorization

[apiKey](../README.md#apiKey), [accessToken](../README.md#accessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


# HyperstackApi.UserPermissionApi

All URIs are relative to *https://infrahub-api.nexgencloud.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listMyUserPermissions**](UserPermissionApi.md#listMyUserPermissions) | **GET** /auth/users/me/permissions | List My User Permissions
[**listUserPermissions**](UserPermissionApi.md#listUserPermissions) | **GET** /auth/users/{id}/permissions | List User Permissions



## listMyUserPermissions

> GetUserPermissionsResponseModel listMyUserPermissions()

List My User Permissions

Retrieves a list of permissions granted to your account. For additional information on your permissions, [click here](https://docs.hyperstack.cloud/docs/api-reference/auth-resources/permission/list-my-permissions).

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.UserPermissionApi();
apiInstance.listMyUserPermissions().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**GetUserPermissionsResponseModel**](GetUserPermissionsResponseModel.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listUserPermissions

> GetUserPermissionsResponseModel listUserPermissions(id)

List User Permissions

Retrieves a list of permissions granted to a specific user within your organization. Provide the ID of the user in the path. For additional information on user permissions, [click here](https://docs.hyperstack.cloud/docs/api-reference/auth-resources/permission/list-user-permissions).

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.UserPermissionApi();
let id = 56; // Number | 
apiInstance.listUserPermissions(id).then((data) => {
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

[**GetUserPermissionsResponseModel**](GetUserPermissionsResponseModel.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


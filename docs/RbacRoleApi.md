# HyperstackApi.RbacRoleApi

All URIs are relative to *https://infrahub-api.nexgencloud.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createRbacRole**](RbacRoleApi.md#createRbacRole) | **POST** /auth/roles | Create RBAC Role
[**deleteRbacRole**](RbacRoleApi.md#deleteRbacRole) | **DELETE** /auth/roles/{id} | Delete RBAC Role
[**listRbacRoles**](RbacRoleApi.md#listRbacRoles) | **GET** /auth/roles | List RBAC Roles
[**retrieveRbacRoleDetails**](RbacRoleApi.md#retrieveRbacRoleDetails) | **GET** /auth/roles/{id} | Retrieve RBAC Role Details
[**updateRbacRole**](RbacRoleApi.md#updateRbacRole) | **PUT** /auth/roles/{id} | Update RBAC Role



## createRbacRole

> RbacRoleDetailResponseModel createRbacRole(payload)

Create RBAC Role

Creates an RBAC role that can be assigned to users, granting them access to specific resource actions. Provide the configuration of the RBAC role, including its name, description, and list of permissions and policy IDs in the request body. For additional information on creating RBAC roles, [click here](https://infrahub-doc.nexgencloud.com/docs/api-reference/auth-resources/rbac/create-rbac-role).

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

let apiInstance = new HyperstackApi.RbacRoleApi();
let payload = new HyperstackApi.CreateUpdateRbacRolePayload(); // CreateUpdateRbacRolePayload | 
apiInstance.createRbacRole(payload).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **payload** | [**CreateUpdateRbacRolePayload**](CreateUpdateRbacRolePayload.md)|  | 

### Return type

[**RbacRoleDetailResponseModel**](RbacRoleDetailResponseModel.md)

### Authorization

[apiKey](../README.md#apiKey), [accessToken](../README.md#accessToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteRbacRole

> CommonResponseModel deleteRbacRole(id)

Delete RBAC Role

Deletes an RBAC role by providing its ID in the path. For additional information, [click here](https://infrahub-doc.nexgencloud.com/docs/api-reference/auth-resources/rbac/delete-rbac-role).

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

let apiInstance = new HyperstackApi.RbacRoleApi();
let id = 56; // Number | 
apiInstance.deleteRbacRole(id).then((data) => {
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

[**CommonResponseModel**](CommonResponseModel.md)

### Authorization

[apiKey](../README.md#apiKey), [accessToken](../README.md#accessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listRbacRoles

> GetRbacRolesResponseModel listRbacRoles()

List RBAC Roles

Retrieves a list of RBAC roles that can be assigned to the users within an organization. For additional information on RBAC roles, [click here](https://infrahub-doc.nexgencloud.com/docs/api-reference/auth-resources/rbac/list-rbac-roles).

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

let apiInstance = new HyperstackApi.RbacRoleApi();
apiInstance.listRbacRoles().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**GetRbacRolesResponseModel**](GetRbacRolesResponseModel.md)

### Authorization

[apiKey](../README.md#apiKey), [accessToken](../README.md#accessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## retrieveRbacRoleDetails

> RbacRoleDetailResponseModelFixed retrieveRbacRoleDetails(id)

Retrieve RBAC Role Details

Retrieves the details of a specified RBAC role by providing the RBAC role ID in the path. For additional information, [click here](https://infrahub-doc.nexgencloud.com/docs/api-reference/auth-resources/rbac/retrieve-rbac-details).

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

let apiInstance = new HyperstackApi.RbacRoleApi();
let id = 56; // Number | 
apiInstance.retrieveRbacRoleDetails(id).then((data) => {
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

[**RbacRoleDetailResponseModelFixed**](RbacRoleDetailResponseModelFixed.md)

### Authorization

[apiKey](../README.md#apiKey), [accessToken](../README.md#accessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateRbacRole

> RbacRoleDetailResponseModel updateRbacRole(id, payload)

Update RBAC Role

Updates an RBAC role by providing the role ID in the path and the modified role configuration in the request body, including its name, description, and list of permissions and policy IDs. For additional information, [click here](https://infrahub-doc.nexgencloud.com/docs/api-reference/auth-resources/rbac/update-rbac-role).

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

let apiInstance = new HyperstackApi.RbacRoleApi();
let id = 56; // Number | 
let payload = new HyperstackApi.CreateUpdateRbacRolePayload(); // CreateUpdateRbacRolePayload | 
apiInstance.updateRbacRole(id, payload).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **payload** | [**CreateUpdateRbacRolePayload**](CreateUpdateRbacRolePayload.md)|  | 

### Return type

[**RbacRoleDetailResponseModel**](RbacRoleDetailResponseModel.md)

### Authorization

[apiKey](../README.md#apiKey), [accessToken](../README.md#accessToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


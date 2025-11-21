# HyperstackApi.AuthApi

All URIs are relative to *https://infrahub-api.nexgencloud.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**changeOrganizationForToken**](AuthApi.md#changeOrganizationForToken) | **GET** /auth/token/change-org/{org_id} | 
[**disableMFA**](AuthApi.md#disableMFA) | **GET** /auth/me/mfa/disable | 
[**getAuthenticatedUser**](AuthApi.md#getAuthenticatedUser) | **GET** /auth/me | Retrieve Authenticated User Details
[**getUserMFAStatus**](AuthApi.md#getUserMFAStatus) | **GET** /auth/me/mfa | Get MFA status for authenticated user
[**getUserOrganizations**](AuthApi.md#getUserOrganizations) | **GET** /auth/me/organizations | Get User Organizations



## changeOrganizationForToken

> AuthGetTokenResponseModel changeOrganizationForToken(orgId)



Change the organization associated with the current token. This is useful for users who have access to multiple organizations.

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.AuthApi();
let orgId = 56; // Number | 
apiInstance.changeOrganizationForToken(orgId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgId** | **Number**|  | 

### Return type

[**AuthGetTokenResponseModel**](AuthGetTokenResponseModel.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## disableMFA

> CommonResponseModel disableMFA()



Disable Multi-Factor Authentication (MFA) for the currently authenticated user. This endpoint is used to turn off MFA.

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.AuthApi();
apiInstance.disableMFA().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**CommonResponseModel**](CommonResponseModel.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAuthenticatedUser

> AuthUserInfoResponseModel getAuthenticatedUser()

Retrieve Authenticated User Details

Retrieves detailed information about the currently authenticated user. For additional information, [**click here**](https://docs.hyperstack.cloud/docs/api-reference/auth-resources/auth).

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.AuthApi();
apiInstance.getAuthenticatedUser().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**AuthUserInfoResponseModel**](AuthUserInfoResponseModel.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUserMFAStatus

> MFAStatusResponse getUserMFAStatus()

Get MFA status for authenticated user

Retrieve the Multi-Factor Authentication (MFA) status for the currentlyauthenticated user. Includes whether MFA is enabled.

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.AuthApi();
apiInstance.getUserMFAStatus().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**MFAStatusResponse**](MFAStatusResponse.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUserOrganizations

> UserOrganizationsResponse getUserOrganizations()

Get User Organizations

Retrieve the organizations associated with a user by their user ID. This endpoint is useful for understanding the user&#39;s organizational affiliations.

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.AuthApi();
apiInstance.getUserOrganizations().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**UserOrganizationsResponse**](UserOrganizationsResponse.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


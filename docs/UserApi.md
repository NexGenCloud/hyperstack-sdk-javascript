# HyperstackApi.UserApi

All URIs are relative to *https://infrahub-api.nexgencloud.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getUser**](UserApi.md#getUser) | **GET** /billing/user/info | GET: Retrieve billing info
[**postUser**](UserApi.md#postUser) | **POST** /billing/user/info | POST: Insert billing info
[**putUser**](UserApi.md#putUser) | **PUT** /billing/user/info | PUT: Update billing info



## getUser

> UsersInfoListResponse getUser()

GET: Retrieve billing info

Retrieve the billing details associated with your organization.

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.UserApi();
apiInstance.getUser().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**UsersInfoListResponse**](UsersInfoListResponse.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postUser

> AddUserInfoSuccessResponseModel postUser(payload)

POST: Insert billing info

Add billing details associated with your organization in the request body.

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.UserApi();
let payload = new HyperstackApi.UserInfoPostPayload(); // UserInfoPostPayload | 
apiInstance.postUser(payload).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **payload** | [**UserInfoPostPayload**](UserInfoPostPayload.md)|  | 

### Return type

[**AddUserInfoSuccessResponseModel**](AddUserInfoSuccessResponseModel.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## putUser

> AddUserInfoSuccessResponseModel putUser(payload)

PUT: Update billing info

Update the billing information for your organization in the request body.

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.UserApi();
let payload = new HyperstackApi.UserInfoPostPayload(); // UserInfoPostPayload | 
apiInstance.putUser(payload).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **payload** | [**UserInfoPostPayload**](UserInfoPostPayload.md)|  | 

### Return type

[**AddUserInfoSuccessResponseModel**](AddUserInfoSuccessResponseModel.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


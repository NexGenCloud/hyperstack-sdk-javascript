# HyperstackApi.AdminApi

All URIs are relative to *https://infrahub-api.nexgencloud.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**sendPasswordChangeNotificationEmail**](AdminApi.md#sendPasswordChangeNotificationEmail) | **POST** /auth/admin/password-change-mail | Send Password Change Notification Email



## sendPasswordChangeNotificationEmail

> CommonResponseModel sendPasswordChangeNotificationEmail()

Send Password Change Notification Email

Send a password change notification email to a user

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.AdminApi();
apiInstance.sendPasswordChangeNotificationEmail().then((data) => {
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


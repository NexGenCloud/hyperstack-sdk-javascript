# HyperstackApi.UserDetailChoiceApi

All URIs are relative to *https://infrahub-api.nexgencloud.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**retrieveDefaultFlavorsAndImages**](UserDetailChoiceApi.md#retrieveDefaultFlavorsAndImages) | **GET** /core/user/resources/defaults | Retrieve Default Flavors and Images



## retrieveDefaultFlavorsAndImages

> UserDefaultChoicesForUserResponse retrieveDefaultFlavorsAndImages()

Retrieve Default Flavors and Images

Retrieve the default choices for virtual machine deployment, including the default region, flavor, and image.

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

let apiInstance = new HyperstackApi.UserDetailChoiceApi();
apiInstance.retrieveDefaultFlavorsAndImages().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**UserDefaultChoicesForUserResponse**](UserDefaultChoicesForUserResponse.md)

### Authorization

[apiKey](../README.md#apiKey), [accessToken](../README.md#accessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


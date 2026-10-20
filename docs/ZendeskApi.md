# HyperstackApi.ZendeskApi

All URIs are relative to *https://infrahub-api.nexgencloud.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getZendeskMessagingToken**](ZendeskApi.md#getZendeskMessagingToken) | **GET** /auth/zendesk/messaging-token | Retrieve a Zendesk messaging JWT for the current user



## getZendeskMessagingToken

> ZendeskMessagingToken getZendeskMessagingToken()

Retrieve a Zendesk messaging JWT for the current user

Returns a short-lived signed JWT for the currently authenticated user, to be passed to the Zendesk Web Widget&#39;s loginUser API so chat tickets are attributed to the real user instead of an anonymous &#39;Web User&#39;.

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.ZendeskApi();
apiInstance.getZendeskMessagingToken().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**ZendeskMessagingToken**](ZendeskMessagingToken.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


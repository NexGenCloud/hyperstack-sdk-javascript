# HyperstackApi.PolicyApi

All URIs are relative to *https://infrahub-api.nexgencloud.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listPolicies**](PolicyApi.md#listPolicies) | **GET** /auth/policies | List Policies



## listPolicies

> GetPoliciesResponseModel listPolicies()

List Policies

Retrieves a list of policies available for addition to RBAC roles. For additional information on policies, [click here](https://docs.hyperstack.cloud/docs/api-reference/auth-resources/policies).

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.PolicyApi();
apiInstance.listPolicies().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**GetPoliciesResponseModel**](GetPoliciesResponseModel.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


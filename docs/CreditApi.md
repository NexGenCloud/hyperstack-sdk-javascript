# HyperstackApi.CreditApi

All URIs are relative to *https://infrahub-api.nexgencloud.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCredit2**](CreditApi.md#getCredit2) | **GET** /billing/user-credit/credit | GET: View credit and threshold



## getCredit2

> GetCreditAndThresholdInfoInResponse getCredit2()

GET: View credit and threshold

Retrieves the current credit balance for your [**organization**](/docs/rbac/organization). Ensuring a positive credit balance allows you to create resources. However, for prepaid accounts, if the credit balance falls below $0, all associated resources will be temporarily suspended until a [**payment**](/docs/api-reference/billing-resources/create-payment) is made. For additional information, [**click here**](None/docs/api-reference/billing-resources/retrieve-credit-balance/).

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.CreditApi();
apiInstance.getCredit2().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**GetCreditAndThresholdInfoInResponse**](GetCreditAndThresholdInfoInResponse.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


# HyperstackApi.PaymentApi

All URIs are relative to *https://infrahub-api.nexgencloud.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getDetails**](PaymentApi.md#getDetails) | **GET** /billing/payment/payment-details | GET: View payment details
[**getPaymentReceipt2**](PaymentApi.md#getPaymentReceipt2) | **GET** /billing/payment/receipt/{payment_id} | Retrieve Payment Receipt
[**postPayment**](PaymentApi.md#postPayment) | **POST** /billing/payment/payment-initiate | POST: Initiate payment



## getDetails

> PaymentDetailsResponse getDetails()

GET: View payment details

Retrieves a list of all payments made within your [**organization**](/docs/rbac/organization) and their details, including the amount, payment status, and more. For additional information [**click here**](None/docs/api-reference/billing-resources/retrieve-payment-history/).

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.PaymentApi();
apiInstance.getDetails().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**PaymentDetailsResponse**](PaymentDetailsResponse.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPaymentReceipt2

> getPaymentReceipt2(paymentId)

Retrieve Payment Receipt

Retrieve the payment receipt from Stripe for a specific payment

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.PaymentApi();
let paymentId = "paymentId_example"; // String | 
apiInstance.getPaymentReceipt2(paymentId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **paymentId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postPayment

> PaymentInitiateResponse postPayment(payload)

POST: Initiate payment

Creates a payment for a specified amount, adding credit to the balance of your [**organization**](/docs/rbac/organization). Include the &#x60;amount&#x60; in the body of the request to make a payment for the specified value in dollars. View a history of past payments by calling the [**Retrieve Payment History**](/docs/api-reference/billing-resources/retrieve-payment-history) API. For additional information [**click here**](None/docs/api-reference/billing-resources/create-payment).

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.PaymentApi();
let payload = new HyperstackApi.PaymentInitiatePayload(); // PaymentInitiatePayload | 
apiInstance.postPayment(payload).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **payload** | [**PaymentInitiatePayload**](PaymentInitiatePayload.md)|  | 

### Return type

[**PaymentInitiateResponse**](PaymentInitiateResponse.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


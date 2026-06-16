# HyperstackApi.AutoTopupApi

All URIs are relative to *https://infrahub-api.nexgencloud.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createAutoTopUp**](AutoTopupApi.md#createAutoTopUp) | **POST** /billing/auto-topup | Create an auto top up configuration and initiate Stripe setup
[**disableAutoTopUp**](AutoTopupApi.md#disableAutoTopUp) | **DELETE** /billing/auto-topup | Disable auto top up, preventing any future automatic charges
[**getAutoTopUp**](AutoTopupApi.md#getAutoTopUp) | **GET** /billing/auto-topup | Retrieve the current auto top up configuration and transaction history
[**getAutoTopUpStatus**](AutoTopupApi.md#getAutoTopUpStatus) | **GET** /billing/auto-topup/status | Get auto top-up status and configuration
[**updateAutoTopUp**](AutoTopupApi.md#updateAutoTopUp) | **PUT** /billing/auto-topup | Update an existing active auto top up configuration



## createAutoTopUp

> CreateAutoTopupResponse createAutoTopUp(payload)

Create an auto top up configuration and initiate Stripe setup

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.AutoTopupApi();
let payload = new HyperstackApi.CreateAutoTopupPayload(); // CreateAutoTopupPayload | 
apiInstance.createAutoTopUp(payload).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **payload** | [**CreateAutoTopupPayload**](CreateAutoTopupPayload.md)|  | 

### Return type

[**CreateAutoTopupResponse**](CreateAutoTopupResponse.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## disableAutoTopUp

> DisableAutoTopupResponse disableAutoTopUp()

Disable auto top up, preventing any future automatic charges

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.AutoTopupApi();
apiInstance.disableAutoTopUp().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**DisableAutoTopupResponse**](DisableAutoTopupResponse.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAutoTopUp

> GetAutoTopupResponse getAutoTopUp()

Retrieve the current auto top up configuration and transaction history

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.AutoTopupApi();
apiInstance.getAutoTopUp().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**GetAutoTopupResponse**](GetAutoTopupResponse.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAutoTopUpStatus

> AutoTopupStatusSchema getAutoTopUpStatus()

Get auto top-up status and configuration

Retrieves the current auto top-up configuration and status for your organization. Returns the status (active, disabled, pending_setup, or null if never configured), along with the threshold and top-up amounts. For additional information, [**click here**](None/docs/api-reference/billing-resources/).

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.AutoTopupApi();
apiInstance.getAutoTopUpStatus().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**AutoTopupStatusSchema**](AutoTopupStatusSchema.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateAutoTopUp

> UpdateAutoTopupResponse updateAutoTopUp(payload)

Update an existing active auto top up configuration

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.AutoTopupApi();
let payload = new HyperstackApi.UpdateAutoTopupPayload(); // UpdateAutoTopupPayload | 
apiInstance.updateAutoTopUp(payload).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **payload** | [**UpdateAutoTopupPayload**](UpdateAutoTopupPayload.md)|  | 

### Return type

[**UpdateAutoTopupResponse**](UpdateAutoTopupResponse.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


# HyperstackApi.BetaAccessApi

All URIs are relative to *https://infrahub-api.nexgencloud.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createBetaAccessRequest**](BetaAccessApi.md#createBetaAccessRequest) | **POST** /auth/beta-access/requests | Create a new beta access request
[**getBetaAccessRequests**](BetaAccessApi.md#getBetaAccessRequests) | **GET** /auth/beta-access/requests/{program} | Check the status of beta access requests
[**getBetaAccessStatus**](BetaAccessApi.md#getBetaAccessStatus) | **GET** /auth/beta-access/requests | Check the status of all beta access requests



## createBetaAccessRequest

> BetaAccessRequestResponseModel createBetaAccessRequest(payload)

Create a new beta access request

Creates a new beta access request for the current user

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.BetaAccessApi();
let payload = new HyperstackApi.BetaAccessRequestPayload(); // BetaAccessRequestPayload | 
apiInstance.createBetaAccessRequest(payload).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **payload** | [**BetaAccessRequestPayload**](BetaAccessRequestPayload.md)|  | 

### Return type

[**BetaAccessRequestResponseModel**](BetaAccessRequestResponseModel.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getBetaAccessRequests

> BetaAccessStatusResponseModel getBetaAccessRequests(program)

Check the status of beta access requests

Check the status of a particular beta access requests.

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.BetaAccessApi();
let program = "program_example"; // String | 
apiInstance.getBetaAccessRequests(program).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **program** | **String**|  | 

### Return type

[**BetaAccessStatusResponseModel**](BetaAccessStatusResponseModel.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getBetaAccessStatus

> BetaAccessStatusResponseModel getBetaAccessStatus()

Check the status of all beta access requests

Check the status of all beta access requests.

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.BetaAccessApi();
apiInstance.getBetaAccessStatus().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**BetaAccessStatusResponseModel**](BetaAccessStatusResponseModel.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


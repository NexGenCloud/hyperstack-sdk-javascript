# HyperstackApi.ApiKeyApi

All URIs are relative to *https://infrahub-api.nexgencloud.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteApiKey**](ApiKeyApi.md#deleteApiKey) | **DELETE** /api-key/{api_key_id} | Delete API Key
[**generateApiKey**](ApiKeyApi.md#generateApiKey) | **POST** /api-key/generate | Generate API Key
[**retrieveApiKeys**](ApiKeyApi.md#retrieveApiKeys) | **GET** /api-key | Retrieve API Keys
[**updateApiKey**](ApiKeyApi.md#updateApiKey) | **PUT** /api-key/{api_key_id} | Update API Key



## deleteApiKey

> CommonResponseModel deleteApiKey(apiKeyId)

Delete API Key

Delete a specified API key by including the ID of the API key in the path.

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

let apiInstance = new HyperstackApi.ApiKeyApi();
let apiKeyId = 56; // Number | 
apiInstance.deleteApiKey(apiKeyId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKeyId** | **Number**|  | 

### Return type

[**CommonResponseModel**](CommonResponseModel.md)

### Authorization

[apiKey](../README.md#apiKey), [accessToken](../README.md#accessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## generateApiKey

> GenerateUpdateApiKeyResponseModel generateApiKey(payload)

Generate API Key

Generates your API key, providing access to the Infrahub APIs. For further details on API keys, [**click here**](https://infrahub-doc.nexgencloud.com/docs/api-reference/auth-resources/api-key/generate-api-key).

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: accessToken
let accessToken = defaultClient.authentications['accessToken'];
accessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//accessToken.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.ApiKeyApi();
let payload = new HyperstackApi.GenerateUpdateApiKeyPayload(); // GenerateUpdateApiKeyPayload | 
apiInstance.generateApiKey(payload).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **payload** | [**GenerateUpdateApiKeyPayload**](GenerateUpdateApiKeyPayload.md)|  | 

### Return type

[**GenerateUpdateApiKeyResponseModel**](GenerateUpdateApiKeyResponseModel.md)

### Authorization

[accessToken](../README.md#accessToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## retrieveApiKeys

> GetApiKeysResponseModel retrieveApiKeys()

Retrieve API Keys

Retrieves your API keys, granting access to the Infrahub APIs. For further details on API keys, [**click here**](https://infrahub-doc.nexgencloud.com/docs/api-reference/auth-resources/api-key/retrieve-api-key).

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

let apiInstance = new HyperstackApi.ApiKeyApi();
apiInstance.retrieveApiKeys().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**GetApiKeysResponseModel**](GetApiKeysResponseModel.md)

### Authorization

[apiKey](../README.md#apiKey), [accessToken](../README.md#accessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateApiKey

> GenerateUpdateApiKeyResponseModel updateApiKey(apiKeyId, payload)

Update API Key

Updates the name and optionally the description of a specified API key. Include the ID of the API key in the path and the new name and optional description in the body of the request.

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

let apiInstance = new HyperstackApi.ApiKeyApi();
let apiKeyId = 56; // Number | 
let payload = new HyperstackApi.GenerateUpdateApiKeyPayload(); // GenerateUpdateApiKeyPayload | 
apiInstance.updateApiKey(apiKeyId, payload).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKeyId** | **Number**|  | 
 **payload** | [**GenerateUpdateApiKeyPayload**](GenerateUpdateApiKeyPayload.md)|  | 

### Return type

[**GenerateUpdateApiKeyResponseModel**](GenerateUpdateApiKeyResponseModel.md)

### Authorization

[apiKey](../README.md#apiKey), [accessToken](../README.md#accessToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


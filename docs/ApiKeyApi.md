# HyperstackApi.ApiKeyApi

All URIs are relative to *https://infrahub-api.nexgencloud.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteAPIKey**](ApiKeyApi.md#deleteAPIKey) | **DELETE** /api-key/{api_key_id} | Delete API Key
[**generateAPIKey**](ApiKeyApi.md#generateAPIKey) | **POST** /api-key/generate | Generate API Key
[**retrieveAPIKey**](ApiKeyApi.md#retrieveAPIKey) | **GET** /api-key | Retrieve API Keys
[**updateAPIKey**](ApiKeyApi.md#updateAPIKey) | **PUT** /api-key/{api_key_id} | Update API Key



## deleteAPIKey

> CommonResponseModel deleteAPIKey(apiKeyId)

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

let apiInstance = new HyperstackApi.ApiKeyApi();
let apiKeyId = 56; // Number | 
apiInstance.deleteAPIKey(apiKeyId).then((data) => {
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

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## generateAPIKey

> GenerateUpdateApiKeyResponseModel generateAPIKey(payload)

Generate API Key

Generates your API key, providing access to the Infrahub APIs. For further details on API keys, [**click here**](https://docs.hyperstack.cloud/docs/api-reference/auth-resources/api-key/generate-api-key).

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';

let apiInstance = new HyperstackApi.ApiKeyApi();
let payload = new HyperstackApi.GenerateUpdateApiKeyPayload(); // GenerateUpdateApiKeyPayload | 
apiInstance.generateAPIKey(payload).then((data) => {
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

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## retrieveAPIKey

> GetApiKeysResponseModel retrieveAPIKey()

Retrieve API Keys

Retrieves your API keys, granting access to the Infrahub APIs. For further details on API keys, [**click here**](https://docs.hyperstack.cloud/docs/api-reference/auth-resources/api-key/retrieve-api-key).

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.ApiKeyApi();
apiInstance.retrieveAPIKey().then((data) => {
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

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateAPIKey

> GenerateUpdateApiKeyResponseModel updateAPIKey(apiKeyId, payload)

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

let apiInstance = new HyperstackApi.ApiKeyApi();
let apiKeyId = 56; // Number | 
let payload = new HyperstackApi.GenerateUpdateApiKeyPayload(); // GenerateUpdateApiKeyPayload | 
apiInstance.updateAPIKey(apiKeyId, payload).then((data) => {
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

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


# HyperstackApi.KeypairApi

All URIs are relative to *https://infrahub-api.nexgencloud.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteKeyPair**](KeypairApi.md#deleteKeyPair) | **DELETE** /core/keypair/{id} | Delete key pair
[**importKeyPair**](KeypairApi.md#importKeyPair) | **POST** /core/keypairs | Import key pair
[**listKeyPairs**](KeypairApi.md#listKeyPairs) | **GET** /core/keypairs | List key pairs
[**updateKeyPairName**](KeypairApi.md#updateKeyPairName) | **PUT** /core/keypair/{id} | Update key pair name



## deleteKeyPair

> ResponseModel deleteKeyPair(id)

Delete key pair

Permanently deletes a specified key pair. Provide the key pair ID in the path to remove the designated key pair.

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.KeypairApi();
let id = 56; // Number | 
apiInstance.deleteKeyPair(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

[**ResponseModel**](ResponseModel.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## importKeyPair

> ImportKeypairResponse importKeyPair(payload)

Import key pair

Imports a new key pair for secure shell (SSH) access to your resources. Provide the key name, environment name, and public key in the request body. For more details on importing SSH key pairs, [**click here**](https://docs.hyperstack.cloud/docs/api-reference/core-resources/keypairs/import-keypair).

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.KeypairApi();
let payload = new HyperstackApi.ImportKeypairPayload(); // ImportKeypairPayload | 
apiInstance.importKeyPair(payload).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **payload** | [**ImportKeypairPayload**](ImportKeypairPayload.md)|  | 

### Return type

[**ImportKeypairResponse**](ImportKeypairResponse.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## listKeyPairs

> Keypairs listKeyPairs(opts)

List key pairs

Retrieves a list of your existing SSH key pairs, providing details for each. For more information on SSH key pairs, [**click here**](https://docs.hyperstack.cloud/docs/api-reference/core-resources/keypairs/).

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.KeypairApi();
let opts = {
  'page': "page_example", // String | Page Number
  'pageSize': "pageSize_example", // String | Data Per Page
  'search': "search_example" // String | 
};
apiInstance.listKeyPairs(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **String**| Page Number | [optional] 
 **pageSize** | **String**| Data Per Page | [optional] 
 **search** | **String**|  | [optional] 

### Return type

[**Keypairs**](Keypairs.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateKeyPairName

> UpdateKeypairNameResponse updateKeyPairName(id, payload)

Update key pair name

Updates the name of a specified key pair. Provide the key pair ID in the path, and include the new &#x60;name&#x60; in the request body.

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.KeypairApi();
let id = 56; // Number | 
let payload = new HyperstackApi.UpdateKeypairName(); // UpdateKeypairName | 
apiInstance.updateKeyPairName(id, payload).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **payload** | [**UpdateKeypairName**](UpdateKeypairName.md)|  | 

### Return type

[**UpdateKeypairNameResponse**](UpdateKeypairNameResponse.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


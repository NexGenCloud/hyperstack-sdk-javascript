# HyperstackApi.UserConsentApi

All URIs are relative to *https://infrahub-api.nexgencloud.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addANewConsentForAUser**](UserConsentApi.md#addANewConsentForAUser) | **POST** /auth/user-consent | Add a new User consent
[**getAllConsentTemplates**](UserConsentApi.md#getAllConsentTemplates) | **GET** /auth/user-consent/templates | Get all consent templates
[**getAllConsentsForAUser**](UserConsentApi.md#getAllConsentsForAUser) | **GET** /auth/user-consent | Get Consents for a User
[**getConsentTemplateByType**](UserConsentApi.md#getConsentTemplateByType) | **GET** /auth/user-consent/templates/{consent_type} | Get consent template for a specific type
[**updateAConsentActionByType**](UserConsentApi.md#updateAConsentActionByType) | **PATCH** /auth/user-consent/{consent_type} | Grant or revoke an existing consent



## addANewConsentForAUser

> ConsentActionResponse addANewConsentForAUser(payload)

Add a new User consent

Add a new consent given by the User

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.UserConsentApi();
let payload = new HyperstackApi.RecordConsentRequest(); // RecordConsentRequest | 
apiInstance.addANewConsentForAUser(payload).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **payload** | [**RecordConsentRequest**](RecordConsentRequest.md)|  | 

### Return type

[**ConsentActionResponse**](ConsentActionResponse.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getAllConsentTemplates

> ConsentTemplatesResponse getAllConsentTemplates()

Get all consent templates

Returns current consent templates for all consent types

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.UserConsentApi();
apiInstance.getAllConsentTemplates().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**ConsentTemplatesResponse**](ConsentTemplatesResponse.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAllConsentsForAUser

> UserConsentsResponse getAllConsentsForAUser(opts)

Get Consents for a User

Fetch all the recorded consents given from a User

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.UserConsentApi();
let opts = {
  'consentType': "consentType_example" // String | Filter by consent type
};
apiInstance.getAllConsentsForAUser(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **consentType** | **String**| Filter by consent type | [optional] 

### Return type

[**UserConsentsResponse**](UserConsentsResponse.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getConsentTemplateByType

> ConsentTemplate getConsentTemplateByType(consentType)

Get consent template for a specific type

Returns the current consent template for a specific consent type

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.UserConsentApi();
let consentType = "consentType_example"; // String | 
apiInstance.getConsentTemplateByType(consentType).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **consentType** | **String**|  | 

### Return type

[**ConsentTemplate**](ConsentTemplate.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateAConsentActionByType

> ConsentActionResponse updateAConsentActionByType(consentType, payload)

Grant or revoke an existing consent

Revoke or grant a consent to the User

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.UserConsentApi();
let consentType = "consentType_example"; // String | 
let payload = new HyperstackApi.UpdateConsentRequest(); // UpdateConsentRequest | 
apiInstance.updateAConsentActionByType(consentType, payload).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **consentType** | **String**|  | 
 **payload** | [**UpdateConsentRequest**](UpdateConsentRequest.md)|  | 

### Return type

[**ConsentActionResponse**](ConsentActionResponse.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


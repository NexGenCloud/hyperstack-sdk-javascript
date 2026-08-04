# HyperstackApi.EmailOptInOutApi

All URIs are relative to *https://infrahub-api.nexgencloud.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getEmailPreferencesForAUser**](EmailOptInOutApi.md#getEmailPreferencesForAUser) | **GET** /auth/email/opt-out | Get all email preferences for the authenticated user
[**toggleAllOptionalEmailPreferencesForTheUser**](EmailOptInOutApi.md#toggleAllOptionalEmailPreferencesForTheUser) | **PUT** /auth/email/opt-out | Toggle all optional email preferences for the authenticated user
[**updateEmailPreferenceForACategoryBySlug**](EmailOptInOutApi.md#updateEmailPreferenceForACategoryBySlug) | **PUT** /auth/email/opt-out/{slug} | Update email preference opted_in status for a category slug



## getEmailPreferencesForAUser

> EmailPreferencesResponse getEmailPreferencesForAUser()

Get all email preferences for the authenticated user

Returns all email categories with the user&#39;s opt-in status. Categories without an explicit preference default to opted_in&#x3D;true.

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.EmailOptInOutApi();
apiInstance.getEmailPreferencesForAUser().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**EmailPreferencesResponse**](EmailPreferencesResponse.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## toggleAllOptionalEmailPreferencesForTheUser

> UpdateEmailPreferenceResponse toggleAllOptionalEmailPreferencesForTheUser(payload)

Toggle all optional email preferences for the authenticated user

Sets opted_in to the given value for every non-required, non-deleted email category. Required categories are not affected.

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.EmailOptInOutApi();
let payload = new HyperstackApi.UpdateEmailPreferenceInput(); // UpdateEmailPreferenceInput | 
apiInstance.toggleAllOptionalEmailPreferencesForTheUser(payload).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **payload** | [**UpdateEmailPreferenceInput**](UpdateEmailPreferenceInput.md)|  | 

### Return type

[**UpdateEmailPreferenceResponse**](UpdateEmailPreferenceResponse.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateEmailPreferenceForACategoryBySlug

> UpdateEmailPreferenceResponse updateEmailPreferenceForACategoryBySlug(slug, payload)

Update email preference opted_in status for a category slug

Updates the opted_in status for the given email category slug. If the slug belongs to a parent category (email_category_id is null), all non-deleted child categories are updated. If the slug belongs to a child category, only that category is updated.

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.EmailOptInOutApi();
let slug = "slug_example"; // String | 
let payload = new HyperstackApi.UpdateEmailPreferenceInput(); // UpdateEmailPreferenceInput | 
apiInstance.updateEmailPreferenceForACategoryBySlug(slug, payload).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **slug** | **String**|  | 
 **payload** | [**UpdateEmailPreferenceInput**](UpdateEmailPreferenceInput.md)|  | 

### Return type

[**UpdateEmailPreferenceResponse**](UpdateEmailPreferenceResponse.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


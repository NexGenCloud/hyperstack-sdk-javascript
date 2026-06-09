# HyperstackApi.UserConsentEventsApi

All URIs are relative to *https://infrahub-api.nexgencloud.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getConsentAuditEvents**](UserConsentEventsApi.md#getConsentAuditEvents) | **GET** /auth/user-consent-events/{consent_type}/events | Get audit trail for a consent



## getConsentAuditEvents

> ConsentEventsResponse getConsentAuditEvents(consentType)

Get audit trail for a consent

Get all consent audit events

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.UserConsentEventsApi();
let consentType = "consentType_example"; // String | 
apiInstance.getConsentAuditEvents(consentType).then((data) => {
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

[**ConsentEventsResponse**](ConsentEventsResponse.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


# HyperstackApi.OrganizationApi

All URIs are relative to *https://infrahub-api.nexgencloud.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**removeOrganizationMember**](OrganizationApi.md#removeOrganizationMember) | **POST** /auth/organizations/remove-member | Remove Organization Member
[**retrieveOrganizationInformation**](OrganizationApi.md#retrieveOrganizationInformation) | **GET** /auth/organizations | Retrieve Organization Information
[**updateOrganizationInformation**](OrganizationApi.md#updateOrganizationInformation) | **PUT** /auth/organizations/update | Update Organization Information



## removeOrganizationMember

> RemoveMemberFromOrganizationResponseModel removeOrganizationMember(payload)

Remove Organization Member

Removes a member from your organization. For additional information, [click here](https://docs.hyperstack.cloud/docs/api-reference/auth-resources/organization/remove-member).

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.OrganizationApi();
let payload = new HyperstackApi.RemoveMemberPayload(); // RemoveMemberPayload | 
apiInstance.removeOrganizationMember(payload).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **payload** | [**RemoveMemberPayload**](RemoveMemberPayload.md)|  | 

### Return type

[**RemoveMemberFromOrganizationResponseModel**](RemoveMemberFromOrganizationResponseModel.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## retrieveOrganizationInformation

> GetOrganizationResponseModel retrieveOrganizationInformation()

Retrieve Organization Information

Retrieves detailed information about your organization, including current credit, threshold, number of instances, and number of volumes. For additional information on organizations, [click here](https://docs.hyperstack.cloud/docs/api-reference/auth-resources/organization/retrieve-org-details).

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.OrganizationApi();
apiInstance.retrieveOrganizationInformation().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**GetOrganizationResponseModel**](GetOrganizationResponseModel.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateOrganizationInformation

> UpdateOrganizationResponseModel updateOrganizationInformation(payload)

Update Organization Information

Updates the name of the organization. For additional information, [click here](https://docs.hyperstack.cloud/docs/api-reference/auth-resources/organization/update-org-name).

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.OrganizationApi();
let payload = new HyperstackApi.UpdateOrganizationPayload(); // UpdateOrganizationPayload | 
apiInstance.updateOrganizationInformation(payload).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **payload** | [**UpdateOrganizationPayload**](UpdateOrganizationPayload.md)|  | 

### Return type

[**UpdateOrganizationResponseModel**](UpdateOrganizationResponseModel.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


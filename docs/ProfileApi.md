# HyperstackApi.ProfileApi

All URIs are relative to *https://infrahub-api.nexgencloud.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createProfile**](ProfileApi.md#createProfile) | **POST** /core/profiles | Create profile
[**deleteProfile**](ProfileApi.md#deleteProfile) | **DELETE** /core/profiles/{id} | Delete profile
[**listProfiles**](ProfileApi.md#listProfiles) | **GET** /core/profiles | List profiles
[**retrieveProfileDetails**](ProfileApi.md#retrieveProfileDetails) | **GET** /core/profiles/{id} | Retrieve profile details



## createProfile

> CreateProfileResponse createProfile(payload)

Create profile

Creates a provisioning profile to save the configuration of a virtual machinefor future use. Include the profile name, description, and virtual machine configuration details in the request body. For more information about virtual machine profiles,[**click here**](https://docs.hyperstack.cloud/docs/virtual-machines/provisioning-profiles).

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.ProfileApi();
let payload = new HyperstackApi.CreateProfilePayload(); // CreateProfilePayload | 
apiInstance.createProfile(payload).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **payload** | [**CreateProfilePayload**](CreateProfilePayload.md)|  | 

### Return type

[**CreateProfileResponse**](CreateProfileResponse.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteProfile

> ResponseModel deleteProfile(id)

Delete profile

Permanently deletes a provisioning profile. Supply the profile ID in the path to delete the specified profile.

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.ProfileApi();
let id = 56; // Number | 
apiInstance.deleteProfile(id).then((data) => {
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


## listProfiles

> ProfileListResponse listProfiles()

List profiles

Returns a list of your existing provisioning profiles, providing virtual machine configuration details for each. For additional information about profiles,[**click here**](https://docs.hyperstack.cloud/docs/virtual-machines/provisioning-profiles#load-a-provisioning-profile).

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.ProfileApi();
apiInstance.listProfiles().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**ProfileListResponse**](ProfileListResponse.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## retrieveProfileDetails

> CreateProfileResponse retrieveProfileDetails(id)

Retrieve profile details

Retrieves details for an existing provisioning profile by supplying the profile ID in the request path. For more information about profiles, [**click here**](https://docs.hyperstack.cloud/docs/virtual-machines/provisioning-profiles).

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.ProfileApi();
let id = 56; // Number | 
apiInstance.retrieveProfileDetails(id).then((data) => {
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

[**CreateProfileResponse**](CreateProfileResponse.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


# HyperstackApi.FIPExclusionsApi

All URIs are relative to *https://infrahub-api.nexgencloud.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**checkIfOrgIsExcludedFromFloatingIPDetachment**](FIPExclusionsApi.md#checkIfOrgIsExcludedFromFloatingIPDetachment) | **GET** /core/fip-detachment-exclusions/org/{org_id} | 



## checkIfOrgIsExcludedFromFloatingIPDetachment

> ResponseModel checkIfOrgIsExcludedFromFloatingIPDetachment(orgId)



is org excluded from floating ip detachment

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.FIPExclusionsApi();
let orgId = 56; // Number | 
apiInstance.checkIfOrgIsExcludedFromFloatingIPDetachment(orgId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgId** | **Number**|  | 

### Return type

[**ResponseModel**](ResponseModel.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


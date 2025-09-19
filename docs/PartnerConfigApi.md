# HyperstackApi.PartnerConfigApi

All URIs are relative to *https://infrahub-api.nexgencloud.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getPartnerConfig**](PartnerConfigApi.md#getPartnerConfig) | **GET** /auth/partner-config | Get partner config
[**getPartnerConfigByDomain**](PartnerConfigApi.md#getPartnerConfigByDomain) | **GET** /auth/partner-config/docs | 



## getPartnerConfig

> PartnerConfig getPartnerConfig()

Get partner config

Fetch the customised customer configuration for Hyperstack.

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';

let apiInstance = new HyperstackApi.PartnerConfigApi();
apiInstance.getPartnerConfig().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**PartnerConfig**](PartnerConfig.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPartnerConfigByDomain

> PartnerConfig getPartnerConfigByDomain(opts)



Fetch the partner config for a given domain.

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';

let apiInstance = new HyperstackApi.PartnerConfigApi();
let opts = {
  'domain': "domain_example" // String | The domain to look up the partner config for.
};
apiInstance.getPartnerConfigByDomain(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **domain** | **String**| The domain to look up the partner config for. | [optional] 

### Return type

[**PartnerConfig**](PartnerConfig.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


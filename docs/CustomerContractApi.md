# HyperstackApi.CustomerContractApi

All URIs are relative to *https://infrahub-api.nexgencloud.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getContractGPUAllocationGraph**](CustomerContractApi.md#getContractGPUAllocationGraph) | **GET** /pricebook/contracts/{contract_id}/gpu_allocation_graph | Retrieve GPU Allocation Graph for Contract
[**listCustomerContracts**](CustomerContractApi.md#listCustomerContracts) | **GET** /pricebook/contracts | List Contracts
[**retrieveContract**](CustomerContractApi.md#retrieveContract) | **GET** /pricebook/contracts/{contract_id} | Retrieve Contract Details



## getContractGPUAllocationGraph

> ContractGPUAllocationGraphResponse getContractGPUAllocationGraph(contractId, opts)

Retrieve GPU Allocation Graph for Contract

Retrieve GPU allocation count graph for a specific contract by providing the contract ID in the path. The endpoint returns the GPU allocation count graph for the contract within the specified date range.

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.CustomerContractApi();
let contractId = 56; // Number | 
let opts = {
  'startDate': "startDate_example", // String | Date should be formatted in YYYY-MM-DDTHH:MM:SS
  'endDate': "endDate_example" // String | Date should be formatted in YYYY-MM-DDTHH:MM:SS
};
apiInstance.getContractGPUAllocationGraph(contractId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contractId** | **Number**|  | 
 **startDate** | **String**| Date should be formatted in YYYY-MM-DDTHH:MM:SS | [optional] 
 **endDate** | **String**| Date should be formatted in YYYY-MM-DDTHH:MM:SS | [optional] 

### Return type

[**ContractGPUAllocationGraphResponse**](ContractGPUAllocationGraphResponse.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listCustomerContracts

> GetCustomerContractsListResponseModel listCustomerContracts(opts)

List Contracts

Retrieves a list of contracts and their details, including the terms of each contract and the discounts applied to all resources under each contract. Pagination can be controlled using the &#x60;page&#x60; and &#x60;per_page&#x60; query parameters. For additional information about contracts, click [**here**](None/docs/billing-and-payment/contracts).

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.CustomerContractApi();
let opts = {
  'page': 56, // Number | 
  'perPage': 56 // Number | 
};
apiInstance.listCustomerContracts(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**|  | [optional] 
 **perPage** | **Number**|  | [optional] 

### Return type

[**GetCustomerContractsListResponseModel**](GetCustomerContractsListResponseModel.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## retrieveContract

> CustomerContractDetailResponseModel retrieveContract(contractId)

Retrieve Contract Details

Retrieve details of a specific contract by providing the contract ID in the path. The endpoint returns the contract object along with its associated discount plans. For more information, [**click here**](None/docs/api-reference/pricebook-resources/retrieve-contract-details).

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.CustomerContractApi();
let contractId = 56; // Number | 
apiInstance.retrieveContract(contractId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contractId** | **Number**|  | 

### Return type

[**CustomerContractDetailResponseModel**](CustomerContractDetailResponseModel.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


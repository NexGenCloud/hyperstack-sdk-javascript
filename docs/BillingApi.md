# HyperstackApi.BillingApi

All URIs are relative to *https://infrahub-api.nexgencloud.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bucketsBillingHistoryHourlyChart**](BillingApi.md#bucketsBillingHistoryHourlyChart) | **GET** /billing/billing/history/bucket/{bucket_id}/graph | Retrieve hourly cost datapoints of a Specific Bucket for a specific billing cycle
[**getBucketBillingHistory**](BillingApi.md#getBucketBillingHistory) | **GET** /billing/billing/history/bucket/{bucket_id} | Retrieve Billing History of a Specific Snapshot for a specific Billing Cycle
[**getClusterBillingHistory**](BillingApi.md#getClusterBillingHistory) | **GET** /billing/billing/history/cluster/{cluster_id} | Retrieve Billing History of a Specific Cluster for a specific Billing Cycle
[**getClusterBillingHistoryGraph**](BillingApi.md#getClusterBillingHistoryGraph) | **GET** /billing/billing/history/cluster/{cluster_id}/graph | Retrieve hourly cost datapoints of a specific Cluster for a specific billing cycle
[**getDataSynthesisBillingHistory**](BillingApi.md#getDataSynthesisBillingHistory) | **GET** /billing/billing/history/data_synthesis | Retrieve Billing History of data synthesis for a specific Billing Cycle
[**getDataSynthesisBillingHistoryGraph**](BillingApi.md#getDataSynthesisBillingHistoryGraph) | **GET** /billing/billing/history/data_synthesis/{resource_id}/graph | Retrieve hourly cost datapoints of a Specific Data Synthesis for a specific
[**getDataSynthesisHistoryForResource**](BillingApi.md#getDataSynthesisHistoryForResource) | **GET** /billing/billing/history/data_synthesis/{resource_id} | 
[**getFineTuningBillingHistory**](BillingApi.md#getFineTuningBillingHistory) | **GET** /billing/billing/history/fine_tuning | Retrieve Billing History of model evaluation for a specific Billing Cycle
[**getFineTuningBillingHistoryGraph**](BillingApi.md#getFineTuningBillingHistoryGraph) | **GET** /billing/billing/history/fine_tuning/{resource_id}/graph | Retrieve hourly cost datapoints of a Specific Fine Tuning for a specific billing cycle
[**getLastDayCost**](BillingApi.md#getLastDayCost) | **GET** /billing/billing/last-day-cost | GET: Last Day Cost
[**getModelEvaluationBillingHistory**](BillingApi.md#getModelEvaluationBillingHistory) | **GET** /billing/billing/history/model_evaluation | Retrieve Billing History of model evaluation for a specific Billing Cycle
[**getModelEvaluationBillingHistoryGraph**](BillingApi.md#getModelEvaluationBillingHistoryGraph) | **GET** /billing/billing/history/model_evaluation/{resource_id}/graph | Retrieve hourly cost datapoints of a Specific Model Evaluation for a specific
[**getNotificationThreshold**](BillingApi.md#getNotificationThreshold) | **PUT** /billing/billing/threshold/{threshold_id} | Update: Subscribe or Unsubscribe Notification Threshold
[**getResourceFineTuningBillingHistory**](BillingApi.md#getResourceFineTuningBillingHistory) | **GET** /billing/billing/history/fine_tuning/{resource_id} | Retrieve Billing History of a Specific Fine Tuning for a specific Billing Cycle
[**getResourceModelEvaluationBillingHistory**](BillingApi.md#getResourceModelEvaluationBillingHistory) | **GET** /billing/billing/history/model_evaluation/{resource_id} | 
[**getServerlessInferenceBillingHistoryGraph**](BillingApi.md#getServerlessInferenceBillingHistoryGraph) | **GET** /billing/billing/history/serverless_inference/{resource_id}/graph | Retrieve hourly cost datapoints of a Specific Serverless Inference for a specific
[**getServerlessInferencesBillingHistory**](BillingApi.md#getServerlessInferencesBillingHistory) | **GET** /billing/billing/history/serverless_inference/{resource_id} | 
[**getSnapshotBillingHistory**](BillingApi.md#getSnapshotBillingHistory) | **GET** /billing/billing/history/snapshot/{snapshot_id} | Retrieve Billing History of a Specific Snapshot for a specific Billing Cycle
[**getSnapshotBillingHistoryGraph**](BillingApi.md#getSnapshotBillingHistoryGraph) | **GET** /billing/billing/history/snapshot/{snapshot_id}/graph | Retrieve hourly cost datapoints of a Specific Snapshot for a specific billing cycle
[**getUsage**](BillingApi.md#getUsage) | **GET** /billing/billing/usage | GET: Billing usage
[**getUserBillingHistory**](BillingApi.md#getUserBillingHistory) | **GET** /billing/billing/history | Retrieve Billing History for a specific Billing Cycle
[**getVMBillingDetails**](BillingApi.md#getVMBillingDetails) | **GET** /billing/billing/history/virtual-machine/{vm_id} | Retrieve Billing History of a Specific Virtual Machine for a specific Billing Cycle
[**getVMBillingEvents**](BillingApi.md#getVMBillingEvents) | **GET** /billing/billing/virtual-machine/{vm_id}/billing-events | Retrieve VM billing events history
[**getVMBillingGraph**](BillingApi.md#getVMBillingGraph) | **GET** /billing/billing/history/virtual-machine/{vm_id}/graph | Retrieve hourly cost datapoints of a Specific Virtual Machine for a specific billing cycle
[**getVMBillingHistory**](BillingApi.md#getVMBillingHistory) | **GET** /billing/billing/history/virtual-machine | Retrieve Billing History of Virtual Machine for a specific Billing Cycle
[**getVMSubResourceCosts**](BillingApi.md#getVMSubResourceCosts) | **GET** /billing/billing/virtual-machine/{vm_id}/sub-resource | Retrieve Total Costs and Non Discount Costs for Sub Resources
[**getVMSubResourceGraph**](BillingApi.md#getVMSubResourceGraph) | **GET** /billing/billing/virtual-machine/{vm_id}/sub-resource/graph | Retrieve Sub-Resources Historical Cost datapoints of a Virtual
[**getVolumeBillingDetails**](BillingApi.md#getVolumeBillingDetails) | **GET** /billing/billing/history/volume/{volume_id} | Retrieve Billing History of a Specific Volume for a specific Billing Cycle
[**getVolumeBillingEvents**](BillingApi.md#getVolumeBillingEvents) | **GET** /billing/billing/volume/{volume_id}/billing-events | Retrieve Volume billing events history
[**getVolumeBillingHistory**](BillingApi.md#getVolumeBillingHistory) | **GET** /billing/billing/history/volume | Retrieve Billing History of Volume for a specific Billing Cycle
[**getVolumeBillingHistoryGraph**](BillingApi.md#getVolumeBillingHistoryGraph) | **GET** /billing/billing/history/volume/{volume_id}/graph | Retrieve hourly cost datapoints of a Specific Volume for a specific billing cycle
[**listBillingContractHistory**](BillingApi.md#listBillingContractHistory) | **GET** /billing/billing/history/contract | Retrieve Billing History of Contract for a specific Billing Cycle
[**listBucketBillingHistory**](BillingApi.md#listBucketBillingHistory) | **GET** /billing/billing/history/bucket | Retrieve Billing History of a Bucket for a specific Billing Cycle
[**listClustersBillingHistory**](BillingApi.md#listClustersBillingHistory) | **GET** /billing/billing/history/cluster | Retrieve Billing History of Clusters for a specific Billing Cycle
[**listOrgNotificationThresholds**](BillingApi.md#listOrgNotificationThresholds) | **GET** /billing/billing/threshold | GET: All Thresholds for Organization
[**listServerlessInferenceBillingHistory**](BillingApi.md#listServerlessInferenceBillingHistory) | **GET** /billing/billing/history/serverless_inference | Retrieve Billing History of serverless inference for a specific Billing Cycle
[**listSnapshotBillingHistory**](BillingApi.md#listSnapshotBillingHistory) | **GET** /billing/billing/history/snapshot | Retrieve Billing History of Snapshot for a specific Billing Cycle



## bucketsBillingHistoryHourlyChart

> ResourceLevelGraphBillingDetailsBucket bucketsBillingHistoryHourlyChart(bucketId, opts)

Retrieve hourly cost datapoints of a Specific Bucket for a specific billing cycle

User will receive hourly cost datapoints for a Bucket for a specified billing cycle. This data will include &#39;incurred_bill&#39; graph datapoints.

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.BillingApi();
let bucketId = 56; // Number | 
let opts = {
  'startDate': "startDate_example", // String | Date should be formatted in YYYY-MM-DDTHH:MM:SS
  'endDate': "endDate_example" // String | Date should be formatted in YYYY-MM-DDTHH:MM:SS
};
apiInstance.bucketsBillingHistoryHourlyChart(bucketId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bucketId** | **Number**|  | 
 **startDate** | **String**| Date should be formatted in YYYY-MM-DDTHH:MM:SS | [optional] 
 **endDate** | **String**| Date should be formatted in YYYY-MM-DDTHH:MM:SS | [optional] 

### Return type

[**ResourceLevelGraphBillingDetailsBucket**](ResourceLevelGraphBillingDetailsBucket.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getBucketBillingHistory

> ResourceLevelBucketBillingDetailsResponseModel getBucketBillingHistory(bucketId, opts)

Retrieve Billing History of a Specific Snapshot for a specific Billing Cycle

Retrieve billing history of a specific Bucket for the specified billing cycle. This data will include &#39;resource_name&#39;, &#39;infrahub_id&#39;, &#39;price_per_hour&#39;, &#39;incurred_bill&#39;, &#39;usage_time&#39;, &#39;non_discounted_price_per_hour&#39;, &#39;non_discounted_bill&#39;.

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.BillingApi();
let bucketId = 56; // Number | 
let opts = {
  'startDate': "startDate_example", // String | Datetime should be formatted in YYYY-MM-DDTHH:MM:SS
  'endDate': "endDate_example" // String | Datetime should be formatted in YYYY-MM-DDTHH:MM:SS
};
apiInstance.getBucketBillingHistory(bucketId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bucketId** | **Number**|  | 
 **startDate** | **String**| Datetime should be formatted in YYYY-MM-DDTHH:MM:SS | [optional] 
 **endDate** | **String**| Datetime should be formatted in YYYY-MM-DDTHH:MM:SS | [optional] 

### Return type

[**ResourceLevelBucketBillingDetailsResponseModel**](ResourceLevelBucketBillingDetailsResponseModel.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getClusterBillingHistory

> ResourceLevelClusterBillingDetailsResponseModel getClusterBillingHistory(clusterId, opts)

Retrieve Billing History of a Specific Cluster for a specific Billing Cycle

User will receive billing history of a specific Cluster for the specified billing cycle. This data will include &#39;resource_name&#39;, &#39;infrahub_id&#39;, &#39;price_per_hour&#39;, &#39;non_discounted_price_per_hour&#39;, &#39;incurred_bill&#39;, &#39;non_discounted_bill&#39;, &#39;usage_time&#39;, &#39;usage_time_ACTIVE&#39;, &#39;usage_time_SHUTOFF&#39;, &#39;usage_time_HIBERNATED&#39;.

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.BillingApi();
let clusterId = 56; // Number | 
let opts = {
  'startDate': "startDate_example", // String | Date should be formatted in YYYY-MM-DDTHH:MM:SS
  'endDate': "endDate_example" // String | Date should be formatted in YYYY-MM-DDTHH:MM:SS
};
apiInstance.getClusterBillingHistory(clusterId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clusterId** | **Number**|  | 
 **startDate** | **String**| Date should be formatted in YYYY-MM-DDTHH:MM:SS | [optional] 
 **endDate** | **String**| Date should be formatted in YYYY-MM-DDTHH:MM:SS | [optional] 

### Return type

[**ResourceLevelClusterBillingDetailsResponseModel**](ResourceLevelClusterBillingDetailsResponseModel.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getClusterBillingHistoryGraph

> ResourceLevelClusterGraphBillingDetailsResponseModel getClusterBillingHistoryGraph(clusterId, opts)

Retrieve hourly cost datapoints of a specific Cluster for a specific billing cycle

User will receive hourly cost datapoints for a Cluster for a specified billing cycle. This data will include &#39;incurred_bill&#39; graph datapoints.

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.BillingApi();
let clusterId = 56; // Number | 
let opts = {
  'startDate': "startDate_example", // String | Date should be formatted in YYYY-MM-DDTHH:MM:SS
  'endDate': "endDate_example" // String | Date should be formatted in YYYY-MM-DDTHH:MM:SS
};
apiInstance.getClusterBillingHistoryGraph(clusterId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clusterId** | **Number**|  | 
 **startDate** | **String**| Date should be formatted in YYYY-MM-DDTHH:MM:SS | [optional] 
 **endDate** | **String**| Date should be formatted in YYYY-MM-DDTHH:MM:SS | [optional] 

### Return type

[**ResourceLevelClusterGraphBillingDetailsResponseModel**](ResourceLevelClusterGraphBillingDetailsResponseModel.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getDataSynthesisBillingHistory

> TokenBasedBillingHistoryResponse getDataSynthesisBillingHistory(opts)

Retrieve Billing History of data synthesis for a specific Billing Cycle

User will receive billing history of data_synthesis for the specified billing cycle.

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.BillingApi();
let opts = {
  'startDate': "startDate_example", // String | Date should be formatted in YYYY-MM-DDTHH:MM:SS
  'endDate': "endDate_example", // String | Date should be formatted in YYYY-MM-DDTHH:MM:SS
  'search': "search_example", // String | Search by resource \"Name\" or \"ID\"
  'perPage': 56, // Number | Number of items to return per page
  'page': 56 // Number | Page number
};
apiInstance.getDataSynthesisBillingHistory(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startDate** | **String**| Date should be formatted in YYYY-MM-DDTHH:MM:SS | [optional] 
 **endDate** | **String**| Date should be formatted in YYYY-MM-DDTHH:MM:SS | [optional] 
 **search** | **String**| Search by resource \&quot;Name\&quot; or \&quot;ID\&quot; | [optional] 
 **perPage** | **Number**| Number of items to return per page | [optional] 
 **page** | **Number**| Page number | [optional] 

### Return type

[**TokenBasedBillingHistoryResponse**](TokenBasedBillingHistoryResponse.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getDataSynthesisBillingHistoryGraph

> DataSynthesisBillingHistoryDetailsResponseSchema getDataSynthesisBillingHistoryGraph(resourceId, opts)

Retrieve hourly cost datapoints of a Specific Data Synthesis for a specific

User will receive hourly cost datapoints for a data synthesis job for a specified billing cycle. This data will include &#39;incurred_bill&#39; graph datapoints. billing cycle

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.BillingApi();
let resourceId = 56; // Number | 
let opts = {
  'startDate': "startDate_example", // String | Date should be formatted in YYYY-MM-DDTHH:MM:SS
  'endDate': "endDate_example" // String | Date should be formatted in YYYY-MM-DDTHH:MM:SS
};
apiInstance.getDataSynthesisBillingHistoryGraph(resourceId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resourceId** | **Number**|  | 
 **startDate** | **String**| Date should be formatted in YYYY-MM-DDTHH:MM:SS | [optional] 
 **endDate** | **String**| Date should be formatted in YYYY-MM-DDTHH:MM:SS | [optional] 

### Return type

[**DataSynthesisBillingHistoryDetailsResponseSchema**](DataSynthesisBillingHistoryDetailsResponseSchema.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getDataSynthesisHistoryForResource

> DataSynthesisBillingHistoryDetailsResponseSchema getDataSynthesisHistoryForResource(resourceId, opts)



Retrieve billing history for a specific Data Synthesis resource. Includes: &#39;resource_name&#39;, &#39;infrahub_id&#39;, &#39;base_model&#39;, &#39;base_model_display_name&#39;, &#39;lora_adapter&#39;, &#39;incurred_bill&#39;, &#39;non_discounted_bill&#39;, &#39;usage_time&#39;, &#39;input_tokens&#39;, &#39;output_tokens&#39;, &#39;input_tokens_incurred_bill&#39;, &#39;input_tokens_non_discounted_bill&#39;, &#39;output_tokens_incurred_bill&#39;, &#39;output_tokens_non_discounted_bill&#39;

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.BillingApi();
let resourceId = 56; // Number | 
let opts = {
  'startDate': "startDate_example", // String | YYYY-MM-DDTHH:MM:SS
  'endDate': "endDate_example" // String | YYYY-MM-DDTHH:MM:SS
};
apiInstance.getDataSynthesisHistoryForResource(resourceId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resourceId** | **Number**|  | 
 **startDate** | **String**| YYYY-MM-DDTHH:MM:SS | [optional] 
 **endDate** | **String**| YYYY-MM-DDTHH:MM:SS | [optional] 

### Return type

[**DataSynthesisBillingHistoryDetailsResponseSchema**](DataSynthesisBillingHistoryDetailsResponseSchema.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getFineTuningBillingHistory

> WorkloadBillingHistoryResponse getFineTuningBillingHistory(opts)

Retrieve Billing History of model evaluation for a specific Billing Cycle

User will receive billing history of fine_tuning for the specified billing cycle.

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.BillingApi();
let opts = {
  'startDate': "startDate_example", // String | Date should be formatted in YYYY-MM-DDTHH:MM:SS
  'endDate': "endDate_example", // String | Date should be formatted in YYYY-MM-DDTHH:MM:SS
  'search': "search_example", // String | Search by resource \"Name\" or \"ID\"
  'perPage': 56, // Number | Number of items to return per page
  'page': 56 // Number | Page number
};
apiInstance.getFineTuningBillingHistory(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startDate** | **String**| Date should be formatted in YYYY-MM-DDTHH:MM:SS | [optional] 
 **endDate** | **String**| Date should be formatted in YYYY-MM-DDTHH:MM:SS | [optional] 
 **search** | **String**| Search by resource \&quot;Name\&quot; or \&quot;ID\&quot; | [optional] 
 **perPage** | **Number**| Number of items to return per page | [optional] 
 **page** | **Number**| Page number | [optional] 

### Return type

[**WorkloadBillingHistoryResponse**](WorkloadBillingHistoryResponse.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getFineTuningBillingHistoryGraph

> ResourceLevelVolumeGraphBillingDetailsResponseModel getFineTuningBillingHistoryGraph(resourceId, opts)

Retrieve hourly cost datapoints of a Specific Fine Tuning for a specific billing cycle

User will receive hourly cost datapoints for a Fine Tunings for a specified billing cycle. This data will include &#39;incurred_bill&#39; graph datapoints.

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.BillingApi();
let resourceId = 56; // Number | 
let opts = {
  'startDate': "startDate_example", // String | Date should be formatted in YYYY-MM-DDTHH:MM:SS
  'endDate': "endDate_example" // String | Date should be formatted in YYYY-MM-DDTHH:MM:SS
};
apiInstance.getFineTuningBillingHistoryGraph(resourceId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resourceId** | **Number**|  | 
 **startDate** | **String**| Date should be formatted in YYYY-MM-DDTHH:MM:SS | [optional] 
 **endDate** | **String**| Date should be formatted in YYYY-MM-DDTHH:MM:SS | [optional] 

### Return type

[**ResourceLevelVolumeGraphBillingDetailsResponseModel**](ResourceLevelVolumeGraphBillingDetailsResponseModel.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getLastDayCost

> LastDayCostResponse getLastDayCost()

GET: Last Day Cost

Retrieve the previous day&#39;s costs for instances, volumes, and clusters. Returns a breakdown of  the costs and the total cost for the last day. For additional information on Retrieve Previous Day Usage Costs, [**click here**](None/docs/api-reference/billing-resources/last-day-usage/)

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.BillingApi();
apiInstance.getLastDayCost().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**LastDayCostResponse**](LastDayCostResponse.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getModelEvaluationBillingHistory

> TokenBasedBillingHistoryResponse getModelEvaluationBillingHistory(opts)

Retrieve Billing History of model evaluation for a specific Billing Cycle

User will receive billing history of model_evaluation for the specified billing cycle.

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.BillingApi();
let opts = {
  'startDate': "startDate_example", // String | Date should be formatted in YYYY-MM-DDTHH:MM:SS
  'endDate': "endDate_example", // String | Date should be formatted in YYYY-MM-DDTHH:MM:SS
  'search': "search_example", // String | Search by resource \"Name\" or \"ID\"
  'perPage': 56, // Number | Number of items to return per page
  'page': 56 // Number | Page number
};
apiInstance.getModelEvaluationBillingHistory(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startDate** | **String**| Date should be formatted in YYYY-MM-DDTHH:MM:SS | [optional] 
 **endDate** | **String**| Date should be formatted in YYYY-MM-DDTHH:MM:SS | [optional] 
 **search** | **String**| Search by resource \&quot;Name\&quot; or \&quot;ID\&quot; | [optional] 
 **perPage** | **Number**| Number of items to return per page | [optional] 
 **page** | **Number**| Page number | [optional] 

### Return type

[**TokenBasedBillingHistoryResponse**](TokenBasedBillingHistoryResponse.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getModelEvaluationBillingHistoryGraph

> ModelEvaluationBillingHistoryDetailsResponseSchema getModelEvaluationBillingHistoryGraph(resourceId, opts)

Retrieve hourly cost datapoints of a Specific Model Evaluation for a specific

User will receive hourly cost datapoints for a model evaluation for a specified billing cycle. This data will include &#39;incurred_bill&#39; graph datapoints. billing cycle

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.BillingApi();
let resourceId = 56; // Number | 
let opts = {
  'startDate': "startDate_example", // String | Date should be formatted in YYYY-MM-DDTHH:MM:SS
  'endDate': "endDate_example" // String | Date should be formatted in YYYY-MM-DDTHH:MM:SS
};
apiInstance.getModelEvaluationBillingHistoryGraph(resourceId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resourceId** | **Number**|  | 
 **startDate** | **String**| Date should be formatted in YYYY-MM-DDTHH:MM:SS | [optional] 
 **endDate** | **String**| Date should be formatted in YYYY-MM-DDTHH:MM:SS | [optional] 

### Return type

[**ModelEvaluationBillingHistoryDetailsResponseSchema**](ModelEvaluationBillingHistoryDetailsResponseSchema.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getNotificationThreshold

> OrganizationThresholdUpdateResponse getNotificationThreshold(thresholdId, payload)

Update: Subscribe or Unsubscribe Notification Threshold

By default, you are subscribed to all the threshold values and you will be receiving the email notification for these default thresholds values. &#x60;false&#x60; indicates that the user will no longer receive notifications for this specific threshold, whereas &#x60;true&#x60; signifies that the user will receive notification emails.

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.BillingApi();
let thresholdId = 56; // Number | 
let payload = new HyperstackApi.SubscribeOrUnsubscribeUpdatePayload(); // SubscribeOrUnsubscribeUpdatePayload | 
apiInstance.getNotificationThreshold(thresholdId, payload).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **thresholdId** | **Number**|  | 
 **payload** | [**SubscribeOrUnsubscribeUpdatePayload**](SubscribeOrUnsubscribeUpdatePayload.md)|  | 

### Return type

[**OrganizationThresholdUpdateResponse**](OrganizationThresholdUpdateResponse.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getResourceFineTuningBillingHistory

> ResourceLevelVolumeBillingDetailsResponseModel getResourceFineTuningBillingHistory(resourceId, opts)

Retrieve Billing History of a Specific Fine Tuning for a specific Billing Cycle

Retrieve billing history of a specific Fine tuning for the specified billing cycle. This data will include &#39;resource_name&#39;, &#39;infrahub_id&#39;, &#39;price_per_hour&#39;, &#39;incurred_bill&#39;, &#39;usage_time&#39;, &#39;non_discounted_price_per_hour&#39;, &#39;non_discounted_bill&#39;.

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.BillingApi();
let resourceId = 56; // Number | 
let opts = {
  'startDate': "startDate_example", // String | Datetime should be formatted in YYYY-MM-DDTHH:MM:SS
  'endDate': "endDate_example" // String | Datetime should be formatted in YYYY-MM-DDTHH:MM:SS
};
apiInstance.getResourceFineTuningBillingHistory(resourceId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resourceId** | **Number**|  | 
 **startDate** | **String**| Datetime should be formatted in YYYY-MM-DDTHH:MM:SS | [optional] 
 **endDate** | **String**| Datetime should be formatted in YYYY-MM-DDTHH:MM:SS | [optional] 

### Return type

[**ResourceLevelVolumeBillingDetailsResponseModel**](ResourceLevelVolumeBillingDetailsResponseModel.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getResourceModelEvaluationBillingHistory

> ModelEvaluationBillingHistoryDetailsResponseSchema getResourceModelEvaluationBillingHistory(resourceId, opts)



Retrieve billing history for a specific Model Evaluation resource. Includes: &#39;resource_name&#39;, &#39;infrahub_id&#39;, &#39;base_model&#39;, &#39;base_model_display_name&#39;, &#39;lora_adapter&#39;, &#39;incurred_bill&#39;, &#39;non_discounted_bill&#39;, &#39;usage_time&#39;, &#39;input_tokens&#39;, &#39;output_tokens&#39;, &#39;input_tokens_incurred_bill&#39;, &#39;input_tokens_non_discounted_bill&#39;, &#39;output_tokens_incurred_bill&#39;, &#39;output_tokens_non_discounted_bill&#39;

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.BillingApi();
let resourceId = 56; // Number | 
let opts = {
  'startDate': "startDate_example", // String | YYYY-MM-DDTHH:MM:SS
  'endDate': "endDate_example" // String | YYYY-MM-DDTHH:MM:SS
};
apiInstance.getResourceModelEvaluationBillingHistory(resourceId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resourceId** | **Number**|  | 
 **startDate** | **String**| YYYY-MM-DDTHH:MM:SS | [optional] 
 **endDate** | **String**| YYYY-MM-DDTHH:MM:SS | [optional] 

### Return type

[**ModelEvaluationBillingHistoryDetailsResponseSchema**](ModelEvaluationBillingHistoryDetailsResponseSchema.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getServerlessInferenceBillingHistoryGraph

> ServerlessInferencedBillingHistoryDetailsResponseSchema getServerlessInferenceBillingHistoryGraph(resourceId, opts)

Retrieve hourly cost datapoints of a Specific Serverless Inference for a specific

User will receive hourly cost datapoints for a serverless inference for a specified billing cycle. This data will include &#39;incurred_bill&#39; graph datapoints. billing cycle

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.BillingApi();
let resourceId = 56; // Number | 
let opts = {
  'startDate': "startDate_example", // String | Date should be formatted in YYYY-MM-DDTHH:MM:SS
  'endDate': "endDate_example" // String | Date should be formatted in YYYY-MM-DDTHH:MM:SS
};
apiInstance.getServerlessInferenceBillingHistoryGraph(resourceId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resourceId** | **Number**|  | 
 **startDate** | **String**| Date should be formatted in YYYY-MM-DDTHH:MM:SS | [optional] 
 **endDate** | **String**| Date should be formatted in YYYY-MM-DDTHH:MM:SS | [optional] 

### Return type

[**ServerlessInferencedBillingHistoryDetailsResponseSchema**](ServerlessInferencedBillingHistoryDetailsResponseSchema.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getServerlessInferencesBillingHistory

> ServerlessInferencedBillingHistoryDetailsResponseSchema getServerlessInferencesBillingHistory(resourceId, opts)



Retrieve billing history for a specific Serverless Inference resource. Includes: &#39;resource_name&#39;, &#39;infrahub_id&#39;, &#39;base_model&#39;, &#39;base_model_display_name&#39;, &#39;lora_adapter&#39;, &#39;incurred_bill&#39;, &#39;non_discounted_bill&#39;, &#39;usage_time&#39;, &#39;input_tokens&#39;, &#39;output_tokens&#39;, &#39;input_tokens_incurred_bill&#39;, &#39;input_tokens_non_discounted_bill&#39;, &#39;output_tokens_incurred_bill&#39;, &#39;output_tokens_non_discounted_bill&#39;

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.BillingApi();
let resourceId = 56; // Number | 
let opts = {
  'startDate': "startDate_example", // String | YYYY-MM-DDTHH:MM:SS
  'endDate': "endDate_example" // String | YYYY-MM-DDTHH:MM:SS
};
apiInstance.getServerlessInferencesBillingHistory(resourceId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resourceId** | **Number**|  | 
 **startDate** | **String**| YYYY-MM-DDTHH:MM:SS | [optional] 
 **endDate** | **String**| YYYY-MM-DDTHH:MM:SS | [optional] 

### Return type

[**ServerlessInferencedBillingHistoryDetailsResponseSchema**](ServerlessInferencedBillingHistoryDetailsResponseSchema.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSnapshotBillingHistory

> ResourceLevelVolumeBillingDetailsResponseModel getSnapshotBillingHistory(snapshotId, opts)

Retrieve Billing History of a Specific Snapshot for a specific Billing Cycle

Retrieve billing history of a specific Snapshot for the specified billing cycle. This data will include &#39;resource_name&#39;, &#39;infrahub_id&#39;, &#39;price_per_hour&#39;, &#39;incurred_bill&#39;, &#39;usage_time&#39;, &#39;non_discounted_price_per_hour&#39;, &#39;non_discounted_bill&#39;.

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.BillingApi();
let snapshotId = 56; // Number | 
let opts = {
  'startDate': "startDate_example", // String | Datetime should be formatted in YYYY-MM-DDTHH:MM:SS
  'endDate': "endDate_example" // String | Datetime should be formatted in YYYY-MM-DDTHH:MM:SS
};
apiInstance.getSnapshotBillingHistory(snapshotId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **snapshotId** | **Number**|  | 
 **startDate** | **String**| Datetime should be formatted in YYYY-MM-DDTHH:MM:SS | [optional] 
 **endDate** | **String**| Datetime should be formatted in YYYY-MM-DDTHH:MM:SS | [optional] 

### Return type

[**ResourceLevelVolumeBillingDetailsResponseModel**](ResourceLevelVolumeBillingDetailsResponseModel.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSnapshotBillingHistoryGraph

> ResourceLevelVolumeGraphBillingDetailsResponseModel getSnapshotBillingHistoryGraph(snapshotId, opts)

Retrieve hourly cost datapoints of a Specific Snapshot for a specific billing cycle

User will receive hourly cost datapoints for a Snapshot for a specified billing cycle. This data will include &#39;incurred_bill&#39; graph datapoints.

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.BillingApi();
let snapshotId = 56; // Number | 
let opts = {
  'startDate': "startDate_example", // String | Date should be formatted in YYYY-MM-DDTHH:MM:SS
  'endDate': "endDate_example" // String | Date should be formatted in YYYY-MM-DDTHH:MM:SS
};
apiInstance.getSnapshotBillingHistoryGraph(snapshotId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **snapshotId** | **Number**|  | 
 **startDate** | **String**| Date should be formatted in YYYY-MM-DDTHH:MM:SS | [optional] 
 **endDate** | **String**| Date should be formatted in YYYY-MM-DDTHH:MM:SS | [optional] 

### Return type

[**ResourceLevelVolumeGraphBillingDetailsResponseModel**](ResourceLevelVolumeGraphBillingDetailsResponseModel.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUsage

> BillingMetricesResponse getUsage(opts)

GET: Billing usage

Retrieve active billing metrics for the organization&#39;s resources, including pricing, uptime, and total cost. Returns usage details for each active resource by defualt(&#x60;deleted&#x3D;false&#x60; will return active resources). Additionally, adding &#x60;deleted&#x3D;true&#x60; in query parameter will return inactive resources. For additional information on view usage costs for all resources, [**click here**](None/docs/billing/pricebook/)

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.BillingApi();
let opts = {
  'deleted': "deleted_example", // String | `true` will return inactive resources and `false` will return active resources. By defualt(`deleted=false`)
  'environment': "environment_example" // String | Filter resources by environment ID or Name
};
apiInstance.getUsage(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleted** | **String**| &#x60;true&#x60; will return inactive resources and &#x60;false&#x60; will return active resources. By defualt(&#x60;deleted&#x3D;false&#x60;) | [optional] 
 **environment** | **String**| Filter resources by environment ID or Name | [optional] 

### Return type

[**BillingMetricesResponse**](BillingMetricesResponse.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUserBillingHistory

> OrganizationLevelBillingHistoryResponseModel getUserBillingHistory(opts)

Retrieve Billing History for a specific Billing Cycle

User will receive billing history for the specified billing cycle. This data will include &#39;incurred_bill&#39;, &#39;non_discounted_bill&#39;, &#39;vm_cost&#39;, &#39;volume_cost&#39;

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.BillingApi();
let opts = {
  'startDate': "startDate_example", // String | Date should be formatted in YYYY-MM-DDTHH:MM:SS
  'endDate': "endDate_example", // String | Date should be formatted in YYYY-MM-DDTHH:MM:SS
  'graph': "graph_example" // String | Set this value to \"true\" for getting graph value
};
apiInstance.getUserBillingHistory(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startDate** | **String**| Date should be formatted in YYYY-MM-DDTHH:MM:SS | [optional] 
 **endDate** | **String**| Date should be formatted in YYYY-MM-DDTHH:MM:SS | [optional] 
 **graph** | **String**| Set this value to \&quot;true\&quot; for getting graph value | [optional] 

### Return type

[**OrganizationLevelBillingHistoryResponseModel**](OrganizationLevelBillingHistoryResponseModel.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getVMBillingDetails

> ResourceLevelVMBillingDetailsResponseModel getVMBillingDetails(vmId, opts)

Retrieve Billing History of a Specific Virtual Machine for a specific Billing Cycle

User will receive billing history of a specific Virtual Machine for the specified billing cycle. This data will include &#39;resource_name&#39;, &#39;infrahub_id&#39;, &#39;price_per_hour&#39;, &#39;non_discounted_price_per_hour&#39;, &#39;incurred_bill&#39;, &#39;non_discounted_bill&#39;, &#39;usage_time&#39;, &#39;usage_time_ACTIVE&#39;, &#39;usage_time_SHUTOFF&#39;, &#39;usage_time_HIBERNATED&#39;

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.BillingApi();
let vmId = 56; // Number | 
let opts = {
  'startDate': "startDate_example", // String | Date should be formatted in YYYY-MM-DDTHH:MM:SS
  'endDate': "endDate_example" // String | Date should be formatted in YYYY-MM-DDTHH:MM:SS
};
apiInstance.getVMBillingDetails(vmId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vmId** | **Number**|  | 
 **startDate** | **String**| Date should be formatted in YYYY-MM-DDTHH:MM:SS | [optional] 
 **endDate** | **String**| Date should be formatted in YYYY-MM-DDTHH:MM:SS | [optional] 

### Return type

[**ResourceLevelVMBillingDetailsResponseModel**](ResourceLevelVMBillingDetailsResponseModel.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getVMBillingEvents

> ResourceBillingEventsHistoryResponse getVMBillingEvents(vmId, opts)

Retrieve VM billing events history

User will receive vm billing events history

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.BillingApi();
let vmId = 56; // Number | 
let opts = {
  'startDate': "startDate_example", // String | Date should be formatted in YYYY-MM-DDTHH:MM:SS
  'endDate': "endDate_example" // String | Date should be formatted in YYYY-MM-DDTHH:MM:SS
};
apiInstance.getVMBillingEvents(vmId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vmId** | **Number**|  | 
 **startDate** | **String**| Date should be formatted in YYYY-MM-DDTHH:MM:SS | [optional] 
 **endDate** | **String**| Date should be formatted in YYYY-MM-DDTHH:MM:SS | [optional] 

### Return type

[**ResourceBillingEventsHistoryResponse**](ResourceBillingEventsHistoryResponse.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getVMBillingGraph

> ResourceLevelVmGraphBillingDetailsResponseModel getVMBillingGraph(vmId, opts)

Retrieve hourly cost datapoints of a Specific Virtual Machine for a specific billing cycle

User will receive hourly cost datapoints for a VM for a specified billing cycle. This data will include &#39;incurred_bill&#39; graph datapoints.

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.BillingApi();
let vmId = 56; // Number | 
let opts = {
  'startDate': "startDate_example", // String | Date should be formatted in YYYY-MM-DDTHH:MM:SS
  'endDate': "endDate_example" // String | Date should be formatted in YYYY-MM-DDTHH:MM:SS
};
apiInstance.getVMBillingGraph(vmId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vmId** | **Number**|  | 
 **startDate** | **String**| Date should be formatted in YYYY-MM-DDTHH:MM:SS | [optional] 
 **endDate** | **String**| Date should be formatted in YYYY-MM-DDTHH:MM:SS | [optional] 

### Return type

[**ResourceLevelVmGraphBillingDetailsResponseModel**](ResourceLevelVmGraphBillingDetailsResponseModel.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getVMBillingHistory

> ResourceLevelVmBillingHistoryResponseModel getVMBillingHistory(opts)

Retrieve Billing History of Virtual Machine for a specific Billing Cycle

User will receive billing history of virtual machine for the specified billing cycle. This data will include &#39;resource_name&#39;, &#39;infrahub_id&#39;, &#39;status&#39;, &#39;incurred_bill&#39;, &#39;usage_time&#39;, &#39;price_per_hour&#39;

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.BillingApi();
let opts = {
  'startDate': "startDate_example", // String | Date should be formatted in YYYY-MM-DDTHH:MM:SS
  'endDate': "endDate_example", // String | Date should be formatted in YYYY-MM-DDTHH:MM:SS
  'search': "search_example", // String | Search by resource \"Name\" or \"ID\"
  'perPage': 56, // Number | Number of items to return per page
  'page': 56 // Number | Page number
};
apiInstance.getVMBillingHistory(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startDate** | **String**| Date should be formatted in YYYY-MM-DDTHH:MM:SS | [optional] 
 **endDate** | **String**| Date should be formatted in YYYY-MM-DDTHH:MM:SS | [optional] 
 **search** | **String**| Search by resource \&quot;Name\&quot; or \&quot;ID\&quot; | [optional] 
 **perPage** | **Number**| Number of items to return per page | [optional] 
 **page** | **Number**| Page number | [optional] 

### Return type

[**ResourceLevelVmBillingHistoryResponseModel**](ResourceLevelVmBillingHistoryResponseModel.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getVMSubResourceCosts

> SubResourcesCostsResponseModel getVMSubResourceCosts(vmId, opts)

Retrieve Total Costs and Non Discount Costs for Sub Resources

User will get total costs and non_discount costs of sub resources on a specific Virtual Machine for the specified billing cycle. on a Specific VM for the Specified Billing Cycle

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.BillingApi();
let vmId = 56; // Number | 
let opts = {
  'startDate': "startDate_example", // String | Date should be formatted in YYYY-MM-DDTHH:MM:SS
  'endDate': "endDate_example" // String | Date should be formatted in YYYY-MM-DDTHH:MM:SS
};
apiInstance.getVMSubResourceCosts(vmId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vmId** | **Number**|  | 
 **startDate** | **String**| Date should be formatted in YYYY-MM-DDTHH:MM:SS | [optional] 
 **endDate** | **String**| Date should be formatted in YYYY-MM-DDTHH:MM:SS | [optional] 

### Return type

[**SubResourcesCostsResponseModel**](SubResourcesCostsResponseModel.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getVMSubResourceGraph

> SubResourcesGraphResponseModel getVMSubResourceGraph(vmId, opts)

Retrieve Sub-Resources Historical Cost datapoints of a Virtual

User will receive sub-resources historical cost datapoints for a VM sub resources for a specified billing cycle. This data will include &#39;incurred_bill&#39; graph datapoints. Machine sub resources for a specific billing cycle

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.BillingApi();
let vmId = 56; // Number | 
let opts = {
  'startDate': "startDate_example", // String | Date should be formatted in YYYY-MM-DDTHH:MM:SS
  'endDate': "endDate_example" // String | Date should be formatted in YYYY-MM-DDTHH:MM:SS
};
apiInstance.getVMSubResourceGraph(vmId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vmId** | **Number**|  | 
 **startDate** | **String**| Date should be formatted in YYYY-MM-DDTHH:MM:SS | [optional] 
 **endDate** | **String**| Date should be formatted in YYYY-MM-DDTHH:MM:SS | [optional] 

### Return type

[**SubResourcesGraphResponseModel**](SubResourcesGraphResponseModel.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getVolumeBillingDetails

> ResourceLevelVolumeBillingDetailsResponseModel getVolumeBillingDetails(volumeId, opts)

Retrieve Billing History of a Specific Volume for a specific Billing Cycle

Retrieve billing history of a specific Volume for the specified billing cycle. This data will include &#39;resource_name&#39;, &#39;infrahub_id&#39;, &#39;price_per_hour&#39;, &#39;incurred_bill&#39;, &#39;usage_time&#39;, &#39;non_discounted_price_per_hour&#39;, &#39;non_discounted_bill&#39;.

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.BillingApi();
let volumeId = 56; // Number | 
let opts = {
  'startDate': "startDate_example", // String | Date should be formatted in YYYY-MM-DDTHH:MM:SS
  'endDate': "endDate_example" // String | Date should be formatted in YYYY-MM-DDTHH:MM:SS
};
apiInstance.getVolumeBillingDetails(volumeId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **volumeId** | **Number**|  | 
 **startDate** | **String**| Date should be formatted in YYYY-MM-DDTHH:MM:SS | [optional] 
 **endDate** | **String**| Date should be formatted in YYYY-MM-DDTHH:MM:SS | [optional] 

### Return type

[**ResourceLevelVolumeBillingDetailsResponseModel**](ResourceLevelVolumeBillingDetailsResponseModel.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getVolumeBillingEvents

> ResourceBillingEventsHistoryResponse getVolumeBillingEvents(volumeId, opts)

Retrieve Volume billing events history

User will receive volume billing events history

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.BillingApi();
let volumeId = 56; // Number | 
let opts = {
  'startDate': "startDate_example", // String | Date should be formatted in YYYY-MM-DDTHH:MM:SS
  'endDate': "endDate_example" // String | Date should be formatted in YYYY-MM-DDTHH:MM:SS
};
apiInstance.getVolumeBillingEvents(volumeId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **volumeId** | **Number**|  | 
 **startDate** | **String**| Date should be formatted in YYYY-MM-DDTHH:MM:SS | [optional] 
 **endDate** | **String**| Date should be formatted in YYYY-MM-DDTHH:MM:SS | [optional] 

### Return type

[**ResourceBillingEventsHistoryResponse**](ResourceBillingEventsHistoryResponse.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getVolumeBillingHistory

> ResourceLevelVolumeBillingHistoryResponseModel getVolumeBillingHistory(opts)

Retrieve Billing History of Volume for a specific Billing Cycle

User will receive billing history of volumes for thespecified billing cycle. This data will include &#39;resource_name&#39;, &#39;infrahub_id&#39;, &#39;status&#39;, &#39;incurred_bill&#39;, &#39;usage_time&#39;, &#39;price_per_hour&#39;

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.BillingApi();
let opts = {
  'startDate': "startDate_example", // String | Date should be formatted in YYYY-MM-DDTHH:MM:SS
  'endDate': "endDate_example", // String | Date should be formatted in YYYY-MM-DDTHH:MM:SS
  'search': "search_example", // String | Search by resource \"Name\" or \"ID\"
  'perPage': 56, // Number | Number of items to return per page
  'page': 56 // Number | Page number
};
apiInstance.getVolumeBillingHistory(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startDate** | **String**| Date should be formatted in YYYY-MM-DDTHH:MM:SS | [optional] 
 **endDate** | **String**| Date should be formatted in YYYY-MM-DDTHH:MM:SS | [optional] 
 **search** | **String**| Search by resource \&quot;Name\&quot; or \&quot;ID\&quot; | [optional] 
 **perPage** | **Number**| Number of items to return per page | [optional] 
 **page** | **Number**| Page number | [optional] 

### Return type

[**ResourceLevelVolumeBillingHistoryResponseModel**](ResourceLevelVolumeBillingHistoryResponseModel.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getVolumeBillingHistoryGraph

> ResourceLevelVolumeGraphBillingDetailsResponseModel getVolumeBillingHistoryGraph(volumeId, opts)

Retrieve hourly cost datapoints of a Specific Volume for a specific billing cycle

User will receive hourly cost datapoints for a Volume for a specified billing cycle. This data will include &#39;incurred_bill&#39; graph datapoints.

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.BillingApi();
let volumeId = 56; // Number | 
let opts = {
  'startDate': "startDate_example", // String | Date should be formatted in YYYY-MM-DDTHH:MM:SS
  'endDate': "endDate_example" // String | Date should be formatted in YYYY-MM-DDTHH:MM:SS
};
apiInstance.getVolumeBillingHistoryGraph(volumeId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **volumeId** | **Number**|  | 
 **startDate** | **String**| Date should be formatted in YYYY-MM-DDTHH:MM:SS | [optional] 
 **endDate** | **String**| Date should be formatted in YYYY-MM-DDTHH:MM:SS | [optional] 

### Return type

[**ResourceLevelVolumeGraphBillingDetailsResponseModel**](ResourceLevelVolumeGraphBillingDetailsResponseModel.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listBillingContractHistory

> listBillingContractHistory(opts)

Retrieve Billing History of Contract for a specific Billing Cycle

User will receive billing history of contracts for the specified billing cycle. This data will include &#39;description&#39;, gpu_type&#39;,&#39;infrahub_id&#39;, &#39;status&#39;, &#39;incurred_bill&#39;, &#39;price_per_hour&#39;

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.BillingApi();
let opts = {
  'startDate': "startDate_example", // String | Date should be formatted in YYYY-MM-DDTHH:MM:SS
  'endDate': "endDate_example", // String | Date should be formatted in YYYY-MM-DDTHH:MM:SS
  'search': "search_example" // String | Search by Contract \"Description\" or \"ID\"
};
apiInstance.listBillingContractHistory(opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startDate** | **String**| Date should be formatted in YYYY-MM-DDTHH:MM:SS | [optional] 
 **endDate** | **String**| Date should be formatted in YYYY-MM-DDTHH:MM:SS | [optional] 
 **search** | **String**| Search by Contract \&quot;Description\&quot; or \&quot;ID\&quot; | [optional] 

### Return type

null (empty response body)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listBucketBillingHistory

> ResourceLevelBucketBillingHistoryResponseModel listBucketBillingHistory(opts)

Retrieve Billing History of a Bucket for a specific Billing Cycle

User will receive billing history of buckets for thespecified billing cycle. This data will include &#39;resource_name&#39;, &#39;infrahub_id&#39;, &#39;status&#39;, &#39;incurred_bill&#39;, &#39;usage_time&#39;, &#39;price_per_hour&#39;

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.BillingApi();
let opts = {
  'startDate': "startDate_example", // String | Date should be formatted in YYYY-MM-DDTHH:MM:SS
  'endDate': "endDate_example", // String | Date should be formatted in YYYY-MM-DDTHH:MM:SS
  'search': "search_example", // String | Search by resource \"Name\" or \"ID\"
  'perPage': 56, // Number | Number of items to return per page
  'page': 56 // Number | Page number
};
apiInstance.listBucketBillingHistory(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startDate** | **String**| Date should be formatted in YYYY-MM-DDTHH:MM:SS | [optional] 
 **endDate** | **String**| Date should be formatted in YYYY-MM-DDTHH:MM:SS | [optional] 
 **search** | **String**| Search by resource \&quot;Name\&quot; or \&quot;ID\&quot; | [optional] 
 **perPage** | **Number**| Number of items to return per page | [optional] 
 **page** | **Number**| Page number | [optional] 

### Return type

[**ResourceLevelBucketBillingHistoryResponseModel**](ResourceLevelBucketBillingHistoryResponseModel.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listClustersBillingHistory

> ResourceLevelClusterBillingHistoryResponseModel listClustersBillingHistory(opts)

Retrieve Billing History of Clusters for a specific Billing Cycle

User will receive billing history of clusters for the specified billing cycle. This data will include &#39;resource_name&#39;, &#39;infrahub_id&#39;, &#39;status&#39;, &#39;incurred_bill&#39;, &#39;usage_time&#39;, &#39;price_per_hour&#39;

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.BillingApi();
let opts = {
  'startDate': "startDate_example", // String | Date should be formatted in YYYY-MM-DDTHH:MM:SS
  'endDate': "endDate_example", // String | Date should be formatted in YYYY-MM-DDTHH:MM:SS
  'search': "search_example", // String | Search by resource \"Name\" or \"ID\"
  'perPage': 56, // Number | Number of items to return per page
  'page': 56 // Number | Page number
};
apiInstance.listClustersBillingHistory(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startDate** | **String**| Date should be formatted in YYYY-MM-DDTHH:MM:SS | [optional] 
 **endDate** | **String**| Date should be formatted in YYYY-MM-DDTHH:MM:SS | [optional] 
 **search** | **String**| Search by resource \&quot;Name\&quot; or \&quot;ID\&quot; | [optional] 
 **perPage** | **Number**| Number of items to return per page | [optional] 
 **page** | **Number**| Page number | [optional] 

### Return type

[**ResourceLevelClusterBillingHistoryResponseModel**](ResourceLevelClusterBillingHistoryResponseModel.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listOrgNotificationThresholds

> OrganizationThresholdsResponse listOrgNotificationThresholds()

GET: All Thresholds for Organization

Retrieve all the notification thresholds for an organization.

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.BillingApi();
apiInstance.listOrgNotificationThresholds().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**OrganizationThresholdsResponse**](OrganizationThresholdsResponse.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listServerlessInferenceBillingHistory

> TokenBasedBillingHistoryResponse listServerlessInferenceBillingHistory(opts)

Retrieve Billing History of serverless inference for a specific Billing Cycle

User will receive billing history of serverless_inference for the specified billing cycle.

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.BillingApi();
let opts = {
  'startDate': "startDate_example", // String | Date should be formatted in YYYY-MM-DDTHH:MM:SS
  'endDate': "endDate_example", // String | Date should be formatted in YYYY-MM-DDTHH:MM:SS
  'search': "search_example", // String | Search by resource \"Name\" or \"ID\"
  'perPage': 56, // Number | Number of items to return per page
  'page': 56 // Number | Page number
};
apiInstance.listServerlessInferenceBillingHistory(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startDate** | **String**| Date should be formatted in YYYY-MM-DDTHH:MM:SS | [optional] 
 **endDate** | **String**| Date should be formatted in YYYY-MM-DDTHH:MM:SS | [optional] 
 **search** | **String**| Search by resource \&quot;Name\&quot; or \&quot;ID\&quot; | [optional] 
 **perPage** | **Number**| Number of items to return per page | [optional] 
 **page** | **Number**| Page number | [optional] 

### Return type

[**TokenBasedBillingHistoryResponse**](TokenBasedBillingHistoryResponse.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listSnapshotBillingHistory

> ResourceLevelVolumeBillingHistoryResponseModel listSnapshotBillingHistory(opts)

Retrieve Billing History of Snapshot for a specific Billing Cycle

User will receive billing history of snapshots for thespecified billing cycle. This data will include &#39;resource_name&#39;, &#39;infrahub_id&#39;, &#39;status&#39;, &#39;incurred_bill&#39;, &#39;usage_time&#39;, &#39;price_per_hour&#39;

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.BillingApi();
let opts = {
  'startDate': "startDate_example", // String | Date should be formatted in YYYY-MM-DDTHH:MM:SS
  'endDate': "endDate_example", // String | Date should be formatted in YYYY-MM-DDTHH:MM:SS
  'search': "search_example", // String | Search by resource \"Name\" or \"ID\"
  'perPage': 56, // Number | Number of items to return per page
  'page': 56 // Number | Page number
};
apiInstance.listSnapshotBillingHistory(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startDate** | **String**| Date should be formatted in YYYY-MM-DDTHH:MM:SS | [optional] 
 **endDate** | **String**| Date should be formatted in YYYY-MM-DDTHH:MM:SS | [optional] 
 **search** | **String**| Search by resource \&quot;Name\&quot; or \&quot;ID\&quot; | [optional] 
 **perPage** | **Number**| Number of items to return per page | [optional] 
 **page** | **Number**| Page number | [optional] 

### Return type

[**ResourceLevelVolumeBillingHistoryResponseModel**](ResourceLevelVolumeBillingHistoryResponseModel.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


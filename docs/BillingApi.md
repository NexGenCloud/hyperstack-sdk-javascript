# HyperstackApi.BillingApi

All URIs are relative to *https://infrahub-api.nexgencloud.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getLastDayCost**](BillingApi.md#getLastDayCost) | **GET** /billing/billing/last-day-cost | GET: Last Day Cost
[**getOrganizationThreshold**](BillingApi.md#getOrganizationThreshold) | **GET** /billing/billing/threshold | GET: All Thresholds for Organization
[**getUsage2**](BillingApi.md#getUsage2) | **GET** /billing/billing/usage | GET: Billing usage
[**getUserBillingBucketDetailsGraph**](BillingApi.md#getUserBillingBucketDetailsGraph) | **GET** /billing/billing/history/bucket/{bucket_id}/graph | Retrieve hourly cost datapoints of a Specific Bucket for a specific billing cycle
[**getUserBillingClusterDetailsGraph**](BillingApi.md#getUserBillingClusterDetailsGraph) | **GET** /billing/billing/history/cluster/{cluster_id}/graph | Retrieve hourly cost datapoints of a specific Cluster for a specific billing cycle
[**getUserBillingDataSynthesisDetailsGraph**](BillingApi.md#getUserBillingDataSynthesisDetailsGraph) | **GET** /billing/billing/history/data_synthesis/{resource_id}/graph | Retrieve hourly cost datapoints of a Specific Data Synthesis for a specific
[**getUserBillingFineTuningDetailsGraph**](BillingApi.md#getUserBillingFineTuningDetailsGraph) | **GET** /billing/billing/history/fine_tuning/{resource_id}/graph | Retrieve hourly cost datapoints of a Specific Fine Tuning for a specific billing cycle
[**getUserBillingHistory2**](BillingApi.md#getUserBillingHistory2) | **GET** /billing/billing/history | Retrieve Billing History for a specific Billing Cycle
[**getUserBillingHistoryBucket2**](BillingApi.md#getUserBillingHistoryBucket2) | **GET** /billing/billing/history/bucket | Retrieve Billing History of Volume for a specific Billing Cycle
[**getUserBillingHistoryBucketDetails**](BillingApi.md#getUserBillingHistoryBucketDetails) | **GET** /billing/billing/history/bucket/{bucket_id} | Retrieve Billing History of a Specific Snapshot for a specific Billing Cycle
[**getUserBillingHistoryCluster**](BillingApi.md#getUserBillingHistoryCluster) | **GET** /billing/billing/history/cluster | Retrieve Billing History of Clusters for a specific Billing Cycle
[**getUserBillingHistoryClusterDetails**](BillingApi.md#getUserBillingHistoryClusterDetails) | **GET** /billing/billing/history/cluster/{cluster_id} | Retrieve Billing History of a Specific Cluster for a specific Billing Cycle
[**getUserBillingHistoryContract**](BillingApi.md#getUserBillingHistoryContract) | **GET** /billing/billing/history/contract | Retrieve Billing History of Contract for a specific Billing Cycle
[**getUserBillingHistoryDataSynthesis**](BillingApi.md#getUserBillingHistoryDataSynthesis) | **GET** /billing/billing/history/data_synthesis | Retrieve Billing History of data synthesis for a specific Billing Cycle
[**getUserBillingHistoryDataSynthesisDetails**](BillingApi.md#getUserBillingHistoryDataSynthesisDetails) | **GET** /billing/billing/history/data_synthesis/{resource_id} | 
[**getUserBillingHistoryFineTuning**](BillingApi.md#getUserBillingHistoryFineTuning) | **GET** /billing/billing/history/fine_tuning | Retrieve Billing History of model evaluation for a specific Billing Cycle
[**getUserBillingHistoryFineTuningDetails**](BillingApi.md#getUserBillingHistoryFineTuningDetails) | **GET** /billing/billing/history/fine_tuning/{resource_id} | Retrieve Billing History of a Specific Fine Tuning for a specific Billing Cycle
[**getUserBillingHistoryModelEvaluation**](BillingApi.md#getUserBillingHistoryModelEvaluation) | **GET** /billing/billing/history/model_evaluation | Retrieve Billing History of model evaluation for a specific Billing Cycle
[**getUserBillingHistoryModelEvaluationDetails**](BillingApi.md#getUserBillingHistoryModelEvaluationDetails) | **GET** /billing/billing/history/model_evaluation/{resource_id} | 
[**getUserBillingHistoryServerlessInference**](BillingApi.md#getUserBillingHistoryServerlessInference) | **GET** /billing/billing/history/serverless_inference | Retrieve Billing History of serverless inference for a specific Billing Cycle
[**getUserBillingHistoryServerlessInferenceDetails**](BillingApi.md#getUserBillingHistoryServerlessInferenceDetails) | **GET** /billing/billing/history/serverless_inference/{resource_id} | 
[**getUserBillingHistorySnapshot**](BillingApi.md#getUserBillingHistorySnapshot) | **GET** /billing/billing/history/snapshot | Retrieve Billing History of Snapshot for a specific Billing Cycle
[**getUserBillingHistorySnapshotDetails**](BillingApi.md#getUserBillingHistorySnapshotDetails) | **GET** /billing/billing/history/snapshot/{snapshot_id} | Retrieve Billing History of a Specific Snapshot for a specific Billing Cycle
[**getUserBillingHistoryVm2**](BillingApi.md#getUserBillingHistoryVm2) | **GET** /billing/billing/history/virtual-machine | Retrieve Billing History of Virtual Machine for a specific Billing Cycle
[**getUserBillingHistoryVmDetails2**](BillingApi.md#getUserBillingHistoryVmDetails2) | **GET** /billing/billing/history/virtual-machine/{vm_id} | Retrieve Billing History of a Specific Virtual Machine for a specific Billing Cycle
[**getUserBillingHistoryVmSubResourceGraph2**](BillingApi.md#getUserBillingHistoryVmSubResourceGraph2) | **GET** /billing/billing/virtual-machine/{vm_id}/sub-resource/graph | Retrieve Sub-Resources Historical Cost datapoints of a Virtual
[**getUserBillingHistoryVmTotalCosts**](BillingApi.md#getUserBillingHistoryVmTotalCosts) | **GET** /billing/billing/virtual-machine/{vm_id}/sub-resource | Retrieve Total Costs and Non Discount Costs for Sub Resources
[**getUserBillingHistoryVolume2**](BillingApi.md#getUserBillingHistoryVolume2) | **GET** /billing/billing/history/volume | Retrieve Billing History of Volume for a specific Billing Cycle
[**getUserBillingHistoryVolumeDetails2**](BillingApi.md#getUserBillingHistoryVolumeDetails2) | **GET** /billing/billing/history/volume/{volume_id} | Retrieve Billing History of a Specific Volume for a specific Billing Cycle
[**getUserBillingModelEvaluationDetailsGraph**](BillingApi.md#getUserBillingModelEvaluationDetailsGraph) | **GET** /billing/billing/history/model_evaluation/{resource_id}/graph | Retrieve hourly cost datapoints of a Specific Model Evaluation for a specific
[**getUserBillingServerlessInferenceDetailsGraph**](BillingApi.md#getUserBillingServerlessInferenceDetailsGraph) | **GET** /billing/billing/history/serverless_inference/{resource_id}/graph | Retrieve hourly cost datapoints of a Specific Serverless Inference for a specific
[**getUserBillingSnapshotDetailsGraph**](BillingApi.md#getUserBillingSnapshotDetailsGraph) | **GET** /billing/billing/history/snapshot/{snapshot_id}/graph | Retrieve hourly cost datapoints of a Specific Snapshot for a specific billing cycle
[**getUserBillingVmDetailsGraph2**](BillingApi.md#getUserBillingVmDetailsGraph2) | **GET** /billing/billing/history/virtual-machine/{vm_id}/graph | Retrieve hourly cost datapoints of a Specific Virtual Machine for a specific billing cycle
[**getUserBillingVolumeDetailsGraph**](BillingApi.md#getUserBillingVolumeDetailsGraph) | **GET** /billing/billing/history/volume/{volume_id}/graph | Retrieve hourly cost datapoints of a Specific Volume for a specific billing cycle
[**getUserVmBillingEvents**](BillingApi.md#getUserVmBillingEvents) | **GET** /billing/billing/virtual-machine/{vm_id}/billing-events | Retrieve VM billing events history
[**getUserVolumeBillingEvents**](BillingApi.md#getUserVolumeBillingEvents) | **GET** /billing/billing/volume/{volume_id}/billing-events | Retrieve Volume billing events history
[**putOrganizationThreshold**](BillingApi.md#putOrganizationThreshold) | **PUT** /billing/billing/threshold/{threshold_id} | Update: Subscribe or Unsubscribe Notification Threshold



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


## getOrganizationThreshold

> OrganizationThresholdsResponse getOrganizationThreshold()

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
apiInstance.getOrganizationThreshold().then((data) => {
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


## getUsage2

> BillingMetricesResponse getUsage2(opts)

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
apiInstance.getUsage2(opts).then((data) => {
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


## getUserBillingBucketDetailsGraph

> ResourceLevelGraphBillingDetailsBucket getUserBillingBucketDetailsGraph(bucketId, opts)

Retrieve hourly cost datapoints of a Specific Bucket for a specific billing cycle

User will recieve hourly cost datapoints for a Bucket for a specified billing cycle. This data will include &#39;incurred_bill&#39; graph datapoints.

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
apiInstance.getUserBillingBucketDetailsGraph(bucketId, opts).then((data) => {
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


## getUserBillingClusterDetailsGraph

> ResourceLevelClusterGraphBillingDetailsResponseModel getUserBillingClusterDetailsGraph(clusterId, opts)

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
apiInstance.getUserBillingClusterDetailsGraph(clusterId, opts).then((data) => {
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


## getUserBillingDataSynthesisDetailsGraph

> DataSynthesisBillingHistoryDetailsResponseSchema getUserBillingDataSynthesisDetailsGraph(resourceId, opts)

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
apiInstance.getUserBillingDataSynthesisDetailsGraph(resourceId, opts).then((data) => {
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


## getUserBillingFineTuningDetailsGraph

> ResourceLevelVolumeGraphBillingDetailsResponseModel getUserBillingFineTuningDetailsGraph(resourceId, opts)

Retrieve hourly cost datapoints of a Specific Fine Tuning for a specific billing cycle

User will recieve hourly cost datapoints for a Fine Tunings for a specified billing cycle. This data will include &#39;incurred_bill&#39; graph datapoints.

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
apiInstance.getUserBillingFineTuningDetailsGraph(resourceId, opts).then((data) => {
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


## getUserBillingHistory2

> OrganizationLevelBillingHistoryResponseModel getUserBillingHistory2(opts)

Retrieve Billing History for a specific Billing Cycle

User will recieve billing history for the specified billing cycle. This data will include &#39;incurred_bill&#39;, &#39;non_discounted_bill&#39;, &#39;vm_cost&#39;, &#39;volume_cost&#39;

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
apiInstance.getUserBillingHistory2(opts).then((data) => {
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


## getUserBillingHistoryBucket2

> ResourceLevelBucketBillingHistoryResponseModel getUserBillingHistoryBucket2(opts)

Retrieve Billing History of Volume for a specific Billing Cycle

User will recieve billing history of buckets for thespecified billing cycle. This data will include &#39;resource_name&#39;, &#39;infrahub_id&#39;, &#39;status&#39;, &#39;incurred_bill&#39;, &#39;usage_time&#39;, &#39;price_per_hour&#39;

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
apiInstance.getUserBillingHistoryBucket2(opts).then((data) => {
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


## getUserBillingHistoryBucketDetails

> ResourceLevelBucketBillingDetailsResponseModel getUserBillingHistoryBucketDetails(bucketId, opts)

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
apiInstance.getUserBillingHistoryBucketDetails(bucketId, opts).then((data) => {
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


## getUserBillingHistoryCluster

> ResourceLevelClusterBillingHistoryResponseModel getUserBillingHistoryCluster(opts)

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
apiInstance.getUserBillingHistoryCluster(opts).then((data) => {
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


## getUserBillingHistoryClusterDetails

> ResourceLevelClusterBillingDetailsResponseModel getUserBillingHistoryClusterDetails(clusterId, opts)

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
apiInstance.getUserBillingHistoryClusterDetails(clusterId, opts).then((data) => {
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


## getUserBillingHistoryContract

> getUserBillingHistoryContract(opts)

Retrieve Billing History of Contract for a specific Billing Cycle

User will recieve billing history of contracts for the specified billing cycle. This data will include &#39;description&#39;, gpu_type&#39;,&#39;infrahub_id&#39;, &#39;status&#39;, &#39;incurred_bill&#39;, &#39;price_per_hour&#39;

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
apiInstance.getUserBillingHistoryContract(opts).then(() => {
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


## getUserBillingHistoryDataSynthesis

> TokenBasedBillingHistoryResponse getUserBillingHistoryDataSynthesis(opts)

Retrieve Billing History of data synthesis for a specific Billing Cycle

User will recieve billing history of data_synthesis for the specified billing cycle.

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
apiInstance.getUserBillingHistoryDataSynthesis(opts).then((data) => {
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


## getUserBillingHistoryDataSynthesisDetails

> DataSynthesisBillingHistoryDetailsResponseSchema getUserBillingHistoryDataSynthesisDetails(resourceId, opts)



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
apiInstance.getUserBillingHistoryDataSynthesisDetails(resourceId, opts).then((data) => {
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


## getUserBillingHistoryFineTuning

> WorkloadBillingHistoryResponse getUserBillingHistoryFineTuning(opts)

Retrieve Billing History of model evaluation for a specific Billing Cycle

User will recieve billing history of fine_tuning for the specified billing cycle.

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
apiInstance.getUserBillingHistoryFineTuning(opts).then((data) => {
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


## getUserBillingHistoryFineTuningDetails

> ResourceLevelVolumeBillingDetailsResponseModel getUserBillingHistoryFineTuningDetails(resourceId, opts)

Retrieve Billing History of a Specific Fine Tuning for a specific Billing Cycle

Retrieve billing history of a specific Fine tunning for the specified billing cycle. This data will include &#39;resource_name&#39;, &#39;infrahub_id&#39;, &#39;price_per_hour&#39;, &#39;incurred_bill&#39;, &#39;usage_time&#39;, &#39;non_discounted_price_per_hour&#39;, &#39;non_discounted_bill&#39;.

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
apiInstance.getUserBillingHistoryFineTuningDetails(resourceId, opts).then((data) => {
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


## getUserBillingHistoryModelEvaluation

> TokenBasedBillingHistoryResponse getUserBillingHistoryModelEvaluation(opts)

Retrieve Billing History of model evaluation for a specific Billing Cycle

User will recieve billing history of model_evaluation for the specified billing cycle.

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
apiInstance.getUserBillingHistoryModelEvaluation(opts).then((data) => {
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


## getUserBillingHistoryModelEvaluationDetails

> ModelEvaluationBillingHistoryDetailsResponseSchema getUserBillingHistoryModelEvaluationDetails(resourceId, opts)



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
apiInstance.getUserBillingHistoryModelEvaluationDetails(resourceId, opts).then((data) => {
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


## getUserBillingHistoryServerlessInference

> TokenBasedBillingHistoryResponse getUserBillingHistoryServerlessInference(opts)

Retrieve Billing History of serverless inference for a specific Billing Cycle

User will recieve billing history of serverless_inference for the specified billing cycle.

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
apiInstance.getUserBillingHistoryServerlessInference(opts).then((data) => {
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


## getUserBillingHistoryServerlessInferenceDetails

> ServerlessInferencedBillingHistoryDetailsResponseSchema getUserBillingHistoryServerlessInferenceDetails(resourceId, opts)



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
apiInstance.getUserBillingHistoryServerlessInferenceDetails(resourceId, opts).then((data) => {
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


## getUserBillingHistorySnapshot

> ResourceLevelVolumeBillingHistoryResponseModel getUserBillingHistorySnapshot(opts)

Retrieve Billing History of Snapshot for a specific Billing Cycle

User will recieve billing history of snapshots for thespecified billing cycle. This data will include &#39;resource_name&#39;, &#39;infrahub_id&#39;, &#39;status&#39;, &#39;incurred_bill&#39;, &#39;usage_time&#39;, &#39;price_per_hour&#39;

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
apiInstance.getUserBillingHistorySnapshot(opts).then((data) => {
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


## getUserBillingHistorySnapshotDetails

> ResourceLevelVolumeBillingDetailsResponseModel getUserBillingHistorySnapshotDetails(snapshotId, opts)

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
apiInstance.getUserBillingHistorySnapshotDetails(snapshotId, opts).then((data) => {
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


## getUserBillingHistoryVm2

> ResourceLevelVmBillingHistoryResponseModel getUserBillingHistoryVm2(opts)

Retrieve Billing History of Virtual Machine for a specific Billing Cycle

User will recieve billing history of virtual machine for the specified billing cycle. This data will include &#39;resource_name&#39;, &#39;infrahub_id&#39;, &#39;status&#39;, &#39;incurred_bill&#39;, &#39;usage_time&#39;, &#39;price_per_hour&#39;

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
apiInstance.getUserBillingHistoryVm2(opts).then((data) => {
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


## getUserBillingHistoryVmDetails2

> ResourceLevelVMBillingDetailsResponseModel getUserBillingHistoryVmDetails2(vmId, opts)

Retrieve Billing History of a Specific Virtual Machine for a specific Billing Cycle

User will recieve billing history of a specific Virtual Machine for the specified billing cycle. This data will include &#39;resource_name&#39;, &#39;infrahub_id&#39;, &#39;price_per_hour&#39;, &#39;non_discounted_price_per_hour&#39;, &#39;incurred_bill&#39;, &#39;non_discounted_bill&#39;, &#39;usage_time&#39;, &#39;usage_time_ACTIVE&#39;, &#39;usage_time_SHUTOFF&#39;, &#39;usage_time_HIBERNATED&#39;

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
apiInstance.getUserBillingHistoryVmDetails2(vmId, opts).then((data) => {
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


## getUserBillingHistoryVmSubResourceGraph2

> SubResourcesGraphResponseModel getUserBillingHistoryVmSubResourceGraph2(vmId, opts)

Retrieve Sub-Resources Historical Cost datapoints of a Virtual

User will recieve sub-resources historical cost datapoints for a VM sub resources for a specified billing cycle. This data will include &#39;incurred_bill&#39; graph datapoints. Machine sub resources for a specific billing cycle

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
apiInstance.getUserBillingHistoryVmSubResourceGraph2(vmId, opts).then((data) => {
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


## getUserBillingHistoryVmTotalCosts

> SubResourcesCostsResponseModel getUserBillingHistoryVmTotalCosts(vmId, opts)

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
apiInstance.getUserBillingHistoryVmTotalCosts(vmId, opts).then((data) => {
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


## getUserBillingHistoryVolume2

> ResourceLevelVolumeBillingHistoryResponseModel getUserBillingHistoryVolume2(opts)

Retrieve Billing History of Volume for a specific Billing Cycle

User will recieve billing history of volumes for thespecified billing cycle. This data will include &#39;resource_name&#39;, &#39;infrahub_id&#39;, &#39;status&#39;, &#39;incurred_bill&#39;, &#39;usage_time&#39;, &#39;price_per_hour&#39;

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
apiInstance.getUserBillingHistoryVolume2(opts).then((data) => {
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


## getUserBillingHistoryVolumeDetails2

> ResourceLevelVolumeBillingDetailsResponseModel getUserBillingHistoryVolumeDetails2(volumeId, opts)

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
apiInstance.getUserBillingHistoryVolumeDetails2(volumeId, opts).then((data) => {
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


## getUserBillingModelEvaluationDetailsGraph

> ModelEvaluationBillingHistoryDetailsResponseSchema getUserBillingModelEvaluationDetailsGraph(resourceId, opts)

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
apiInstance.getUserBillingModelEvaluationDetailsGraph(resourceId, opts).then((data) => {
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


## getUserBillingServerlessInferenceDetailsGraph

> ServerlessInferencedBillingHistoryDetailsResponseSchema getUserBillingServerlessInferenceDetailsGraph(resourceId, opts)

Retrieve hourly cost datapoints of a Specific Serverless Inference for a specific

User will recieve hourly cost datapoints for a serverles inference for a specified billing cycle. This data will include &#39;incurred_bill&#39; graph datapoints. billing cycle

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
apiInstance.getUserBillingServerlessInferenceDetailsGraph(resourceId, opts).then((data) => {
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


## getUserBillingSnapshotDetailsGraph

> ResourceLevelVolumeGraphBillingDetailsResponseModel getUserBillingSnapshotDetailsGraph(snapshotId, opts)

Retrieve hourly cost datapoints of a Specific Snapshot for a specific billing cycle

User will recieve hourly cost datapoints for a Snapshot for a specified billing cycle. This data will include &#39;incurred_bill&#39; graph datapoints.

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
apiInstance.getUserBillingSnapshotDetailsGraph(snapshotId, opts).then((data) => {
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


## getUserBillingVmDetailsGraph2

> ResourceLevelVmGraphBillingDetailsResponseModel getUserBillingVmDetailsGraph2(vmId, opts)

Retrieve hourly cost datapoints of a Specific Virtual Machine for a specific billing cycle

User will recieve hourly cost datapoints for a VM for a specified billing cycle. This data will include &#39;incurred_bill&#39; graph datapoints.

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
apiInstance.getUserBillingVmDetailsGraph2(vmId, opts).then((data) => {
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


## getUserBillingVolumeDetailsGraph

> ResourceLevelVolumeGraphBillingDetailsResponseModel getUserBillingVolumeDetailsGraph(volumeId, opts)

Retrieve hourly cost datapoints of a Specific Volume for a specific billing cycle

User will recieve hourly cost datapoints for a Volume for a specified billing cycle. This data will include &#39;incurred_bill&#39; graph datapoints.

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
apiInstance.getUserBillingVolumeDetailsGraph(volumeId, opts).then((data) => {
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


## getUserVmBillingEvents

> ResourceBillingEventsHistoryResponse getUserVmBillingEvents(vmId, opts)

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
apiInstance.getUserVmBillingEvents(vmId, opts).then((data) => {
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


## getUserVolumeBillingEvents

> ResourceBillingEventsHistoryResponse getUserVolumeBillingEvents(volumeId, opts)

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
apiInstance.getUserVolumeBillingEvents(volumeId, opts).then((data) => {
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


## putOrganizationThreshold

> OrganizationThresholdUpdateResponse putOrganizationThreshold(thresholdId, payload)

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
apiInstance.putOrganizationThreshold(thresholdId, payload).then((data) => {
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


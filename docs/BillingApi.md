# HyperstackApi.BillingApi

All URIs are relative to *https://infrahub-api.nexgencloud.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAllThresholdsForOrganization**](BillingApi.md#getAllThresholdsForOrganization) | **GET** /billing/billing/threshold | GET: All Thresholds for Organization
[**getBillingUsage**](BillingApi.md#getBillingUsage) | **GET** /billing/billing/usage | GET: Billing usage
[**getLastDayCost**](BillingApi.md#getLastDayCost) | **GET** /billing/billing/last-day-cost | GET: Last Day Cost
[**retrieveBillingHistoryForASpecificBillingCycle**](BillingApi.md#retrieveBillingHistoryForASpecificBillingCycle) | **GET** /billing/billing/history | Retrieve Billing History for a specific Billing Cycle
[**retrieveBillingHistoryOfASpecificSnapshotForASpecificBillingCycle**](BillingApi.md#retrieveBillingHistoryOfASpecificSnapshotForASpecificBillingCycle) | **GET** /billing/billing/history/snapshot/{snapshot_id} | Retrieve Billing History of a Specific Snapshot for a specific Billing Cycle
[**retrieveBillingHistoryOfASpecificVirtualMachineForASpecificBillingCycle**](BillingApi.md#retrieveBillingHistoryOfASpecificVirtualMachineForASpecificBillingCycle) | **GET** /billing/billing/history/virtual-machine/{vm_id} | Retrieve Billing History of a Specific Virtual Machine for a specific Billing Cycle
[**retrieveBillingHistoryOfASpecificVolumeForASpecificBillingCycle**](BillingApi.md#retrieveBillingHistoryOfASpecificVolumeForASpecificBillingCycle) | **GET** /billing/billing/history/volume/{volume_id} | Retrieve Billing History of a Specific Volume for a specific Billing Cycle
[**retrieveBillingHistoryOfContractForASpecificBillingCycle**](BillingApi.md#retrieveBillingHistoryOfContractForASpecificBillingCycle) | **GET** /billing/billing/history/contract | Retrieve Billing History of Contract for a specific Billing Cycle
[**retrieveBillingHistoryOfSnapshotForASpecificBillingCycle**](BillingApi.md#retrieveBillingHistoryOfSnapshotForASpecificBillingCycle) | **GET** /billing/billing/history/snapshot | Retrieve Billing History of Snapshot for a specific Billing Cycle
[**retrieveBillingHistoryOfVirtualMachineForASpecificBillingCycle**](BillingApi.md#retrieveBillingHistoryOfVirtualMachineForASpecificBillingCycle) | **GET** /billing/billing/history/virtual-machine | Retrieve Billing History of Virtual Machine for a specific Billing Cycle
[**retrieveBillingHistoryOfVolumeForASpecificBillingCycle**](BillingApi.md#retrieveBillingHistoryOfVolumeForASpecificBillingCycle) | **GET** /billing/billing/history/volume | Retrieve Billing History of Volume for a specific Billing Cycle
[**retrieveHourlyCostDatapointsOfASpecificSnapshotForASpecificBillingCycle**](BillingApi.md#retrieveHourlyCostDatapointsOfASpecificSnapshotForASpecificBillingCycle) | **GET** /billing/billing/history/snapshot/{snapshot_id}/graph | Retrieve hourly cost datapoints of a Specific Snapshot for a specific billing cycle
[**retrieveHourlyCostDatapointsOfASpecificVirtualMachineForASpecificBillingCycle**](BillingApi.md#retrieveHourlyCostDatapointsOfASpecificVirtualMachineForASpecificBillingCycle) | **GET** /billing/billing/history/virtual-machine/{vm_id}/graph | Retrieve hourly cost datapoints of a Specific Virtual Machine for a specific billing cycle
[**retrieveHourlyCostDatapointsOfASpecificVolumeForASpecificBillingCycle**](BillingApi.md#retrieveHourlyCostDatapointsOfASpecificVolumeForASpecificBillingCycle) | **GET** /billing/billing/history/volume/{volume_id}/graph | Retrieve hourly cost datapoints of a Specific Volume for a specific billing cycle
[**retrieveSubResourcesHistoricalCostDatapointsOfAVirtual**](BillingApi.md#retrieveSubResourcesHistoricalCostDatapointsOfAVirtual) | **GET** /billing/billing/virtual-machine/{vm_id}/sub-resource/graph | Retrieve Sub-Resources Historical Cost datapoints of a Virtual
[**retrieveTotalCostsAndNonDiscountCostsForSubResources**](BillingApi.md#retrieveTotalCostsAndNonDiscountCostsForSubResources) | **GET** /billing/billing/virtual-machine/{vm_id}/sub-resource | Retrieve Total Costs and Non Discount Costs for Sub Resources
[**retrieveVmBillingEventsHistory**](BillingApi.md#retrieveVmBillingEventsHistory) | **GET** /billing/billing/virtual-machine/{vm_id}/billing-events | Retrieve VM billing events history
[**retrieveVolumeBillingEventsHistory**](BillingApi.md#retrieveVolumeBillingEventsHistory) | **GET** /billing/billing/volume/{volume_id}/billing-events | Retrieve Volume billing events history
[**updateSubscribeOrUnsubscribeNotificationThreshold**](BillingApi.md#updateSubscribeOrUnsubscribeNotificationThreshold) | **PUT** /billing/billing/threshold/{threshold_id} | Update: Subscribe or Unsubscribe Notification Threshold



## getAllThresholdsForOrganization

> Organizationthresholdsresponse getAllThresholdsForOrganization()

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
// Configure API key authorization: accessToken
let accessToken = defaultClient.authentications['accessToken'];
accessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//accessToken.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.BillingApi();
apiInstance.getAllThresholdsForOrganization().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**Organizationthresholdsresponse**](Organizationthresholdsresponse.md)

### Authorization

[apiKey](../README.md#apiKey), [accessToken](../README.md#accessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getBillingUsage

> Billingmetricesresponse getBillingUsage(opts)

GET: Billing usage

Retrieve active billing metrics for the organization&#39;s resources, including pricing, uptime, and total cost. Returns usage details for each active resource by defualt(&#x60;deleted&#x3D;false&#x60; will return active resources). Additionally, adding &#x60;deleted&#x3D;true&#x60; in query parameter will return inactive resources. For additional information on view usage costs for all resources, [**click here**](https://infrahub-doc.nexgencloud.com/docs/billing-and-payment/billing-features#view-usage-costs-for-all-resources)

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';
// Configure API key authorization: accessToken
let accessToken = defaultClient.authentications['accessToken'];
accessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//accessToken.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.BillingApi();
let opts = {
  'deleted': "deleted_example", // String | `true` will return inactive resources and `false` will return active resources. By defualt(`deleted=false`)
  'environment': "environment_example" // String | Filter resources by environment ID or Name
};
apiInstance.getBillingUsage(opts).then((data) => {
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

[**Billingmetricesresponse**](Billingmetricesresponse.md)

### Authorization

[apiKey](../README.md#apiKey), [accessToken](../README.md#accessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getLastDayCost

> Lastdaycostresponse getLastDayCost()

GET: Last Day Cost

Retrieve the previous day&#39;s costs for instances, volumes, and clusters. Returns a breakdown of the costs and the total cost for the last day. For additional information on Retrieve Previous Day Usage Costs, [**click here**](https://infrahub-doc.nexgencloud.com/docs/api-reference/billing-resources/last-day-usage/)

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';
// Configure API key authorization: accessToken
let accessToken = defaultClient.authentications['accessToken'];
accessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//accessToken.apiKeyPrefix = 'Token';

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

[**Lastdaycostresponse**](Lastdaycostresponse.md)

### Authorization

[apiKey](../README.md#apiKey), [accessToken](../README.md#accessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## retrieveBillingHistoryForASpecificBillingCycle

> OrganizationLevelBillingHistoryResponseModel retrieveBillingHistoryForASpecificBillingCycle(opts)

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
// Configure API key authorization: accessToken
let accessToken = defaultClient.authentications['accessToken'];
accessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//accessToken.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.BillingApi();
let opts = {
  'startDate': "startDate_example", // String | Date should be formatted in YYYY-MM-DDTHH:MM:SS
  'endDate': "endDate_example", // String | Date should be formatted in YYYY-MM-DDTHH:MM:SS
  'graph': "graph_example" // String | Set this value to \"true\" for getting graph value
};
apiInstance.retrieveBillingHistoryForASpecificBillingCycle(opts).then((data) => {
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

[apiKey](../README.md#apiKey), [accessToken](../README.md#accessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## retrieveBillingHistoryOfASpecificSnapshotForASpecificBillingCycle

> ResourceLevelVolumeBillingDetailsResponseModel retrieveBillingHistoryOfASpecificSnapshotForASpecificBillingCycle(snapshotId, opts)

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
// Configure API key authorization: accessToken
let accessToken = defaultClient.authentications['accessToken'];
accessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//accessToken.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.BillingApi();
let snapshotId = 56; // Number | 
let opts = {
  'startDate': "startDate_example", // String | Datetime should be formatted in YYYY-MM-DDTHH:MM:SS
  'endDate': "endDate_example" // String | Datetime should be formatted in YYYY-MM-DDTHH:MM:SS
};
apiInstance.retrieveBillingHistoryOfASpecificSnapshotForASpecificBillingCycle(snapshotId, opts).then((data) => {
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

[apiKey](../README.md#apiKey), [accessToken](../README.md#accessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## retrieveBillingHistoryOfASpecificVirtualMachineForASpecificBillingCycle

> ResourceLevelVMBillingDetailsResponseModel retrieveBillingHistoryOfASpecificVirtualMachineForASpecificBillingCycle(vmId, opts)

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
// Configure API key authorization: accessToken
let accessToken = defaultClient.authentications['accessToken'];
accessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//accessToken.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.BillingApi();
let vmId = 56; // Number | 
let opts = {
  'startDate': "startDate_example", // String | Date should be formatted in YYYY-MM-DDTHH:MM:SS
  'endDate': "endDate_example" // String | Date should be formatted in YYYY-MM-DDTHH:MM:SS
};
apiInstance.retrieveBillingHistoryOfASpecificVirtualMachineForASpecificBillingCycle(vmId, opts).then((data) => {
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

[apiKey](../README.md#apiKey), [accessToken](../README.md#accessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## retrieveBillingHistoryOfASpecificVolumeForASpecificBillingCycle

> ResourceLevelVolumeBillingDetailsResponseModel retrieveBillingHistoryOfASpecificVolumeForASpecificBillingCycle(volumeId, opts)

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
// Configure API key authorization: accessToken
let accessToken = defaultClient.authentications['accessToken'];
accessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//accessToken.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.BillingApi();
let volumeId = 56; // Number | 
let opts = {
  'startDate': "startDate_example", // String | Date should be formatted in YYYY-MM-DDTHH:MM:SS
  'endDate': "endDate_example" // String | Date should be formatted in YYYY-MM-DDTHH:MM:SS
};
apiInstance.retrieveBillingHistoryOfASpecificVolumeForASpecificBillingCycle(volumeId, opts).then((data) => {
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

[apiKey](../README.md#apiKey), [accessToken](../README.md#accessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## retrieveBillingHistoryOfContractForASpecificBillingCycle

> retrieveBillingHistoryOfContractForASpecificBillingCycle(opts)

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
// Configure API key authorization: accessToken
let accessToken = defaultClient.authentications['accessToken'];
accessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//accessToken.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.BillingApi();
let opts = {
  'startDate': "startDate_example", // String | Date should be formatted in YYYY-MM-DDTHH:MM:SS
  'endDate': "endDate_example", // String | Date should be formatted in YYYY-MM-DDTHH:MM:SS
  'search': "search_example" // String | Search by Contract \"Description\" or \"ID\"
};
apiInstance.retrieveBillingHistoryOfContractForASpecificBillingCycle(opts).then(() => {
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

[apiKey](../README.md#apiKey), [accessToken](../README.md#accessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## retrieveBillingHistoryOfSnapshotForASpecificBillingCycle

> ResourceLevelVolumeBillingHistoryResponseModel retrieveBillingHistoryOfSnapshotForASpecificBillingCycle(opts)

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
// Configure API key authorization: accessToken
let accessToken = defaultClient.authentications['accessToken'];
accessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//accessToken.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.BillingApi();
let opts = {
  'startDate': "startDate_example", // String | Date should be formatted in YYYY-MM-DDTHH:MM:SS
  'endDate': "endDate_example", // String | Date should be formatted in YYYY-MM-DDTHH:MM:SS
  'search': "search_example", // String | Search by Volume \"Name\" or \"ID\"
  'page': "page_example", // String | Page number
  'perPage': "perPage_example" // String | Number of items to return per page
};
apiInstance.retrieveBillingHistoryOfSnapshotForASpecificBillingCycle(opts).then((data) => {
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
 **search** | **String**| Search by Volume \&quot;Name\&quot; or \&quot;ID\&quot; | [optional] 
 **page** | **String**| Page number | [optional] 
 **perPage** | **String**| Number of items to return per page | [optional] 

### Return type

[**ResourceLevelVolumeBillingHistoryResponseModel**](ResourceLevelVolumeBillingHistoryResponseModel.md)

### Authorization

[apiKey](../README.md#apiKey), [accessToken](../README.md#accessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## retrieveBillingHistoryOfVirtualMachineForASpecificBillingCycle

> ResourceLevelVmBillingHistoryResponseModel retrieveBillingHistoryOfVirtualMachineForASpecificBillingCycle(opts)

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
// Configure API key authorization: accessToken
let accessToken = defaultClient.authentications['accessToken'];
accessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//accessToken.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.BillingApi();
let opts = {
  'startDate': "startDate_example", // String | Date should be formatted in YYYY-MM-DDTHH:MM:SS
  'endDate': "endDate_example", // String | Date should be formatted in YYYY-MM-DDTHH:MM:SS
  'search': "search_example", // String | Search by Virtual Machine \"Name\" or \"ID\"
  'perPage': "perPage_example", // String | Number of items to return per page
  'page': "page_example" // String | Page number
};
apiInstance.retrieveBillingHistoryOfVirtualMachineForASpecificBillingCycle(opts).then((data) => {
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
 **search** | **String**| Search by Virtual Machine \&quot;Name\&quot; or \&quot;ID\&quot; | [optional] 
 **perPage** | **String**| Number of items to return per page | [optional] 
 **page** | **String**| Page number | [optional] 

### Return type

[**ResourceLevelVmBillingHistoryResponseModel**](ResourceLevelVmBillingHistoryResponseModel.md)

### Authorization

[apiKey](../README.md#apiKey), [accessToken](../README.md#accessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## retrieveBillingHistoryOfVolumeForASpecificBillingCycle

> ResourceLevelVolumeBillingHistoryResponseModel retrieveBillingHistoryOfVolumeForASpecificBillingCycle(opts)

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
// Configure API key authorization: accessToken
let accessToken = defaultClient.authentications['accessToken'];
accessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//accessToken.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.BillingApi();
let opts = {
  'startDate': "startDate_example", // String | Date should be formatted in YYYY-MM-DDTHH:MM:SS
  'endDate': "endDate_example", // String | Date should be formatted in YYYY-MM-DDTHH:MM:SS
  'search': "search_example", // String | Search by Volume \"Name\" or \"ID\"
  'perPage': "perPage_example", // String | Number of items to return per page
  'page': "page_example" // String | Page number
};
apiInstance.retrieveBillingHistoryOfVolumeForASpecificBillingCycle(opts).then((data) => {
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
 **search** | **String**| Search by Volume \&quot;Name\&quot; or \&quot;ID\&quot; | [optional] 
 **perPage** | **String**| Number of items to return per page | [optional] 
 **page** | **String**| Page number | [optional] 

### Return type

[**ResourceLevelVolumeBillingHistoryResponseModel**](ResourceLevelVolumeBillingHistoryResponseModel.md)

### Authorization

[apiKey](../README.md#apiKey), [accessToken](../README.md#accessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## retrieveHourlyCostDatapointsOfASpecificSnapshotForASpecificBillingCycle

> ResourceLevelVolumeGraphBillingDetailsResponseModel retrieveHourlyCostDatapointsOfASpecificSnapshotForASpecificBillingCycle(snapshotId, opts)

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
// Configure API key authorization: accessToken
let accessToken = defaultClient.authentications['accessToken'];
accessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//accessToken.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.BillingApi();
let snapshotId = 56; // Number | 
let opts = {
  'startDate': "startDate_example", // String | Date should be formatted in YYYY-MM-DDTHH:MM:SS
  'endDate': "endDate_example" // String | Date should be formatted in YYYY-MM-DDTHH:MM:SS
};
apiInstance.retrieveHourlyCostDatapointsOfASpecificSnapshotForASpecificBillingCycle(snapshotId, opts).then((data) => {
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

[apiKey](../README.md#apiKey), [accessToken](../README.md#accessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## retrieveHourlyCostDatapointsOfASpecificVirtualMachineForASpecificBillingCycle

> ResourceLevelVmGraphBillingDetailsResponseModel retrieveHourlyCostDatapointsOfASpecificVirtualMachineForASpecificBillingCycle(vmId, opts)

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
// Configure API key authorization: accessToken
let accessToken = defaultClient.authentications['accessToken'];
accessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//accessToken.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.BillingApi();
let vmId = 56; // Number | 
let opts = {
  'startDate': "startDate_example", // String | Date should be formatted in YYYY-MM-DDTHH:MM:SS
  'endDate': "endDate_example" // String | Date should be formatted in YYYY-MM-DDTHH:MM:SS
};
apiInstance.retrieveHourlyCostDatapointsOfASpecificVirtualMachineForASpecificBillingCycle(vmId, opts).then((data) => {
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

[apiKey](../README.md#apiKey), [accessToken](../README.md#accessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## retrieveHourlyCostDatapointsOfASpecificVolumeForASpecificBillingCycle

> ResourceLevelVolumeGraphBillingDetailsResponseModel retrieveHourlyCostDatapointsOfASpecificVolumeForASpecificBillingCycle(volumeId, opts)

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
// Configure API key authorization: accessToken
let accessToken = defaultClient.authentications['accessToken'];
accessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//accessToken.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.BillingApi();
let volumeId = 56; // Number | 
let opts = {
  'startDate': "startDate_example", // String | Date should be formatted in YYYY-MM-DDTHH:MM:SS
  'endDate': "endDate_example" // String | Date should be formatted in YYYY-MM-DDTHH:MM:SS
};
apiInstance.retrieveHourlyCostDatapointsOfASpecificVolumeForASpecificBillingCycle(volumeId, opts).then((data) => {
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

[apiKey](../README.md#apiKey), [accessToken](../README.md#accessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## retrieveSubResourcesHistoricalCostDatapointsOfAVirtual

> SubResourcesGraphResponseModel retrieveSubResourcesHistoricalCostDatapointsOfAVirtual(vmId, opts)

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
// Configure API key authorization: accessToken
let accessToken = defaultClient.authentications['accessToken'];
accessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//accessToken.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.BillingApi();
let vmId = 56; // Number | 
let opts = {
  'startDate': "startDate_example", // String | Date should be formatted in YYYY-MM-DDTHH:MM:SS
  'endDate': "endDate_example" // String | Date should be formatted in YYYY-MM-DDTHH:MM:SS
};
apiInstance.retrieveSubResourcesHistoricalCostDatapointsOfAVirtual(vmId, opts).then((data) => {
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

[apiKey](../README.md#apiKey), [accessToken](../README.md#accessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## retrieveTotalCostsAndNonDiscountCostsForSubResources

> SubResourcesCostsResponseModel retrieveTotalCostsAndNonDiscountCostsForSubResources(vmId, opts)

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
// Configure API key authorization: accessToken
let accessToken = defaultClient.authentications['accessToken'];
accessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//accessToken.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.BillingApi();
let vmId = 56; // Number | 
let opts = {
  'startDate': "startDate_example", // String | Date should be formatted in YYYY-MM-DDTHH:MM:SS
  'endDate': "endDate_example" // String | Date should be formatted in YYYY-MM-DDTHH:MM:SS
};
apiInstance.retrieveTotalCostsAndNonDiscountCostsForSubResources(vmId, opts).then((data) => {
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

[apiKey](../README.md#apiKey), [accessToken](../README.md#accessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## retrieveVmBillingEventsHistory

> ResourceBillingEventsHistoryResponse retrieveVmBillingEventsHistory(vmId, opts)

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
// Configure API key authorization: accessToken
let accessToken = defaultClient.authentications['accessToken'];
accessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//accessToken.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.BillingApi();
let vmId = 56; // Number | 
let opts = {
  'startDate': "startDate_example", // String | Date should be formatted in YYYY-MM-DDTHH:MM:SS
  'endDate': "endDate_example" // String | Date should be formatted in YYYY-MM-DDTHH:MM:SS
};
apiInstance.retrieveVmBillingEventsHistory(vmId, opts).then((data) => {
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

[apiKey](../README.md#apiKey), [accessToken](../README.md#accessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## retrieveVolumeBillingEventsHistory

> ResourceBillingEventsHistoryResponse retrieveVolumeBillingEventsHistory(volumeId, opts)

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
// Configure API key authorization: accessToken
let accessToken = defaultClient.authentications['accessToken'];
accessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//accessToken.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.BillingApi();
let volumeId = 56; // Number | 
let opts = {
  'startDate': "startDate_example", // String | Date should be formatted in YYYY-MM-DDTHH:MM:SS
  'endDate': "endDate_example" // String | Date should be formatted in YYYY-MM-DDTHH:MM:SS
};
apiInstance.retrieveVolumeBillingEventsHistory(volumeId, opts).then((data) => {
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

[apiKey](../README.md#apiKey), [accessToken](../README.md#accessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateSubscribeOrUnsubscribeNotificationThreshold

> Organizationthresholdupdateresponse updateSubscribeOrUnsubscribeNotificationThreshold(thresholdId, payload)

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
// Configure API key authorization: accessToken
let accessToken = defaultClient.authentications['accessToken'];
accessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//accessToken.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.BillingApi();
let thresholdId = 56; // Number | 
let payload = new HyperstackApi.Subscribeorunsubscribeupdatepayload(); // Subscribeorunsubscribeupdatepayload | 
apiInstance.updateSubscribeOrUnsubscribeNotificationThreshold(thresholdId, payload).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **thresholdId** | **Number**|  | 
 **payload** | [**Subscribeorunsubscribeupdatepayload**](Subscribeorunsubscribeupdatepayload.md)|  | 

### Return type

[**Organizationthresholdupdateresponse**](Organizationthresholdupdateresponse.md)

### Authorization

[apiKey](../README.md#apiKey), [accessToken](../README.md#accessToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


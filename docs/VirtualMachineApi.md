# HyperstackApi.VirtualMachineApi

All URIs are relative to *https://infrahub-api.nexgencloud.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addVMLabel**](VirtualMachineApi.md#addVMLabel) | **PUT** /core/virtual-machines/{vm_id}/label | Edit virtual machine labels
[**attachFirewallsToVM**](VirtualMachineApi.md#attachFirewallsToVM) | **POST** /core/virtual-machines/{vm_id}/attach-firewalls | Attach firewalls to a virtual machine
[**checkVMNameAvailability**](VirtualMachineApi.md#checkVMNameAvailability) | **GET** /core/virtual-machines/name-availability/{name} | Fetch virtual machine name availability
[**createFirewallRuleForVM**](VirtualMachineApi.md#createFirewallRuleForVM) | **POST** /core/virtual-machines/{vm_id}/sg-rules | Add firewall rule to virtual machine
[**createSnapshotForVM**](VirtualMachineApi.md#createSnapshotForVM) | **POST** /core/virtual-machines/{vm_id}/snapshots | Create snapshot from a virtual machine
[**createVMs**](VirtualMachineApi.md#createVMs) | **POST** /core/virtual-machines | Create virtual machines
[**deleteFirewallRuleForVM**](VirtualMachineApi.md#deleteFirewallRuleForVM) | **DELETE** /core/virtual-machines/{vm_id}/sg-rules/{sg_rule_id} | Delete firewall rule from virtual machine
[**deleteVM**](VirtualMachineApi.md#deleteVM) | **DELETE** /core/virtual-machines/{vm_id} | Delete virtual machine
[**getContractVMs**](VirtualMachineApi.md#getContractVMs) | **GET** /core/virtual-machines/contract/{contract_id}/virtual-machines | Retrieve virtual machines associated with a contract
[**getVM**](VirtualMachineApi.md#getVM) | **GET** /core/virtual-machines/{vm_id} | Retrieve virtual machine details
[**getVMLogs**](VirtualMachineApi.md#getVMLogs) | **GET** /core/virtual-machines/{vm_id}/logs | Get virtual machine logs
[**getVMMetrics**](VirtualMachineApi.md#getVMMetrics) | **GET** /core/virtual-machines/{vm_id}/metrics | Retrieve virtual machine performance metrics
[**hardRebootVM**](VirtualMachineApi.md#hardRebootVM) | **GET** /core/virtual-machines/{vm_id}/hard-reboot | Hard reboot virtual machine
[**hibernateVM**](VirtualMachineApi.md#hibernateVM) | **GET** /core/virtual-machines/{vm_id}/hibernate | Hibernate virtual machine
[**listVMs**](VirtualMachineApi.md#listVMs) | **GET** /core/virtual-machines | List virtual machines
[**requestVMLogs**](VirtualMachineApi.md#requestVMLogs) | **POST** /core/virtual-machines/{vm_id}/logs | Request virtual machine logs
[**resizeVM**](VirtualMachineApi.md#resizeVM) | **POST** /core/virtual-machines/{vm_id}/resize | Resize virtual machine
[**restoreVMFromHibernation**](VirtualMachineApi.md#restoreVMFromHibernation) | **GET** /core/virtual-machines/{vm_id}/hibernate-restore | Restore virtual machine from hibernation
[**startVM**](VirtualMachineApi.md#startVM) | **GET** /core/virtual-machines/{vm_id}/start | Start virtual machine
[**stopVM**](VirtualMachineApi.md#stopVM) | **GET** /core/virtual-machines/{vm_id}/stop | Stop virtual machine



## addVMLabel

> ResponseModel addVMLabel(vmId, payload)

Edit virtual machine labels

Adds one or more labels to an existing virtual machine. Provide the virtual machine ID in the path to add labels to the specified VM. For multiple labels, add a space between each label in the request body.

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.VirtualMachineApi();
let vmId = 56; // Number | 
let payload = new HyperstackApi.EditLabelOfAnExistingVMPayload(); // EditLabelOfAnExistingVMPayload | 
apiInstance.addVMLabel(vmId, payload).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vmId** | **Number**|  | 
 **payload** | [**EditLabelOfAnExistingVMPayload**](EditLabelOfAnExistingVMPayload.md)|  | 

### Return type

[**ResponseModel**](ResponseModel.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## attachFirewallsToVM

> ResponseModel attachFirewallsToVM(vmId, payload)

Attach firewalls to a virtual machine

Attach firewalls to a virtual machine by providing the virtual machine ID in the path and the IDs of the firewalls in the request body; any firewalls not included will be detached.

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.VirtualMachineApi();
let vmId = 56; // Number | 
let payload = new HyperstackApi.AttachFirewallsToVMPayload(); // AttachFirewallsToVMPayload | 
apiInstance.attachFirewallsToVM(vmId, payload).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vmId** | **Number**|  | 
 **payload** | [**AttachFirewallsToVMPayload**](AttachFirewallsToVMPayload.md)|  | 

### Return type

[**ResponseModel**](ResponseModel.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## checkVMNameAvailability

> NameAvailableModel checkVMNameAvailability(name)

Fetch virtual machine name availability

Check if a Virtual Machine name is available

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.VirtualMachineApi();
let name = "name_example"; // String | 
apiInstance.checkVMNameAvailability(name).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**|  | 

### Return type

[**NameAvailableModel**](NameAvailableModel.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## createFirewallRuleForVM

> SecurityGroupRule createFirewallRuleForVM(vmId, payload)

Add firewall rule to virtual machine

Creates a firewall rule for a virtual machine. Include the virtual machine ID in the path, and provide the firewall rule configuration in the request body, as detailed below. For additional information on firewall rules, [**click here**](https://docs.hyperstack.cloud/docs/api-reference/core-resources/virtual-machines/vm-firewall-rules/add-firewall-rule-to-vm).

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.VirtualMachineApi();
let vmId = 56; // Number | 
let payload = new HyperstackApi.CreateSecurityRulePayload(); // CreateSecurityRulePayload | 
apiInstance.createFirewallRuleForVM(vmId, payload).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vmId** | **Number**|  | 
 **payload** | [**CreateSecurityRulePayload**](CreateSecurityRulePayload.md)|  | 

### Return type

[**SecurityGroupRule**](SecurityGroupRule.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createSnapshotForVM

> CreateSnapshotResponse createSnapshotForVM(vmId, payload)

Create snapshot from a virtual machine

Create snapshots of a virtual machine by providing the virtual machine ID in the path

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.VirtualMachineApi();
let vmId = 56; // Number | 
let payload = new HyperstackApi.CreateSnapshotPayload(); // CreateSnapshotPayload | 
apiInstance.createSnapshotForVM(vmId, payload).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vmId** | **Number**|  | 
 **payload** | [**CreateSnapshotPayload**](CreateSnapshotPayload.md)|  | 

### Return type

[**CreateSnapshotResponse**](CreateSnapshotResponse.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createVMs

> CreateInstancesResponse createVMs(payload)

Create virtual machines

Creates one or more virtual machines with the specified custom configuration and features provided in the request body. For more information about the virtual machine features offered by Infrahub, [**click here**](https://docs.hyperstack.cloud/docs/virtual-machines/virtual-machine-features#create-a-virtual-machine-with-custom-features).

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.VirtualMachineApi();
let payload = new HyperstackApi.CreateInstancesPayload(); // CreateInstancesPayload | 
apiInstance.createVMs(payload).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **payload** | [**CreateInstancesPayload**](CreateInstancesPayload.md)|  | 

### Return type

[**CreateInstancesResponse**](CreateInstancesResponse.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteFirewallRuleForVM

> ResponseModel deleteFirewallRuleForVM(vmId, sgRuleId)

Delete firewall rule from virtual machine

Deletes a firewall rule associated with a virtual machine. Provide the virtual machine ID and the firewall rule ID in the path to remove the specified rule from the specified virtual machine.

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.VirtualMachineApi();
let vmId = 56; // Number | 
let sgRuleId = 56; // Number | 
apiInstance.deleteFirewallRuleForVM(vmId, sgRuleId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vmId** | **Number**|  | 
 **sgRuleId** | **Number**|  | 

### Return type

[**ResponseModel**](ResponseModel.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteVM

> ResponseModel deleteVM(vmId)

Delete virtual machine

Permanently deletes a virtual machine. Provide the virtual machine ID in the path to delete the specified virtual machine.

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.VirtualMachineApi();
let vmId = 56; // Number | 
apiInstance.deleteVM(vmId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vmId** | **Number**|  | 

### Return type

[**ResponseModel**](ResponseModel.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getContractVMs

> ContractInstancesResponse getContractVMs(contractId, opts)

Retrieve virtual machines associated with a contract

Retrieves a list of virtual machines associated with a contract, providing details such as virtual machine name, timestamp, flavor name, and other relevant information. Please provide the ID of the relevant contract in the path.

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.VirtualMachineApi();
let contractId = 56; // Number | 
let opts = {
  'page': "page_example", // String | Page Number
  'pageSize': "pageSize_example", // String | Data Per Page
  'search': "search_example" // String | Search By Instance ID or Name
};
apiInstance.getContractVMs(contractId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contractId** | **Number**|  | 
 **page** | **String**| Page Number | [optional] 
 **pageSize** | **String**| Data Per Page | [optional] 
 **search** | **String**| Search By Instance ID or Name | [optional] 

### Return type

[**ContractInstancesResponse**](ContractInstancesResponse.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getVM

> Instance getVM(vmId)

Retrieve virtual machine details

Retrieves the details of an existing virtual machine. Provide the virtual machine ID in the path, and Infrahub will return information about the corresponding VM.

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.VirtualMachineApi();
let vmId = 56; // Number | 
apiInstance.getVM(vmId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vmId** | **Number**|  | 

### Return type

[**Instance**](Instance.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getVMLogs

> GetInstanceLogsResponse getVMLogs(vmId, requestId)

Get virtual machine logs

Retrieve console logs for a virtual machine

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.VirtualMachineApi();
let vmId = 56; // Number | 
let requestId = 56; // Number | 
apiInstance.getVMLogs(vmId, requestId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vmId** | **Number**|  | 
 **requestId** | **Number**|  | 

### Return type

[**GetInstanceLogsResponse**](GetInstanceLogsResponse.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getVMMetrics

> MetricsFields getVMMetrics(vmId, opts)

Retrieve virtual machine performance metrics

Retrieves performance metrics data for a virtual machine. Provide the virtual machine ID in the path to retrieve the following data for the specified virtual machine: CPU usage, memory usage (RAM), &#x60;network.in&#x60;, &#x60;network.out&#x60;, &#x60;disk.read&#x60;, and &#x60;disk.write&#x60;. The optional &#x60;duration&#x60; parameter can be used to specify the period for retrieving performance metrics; the default value will retrieve all available data. To learn more about virtual machine performance metrics, [**click here**](https://docs.hyperstack.cloud/docs/virtual-machines/vm-performance-metrics-and-events-history#performance-metrics).

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.VirtualMachineApi();
let vmId = 56; // Number | 
let opts = {
  'duration': "duration_example" // String | 
};
apiInstance.getVMMetrics(vmId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vmId** | **Number**|  | 
 **duration** | **String**|  | [optional] 

### Return type

[**MetricsFields**](MetricsFields.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## hardRebootVM

> ResponseModel hardRebootVM(vmId)

Hard reboot virtual machine

Initiates a hard reboot for a virtual machine, simulating the process of unplugging and rebooting a physical machine. Provide the virtual machine ID in the path to execute a hard reboot for the specified virtual machine.

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.VirtualMachineApi();
let vmId = 56; // Number | 
apiInstance.hardRebootVM(vmId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vmId** | **Number**|  | 

### Return type

[**ResponseModel**](ResponseModel.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## hibernateVM

> ResponseModel hibernateVM(vmId, opts)

Hibernate virtual machine

Initiates the hibernation of a virtual machine, saving its current state to disk before powering off. Provide the virtual machine ID in the path to specify the virtual machine to be hibernated.

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.VirtualMachineApi();
let vmId = 56; // Number | 
let opts = {
  'retainIp': "retainIp_example" // String | false
};
apiInstance.hibernateVM(vmId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vmId** | **Number**|  | 
 **retainIp** | **String**| false | [optional] 

### Return type

[**ResponseModel**](ResponseModel.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listVMs

> Instances listVMs(opts)

List virtual machines

Returns a list of your existing virtual machines, providing configuration details for each. The list is sorted by creation date, with the oldest virtual machines displayed first.

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.VirtualMachineApi();
let opts = {
  'page': 56, // Number | 
  'pageSize': 56, // Number | 
  'search': "search_example", // String | 
  'environment': "environment_example", // String | 
  'excludeFirewalls': [null] // [Number] | Comma-separated list of Security Group IDs to ignore instances attached
};
apiInstance.listVMs(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**|  | [optional] 
 **pageSize** | **Number**|  | [optional] 
 **search** | **String**|  | [optional] 
 **environment** | **String**|  | [optional] 
 **excludeFirewalls** | [**[Number]**](Number.md)| Comma-separated list of Security Group IDs to ignore instances attached | [optional] 

### Return type

[**Instances**](Instances.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## requestVMLogs

> RequestInstanceLogsResponse requestVMLogs(vmId, payload)

Request virtual machine logs

Request console logs for a virtual machine

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.VirtualMachineApi();
let vmId = 56; // Number | 
let payload = new HyperstackApi.RequestInstanceLogsPayload(); // RequestInstanceLogsPayload | 
apiInstance.requestVMLogs(vmId, payload).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vmId** | **Number**|  | 
 **payload** | [**RequestInstanceLogsPayload**](RequestInstanceLogsPayload.md)|  | 

### Return type

[**RequestInstanceLogsResponse**](RequestInstanceLogsResponse.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## resizeVM

> ResponseModel resizeVM(vmId, payload)

Resize virtual machine

Updates the hardware configuration for an existing virtual machine. Include the virtual machine ID in the path and provide the new configuration, referred to as a &#x60;flavor&#x60;, in the body of the request. For additional information resizing, [**click here**](https://docs.hyperstack.cloud/docs/hardware/flavors#modify-the-flavor-of-an-existing-virtual-machine).

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.VirtualMachineApi();
let vmId = 56; // Number | 
let payload = new HyperstackApi.InstanceResizePayload(); // InstanceResizePayload | 
apiInstance.resizeVM(vmId, payload).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vmId** | **Number**|  | 
 **payload** | [**InstanceResizePayload**](InstanceResizePayload.md)|  | 

### Return type

[**ResponseModel**](ResponseModel.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## restoreVMFromHibernation

> ResponseModel restoreVMFromHibernation(vmId)

Restore virtual machine from hibernation

Resumes a virtual machine from hibernation, bringing it back to an active state. Provide the virtual machine ID that you want to restore from hibernation.

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.VirtualMachineApi();
let vmId = 56; // Number | 
apiInstance.restoreVMFromHibernation(vmId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vmId** | **Number**|  | 

### Return type

[**ResponseModel**](ResponseModel.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## startVM

> ResponseModel startVM(vmId)

Start virtual machine

Initiates the startup of a virtual machine. Provide the virtual machine ID in the path to initiate the starting of the specified virtual machine.

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.VirtualMachineApi();
let vmId = 56; // Number | 
apiInstance.startVM(vmId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vmId** | **Number**|  | 

### Return type

[**ResponseModel**](ResponseModel.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## stopVM

> ResponseModel stopVM(vmId)

Stop virtual machine

Shuts down a virtual machine. Provide the virtual machine ID in the path to initiate the shutdown process for the specified virtual machine.

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.VirtualMachineApi();
let vmId = 56; // Number | 
apiInstance.stopVM(vmId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vmId** | **Number**|  | 

### Return type

[**ResponseModel**](ResponseModel.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


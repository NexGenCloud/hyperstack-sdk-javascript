# HyperstackApi.VirtualMachineApi

All URIs are relative to *https://infrahub-api.nexgencloud.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addFirewallRuleToVirtualMachine**](VirtualMachineApi.md#addFirewallRuleToVirtualMachine) | **POST** /core/virtual-machines/{id}/sg-rules | Add firewall rule to virtual machine
[**attachFirewallsToAVirtualMachine**](VirtualMachineApi.md#attachFirewallsToAVirtualMachine) | **POST** /core/virtual-machines/{vm_id}/attach-firewalls | Attach firewalls to a virtual machine
[**createSnapshotFromAVirtualMachine**](VirtualMachineApi.md#createSnapshotFromAVirtualMachine) | **POST** /core/virtual-machines/{vm_id}/snapshots | Create snapshot from a virtual machine
[**createVirtualMachines**](VirtualMachineApi.md#createVirtualMachines) | **POST** /core/virtual-machines | Create virtual machines
[**deleteFirewallRuleFromVirtualMachine**](VirtualMachineApi.md#deleteFirewallRuleFromVirtualMachine) | **DELETE** /core/virtual-machines/{virtual_machine_id}/sg-rules/{sg_rule_id} | Delete firewall rule from virtual machine
[**deleteVirtualMachine**](VirtualMachineApi.md#deleteVirtualMachine) | **DELETE** /core/virtual-machines/{id} | Delete virtual machine
[**editVirtualMachineLabels**](VirtualMachineApi.md#editVirtualMachineLabels) | **PUT** /core/virtual-machines/{virtual_machine_id}/label | Edit virtual machine labels
[**fetchVirtualMachineNameAvailability**](VirtualMachineApi.md#fetchVirtualMachineNameAvailability) | **GET** /core/virtual-machines/name-availability/{name} | Fetch virtual machine name availability
[**hardRebootVirtualMachine**](VirtualMachineApi.md#hardRebootVirtualMachine) | **GET** /core/virtual-machines/{id}/hard-reboot | Hard reboot virtual machine
[**hibernateVirtualMachine**](VirtualMachineApi.md#hibernateVirtualMachine) | **GET** /core/virtual-machines/{virtual_machine_id}/hibernate | Hibernate virtual machine
[**listVirtualMachines**](VirtualMachineApi.md#listVirtualMachines) | **GET** /core/virtual-machines | List virtual machines
[**resizeVirtualMachine**](VirtualMachineApi.md#resizeVirtualMachine) | **POST** /core/virtual-machines/{virtual_machine_id}/resize | Resize virtual machine
[**restoreVirtualMachineFromHibernation**](VirtualMachineApi.md#restoreVirtualMachineFromHibernation) | **GET** /core/virtual-machines/{virtual_machine_id}/hibernate-restore | Restore virtual machine from hibernation
[**retrieveVirtualMachineDetails**](VirtualMachineApi.md#retrieveVirtualMachineDetails) | **GET** /core/virtual-machines/{id} | Retrieve virtual machine details
[**retrieveVirtualMachinePerformanceMetrics**](VirtualMachineApi.md#retrieveVirtualMachinePerformanceMetrics) | **GET** /core/virtual-machines/{virtual_machine_id}/metrics | Retrieve virtual machine performance metrics
[**retrieveVirtualMachinesAssociatedWithAContract**](VirtualMachineApi.md#retrieveVirtualMachinesAssociatedWithAContract) | **GET** /core/virtual-machines/contract/{contract_id}/virtual-machines | Retrieve virtual machines associated with a contract
[**startVirtualMachine**](VirtualMachineApi.md#startVirtualMachine) | **GET** /core/virtual-machines/{id}/start | Start virtual machine
[**stopVirtualMachine**](VirtualMachineApi.md#stopVirtualMachine) | **GET** /core/virtual-machines/{id}/stop | Stop virtual machine



## addFirewallRuleToVirtualMachine

> SecurityGroupRule addFirewallRuleToVirtualMachine(id, payload)

Add firewall rule to virtual machine

Creates a firewall rule for a virtual machine. Include the virtual machine ID in the path, and provide the firewall rule configuration in the request body, as detailed below. For additional information on firewall rules, [**click here**](https://infrahub-doc.nexgencloud.com/docs/api-reference/core-resources/virtual-machines/vm-firewall-rules/add-firewall-rule-to-vm).

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

let apiInstance = new HyperstackApi.VirtualMachineApi();
let id = 56; // Number | 
let payload = new HyperstackApi.CreateSecurityRulePayload(); // CreateSecurityRulePayload | 
apiInstance.addFirewallRuleToVirtualMachine(id, payload).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **payload** | [**CreateSecurityRulePayload**](CreateSecurityRulePayload.md)|  | 

### Return type

[**SecurityGroupRule**](SecurityGroupRule.md)

### Authorization

[apiKey](../README.md#apiKey), [accessToken](../README.md#accessToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## attachFirewallsToAVirtualMachine

> ResponseModel attachFirewallsToAVirtualMachine(vmId, payload)

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
// Configure API key authorization: accessToken
let accessToken = defaultClient.authentications['accessToken'];
accessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//accessToken.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.VirtualMachineApi();
let vmId = 56; // Number | 
let payload = new HyperstackApi.AttachFirewallsToVMPayload(); // AttachFirewallsToVMPayload | 
apiInstance.attachFirewallsToAVirtualMachine(vmId, payload).then((data) => {
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

[apiKey](../README.md#apiKey), [accessToken](../README.md#accessToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createSnapshotFromAVirtualMachine

> CreateSnapshotResponse createSnapshotFromAVirtualMachine(vmId, payload)

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
// Configure API key authorization: accessToken
let accessToken = defaultClient.authentications['accessToken'];
accessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//accessToken.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.VirtualMachineApi();
let vmId = 56; // Number | 
let payload = new HyperstackApi.CreateSnapshotPayload(); // CreateSnapshotPayload | 
apiInstance.createSnapshotFromAVirtualMachine(vmId, payload).then((data) => {
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

[apiKey](../README.md#apiKey), [accessToken](../README.md#accessToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createVirtualMachines

> CreateInstancesResponse createVirtualMachines(payload)

Create virtual machines

Creates one or more virtual machines with the specified custom configuration and features provided in the request body. For more information about the virtual machine features offered by Infrahub, [**click here**](https://infrahub-doc.nexgencloud.com/docs/virtual-machines/virtual-machine-features#create-a-virtual-machine-with-custom-features).

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

let apiInstance = new HyperstackApi.VirtualMachineApi();
let payload = new HyperstackApi.CreateInstancesPayload(); // CreateInstancesPayload | 
apiInstance.createVirtualMachines(payload).then((data) => {
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

[apiKey](../README.md#apiKey), [accessToken](../README.md#accessToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteFirewallRuleFromVirtualMachine

> ResponseModel deleteFirewallRuleFromVirtualMachine(virtualMachineId, sgRuleId)

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
// Configure API key authorization: accessToken
let accessToken = defaultClient.authentications['accessToken'];
accessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//accessToken.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.VirtualMachineApi();
let virtualMachineId = 56; // Number | 
let sgRuleId = 56; // Number | 
apiInstance.deleteFirewallRuleFromVirtualMachine(virtualMachineId, sgRuleId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **virtualMachineId** | **Number**|  | 
 **sgRuleId** | **Number**|  | 

### Return type

[**ResponseModel**](ResponseModel.md)

### Authorization

[apiKey](../README.md#apiKey), [accessToken](../README.md#accessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteVirtualMachine

> ResponseModel deleteVirtualMachine(id)

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
// Configure API key authorization: accessToken
let accessToken = defaultClient.authentications['accessToken'];
accessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//accessToken.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.VirtualMachineApi();
let id = 56; // Number | 
apiInstance.deleteVirtualMachine(id).then((data) => {
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

[apiKey](../README.md#apiKey), [accessToken](../README.md#accessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## editVirtualMachineLabels

> ResponseModel editVirtualMachineLabels(virtualMachineId, payload)

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
// Configure API key authorization: accessToken
let accessToken = defaultClient.authentications['accessToken'];
accessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//accessToken.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.VirtualMachineApi();
let virtualMachineId = 56; // Number | 
let payload = new HyperstackApi.EditlabelofanexistingVMPayload(); // EditlabelofanexistingVMPayload | 
apiInstance.editVirtualMachineLabels(virtualMachineId, payload).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **virtualMachineId** | **Number**|  | 
 **payload** | [**EditlabelofanexistingVMPayload**](EditlabelofanexistingVMPayload.md)|  | 

### Return type

[**ResponseModel**](ResponseModel.md)

### Authorization

[apiKey](../README.md#apiKey), [accessToken](../README.md#accessToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## fetchVirtualMachineNameAvailability

> NameAvailableModel fetchVirtualMachineNameAvailability(name)

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
// Configure API key authorization: accessToken
let accessToken = defaultClient.authentications['accessToken'];
accessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//accessToken.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.VirtualMachineApi();
let name = "name_example"; // String | 
apiInstance.fetchVirtualMachineNameAvailability(name).then((data) => {
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

[apiKey](../README.md#apiKey), [accessToken](../README.md#accessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## hardRebootVirtualMachine

> ResponseModel hardRebootVirtualMachine(id)

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
// Configure API key authorization: accessToken
let accessToken = defaultClient.authentications['accessToken'];
accessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//accessToken.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.VirtualMachineApi();
let id = 56; // Number | 
apiInstance.hardRebootVirtualMachine(id).then((data) => {
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

[apiKey](../README.md#apiKey), [accessToken](../README.md#accessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## hibernateVirtualMachine

> ResponseModel hibernateVirtualMachine(virtualMachineId)

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
// Configure API key authorization: accessToken
let accessToken = defaultClient.authentications['accessToken'];
accessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//accessToken.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.VirtualMachineApi();
let virtualMachineId = 56; // Number | 
apiInstance.hibernateVirtualMachine(virtualMachineId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **virtualMachineId** | **Number**|  | 

### Return type

[**ResponseModel**](ResponseModel.md)

### Authorization

[apiKey](../README.md#apiKey), [accessToken](../README.md#accessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listVirtualMachines

> Instances listVirtualMachines(opts)

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
// Configure API key authorization: accessToken
let accessToken = defaultClient.authentications['accessToken'];
accessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//accessToken.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.VirtualMachineApi();
let opts = {
  'page': "page_example", // String | Page Number
  'pageSize': "pageSize_example", // String | Data Per Page
  'search': "search_example", // String | 
  'environment': "environment_example" // String | Filter Environment ID or Name
};
apiInstance.listVirtualMachines(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **String**| Page Number | [optional] 
 **pageSize** | **String**| Data Per Page | [optional] 
 **search** | **String**|  | [optional] 
 **environment** | **String**| Filter Environment ID or Name | [optional] 

### Return type

[**Instances**](Instances.md)

### Authorization

[apiKey](../README.md#apiKey), [accessToken](../README.md#accessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## resizeVirtualMachine

> ResponseModel resizeVirtualMachine(virtualMachineId, payload)

Resize virtual machine

Updates the hardware configuration for an existing virtual machine. Include the virtual machine ID in the path and provide the new configuration, referred to as a &#x60;flavor&#x60;, in the body of the request. For additional information resizing, [**click here**](https://infrahub-doc.nexgencloud.com/docs/hardware/flavors#modify-the-flavor-of-an-existing-virtual-machine).

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

let apiInstance = new HyperstackApi.VirtualMachineApi();
let virtualMachineId = 56; // Number | 
let payload = new HyperstackApi.InstanceResizePayload(); // InstanceResizePayload | 
apiInstance.resizeVirtualMachine(virtualMachineId, payload).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **virtualMachineId** | **Number**|  | 
 **payload** | [**InstanceResizePayload**](InstanceResizePayload.md)|  | 

### Return type

[**ResponseModel**](ResponseModel.md)

### Authorization

[apiKey](../README.md#apiKey), [accessToken](../README.md#accessToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## restoreVirtualMachineFromHibernation

> ResponseModel restoreVirtualMachineFromHibernation(virtualMachineId)

Restore virtual machine from hibernation

Resumes a virtual machine from hibernation, bringing it back to an active state. Provide the virtual machine ID in the path to specify the virtual machine to be restored from hibernation.

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

let apiInstance = new HyperstackApi.VirtualMachineApi();
let virtualMachineId = 56; // Number | 
apiInstance.restoreVirtualMachineFromHibernation(virtualMachineId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **virtualMachineId** | **Number**|  | 

### Return type

[**ResponseModel**](ResponseModel.md)

### Authorization

[apiKey](../README.md#apiKey), [accessToken](../README.md#accessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## retrieveVirtualMachineDetails

> Instance retrieveVirtualMachineDetails(id)

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
// Configure API key authorization: accessToken
let accessToken = defaultClient.authentications['accessToken'];
accessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//accessToken.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.VirtualMachineApi();
let id = 56; // Number | 
apiInstance.retrieveVirtualMachineDetails(id).then((data) => {
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

[**Instance**](Instance.md)

### Authorization

[apiKey](../README.md#apiKey), [accessToken](../README.md#accessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## retrieveVirtualMachinePerformanceMetrics

> MetricsFields retrieveVirtualMachinePerformanceMetrics(virtualMachineId, opts)

Retrieve virtual machine performance metrics

Retrieves performance metrics data for a virtual machine. Provide the virtual machine ID in the path to retrieve the following data for the specified virtual machine: CPU usage, memory usage (RAM), &#x60;network.in&#x60;, &#x60;network.out&#x60;, &#x60;disk.read&#x60;, and &#x60;disk.write&#x60;. The optional &#x60;duration&#x60; parameter can be used to specify the period for retrieving performance metrics; the default value will retrieve all available data. To learn more about virtual machine performance metrics, [**click here**](https://infrahub-doc.nexgencloud.com/docs/virtual-machines/vm-performance-metrics-and-events-history#performance-metrics).

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

let apiInstance = new HyperstackApi.VirtualMachineApi();
let virtualMachineId = 56; // Number | 
let opts = {
  'duration': "duration_example" // String | 
};
apiInstance.retrieveVirtualMachinePerformanceMetrics(virtualMachineId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **virtualMachineId** | **Number**|  | 
 **duration** | **String**|  | [optional] 

### Return type

[**MetricsFields**](MetricsFields.md)

### Authorization

[apiKey](../README.md#apiKey), [accessToken](../README.md#accessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## retrieveVirtualMachinesAssociatedWithAContract

> ContractInstancesResponse retrieveVirtualMachinesAssociatedWithAContract(contractId, opts)

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
// Configure API key authorization: accessToken
let accessToken = defaultClient.authentications['accessToken'];
accessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//accessToken.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.VirtualMachineApi();
let contractId = 56; // Number | 
let opts = {
  'page': "page_example", // String | Page Number
  'pageSize': "pageSize_example", // String | Data Per Page
  'search': "search_example" // String | Search By Instance ID or Name
};
apiInstance.retrieveVirtualMachinesAssociatedWithAContract(contractId, opts).then((data) => {
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

[apiKey](../README.md#apiKey), [accessToken](../README.md#accessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## startVirtualMachine

> ResponseModel startVirtualMachine(id)

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
// Configure API key authorization: accessToken
let accessToken = defaultClient.authentications['accessToken'];
accessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//accessToken.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.VirtualMachineApi();
let id = 56; // Number | 
apiInstance.startVirtualMachine(id).then((data) => {
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

[apiKey](../README.md#apiKey), [accessToken](../README.md#accessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## stopVirtualMachine

> ResponseModel stopVirtualMachine(id)

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
// Configure API key authorization: accessToken
let accessToken = defaultClient.authentications['accessToken'];
accessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//accessToken.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.VirtualMachineApi();
let id = 56; // Number | 
apiInstance.stopVirtualMachine(id).then((data) => {
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

[apiKey](../README.md#apiKey), [accessToken](../README.md#accessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


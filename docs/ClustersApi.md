# HyperstackApi.ClustersApi

All URIs are relative to *https://infrahub-api.nexgencloud.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCluster**](ClustersApi.md#createCluster) | **POST** /core/clusters | Create Cluster
[**createNode**](ClustersApi.md#createNode) | **POST** /core/clusters/{cluster_id}/nodes | Create Node
[**createNodeGroup**](ClustersApi.md#createNodeGroup) | **POST** /core/clusters/{cluster_id}/node-groups | Create a node group in a cluster
[**deleteCluster**](ClustersApi.md#deleteCluster) | **DELETE** /core/clusters/{id} | Delete a cluster
[**deleteClusterNode**](ClustersApi.md#deleteClusterNode) | **DELETE** /core/clusters/{cluster_id}/nodes/{node_id} | Delete Cluster Node
[**deleteClusterNodes**](ClustersApi.md#deleteClusterNodes) | **POST** /core/clusters/{cluster_id}/nodes/delete | Delete Multiple Cluster Nodes
[**deleteNodeGroup**](ClustersApi.md#deleteNodeGroup) | **DELETE** /core/clusters/{cluster_id}/node-groups/{node_group_id} | Delete a node group
[**fetchClusterNameAvailability**](ClustersApi.md#fetchClusterNameAvailability) | **GET** /core/clusters/name-availability/{name} | Fetch cluster name availability
[**getClusterMasterFlavors**](ClustersApi.md#getClusterMasterFlavors) | **GET** /core/clusters/master-flavors | Get Cluster Master Flavors
[**getClusterNodes**](ClustersApi.md#getClusterNodes) | **GET** /core/clusters/{cluster_id}/nodes | Get Cluster Nodes
[**getClusterVersions**](ClustersApi.md#getClusterVersions) | **GET** /core/clusters/versions | List Cluster Versions
[**getNodeGroup**](ClustersApi.md#getNodeGroup) | **GET** /core/clusters/{cluster_id}/node-groups/{node_group_id} | Retrieve a node group in a cluster
[**gettingClusterDetail**](ClustersApi.md#gettingClusterDetail) | **GET** /core/clusters/{id} | Getting Cluster Detail
[**listClusters**](ClustersApi.md#listClusters) | **GET** /core/clusters | List Clusters
[**listNodeGroups**](ClustersApi.md#listNodeGroups) | **GET** /core/clusters/{cluster_id}/node-groups | List node groups for a cluster
[**reconcileCluster**](ClustersApi.md#reconcileCluster) | **POST** /core/clusters/{cluster_id}/reconcile | Reconcile a cluster
[**updateNodeGroup**](ClustersApi.md#updateNodeGroup) | **PATCH** /core/clusters/{cluster_id}/node-groups/{node_group_id} | Update a node group in a cluster



## createCluster

> ClusterResponse createCluster(payload)

Create Cluster

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.ClustersApi();
let payload = new HyperstackApi.CreateClusterPayload(); // CreateClusterPayload | 
apiInstance.createCluster(payload).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **payload** | [**CreateClusterPayload**](CreateClusterPayload.md)|  | 

### Return type

[**ClusterResponse**](ClusterResponse.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createNode

> ClusterNodesListResponse createNode(clusterId, payload)

Create Node

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.ClustersApi();
let clusterId = 56; // Number | 
let payload = new HyperstackApi.CreateClusterNodeFields(); // CreateClusterNodeFields | 
apiInstance.createNode(clusterId, payload).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clusterId** | **Number**|  | 
 **payload** | [**CreateClusterNodeFields**](CreateClusterNodeFields.md)|  | 

### Return type

[**ClusterNodesListResponse**](ClusterNodesListResponse.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createNodeGroup

> ClusterNodeGroupsCreateResponse createNodeGroup(clusterId, payload)

Create a node group in a cluster

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.ClustersApi();
let clusterId = 56; // Number | 
let payload = new HyperstackApi.CreateClusterNodeGroupPayload(); // CreateClusterNodeGroupPayload | 
apiInstance.createNodeGroup(clusterId, payload).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clusterId** | **Number**|  | 
 **payload** | [**CreateClusterNodeGroupPayload**](CreateClusterNodeGroupPayload.md)|  | 

### Return type

[**ClusterNodeGroupsCreateResponse**](ClusterNodeGroupsCreateResponse.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteCluster

> ResponseModel deleteCluster(id)

Delete a cluster

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.ClustersApi();
let id = 56; // Number | 
apiInstance.deleteCluster(id).then((data) => {
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


## deleteClusterNode

> ResponseModel deleteClusterNode(clusterId, nodeId)

Delete Cluster Node

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.ClustersApi();
let clusterId = 56; // Number | 
let nodeId = 56; // Number | 
apiInstance.deleteClusterNode(clusterId, nodeId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clusterId** | **Number**|  | 
 **nodeId** | **Number**|  | 

### Return type

[**ResponseModel**](ResponseModel.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteClusterNodes

> ResponseModel deleteClusterNodes(clusterId, payload)

Delete Multiple Cluster Nodes

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.ClustersApi();
let clusterId = 56; // Number | 
let payload = new HyperstackApi.DeleteClusterNodesFields(); // DeleteClusterNodesFields | 
apiInstance.deleteClusterNodes(clusterId, payload).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clusterId** | **Number**|  | 
 **payload** | [**DeleteClusterNodesFields**](DeleteClusterNodesFields.md)|  | 

### Return type

[**ResponseModel**](ResponseModel.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteNodeGroup

> ResponseModel deleteNodeGroup(clusterId, nodeGroupId)

Delete a node group

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.ClustersApi();
let clusterId = 56; // Number | 
let nodeGroupId = 56; // Number | 
apiInstance.deleteNodeGroup(clusterId, nodeGroupId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clusterId** | **Number**|  | 
 **nodeGroupId** | **Number**|  | 

### Return type

[**ResponseModel**](ResponseModel.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## fetchClusterNameAvailability

> NameAvailableModel fetchClusterNameAvailability(name)

Fetch cluster name availability

Check if a Cluster name is available

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.ClustersApi();
let name = "name_example"; // String | 
apiInstance.fetchClusterNameAvailability(name).then((data) => {
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


## getClusterMasterFlavors

> MasterFlavorsResponse getClusterMasterFlavors()

Get Cluster Master Flavors

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.ClustersApi();
apiInstance.getClusterMasterFlavors().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**MasterFlavorsResponse**](MasterFlavorsResponse.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getClusterNodes

> ClusterNodesListResponse getClusterNodes(clusterId)

Get Cluster Nodes

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.ClustersApi();
let clusterId = 56; // Number | 
apiInstance.getClusterNodes(clusterId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clusterId** | **Number**|  | 

### Return type

[**ClusterNodesListResponse**](ClusterNodesListResponse.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getClusterVersions

> ClusterVersions getClusterVersions(opts)

List Cluster Versions

Lists available Kubernetes versions, optionally filtered by region.

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.ClustersApi();
let opts = {
  'region': "region_example" // String | Filter versions by region name (optional)
};
apiInstance.getClusterVersions(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **region** | **String**| Filter versions by region name (optional) | [optional] 

### Return type

[**ClusterVersions**](ClusterVersions.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getNodeGroup

> ClusterNodeGroupsGetResponse getNodeGroup(clusterId, nodeGroupId)

Retrieve a node group in a cluster

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.ClustersApi();
let clusterId = 56; // Number | 
let nodeGroupId = 56; // Number | 
apiInstance.getNodeGroup(clusterId, nodeGroupId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clusterId** | **Number**|  | 
 **nodeGroupId** | **Number**|  | 

### Return type

[**ClusterNodeGroupsGetResponse**](ClusterNodeGroupsGetResponse.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gettingClusterDetail

> ClusterResponse gettingClusterDetail(id)

Getting Cluster Detail

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.ClustersApi();
let id = 56; // Number | 
apiInstance.gettingClusterDetail(id).then((data) => {
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

[**ClusterResponse**](ClusterResponse.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listClusters

> ClusterListResponse listClusters(opts)

List Clusters

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.ClustersApi();
let opts = {
  'page': 56, // Number | Page number for pagination
  'pageSize': 56, // Number | Number of items per page
  'environment': "environment_example", // String | Environment Filter
  'search': "search_example" // String | Search query to filter cluster by name
};
apiInstance.listClusters(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Page number for pagination | [optional] 
 **pageSize** | **Number**| Number of items per page | [optional] 
 **environment** | **String**| Environment Filter | [optional] 
 **search** | **String**| Search query to filter cluster by name | [optional] 

### Return type

[**ClusterListResponse**](ClusterListResponse.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listNodeGroups

> ClusterNodeGroupsListResponse listNodeGroups(clusterId)

List node groups for a cluster

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.ClustersApi();
let clusterId = 56; // Number | 
apiInstance.listNodeGroups(clusterId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clusterId** | **Number**|  | 

### Return type

[**ClusterNodeGroupsListResponse**](ClusterNodeGroupsListResponse.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## reconcileCluster

> ManualReconciliationModel reconcileCluster(clusterId)

Reconcile a cluster

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.ClustersApi();
let clusterId = 56; // Number | 
apiInstance.reconcileCluster(clusterId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clusterId** | **Number**|  | 

### Return type

[**ManualReconciliationModel**](ManualReconciliationModel.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateNodeGroup

> ClusterNodeGroupsCreateResponse updateNodeGroup(clusterId, nodeGroupId, payload)

Update a node group in a cluster

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.ClustersApi();
let clusterId = 56; // Number | 
let nodeGroupId = 56; // Number | 
let payload = new HyperstackApi.UpdateClusterNodeGroupPayload(); // UpdateClusterNodeGroupPayload | 
apiInstance.updateNodeGroup(clusterId, nodeGroupId, payload).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clusterId** | **Number**|  | 
 **nodeGroupId** | **Number**|  | 
 **payload** | [**UpdateClusterNodeGroupPayload**](UpdateClusterNodeGroupPayload.md)|  | 

### Return type

[**ClusterNodeGroupsCreateResponse**](ClusterNodeGroupsCreateResponse.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


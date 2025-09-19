# HyperstackApi.CreateClusterPayload

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deploymentMode** | **String** |  | [optional] [default to &#39;full&#39;]
**environmentName** | **String** |  | 
**keypairName** | **String** |  | 
**kubernetesVersion** | **String** |  | 
**masterCount** | **Number** |  | [optional] 
**masterFlavorName** | **String** |  | 
**name** | **String** |  | 
**nodeCount** | **Number** |  | [optional] 
**nodeFlavorName** | **String** |  | [optional] 
**nodeGroups** | [**[CreateClusterNodeGroupPayload]**](CreateClusterNodeGroupPayload.md) |  | [optional] 



## Enum: DeploymentModeEnum


* `full` (value: `"full"`)

* `standard` (value: `"standard"`)





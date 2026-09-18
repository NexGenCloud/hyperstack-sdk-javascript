# HyperstackApi.InstanceFields

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**callbackUrl** | **String** |  | [optional] 
**clusterId** | **Number** | The COE cluster this VM is a node of, or null. | [optional] 
**contractId** | **Number** |  | [optional] 
**createdAt** | **Date** |  | [optional] 
**dedicatedInferenceId** | **Number** | The dedicated inference endpoint this VM serves, or null. | [optional] 
**enhancedMetrics** | [**InstanceEnhancedMetricsFields**](InstanceEnhancedMetricsFields.md) |  | [optional] 
**environment** | [**InstanceEnvironmentFields**](InstanceEnvironmentFields.md) |  | [optional] 
**features** | **Object** |  | [optional] 
**fixedIp** | **String** |  | [optional] 
**flavor** | [**InstanceFlavorFields**](InstanceFlavorFields.md) |  | [optional] 
**floatingIp** | **String** |  | [optional] 
**floatingIpStatus** | **String** |  | [optional] 
**id** | **Number** |  | [optional] 
**image** | [**InstanceImageFields**](InstanceImageFields.md) |  | [optional] 
**keypair** | [**InstanceKeypairFields**](InstanceKeypairFields.md) |  | [optional] 
**labels** | **[String]** |  | [optional] 
**locked** | **Boolean** |  | [optional] 
**name** | **String** |  | [optional] 
**os** | **String** |  | [optional] 
**portRandomization** | **Boolean** |  | [optional] 
**portRandomizationStatus** | **String** |  | [optional] 
**powerState** | **String** |  | [optional] 
**requiresPublicIp** | **Boolean** |  | [optional] 
**securityRules** | [**[SecurityRulesFieldsForInstance]**](SecurityRulesFieldsForInstance.md) |  | [optional] 
**status** | **String** |  | [optional] 
**vmState** | **String** |  | [optional] 
**volumeAttachments** | [**[VolumeAttachmentFields]**](VolumeAttachmentFields.md) |  | [optional] 



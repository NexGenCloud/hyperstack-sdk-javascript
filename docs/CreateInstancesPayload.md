# HyperstackApi.CreateInstancesPayload

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assignFloatingIp** | **Boolean** | When this field is set to &#x60;true&#x60;, it attaches a [public IP address](https://docs.hyperstack.cloud/docs/api-reference/core-resources/virtual-machines/floating-ip/) to the virtual machine, enabling internet accessibility. | [optional] 
**callbackUrl** | **String** | An optional URL where actions performed on the virtual machine will be sent. For additional information on event callbacks, [**click here**](https://docs.hyperstack.cloud/docs/api-reference/core-resources/virtual-machines/callbacks-vms/). | [optional] 
**count** | **Number** | The number of virtual machines to be created. | 
**createBootableVolume** | **Boolean** | Indicates whether to create a bootable volume for the virtual machine. When set to &#x60;true&#x60;, a bootable volume will be created; the default value is &#x60;false&#x60;. | [optional] 
**enablePortRandomization** | **Boolean** | Indicates whether to enable port randomization.This setting is only effective if &#39;assign_floating_ip&#39; is true. Defaults to true. | [optional] [default to true]
**environmentName** | **String** | The name of the [environment](https://docs.hyperstack.cloud/docs/api-reference/core-resources/environments/) in which the virtual machine is to be created. | 
**flavor** | [**FlavorObjectFields**](FlavorObjectFields.md) |  | [optional] 
**flavorName** | **String** | The name of the GPU hardware configuration ([flavor](https://docs.hyperstack.cloud/docs/hardware/flavors)) for the virtual machines being created. | 
**imageName** | **String** | The [operating system (OS) image](https://docs.hyperstack.cloud/docs/virtual-machines/images) name designated for installation on the virtual machine.It also accepts custom, private images, created from [existing snapshots](https://docs.hyperstack.cloud/docs/virtual-machines/custom-images). | [optional] 
**keyName** | **String** | The name of the existing SSH key pair to be used for secure access to the virtual machine. For additional information on SSH key pairs, [**click here**](https://docs.hyperstack.cloud/docs/api-reference/core-resources/keypairs/). | 
**labels** | **[String]** |  | [optional] 
**name** | **String** | The name of the virtual machine being created. | 
**profile** | [**ProfileObjectFields**](ProfileObjectFields.md) |  | [optional] 
**securityRules** | [**[CreateSecurityRulePayload]**](CreateSecurityRulePayload.md) |  | [optional] 
**userData** | **String** | Optional initialization configuration commands to manage the configuration of a virtual machine at launch using cloud-init scripts. For more information about custom VM configuration using cloud-init, [**click here**](https://docs.hyperstack.cloud/docs/virtual-machines/initialization-configuration). | [optional] 
**volumeName** | **String** | The names of the volume(s) to be attached to the virtual machine being created. | [optional] 



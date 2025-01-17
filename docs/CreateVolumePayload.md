# HyperstackApi.CreateVolumePayload

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**callbackUrl** | **String** | A URL that can be attached to the volume you are creating. This &#x60;callback_url&#x60; will post any action events that occur to your volume to the provided URL. | [optional] 
**description** | **String** | A brief description or comment about the volume. | [optional] 
**environmentName** | **String** | The name of the [environment](https://infrahub-doc.nexgencloud.com/docs/features/environments-available-features) within which the volume is being created. | 
**imageId** | **Number** | The ID of the operating system image that will be associated with the volume. By providing an &#x60;image_id&#x60; in the create volume request, you will create a bootable volume. | [optional] 
**name** | **String** | The name of the volume being created. | 
**size** | **Number** | The size of the volume in GB. 1048576GB storage capacity per volume. | 
**volumeType** | **String** | Specifies the type of volume being created, which determines the storage technology it will use. Call the [List volume types](https://infrahub-api-doc.nexgencloud.com/#get-/core/volumes) endpoint to retrieve a list of available volume model types. | 



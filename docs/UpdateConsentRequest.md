# HyperstackApi.UpdateConsentRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **String** |  | 
**consentMethod** | **String** |  | [optional] [default to &#39;web_checkbox&#39;]
**consentVersion** | **String** | Version identifier. Defaults to the current version for the consent type | [optional] 
**metadata** | **Object** | Consent-type-specific metadata | [optional] 



## Enum: ActionEnum


* `granted` (value: `"granted"`)

* `revoked` (value: `"revoked"`)





## Enum: ConsentMethodEnum


* `web_checkbox` (value: `"web_checkbox"`)

* `api` (value: `"api"`)

* `admin_override` (value: `"admin_override"`)





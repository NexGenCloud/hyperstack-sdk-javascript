# HyperstackApi.TemplateApi

All URIs are relative to *https://infrahub-api.nexgencloud.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createTemplate**](TemplateApi.md#createTemplate) | **POST** /core/marketplace/templates | Create template
[**deleteTemplate**](TemplateApi.md#deleteTemplate) | **DELETE** /core/marketplace/templates/{id} | Delete template
[**listTemplates**](TemplateApi.md#listTemplates) | **GET** /core/marketplace/templates | List templates
[**retrieveTemplateDetails**](TemplateApi.md#retrieveTemplateDetails) | **GET** /core/marketplace/templates/{id} | Retrieve template details
[**updateTemplate**](TemplateApi.md#updateTemplate) | **PUT** /core/marketplace/templates/{id} | Update template



## createTemplate

> Template createTemplate(content, description, isPublic, name)

Create template

Creates a resource template for deployment.

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

let apiInstance = new HyperstackApi.TemplateApi();
let content = "/path/to/file"; // File | YAML file is required
let description = "description_example"; // String | description is required
let isPublic = "isPublic_example"; // String | is_public is required
let name = "name_example"; // String | name is required
apiInstance.createTemplate(content, description, isPublic, name).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **content** | **File**| YAML file is required | 
 **description** | **String**| description is required | 
 **isPublic** | **String**| is_public is required | 
 **name** | **String**| name is required | 

### Return type

[**Template**](Template.md)

### Authorization

[apiKey](../README.md#apiKey), [accessToken](../README.md#accessToken)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## deleteTemplate

> ResponseModel deleteTemplate(id)

Delete template

Permanently deletes a template. Supply the template ID in the path to delete the specified template.

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

let apiInstance = new HyperstackApi.TemplateApi();
let id = 56; // Number | 
apiInstance.deleteTemplate(id).then((data) => {
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


## listTemplates

> Templates listTemplates(opts)

List templates

Returns a comprehensive list of templates, providing resource configuration details for each. Optionally, specify the &#x60;visibility&#x60; as &#x60;public&#x60; or &#x60;private&#x60; to retrieve templates with the desired visibility status. To learn more about the templates feature, [**click here**](https://infrahub-doc.nexgencloud.com/docs/features/templates#view-a-list-of-templates).

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

let apiInstance = new HyperstackApi.TemplateApi();
let opts = {
  'visibility': "visibility_example" // String | Specify the `visibility` status as either `public` or `private` to filter and retrieve templates with the desired visibility.
};
apiInstance.listTemplates(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **visibility** | **String**| Specify the &#x60;visibility&#x60; status as either &#x60;public&#x60; or &#x60;private&#x60; to filter and retrieve templates with the desired visibility. | [optional] 

### Return type

[**Templates**](Templates.md)

### Authorization

[apiKey](../README.md#apiKey), [accessToken](../README.md#accessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## retrieveTemplateDetails

> Template retrieveTemplateDetails(id)

Retrieve template details

Retrieves the resource configuration details for a specified template. Provide the template ID in the path to retrieve details for the specified template. For additional information on template configuration details, [**click here**](https://infrahub-doc.nexgencloud.com/docs/features/templates#retrieve-the-details-for-a-template).

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

let apiInstance = new HyperstackApi.TemplateApi();
let id = 56; // Number | 
apiInstance.retrieveTemplateDetails(id).then((data) => {
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

[**Template**](Template.md)

### Authorization

[apiKey](../README.md#apiKey), [accessToken](../README.md#accessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateTemplate

> Template updateTemplate(id, payload)

Update template

Updates the details of a template. Modify the template name, description and/or &#x60;is_public&#x60; status to change the public/private visibility of the template.

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

let apiInstance = new HyperstackApi.TemplateApi();
let id = 56; // Number | 
let payload = new HyperstackApi.UpdateTemplate(); // UpdateTemplate | 
apiInstance.updateTemplate(id, payload).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **payload** | [**UpdateTemplate**](UpdateTemplate.md)|  | 

### Return type

[**Template**](Template.md)

### Authorization

[apiKey](../README.md#apiKey), [accessToken](../README.md#accessToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


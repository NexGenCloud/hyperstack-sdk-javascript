# HyperstackApi.VouchersApi

All URIs are relative to *https://infrahub-api.nexgencloud.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**redeemAVoucher**](VouchersApi.md#redeemAVoucher) | **POST** /billing/billing/vouchers/redeem | Redeem a voucher with a voucher_code



## redeemAVoucher

> VoucherRedeemResponseSchema redeemAVoucher(payload)

Redeem a voucher with a voucher_code

Request to redeem a voucher with a voucher code.

### Example

```javascript
import HyperstackApi from '@nexgencloud/hyperstack-sdk-javascript';
let defaultClient = HyperstackApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new HyperstackApi.VouchersApi();
let payload = new HyperstackApi.RedeemVoucherPayload(); // RedeemVoucherPayload | 
apiInstance.redeemAVoucher(payload).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **payload** | [**RedeemVoucherPayload**](RedeemVoucherPayload.md)|  | 

### Return type

[**VoucherRedeemResponseSchema**](VoucherRedeemResponseSchema.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


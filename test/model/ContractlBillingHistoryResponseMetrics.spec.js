/**
 * Infrahub-API
 * Leverage the Infrahub API and Hyperstack platform to easily create, manage, and scale powerful GPU virtual machines and their associated resources.   Access this SDK to automate the deployment of your workloads and streamline your infrastructure management.  To contribute, please raise an issue with a bug report, feature request, feedback, or general inquiry.
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.HyperstackApi);
  }
}(this, function(expect, HyperstackApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new HyperstackApi.ContractlBillingHistoryResponseMetrics();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('ContractlBillingHistoryResponseMetrics', function() {
    it('should create an instance of ContractlBillingHistoryResponseMetrics', function() {
      // uncomment below and update the code to test ContractlBillingHistoryResponseMetrics
      //var instance = new HyperstackApi.ContractlBillingHistoryResponseMetrics();
      //expect(instance).to.be.a(HyperstackApi.ContractlBillingHistoryResponseMetrics);
    });

    it('should have the property incurredBill (base name: "incurred_bill")', function() {
      // uncomment below and update the code to test the property incurredBill
      //var instance = new HyperstackApi.ContractlBillingHistoryResponseMetrics();
      //expect(instance).to.be();
    });

  });

}));

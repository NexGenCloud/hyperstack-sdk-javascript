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
    instance = new HyperstackApi.BillingResponse();
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

  describe('BillingResponse', function() {
    it('should create an instance of BillingResponse', function() {
      // uncomment below and update the code to test BillingResponse
      //var instance = new HyperstackApi.BillingResponse();
      //expect(instance).to.be.a(HyperstackApi.BillingResponse);
    });

    it('should have the property calculatedBills (base name: "calculated_bills")', function() {
      // uncomment below and update the code to test the property calculatedBills
      //var instance = new HyperstackApi.BillingResponse();
      //expect(instance).to.be();
    });

    it('should have the property calculationTime (base name: "calculation_time")', function() {
      // uncomment below and update the code to test the property calculationTime
      //var instance = new HyperstackApi.BillingResponse();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new HyperstackApi.BillingResponse();
      //expect(instance).to.be();
    });

  });

}));

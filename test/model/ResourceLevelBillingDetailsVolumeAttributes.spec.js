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
    instance = new HyperstackApi.ResourceLevelBillingDetailsVolumeAttributes();
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

  describe('ResourceLevelBillingDetailsVolumeAttributes', function() {
    it('should create an instance of ResourceLevelBillingDetailsVolumeAttributes', function() {
      // uncomment below and update the code to test ResourceLevelBillingDetailsVolumeAttributes
      //var instance = new HyperstackApi.ResourceLevelBillingDetailsVolumeAttributes();
      //expect(instance).to.be.a(HyperstackApi.ResourceLevelBillingDetailsVolumeAttributes);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new HyperstackApi.ResourceLevelBillingDetailsVolumeAttributes();
      //expect(instance).to.be();
    });

    it('should have the property infrahubId (base name: "infrahub_id")', function() {
      // uncomment below and update the code to test the property infrahubId
      //var instance = new HyperstackApi.ResourceLevelBillingDetailsVolumeAttributes();
      //expect(instance).to.be();
    });

    it('should have the property resourceName (base name: "resource_name")', function() {
      // uncomment below and update the code to test the property resourceName
      //var instance = new HyperstackApi.ResourceLevelBillingDetailsVolumeAttributes();
      //expect(instance).to.be();
    });

    it('should have the property subresourceAmount (base name: "subresource_amount")', function() {
      // uncomment below and update the code to test the property subresourceAmount
      //var instance = new HyperstackApi.ResourceLevelBillingDetailsVolumeAttributes();
      //expect(instance).to.be();
    });

    it('should have the property subresourceType (base name: "subresource_type")', function() {
      // uncomment below and update the code to test the property subresourceType
      //var instance = new HyperstackApi.ResourceLevelBillingDetailsVolumeAttributes();
      //expect(instance).to.be();
    });

  });

}));

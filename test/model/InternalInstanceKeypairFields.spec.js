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
    instance = new HyperstackApi.InternalInstanceKeypairFields();
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

  describe('InternalInstanceKeypairFields', function() {
    it('should create an instance of InternalInstanceKeypairFields', function() {
      // uncomment below and update the code to test InternalInstanceKeypairFields
      //var instance = new HyperstackApi.InternalInstanceKeypairFields();
      //expect(instance).to.be.a(HyperstackApi.InternalInstanceKeypairFields);
    });

    it('should have the property createdAt (base name: "created_at")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instance = new HyperstackApi.InternalInstanceKeypairFields();
      //expect(instance).to.be();
    });

    it('should have the property environment (base name: "environment")', function() {
      // uncomment below and update the code to test the property environment
      //var instance = new HyperstackApi.InternalInstanceKeypairFields();
      //expect(instance).to.be();
    });

    it('should have the property fingerprint (base name: "fingerprint")', function() {
      // uncomment below and update the code to test the property fingerprint
      //var instance = new HyperstackApi.InternalInstanceKeypairFields();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new HyperstackApi.InternalInstanceKeypairFields();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new HyperstackApi.InternalInstanceKeypairFields();
      //expect(instance).to.be();
    });

    it('should have the property publicKey (base name: "public_key")', function() {
      // uncomment below and update the code to test the property publicKey
      //var instance = new HyperstackApi.InternalInstanceKeypairFields();
      //expect(instance).to.be();
    });

  });

}));

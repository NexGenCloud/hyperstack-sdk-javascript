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
    instance = new HyperstackApi.AddUpdateFlavorOrganizationPayload();
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

  describe('AddUpdateFlavorOrganizationPayload', function() {
    it('should create an instance of AddUpdateFlavorOrganizationPayload', function() {
      // uncomment below and update the code to test AddUpdateFlavorOrganizationPayload
      //var instance = new HyperstackApi.AddUpdateFlavorOrganizationPayload();
      //expect(instance).to.be.a(HyperstackApi.AddUpdateFlavorOrganizationPayload);
    });

    it('should have the property cpu (base name: "cpu")', function() {
      // uncomment below and update the code to test the property cpu
      //var instance = new HyperstackApi.AddUpdateFlavorOrganizationPayload();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new HyperstackApi.AddUpdateFlavorOrganizationPayload();
      //expect(instance).to.be();
    });

    it('should have the property disk (base name: "disk")', function() {
      // uncomment below and update the code to test the property disk
      //var instance = new HyperstackApi.AddUpdateFlavorOrganizationPayload();
      //expect(instance).to.be();
    });

    it('should have the property ephemeral (base name: "ephemeral")', function() {
      // uncomment below and update the code to test the property ephemeral
      //var instance = new HyperstackApi.AddUpdateFlavorOrganizationPayload();
      //expect(instance).to.be();
    });

    it('should have the property gpuCount (base name: "gpu_count")', function() {
      // uncomment below and update the code to test the property gpuCount
      //var instance = new HyperstackApi.AddUpdateFlavorOrganizationPayload();
      //expect(instance).to.be();
    });

    it('should have the property gpuId (base name: "gpu_id")', function() {
      // uncomment below and update the code to test the property gpuId
      //var instance = new HyperstackApi.AddUpdateFlavorOrganizationPayload();
      //expect(instance).to.be();
    });

    it('should have the property isPublic (base name: "is_public")', function() {
      // uncomment below and update the code to test the property isPublic
      //var instance = new HyperstackApi.AddUpdateFlavorOrganizationPayload();
      //expect(instance).to.be();
    });

    it('should have the property labels (base name: "labels")', function() {
      // uncomment below and update the code to test the property labels
      //var instance = new HyperstackApi.AddUpdateFlavorOrganizationPayload();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new HyperstackApi.AddUpdateFlavorOrganizationPayload();
      //expect(instance).to.be();
    });

    it('should have the property openstackId (base name: "openstack_id")', function() {
      // uncomment below and update the code to test the property openstackId
      //var instance = new HyperstackApi.AddUpdateFlavorOrganizationPayload();
      //expect(instance).to.be();
    });

    it('should have the property organizations (base name: "organizations")', function() {
      // uncomment below and update the code to test the property organizations
      //var instance = new HyperstackApi.AddUpdateFlavorOrganizationPayload();
      //expect(instance).to.be();
    });

    it('should have the property ram (base name: "ram")', function() {
      // uncomment below and update the code to test the property ram
      //var instance = new HyperstackApi.AddUpdateFlavorOrganizationPayload();
      //expect(instance).to.be();
    });

    it('should have the property regionId (base name: "region_id")', function() {
      // uncomment below and update the code to test the property regionId
      //var instance = new HyperstackApi.AddUpdateFlavorOrganizationPayload();
      //expect(instance).to.be();
    });

  });

}));

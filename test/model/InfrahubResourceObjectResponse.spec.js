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
    instance = new HyperstackApi.InfrahubResourceObjectResponse();
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

  describe('InfrahubResourceObjectResponse', function() {
    it('should create an instance of InfrahubResourceObjectResponse', function() {
      // uncomment below and update the code to test InfrahubResourceObjectResponse
      //var instance = new HyperstackApi.InfrahubResourceObjectResponse();
      //expect(instance).to.be.a(HyperstackApi.InfrahubResourceObjectResponse);
    });

    it('should have the property actualHostPrice (base name: "actual_host_price")', function() {
      // uncomment below and update the code to test the property actualHostPrice
      //var instance = new HyperstackApi.InfrahubResourceObjectResponse();
      //expect(instance).to.be();
    });

    it('should have the property actualPrice (base name: "actual_price")', function() {
      // uncomment below and update the code to test the property actualPrice
      //var instance = new HyperstackApi.InfrahubResourceObjectResponse();
      //expect(instance).to.be();
    });

    it('should have the property contractId (base name: "contract_id")', function() {
      // uncomment below and update the code to test the property contractId
      //var instance = new HyperstackApi.InfrahubResourceObjectResponse();
      //expect(instance).to.be();
    });

    it('should have the property host (base name: "host")', function() {
      // uncomment below and update the code to test the property host
      //var instance = new HyperstackApi.InfrahubResourceObjectResponse();
      //expect(instance).to.be();
    });

    it('should have the property hostPrice (base name: "host_price")', function() {
      // uncomment below and update the code to test the property hostPrice
      //var instance = new HyperstackApi.InfrahubResourceObjectResponse();
      //expect(instance).to.be();
    });

    it('should have the property infrahubId (base name: "infrahub_id")', function() {
      // uncomment below and update the code to test the property infrahubId
      //var instance = new HyperstackApi.InfrahubResourceObjectResponse();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new HyperstackApi.InfrahubResourceObjectResponse();
      //expect(instance).to.be();
    });

    it('should have the property nexgenActualPrice (base name: "nexgen_actual_price")', function() {
      // uncomment below and update the code to test the property nexgenActualPrice
      //var instance = new HyperstackApi.InfrahubResourceObjectResponse();
      //expect(instance).to.be();
    });

    it('should have the property nexgenPrice (base name: "nexgen_price")', function() {
      // uncomment below and update the code to test the property nexgenPrice
      //var instance = new HyperstackApi.InfrahubResourceObjectResponse();
      //expect(instance).to.be();
    });

    it('should have the property price (base name: "price")', function() {
      // uncomment below and update the code to test the property price
      //var instance = new HyperstackApi.InfrahubResourceObjectResponse();
      //expect(instance).to.be();
    });

    it('should have the property resources (base name: "resources")', function() {
      // uncomment below and update the code to test the property resources
      //var instance = new HyperstackApi.InfrahubResourceObjectResponse();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new HyperstackApi.InfrahubResourceObjectResponse();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new HyperstackApi.InfrahubResourceObjectResponse();
      //expect(instance).to.be();
    });

  });

}));

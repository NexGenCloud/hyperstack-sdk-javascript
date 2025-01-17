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
    instance = new HyperstackApi.CreateFirewallRulePayload();
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

  describe('CreateFirewallRulePayload', function() {
    it('should create an instance of CreateFirewallRulePayload', function() {
      // uncomment below and update the code to test CreateFirewallRulePayload
      //var instance = new HyperstackApi.CreateFirewallRulePayload();
      //expect(instance).to.be.a(HyperstackApi.CreateFirewallRulePayload);
    });

    it('should have the property direction (base name: "direction")', function() {
      // uncomment below and update the code to test the property direction
      //var instance = new HyperstackApi.CreateFirewallRulePayload();
      //expect(instance).to.be();
    });

    it('should have the property ethertype (base name: "ethertype")', function() {
      // uncomment below and update the code to test the property ethertype
      //var instance = new HyperstackApi.CreateFirewallRulePayload();
      //expect(instance).to.be();
    });

    it('should have the property portRangeMax (base name: "port_range_max")', function() {
      // uncomment below and update the code to test the property portRangeMax
      //var instance = new HyperstackApi.CreateFirewallRulePayload();
      //expect(instance).to.be();
    });

    it('should have the property portRangeMin (base name: "port_range_min")', function() {
      // uncomment below and update the code to test the property portRangeMin
      //var instance = new HyperstackApi.CreateFirewallRulePayload();
      //expect(instance).to.be();
    });

    it('should have the property protocol (base name: "protocol")', function() {
      // uncomment below and update the code to test the property protocol
      //var instance = new HyperstackApi.CreateFirewallRulePayload();
      //expect(instance).to.be();
    });

    it('should have the property remoteIpPrefix (base name: "remote_ip_prefix")', function() {
      // uncomment below and update the code to test the property remoteIpPrefix
      //var instance = new HyperstackApi.CreateFirewallRulePayload();
      //expect(instance).to.be();
    });

  });

}));

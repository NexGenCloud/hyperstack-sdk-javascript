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
    instance = new HyperstackApi.BillingApi();
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

  describe('BillingApi', function() {
    describe('getAllThresholdsForOrganization', function() {
      it('should call getAllThresholdsForOrganization successfully', function(done) {
        //uncomment below and update the code to test getAllThresholdsForOrganization
        //instance.getAllThresholdsForOrganization(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getBillingUsage', function() {
      it('should call getBillingUsage successfully', function(done) {
        //uncomment below and update the code to test getBillingUsage
        //instance.getBillingUsage(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getLastDayCost', function() {
      it('should call getLastDayCost successfully', function(done) {
        //uncomment below and update the code to test getLastDayCost
        //instance.getLastDayCost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveBillingHistoryForASpecificBillingCycle', function() {
      it('should call retrieveBillingHistoryForASpecificBillingCycle successfully', function(done) {
        //uncomment below and update the code to test retrieveBillingHistoryForASpecificBillingCycle
        //instance.retrieveBillingHistoryForASpecificBillingCycle(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveBillingHistoryOfASpecificSnapshotForASpecificBillingCycle', function() {
      it('should call retrieveBillingHistoryOfASpecificSnapshotForASpecificBillingCycle successfully', function(done) {
        //uncomment below and update the code to test retrieveBillingHistoryOfASpecificSnapshotForASpecificBillingCycle
        //instance.retrieveBillingHistoryOfASpecificSnapshotForASpecificBillingCycle(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveBillingHistoryOfASpecificVirtualMachineForASpecificBillingCycle', function() {
      it('should call retrieveBillingHistoryOfASpecificVirtualMachineForASpecificBillingCycle successfully', function(done) {
        //uncomment below and update the code to test retrieveBillingHistoryOfASpecificVirtualMachineForASpecificBillingCycle
        //instance.retrieveBillingHistoryOfASpecificVirtualMachineForASpecificBillingCycle(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveBillingHistoryOfASpecificVolumeForASpecificBillingCycle', function() {
      it('should call retrieveBillingHistoryOfASpecificVolumeForASpecificBillingCycle successfully', function(done) {
        //uncomment below and update the code to test retrieveBillingHistoryOfASpecificVolumeForASpecificBillingCycle
        //instance.retrieveBillingHistoryOfASpecificVolumeForASpecificBillingCycle(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveBillingHistoryOfContractForASpecificBillingCycle', function() {
      it('should call retrieveBillingHistoryOfContractForASpecificBillingCycle successfully', function(done) {
        //uncomment below and update the code to test retrieveBillingHistoryOfContractForASpecificBillingCycle
        //instance.retrieveBillingHistoryOfContractForASpecificBillingCycle(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveBillingHistoryOfSnapshotForASpecificBillingCycle', function() {
      it('should call retrieveBillingHistoryOfSnapshotForASpecificBillingCycle successfully', function(done) {
        //uncomment below and update the code to test retrieveBillingHistoryOfSnapshotForASpecificBillingCycle
        //instance.retrieveBillingHistoryOfSnapshotForASpecificBillingCycle(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveBillingHistoryOfVirtualMachineForASpecificBillingCycle', function() {
      it('should call retrieveBillingHistoryOfVirtualMachineForASpecificBillingCycle successfully', function(done) {
        //uncomment below and update the code to test retrieveBillingHistoryOfVirtualMachineForASpecificBillingCycle
        //instance.retrieveBillingHistoryOfVirtualMachineForASpecificBillingCycle(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveBillingHistoryOfVolumeForASpecificBillingCycle', function() {
      it('should call retrieveBillingHistoryOfVolumeForASpecificBillingCycle successfully', function(done) {
        //uncomment below and update the code to test retrieveBillingHistoryOfVolumeForASpecificBillingCycle
        //instance.retrieveBillingHistoryOfVolumeForASpecificBillingCycle(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveHourlyCostDatapointsOfASpecificSnapshotForASpecificBillingCycle', function() {
      it('should call retrieveHourlyCostDatapointsOfASpecificSnapshotForASpecificBillingCycle successfully', function(done) {
        //uncomment below and update the code to test retrieveHourlyCostDatapointsOfASpecificSnapshotForASpecificBillingCycle
        //instance.retrieveHourlyCostDatapointsOfASpecificSnapshotForASpecificBillingCycle(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveHourlyCostDatapointsOfASpecificVirtualMachineForASpecificBillingCycle', function() {
      it('should call retrieveHourlyCostDatapointsOfASpecificVirtualMachineForASpecificBillingCycle successfully', function(done) {
        //uncomment below and update the code to test retrieveHourlyCostDatapointsOfASpecificVirtualMachineForASpecificBillingCycle
        //instance.retrieveHourlyCostDatapointsOfASpecificVirtualMachineForASpecificBillingCycle(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveHourlyCostDatapointsOfASpecificVolumeForASpecificBillingCycle', function() {
      it('should call retrieveHourlyCostDatapointsOfASpecificVolumeForASpecificBillingCycle successfully', function(done) {
        //uncomment below and update the code to test retrieveHourlyCostDatapointsOfASpecificVolumeForASpecificBillingCycle
        //instance.retrieveHourlyCostDatapointsOfASpecificVolumeForASpecificBillingCycle(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveSubResourcesHistoricalCostDatapointsOfAVirtual', function() {
      it('should call retrieveSubResourcesHistoricalCostDatapointsOfAVirtual successfully', function(done) {
        //uncomment below and update the code to test retrieveSubResourcesHistoricalCostDatapointsOfAVirtual
        //instance.retrieveSubResourcesHistoricalCostDatapointsOfAVirtual(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveTotalCostsAndNonDiscountCostsForSubResources', function() {
      it('should call retrieveTotalCostsAndNonDiscountCostsForSubResources successfully', function(done) {
        //uncomment below and update the code to test retrieveTotalCostsAndNonDiscountCostsForSubResources
        //instance.retrieveTotalCostsAndNonDiscountCostsForSubResources(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveVmBillingEventsHistory', function() {
      it('should call retrieveVmBillingEventsHistory successfully', function(done) {
        //uncomment below and update the code to test retrieveVmBillingEventsHistory
        //instance.retrieveVmBillingEventsHistory(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveVolumeBillingEventsHistory', function() {
      it('should call retrieveVolumeBillingEventsHistory successfully', function(done) {
        //uncomment below and update the code to test retrieveVolumeBillingEventsHistory
        //instance.retrieveVolumeBillingEventsHistory(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateSubscribeOrUnsubscribeNotificationThreshold', function() {
      it('should call updateSubscribeOrUnsubscribeNotificationThreshold successfully', function(done) {
        //uncomment below and update the code to test updateSubscribeOrUnsubscribeNotificationThreshold
        //instance.updateSubscribeOrUnsubscribeNotificationThreshold(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));

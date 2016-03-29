assert = require('assert');


describe('ServiceGroupService', function() {


  describe('#getServiceGroupsByProfileId()', function() {
      
      
       it('should return records', function (done) {
      
      
        ServiceGroupService.getServiceGroupsByProfileId('568fa14122117f5b21406794',
        function onComplete(error,serviceGroup) {
            assert(serviceGroup.length > 0);
            
            done();
        });
       
      });
      
  });
  
  
  describe('#getServicesByGroupId()', function() {
      
      
       it('should return records', function (done) {
      
      
        ServiceGroupService.getServicesByGroupId('561a675ee860bd08da000026',
        function onComplete(error,services) {
            assert(services.length >0);
            
            done();
        });
       
      });
      
  });
  
  describe('#getServicePhotosByService()', function() {
       it('should return records', function (done) {
        ServiceGroupService.getServicePhotosByService('5611095dfee9b8094300000e',
        function onComplete(error,servicesImgs) {
            assert(servicesImgs.length >0);
            
            done();
        });
       
      });
      
  });
  
  
  describe('#getServicePhotosByService()', function() {
       it('should return records', function (done) {
        ServiceGroupService.getServicePhotosByService('5611095dfee9b8094300000e',
        function onComplete(error,servicesImgs) {
            assert(servicesImgs.length >0);
            
            done();
        });
       
      });
      
  });
});
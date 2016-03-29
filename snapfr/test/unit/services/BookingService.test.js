assert = require('assert');


describe('BookingService', function() {

  describe('#getPendingBookingRequestsFromCustomers()', function() {
      
      
       it('should return records', function (done) {
      
      
        BookingService.getPendingBookingRequestsFromCustomers('55f95af4fee9b8112700000a',
        function onComplete(error,bookings) {
            
           
            assert(bookings.length > 0);
            
            done();
        });
       
      });
      
  });
  
  
   describe('#getPendingBookingRequestsAsCustomer()', function() {
      
      
       it('should return records', function (done) {
      
      
        BookingService.getPendingBookingRequestsAsCustomer('55f95ef1fee9b8112700000e',
        function onComplete(error,bookings) {
            
            assert(bookings.length > 0);
            
            done();
        });
       
      });
      
  });
  
  
  describe('#getBookingsFromCustomers()', function() {
      
      
       it('should return records', function (done) {
      
      
        BookingService.getBookingsFromCustomers('55f95af4fee9b8112700000a',
        function onComplete(error,bookings) {
       
            assert(bookings.length > 0);
            
            done();
        });
       
      });
      
  });
  
  
   describe('#getBookingsAsCustomer()', function() {
      
      
       it('should return records', function (done) {
      
      
        BookingService.getBookingsAsCustomer('55f95ef1fee9b8112700000e',
        function onComplete(error,bookings) {
   
            assert(bookings.length > 0);
            
            done();
        });
       
      });
      
  });
  //getBookingsAsCustomer
  
  
});
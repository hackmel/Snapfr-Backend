var url = 'http://localhost:3000';
var request = require('supertest') (url);
var assert = require('assert');

describe('BookingController', function() {


  describe('#getPendingBookingRequestsFromCustomers()', function() {
      
      
      it('should should return code 01', function (done) {
      var req =request.post('/getPendingBookingRequestsFromCustomers')
              .send({ photographer_id: '55f95af4fee9b8112700000a'})
              .expect(200)
              .end(function(err,res){
                
                if(err){
                  throw err;
                }
                 
                  assert(res.body.code !='');
                  assert(res.body.code != null);
                  assert.equal(res.body.code,sails.config.responseConstant.success.code);
                  done();
              });
             
    });
      
  });
  
  
  
  describe('#getPendingBookingRequestsAsCustomer()', function() {
      
      
      it('should should return code 01', function (done) {
      var req =request.post('/getPendingBookingRequestsAsCustomer')
              .send({ photographer_id: '55f95ef1fee9b8112700000e'})
              .expect(200)
              .end(function(err,res){
                
                if(err){
                  throw err;
                }
                 
                  assert(res.body.code !='');
                  assert(res.body.code != null);
                  assert.equal(res.body.code,sails.config.responseConstant.success.code);
                  done();
              });
             
    });
      
  });
  
  
  describe('#getBookingsAsCustomer()', function() {
      
      
      it('should should return code 01', function (done) {
      var req =request.post('/getBookingsAsCustomer')
              .send({ photographer_id: '55f95ef1fee9b8112700000e'})
              .expect(200)
              .end(function(err,res){
                
                if(err){
                  throw err;
                }
                 
                  assert(res.body.code !='');
                  assert(res.body.code != null);
                  assert.equal(res.body.code,sails.config.responseConstant.success.code);
                  done();
              });
             
    });
      
  });
  
  describe('#getBookingsFromCustomers()', function() {
      
      
      it('should should return code 01', function (done) {
      var req =request.post('/getBookingsFromCustomers')
              .send({ photographer_id: '55f95af4fee9b8112700000a'})
              .expect(200)
              .end(function(err,res){
                
                if(err){
                  throw err;
                }
                 
                  assert(res.body.code !='');
                  assert(res.body.code != null);
                  assert.equal(res.body.code,sails.config.responseConstant.success.code);
                  done();
              });
             
    });
      
  });
  
});
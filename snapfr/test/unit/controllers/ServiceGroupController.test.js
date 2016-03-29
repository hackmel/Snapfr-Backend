

var url = 'http://localhost:3000';
var request = require('supertest') (url);
var assert = require('assert');

describe('ServiceGroupController', function() {


  describe('#getServiceGroupsByProfileId()', function() {
      
      
      it('should should return code 01', function (done) {
      var req =request.post('/getServiceGroupsByProfileId')
              .send({ email: '568fa14122117f5b21406794'})
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
  
  
  
  describe('#getServicesByGroupId()', function() {
      
      
      it('should should return code 01', function (done) {
      var req =request.post('/getServicesByGroupId')
              .send({ email: '561a675ee860bd08da000026'})
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
  
  
  describe('#getServicePhotosByService()', function() {
      
      
      it('should should return code 01', function (done) {
      var req =request.post('/getServicePhotosByService')
              .send({ email: '5611095dfee9b8094300000e'})
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
'use strict';

//var userProfileController = require('../../api/controllers/UserProfileController.js');
var url = 'http://localhost:3000';
var request = require('supertest') (url);
var assert = require('assert');


describe('UsersProfileController', function() {




  describe('#getUserByEmail() is passed an existing email address and should return a record', function() {
    it('should should return code 01', function (done) {
      var req =request.post('/getUserByEmail')
              .send({ email: 'hackmel@yahoo.com'})
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
    
    it('should should return a message Successful', function (done) {
      var req =request.post('/getUserByEmail')
              .send({ email: 'hackmel@yahoo.com'})
              .expect(200)
              .end(function(err,res){
                
                if(err){
                  throw err;
                }
                 
                  assert.equal(res.body.message,sails.config.responseConstant.success.message);
                  done();
              });
             
    });
    
    
     it('error should return null', function (done) {
      var req =request.post('/getUserByEmail')
              .send({ email: 'hackmel@yahoo.com'})
              .expect(200)
              .end(function(err,res){
                
                if(err){
                  throw err;
                }
                 
                  assert.equal(res.body.error, null);
                  done();
              });
             
    });
    
    it('data should not return null', function (done) {
      var req =request.post('/getUserByEmail')
              .send({ email: 'hackmel@yahoo.com'})
              .expect(200)
              .end(function(err,res){
                
                if(err){
                  throw err;
                }
                 
                  assert(res.body.data != null);
                  done();
              });
             
    });
    
  });  
  
    
    
    describe('#getUserByEmail() is passed an non-existing email address and should not return a record', function() {
    it('should should return code 02', function (done) {
      var req =request.post('/getUserByEmail')
              .send({ email: 'hackmel@yahoo.comx'})
              .expect(200)
              .end(function(err,res){
                
                if(err){
                  throw err;
                }
                 
                  assert(res.body.code !='');
                  assert(res.body.code != null);
                  assert.equal(res.body.code,sails.config.responseConstant.record_not_found.code);
                  done();
              });
             
    });
    
    it('should should return a message Record not found', function (done) {
      var req =request.post('/getUserByEmail')
              .send({ email: 'hackmel@yahoo.comx'})
              .expect(200)
              .end(function(err,res){
                
                if(err){
                  throw err;
                }
                 
                  assert.equal(res.body.message,sails.config.responseConstant.record_not_found.message);
                  done();
              });
             
    });
    
    
     it('error should return null', function (done) {
      var req =request.post('/getUserByEmail')
              .send({ email: 'hackmel@yahoo.comx'})
              .expect(200)
              .end(function(err,res){
                
                if(err){
                  throw err;
                }
                 
                  assert.equal(res.body.error, null);
                  done();
              });
             
    });
    
    it('data should  return null', function (done) {
      var req =request.post('/getUserByEmail')
              .send({ email: 'hackmel@yahoo.comx'})
              .expect(200)
              .end(function(err,res){
                
                if(err){
                  throw err;
                }
                 
                  assert(res.body.data == null);
                  done();
              });
             
    });
   });
   
   
   
   describe('#getProfileByEmail() is passed an existing email address', function() {
    
    it('should  return a record', function (done) {
      var req =request.post('/getProfileByEmail')
              .send({ email: 'hackmel@yahoo.com'})
              .expect(200)
              .end(function(err,res){
                
                if(err){
                  throw err;
                }
                 
                  assert(res.body.data != null);
                  done();
              });
    });
    
    it('should return the user data record as well', function (done) {
      var req =request.post('/getProfileByEmail')
              .send({ email: 'hackmel@yahoo.com'})
              .expect(200)
              .end(function(err,res){
                
                if(err){
                  throw err;
                }
                 
                  assert(res.body.data != null);
                  done();
              });
       
    });
  });
  
  
  describe('#getProfileById is passed an ID', function() {
    
    it('should  return a record', function (done) {
      var req =request.post('/getProfileById')
              .send({ profile_id: '568e546e7f457c4f1c78d05e'})
              .expect(200)
              .end(function(err,res){
                
                if(err){
                  throw err;
                }
                 
                  assert(res.body.data != null);
                  done();
              });
    });
    
    it('should return the user data record as well', function (done) {
      var req =request.post('/getProfileById')
              .send({ profile_id: '568e546e7f457c4f1c78d05e'})
              .expect(200)
              .end(function(err,res){
                
                if(err){
                  throw err;
                }
                 
                  assert(res.body.data != null);
                  done();
              });
       
    });
  });
  
  
  describe('#getUserByEmailPassword is passed a valid email and password', function() {
    
    it('should  return a record', function (done) {
      var req =request.post('/getUserByEmailPassword')
              .send({ email: 'test2@yahoo.com',password:'p'})
              .expect(200)
              .end(function(err,res){
                
                if(err){
                  throw err;
                }
                 
                  assert(res.body.data != null);
                  done();
              });
    });
    
  });
  
  describe('#getUserByEmailPassword is passed an in valid email and password', function() {
    
    it('should  not return a record', function (done) {
      var req =request.post('/getUserByEmailPassword')
              .send({ email: 'test2@yahoo.com',password:'pxxx'})
              .expect(200)
              .end(function(err,res){
                
                if(err){
                  throw err;
                }
                 
                  assert(res.body.data == null);
                  done();
              });
    });
    
  });
  
   describe('#getProfileByName is passed a valid name', function() {
    
    it('should  return a record', function (done) {
      var req =request.post('/getProfileByName')
              .send({ name: 'test'})
              .expect(200)
              .end(function(err,res){
                
                if(err){
                  throw err;
                }
                
                 assert(res.body.data.length > 0);
                  done();
              });
    });
    
  });
    
  describe('#getProfileByName is passed an in valid name', function() {
    
    it('should  return a record', function (done) {
      var req =request.post('/getProfileByName')
              .send({ name: 'testxxx'})
              .expect(200)
              .end(function(err,res){
                
                if(err){
                  throw err;
                }
                 
                  assert(res.body.data.length == 0);
                  done();
              });
    });
    
  });
 

});
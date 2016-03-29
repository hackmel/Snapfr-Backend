assert = require('assert');
sinon = require('sinon')

describe('UserProfileService', function() {


  describe('#getUserByEmail() is passed an existing email address', function() {
  
  
    it('should return a record', function (done) {
      
      
      UserProfileService.getUserByEmail('hackmel@yahoo.com',
      function onComplete(error,users) {
          assert(users != null);
          done();
       });
       
    });
    
    
    
    it('should return the profile record as well', function (done) {
      UserProfileService.getUserByEmail('hackmel@yahoo.com',
      function onComplete(error,users) {

          assert(users.profile_id != null);
          done();
        });
       
    });
    
    
     it('Record should contain the correct data', function (done) {
      UserProfileService.getUserByEmail('hackmel@yahoo.com',
      function onComplete(error,users) {
          assert.equal(users.email,'hackmel@yahoo.com');
          assert.equal(users.password,'');
          assert.equal(users.profile_id.name,'Rommel A Suarez');
          assert.equal(users.profile_id.location,'Singapore');
          assert.equal(users.profile_id.id,'568fa14122117f5b21406794');
          done();
        });
       
     });  
     
     
    
    });  
    
  

  describe('#getUserByEmail() is passed a none existing email address', function() {
    
    it('should not return a record', function (done) {
      UserProfileService.getUserByEmail('hackmel@yahoo.comx',
      function onComplete(error,users) {
      
          assert(users == null);
          done();
         
        });
       
    });
  });
  
  
   describe('#getProfileByEmail() is passed an existing email address', function() {
    
    it('should  return a record', function (done) {
      UserProfileService.getProfileByEmail('hackmel@yahoo.com',
      function onComplete(error,profile) {
          assert(profile != null);
          done();
         });
    });
    
    it('should return the user data record as well', function (done) {
      UserProfileService.getProfileByEmail('hackmel@yahoo.com',
      function onComplete(error,profile) {
          assert(profile.users != null);
          done();
        });
       
    });
  });
  
  describe('#getProfileByEmail() is passed an none-existing email address ', function() {
    
    it('should  not return a record', function (done) {
      UserProfileService.getProfileByEmail('hackmel@yahoo.comx',
      function onComplete(error,profile) {
          assert(profile == null);
          done();
         });
    });
    
   
  });
  
  describe('#getProfileById is passed an existing id ', function() {
    
    it('should  return a record', function (done) {
      UserProfileService.getProfileById('568e546e7f457c4f1c78d05e',
      function onComplete(error,profile) {
          assert(profile != null);
          done();
         });
    });
    
    it('should return the user data record as well', function (done) {
      UserProfileService.getProfileById('568e546e7f457c4f1c78d05e',
      function onComplete(error,profile) {
          assert(profile.users != null);
          done();
        });
       
    });
  });
  
  describe('#getProfileById is passed a none existing id ', function() {
    
    it('should  not return a record', function (done) {
      UserProfileService.getProfileById('568e546e7f457c4f1c78d05exx',
      function onComplete(error,profile) {
          assert(profile == null);
          done();
         });
    });
    
    
  });
  
  
  
  describe('#getUserByEmailPassword is passed an existing email and password ', function() {
    
    it('should  return a record', function (done) {
      UserProfileService.getUserByEmailPassword('test2@yahoo.com','p',
      function onComplete(error,user) {
          assert(user != null);
          done();
         });
    });
    
    
  });
  describe('#getUserByEmailPassword is passed a none existing email and password ', function() {
    
    it('should  not return a record', function (done) {
      UserProfileService.getUserByEmailPassword('test2@yahoo.com','pxx',
      function onComplete(error,user) {
          assert(user == null);
          done();
         });
    });
    
    
  });
  
   describe('#getProfileByName is passed a valid name ', function() {
    
    it('should  return a record', function (done) {
      UserProfileService.getProfileByName('mmel',
      function onComplete(error,profile) {
     
         assert(profile.length > 0);
          done();
         });
    });
    
    
  });
  
  describe('#getProfileByName is passed an none existing  name ', function() {
    
    it('should  not return a record', function (done) {
      UserProfileService.getProfileByName('mmelxx',
      function onComplete(error,profile) {
          assert(profile.length == 0);
          done();
         });
    });
    
    
  });
  
  
  
});
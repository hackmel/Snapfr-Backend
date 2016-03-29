var url = 'http://localhost:3000';
var request = require('supertest') (url);
var assert = require('assert');


describe('ReviewController', function() {


  describe('#getReviews()', function() {
      
      
      it('should should return code 01', function (done) {
      var req =request.post('/getReviews')
              .send({ rating_for: '568fa14122117f5b21406794',is_customer:true})
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
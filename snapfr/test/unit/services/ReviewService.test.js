assert = require('assert');


describe('ReviewService', function() {


  describe('#getReviews()', function() {
      
      
       it('should return records', function (done) {
      
      
        ReviewService.getReviews('568fa14122117f5b21406794',true,
        function onComplete(error,reviews) {
       
            assert(reviews.length > 0);
            
            done();
        });
       
      });
      
  });
  
  
  
  
});
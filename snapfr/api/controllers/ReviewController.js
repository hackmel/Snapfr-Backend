/**
 * 
 * ReviewController.js
 * 
 * @description :: This controller is consisting of the different API functions
 *                 for serving HTTP requests for writing/modifying customer or 
 *                 photographer reviews.
 * 
 */

module.exports = {
	
  /*
  * API to retrieve a service groups using profile id
  */
	getReviews: function (req, res) {
     ReviewService.getReviews(req.param('rating_for'),req.param('is_customer'),
      
      function onComplete(error,reviews) {
            
            if(error){
               return res.json({
                    message: sails.config.responseConstant.error.message,
                    error: error,
                    code: sails.config.responseConstant.error.code,
                    data: null
                });
            }
            
            if(reviews) {
               return res.json({
                    message: sails.config.responseConstant.success.message,
                    error: null,
                    code: sails.config.responseConstant.success.code,
                    data: reviews
               });
               
            }else{
              return res.json({
                    message: sails.config.responseConstant.record_not_found.message,
                    error: null,
                    code: sails.config.responseConstant.record_not_found.code,
                    data: null
               });
            }
           
        });
    },
    
  /*
  * API to write reviews
  */
   createReview: function (req, res) {
     ReviewService.createReview(req.param('booking_id'),req.param('rating'),req.param('comments'),req.param('rating_for'),req.param('rating_from'),req.param('is_customer'),
      
      function onComplete(error,reviews) {
            
            if(error){
               return res.json({
                    message: sails.config.responseConstant.error.message,
                    error: error,
                    code: sails.config.responseConstant.error.code,
                    data: null
                });
            }
            
            if(reviews) {
               return res.json({
                    message: sails.config.responseConstant.success.message,
                    error: null,
                    code: sails.config.responseConstant.success.code,
                    data: reviews
               });
               
            }else{
              return res.json({
                    message: sails.config.responseConstant.record_not_found.message,
                    error: null,
                    code: sails.config.responseConstant.record_not_found.code,
                    data: null
               });
            }
           
        });
    },
    
    
  /*
  * API to update reviews
  */
    updateReview: function (req, res) {
     ReviewService.updateReview(req.param('id'),req.param('booking_id'),req.param('rating'),req.param('comments'),req.param('rating_for'),req.param('rating_from'),req.param('is_customer'),
      
      function onComplete(error,reviews) {
            
            if(error){
               return res.json({
                    message: sails.config.responseConstant.error.message,
                    error: error,
                    code: sails.config.responseConstant.error.code,
                    data: null
                });
            }
            
            if(reviews) {
               return res.json({
                    message: sails.config.responseConstant.success.message,
                    error: null,
                    code: sails.config.responseConstant.success.code,
                    data: reviews
               });
               
            }else{
              return res.json({
                    message: sails.config.responseConstant.record_not_found.message,
                    error: null,
                    code: sails.config.responseConstant.record_not_found.code,
                    data: null
               });
            }
           
        });
    },
}
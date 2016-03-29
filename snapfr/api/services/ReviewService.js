

/**
 * 
 * ReviewService.js
 * 
 * @description :: This is the business layer that consists of services that  
 *                  does the actual processing of data for reviews.
 *                  This layer has the business logic on how reviews are written in the database.
 */

module.exports = {
  
  
  /*
  * service to retrieve user review from the database
  */  
 getReviews: function(rating_for,is_customer,onComplete) {
    Reviews.find().where({rating_for_id:rating_for,is_customer :is_customer}).populate('rating_from_id')
    .exec(function(err, reviews) {
      if(err) {
        onComplete(err,null);
      }
      
      if(reviews){
           onComplete(null,reviews);
      }
      
      else
       onComplete(null,null);
        
    });
  },
  
  /*
  * service to write reviews of users into the database
  */
  createReview : function (booking_id,rating,comments,rating_for,rating_from,is_customer,onComplete) {
      Bookings.findOne({id:booking_id})
       .populate('reviews')
        .exec(function(err, bookings) {
        if(err) {
            onComplete(err,null);
        }
        
        if(bookings) {
            bookings.reviews.add({rating:rating,comments:comments,rating_for_id:rating_for,rating_from_id:rating_from,is_customer:is_customer});
            bookings.save(function(err,booking){
            onComplete(null,bookings);
        });
        }
        
        else
        onComplete(null,null);
            
      });
  },
  
  /*
  * service to save user review into the database
  */ 
   updateReview : function (id,booking_id,rating,comments,rating_for,rating_from,is_customer,onComplete) {
       Reviews.update({id:id},{rating:rating,comments:comments,rating_for_id:rating_for,rating_from_id:rating_from,is_customer:is_customer})
        .exec(function(err, review) {
        if(err) {
            onComplete(err,null);
        }
        
        if(review) {
            onComplete(null,review);
         }else{
            onComplete(null,null); 
         }
         
      });
  }
}
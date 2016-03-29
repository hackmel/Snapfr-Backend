
/**
 * 
 * Reviews.js
 * @description :: This model is a data mapping of reviews from mongodb.
 *                 This will hold information about the reviews 
 *                 made by the users/customers
 * 
 */
module.exports = {
attributes: {
    
    rating: {
      type: 'integer'
    },
   comments: {
      type: 'string'
    },
    is_customer: {
      type: 'boolean'
    },
    booking_id: {
      model: 'Bookings'
    },
    
    rating_for_id: {
      model: 'Profiles'
    },
    
    rating_from_id: {
      model: 'Profiles'
    }
    
  }
  };
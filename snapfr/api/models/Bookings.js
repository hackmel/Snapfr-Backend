/**
 * 
 * Bookings.js
 * 
 * @description :: This model is a data mapping of bookings from mongodb.
 *                  This will hold information about the booking.
 * 
 */


module.exports = {

  attributes: {
    
    remarks: {
      type: 'string'
    },
   status: {
      type: 'integer'
    },
    reject_reason: {
      type: 'string'
    },
    cancel_reason: {
      type: 'string'
    },
    photographer_id: {
      model: 'Profiles',
    }, 
    customer_id: {
        model: 'Profiles',
    },
    service_id: {
        model: 'Services',
    },
    reviews : {
        collection: 'Reviews',
        via:'booking_id'
    }
  }
  };
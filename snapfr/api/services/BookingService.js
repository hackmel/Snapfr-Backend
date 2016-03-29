/**
 * 
 * BookingService.js
 * 
 * @description :: This is the business layer that consists of services that  
 *                  does the actual processing of data for bookings.
 *                  This layer has the business logic on how to retrieve, save and delete
 *                  records
 * 
 */


module.exports = {
  
  
  
  
   
/*
  * Service to retrieve pending booking request from customer using profile id
  * Only bookings with status pending,rejected and cancelled request should be returned
  */ 
  
  getPendingBookingRequestsFromCustomers: function(profileId,onComplete) {
    Bookings.find().where({photographer_id:profileId,status :[0,2,3]})
    .populate('photographer_id')
    .populate('customer_id')
    .exec(function(err, bookings) {
      if(err) {
        onComplete(err,null);
      }
      
      console.log(profileId)
       
      console.log(bookings)
      if(bookings)
       onComplete(null,bookings);
      else
       onComplete(null,null);
        
    });
  },
  
  /*
  * Service to retrieve pending booking request as a customer using profile id
  * Only bookings with status pending,rejected and cancelled request should be returned
  */ 
  
  getPendingBookingRequestsAsCustomer: function(profileId,onComplete) {
    Bookings.find().where({customer_id:profileId,status :[0,2,3]})
    .populate('photographer_id')
    .populate('customer_id')
    .exec(function(err, bookings) {
      if(err) {
        onComplete(err,null);
      }
      
       console.log(profileId)
       console.log(bookings)
      if(bookings)
       onComplete(null,bookings);
      else
       onComplete(null,null);
        
    });
  },
  
  
   
  /*
  * Service to retrieve booking request from customer using profile id
  * Only bookings with status accepted,completed and cancelled booking should be returned
  */  
 getBookingsFromCustomers: function(profileId,onComplete) {
    Bookings.find().where({photographer_id:profileId,status :[1,4,5]})
    .populate('photographer_id')
    .populate('customer_id')
    .populate('reviews')
    .exec(function(err, bookings) {
      if(err) {
        onComplete(err,null);
      }
      
      if(bookings)
       onComplete(null,bookings);
      else
       onComplete(null,null);
        
    });
  },
  
 /*
  * Service to retrieve booking request as a customer using profile id
  * Only bookings with status accepted,completed and cancelled booking should be returned
  */ 
 getBookingsAsCustomer: function(profileId,onComplete) {
    Bookings.find().where({customer_id:profileId,status :[1,4,5]})
    .populate('photographer_id')
    .populate('customer_id')
    .populate('reviews')
    .exec(function(err, bookings) {
      if(err) {
        onComplete(err,null);
      }
      
      if(bookings)
       onComplete(null,bookings);
      else
       onComplete(null,null);
        
    });
  },
  
  /*
  * Service to create booking request from customer into the database
  */
  createBooking : function (photographer, customer, service,booking_date,remarks,status,reject_reason,cancel_reason,onComplete) {
       Bookings.create({photographer_id:photographer,
                    customer_id:customer,
                    service_id:service,
                    booking_date:booking_date,
                    remarks:remarks,
                    status:status,
                    reject_reason:reject_reason,
                    cancel_reason:cancel_reason})
              .exec(function onCreate(err, booking){ 
              
                  if(err) {
                      onComplete(err,null)
                  }
                 
                  
                    onComplete(null,booking)
              });
  },
  
  
  /*
  * Service to save booking request from customer into the database
  */
  updateBooking : function (booking_id,photographer, customer, service,booking_date,remarks,status,reject_reason,cancel_reason,onComplete) {
       Bookings.update({id:booking_id},{photographer:photographer,
                    customer:customer,
                    service:service,
                    booking_date:booking_date,
                    remarks:remarks,
                    status:status,
                    reject_reason:reject_reason,
                    cancel_reason:cancel_reason})
              .exec(function onCreate(err, booking){ 
                  
                  if(err) {
                      onComplete(err,null)
                  }
                 
                    onComplete(null,booking)
              });
  }
  
  
}

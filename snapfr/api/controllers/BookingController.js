
/**
 * 
 * BookingController.js
 * 
 * @description :: This controller is consisting of the different API functions
 *                 for serving HTTP requests for Bookings.
 * 
 */

module.exports = {
	
  /*
  * API to retrieve pending booking request from customer using profile id
  */ 
	getPendingBookingRequestsFromCustomers: function (req, res) {
     BookingService.getPendingBookingRequestsFromCustomers(req.param('id'),
      
      function onComplete(error,bookings) {
            
            if(error){
               return res.json({
                    message: sails.config.responseConstant.error.message,
                    error: error,
                    code: sails.config.responseConstant.error.code,
                    data: null
                });
            }
            
            if(bookings) {
               return res.json({
                    message: sails.config.responseConstant.success.message,
                    error: null,
                    code: sails.config.responseConstant.success.code,
                    data: bookings
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
  * API to retrieve pending booking request as customer using profile id
  */ 
   getPendingBookingRequestsAsCustomer: function (req, res) {
     BookingService.getPendingBookingRequestsAsCustomer(req.param('id'),
      
      function onComplete(error,bookings) {
            
            if(error){
               return res.json({
                    message: sails.config.responseConstant.error.message,
                    error: error,
                    code: sails.config.responseConstant.error.code,
                    data: null
                });
            }
            
            if(bookings) {
               return res.json({
                    message: sails.config.responseConstant.success.message,
                    error: null,
                    code: sails.config.responseConstant.success.code,
                    data: bookings
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
  * API to retrieve approved bookings as customer using profile id
  */
    getBookingsAsCustomer: function (req, res) {
     BookingService.getBookingsAsCustomer(req.param('id'),
      
      function onComplete(error,bookings) {
            
            if(error){
               return res.json({
                    message: sails.config.responseConstant.error.message,
                    error: error,
                    code: sails.config.responseConstant.error.code,
                    data: null
                });
            }
            
            if(bookings) {
               return res.json({
                    message: sails.config.responseConstant.success.message,
                    error: null,
                    code: sails.config.responseConstant.success.code,
                    data: bookings
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
  * API to retrieve approved bookings from customer using profile id
  */
    getBookingsFromCustomers: function (req, res) {
     BookingService.getBookingsFromCustomers(req.param('id'),
      
      function onComplete(error,bookings) {
            
            if(error){
               return res.json({
                    message: sails.config.responseConstant.error.message,
                    error: error,
                    code: sails.config.responseConstant.error.code,
                    data: null
                });
            }
            
            if(bookings) {
               return res.json({
                    message: sails.config.responseConstant.success.message,
                    error: null,
                    code: sails.config.responseConstant.success.code,
                    data: bookings
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
  * API to create a booking
  */
     createBooking: function (req, res) {
        BookingService.createBooking(req.param('photographer'), req.param('customer'), req.param('service'),req.param('booking_date'),req.param('remarks'),req.param('status'),req.param('reject_reason'),req.param('cancel_reason'),
        function onComplete(error,booking) {
            
            if(error){
                return res.json({
                        message: sails.config.responseConstant.error.message,
                        error: error,
                        code: sails.config.responseConstant.error.code,
                        data: null
                    });
                }
                
                if(booking) {
                return res.json({
                        message: sails.config.responseConstant.success.message,
                        error: null,
                        code: sails.config.responseConstant.success.code,
                        data: booking
                });
                
                }else{
                return res.json({
                        message: sails.config.responseConstant.record_not_found.message,
                        error: null,
                        code: sails.config.responseConstant.record_not_found.code,
                        data: null
                });
                }
            
        })
    
    },
    
  /*
  * API to update a booking
  */
     updateBooking: function (req, res) {
        BookingService.updateBooking(req.param('booking_id'),req.param('photographer'), req.param('customer'), req.param('service'),req.param('booking_date'),req.param('remarks'),req.param('status'),req.param('reject_reason'),req.param('cancel_reason'),
        function onComplete(error,booking) {
            
            if(error){
                return res.json({
                        message: sails.config.responseConstant.error.message,
                        error: error,
                        code: sails.config.responseConstant.error.code,
                        data: null
                    });
                }
                
                if(booking) {
                return res.json({
                        message: sails.config.responseConstant.success.message,
                        error: null,
                        code: sails.config.responseConstant.success.code,
                        data: booking
                });
                
                }else{
                return res.json({
                        message: sails.config.responseConstant.record_not_found.message,
                        error: null,
                        code: sails.config.responseConstant.record_not_found.code,
                        data: null
                });
                }
            
        })
    
    },
}
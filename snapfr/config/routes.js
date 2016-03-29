/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#!/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
  * etc. depending on your default view engine) your home page.              *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': {
    view: 'homepage'
  },
  
  
  
   /******************************************************************
   * Booking routes
   * ****************************************************************/
  'post /getPendingBookingRequestsFromCustomers': 'BookingController.getPendingBookingRequestsFromCustomers',
  'post /getPendingBookingRequestsAsCustomer': 'BookingController.getPendingBookingRequestsAsCustomer',
  'post /getBookingsAsCustomer': 'BookingController.getBookingsAsCustomer',
  'post /getBookingsFromCustomers': 'BookingController.getBookingsFromCustomers',
  'post /createBooking': 'BookingController.createBooking',
  'post /updateBooking': 'BookingController.updateBooking',
  
   
  /******************************************************************
   * reviews routes
   * ****************************************************************/
  'post /getReviews': 'ReviewController.getReviews',
  'post /updateReview': 'ReviewController.updateReview',
  'post /createReview': 'ReviewController.createReview',

   /******************************************************************
   * Service routes
   * ****************************************************************/
  'post /createService': 'ServiceGroupController.createService',
  'post /updateService': 'ServiceGroupController.updateService',
  'post /deleteService': 'ServiceGroupController.deleteService',
  'post /getServicesByGroupId': 'ServiceGroupController.getServicesByGroupId',
  'post /getServiceById': 'ServiceGroupController.getServiceById',
 
   /******************************************************************
   * Service Group routes
   * ****************************************************************/
  'post /createServiceGroup': 'ServiceGroupController.createServiceGroup',
  'post /updateServiceGroup': 'ServiceGroupController.updateServiceGroup',
  'post /deleteServiceGroup': 'ServiceGroupController.deleteServiceGroup',
  'post /getServiceGroupsByProfileId': 'ServiceGroupController.getServiceGroupsByProfileId',
  'post /getServiceGroupById': 'ServiceGroupController.getServiceGroupById',
   /******************************************************************
   * Service Image routes
   * ****************************************************************/
  'post /addServicePhoto': 'ServiceGroupController.addServicePhoto',
  'post /deleteServicePhoto': 'ServiceGroupController.deleteServicePhoto',
  'post /getServicePhotosByService': 'ServiceGroupController.getServicePhotosByService',
  /******************************************************************
   * Profile and user routes
   * ****************************************************************/
  'post /getProfileByName': 'UserProfileController.getProfileByName',
  'post /getUserByEmailPassword': 'UserProfileController.getUserByEmailPassword',
  'post /getUserByEmail': 'UserProfileController.getUserByEmail',
  'post /getProfileById': 'UserProfileController.getProfileById',
  'post /getProfileByEmail': 'UserProfileController.getProfileByEmail',
  'post /registerUserProfile': 'UserProfileController.registerUserProfile',
  'post /updateUserProfile': 'UserProfileController.updateUserProfile',
  'post /updateUserProfilewithAvatar': 'UserProfileController.updateUserProfilewithAvatar',
  
 /******************************************************************
   * Profile and user routes
   * ****************************************************************/
  'get /show': 'ChatController.show',
 
  /***************************************************************************
  *                                                                          *
  * Custom routes here...                                                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the custom routes above, it   *
  * is matched against Sails route blueprints. See `config/blueprints.js`    *
  * for configuration options and examples.                                  *
  *                                                                          *
  ***************************************************************************/

};

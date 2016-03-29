
/**
* Users.js
*
* @description :: This model is the data mapping of users.
*                 This model represents the users email and password who registered with the app
* 
*/

module.exports = {

  attributes: {
    
    email: {
      type: 'string'
    },
   password: {
      type: 'string'
    },
    
   profile_id: {
     model: 'Profiles'
   }
   
   
   
   
  }
  
 
};


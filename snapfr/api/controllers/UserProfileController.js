/**
 * 
 * UserProfileController.js
 * 
 * @description :: This controller is consisting of the different API functions
 *                 for serving HTTP requests for creating/modifying/retrieve user profilr information
 * 
 */

module.exports = {
	
  /*
  * API to retrieve a user using email address
  */
	getUserByEmail: function (req, res) {
     UserProfileService.getUserByEmail(req.param('email'),
      
      function onComplete(error,users) {
            
            if(error){
               return res.json({
                    message: sails.config.responseConstant.error.message,
                    error: error,
                    code: sails.config.responseConstant.error.code,
                    data: null
                });
            }
            
            if(users) {
               return res.json({
                    message: sails.config.responseConstant.success.message,
                    error: null,
                    code: sails.config.responseConstant.success.code,
                    data: users
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
  * API to retrieve a user using email address and password
  */
    getUserByEmailPassword: function (req, res) {
     UserProfileService.getUserByEmailPassword(req.param('email'),req.param('password'),
      
      function onComplete(error,users) {
            
            if(error){
               return res.json({
                    message: sails.config.responseConstant.error.message,
                    error: error,
                    code: sails.config.responseConstant.error.code,
                    data: null
                });
            }
            
            if(users) {
               return res.json({
                    message: sails.config.responseConstant.success.message,
                    error: null,
                    code: sails.config.responseConstant.success.code,
                    data: users
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
  * API to retrieve a user profile using id
  */
    getProfileById: function (req, res) {
      UserProfileService.getProfileById(req.param('profile_id'),
      
      function onComplete(error,profile) {
            
            if(error){
              return res.json({
                    message: sails.config.responseConstant.error.message,
                    error: error,
                    code: sails.config.responseConstant.error.code,
                    data: null
                });
            }
            
            if(profile) {
               return res.json({
                    message: sails.config.responseConstant.success.message,
                    error: null,
                    code: sails.config.responseConstant.success.code,
                    data: profile
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
  * API to retrieve a user profile using email address
  */
   getProfileByEmail: function (req, res) {
      UserProfileService.getProfileByEmail(req.param('email'),
      
      function onComplete(error,profile) {
            
            if(error){
              return res.json({
                    message: sails.config.responseConstant.error.message,
                    error: error,
                    code: sails.config.responseConstant.error.code,
                    data: null
                });
            }
            
            if(profile) {
               return res.json({
                    message: sails.config.responseConstant.success.message,
                    error: null,
                    code: sails.config.responseConstant.success.code,
                    data: profile
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
  * API to retrieve a user profile using name
  */
   getProfileByName: function (req, res) {
      UserProfileService.getProfileByName(req.param('name'),
      
      function onComplete(error,profile) {
            
            if(error){
              return res.json({
                    message: sails.config.responseConstant.error.message,
                    error: error,
                    code: sails.config.responseConstant.error.code,
                    data: null
                });
            }
            
            if(profile) {
               return res.json({
                    message: sails.config.responseConstant.success.message,
                    error: null,
                    code: sails.config.responseConstant.success.code,
                    data: profile
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
  * API to Register a user
  */
  registerUserProfile: function (req, res) {
    
    // check if avatar is to be upoaded
    
    if (req.file('avatar')) {
        
       console.log(sails.config.appPath) 
       var newFilename = req.param('email') +'_'+'.jpg'; 
      // upload file and save the new user account to DB
      req.file('avatar').upload({dirname: require('path').resolve(sails.config.appPath, 'assets/uploads/avatar/'),  saveAs: newFilename},function (err, files) {
         if (err)
            return res.json({
                   message: sails.config.responseConstant.error.message,
                     error: err,
                      code: sails.config.responseConstant.error.code,
                      data: null
                  });
   
        
         if (files.length > 0)
         
           var tokenizedFileDesc=files[0].fd.split('/');
           var filename = "";
           if (tokenizedFileDesc.length > 0){
             filename = tokenizedFileDesc[tokenizedFileDesc.length -1];
           }
           
           console.log(filename);
           UserProfileService.createUserProfile(
                    req.param('name'),
                    req.param('location'),
                    req.param('is_photographer'),
                    req.param('is_customer'),
                    files[0].type,
                    files[0].size,
                    'uploads/avatar/'+ filename,
                    req.param('email'),
                    req.param('password'),
                    function onComplete(err,profile) {
             
             
                    if(err) 
                       return res.json({
                                message: sails.config.responseConstant.error.message,
                                error: err,
                                code: sails.config.responseConstant.error.code,
                                data: null
                              });
                        
                        
                     return res.json({
                                        message: sails.config.responseConstant.success.message,
                                        error: null,
                                        code: sails.config.responseConstant.success.code,
                                        data: profile
                              });
              
                        
             
                    });
  
          }
    
      )}

  },
  
  /*
  * API to update] a user profile account
  */
  updateUserProfilewithAvatar: function (req, res) {
    
    // check if avatar is to be upoaded
    
    
    if (req.file('avatar')) {
       
       var newFilename = req.param('email') +'_'+'.jpg';
      // upload file and save the new user account to DB
      req.file('avatar').upload({dirname: require('path').resolve(sails.config.appPath, 'assets/uploads/avatar/'),saveAs: newFilename},function (err, files) {
         if (err)
            return res.json({
                   message: sails.config.responseConstant.error.message,
                     error: err,
                      code: sails.config.responseConstant.error.code,
                      data: null
                  });
   
        
         if (files.length > 0) {
             var tokenizedFileDesc=files[0].fd.split('/');
           var filename = "";
           if (tokenizedFileDesc.length > 0){
             filename = tokenizedFileDesc[tokenizedFileDesc.length -1];
           }
           
           console.log(filename);
           UserProfileService.updateUserProfile(
                    req.param('name'),
                    req.param('location'),
                    req.param('is_photographer'),
                    req.param('is_customer'),
                    files[0].type,
                    files[0].size,
                    'uploads/avatar/'+ filename,
                    req.param('email'),
                    req.param('password'),
                    function onComplete(err,profile) {
             
             
                    if(err) 
                       return res.json({
                                message: sails.config.responseConstant.error.message,
                                error: err,
                                code: sails.config.responseConstant.error.code,
                                data: null
                              });
                        
                        
                     return res.json({
                                        message: sails.config.responseConstant.success.message,
                                        error: null,
                                        code: sails.config.responseConstant.success.code,
                                        data: profile
                              });
              
                        
             
                    });
  
           }
         
           
          }
    
      )}

  },
  
  
   /*
  * API to update] a user profile account
  */
  updateUserProfile: function (req, res) {
    
    // check if avatar is to be upoaded
    
    
          console.log("without avatar");
          UserProfileService.updateUserProfile(
                    req.param('name'),
                    req.param('location'),
                    req.param('is_photographer'),
                    req.param('is_customer'),
                    null,
                    0,
                    null,
                    req.param('email'),
                    req.param('password'),
                    function onComplete(err,profile) {
             
             
                    if(err) 
                       return res.json({
                                message: sails.config.responseConstant.error.message,
                                error: err,
                                code: sails.config.responseConstant.error.code,
                                data: null
                              });
                        
                        
                     return res.json({
                                        message: sails.config.responseConstant.success.message,
                                        error: null,
                                        code: sails.config.responseConstant.success.code,
                                        data: profile
                              });
              
                        
             
                    });
      

  }
}
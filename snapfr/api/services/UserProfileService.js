
/**
 * 
 * UserProfileService.js
 * 
 * @description :: This is the business layer that consists of services that  
 *                  does the actual processing of data for user profile.
 *                  This layer is the one that communicates with the data access layer of the model
 *                  to add new user, update user and find a user 
 * 
 */

module.exports = {
  
  
  
  
   
  // Return user profile by email address
  
  getUserByEmail: function(email,onComplete) {
    Users.findOne({email:email})
    .populate('profile_id')
    .exec(function(err, user) {
      if(err) {
        onComplete(err,null);
      }
      
      if(user)
       onComplete(null,user);
      else
       onComplete(null,null);
        
    });
  },
  
    // Return user  by email address and password
  getUserByEmailPassword: function(email,password,onComplete) {
    Users.findOne({email:email,password:password})
    .populate('profile_id')
    .exec(function(err, user) {
      if(err) {
        onComplete(err,null);
      }
      
      console.log(user)
      if(user)
       onComplete(null,user);
      else
       onComplete(null,null);
        
    });
  },
  
   // Return Profile by email address and password
  getProfileByEmail: function(email,onComplete) {
    this.getUserByEmail(email, function(err,user){
        if(err) {
            onComplete(err,null);
        }
        if(user) {
             Profiles.findOne({id:user.profile_id.id}).populate('users')
                .exec(function(err,_profile) {
                   if(err) {
                     onComplete(err,null);
                    }                                    
                                
                    onComplete(null,_profile);
                  }
             ); 
          
         
        }else{
             onComplete(null,null);
        }
        
       
        
    });
  },
  
  // Return a profile  by name
  getProfileByName: function(name,onComplete) {
    Profiles.find().where({name:{contains:name}}).populate('users')
                .exec(function(err,_profile) {
                   if(err) {
                     onComplete(err,null);
                    }                                    
                                
                    onComplete(null,_profile);
                  }
          ); 
   
  },
  
  // Return user profile by id
 getProfileById: function(id, onComplete) {
   Profiles.findOne({id:id}).populate('users')
                .exec(function(err,_profile) {
                   if(err) {
                     onComplete(err,null);
                    }                                    
                                
                    onComplete(null,_profile);
                  }
          ); 
    
  },
  
  // Create new user profile account
 createUserProfile: function(name,location,
                              is_photographer,
                              is_customer,
                              avatar_content_type,
                              avatar_file_size,
                              avatar_file_path,
                              email,
                              password, onComplete) {
    
    Profiles.create({name:name,
                    location:location,
                    is_photographer:is_photographer,
                    is_customer:is_customer,
                    avatar_content_type:avatar_content_type,
                    avatar_file_size:avatar_file_size,
                    avatar_file_path:avatar_file_path})
              .exec(function onCreate(err, profile){ 

                        if(err) {
                          onComplete(err,null);
                        }
              
                       profile.users.add({email:email,
                                          password:password});
                        profile.save(function(err,users){
          
                             Profiles.findOne({id:profile.id}).populate('users')
                             .exec(function(err,_profile) {
                                   if(err) {
                                     onComplete(err,null);
                                    }                                    
                                
                                   onComplete(null,_profile);
                               }
                            ); 
                         
                         
                        });              
             });
    
  },
  
  // Update existing user profile account
  updateUserProfile: function(name,location,
                              is_photographer,
                              is_customer,
                              avatar_content_type,
                              avatar_file_size,
                              avatar_file_path,
                              email,
                              password, onComplete) {
                                  
                                  
        this.getUserByEmail(email, function(err,user){
        if(err) {
            onComplete(err,null);
        }
        if(user) {
            
                // if picture is being uploaded
                if(avatar_file_size > 0) {
                     // save Profile data
                     Profiles.update({id:user.profile_id.id},
                                    {name:name,
                                    location:location,
                                    is_photographer:is_photographer,
                                    is_customer:is_customer,
                                    avatar_content_type:avatar_content_type,
                                    avatar_file_size:avatar_file_size,
                                    avatar_file_path:avatar_file_path})
                            .exec(function onCreate(err, profile){ 

                             if(err) {
                                onComplete(err,null);
                             }
                             // save user data
                             Users.update({email:email},{password:password})
                              .exec(function onCreate(err, user){ 
                                   if(err) {
                                       onComplete(err,null);
                                    }
                                  
                                     onComplete(err,profile);
                             });
                                   
                                    
                       });
                    
                }else{ // if picture is not uploaded then don't update avatar data
                     // save Profile data
                     Profiles.update({id:user.profile_id.id},
                                    {name:name,
                                    location:location,
                                    is_photographer:is_photographer,
                                    is_customer:is_customer})
                            .exec(function onCreate(err, profile){ 

                             if(err) {
                                onComplete(err,null);
                             }
                             // save user data
                             Users.update({email:email},{password:password})
                              .exec(function onCreate(err, user){ 
                                   if(err) {
                                       onComplete(err,null);
                                    }
                                     
                                     onComplete(err,profile);
                             });
                                   
                                    
                       });
                }
                
        }else{
             onComplete(null,null);
        }
        
       
        
    });                          
    
   
    
  }
  
 
  
}

  
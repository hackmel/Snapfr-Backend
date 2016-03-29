/**
 * 
 * ServiceGroupService.js
 * 
 * @description :: This is the business layer that consists of services that  
 *                  does the actual processing of data for service group and it's child services.
 *                
 */

module.exports = {
  
  
  
  
 /*
  * Service to retrieve a service group  by id
  */
  getServiceGroupById: function(groupId,onComplete) {
    Service_Groups.findOne({id:groupId})
    .populate('profile_id')
    .populate('services')
    .exec(function(err, serviceGroup) {
      if(err) {
        onComplete(err,null);
      }
     
      if(serviceGroup)
       onComplete(null,serviceGroup);
      else
       onComplete(null,null);
        
    });
  },
  
  /*
  * Service to retrieve a service group  by profle id from the database
  */
  getServiceGroupsByProfileId: function(profileId,onComplete) {
    Service_Groups.find().where({profile_id:profileId})
    .populate('profile_id')
    .populate('services')
    .exec(function(err, serviceGroup) {
      if(err) {
        onComplete(err,null);
      }
     
      if(serviceGroup)
       onComplete(null,serviceGroup);
      else
       onComplete(null,null);
        
    });
  },
  
 /*
  * Service to create a service group and save it into the database
  */
 createServiceGroup: function(name, summary,profile_id,onComplete) {
    
    
    Profiles.findOne({id:profile_id})
     .exec(function onFind(err,profiles) {
         
         if(err){
             onComplete(err,null);
         }
         
         if(profiles){
             
             profiles.service_groups.add({name:name,summary:summary});
             
             profiles.save(function(err,serbvic){
          
                     Service_Groups.findOne({name:name,summary:summary,profile_id:profile_id})
                    .populate('profile_id')
                    .exec(function(err, serviceGroup) {
                        if(err) {
                            onComplete(err,null);
                        }
                       
                        if(serviceGroup)
                            onComplete(null,serviceGroup);
                        else
                            onComplete(null,null);
                            
                    });
                         
                         
             });              
               
         }
        
    });
     
 },
 
 /*
  * Service to update a service group and save it into the database
  */
 updateServiceGroup: function(id,name, summary,onComplete) {
     Service_Groups.update({id:id},
                          {name:name,
                           summary:summary})
                          .exec(function onUpdate(err, serviceGroups){ 

                            
                             if(err) {
                                onComplete(err,null);
                             }
                             
                             Service_Groups.findOne({id:id})
                            .populate('profile_id')
                            .exec(function(err, serviceGroup) {
                                if(err) {
                                    onComplete(err,null);
                                }
                                
                                if(serviceGroup)
                                    onComplete(null,serviceGroup);
                                else
                                    onComplete(null,null);
                                    
                            });  
                                   
                                    
     });
   
 },
 
 /*
  * Service to delete a service group from the database
  */
 deleteServiceGroup: function(id,onComplete) {
     Service_Groups.destroy({id:id})
                          .exec(function onDestroy(err){ 

                             if(err) {
                                onComplete(err,null);
                             }else{
                                 onComplete(null,null);
                             }
                                    
     });
   
 },
 
 
 /*
  * Service to create a service into the database
  */
createService: function(name, summary,price,service_group_id,onComplete) {
    
    Service_Groups.findOne({id:service_group_id})
    .populate('services')
    .exec(function(err, serviceGroup) {
      if(err) {
        onComplete(err,null);
      }
      
    
      if(serviceGroup) {
         serviceGroup.services.add({name:name,summary:summary,price:price});
         serviceGroup.save(function(err, serviceGroup){
       
             Services.findOne({name:name,summary:summary,price:price}).exec(
                
                function(err,services){
                    if(err)
                       onComplete(err,null)
                      
                    if(services) {
                         onComplete(null,services)
                    }   
                
                });
        });
        
      } else {
         onComplete(null,null);
      }

        
    });
     
 },
 
  /*
  * Service to update a service into the database
  */
 updateService: function(name, summary,price,service_id,onComplete) {
            Services.update({id:service_id},{name:name,summary:summary,price:price}).exec(
                function(err,services){
                    
                  
                    if(err)
                       onComplete(err,null)
                      
                    if(services) {
                          Services.findOne({id:service_id}).exec(
                
                            function(err,services){
                                
                                if(err)
                                onComplete(err,null)
                                
                                if(services) {
                                    onComplete(null,services)
                                }   
                            
                            });
                     }   
                
               });
  
 },
 
  /*
  * Service to retrive a service  from the database by groupId
  */
 getServicesByGroupId :  function(service_group_id, onComplete) {
      Services.find().where({service_group_id:service_group_id})
        .populate('service_images')
        .populate('service_group_id')
        .exec(function(err, services) {
        if(err) {
            onComplete(err,null);
        }
        
        if(services)
        onComplete(null,services);
        else
        onComplete(null,null);
            
        });
    },
 
  /*
  * Service to delete a service  from the database 
  */
 deleteService: function(id,onComplete) {
     Services.destroy({id:id})
            .exec(function onDestroy(err){ 

            if(err) {
               onComplete(err,null);
            }else{
               onComplete(null,null);
            }
                                    
     });
   
 },
 
  /*
  * Service to retrieve a service  from the database 
  */
 getServicesById :  function(service_id, onComplete) {
      Services.findOne({id:service_id})
        .populate('service_images')
        .exec(function(err, services) {
        if(err) {
            onComplete(err,null);
        }
        
        if(services)
        onComplete(null,services);
        else
        onComplete(null,null);
            
        });
    },
 
  /*
  * Service to retrieve a service uploaded image  from the database 
  */ 
 getServicePhotosByService: function(service_id, onComplete) {
      Service_Images.find().where({service_id:service_id})
        .exec(function(err, serviceImgs) {
        if(err) {
            onComplete(err,null);
        }
        
  
        
        if(serviceImgs)
        onComplete(null,serviceImgs);
        else
        onComplete(null,null);
            
        });
 },
 
 
 /*
  * Service to uploaded image  
  */ 
 addServicePhoto: function (service_id,file_content_type,image_file_size,image_file_path,onComplete){
     
     Services.findOne({id:service_id})
        .exec(function(err, services) {
        if(err) 
            onComplete(err,null);
            
           
        if(services){
              services.service_images.add({file_content_type:file_content_type,image_file_size:image_file_size,image_file_path:image_file_path});
              services.save(function(err,service){
                    if (err){
                        onComplete(err,null)
                    }
                   
             
                     if(service) 
                        onComplete(null,service)
                        
                    
              });
        }else {
             onComplete(null,null);
        }
     });
     
 },
 
 /*
  * Service to delete an image  
  */ 
 deleteServicePhoto: function(id, onComplete){
     Service_Images.destroy({id:id}).exec(function onDestroy(err){
         if(err) {
               onComplete(err,null);
          }else{
               onComplete(null,null);
          }
     });
 }
 
}

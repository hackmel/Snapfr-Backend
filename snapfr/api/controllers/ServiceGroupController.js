
/**
 * 
 * ServiceGroupController.js
 * 
 * @description :: This controller is consisting of the different API functions
 *                 for serving HTTP requests for creating/modifying/retrieve servie group information
 * 
 */

module.exports = {




 /*
  * API to retrieve a service group group id
  */
  	
  getServiceGroupById: function (req, res) {
     ServiceGroupService.getServiceGroupById(req.param('service_groupId'),
      
      function onComplete(error,serviceGroup) {
            
            if(error){
               return res.json({
                    message: sails.config.responseConstant.error.message,
                    error: error,
                    code: sails.config.responseConstant.error.code,
                    data: null
                });
            }
            
            if(serviceGroup) {
               return res.json({
                    message: sails.config.responseConstant.success.message,
                    error: null,
                    code: sails.config.responseConstant.success.code,
                    data: serviceGroup
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
  * API to retrieve a service groups using profile id
  */
	getServiceGroupsByProfileId: function (req, res) {
     ServiceGroupService.getServiceGroupsByProfileId(req.param('profile_id'),
      
      function onComplete(error,serviceGroup) {
            
            if(error){
               return res.json({
                    message: sails.config.responseConstant.error.message,
                    error: error,
                    code: sails.config.responseConstant.error.code,
                    data: null
                });
            }
            
            if(serviceGroup) {
               return res.json({
                    message: sails.config.responseConstant.success.message,
                    error: null,
                    code: sails.config.responseConstant.success.code,
                    data: serviceGroup
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
  * API to create a service group 
  */
    createServiceGroup: function (req, res) {
     ServiceGroupService.createServiceGroup(req.param('name'),req.param('summary'),req.param('profile_id'),
      
      function onComplete(error,serviceGroup) {
   
            
            if(error){
               return res.json({
                    message: sails.config.responseConstant.error.message,
                    error: error,
                    code: sails.config.responseConstant.error.code,
                    data: null
                });
            }
            
            if(serviceGroup) {
               return res.json({
                    message: sails.config.responseConstant.success.message,
                    error: null,
                    code: sails.config.responseConstant.success.code,
                    data: serviceGroup
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
  * API to update a service group 
  */
    updateServiceGroup: function (req, res) {
     ServiceGroupService.updateServiceGroup(req.param('id'),req.param('name'),req.param('summary'),
      
      function onComplete(error,serviceGroup) {
            
                   
    
            if(error){
               return res.json({
                    message: sails.config.responseConstant.error.message,
                    error: error,
                    code: sails.config.responseConstant.error.code,
                    data: null
                });
            }
            
            if(serviceGroup) {
               return res.json({
                    message: sails.config.responseConstant.success.message,
                    error: null,
                    code: sails.config.responseConstant.success.code,
                    data: serviceGroup
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
  * API to delete a service group 
  */
    deleteServiceGroup: function (req, res) {
     ServiceGroupService.deleteServiceGroup(req.param('service_group_id'),
      
      function onComplete(error,serviceGroup) {
            
            if(error){
               return res.json({
                    message: sails.config.responseConstant.error.message,
                    error: error,
                    code: sails.config.responseConstant.error.code,
                    data: null
                });
            }
            
           
               return res.json({
                    message: sails.config.responseConstant.success.message,
                    error: null,
                    code: sails.config.responseConstant.success.code,
                    data: null
               });
               
           
           
        });
    },
    
    
  /*
  * API to retrieve services by service group id 
  */
    getServicesByGroupId: function (req, res) {
     ServiceGroupService.getServicesByGroupId(req.param('service_group_id'),
      
      function onComplete(error,services) {
            
            if(error){
               return res.json({
                    message: sails.config.responseConstant.error.message,
                    error: error,
                    code: sails.config.responseConstant.error.code,
                    data: null
                });
            }
            
            if(services) {
               return res.json({
                    message: sails.config.responseConstant.success.message,
                    error: null,
                    code: sails.config.responseConstant.success.code,
                    data: services
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
  * API to create a service
  */
    createService: function (req, res) {
        
        console.log('service_group_id' + req.param('service_group_id'))
        console.log('name' + req.param('name'))
        ServiceGroupService.createService(req.param('name'),req.param('summary'),req.param('price'),req.param('service_group_id'),
        function onComplete(error,services) {
            
            if(error){
                return res.json({
                        message: sails.config.responseConstant.error.message,
                        error: error,
                        code: sails.config.responseConstant.error.code,
                        data: null
                    });
                }
                
                if(services) {
                    
                console.log(services)
                return res.json({
                        message: sails.config.responseConstant.success.message,
                        error: null,
                        code: sails.config.responseConstant.success.code,
                        data: services
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
  * API to update a service
  */
    updateService: function (req, res) {
        ServiceGroupService.updateService(req.param('name'),req.param('summary'),req.param('price'),req.param('service_id'),
        function onComplete(error,services) {
            
            if(error){
                return res.json({
                        message: sails.config.responseConstant.error.message,
                        error: error,
                        code: sails.config.responseConstant.error.code,
                        data: null
                    });
                }
                
                if(services) {
                return res.json({
                        message: sails.config.responseConstant.success.message,
                        error: null,
                        code: sails.config.responseConstant.success.code,
                        data: services
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
  * API to delete a service
  */
    deleteService: function (req, res) {
        ServiceGroupService.deleteService(req.param('service_id'),
        function onComplete(error,services) {
            
            if(error){
                return res.json({
                        message: sails.config.responseConstant.error.message,
                        error: error,
                        code: sails.config.responseConstant.error.code,
                        data: null
                    });
                }
                
                
               return res.json({
                    message: sails.config.responseConstant.success.message,
                    error: null,
                    code: sails.config.responseConstant.success.code,
                    data: null
               });
               
            
        })
    
    },
    
    
  /*
  * API to retrieve a service by id
  */
    getServiceById: function (req, res) {
        ServiceGroupService.getServicesById(req.param('service_id'),
        function onComplete(error,services) {
            
            if(error){
                return res.json({
                        message: sails.config.responseConstant.error.message,
                        error: error,
                        code: sails.config.responseConstant.error.code,
                        data: null
                    });
                }
                
             if(services) {
               return res.json({
                    message: sails.config.responseConstant.success.message,
                    error: null,
                    code: sails.config.responseConstant.success.code,
                    data: services
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
  * API to retrieve service images by service Id
  */
     getServicePhotosByService: function (req, res) {
     ServiceGroupService.getServicePhotosByService(req.param('service_id'),
      
      function onComplete(error,services) {
            
            if(error){
               return res.json({
                    message: sails.config.responseConstant.error.message,
                    error: error,
                    code: sails.config.responseConstant.error.code,
                    data: null
                });
            }
            
            if(services) {
               return res.json({
                    message: sails.config.responseConstant.success.message,
                    error: null,
                    code: sails.config.responseConstant.success.code,
                    data: services
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
  * API to add  images of a service
  */
    addServicePhoto: function (req, res) {
        
        
    if (req.file('service_image')) {
       
      
      // upload file and save the new user account to DB
      req.file('service_image').upload({dirname: require('path').resolve(sails.config.appPath, 'assets/uploads/service_image/')},function (err, files) {
         if (err)
            return res.json({
                   message: sails.config.responseConstant.error.message,
                     error: err,
                      code: sails.config.responseConstant.error.code,
                      data: null
                  });
   
        
           console.log(files[0]);
         if (files.length > 0) {
             var tokenizedFileDesc=files[0].fd.split('/');
           var filename = "";
           if (tokenizedFileDesc.length > 0){
             filename = tokenizedFileDesc[tokenizedFileDesc.length -1];
           }
           
           console.log(filename);
            ServiceGroupService.addServicePhoto(req.param('service_id'),
                    files[0].type,
                    files[0].size,
                    'uploads/service_image/'+ filename,
               function onComplete(error,services) {
            
                    if(error){
                        return res.json({
                                message: sails.config.responseConstant.error.message,
                                error: error,
                                code: sails.config.responseConstant.error.code,
                                data: null
                            });
                        }
                        
                        if(services) {
                        return res.json({
                                message: sails.config.responseConstant.success.message,
                                error: null,
                                code: sails.config.responseConstant.success.code,
                                data: services
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
    
  
           }
         
           
          })
          
        }
        
   
    },
    
    
  /*
  * API to delete images of a service
  */
     deleteServicePhoto: function (req, res) {
        ServiceGroupService.deleteServicePhoto(req.param('id'),
        function onComplete(error,services) {
            
            if(error){
                return res.json({
                        message: sails.config.responseConstant.error.message,
                        error: error,
                        code: sails.config.responseConstant.error.code,
                        data: null
                    });
                }
                
                
                return res.json({
                        message: sails.config.responseConstant.success.message,
                        error: null,
                        code: sails.config.responseConstant.success.code,
                        data: services
                });
            
        })
    
    },
    
}
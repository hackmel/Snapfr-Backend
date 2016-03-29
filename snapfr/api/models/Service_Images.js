
/**
 * Service_Images.js
 * 
 * @description :: This model is a data mapping of service image from mongodb.
 *                  This model will hold information about images uploaded for a service.
 */
module.exports = {

  attributes: {
    
    file_content_type: {
       type: 'string'
    },
    image_file_size: {
       type: 'float'
    },
    image_file_path: {
       type: 'string'
    },
    service_id: {
      model: 'Services',
    },
    
    
    
  }
  };
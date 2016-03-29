
/**
* Services.js
*
* @description :: This model is a data mapping of services in monngodb.
*                 This model will hold information about the service that 
*                 users created or served for customers 
* 
*/


module.exports = {

  attributes: {
    
    name: {
      type: 'string'
    },
   summary: {
      type: 'string'
    },
    price: {
     type: 'float'
    },
    is_customer: {
      type: 'boolean'
    },
    service_group_id: {
      model: 'Service_Groups'
    },
    
    service_images: {
      collection: 'Service_Images',
      via:'service_id'
    }
    
    
    
  }
  };
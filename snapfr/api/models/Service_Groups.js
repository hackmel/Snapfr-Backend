/**
 * Service_Groups.js
 * 
 * @description ::  This model is a data mapping of service_groups from mongodb.
 *                  This will hold information about the different service categories
 *                  that a user offered
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
    profile_id: {
      model: 'Profiles'
    },
    services: {
      collection: 'Services',
      via:'service_group_id'
    },
  }
  };
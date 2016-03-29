
/**
 * Profiles.js
 * 
 * @description :: This model is a data mapping of profiles from mongodb.
 * T                his will hold personal information about the user
 * 
 */
module.exports = {

  attributes: {
    
    name: {
      type: 'string'
    },
   location: {
      type: 'string'
    },
    is_photographer: {
      type: 'boolean'
    },
    is_customer: {
      type: 'boolean'
    },
    users: {
      collection: 'Users',
      via:'profile_id'
    },
    
    service_groups: {
      collection: 'Service_groups',
      via:'profile_id'
    },
    avatar_content_type: {
       type: 'string'
    },
    avatar_file_size: {
       type: 'float'
    },
    avatar_file_path: {
       type: 'string'
    },
    
  }
  };
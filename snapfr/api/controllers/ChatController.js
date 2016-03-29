module.exports = {
	
  /*
  * API to retrieve a service groups using profile id
  */
	show: function (req, res) {
        
        
        
       var socketId = sails.sockets.id(req.socket);

       console.log(socketId)
   
      
       res.view();
        
    }
    
}   
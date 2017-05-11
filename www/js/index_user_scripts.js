/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* button  login */
    
    
        /* button  #Volta */
    
    
        /* button  #Submit */
    $(document).on("click", "#Submit", function(evt)
    {
        /* your code goes here */ 
       view.enviarDados("user");
        return false;
    });
    
        /* button  login */
    
    
        /* button  login */
    
    
        /* button  login */
    
    
        /* button  #Volta */
    
    
        /* button  #Volta */
    
    
        /* button  #btt-login */
    
    
        /* button  #btt-login */
    $(document).on("click", "#btt-login", function(evt)
    {
         /*global activate_page */
         activate_page("#view-cadastro"); 
         return false;
    });
    
        /* button  #Volta */
    $(document).on("click", "#Volta", function(evt)
    {
         /*global activate_page */
         activate_page("#login"); 
         return false;
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();

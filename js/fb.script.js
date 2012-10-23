/* Desarrollado por gomosoft 
   Opensource
   ahora iniciamos el sdk de face :)
*/
    

     fbRoot = document.createElement("div");
     fbRoot.id = "fb-root";

            (function(d){

     var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement('script'); js.id = id; js.async = true;
     js.src = "//connect.facebook.net/en_US/all.js";
     ref.parentNode.insertBefore(js, ref);

         }(document));


 (function($){

 	  var boton, data, filtro = 0;   


    this.ini =  function(vars){

    	   fbIni();
         return this;

     };


  this.fbLogin = function(){

    	 console.log("conectando");    

    

    	 FB.login(function(resp) {

    	 	chkLogin;   	

    	 },data.permisos);


    };

 
   this.chkLogin =  function (resp) {                   
   		  		

                    if (resp.authResponse) {

                    	  console.log("conectado");
                      
                        return {cod:"10",estado:"conectado"};
                   
                    } else {

                    	console.log("no estamos conectado y por eso pediremos conectarnos a traves"+
                    				"de un boton");
                       
                        boton.click(function() {


                           resp = fbLogin();
                                
                                if (resp.authResponse) {
                                    
                                    console.log("estamos conectados");
                                    console.log(fbLogin());	                                      

                                } else {
                                    
                                    console.log("no tenemos permisos");
                                    return {cod:11,estado:"sin permisos"}
                                }
	

                        });
                    }
                };
 
  

    this.fbInfo = function(){

          console.log("obteniendo info del usuario");
    	  FB.api('/me', function(info) {
    	       
    	       console.log(info);
               return info;

             });	  	

    };

  

    this.fbIni = function() {
               
               $(document).ready(function(){ 

              if(filtro == 0){       

                    FB.init({ appId: data.id, 
                    status: true, 
                    cookie: true,
                    xfbml: true,
                    oauth: true});  

                    console.log("ahora a validar el estado de la conexion");

                    FB.getLoginStatus( chkLogin );
                    FB.Event.subscribe( 'auth.statusChange', chkLogin );	
             
           
              }

              filtro++;

            });

            };

    this.compartir =  function (link,callback){

                var share = {
                    method: 'stream.share',
                    u: link
                };

                FB.ui(share, function(response) { 
                                        
                    console.log(response); 
                     

                });

               if(callback)
                       callback;

            }

     function publicaGraph(vars,callback){
            
                this.vars = {

                  message : "Gomosoft, facebook sdk Jquery plugin",
                  link: "http://gomosoft.com",
                  picture: "http://gomosoft.com/img/logo.png",
                  name: "Gomosoft test",
                  description: "Test"

                }

             call = callback;

              if(vars)
                $.extend(this.vars,vars);

                return FB.api('/me/feed', 'post', this.vars, 
              
                function(response) {               
                    
                    if (!response || response.error) {
                        
                       console.log({error : response.error , cod:11});

                    } else {
                        
                        call;                      

                    }
                });
            }



    jQuery.fn.fb = function(vars){    		
    
       boton = $(this);
      

    	 $("body").append("<div id='fb-root'></div>");

    		this.vars = {
    			id : '369642146455483',
    			secret : "dsa9812j12hsa71",
    			permisos : {scope:'email,user_birthday,status_update,publish_stream,user_about_me'}
    		}


         if(vars)
          $.extend(this.vars,vars);


       console.log(this.vars);

       data = this.vars;       

       return ini(this.vars);


    };                  

 

 
})(jQuery);
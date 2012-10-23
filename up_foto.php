<?php

  require_once('php-sdk/facebook.php');

  $config = array(
    'appId' => '213583211996075',
    'secret' => '05fb1d6b618d645edef56862b8eb304c',
    'fileUpload' => true,
  );

  $facebook = new Facebook($config);
  $user_id = $facebook->getUser();


  $photo = '../img/logo.ppg'; 
  $message = 'gomoFB carga de fotos TEST';


    if($user_id) {

 
      try {


        $who = "me";

        if($_GET)
            $who = $_GET["who"];

        if(isset($_GET["pic"]))
           $photo = $_GEt["pic"];

        if(isset($_GET["msg"]))
          $message = $_GET["msg"];

        echo $who;

        $ret_obj = $facebook->api("/$who/photos", 'POST', array(
                                         'source' => '@' . $photo,
                                         'message' => $message,
                                         )
                                      );        

        echo json_encode(array("code"=>202,"msg"=>"todo se ha cargado correctamente"));

      } catch(FacebookApiException $e) {

         echo json_encode(array("code"=>204,"msg"=>"El usuario no esta conectado a nuestra app"));
      }   

    } else {

      // No user, print a link for the user to login
      // To upload a photo to a user's wall, we need photo_upload  permission
      // We'll use the current URL as the redirect_uri, so we don't
      // need to specify it here.

      echo json_encode(array("code"=>204,"msg"=>"Usuario no ha dado permisos"));

    }

  ?>


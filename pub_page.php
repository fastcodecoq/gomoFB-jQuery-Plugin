<?php

  $ogurl = "YOUR_OPEN_GRAPH_URL"; 
  $app_id = “213583211996075”; 
  $app_secret = "05fb1d6b618d645edef56862b8eb304c";

  $mymessage = urlencode("Hello World!");

  $access_token_url = "https://graph.facebook.com/oauth/access_token"; 
  $parameters = "type=client_credentials&client_id=" .  
  $app_id . "&client_secret=" . $app_secret;
  $access_token = file_get_contents($access_token_url . 
    "?" . $parameters);

  $apprequest_url = "https://graph.facebook.com/feed";
  $parameters = "?" . $access_token . "&message=" . 
    $mymessage . "&id=" . $ogurl . "&method=post";
  $myurl = $apprequest_url . $parameters;

  $result = file_get_contents($myurl);
  echo "post_id" . $result;

?>
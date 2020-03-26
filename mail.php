<?php
if($_POST){
  $firstname = $_POST['firstnam']
  $lastname = $_POST['lastname'];
  $email = $_POST['email'];
  $object = $_POST['objet'];
  $message = $_POST['message'];
  $headers = "MIME-Version: 1.0\r\n";
  $headers .= "Content-type: text/plain; charset=iso-8859-1\r\n";
  $headers .= "From: $name <$email>\r\nReply-to : $name <$email>\nX-Mailer:PHP";

  $subject="chaine de caractere";
  $destinataire="hiyourikenza@gmail.com";
  $body="$message";

  if(mail($destinataire,$subject,$body,$headers)) {
    $response['status'] = 'success';
    $response['msg'] = 'your mail is sent';
  } else {
    $response['status'] = 'error';
    $response['msg'] = 'Something went wrong';
  }

  echo json_encode($response);
}
?>
<?php
    $conn = new mysqli('192.168.137.1', 'root', '', 'dbwisata');

    $name= $_POST['name'];
    $birthdate = $_POST['birthdate'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    $sql= "INSERT INTO userdata (name, birthdate, phone, email,password) VALUES ('$name', '$birthdate', '$phone', '$email','$password')";

    if($conn->query($sql) === false) {
        echo '<div id="tampil_modal">
    <div id="modal">
      <div id="modal_atas">Informasi</div>
      <p>Gagal di tambahkan!.</p>
      <a href="index.php"><button id="oke">Oke</button></a>
    </div></div>';
  } else{
    echo '<div id="tampil_modal">
    <div id="modal">
      <div id="modal_atas">Informasi</div>
      <p>Register Sukses</p>
      <a href="index.html"><button id="oke">Oke</button></a>
    </div></div>';
  }

?>

<!DOCTYPE html>
<html lang="en">
  <head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Login</title>
  <style type="text/css">
  #tampil_modal {
    padding-top: 10em;
    background-color: rgba(0,0,0,0.8);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 10;
    display: block;
  }
  #modal{
    padding: 15px;
    font-size: 16px;
    background: #5289dc;
    color: #fff;
    width: 480px;
    border-radius: 15px;
    margin: 0 auto;
    margin-bottom: 20px;
    padding-bottom: 50px;
    z-index: 9;
  }
  #modal_atas{
    width: 100%;
    background:#5289dc;
    padding: 15px;
    margin-left: -15px;
    font-size: 18px;
    margin-top: -15px;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
  }
  #oke {
    background:#c0392b;
    border:none;
    float:right;
    width:80px;
    height:auto;
    color: #fff;
    margin-right: 5px;
    cursor: pointer;
  }

  </style>
</head>
<body>
</body>
</html>


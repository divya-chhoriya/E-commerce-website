<?php
if(isset($_POST['check_login']))
{ 
if(empty($_POST['user']) || empty($_POST['pass']))
    header("location:login_home.html");
else
{
    $user=$_POST['user'];
    $pass=$_POST['pass'];
    }
    $dbHost = 'localhost:3307';
    $dbName = 'wp proj login'; 
    $dbUsername = 'root';  
    $dbPassword = '';

    $conn = mysqli_connect($dbHost, $dbUsername, $dbPassword, $dbName);
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }
    //echo "Connected Successfully";


    $sql = "select * from login_database where username = '$user'";

    if($result = mysqli_query($conn, $sql)){
        if(mysqli_num_rows($result) > 0){
            $row = mysqli_fetch_array($result);
            //echo $row['password'];
            if($pass == $row['password']) {
                header("location:e-commerce (home).html");
            }
            else {
                echo "<script>
                alert('Enter correct username & password')
                window.location.replace('login_home.html')
                </script>";
            }
            }
        }

    mysqli_close($conn);

     }
     else
     {
        header("location:login_home.html");
     }
?>
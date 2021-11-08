<?php
if(isset($_POST['check_signup']))
{ 
if(empty($_POST['username']) || empty($_POST['password']) || empty($_POST['email']))
    header("location:login_home.html");
else
{
    $user=$_POST['username'];
    $pass=$_POST['password'];
    $email=$_POST['email'];
    }
    $dbHost = 'localhost:3307';
    $dbName = 'wp proj login'; 
    $dbUsername = 'root'; 
    $dbPassword = ''; 

    $conn = mysqli_connect($dbHost, $dbUsername, $dbPassword, $dbName);
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }


    $sql = "CREATE TABLE if not exists login_database(
        username VARCHAR(30) NOT NULL PRIMARY KEY,
        password VARCHAR(20) NOT NULL,
        email varchar(30) NOT NULL)";
    if(mysqli_query($conn, $sql))
    {
       // echo "<br>Table created successfully</br>";
    } 
    else
    {
        echo "ERROR: Could not create table " . mysqli_error($conn);
    }



    $sql = "select * from login_database where username = '$user'";
    $query = "INSERT INTO login_database VALUES ('$user','$pass','$email')";
    $password_check = preg_match('/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])/', $pass);
    if(!$password_check) {
        echo "<script>alert('Please provide your password in correct format')
        window.location.replace('login_home.html')
        </script>"; 
    }
    else {
        if($result = mysqli_query($conn, $sql)){
        if(mysqli_num_rows($result) > 0){
            echo "<script>alert('Username already used')
            window.location.replace('login_home.html')
            </script>";
            }
        else {
            if(mysqli_query($conn, $query)) {
                echo "<script>alert('Successfully Registerd!')
                window.location.replace('login_home.html')
                </script>";
            }
        }
           mysqli_free_result($result);
        } 
    }

    mysqli_close($conn);

     }
     else
     {
        header("location:login_home.html");
     }
?>

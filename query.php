<?php
if(isset($_POST['submit_query']))
{ 
if(empty($_POST['e_mail']) || empty($_POST['enter_query']))
    header("location:e-commerce (home).html");
else {
    $mail=$_POST['e_mail'];
    $ques=$_POST['enter_query'];

}
    $dbHost = 'localhost:3307';
    $dbName = 'feedback_database';
    $dbUsername = 'root';
    $dbPassword = ''; 

    $conn = mysqli_connect($dbHost, $dbUsername, $dbPassword, $dbName);
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }


    $sql = "CREATE TABLE if not exists query_database(
        email VARCHAR(30) NOT NULL,
        feedback VARCHAR(100) NOT NULL)";
    if(mysqli_query($conn, $sql))
    {
       // echo "<br>Table created successfully</br>";
    } 
    else
    {
        echo "ERROR: Could not create table " . mysqli_error($conn);
    }


    $sql = "INSERT INTO query_database VALUES ('$mail','$ques')";
    if(mysqli_query($conn, $sql)){
        echo "<script>alert('Thank you for your feedback!')
        window.location.replace('e-commerce (home).html')
        </script>";
    } 
    else
    {
        echo "ERROR: Could not insert values " . mysqli_error($conn);
    }

    mysqli_close($conn);

     }
     else
     {
        header("location:e-commerce (home).html");
     }
?>

<?php
/**
 * Created by PhpStorm.
 * User: Khandus
 * Date: 1/31/19
 * Time: 17:12
 */

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "vantazhavto";


// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} echo "Connection succesfully";


 //Create database
$sql = "CREATE DATABASE  IF NOT EXISTS vantazhavto";
if ($conn->query($sql) === TRUE) {
    echo "<br>Database connection successfully";
} else {
    echo "Error creating database: " . $conn->error;
}

echo "<br>";
?>
<?php
/**
 * Created by PhpStorm.
 * User: Khandus
 * Date: 1/31/19
 * Time: 10:45
 */

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "hw17UsersDB";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

echo "<br>";
?>
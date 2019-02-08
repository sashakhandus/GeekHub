<?php
/**
 * Created by PhpStorm.
 * User: Khandus
 * Date: 1/31/19
 * Time: 12:59
 */


 //Create database
/*$sql = "CREATE DATABASE  IF NOT EXISTS hw17UsersDB";
if ($conn->query($sql) === TRUE) {
    echo "<br>Database connection successfully";
} else {
    echo "<br>Error creating database: " . $conn->error;
}

// sql to create table
$sql = "CREATE TABLE IF NOT EXISTS Users (
UserID INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
Username VARCHAR(30) COLLATE utf8mb4_unicode_520_ci NOT NULL,
Firstname VARCHAR(30) COLLATE utf8mb4_unicode_520_ci NOT NULL,
Lastname VARCHAR(30) COLLATE utf8mb4_unicode_520_ci NOT NULL,
Password VARCHAR(40) NOT NULL,
Email VARCHAR(50) NOT NULL,
Age INT(3) NOT NULL,
Gender VARCHAR(10) NOT NULL
)";

if ($conn->query($sql) === TRUE) {
    echo "<br>Table Users connection successfully";
} else {
    echo "<br>Error creating table: " . $conn->error;
}*/


// sql to create table
/*$sql = "CREATE TABLE IF NOT EXISTS Posts (
PostID INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
UserID INT(6) NOT NULL,
Title VARCHAR(256) COLLATE utf8mb4_unicode_520_ci NOT NULL,
Post TEXT COLLATE utf8mb4_unicode_520_ci NOT NULL,
Created VARCHAR(256) NOT NULL DEFAULT 0
)";

if ($conn->query($sql) === FALSE) {
    echo "<br>Error creating table: " . $conn->error;
} else {
    //echo "<br>Table Posts connection successfully";
}*/


?>
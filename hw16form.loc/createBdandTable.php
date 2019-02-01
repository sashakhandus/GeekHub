<?php
/**
 * Created by PhpStorm.
 * User: Khandus
 * Date: 1/31/19
 * Time: 12:59
 */


 //Create database
$sql = "CREATE DATABASE  IF NOT EXISTS hw16UsersDB";
if ($conn->query($sql) === TRUE) {
    echo "<br>Database connection successfully";
} else {
    echo "<br>Error creating database: " . $conn->error;
}

// sql to create table

$sql = "CREATE TABLE IF NOT EXISTS Users (
Username VARCHAR(30) NOT NULL PRIMARY KEY,
Firstname VARCHAR(30) NOT NULL,
Lastname VARCHAR(30) NOT NULL,
Password VARCHAR(30) NOT NULL,
Email VARCHAR(50) NOT NULL,
Age INT(3) NOT NULL,
Gender VARCHAR(10) NOT NULL
)";

if ($conn->query($sql) === TRUE) {
    echo "<br>Table hw16UsersDB connection successfully";
} else {
    echo "<br>Error creating table: " . $conn->error;
}
?>
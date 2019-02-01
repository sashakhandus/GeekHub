<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Home16</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="assets/css/main.css">
</head>
<body>
<h1>DB</h1>

<?php

include("connectDB.php");
?>

<?php
$sql1 = "SELECT * FROM block WHERE theme = 'bartik' AND module = 'system'";
$result = $conn->query($sql1);

if ($result->num_rows > 0) {
    echo "<br><br>1. Get all blocks from block table where theme is bartik and module is system: ";
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo "<br>". $row["bid"]. ", ". $row["module"]. ", " . $row["delta"] .  ", " . $row["theme"]  .  ", " . $row["status"]  .  ", " . $row["weight"]  .  ", " . $row["region"]  .  ", " . $row["custom"]  .  ", " . $row["visibility"]  .  ", " . $row["title"]  .  ", " . $row["cache"] ;
    }
} else {
    echo "0 results";
}

$sql2 = "SELECT * FROM node WHERE type = 'delivery' AND title LIKE '8046%' AND created BETWEEN '1538344800' AND '1541026800'";
$result2 = $conn->query($sql2);

if ($result2->num_rows > 0) {
    echo "<br><br>2. Get nodes where type is delivery and all that made in october and title begins with 8046 ";
    // output data of each row
    while($row = $result2->fetch_assoc()) {
        echo "<br>". $row["nid"]. ", ". $row["vid"]. ", " . $row["type"] .  ", " . $row["language"]  .  ", " . $row["title"]  .  ", " . $row["uid"]  .  ", " . $row["status"]  .  ", " . $row["created"]  .  ", " . $row["changed"]  .  ", " . $row["comment"]  .  ", " . $row["promote"]  .  ", " . $row["sticky"]  .  ", " . $row["tnid"]  .  ", " . $row["translate"] ;
    }
} else {
    echo "0 results";
}

//$sql3 = "SELECT source FROM url_alias WHERE alias = 'users/serhiy'";
$sql4 = "SELECT * FROM history WHERE uid LIKE '3%' LIMIT 20";
$result4 = $conn->query($sql4);

if ($result4->num_rows > 0) {
    echo "<br><br>3.Get user name and nodes that where published by user 'serhiy'(output username and email with each node). get last 20 nodes.";
    // output data of each row
    while($row = $result4->fetch_assoc()) {
        echo "<br>" . $row["uid"] . ", " . $row["nid"] . ", " . $row["timestamp"];
        // echo "<br>" . $row["source"];
    }
} else {
    echo "0 results";
}

$sql5 = "SELECT * FROM variable WHERE name LIKE '%cache%' AND name != 'cache' ";
$result5 = $conn->query($sql5);

if ($result5->num_rows > 0) {
    echo "<br><br>4. Get all variable name that has cache word(cache_akjsgdkjag) but not (cache)(see variable table) ";
    // output data of each row
    while($row = $result5->fetch_assoc()) {
        echo "<br>". $row["name"]  .  ", " . $row["value"] ;
    }
} else {
    echo "0 results";
}

?>



<script src="assets/js/libs.js"></script>
<script src="assets/js/main.js"></script>

</body>
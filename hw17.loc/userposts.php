<?php
session_start();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Home17form</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="assets/css/main.css">
</head>
<body>
<h1>User posts</h1>

<?php
include("connectbd.php");
include("createBdandTable.php");
?>

<?php

$user_id = $_SESSION['session_userID'];
$userPosts = [];

$query = "SELECT * FROM Posts WHERE UserID ='$user_id'";
$result = $conn->query($query);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        $post = array("title" => $row["Title"], "mess" => $row["Post"], "date" => $row["Created"], "postID" => $row["PostID"]);
        array_push($userPosts, $post);
    }
} else {
    echo "0 results";
}
?>

<ul class="user-posts">
    <?php
    foreach($userPosts as $key => $itemPost) {
        ?>
        <li>
            <h3 class="post-title"><?php echo $itemPost["title"] ?></h3>
            <p class="post-parag"><?php echo $itemPost["mess"] ?></p>
            <p class="post-date"><?php echo $itemPost["date"] ?></p>
            <form class="form-delete" action="userposts.php" method="post">
                <input type="submit" value="Delete post" name="delete<?php echo $key ?>" datatype="<?php echo $itemPost["postID"] ?>" class="btn">
            </form>
        </li>
        <?php
    }
    ?>
</ul>
<a href="index.php" class="btn">Home</a>
<a href="userpost.php" class="btn">New post user</a>

<?php

foreach($userPosts as $key => $itemPost) {

    if (isset($_POST["delete".$key])) {
        echo $_POST["delete".$key];
        $title_post = $itemPost["title"];
        echo"<br>";
        echo $title_post;
        $query = "DELETE FROM Posts WHERE Title ='$title_post'";
        $result = $conn->query($query);

        if ($result) {
            echo "Record deleted successfully";
            header("Refresh:0");
        } else {
            echo "Error deleting record: " .$conn->error;
        }
        break;
    }
}

?>

<?php
$conn->close();
?>



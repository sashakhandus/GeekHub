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
<h1>New post</h1>

<?php
include("connectbd.php");
include("createBdandTable.php");
?>

<?php

print_r($_SESSION);
// define variables and set to empty values
$titleErr = $postErr = "";

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        if (empty($_POST["title"])) {
            $titleErr = "Title is required";
        } else {
            $title = test_input($_POST["title"]);
            // check if name only contains letters and whitespace
            if (!preg_match("/^[a-zA-Z ]*$/",$title)) {
                $title = "Only letters and white space allowed";
            }
        }

        if (empty($_POST["post"])) {
            $postErr = "First name is required";
        } else {
            $post = test_input($_POST["post"]);
            // check if name only contains letters and whitespace
            if (!preg_match("/^[a-zA-Z ]*$/",$post)) {
                $postErr = "Only letters and white space allowed";
            }
        }
    }

function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

?>

<form class="form" action="<?php echo $_SERVER["PHP_SELF"];?>" method="post">
    <fieldset>
        <legend>User Post</legend>
        <div class="errors">
            <span><?php echo $titleErr;?></span>
            <span><?php echo $postErr;?></span>
        </div>
        <div class="input-item">
            <label for="name">Title post </label>
            <div>
                <input type="text" name="title" placeholder="Enter post title" required>
                <span class="error">*</span>
            </div>
        </div>
        <div class="input-textarea">
            <label for="post">Body post: </label>
            <textarea name="post" rows="5" cols="33" placeholder="Enter post body"></textarea>
        </div>
    </fieldset>
    <br>
    <input type="submit" name="post-submit" class="btn"><br>
</form>

<h2>User post</h2>
<a href="index.php" class="btn">Home</a>
<a href="userposts.php" class="btn">All posts user</a>

<?php

if (isset($_POST['post-submit'])) {
    if (!empty($title) && !empty($post)) {
        $user_name = $_SESSION['session_username'];

        $query = "SELECT UserID FROM Users WHERE Username ='$user_name'";
        $result = $conn->query($query);

        if ($result->num_rows == 1) {
            echo "<br><br> User ID:    ";
            // output data of each row
            $row = $result->fetch_assoc();
            $_SESSION['session_userID'] = $row["UserID"];
            $user_id = $_SESSION['session_userID'];
            $date = date("m.d.y");
            $sql = "INSERT INTO Posts (UserID, Title, Post, Created) VALUES ('$user_id', '$title', '$post', '$date')";
            if ($conn->query($sql) === TRUE) {
                echo "New record created successfully";
                echo "<br>";
            } else {
                echo "Error: " . $sql . "<br>" . $conn->error;
            }
        }
    }
}

print_r($_SESSION);

$conn->close();

?>



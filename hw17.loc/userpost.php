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
<h1>New post user <?php echo $_SESSION['session_username'] ?></h1>

<?php
include("connectbd.php");
?>

<?php

$errors = [];

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        if (empty($_POST["title"])) {
            $errors[] = "Title is required";
        } else {
            $title = test_input($_POST["title"]);
        }

        if (empty($_POST["post"])) {
            $errors[] = "Post is required";
        } else {
            $post = test_input($_POST["post"]);
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
            <?php if (!empty($errors)) {
                foreach ($errors as $error) {?>
                    <span class="error"><?php echo $error?></span>
                    <?php
                }
            }
            ?>
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

<a href="index.php" class="btn">Home</a>
<a href="userposts.php" class="btn">All posts user</a>

<?php

if (isset($_POST['post-submit'])) {
    if (empty($errors)) {
        $user_id = $_SESSION['session_userID'];
        $date = date("y.m.d");
        $sql = "INSERT INTO Posts (UserID, Title, Post, Created) VALUES ('$user_id', '$title', '$post', '$date')";
        if ($conn->query($sql) === TRUE) {
            echo "New record created successfully";
            echo "<br>";
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
    }
}
//print_r($_SESSION);
$conn->close();

?>



<?php
session_start();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Home17</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="assets/css/main.css">
</head>
<body>
<h1>Login form</h1>

<?php
include("connectbd.php");
?>

<?php

$errors = [];

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        if (empty($_POST["user_name"])) {
            $errors[] =  "User name is required";
        } else {
            $user_name = test_input($_POST["user_name"]);
            // check if name only contains letters and whitespace
            if (!preg_match("/^[a-zA-Z ]*$/",$user_name)) {
                $errors[] = "Only letters and white space allowed user name";
            }
        }

        if (empty($_POST["password"])) {
            $errors[] =  "Password is required";
        } else {
            $password = md5(test_input($_POST["password"]));
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
        <legend>Login form</legend>
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
            <label for="name">Username: </label>
            <div>
                <input type="text" name="user_name" placeholder="Enter your username" required>
                <span class="error">*</span>
            </div>
        </div>
        <div class="input-item">
            <label for="password">Password: </label>
            <div>
                <input type="text" name="password" placeholder="Enter your password" required>
                <span class="error">*</span>
            </div>
        </div>
    </fieldset>
    <br>
    <input type="submit" name="login"><br>
</form>

<p>Not yet a member?</p>
<a href="registration.php">Sign up</a>

<?php

if (isset($_POST["login"]) && empty($errors)) {
    if (!empty($user_name) && !empty($password)) {
        $query = "SELECT UserID FROM Users WHERE Password='$password' AND Username='$user_name'";
        $result = $conn->query($query);

        if ($result->num_rows == 1)  {
            $row = $result->fetch_assoc();
            $_SESSION['session_userID'] = $row['UserID'];
            $_SESSION['session_username'] = $user_name;
            header("location: userpost.php");
        } else {
            $databaseErr = "Invalid username or password!";
            echo "<br>" . $databaseErr;
        }
    }
}

$conn->close();
?>

</body>
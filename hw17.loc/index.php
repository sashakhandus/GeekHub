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
<h1>FORM</h1>

<?php
include("connectbd.php");
include("createBdandTable.php");
?>

<?php
$user_nameErr = $first_nameErr = $last_nameErr = $passwordErr = $password_repeatErr = $emailErr = $ageErr = $genderErr = "";

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        if (empty($_POST["user_name"])) {
            $user_nameErr = "User-name is required";
        } else {
            $user_name = test_input($_POST["user_name"]);
            // check if name only contains letters and whitespace
            if (!preg_match("/^[a-zA-Z ]*$/",$user_name)) {
                $user_nameErr = "Only letters and white space allowed";
            }
        }

        if (empty($_POST["password"])) {
            $passwordErr = "Password is required";
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
            <span><?php echo $user_nameErr;?></span>
            <span><?php echo $passwordErr;?></span>
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

if (isset($_POST["login"])) {
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
            echo $databaseErr;
        }
    }
}
echo "<br>";
print_r($_SESSION);

$conn->close();

?>

</body>
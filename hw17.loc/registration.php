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
<h1>Registration form</h1>

<?php
include("connectbd.php");
?>

<?php

$errors = [];

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        if (empty($_POST["user_name"])) {
            $errors[] = "User-name is required";
        } else {
            $user_name = test_input($_POST["user_name"]);
            // check if name only contains letters and whitespace
            if (!preg_match("/^[a-zA-Z ]*$/",$user_name)) {
                $errors[] = "Only letters and white space allowed user name";
            }
        }

        if (empty($_POST["first_name"])) {
            $errors[] = "First name is required";
        } else {
            $first_name = test_input($_POST["first_name"]);
            // check if name only contains letters and whitespace
            if (!preg_match("/^[a-zA-Z ]*$/",$first_name)) {
                $errors[] = "Only letters and white space allowed first name";
            }
        }

        if (empty($_POST["last_name"])) {
            $errors[] = "Last name is required";
        } else {
            $last_name = test_input($_POST["last_name"]);
            // check if name only contains letters and whitespace
            if (!preg_match("/^[a-zA-Z ]*$/",$last_name)) {
                $errors[] = "Only letters and white space allowed last name";
            }
        }

        if (empty($_POST["email"])) {
            $errors[] = "Email is required";
        } else {
            $email = test_input($_POST["email"]);
        }

        if (empty($_POST["age"])) {
            $errors[] = "Age name is required";
        } else if((int)($_POST["age"]) > 150) {
            $errors[] = "Your age is very big!";
            } else {
            $age = test_input($_POST["age"]);
        }

        if (empty($_POST["password"])) {
            $errors[] = "Password is required";
        }

        if (empty($_POST["password_repeat"])) {
            $errors[] = "Password_repeat is required";
        } else {
            if ($_POST["password"] != $_POST["password_repeat"]) {
                $errors[] = "The two password do not match";
            } else {
                $password = md5(test_input($_POST["password"]));

            }
        }

        if (empty($_POST["gender"])) {
            $errors[] = "Gender is required";
        } else {
            $gender = test_input($_POST["gender"]);
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
        <legend>Registration form</legend>
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
        <div class="input-item" >
            <label for="firstname">First name: </label>
            <div>
                <input type="text" name="first_name" placeholder="Enter your first name" required>
                <span class="error">*</span>
            </div>
        </div>
        <div class="input-item">
            <label for="lastname">Last name: </label>
            <div>
                <input type="text" name="last_name" placeholder="Enter your last name" required>
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
        <div class="input-item">
            <label for="passwordrepeat">Repeat password: </label>
            <div>
                <input type="text" name="password_repeat" placeholder="Repeat your password"required>
                <span class="error">*</span>
            </div>
        </div>
        <div class="input-item">
            <label for="email">E-mail: </label>
            <div>
                <input type="email" name="email" placeholder="Enter your email" required>
                <span class="error">*</span>
            </div>
        </div>
        <div class="input-item">
            <label for="age">Age:  </label>
            <div>
                <input type="number" name="age" placeholder="Enter your age" required>
                <span class="error">*</span>
            </div>
        </div>
        <div class="input-item-radio">
            <input type="radio" name="gender" <?php if (isset($gender) && $gender=="male") echo "checked";?>  value="male"> Male
            <input type="radio" name="gender" <?php if (isset($gender) && $gender=="female") echo "checked";?> value="female"> Female
            <input type="radio" name="gender" <?php if (isset($gender) && $gender=="other") echo "checked";?> value="other"> Other
            <span class="error">*</span><br>
        </div>
    </fieldset>
    <br>
    <input type="submit" name="register"><br>
</form>

<a href="index.php" class="btn">login</a>

<?php

if (isset($_POST['register'])) {
    if (!empty($user_name) && !empty($first_name) && !empty($last_name) && !empty($password) && !empty($age) && !empty($gender)) {
        $query = "SELECT * FROM Users WHERE Username ='$user_name'";
        $result = $conn->query($query);

        if($result->num_rows == 0) {
            $sql = "INSERT INTO Users (Username, Firstname, Lastname, Password, Email, Age, Gender)
VALUES ('$user_name', '$first_name', '$last_name', '$password', '$email', '$age', '$gender')";

            if ($conn->query($sql) === TRUE) {
                echo "New record created successfully";
                echo "<br>";
            } else {
                echo "Error: " . $sql . "<br>" . $conn->error;
            }
        } else {
            echo $user_name ."  Username is already exists";
        }
    }
}

$conn->close();

?>



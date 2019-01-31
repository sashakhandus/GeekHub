<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Home16form</title>
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
// define variables and set to empty values
$user_nameErr = $first_nameErr = $last_nameErr = $passwordErr = $password_repeatErr = $emailErr = $ageErr = "";
//$user_name = $first_name = $last_name = $password = $password_repeat = $email = $age = "";

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

        if (empty($_POST["first_name"])) {
            $first_nameErr = "First name is required";
        } else {
            $first_name = test_input($_POST["first_name"]);
            // check if name only contains letters and whitespace
            if (!preg_match("/^[a-zA-Z ]*$/",$first_name)) {
                $first_nameErr = "Only letters and white space allowed";
            }
        }

        if (empty($_POST["last_name"])) {
            $last_nameErr = "Last name is required";
        } else {
            $last_name = test_input($_POST["last_name"]);
            // check if name only contains letters and whitespace
            if (!preg_match("/^[a-zA-Z ]*$/",$last_name)) {
                $last_nameErr = "Only letters and white space allowed";
            }
        }

        if (empty($_POST["email"])) {
            $emailErr = "Email is required";
        } else {
            $email = test_input($_POST["email"]);
        }

        if (empty($_POST["age"])) {
            $ageErr = "";
        } else if((int)($_POST["age"]) > 150) {
            $ageErr = "Your age is very big!";
            } else {
            $age = test_input($_POST["age"]);
        }

        if (empty($_POST["password"])) {
            $passwordErr = "Password is required";
        }

        if (empty($_POST["password_repeat"])) {
            $password_repeatErr = "Password is required";
        } else {
            if ($_POST["password"] != $_POST["password_repeat"]) {
                $passwordErr = "The two password do not match";
                $password_repeatErr = "The two password do not match";
            } else {
                $password = md5(test_input($_POST["password"]));

            }
        }

        if (empty($_POST["gender"])) {
            $genderErr = "Gender is required";
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
        <div class="input-item">
            <label for="name">Username: </label>
            <input type="text" name="user_name" required>
            <span class="error">* <?php echo $user_nameErr;?></span>
            <br>
        </div>
        <div class="input-item" >
            <label for="firstname">First name: </label>
            <input type="text" name="first_name" required>
            <span class="error">* <?php echo $first_nameErr;?></span>
            <br>
        </div>
        <div class="input-item">
            <label for="lastname">Last name: </label>
            <input type="text" name="last_name" required>
            <span class="error">* <?php echo $last_nameErr;?></span>
            <br>
        </div>
        <div class="input-item">
            <label for="password">Password: </label>
            <input type="text" name="password" required>
            <span class="error">* <?php echo $passwordErr;?></span>
            <br>
        </div>
        <div class="input-item">
            <label for="passwordrepeat">Repeat password: </label>
            <input type="text" name="password_repeat" required>
            <span class="error">* <?php echo $password_repeatErr;?></span>
            <br>
        </div>
        <div class="input-item">
            <label for="email">E-mail: </label>
            <input type="email" name="email" required>
            <span class="error">* <?php echo $emailErr;?></span>
            <br>
        </div>
        <div class="input-item">
            <label for="age">Age:  </label><input type="number" name="age">
            <span class="error">* <?php echo $ageErr;?></span>
            <br>
        </div>
        <div class="input-item">
            <input type="radio" name="gender" <?php if (isset($gender) && $gender=="male") echo "checked";?>  value="male"> Male
            <input type="radio" name="gender" <?php if (isset($gender) && $gender=="female") echo "checked";?> value="female"> Female
            <input type="radio" name="gender" <?php if (isset($gender) && $gender=="other") echo "checked";?> value="other"> Other
            <span class="error">* <?php echo $emailErr;?></span><br>
        </div>
    </fieldset>
    <br>
    <input type="submit" name="register"><br>
</form>

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

            echo "New record created successfully!!!????";
            header ('Location:index.php');
        } else {
            echo $user_name ."  Username is already exists";
        }
    }
}

$conn->close();

?>
<script src="assets/js/libs.js"></script>
<script src="assets/js/main.js"></script>

</body>
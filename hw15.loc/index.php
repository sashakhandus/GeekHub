<?php
/**
 * Created by PhpStorm.
 * User: Khandus
 * Date: 1/15/19
 * Time: 10:09
 */


?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Home14</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css?family=Roboto:400,700" rel="stylesheet">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" integrity="sha384-gfdkjb5BdAXd+lj+gudLWI+BXq4IuLW5IT+brZEZsLFm++aCMlF1V92rMkPaX4PP" crossorigin="anonymous">
    <link rel="stylesheet" href="assets/css/main.css">
</head>
<body>
<h1>Hello array!!!!</h1>
<?php

function echoArr($arr) {
    foreach ($arr as $value) {
        echo($value.' ');
    }
    echo('<br>');
}

function insertElemIntoArray($arr, $elem) {
    echoArr($arr);
    echo('<br>');
    $isInsert = false;
    for ($j = 0; $j < count($arr); $j++) {
        if($elem <= $arr[$j]) {
            array_splice($arr, $j, 0, $elem);
            $isInsert = true;
            break;
        }
    }
    if (!$isInsert) {
        echoArr($arr);
        echo('<br>');
        $arr[] = $elem;
    }
    echoArr($arr);
    echo('<br>');
    return $arr;
}

function sortArray ($arr) {
    $arrSort[0] = $arr[0];
    for ($i = 1; $i < count($arr); $i++) {
        $isInsert = false;
        for ($j = 0; $j < count($arrSort); $j++) {
            if($arr[$i] <= $arrSort[$j]) {
                array_splice($arrSort, $j, 0, $arr[$i]);
                $isInsert = true;
                break;
            }
        }
        if (!$isInsert) {
            $arrSort[] = $arr[$i];
        }
    }
    return $arrSort;
}

$array = [5, 4, 6, 9, 3, 3, 11];

echo ('Array: ');
echoArr($array);

echo ('Sort array: ');
echoArr(sortArray($array));

?>
<script src="assets/js/libs.js"></script>
<script src="assets/js/main.js"></script>

</body>
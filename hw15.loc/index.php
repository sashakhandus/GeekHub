<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Home15</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css?family=Roboto:400,700" rel="stylesheet">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" integrity="sha384-gfdkjb5BdAXd+lj+gudLWI+BXq4IuLW5IT+brZEZsLFm++aCMlF1V92rMkPaX4PP" crossorigin="anonymous">
    <link rel="stylesheet" href="assets/css/main.css">
</head>
<body>
<h1>Hello array!!!!</h1>
<?php

function sortArrayByAsc ($arr) {
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

function sortArrayByDesc ($arr) {
    $arrSort[0] = $arr[0];
    for ($i = 1; $i < count($arr); $i++) {
        $isInsert = false;
        for ($j = 0; $j < count($arrSort); $j++) {
            if($arr[$i] >= $arrSort[$j]) {
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
var_dump($array);
echo('<br>');

echo ('Sort array by ascending: ');
var_dump(sortArrayByAsc($array));
echo('<br>');

echo ('Sort array by descending: ');
var_dump(sortArrayByDesc($array));
echo('<br>');

$arrayLetters = ['e', 'h', 'vvvv', 'i', 'd', 'a', 'b', 'hhfh', 'z', 'zaswwe', 'zxtyty'];
echo('<br>');

echo ('Array: ');
var_dump($arrayLetters);
echo('<br>');

echo ('Sort array by ascending: ');
var_dump(sortArrayByAsc($arrayLetters));
echo('<br>');

echo ('Sort array by descending: ');
var_dump(sortArrayByDesc($arrayLetters));
echo('<br>');

?>

</body>
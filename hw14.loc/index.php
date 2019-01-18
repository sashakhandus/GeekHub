<?php
/**
 * Created by PhpStorm.
 * User: Khandus
 * Date: 1/15/19
 * Time: 10:09
 */

$data = require('data.php');

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
<header class="header">
    <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light header-nav">
            <a class="navbar-brand logo" href="/" >
                <?php
                $siteLogo = $data['siteLogo'];
                print '<img src='.$data['siteLogo']['src'].' alt='.$data['siteLogo']['alt'].'>'
                ?>
            </a>
            <button class="navbar-toggler nav-btn" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                    <?php
                    foreach($data['mainMenu'] as $itemMenu) {
                        print '<li class="nav-item menu-item"><a class="menu-link" href='.$itemMenu["url"].'>'.$itemMenu["title"].'</a>
                    </li>';
                    }
                    ?>
                </ul>
            </div>
        </nav>
        <div class="header-info">
            <h1 class="section-title">
                <?php print $data['sectionTitle']['headerTitle']; ?>
            </h1>
            <p class="section-parag">
                <?php print $data['sectionParag']['headerParag']; ?>
            </p>
            <div>
                <?php
                print '<a class="header-btn btn-class" href='.$data['buttons']['ask']['url'].'>'.$data['buttons']['ask']['title'].'</a>';
                ?>
            </div>
            <div>
                <a class="scroll-btn" href="#"></a>
            </div>
        </div>
    </div>
</header>

<section class="design-code">
    <div class="row">
        <div class="col-12 col-lg-6 design">
            <div class="wrapper">
                <h2 class="section-title"><span class="special-title">
                        <?php print $data['sectionTitle']['designcodeTitle']['best']; ?>
                    </span>
                    <?php print $data['sectionTitle']['designcodeTitle']['design']; ?>
                    </h2>
                <p class="section-parag">
                    <?php print $data['sectionParag']['designcodeParag']['design']; ?>
                </p>
                <?php
                print '<a class="header-btn btn-class" href='.$data['buttons']['ask']['url'].'>'.$data['buttons']['ask']['title'].'</a>';
                ?>
            </div>
        </div>
        <div class="col-12 col-lg-6 code">
            <div class="wrapper mr-auto">
                <h2 class="section-title"><span class="special-title">
                        <?php print $data['sectionTitle']['designcodeTitle']['best']; ?>
                    </span>
                        <?php print $data['sectionParag']['designcodeParag']['code'];
                        ?>
                    </h2>
                <p class="section-parag">
                    <?php print $data['sectionParag']['designcodeParag']['design']; ?>
                </p>
                <?php
                print '<a class="header-btn btn-class" href='.$data['buttons']['ask']['url'].'>'.$data['buttons']['ask']['title'].'</a>';
                ?>
            </div>
        </div>
    </div>
</section>

<section class="what-do">
    <div class="container">
        <h2 class="section-title what-do-title">
            <?php print $data['sectionTitle']['whatdoTitle']; ?>
        </h2>
        <div class="what-do-content">
            <ul class="what-do-list">
                <?php
                foreach($data['whatdoContent'] as $whatdoItem) {
                    print ' <li class="what-do-item">
                    <picture>
                        <img class="what-do-item-img" src='.$whatdoItem['whatdoItemImg'].' alt='.$whatdoItem['whatdoItemTitle'].'>
                    </picture>
                    <div class="what-do-item-info">
                        <h3 class="what-do-item-title">'.$whatdoItem['whatdoItemTitle'].'</h3>
                        <p class="what-do-item-parag">'.$whatdoItem['whatdoItemParag'].'</p>
                    </div>
                </li>';
                }
                ?>
            </ul>
            <?php
            print '<a class="header-btn btn-class" href='.$data['buttons']['ask']['url'].'>'.$data['buttons']['ask']['title'].'</a>';
            ?>
        </div>
    </div>
</section>

<section class="sliderjs row">
    <div class="slideshow-container slide-left col-lg-6 col-xl-4">
        <?php
        foreach ($data['sliderContent']['1'] as $sliderItem) {
            print  '<div class="slide1"><img src='.$sliderItem['src'].' alt='.$sliderItem['alt'].'></div>';
        };
        ?>
        <div class="slider-info-bg">
            <div class="slider-info">
                <h2 class="section-title">
                    <?php print $data['sectionTitle']['sliderTitle']; ?>
                    </h2>
                <p class="section-parag">
                    <?php print $data['sectionParag']['sliderParag']; ?>
                </p>
                <?php
                print '<a class="header-btn btn-class" href='.$data['buttons']['ask']['url'].'>'.$data['buttons']['ask']['title'].'</a>';
                ?>
            </div>
        </div>
    </div>
    <div class="slideshow-container slide-center col-lg-6 col-xl-4">
        <?php
        foreach ($data['sliderContent']['2'] as $sliderItem) {
            print  '<div class="slide2"><img src='.$sliderItem['src'].' alt='.$sliderItem['alt'].'></div>';
        };
        ?>
        <div class="slider-info-bg">
            <div class="slider-info">
                <h2 class="section-title">
                    <?php print $data['sectionTitle']['sliderTitle']; ?>
                </h2>
                <p class="section-parag">
                    <?php print $data['sectionParag']['sliderParag']; ?>
                </p>
                <?php
                print '<a class="header-btn btn-class" href='.$data['buttons']['ask']['url'].'>'.$data['buttons']['ask']['title'].'</a>';
                ?>
            </div>
        </div>
    </div>
    <div class="slideshow-container slide-right col-xl-4">
        <?php
        foreach ($data['sliderContent']['3'] as $sliderItem) {
            print  '<div class="slide3"><img src='.$sliderItem['src'].' alt='.$sliderItem['alt'].'></div>';
        };
        ?>
        <div class="slider-info-bg">
            <div class="slider-info">
                <h2 class="section-title">
                    <?php print $data['sectionTitle']['sliderTitle']; ?>
                </h2>
                <p class="section-parag">
                    <?php print $data['sectionParag']['sliderParag']; ?>
                </p>
                <?php
                print '<a class="header-btn btn-class" href='.$data['buttons']['ask']['url'].'>'.$data['buttons']['ask']['title'].'</a>';
                ?>
            </div>
        </div>
    </div>
    <a class="prev" onclick="plusSlides(1)"><i class="fas fa-angle-left arrow"></i></a>
    <a class="next" onclick="plusSlides(-1)"><i class="fas fa-angle-right arrow"></i></a>
</section>

<section class="about-us">
    <div class="container">
        <h2 class="section-title">
            <?php print $data['sectionTitle']['aboutusTitle']; ?>
        </h2>
        <p class="section-parag m-auto">
            <?php print $data['sectionParag']['aboutusParag']; ?>
        </p>
        <ul class="about-us-list row">
            <?php
            foreach ($data['aboutusContent'] as $aboutusItem) {
                print '<li class="about-us-item col-12 col-sm-6 col-lg-3">
                <figure>
                    <img class="about-us-img" src='.$aboutusItem['aboutusItemImg'].' alt='.$aboutusItem['aboutusItemFigcaption'].'>
                    <figcaption>'.$aboutusItem['aboutusItemFigcaption'].'</figcaption>
                </figure>
                <p class="section-parag">'.$aboutusItem['aboutusItemParag'].'</p>
            </li>';
            }
            ?>
        </ul>
        <?php
        print '<a class="header-btn btn-class" href='.$data['buttons']['watch']['url'].'>'.$data['buttons']['watch']['title'].'</a>';
        ?>
    </div>
</section>

<section class="map">
    <?php
    $mapSrc = $data['mapSrc'];
    print '<iframe src='.$mapSrc.' frameborder="0" style="border:0" allowfullscreen></iframe>'
    ?>
</section>

<script src="assets/js/libs.js"></script>
<script src="assets/js/main.js"></script>

</body>

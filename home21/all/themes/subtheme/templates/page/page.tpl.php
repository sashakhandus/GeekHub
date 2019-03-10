<?php

/**
 * @file
 * Default theme implementation to display a single Drupal page.
 *
 * @see template_preprocess()
 * @see template_preprocess_page()
 * @see template_process()
 * @see html.tpl.php
 */
?>
<header id="header" class="header container-fluid" role="header">
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light header-nav" role="navigation">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse">
          <span class="sr-only"><?php print t('Toggle navigation'); ?></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <?php if ($logo): ?>
          <a href="<?php print $front_page; ?>" class="navbar-brand" rel="home" title="<?php print t('Home'); ?>">
            <?php if ($logo): ?>
              <img src="<?php print $logo; ?>" alt="<?php print t('Home'); ?>" id="logo" />
            <?php endif; ?>
          </a>
        <?php endif; ?>
      </div> <!-- /.navbar-header -->

      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="navbar-collapse">
        <?php if ($main_menu): ?>
          <ul id="main-menu" class="menu nav navbar-nav">
            <?php print render($main_menu); ?>
          </ul>
        <?php endif; ?>
       
      </div><!-- /.navbar-collapse -->
    </nav><!-- /.navbar -->
      <div class="header-info">
          <h1 class="section-title">Lorem ipsum dolor sit amet</h1>
          <p class="section-parag">Nunc vel nibh tempor, pharetra lectus congue, luctus orci.</p>
          <div>
              <a class="header-btn btn-class">Ask for price</a>
          </div>
          <div>
              <a class="scroll-btn"></a>
          </div>
      </div>
  </div> <!-- /.container -->
</header>

<div id="main-wrapper">
  <div id="main" class="main">
    <div class="container">
      <?php if ($breadcrumb): ?>
        <div id="breadcrumb" class="visible-desktop">
          <?php print $breadcrumb; ?>
        </div>
      <?php endif; ?>
      <?php if ($messages): ?>
        <div id="messages">
          <?php print $messages; ?>
        </div>
      <?php endif; ?>
      <div id="page-header">
        <?php if ($title): ?>
          <div class="page-header">
            <h1 class="title"><?php print $title; ?></h1>
          </div>
        <?php endif; ?>
        <?php if ($tabs): ?>
          <div class="tabs">
            <?php print render($tabs); ?>
          </div>
        <?php endif; ?>
        <?php if ($action_links): ?>
          <ul class="action-links">
            <?php print render($action_links); ?>
          </ul>
        <?php endif; ?>
      </div>
    </div>
    <div id="content" class="container-fluid">
        <?php if (!$is_front):?>
           <?php print render($page['content']); ?>
        <?php endif; ?>
    </div>
      <?php if ($page['designcode']): ?>
          <section id="designcode" class="design-code">
              <div class="container-fluid"
                  <?php print render($page['designcode']); ?>
              </div>
           </section>
      <?php endif; ?>
      <?php if ($page['what']): ?>
         <section id="what" class="what">
            <div class="container"
              <?php print render($page['what']); ?>
            </div>
         </section>
      <?php endif; ?>
      <?php if ($page['carousel']): ?>
      <section id="carousel" class="carousel">
          <div class="container"
             <?php print render($page['carousel']); ?>
          </div>
      </section>
    <?php endif; ?>
      <?php if ($page['aboutus']): ?>
          <section id="aboutus" class="about-us">
              <div class="container"
                 <?php print render($page['aboutus']); ?>
              </div>
          </section>
      <?php endif; ?>
      <?php if ($page['map']): ?>
          <section id="map" class="map">
                 <?php print render($page['map']); ?>
          </section>
      <?php endif; ?>

  </div> <!-- /#main -->
</div> <!-- /#main-wrapper -->

<footer id="footer" class="footer" role="footer">
  <div class="container">
    <?php if ($copyright): ?>
      <small class="copyright pull-left"><?php print $copyright; ?></small>
    <?php endif; ?>
    <small class="pull-right"><a href="#"><?php print t('Back to Top'); ?></a></small>
  </div>
</footer>

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
    <div class="container-fluid">

        <?php if ($page['header-info']): ?>
            <div class="container-fluid header-info-bg">
                <div class="container header-info-text">
                    <?php print render($page['header-info']); ?>
                </div>
            </div>
        <?php endif; ?>

        <nav class="navbar navbar-default container navbar-challenge" role="navigation">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse">
                    <span class="sr-only"><?php print t('Toggle navigation'); ?></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <?php if ($site_name || $logo): ?>
                    <a href="<?php print $front_page; ?>" class="navbar-brand" rel="home" title="<?php print t('Home'); ?>">
                        <?php if ($logo): ?>
                            <img src="<?php print $logo; ?>" alt="<?php print t('Home'); ?>" id="logo" />
                        <?php endif; ?>
                    </a>
                <?php endif; ?>
            </div> <!-- /.navbar-header -->

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse navbar-menu-challenge" id="navbar-collapse">
                <?php if ($main_menu): ?>
                    <ul id="main-menu" class="menu nav navbar-nav">
                        <?php print render($main_menu); ?>
                    </ul>
                <?php endif; ?>
            </div><!-- /.navbar-collapse -->
        </nav><!-- /.navbar -->
    </div> <!-- /.container -->
</header>

<?php if ($page['header-info']): ?>
    <div class="container-fluid header-banner-bg">
        <div class="container header-banner-text">
            <?php print render($page['header-banner']); ?>
        </div>
    </div>
<?php endif; ?>

<div id="main-wrapper">
    <div id="main" class="main">
        <div class="container">
            <?php if ($messages): ?>
                <div id="messages">
                    <?php print $messages; ?>
                </div>
            <?php endif; ?>
            <div id="page-header">
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
        <div class="row">
            <div id="content" class="container col-md-8">
                <?php print render($page['content']); ?>
            </div>
            <div id="content" class="container col-md-4">
                <?php print render($page['side-bar']); ?>
            </div>
        </div>
    </div> <!-- /#main -->
</div> <!-- /#main-wrapper -->

<footer id="footer" class="footer container-fluid" role="footer">
    <div class="container">
        <div class="footer-info">
            <?php print render($page['footer']); ?>
        </div>
        <?php print render($page['footer-bottom']); ?>
    </div>
</footer>

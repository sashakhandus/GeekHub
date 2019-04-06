<?php
/**
 * @file
 * Drush commands for challenge theme.
 */

// BOOTSWATCH_URL
define('BOOTSWATCH_URL', 'https://github.com/arshad/challenge-bootswatch/archive/master.zip');

/**
 * Implements hook_drush_command().
 */
function challenge_drush_command() {
  $items = array();

  $items['challenge'] = array(
    'description' => 'Create a challenge challenge.',
    'arguments' => array(
      'name'         => 'The name of your challenge.',
    ),
    'options' => array(
      'machine_name' => 'The machine-readable name of your challenge. This will be auto-generated from the human-readable name if ommited.',
      'description' => 'The description of your challenge',
      'destination' => 'The destination of your challenge. Defaults to "all" (sites/all/themes).',
      'kit' => 'The name or url of the starter kit to use. Defaults to "default".',
      'bootswatch' => 'The Bootswatch theme to use. See https://github.com/arshad/challenge-bootswatch.',
    ),
    'examples' => array(
      'drush challenge "My Theme"' => 'Creates a challenge challenge called "My Theme", using the default options.',
      'drush challenge "My Theme" --machine_name=my_theme' => 'Creates a challenge challenge called "My Theme" with a specific machine name.',
      'drush challenge "My Theme" --bootswatch=cerulean' => 'Creates a challenge challenge called "My Theme" using Cerulean Bootswatch theme.',
      'drush challenge "My Theme" --kit="https://github.com/challenge-kit-KITNAME/archive/BRANCH.zip"' => 'Creates a challenge challenge called "My Theme" using a remote kit source. See http://docs.challengetheme.org/en/latest/drupal/#custom-kit.',
    ),
  );

  // Upgrade to the Gulp version.
  $items['challenge-upgrade-gulp'] = array(
    'description' => 'Upgrade challenge to use Gulp instead of Compass.',
    'examples' => array(
      'drush challenge-upgrade-gulp my_theme' => 'Upgrades my_theme to use Gulp',
    ),
  );

  // Upgrade to the latest challenge.
  $items['challenge-upgrade-7034'] = array(
    'description' => 'Upgrade your challenge challenge to the latest version.',
    'arguments' => array(
      'name' => 'The name of your challenge.',
    ),
    'examples' => array(
      'drush challenge-upgrade my_theme' => 'Upgrades my_theme to the latest version',
    ),
  );

  return $items;
}

/**
 * Implements hook_drush_help().
 */
function challenge_drush_help($section) {
  switch ($section) {
    case 'drush:challenge':
      return dt('This command will create a challenge challenge. See examples to get started.');
    case 'drush:challenge-upgrade-gulp':
      return dt('This command will upgrade a challenge challenge to the Gulp version.');
  }
}

/**
 * Implements drush_hook_COMMAND().
 */
function drush_challenge($name = NULL, $machine_name = NULL) {

  // If no $name provided, abort.
  if (!$name) {
    drush_print(dt('Theme name missing. See help using drush challenge --help.'));
    return;
  }

  // Determine the theme name.
  if (!isset($name)) {
    $name = drush_get_option('name');
  }

  // Determine the machine name.
  if (!isset($machine_name)) {
    $machine_name = drush_get_option('machine_name');
  }
  if (!$machine_name) {
    $machine_name = $name;
  }
  $machine_name = str_replace(' ', '_', strtolower($machine_name));
  $search = array(
    '/[^a-z0-9_]/', // Remove characters not valid in function names.
    '/^[^a-z]+/',   // Functions must begin with an alpha character.
  );
  $machine_name = preg_replace($search, '', $machine_name);

  // Description of challenge.
  $description = (drush_get_option('description')) ? trim(drush_get_option('description')) : 'A theme based on challenge.';

  // Determine the path to the new challenge.
  $challenge_path = 'sites/all/themes';
  if ($destination = drush_get_option('destination')) {
    $challenge_path = drush_trim_path($destination);
  }
  $challenge_path = drush_normalize_path(drush_get_context('DRUSH_DRUPAL_ROOT') . '/' . $challenge_path . '/' . $machine_name);

  // Determine the kit to use.
  $kit = (drush_get_option('kit')) ? drush_trim_path(drush_get_option('kit')) : 'default';

  // Make a fresh copy of the kit.
  $kit_path = drush_normalize_path(drush_get_context('DRUSH_DRUPAL_ROOT') . '/' . drupal_get_path('theme', 'challenge') . '/kits/' . $kit);

  // Allow kits to be pulled from external urls.
  if (valid_url($kit, TRUE)) {
    $kit_url = $kit;
    $kit_name = 'kit';

    // Get kit name from kit url.
    if (preg_match("/\/challenge\-kit\-([a-z0-9\_]*)\//", $kit_url, $matches)) {
      $kit_name = $kit = $matches[1];
    }

    // Switch to a temp directory.
    $current_dir = getcwd();
    chdir(drush_tempdir());

    drush_print(dt('Downloading @kit_name from @kit_url...', array(
      '@kit_name' => (!empty($kit_name)) ? $kit_name . ' kit' : $kit_name,
      '@kit_url' => $kit_url,
    )));
    if ($filepath = drush_download_file($kit_url)) {
      $filename = basename($filepath);

      // Decompress the zip archive.
      $files = drush_tarball_extract($filename, getcwd(), TRUE);

      // Re-index array.
      // This fixes an issue where a .tag.gz tarball returns a non-zero array.
      $files = array_values($files);
      $kit_path = getcwd() . '/' . $files[0];

      // Set working directory back to the previous working directory.
      chdir($current_dir);
    }
  }

  if (!is_dir(dirname($challenge_path))) {
    drush_die(dt('The directory "!directory" was not found.', array('!directory' => dirname($challenge_path))));
  }
  drush_op('drush_copy_dir', $kit_path, $challenge_path);

  // Copy Bootswatch theme to bootswatch folder.
  if ($bootswatch = drush_get_option('bootswatch')) {
    // Switch to a temp directory.
    $current_dir = getcwd();
    chdir(drush_tempdir());

    if ($filepath = drush_download_file(BOOTSWATCH_URL)) {
      $filename = basename($filepath);
      $dirname =  basename($filepath, '.zip');

      // Decompress the zip archive.
      drush_tarball_extract($filename, $dirname, TRUE);

      // Copy bootswatch theme to challenge.
      $bootswatch_path = $challenge_path . '/scss/bootswatch/';
      drush_print($bootswatch_path);
      drush_move_dir($dirname . '/challenge-bootswatch-master/' . $bootswatch, $bootswatch_path, TRUE);
    }

    // Set working directory back to the previous working directory.
    chdir($current_dir);
  }

  // Alter the contents of the .info file based on the command options.
  $alterations = array(
    '{{Name}}' => $name,
    '{{Description}}' => $description,
    '{{machine_name}}' => $machine_name,
    'hidden = true' => '',
  );
//  drush_op('challenge_file_str_replace', $challenge_info_file, array_keys($alterations), $alterations);

  // Replace all occurrences of '{{machine_name}}' with the machine name of our sub theme.
  $files_to_replace = array(
    $kit . '.info',
    'template.php',
    'theme-settings.php',
    'config.json',
    'bower.json',
    'package.json',
    'scss/' . $kit . '.style.scss',
  );

  // Also make alterations in the include files.
  $include_files = array_diff(scandir($challenge_path . '/includes'), array('..', '.'));
  foreach ($include_files as $include) {
    $files_to_replace[] = 'includes/' . $include;
  }

  foreach ($files_to_replace as $file_to_replace) {
    drush_op('challenge_file_str_replace', $challenge_path . '/' . $file_to_replace, array_keys($alterations), $alterations);
  }

  // Rename files.
  $files_to_rename = array(
    '{{kit}}.info',
    'scss/{{kit}}.style.scss',
    'assets/js/{{kit}}.script.js',
  );
  foreach ($files_to_rename as $file_to_rename_path) {
    $file_original_path = $challenge_path . '/' . str_replace('{{kit}}', $kit, $file_to_rename_path);
    $file_new_path = $challenge_path . '/' . str_replace('{{kit}}', $machine_name, $file_to_rename_path);
    drush_op('rename', drush_normalize_path($file_original_path), drush_normalize_path($file_new_path));
  }

  // Notify user of the newly created theme.
  $message = 'Successfully created the challenge challenge "!name" created in: !path using the "!kit" kit';

  // Add bootstwatch to message.
  if ($bootswatch != '') {
    $message .= ' and the "!bootswatch" bootswatch theme';
  }

  $message = dt($message . '.', array(
    '!name' => $name,
    '!path' => $challenge_path,
    '!kit' => $kit,
    '!bootswatch' => $bootswatch,
  ));
  drush_print($message);
}

/**
 * Implements drush_hook_COMMAND().
 */
function drush_challenge_upgrade_gulp() {
  global $base_url;

  // Prepare options.
  $all_themes = list_themes();

  // Remove default option.
  unset($all_themes['default']);

  $options = array_filter($all_themes, function($n) {
    return ($n->base_theme == 'challenge');
  });

  array_walk($options, function(&$n, $key) {
    $n = $n->info['name'];
  });

  // Set configuration values.
  $machine_name = drush_choice($options, dt('Which theme would you like to update?'));
  $name = $all_themes[$machine_name]->info['name'];
  $description = $all_themes[$machine_name]->info['description'];
  $theme_path = drush_normalize_path(drush_get_context('DRUSH_DRUPAL_ROOT') . '/' . drupal_get_path('theme', 'challenge')) . '/';
  $challenge_path = drush_normalize_path(drush_get_context('DRUSH_DRUPAL_ROOT') . '/' . drupal_get_path('theme', $machine_name)) . '/';

  // Remove files that are no longer necessary.
  $remove_files = array(
    'config.rb',
    'Gemfile',
    'Gemfile.lock',
    'Guardfile',
    'assets/sass/screen.scss',
  );

  foreach ($remove_files as $file) {
    if (drush_op('unlink', $challenge_path . $file)) {
      print "Deleted file: $file.\n";
    } else {
      print "Failed to delete file: $file.\n";
    }
  }

  // Copy files from kit.
  $copy_files = array(
    'bower.json' => 'bower.json',
    'config.json' => 'config.json',
    'package.json' => 'package.json',
    'gulpfile.js' => 'gulpfile.js',
    'scss/default.style.scss' => "assets/sass/$machine_name.style.scss",
  );

  foreach ($copy_files as $from => $to) {
    if (drush_op('copy', $theme_path . 'kits/default/' . $from, $challenge_path . $to)) {
      print "Copied file: $from to $to.\n";
    } else {
      print "Failed to copy file: $from to $to.\n";
    }
  }

  // Update configuration files.
  $update_files = array(
    'bower.json',
    'config.json',
    'package.json',
  );

  foreach ($update_files as $file) {
    $file_path = $challenge_path . $file;
    challenge_file_str_replace($file_path, 'http://panopoly.dev', $base_url);
    challenge_file_str_replace($file_path, '{{Name}}', $machine_name);
    challenge_file_str_replace($file_path, '{{Description}}', $description);
    challenge_file_str_replace($file_path, '{{machine_name}}', $machine_name);
  }

  // Copy challenge scss.
  if (drush_op('drush_copy_dir', $theme_path . 'kits/default/scss/challenge', $challenge_path . 'assets/sass/challenge')) {
    print "Copied directory: challenge/scss.\n";
  } else {
    print "Failed to copy directory: challenge/scss.\n";
  }

  // Move files.
  $rename_files = array(
    'assets/sass' => 'scss',
    'scss/global' => 'scss/base',
    'scss/partials' => 'scss/components',
    'scss/base/_helper.scss' => 'scss/base/_helpers.scss',
    'scss/base/_mixin.scss' => 'scss/base/_mixins.scss',
    'scss/base/_variable.scss' => 'scss/base/_variables.scss',
    'assets/stylesheets' => 'css',
    'assets/javascripts' => 'js',
    'js/script.js' => "js/$machine_name.script.js",
  );

  foreach ($rename_files as $from => $to) {
    if (drush_op('rename', $challenge_path . $from, $challenge_path . $to)) {
      print "Renamed file: $from to $to.\n";
    }
    else {
      print "Failed to rename file: $from.\n";
    }
  }

  // Update info file.
  $info_file_path = "$challenge_path$machine_name.info";
  challenge_file_str_replace($info_file_path, 'assets/stylesheets', 'assets/css');
  challenge_file_str_replace($info_file_path, 'assets/javascripts', 'assets/js');
  challenge_file_str_replace($info_file_path, 'assets/css/screen.css', "assets/css/$machine_name.style.css");
  challenge_file_str_replace($info_file_path, 'assets/js/script.js', "assets/js/$machine_name.script.js");
}

/**
 * Implements drush_hook_COMMAND().
 */
function drush_challenge_upgrade_7034($challenge = NULL) {
  // Check if the challenge exists.
  $challenge_path = drupal_get_path('theme', $challenge);
  if (!$challenge_path) {
    drush_set_error('challenge_NOT_FOUND', dt('challenge challenge \'@challenge\' not found.', array(
      '@challenge' => $challenge
    )));
    return;
  }

  // Ask for confirmation
  drush_print('--- --- ---');
  drush_print(dt('This command will upgrade challenge \'@challenge\' to challenge 7.x-3.4.', array(
    '@challenge' => $challenge
  )));
  drush_print(dt('Please make sure you have a backup before proceeding.'));

  if (!drush_confirm('Are you sure you want to proceed?')) {
    drush_user_abort();
    return;
  }

  // Set paths.
  $challenge_path = drush_normalize_path(drush_get_context('DRUSH_DRUPAL_ROOT') . '/' . drupal_get_path('theme', 'challenge'));
  $challenge_path = drush_normalize_path(drush_get_context('DRUSH_DRUPAL_ROOT') . '/' . $challenge_path);

  // Check if challenge challenge scss files is there.
  $challenge_challenge_scss_path = $challenge_path . '/scss/challenge';
  if (!file_exists($challenge_challenge_scss_path)) {
    drush_set_error('challenge_challenge_SCSS_NOT_FOUND', dt('challenge scss files for challenge \'@challenge\' not found.', array(
      '@challenge' => $challenge
    )));
    return;
  }

  // Start the upgrade.
  drush_print(dt('Starting challenge \'@challenge\' upgrade to challenge 7.x-3.4.', array(
    '@challenge' => $challenge
  )));
  drush_print('--- --- ---');

  // Step 1: Delete challenge challenge scss files.
  if (drush_delete_dir($challenge_challenge_scss_path)) {
    drush_print(dt('1. Successfully removed old scss/challenge files for challenge \'@challenge\'.', array(
      '@challenge' => $challenge
    )));
  }

  // Step 2: Copy challenge scss.
  if (drush_op('drush_copy_dir', $challenge_path . '/kits/default/scss/challenge', $challenge_path . '/scss/challenge')) {
    drush_print(dt('2. Successfully copied new scss/challenge files to challenge \'@challenge\'.', array(
      '@challenge' => $challenge
    )));
  } else {
    drush_set_error('SCSS_NOT_COPIED', dt('2. Failed to copy challenge scss files to challenge \'@challenge\'.', array(
      '@challenge' => $challenge
    )));
  }

  // Step 3: Move js files.
  if (file_exists($challenge_path . '/js')) {
    if (drush_copy_dir($challenge_path . '/js', $challenge_path . '/assets/js', FILE_EXISTS_OVERWRITE)) {
      drush_print(dt('3. Successfully copied js files to assets/js.'));

      // Step 4: Delete js files.
      if (drush_delete_dir($challenge_path . '/js')) {
        drush_print(dt('4. Successfully removed old js.'));
      }
    }
  }
  else {
    drush_set_error('JS_NOT_COPIED', dt('3. Failed to copy js files to assets/js.'));
    drush_set_error('JS_NOT_COPIED', dt('4. Failed to remove old js files.'));
  }

  // Step 5: Update gulpfile.
  $challenge_gulpfile_path = $challenge_path . '/gulpfile.js';
  if (drush_op('copy', $challenge_path . '/kits/default/gulpfile.js', $challenge_gulpfile_path)) {
    drush_print(dt('5. Successfully copied new gulpfile.js to challenge \'@challenge\'.', array(
      '@challenge' => $challenge
    )));
  }
  else {
    drush_set_error('GULPFILE_NOT_COPIED', dt('5. Failed to copy new gulpfile.js to challenge \'@challenge\'.', array(
      '@challenge' => $challenge
    )));
  }

  // Step 6: Add settings to info file.
  $challenge_info_path = $challenge_path . '/' . $challenge . '.info';
  $preprocess_css_setting = "\n; Settings\n; Set this to FALSE for development only.\nsettings[preprocess_css] = FALSE";
  if (challenge_file_str_replace($challenge_info_path, 'base theme  = challenge', 'base theme  = challenge' . $preprocess_css_setting)) {
    drush_print(dt('6. Successfully added preprocess_css setting to \'@challenge\'.info.', array(
      '@challenge' => $challenge
    )));
  }
  else {
    drush_set_error('GULPFILE_NOT_COPIED', dt('6. Failed to add preprocess_css setting to \'@challenge\'.info.', array(
      '@challenge' => $challenge
    )));
  }

  // Print messages.
  drush_print('--- --- ---');
  drush_print(dt('challenge challenge \'@challenge\' has been upgraded to the challenge 7.x-3.4. Please verify your theme files.', array(
    '@challenge' => $challenge
  )));
  drush_print('--- --- ---');

  drush_print(dt('IMPORTANT: Run the following commands to install new npm modules: '));
  drush_print(dt('  npm install --save gulp-jshint gulp-scss-lint'));
  drush_print(dt('  gulp'));
  drush_print('--- --- ---');
}

/**
 * Replace strings in a file.
 */
function challenge_file_str_replace($file_path, $find, $replace) {
  $file_path = drush_normalize_path($file_path);
  $file_contents = file_get_contents($file_path);
  $file_contents = str_replace($find, $replace, $file_contents);
  return file_put_contents($file_path, $file_contents);
}

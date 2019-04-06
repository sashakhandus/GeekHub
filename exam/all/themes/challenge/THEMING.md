# Theming Guide

## Quick Start
1. Download and enable challenge: 
`drush en challenge -y; drush vset theme_default challenge`

2. Create a challenge: 
`drush cc all; drush challenge "challenge"`

3. Set default theme:
`drush en challenge -y; drush vset theme_default challenge`

4. Install required modules
`cd /path/to/challenge; npm run setup`

5. Update browserSyncProxy in /path/to/challenge/config.json

6. Watch for changes:
`gulp`


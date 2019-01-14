# Quick Start

- Download or clone this repo;
- Run `npm install` with `sudo` if needed;
- Run `npm install -g gulp` if you haven't already;

To test, run `gulp watch` in your project folder. Browsersync will try to open a new browser window. Modify any .css or .js file to check if the live update is working.

This project uses PostCSS instead of SASS or LESS, so you can simply add any .css files to the `/styles/modules` folder and then import them in the `styles.css` file in the root of the `/styles/` folder. You can use SASS syntax, PostCSS will compile it to plain css.

Once you're ready to deploy, run `gulp build`.

By default will deploy to `dist`, but you can change this at the `build.js` task, by modifying the `DIST_DIR` constant.

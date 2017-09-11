# NPM Scripts

This repository can be used as a starting point for any frontend theme, through modifying the
npm scripts inside package.json, great flexibility is allowed. The following is supported:

- [SCSS linting](https://www.npmjs.com/package/sass-lint) and Compilation via [node-sass](https://www.npmjs.com/package/node-sass) with Postcss plugins:
    - [PX to REM](https://www.npmjs.com/package/postcss-pxtorem) - auto convert px to rems.
    - [Autoprefixer](https://www.npmjs.com/package/autoprefixer)
    - [Cssnano](https://www.npmjs.com/package/cssnano)
- [Browserify](http://browserify.org/) + [Watchify](https://www.npmjs.com/package/watchify) with the following transforms:
    - [Eslintify](https://www.npmjs.com/package/eslintify)
		- [Flowtype ready](https://www.npmjs.com/package/eslint-plugin-flowtype)
		- Config in package.json under `eslintConfig`
    - [Babelify](https://www.npmjs.com/package/babelify) ( env and flow presets )
		- Config in package.json under `babel` key
    - [Unflowify](https://www.npmjs.com/package/unflowify) ( to remove unusable static annotations from build)
    - [Uglifyify](https://www.npmjs.com/package/uglifyify) ( for production builds )
- [Image minification](https://www.npmjs.com/package/imagemin-cli)
- [Copy](https://www.npmjs.com/package/copyfiles)
- [a11y](https://www.npmjs.com/package/a11y) for Accessibility testing
- [filesize](https://www.npmjs.com/package/a11y) package displays asset sizes at the end of the production build
- [Browsersync](https://www.npmjs.com/package/browser-sync) with all compilation triggering browser reload
- Check version script that ensures correct Node version is loaded, defined by package.json's `engines` key.

## Install/Run

1. `docker-compose up`
2. Access at `http://localhost`

## Build

1. `docker-compose up`
2. In another tab: `docker-compose exec web npm run build`

### Why browserify?

Because we tend to make sites, not directly apps so much. That said, there's no reason more npm scripts couldn't be
added to get webpack packin'. If you would like to see an example of this in action, take a look at the `webpack` branch.'

### 3rd party dependencies

The following are included for optional use in the frontend itself:

- Foundation
- jQuery
- Owl.carousel

For the build system, the following are included optionally

- Factor bundle (for making multiple shared bundles for different pages)

### Flow type checking

As part of eslint, flow is enabled. Static annotations are stripped out as part of the babelify browserify transform.
If you wish to have a persistant flow watcher as you work, open a new terminal and:

`docker-compose run --rm web npm run flow:watch`
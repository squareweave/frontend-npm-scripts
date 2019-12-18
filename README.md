# NPM Scripts

This repository can be used as a starting point for any frontend theme, through modifying the
npm scripts inside package.json, great flexibility is allowed. The following is supported:

- [node-sass](https://www.npmjs.com/package/node-sass) with Postcss plugins:
    - Stylelint
    - [PX to REM](https://www.npmjs.com/package/postcss-pxtorem) - auto convert px to rems.
    - [Autoprefixer](https://www.npmjs.com/package/autoprefixer)
    - [Cssnano](https://www.npmjs.com/package/cssnano)
- [Image minification](https://www.npmjs.com/package/imagemin-cli)
- [Copy](https://www.npmjs.com/package/copyfiles)
- [SVG sprite generation](http://npmjs.com/package/svg-sprite)
- [a11y](https://www.npmjs.com/package/a11y) for Accessibility testing
- [filesize](https://www.npmjs.com/package/a11y) package displays asset sizes at the end of the production build
- [Browsersync](https://www.npmjs.com/package/browser-sync) with all compilation triggering browser reload
- Check version script that ensures correct Node version is loaded, defined by package.json's `engines` key.


# Build

1. `docker-compose run --rm frontend npm run build`
2. Your built static site will be available at `./dist`

---   

# Develop

1. `docker-compose up`
2. `http://localhost`

### Preact inbuilt

Preact (instead of react) is included and imported as `react` via `preact-compat`. This should
allow you to create react modules and use react packages easily.

---

### 3rd party dependencies

The following are included for optional use in the frontend itself:

- Foundation
- jQuery
- Owl.carousel

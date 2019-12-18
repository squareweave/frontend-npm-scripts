const Metalsmith = require('metalsmith');
const layouts = require('metalsmith-layouts');
const watch = require('metalsmith-watch');
const rename = require('metalsmith-rename');
const permalinks = require('metalsmith-permalinks');
const assets = require('metalsmith-assets');
const argv = require('minimist')(process.argv.slice(2));
let isWatch = false;
if (argv.w) {
    isWatch = true;
}
const config = {
    default: 'layout.twig',
    directory: 'app/views',
    engineOptions: {
        "cache": false
    }
};

Metalsmith('./')
    .source('app/pages')
    .use(rename([[/\.twig$/, '.html']]))
    .use(permalinks())
    .destination('dist')
    .use(layouts(config))
    .use(
        assets({
            source: '.built/frontend/', // relative to the working directory
            destination: 'assets' // relative to the build directory
        })
    )
    .use(
        isWatch
            ? watch({
                  paths: {
                      '.built/frontend/js/**/*': '**/*.twig',
                      '.built/frontend/fonts/**/*': '**/*.twig',
                      '.built/frontend/images/**/*': '**/*.twig',
                      'app/pages/**/*': '**/*.twig',
                      'app/views/**/*': '**/*.twig'
                  }
              })
            : null
    )
    .build(err => {
        if (err) {
            throw err;
        }
    });

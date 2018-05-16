#!/usr/bin/env node
'use strict';
const argv = require('minimist')(process.argv.splice(2));
const webfontsGenerator = require('webfonts-generator');
const globString = argv.i;
const dest = argv.d;
const glob = require("glob");

module.exports = function() {
    let files = [];
    const globStrings = globString.split(',');

    globStrings.map( (string) => {
        const fileList = glob.sync( string );
        files.push(...fileList);
    });

    return webfontsGenerator({
        fontName: 'sqw-admin-icons',
        files: files,
        cssTemplate: './config/frontend/iconfont.template.hbs',
        templateOptions: {
            classPrefix: 'icon-sqw-',
            baseSelector: '.icon-sqw'
        },
        dest: `${dest}/fonts/`,
        cssDest: `${dest}/css/admin-fonts.css`,
        cssFontsUrl: '../fonts/'
    }, function(error) {
        if (error) {
            console.log('Fail!', error);
            process.exit();
        } else {
            console.log('Icon font generated!');
        }
    });
}();

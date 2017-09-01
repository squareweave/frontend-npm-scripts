var concat = require('concat');
var packageJSON = require('../package.json');
concat(packageJSON.concat.files, packageJSON.concat.dist)

const semver = require('semver');
const packageJson = require('../package.json');
const colors = require('colors/safe');
const version = packageJson.engines.node;

if (!semver.satisfies(process.version, version)) {
    console.log(
        colors.red.underline(
            'Required node version' +
                version +
                ' not satisfied with current version ' +
                process.version
        )
    );
    process.exit(1);
}

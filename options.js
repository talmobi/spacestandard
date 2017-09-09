var eslint = require( 'eslint' )
var path = require( 'path' )
var pkg = require( './package.json' )

module.exports = {
  // homepage, version and bugs pulled from package.json
  version: pkg.version,
  homepage: pkg.homepage,
  bugs: pkg.bugs.url,
  eslint: eslint, // pass any version of eslint >= 1.0.0
  cmd: 'spacestandard', // should match the "bin" key in your package.json
  tagline: 'standard with spaces, spacestandard', // displayed in output --help
  eslintConfig: {
    configFile: path.join( __dirname, 'eslintrc.json' )
  },
  cwd: '' // current working directory, passed to eslint
}

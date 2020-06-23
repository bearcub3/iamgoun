const postcssImport = require('postcss-import');
const postcssPresetEnv = require('postcss-preset-env');
const cssnano = require('cssnano');

module.exports = ({ file, options, env }) => ({
  parser: file.extname === '.sss' ? 'sugarss' : false,
  plugins: [
    postcssImport({ root: file.dirname }),
    postcssPresetEnv({
      stage: 2,
      browsers: 'last 2 versions'
    }),
    cssnano(env === 'production' ? options.cssnano : false)
  ]
});

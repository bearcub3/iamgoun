const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpackMerge = require('webpack-merge');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const modeConfig = env => require(`./build-utils/webpack.${env}`)(env);

module.exports = ({ mode } = { mode: 'production' }) => {
  return webpackMerge(
    {
      mode,
      devtool: mode === 'development' ? '' : 'cheap-module-source-map',
      entry: './src/App.js',
      output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'src/js/[chunkhash].js'
      },
      devServer: {
        compress: true,
        overlay: true
      },
      plugins: [
        new HtmlWebpackPlugin({
          path: path.resolve(__dirname, './dist'),
          filename: 'index.html',
          title: "I'm 고운, a front-end/UI/UX developer",
          template: './src/index.html'
        }),
        new CleanWebpackPlugin(),
        new ForkTsCheckerWebpackPlugin({
          async: false
        })
      ]
    },
    modeConfig(mode)
  );
};

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = mode => ({
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          'url-loader',
          {
            loader: 'file-loader',
            options: {
              name(resourcePath, resourceQuery) {
                if (mode === 'development') {
                  return '[path][name].[ext]';
                }
              },
              outputPath(url, resourcePath, context) {
                return `${path.relative(context, resourcePath)}`;
              },
              publicPath: '/dist'
            }
          }
        ]
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack']
      },
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'eslint-loader',
        options: {
          emitWarning: true,
          configFile: './.eslintrc.json'
        }
      },
      {
        test: /\.jsx?/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            envName: 'development',
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { url: false } },
          'resolve-url-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.exec\.js$/,
        use: ['script-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', 'tsx', 'scss']
  },
  watch: true
});

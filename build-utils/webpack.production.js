const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const postcssPresetEnv = require('postcss-preset-env');

module.exports = mode => ({
  mode,
  optimization: {
    splitChunks: {
      chunks: 'async',
      maxAsyncRequests: 6,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        commons: {
          name: 'commons',
          chunks: 'all',
          minChunks: 2
        }
      }
    }
  },
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
          presets: ['es2015'],
          fix: true
        }
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              url: false,
              esModule: true,
              importLoaders: 1
            }
          },
          'resolve-url-loader',
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              config: {
                ctx: {
                  postcssPresetEnv: {
                    stage: 2,
                    browsers: 'last 2 versions'
                  },
                  cssnano: {
                    preset: [
                      'default',
                      {
                        discardComments: { removeAll: true }
                      }
                    ]
                  }
                }
              }
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.exec\.js$/,
        use: ['script-loader']
      }
    ]
  }
});

const webpack = require('webpack');
const path = require('path');
const basePath = path.resolve(__dirname, 'src');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const RemoveEmptyScriptsPlugin = require('webpack-remove-empty-scripts');
const CopyPlugin = require('copy-webpack-plugin');
const enabledSourceMap = process.env.NODE_ENV !== 'production';

module.exports = {
  mode: 'production',
  entry: {
    'assets/scripts/viewport': [
      `./src/assets/scripts/viewport.js`,
    ],
    'assets/scripts/app': [
      `./src/assets/scripts/app.js`,
    ],
    'assets/styles/app': [
      `./src/assets/styles/app.scss`,
    ],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'docs'),
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: miniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              url: false,
              sourceMap: enabledSourceMap,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  ['autoprefixer', { grid: true }],
                  ['postcss-sort-media-queries', { sort: 'mobile-first' }],
                  // ['postcss-sort-media-queries', { sort: customSort }],
                  'postcss-flexbugs-fixes',
                  ['cssnano', { autoprefixer: false }],
                ],
              },
            },
          },
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
              sourceMap: enabledSourceMap,
              sassOptions: {
                outputStyle: 'expanded',
              },
            },
          },
          {
            loader: 'import-glob-loader',
          },
        ],
      },
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendorAssetsScripts: {
          test: /node_modules/,
          name: 'assets/scripts/vendor',
          chunks: (chunk) => chunk.name === 'assets/scripts/app',
          enforce: true
        },
        // vendorAssetsPlayerScripts: {
        //   test: /node_modules/,
        //   name: 'assets/scripts/lp-vendor',
        //   chunks: (chunk) => chunk.name === 'assets/scripts/lp-app',
        //   enforce: true
        // }
      }
    }
  },
  plugins: [
    new RemoveEmptyScriptsPlugin(),
    new miniCssExtractPlugin({
      filename: '[name].css',
      ignoreOrder: true,
    }),
    new CopyPlugin({
      patterns: [
        {
          from: 'src/assets/images',
          to: 'assets/images',
        },
      ],
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),
  ],
  // devtool: 'source-map',
  watchOptions: {
    ignored: /node_modules/,
  },
  target: ['web', 'es5'],
  resolve: {
    alias: {
      '~': basePath,
    },
  },
};



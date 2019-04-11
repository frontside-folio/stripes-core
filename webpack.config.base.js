// Common Webpack configuration for building Stripes
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const { generateStripesAlias } = require('./webpack/module-paths');
const babelLoaderRule = require('./webpack/babel-loader-rule');
const typescriptLoaderRule = require('./webpack/typescript-loader-rule');

// React doesn't like being included multiple times as can happen when using
// yarn link. Here we find a more specific path to it by first looking in
// stripes-core (__dirname) before falling back to the platform or simply react
const specificReact = generateStripesAlias('react');

module.exports = {
  entry: [
    '@folio/stripes-components/lib/global.css',
    path.join(__dirname, 'src', 'index'),
  ],
  resolve: {
    alias: {
      'react': specificReact,
    },
    extensions: ['.js', '.json', '.tsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${__dirname}/index.html`,
    }),
    new webpack.EnvironmentPlugin(['NODE_ENV']),
    // https://github.com/lodash/lodash-webpack-plugin#feature-sets
    // Replace lodash feature sets of modules with noop.
    // Any needed feature sets should be enabled here:
    new LodashModuleReplacementPlugin({
      'collections': true,
      'flattening': true,
      'paths': true
    })
  ],
  module: {
    rules: [
      babelLoaderRule,
      typescriptLoaderRule,
      {
        test: /\.(jpg|jpeg|gif|png|ico|svg)$/,
        loader: 'file-loader?name=img/[path][name].[hash].[ext]',
      },
      {
        test: /\.(mp3|m4a)$/,
        loader: 'file-loader?name=sound/[name].[hash].[ext]',
      },
      {
        test: /\.(woff2?)$/,
        loader: 'file-loader?name=fonts/[name].[hash].[ext]',
      },
    ],
  },
};

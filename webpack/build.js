const webpack = require('webpack');
const path = require('path');
const StripesWebpackPlugin = require('./stripes-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const applyWebpackOverrides = require('./apply-webpack-overrides');
const logger = require('./logger')();

const platformModulePath = path.join(path.resolve(), 'node_modules');

module.exports = function build(stripesConfig, options) {
  return new Promise((resolve, reject) => {
    logger.log('starting build...');
    let config = require('../webpack.config.cli.prod'); // eslint-disable-line

    config.plugins.push(new StripesWebpackPlugin({ stripesConfig }));

    config.resolve.modules = ['node_modules', platformModulePath];
    config.resolveLoader = { modules: ['node_modules', platformModulePath] };

    if (options.outputPath) {
      config.output.path = path.resolve(options.outputPath);
    }
    if (options.publicPath) {
      config.output.publicPath = options.publicPath;
    }
    if (options.sourcemap) {
      config.devtool = 'source-map';
    }
    if (options.minify !== false) {
      config.plugins.push(new UglifyJSPlugin({
        sourceMap: config.devtool && config.devtool === 'source-map',
      }));
    }

    // Give the caller a chance to apply their own webpack overrides
    config = applyWebpackOverrides(options.webpackOverrides, config);

    logger.log('assign final webpack config', config);
    const compiler = webpack(config);
    compiler.run((err, stats) => {
      if (err) {
        reject(err);
      } else {
        resolve(stats);
      }
    });
  });
};

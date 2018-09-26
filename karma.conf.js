module.exports = (config) => {
  const testIndex = './test/bigtest/index.js';

  const configuration = {
    files: [
      { pattern: testIndex, watched: false },
    ],

    preprocessors: {
      [testIndex]: ['webpack']
    },

    browserStack: {
      project: 'stripes-core'
    },

    browserDisconnectTimeout: 3e5,
    browserDisconnectTolerance: 3,
    browserNoActivityTimeout: 3e5,
    captureTimeout: 3e5,

    customLaunchers: {
      bs_safari_11: {
        base: 'BrowserStack',
        os: 'OS X',
        os_version: 'High Sierra',
        browser: 'safari',
        browser_version: '11.1'
      },
      bs_edge_windows: {
        base: 'BrowserStack',
        browser: 'edge',
        browser_version: '15.0',
        os: 'Windows',
        os_version: '10'
      },
      bs_ie_windows: {
        base: 'BrowserStack',
        browser: 'ie',
        browser_version: '11',
        os: 'Windows',
        os_version: '10'
      }
    }
  };

  // BrowserStack launcher isn't automatically added by Stripes CLI
  configuration.plugins = config.plugins;
  configuration.plugins.push('karma-browserstack-launcher');

  config.set(configuration);
};

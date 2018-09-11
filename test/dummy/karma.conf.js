const testIndex = '../bigtest/index.js';

module.exports = (config) => {
  config.set({
    files: [
      { pattern: testIndex, watched: false }
    ],

    preprocessors: {
      [testIndex]: ['webpack']
    }
  });
};

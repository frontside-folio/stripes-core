import 'babel-polyfill';

// require all source files for stripes-core so they get coverage stats
const srcContext = require.context('../../src/components/', true, /^.*\.js$/);
srcContext.keys().forEach(srcContext);

// require all modules ending in "-test" from the BigTest tests directory and
// all subdirectories
const requireTest = require.context('./tests/', true, /-test/);
requireTest.keys().forEach(requireTest);

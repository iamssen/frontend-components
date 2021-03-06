const {build} = require('@rocket-scripts/web');
const babelLoaderOptions = require('./babelLoaderOptions');

build({
  app: 'ui-guideline',
  staticFileDirectories: [
    '{cwd}/public',
    '{cwd}/src/@lunit/insight-viewer/public',
  ],
  babelLoaderOptions,
});
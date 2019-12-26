const isBrowser = require('./getEnvironment')('type') === 'browser';
const resolveURL = isBrowser ? require('resolve-url') : s => s; // eslint-disable-line

export default (options) => {
  const opts = { ...options };
  ['corePath', 'workerPath'].forEach((key) => {
    if (typeof options[key] !== 'undefined') {
      opts[key] = resolveURL(opts[key]);
    }
  });
  return opts;
};

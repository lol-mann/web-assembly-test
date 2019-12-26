const path = require('path');
const defaultOptions = require('../../constants/defaultOptions');

/*
 * Default options for node worker
 */
export default {
  ...defaultOptions,
  workerPath: path.join(__dirname, '..', '..', 'worker-script', 'node', 'index.js'),
};

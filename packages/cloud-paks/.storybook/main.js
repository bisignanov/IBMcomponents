/**
 * Copyright IBM Corp. 2020, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

const { resolve } = require('path');

module.exports = {
  addons: [
    '@storybook/addon-docs',
    { 
      name: '@storybook/preset-scss',
      options: {
        sassLoaderOptions: {
          sassOptions: {
            includePaths: [resolve(__dirname, '..', '..', '..', 'node_modules')],
          }
        }
      }
    }
  ],
  stories: ['../src/**/*.stories.js']
};

/**
 * Copyright IBM Corp. 2020, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

const { merge } = require('webpack-merge');
const { resolve } = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const glob = require('fast-glob');

const maxAssetSize = 1024 * 1024;

const storyGlobs = [
  '../../ibm-products/src/**/*.stories.*',
  '../../ibm-products-community/src/**/*.stories.*',
  '../src/**/*.stories.*',
  '../../../examples/carbon-for-ibm-products/example-gallery/src/example-gallery.stories.js',
];

const stories = glob.sync(storyGlobs, {
  ignore: [
    '../../**!(node_modules)/**!(node_modules)/*.mdx',
    '../../**!(node_modules)/**!(node_modules)/*.stories.*',
  ],
  cwd: __dirname,
});

module.exports = {
  staticDirs: ['../public'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-docs',
    '@storybook/addon-controls',
    '@storybook/addon-links',
    {
      name: '@storybook/addon-storysource',
      options: {
        rule: {
          test: /(-story|.stories).js$/,
        },
      },
    },
    '@storybook/addon-viewport',
    '@storybook/addon-mdx-gfm',
    '@carbon/storybook-addon-theme/preset.js',
  ],

  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },

  features: {
    // setting storyStoryV7 to false allows the storybook to build
    storyStoreV7: false, // 👈 Opt out of on-demand story loading - problems https://github.com/storybookjs/storybook/issues/21696
  },

  stories,

  typescript: {
    reactDocgen: 'react-docgen', // Favor docgen from prop-types instead of TS interfaces
  },

  // v11 will only show stories for C4P components (or at least until CDAI/Security move from v10 to v11)
  webpackFinal: async (configuration, { configType }) =>
    merge(configuration, {
      optimization: {
        removeAvailableModules: true,
        removeEmptyChunks: true,
        splitChunks: {
          chunks: 'all',
          minSize: 30 * 1024,
          maxSize: maxAssetSize,
        },
        minimize: true,
        minimizer: [
          new TerserPlugin({
            minify: TerserPlugin.esbuildMinify,
            terserOptions: {
              minify: true,
            },
          }),
        ],
      },
      performance: {
        maxAssetSize: maxAssetSize,
      },
      cache: {
        type: 'filesystem',
        allowCollectingMemory: true,
      },
      module: {
        rules: [
          {
            test: /\.stories\.js$/,
            loader: 'babel-loader',
            options: require('babel-preset-ibm-cloud-cognitive')(),
          },
          {
            test: /\.scss$/,
            use: [
              {
                loader: 'style-loader',
                options: {
                  // https://webpack.js.org/loaders/style-loader/#lazystyletag
                  injectType: 'lazyStyleTag',
                },
              },
              'css-loader',
              {
                loader: 'sass-loader',
                options: {
                  sassOptions: {
                    includePaths: [
                      resolve(__dirname, '..', 'node_modules'),
                      resolve(__dirname, '..', '..', '..', 'node_modules'),
                    ],
                  },
                  warnRuleAsWarning: true,
                  sourceMap: true,
                },
              },
            ],
          },
        ],
      },
      resolve: {
        alias: {
          ALIAS_STORY_STYLE_CONFIG$: resolve(
            configType === 'DEVELOPMENT'
              ? '../ibm-products-styles/src/config-dev.scss'
              : '../ibm-products-styles/src/config.scss'
          ),
        },
      },
    }),
};

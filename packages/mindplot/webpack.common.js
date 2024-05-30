const path = require('path');
const { merge } = require('webpack-merge');
const common = require('../../webpack.common');

const prodConfig = {
  resolve: {
    alias: {
      '@core-js': path.resolve(__dirname, 'packages/core-js/src'),
      '@mindplot': path.resolve(__dirname, 'packages/mindplot/src'),
      '@formbuilder': path.resolve(__dirname, 'packages/formbuilder/src'),
      '@editor': path.resolve(__dirname, 'packages/editor/src'),
    },
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    library: {
      type: 'umd',
    },
  },
  entry: {
    mindplot: './src/index.ts',
  },
};
module.exports = merge(common, prodConfig);

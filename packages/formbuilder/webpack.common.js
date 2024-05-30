const path = require('path');
const { merge } = require('webpack-merge');
const common = require('../../webpack.common');

const prodConfig = {
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    library: {
      type: 'umd',
    },
  },
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      '@formbuilder': path.resolve(__dirname, 'src/components'),
    },
  },
  entry: {
    formbuilder: './src/index.ts',
  },
};
module.exports = merge(common, prodConfig);

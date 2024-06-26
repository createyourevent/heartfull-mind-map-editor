const path = require('path');


/** @type {import('webpack').Configuration} */
module.exports = {
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        alias: {
            '@core-js': path.resolve(__dirname, 'packages/core-js/src'),
            '@mindplot': path.resolve(__dirname, 'packages/mindplot/src'),
            '@formbuilder': path.resolve(__dirname, 'packages/formbuilder/src'),
            '@mindplot': path.resolve(__dirname, 'packages/editor/src'),
        },
    },
    optimization: {
        usedExports: true,
    },
    stats: {
        errorDetails: true,
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.(tsx|ts)?$/,
                use: {
                    loader: "ts-loader",
                    options: {
                        allowTsInNodeModules: true,
                    },
                },
                exclude: '/node_modules/',
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                type: 'asset/inline',
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            }
        ],
    },
};

const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    entry: './src/index.js',
    output: {
        path: resolve(__dirname, 'public'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'eslint-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    resolve: {
        alias: {
            Assets: resolve(__dirname, 'src/assets/'),
            Components: resolve(__dirname, 'src/components/'),
            Services: resolve(__dirname, 'src/services/'),
            Theme: resolve(__dirname, 'src/theme/'),
            Stores: resolve(__dirname, 'src/stores/')
        }
    }
};

module.exports = config;

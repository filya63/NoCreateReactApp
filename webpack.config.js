const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.js' // входной файл для сборщика
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: '[name].[contenthash:6].js'
    },
    module: {
        rules: [
            {
            test: /\.js(x)?$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                presets: ['@babel/preset-env', "@babel/preset-react"],
                plugins: ["@babel/plugin-proposal-class-properties"] // для использования стрелочных функций в классовой компоненте
                }
            }
            }
        ],
    },
    devServer: {
        contentBase: path.join(__dirname, 'build'),
        compress: true,
        port: 3000
    },
    plugins: [
        new HtmlWebpackPlugin({template: './src/index.html'}), // берем за основу наш index.html
        new CleanWebpackPlugin() // При каждой сборке чистим папку build
    ]
}
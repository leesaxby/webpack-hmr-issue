const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: [
        'react-hot-loader/patch',
        './src/index.js'
    ],
    output: {
        publicPath: '/',
        filename: '[name].[hash].js'
    },
    devtool: 'eval',
    devServer: {
        host: '0.0.0.0',
        disableHostCheck: true,
        port: 9999,
        hot: true,
        historyApiFallback: true,
        clientLogLevel: 'info'
    },
    module: {
        rules: [{
            test: /\.js?$/,
            loader: 'babel-loader',
            exclude: /node_modules/
      }]
    },
    plugins: [
      new webpack.NamedModulesPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
          template: './src/index.html',
          inject: 'body',
      })
    ]
};
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './js/index.ts',
    output: { // 出口
        filename: 'index.js',
        path:__dirname + '/dist'
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader'
            }
 
        ]
    },
    resolve: {
        extensions: ['.ts','.js']
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: './index.html',
            template: './index.ejs',
            inject: false
        }),
        new webpack.HotModuleReplacementPlugin()
    ]


}
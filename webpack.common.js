const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/app.js',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist/'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                  MiniCssExtractPlugin.loader,
                  {
                    loader: "css-loader",
                    options: {
                      url: false
                    }
                  },
                  {
                    loader: "sass-loader",
                    options: {
                      implementation: require('dart-sass')
                    }
                  }
                ]
            },
            {
              },
              {
                test: /\.(jpe?g|png|gif|svg|ico|woff|woff2|eot|ttf)$/i,
                use: {
                  loader: 'file-loader'
                }
              },
        
            {
                test: /\.js$/,
                exclude: /node_modules/
            },
            {
                test: /\.m?js/,
                resolve:{
                    fullySpecified: false
                }
            }
        ]
    },
    devServer: {
        contentBase: './dist',
        overlay: true,
        hot: true
    },
    plugins: [
        new CleanWebpackPlugin({
            dry: true
          }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
        new CopyWebpackPlugin({
            patterns: [
                './src/index.html'
            ]
        }),
        
        new webpack.HotModuleReplacementPlugin(),
        new htmlWebpackPlugin({
            title: 'Testing',
            filename: 'testing/testing.html',
            template: './src/testing.html',
        }),
        new htmlWebpackPlugin({
            title: 'User',
            filename: 'user/user.html',
            template: './src/user.html',
        }),

    ]
};
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    mode: "development",
    entry: {
        main: './src/index.js'
    },
    output:{
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'inline-source-map',
    devServer:{
        contentBase: path.resolve(__dirname, 'dist'),
        open: true,
        hot: true,
        port: 9000,
        after:function(app,server){
            app.listen(3000, function(){
                console.log("webpack dev server is listening on port 9000");
            })
        }
    },
    module: {
        rules:[
            {
                test: /\.(sa|sc|c)ss$/,
                use:[
                    {
                        loader:MiniCssExtractPlugin.loader,
                        options:{
                            hmr: true,
                            reloadAll: true
                        }
                    },
                    'css-loader',
                ]
            },
            {
                test: /\.(png|jpg|svg|gif)/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            plugins: ["babel-plugin-styled-components"]
                        }
                    }
                ],
            }
        ]
    },
    resolve: {
        modules: ['node_modules'],
        extensions: ["*",".js",".jsx"]
    },
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        }),
    ]
}
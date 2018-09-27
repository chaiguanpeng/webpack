// webpack 是用node方式来写 他采用的方式是common.js规范

let path = require('path');
let webpack = require('webpack');
let cleanWebpackPlugin = require('clean-webpack-plugin');
let htmlWebpackPlugin = require('html-webpack-plugin');
let MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
    mode:'development',
    entry:{
        'index' :'./src/index.js'
    },
    output: { //出口
        filename: "[name].[hash:8].js",  //生成8位hash  防止缓存
        //出口路径是一个绝对路径
        path: path.resolve(__dirname,'dist')
    },
    devServer: {    //开发服务
        contentBase:"./dist", //启用静态服务目录
        port:3000,
        hot:true
    },
    module: { //模块的配置
        rules:[
            {test:/\.css$/,use:[
                {
                loader: MiniCssExtractPlugin.loader
            },
            'css-loader']
            },
            {test:/\.less$/,use:[{
                    loader: MiniCssExtractPlugin.loader
                },
                    'css-loader',
                    'less-loader']
            }
        ]
    },
    plugins: [
        new cleanWebpackPlugin(['./dist']),
        new webpack.HotModuleReplacementPlugin(),
        new htmlWebpackPlugin({
            template:'./src/index.html',
            filename:'index.html'
        }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "css/my.css",
        })

    ], //插件
    resolve: { //如何解析 比如配置别名、模块的查找路径
    }
};
// webpack 是用node方式来写 他采用的方式是common.js规范

let path = require('path');
let webpack = require('webpack');
let htmlWebpackPlugin = require('html-webpack-plugin');
let cleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
    mode:'production', //开发还是生产模式
    //入口 默认单入口，如果是多入口数组形式的话，会打包到一起
    // entry:['./src/index.js','./src/b.js'],
    entry:{
        'index' :'./src/index.js',
        'b':'./src/b.js'
    },
    output: { //出口
        // filename: "bundle.js",
        // filename: "[name].[hash:8].js",  生成8位hash  防止缓存
        filename: "[name].js",
        //出口路径是一个绝对路径
        path: path.resolve(__dirname,'dist')
    },
    devServer: {    //开发服务
        contentBase:"./dist", //启用静态服务目录
        port:3000,
        hot:true
    },
    module: { //模块的配置

    },
    plugins: [
        //清空文件夹插件
        new cleanWebpackPlugin(['./dist']),
        new webpack.HotModuleReplacementPlugin(),
        new htmlWebpackPlugin({
            template:'./src/index.html',
            filename:'index.html',
            chunks:['index']
            // hash:true,  //防止缓存 加20个hash值
            // minify:{
            //     collapseWhitespace:true,    //压缩index.html为一行
            //     removeAttributeQuotes:true  //去除html中""
            // }
        }),
        new htmlWebpackPlugin({
            template:'./src/index.html',
            filename:'login.html',
            chunks:['b','index']
        })

    ], //插件
    resolve: { //如何解析 比如配置别名、模块的查找路径
    }
};
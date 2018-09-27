// webpack 是用node方式来写 他采用的方式是common.js规范
let htmlWebpackPlugin = require('html-webpack-plugin');
let MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
    mode: 'development',
    entry: {
        "index":"./src/index.js",
        'login':'./src/login.js'
    },
    output: { //出口
        filename: "js/[name].js",
        //出口路径是一个绝对路径
        path: require("path").resolve(__dirname, 'dist')
    },
    module: { //模块的配置
        rules: [
            {
                test: /\.css$/, use: [{
                    loader: MiniCssExtractPlugin.loader
                }, 'css-loader']
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
        new htmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            chunks:['index']
        }),
        new htmlWebpackPlugin({
            template: './src/index.html',
            filename: 'login.html',
            chunks:['login']
        }),
        new MiniCssExtractPlugin({
            filename: "css/index.css"
        })
    ]
};
let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
module.exports = {
  //压缩css js
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true, //多线程打包
        sourceMap: true // 产生原文件
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  mode: "production",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
        { test: /\.css$/, use: [MiniCssExtractPlugin.loader, "css-loader",'postcss-loader'] },
        { test: /\.png|.jpg/, use: {
                loader:'url-loader',
                options:{
                  limit:8*1024  //在大于8M，内部调用file-loader，把图片打包出来
                }
            }},
        {
          test:/\.html/,
          use:'html-withimg-loader'
        },
        {
          test:/\.ts$/,
          use:'ts-loader',
          include:path.resolve(__dirname,'src/ts'), //希望找哪个文件夹
          exclude:/node_modules/
        }    
    ]

  },
  devServer:{
    port:3000
  },
  plugins: [
      new HtmlWebpackPlugin({
        template: "./src/index.html",
        filename:"index.html"
      }),
      new MiniCssExtractPlugin({
        filename:'index.css'
      })
  ]
};








// {
//     loader:'style-loader',
//         options:{
//     insertAt:'top'
// }
// }
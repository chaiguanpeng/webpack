let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
let webpack = require("webpack");
module.exports = {
  //压缩css js,生产模式会默认调用
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
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"]
      },
      {
        test: /\.png|.jpg/,
        use: {
          loader: "url-loader",
          options: {
            limit: 8 * 1024 //在大于8M，内部调用file-loader，把图片打包出来
          }
        }
      },
      {
        test: /\.html/,
        use: "html-withimg-loader"
      },
      {
        test: /\.ts$/,
        use: "ts-loader",
        include: path.resolve(__dirname, "src/ts"), //希望找哪个文件夹
        exclude: /node_modules/
      },
      {
        test: /\.js/,
        use: "babel-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".js",".vue"], //提供些扩展名,引入文件时可以省略后缀
    // alias: {
    //   //别名
    //   "bootstrap": "bootstrap/dist/css/bootstrap.css",
    //   "@": path.resolve("src")
    // },
    mainFields:['style','main'], //字段 可以不引人main中目录，用style目录替换
    mainFiles:['index.js',],
    modules: [path.resolve(__dirname, 'node_modules'), path.resolve(__dirname, 'modules')] //先引入node_modules再引入module
  },
  devServer: {
    port: 3333
    // before(app){
    //   app.get('/api/user',(req,res)=>(res.json({username:'hello',age:9})))
    // }
    // proxy:{
    //   "/api":{
    //     target:'http://localhost:3000',
    //     pathRewrite:{
    //       "^/api":''
    //     }
    //   }
    // }
  },
  plugins: [
    // new webpack.ProvidePlugin({  //提供全局的插件，不需要
    //     "$":'jquery'  //import $ from jquery
    // }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "index.css"
    })
  ]
};








// {
//     loader:'style-loader',
//         options:{
//     insertAt:'top'
// }
// }
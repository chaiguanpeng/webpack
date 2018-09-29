let path = require("path");
let HtmlWebpackPlugin = require('html-webpack-plugin');
let DllReferencePlugin = require('webpack/lib/DllReferencePlugin');
let HappyPack = require('happypack');
module.exports = {
    mode:'development',
    entry:'./src/index.js',
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'dist')
    },
    module:{
      rules:[
          {
              test:/\.js$/,
              use:"happypack/loader?id=js",
              exclude:/node_modules/
          },
          {
              test:/\.css/,
              use:"happypack/loader?id=css"
          }
      ]
    },
    devServer:{
      contentBase:"./dist"
    },
    plugins:[
        new HappyPack({
            id:'js',    //打包js
            use:['babel-loader']
        }),
        new HappyPack({
            id: 'css',    //打包js
            use: ["style-loader", 'css-loader']
        }),
        new HtmlWebpackPlugin({
            template:"./src/index.html"
        }),
        new DllReferencePlugin({
            manifest:path.resolve(__dirname,"dist",'react.manifest.json')
        })
    ]
}
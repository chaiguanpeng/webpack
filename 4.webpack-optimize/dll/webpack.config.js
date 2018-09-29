let path = require("path");
let HtmlWebpackPlugin = require('html-webpack-plugin');
let DllReferencePlugin = require('webpack/lib/DllReferencePlugin');
module.exports = {
    mode:'development',
    entry:'./src/index.js',
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'dist')
    },
    module:{
      rules:[
          {test:/\.js$/,use:['babel-loader'],exclude:/node_modules/}
      ]
    },
    devServer:{
      contentBase:"./dist"
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:"./src/index.html"
        }),
        new DllReferencePlugin({
            manifest:path.resolve(__dirname,"dist",'react.manifest.json')
        })
    ]
}
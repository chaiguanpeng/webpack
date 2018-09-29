let path = require("path");
let HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode:'production',  //内部会调用uglifyjs来实现 tree shaking
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
        })
    ]
}
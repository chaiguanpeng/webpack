let path = require("path");
let HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode:'development',
    entry:{
        pageA:'./src/pageA.js',
        pageB:"./src/pageB.js",
        pageC:"./src/pageC.js",
    },
    output:{
        filename:'[name].js',
        path:path.resolve(__dirname,'dist')
    },
    module:{
      rules:[
          {test:/\.js$/,use:['babel-loader'],exclude:/node_modules/}
      ]
    },
    optimization:{
        splitChunks:{   
          cacheGroups:{
              common:{
                  chunks:"initial",
                  minChunks:2,  //至少2个公用的
                  minSize:0
              },
              vendor:{
                  test:/node_modules/,  //只限制第三方的
                  chunks: "initial",
                  minChunks: 2,  //至少2个公用的
                  minSize: 0,
                  priority:10
              }
          }
        }
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
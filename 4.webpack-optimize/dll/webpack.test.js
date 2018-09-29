let path = require("path");
let DllPlugin = require('webpack/lib/DllPlugin');
module.exports = {
    mode:'development',
    entry:{
        react:["react","react-dom"]
    },
    output:{
        filename:'dll.js',
        path:path.resolve(__dirname,'dist'),
        library:'[name]_dll'    //打包后的dll.js是闭包，给它赋予变量
    },
    module:{
        rules:[
            {test:/\.js$/,use:['babel-loader'],exclude:/node_modules/}
        ]
    },
    plugins:[
        new DllPlugin({
            //名字要和library一样
            name:'[name]_dll',
            path:path.resolve(__dirname,'dist','[name].manifest.json')
        })
    ]
}
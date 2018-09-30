const {resolve} = require('path');
module.exports = {
    mode:'development',
    entry:"./src/index.js",
    output:{
        filename:'bundle.js',
        path:resolve('dist')
    }
}
let {resolve} = require('path');
let webpackPath = resolve(__dirname,'node_modules',"webpack-cli","bin","cli.js");
require(webpackPath);
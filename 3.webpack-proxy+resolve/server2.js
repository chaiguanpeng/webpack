let express = require('express');
let app = express();

let webpackDevMiddleware = require("webpack-dev-middleware");
let config = require('./webpack.config'); //引入webpack的配置文件
let webpack = require("webpack");   //引入webpack
let compiler = webpack(config);
app.use(webpackDevMiddleware(compiler));





app.get('/api/user', function (req, res) {
    res.send({ name: 'dsazfpx' })
})
app.get('/user', function (req, res) {
    res.send({ name: 'cgp' })
})
app.listen(3000)
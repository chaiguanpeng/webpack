###反向代理设置
#### 1、webpack自带express，可以自己写一个server.js
```
devServer: {
    port: 3333,
    proxy:{
      "/api":{
        target:'http://localhost:3000',
        pathRewrite:{
          "^/api":''
        }
      }
    }
  }
```
#### 2、devSerevr提供钩子函数，可以自己模拟服务

```
 before(app){
     app.get('/api/user',(req,res)=>(res.json({username:'hello',age:9})))
     }

```

#### 3、server2.js 使用中间件把devServer在我自己写的3000端口运行了


### resolve解析一些参数配置

```

 resolve: {
    extensions: [".js",".vue"], //提供些扩展名,引入文件时可以省略后缀
    // alias: {
    //   //别名
    //   "bootstrap": "bootstrap/dist/css/bootstrap.css",
    //   "@": path.resolve("src")
    // },
    mainFields:['style','main'], //字段 可以不引人main中目录，用style目录替换
    mainFiles:['index.js',a.js],
    modules: [path.resolve(__dirname, 'node_modules'), path.resolve(__dirname, 'modules')] //先引入node_modules再引入module
  },
```
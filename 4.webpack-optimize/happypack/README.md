### happyPack 对进程打包，修改2地方
- HappyPack使用多线程打包， 启用子进程
```angularjs

//1、是匹配js的规则
 {
              test:/\.js$/,
              use:"happypack/loader?id=js",
              exclude:/node_modules/
          },
//2、用自带的happypak插件
   new HappyPack({
            id:'js',    //打包js
            use:['babel-loader']
        }),
``` 
- tree shaking 打包后代码优化
- webpack配置 作用域提升
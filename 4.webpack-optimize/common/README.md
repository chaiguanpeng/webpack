## webpack优化
### 如何减少多页面共用部分重复打包

```
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
```
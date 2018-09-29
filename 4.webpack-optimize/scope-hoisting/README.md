## webpack优化
### 4、webpack配置 作用域提升
- index.js引入c.js，会有2个eval，想执行1个

```
//2步骤
let ModuleConcatenationPlugin = require("webpack/lib/optimize/ModuleConcatenationPlugin");

  plugins:[
        new ModuleConcatenationPlugin(),
        new HtmlWebpackPlugin({
            template:"./src/index.html"
        })
    ]
```
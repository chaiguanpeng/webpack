## webpack优化
### 1、DLLPlugin 动态链接库
- 先用webpack.test.js对react、ract-dom打包。
- 然后在index.html手动引入dll.js。devServer可以指定contentBase:''/dist'，防止出错
### 2、 happyPack 多线程打包

### 3、tree shaking 打包后代码优化
### 4、webpack配置 作用域提升
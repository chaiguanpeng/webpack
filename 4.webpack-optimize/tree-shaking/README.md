## webpack优化

### 3、tree shaking 打包后代码优化
- 只需把mode改为 production，内部会调用uglyfijs 实现 tree shaking
- 可以在package.json中配置 哪些代码没有被用到

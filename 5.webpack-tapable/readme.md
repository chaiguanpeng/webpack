## 学会调式webpack
- 运行debuggg.js就相当于 npm run build,核心文件在这里面
## 2、tapable 水龙头
### 2.1 同步钩子函数
- SyncHook 串行 同步执行
- SyncBailHook 串行同步执行，有一个返回值不为null则跳过剩下的逻辑
- SyncWaterfallHook 同步瀑布模型 上次的结果会传到下次的函数中
- SyncLoopHook 监听函数返回true表示继续循环，返回undefine表示结束循环
### 2.2异步钩子
- AsyncParallelHook 异步并行有2中写法。一种是回调(不推荐),一种是promise
- AsyncParallelBailHook 异步并行
- AsyncSeriesHook  异步串行
- AsyncSeriesWaterfallHook 异步瀑布流


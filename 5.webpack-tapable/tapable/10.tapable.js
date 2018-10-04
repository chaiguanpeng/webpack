const {Tapable,SyncHook} = require("tapable");
const t = new Tapable();
t.hooks = {
    myHook: new SyncHook()
};
let called = 0;
//plugin相当于 on tap注册事件
t.plugin("my-hook", () => called++);
console.log(called);
t.hooks.myHook.call();
t.plugin("my-hook", () => called += 10);
t.hooks.myHook.call();
console.log(called);
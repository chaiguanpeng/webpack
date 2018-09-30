// let {SyncHook} = require("tapable");
class SyncHook{
    constructor(argNames){
        console.log(argNames);
        this.argNames = argNames;
        this.tasks = [];
    }
    tap(name,task){
        this.tasks.push(task);
    }
    call(){
        let args = Array.prototype.slice.call(arguments,0,this.argNames.length);
        console.log(args);
        this.tasks.forEach(task=>task(...args));
    }
}
/*tap注册监听=on call触发事件=emit
 queue.tap的第一个参数没有实际的作用，只是用来给插件起个名字
 new SyncHook(["hello","aaa"])中的数组参数个数必须对应上 call中传的参数个数，不然age拿不到
 */
let queue = new SyncHook(["a","b"]);

queue.tap("11",function (name,age) {
    console.log(1);
    console.log(name,age);
});
queue.tap("22",function (name) {
    console.log(2);
    console.log(name);
});
queue.tap("32",function (name) {
    console.log(3);
    console.log(name);
});
queue.call("zfpx",9)
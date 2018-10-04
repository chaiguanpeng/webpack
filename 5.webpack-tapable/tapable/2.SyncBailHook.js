// let {SyncBailHook} = require("tapable");
class SyncBailHook{
    constructor(argNames){
        this.argNames = argNames;
        this.tasks = [];
    }
    tap(name,task){ //name并没有用到
        this.tasks.push(task);
    }
    call(){
        let args = Array.prototype.slice.call(arguments,0,this.argNames.length);
        for(let i=0;i<this.tasks.length;i++){
            let reg = this.tasks[i](...args);
            if(reg){
                break;
            }
        }
    }
}
/*tap注册监听=on call触发事件=emit
 queue.tap的第一个参数没有实际的作用，只是用来给插件起个名字
 new 1SyncHook(["hello","aaa"])中的数组参数个数必须对应上 call中传的参数个数，不然age拿不到
 */
let queue = new SyncBailHook(["a","b"]);

queue.tap("11",function (name,age) {
    console.log(1);
    console.log(name,age);
});
queue.tap("22",function (name,age) {
    console.log(2);
    console.log(name,age);
    return "2 wrong"
});
queue.tap("32",function (name,age) {
    console.log(3);
    console.log(name,age);
});
queue.call("zfpx",9,2,4);
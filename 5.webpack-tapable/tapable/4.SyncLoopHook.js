let {SyncLoopHook } = require("tapable");
class SyncHook{
    constructor(argNames){
        console.log("argNames",argNames);
        this.argNames = argNames;
        this.tasks = [];
    }
    tap(name,task){ //name并没有用到
        this.tasks.push(task);
    }
    call(){
        // let args = Array.from(arguments);
        // 跟源码一样需要截取下
        let args = Array.prototype.slice.call(arguments,0,this.argNames.length);
        this.tasks.forEach(task=>{
            let ret;
            do{
                ret = task(...args)
            }while (ret)
        });
    }
}
let queue = new SyncLoopHook (["a","b"]);
let counter=0;
queue.tap("11",function (name,age) {
    console.log(1,name,age);
    if(++counter >=3){

    }else {
        return true
    }
});
queue.call("zfpx",9)
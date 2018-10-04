// let {SyncWaterfallHook} = require("tapable");
class SyncWaterfallHook {
    constructor(argNames) {
        this.argNames = argNames;
        this.tasks = [];
    }
    tap(name, task) { //name并没有用到
        this.tasks.push(task);
    }
    call() {
        let args = Array.prototype.slice.call(arguments, 0, this.argNames.length);
        let ret;

        //第三种写法 便于理解
        let [first,...others] = this.tasks;
        return others.reduce((a,b)=>b(a),first(...args))
        /*第二种写法 redux中间件写法
            let reducer = this.tasks.reduce((a, b) => (...args) => {
                        // console.log("args", args);
                        // console.log("fn",b(a(...args)));
                        return b(a(...args))
                    }
                    );
                    return reducer(...args);
             第三种写法终极版
             return this.tasks.reduce((a, b) => (...args) =>b(a(...args)))(...args);

        */
        /*第一种写法
        *for(let i=0;i<this.tasks.length;i++){
            if(i==0){
               ret = this.tasks[i](...args);
            }else {
              ret =  this.tasks[i](ret);
            }
        }
        return ret
        */
    }
}
let queue = new SyncWaterfallHook(["a", "b"]);

queue.tap("11", function (a, b) {
    console.log(1);
    return a + b
});
queue.tap("22", function (data) {
    console.log(2);
    console.log(data);
    return data + 2
});
queue.tap("32", function (data) {
    console.log(3);
    console.log(data);
    return data + 2
});
let reg = queue.call(50, 50);
console.log("reg" + reg);
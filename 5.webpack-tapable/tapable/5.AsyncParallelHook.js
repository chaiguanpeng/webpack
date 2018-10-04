// let {AsyncParallelHook}=require('tapable');
class AsyncParallelHook{
    constructor(){
        this.tasks = [];
    }
    tapAsync(name,task){
        this.tasks.push(task);
    }
    callAsync(){
        let args = Array.from(arguments);
        let finalCallback = args.pop();
        let counter=0,total=this.tasks.length;
        function done() {
            if(++counter ==total){
                finalCallback();
            }
        }
        this.tasks.forEach(task=>task(...args,done));
    }
}
let hook = new AsyncParallelHook(['a']);
console.time("cost");
hook.tapAsync('1',function(name,callback){
    setTimeout(function () {
        console.log(1);
        callback()
    },1000)
});
hook.tapAsync('2',function(name,callback){
    setTimeout(function () {
        console.log(2);
        callback()
    },2000)
});
hook.tapAsync('3',function(name,callback){
    setTimeout(function () {
        console.log(3);
        callback()
    },3000)
});
hook.callAsync('zfpx',function () {
    console.timeEnd("cost");
});

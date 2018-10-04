// let {AsyncSeriesWaterfallHook}=require('tapable');
class AsyncSeriesWaterfallHook{
    constructor(){
        this.tasks = [];
    }
    tapPromise(name,task){
        this.tasks.push(task);
    }
    promise(){
        let args = Array.from(arguments);
        let [first,...others] = this.tasks;
        return others.reduce((a,b)=>a.then(b),first(...args))
    }
}
let hook = new AsyncSeriesWaterfallHook(['a']);
console.time("cost");
hook.tapPromise('1',function(name){
    return new Promise((resolve,reject)=>{
        setTimeout(function () {
            console.log(1,name);
            resolve("a")
        },1000)
    })
});
hook.tapPromise('2',function(data){
    return new Promise((resolve,reject)=>{
        setTimeout(function () {
            console.log(2,data);
            resolve("b")
        },2000)
    })
});
hook.tapPromise('3',function(data){
    return new Promise((resolve,reject)=>{
        setTimeout(function () {
            console.log(3,data);
            resolve("c")
        },3000)
    })
});
hook.promise('zfpx').then((data)=>{
    console.log(data);
    console.timeEnd('cost')
},err=>console.log(err));

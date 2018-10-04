// let {AsyncSeriesHook}=require('tapable');
class AsyncSeriesHook{
    constructor(){
        this.tasks = [];
    }
    tapPromise(name,task){
        this.tasks.push(task);
    }
    promise(){
        let args = Array.from(arguments);
        let [first,...others] = this.tasks;
        return others.reduce((a,b)=>a.then(()=>b(...args)),first(...args))
    }
}
let hook = new AsyncSeriesHook(['a']);
console.time("cost");
hook.tapPromise('1',function(name){
    return new Promise((resolve,reject)=>{
        setTimeout(function () {
            console.log(1,name);
            resolve(1)
        },1000)
    })
});
hook.tapPromise('2',function(name){
    return new Promise((resolve,reject)=>{
        setTimeout(function () {
            console.log(2,name);
            resolve(2)
        },2000)
    })
});
hook.tapPromise('3',function(name){
    return new Promise((resolve,reject)=>{
        setTimeout(function () {
            console.log(3,name);
            resolve(3)
        },3000)
    })
});
hook.promise('zfpx').then((data)=>{
    console.timeEnd('cost')
},err=>console.log(err));

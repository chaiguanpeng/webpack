// let {AsyncParallelHook}=require('tapable');
class AsyncParallelHook{
    constructor(){
        this.tasks = [];
    }
    tapPromise(name,task){
        this.tasks.push(task);
    }
    promise(){
        let args = Array.from(arguments);
        return new Promise((resolve,reject)=>{
            let promises = this.tasks.map(task=>task(...args));
            console.log(promises);
            let counter=0,total=this.tasks.length;
            let done = ()=>{
                if(++counter ==total){
                    resolve();
                }
            }
            promises.forEach(promise=>promise.then(done,done))
        })
    }
}
let hook = new AsyncParallelHook(['a']);
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
            reject(2)
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
    console.log(data);
    console.timeEnd('cost')
},err=>console.log(err));

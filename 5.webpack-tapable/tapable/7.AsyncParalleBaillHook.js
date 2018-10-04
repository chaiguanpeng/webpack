let {AsyncParallelBailHook}=require('tapable');
// class AsyncParallelBailHook{
//     constructor(){
//         this.tasks = [];
//     }
//     tapPromise(name,task){
//         this.tasks.push(task);
//     }
//     promise(){
//         let args = Array.from(arguments);
//         return Promise.all(this.tasks.map(task=>task(...args)))
//     }
// }
let hook = new AsyncParallelBailHook(['a']);
console.time("cost");
hook.tapPromise('1',function(name){
    return new Promise((resolve,reject)=>{
        setTimeout(function () {
            console.log(1);
            resolve()
        },1000)
    })
});
hook.tapPromise('2',function(name){
    return new Promise((resolve,reject)=>{
        setTimeout(function () {
            console.log(2);
            resolve()
        },2000)
    })
});
hook.tapPromise('3',function(name){
    return new Promise((resolve,reject)=>{
        setTimeout(function () {
            console.log(3);
            resolve()
        },3000)
    })
});
hook.promise('zfpx').then((data)=>console.timeEnd("cost"),err=>console.log("err",err));

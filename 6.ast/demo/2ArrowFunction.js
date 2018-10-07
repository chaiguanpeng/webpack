const {transform} = require('babel-core');
const t = require("babel-types");
let code = `const sum = (a,b)=>a+b`;
//箭头函数转变普通函数,ArrayFunction是一个插件
let ArrowFunction = {
    //visitor是定死的
    visitor:{   //访问者模式
        //函数名字来自于你想捕获的节点对象的type属性
        ArrowFunctionExpression(path){
            let node = path.node;
            // console.log(node);
            let id = path.parent.id; //parent取得父节点
            let params = node.params;
            //node.body正好是t.returnStatement(arguments) 中的参数arguments
            let returnStatement = t.returnStatement(node.body)
            let body = t.blockStatement([returnStatement]);
            let func = t.functionExpression(id,params,body,false,false);
            // 用func节点替换掉当前的node节点
            path.parentPath.parent.kind = 'var';
            path.replaceWith(func);
        }
    }
};
let ret = transform(code,{ //就是webpack.config.js中的options
    plugins:[ArrowFunction]
});
console.log(ret.code);
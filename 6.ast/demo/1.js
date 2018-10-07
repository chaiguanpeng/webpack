//简单修改函数名 esprima
let esprima = require('esprima');
let estraverse = require('estraverse');
let escodegen = require("escodegen");
let code = `function ast(){}`;
let ast = esprima.parse(code);
//遍历语法树 遍历的过程是一个先序深度优先的遍历
estraverse.traverse(ast,{
    enter(node){
        console.log("enter",node.type);
        if(node.type=="FunctionDeclaration"){
            node.id.name = "ast_est";
        }
    },
    leave(node){
        console.log("leave",node.type);
    }
});
let result = escodegen.generate(ast);
console.log(result);
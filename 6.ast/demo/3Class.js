const { transform } = require('@babel/core');
const t = require("@babel/types");
let code = `class Person{
  constructor(name){
      this.name = name;
  }
  getName(){
      return this.name
  }
}`;
//箭头函数转变普通函数,ArrayFunction是一个插件
let ClassFunction = {
    //visitor是定死的
    visitor: {   //访问者模式
        ClassDeclaration(path) {
            let node = path.node;
            let id = node.id;
            let methods = node.body.body;
            methods = methods.map(method => {
                if (method.kind == "constructor") {
                    return t.functionDeclaration(id, method.params, method.body, method.generator, method.async);
                } else {
                    debugger;
                    return t.expressionStatement(
                        t.assignmentExpression("=",
                            t.memberExpression(t.memberExpression(id, t.identifier("prototype")), method.key),
                            t.functionExpression(null, method.params, method.body, method.generator, method.async)
                        )
                    )
                }
            })
            path.replaceWithMultiple(methods)
        }


    }
};
let ret = transform(code, { //就是webpack.config.js中的options
    plugins: [ClassFunction]
});
console.log(ret.code);
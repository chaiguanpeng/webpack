const { transform } = require('@babel/core');
const t = require("@babel/types");
let BabelImport = {
    //visitor是定死的
    visitor:{   //访问者模式
        ImportDeclaration:{
            enter(path,state={opts:{}}){
                let node = path.node;
                let specifiers = node.specifiers;
                if(state.opts.library == node.source.value && !t.isImportDefaultSpecifier(specifiers[0])){
                    let imports = specifiers.map(specifier=>(
                        t.importDeclaration([t.importDefaultSpecifier(specifier.local)],t.stringLiteral(`${node.source.value}/${specifier.local.name}`))
                    ))
                    path.replaceWithMultiple(imports)
                }
            }
        }
    }
};
module.exports = function (babel) {
    return BabelImport
}
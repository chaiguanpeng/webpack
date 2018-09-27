
### module中 use里可以放对象，指定一些参数

```
 {
     loader:'style-loader',
         options:{
            insertAt:'top'
    }
 }
```
### 引入图片的三种方式
#### 1、js
- 需要url-loader、file-loader
> url-loader默认会转变base64，因此需要设置下
#### 2、background
- 使用url-loader即可
#### 3、 在html中
- 用html-withimg-loader
### ts需要2个loader
- npm i typescript -g 
- tsc --init
> 需要安装typescript、ts-loader
### css3高级的兼容性
>  yarn add postcss-loader autoprefixer -D  2个loader
### babel转义插件
- 新版本@babel/core
> babel-core babel-loader babel-preset-env babel-preset-stage-0 
babel-preset-react babel-plugin-transform-decorators-legacy 
babel-plugin-transform-runtime
- babel-plugin-transform-runtime 转化es6 Api，比如new Set() 
- babel-polyfill 补丁可以转变 'hello'.include方法、async await方法 直接在文件import 'babel-polyfill';
### 第三方插件以jquery为例，如何挂在全局,防止多次打包
#### 1、webpack自带的ProvidePlugin插件,不能暴露到window上

```
//index.js中用
import $ from "jquery";

console.log($);
console.log(window.$);  

 new webpack.ProvidePlugin({  //提供全局的插件，不需要再次引入了
           "$":'jquery'  //import $ from jquery
       }),

```
#### 2、直接用expose-loader，不需要再webpack.config.js中配置

```
/*第二种引入方案，可以在window拿到，a.js中也可以拿到$
    import "./a";
    let $ = require("expose-loader?$!jquery");
    console.log($);
    console.log(window.$);

*/
```

#### 3、直接用jq的CDN
> 用了cdn就可以用$了不用配置了，但是我们希望require('jquery')后不让其打包就需要后面的操作

```
let $ = require("jquery");      //这句话基本废物，没用。用了还需要externals
console.log($);
  externals: {
    'jquery': "$" //window.$ = jquery
  },
```

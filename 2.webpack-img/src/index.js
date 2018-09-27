import "./my.css"
//1、js引入图片
import png from "./logo.png";
let img = new Image();
img.src = png;
document.body.appendChild(img);

import sum from "./ts/test.ts"
console.log(sum(1,2,3));


//第三种方案，我们使用cdn，当然window肯定有$,但我们希望  require('jquery')，同时不让webpack打包
let $ = require("jquery");      //这句话基本废物，没用。用了还需要externals
console.log($);





//第一种方案，不能暴露在window上
// import $ from "jquery";  webpack自带的插件，然后就可以不用import

// console.log($);
// console.log(window.$);  //window上并不拥有这个jquery

/*第二种引入方案，可以在window拿到，a.js中也可以拿到$
    import "./a";
    let $ = require("expose-loader?$!jquery");
    console.log($);
    console.log(window.$);

*/

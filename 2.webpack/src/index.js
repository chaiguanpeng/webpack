import "./my.css"
//1、js引入图片
import png from "./logo.png";
let img = new Image();
img.src = png;
document.body.appendChild(img);

import sum from "./ts/test.ts"
console.log(sum(1,2,3));


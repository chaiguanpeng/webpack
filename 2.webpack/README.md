
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
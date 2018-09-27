//主模块 webpack默认会识别js模块
import str from "./a";
console.log(str);
import './index.css';
import './index.less'
document.getElementById('app').innerHTML = 'hello'



//如果有热更新 就启动热更新
if(module.hot){
    module.hot.accept();
}
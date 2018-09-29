import React, {Component} from 'react';
import ReactDOM from 'react-dom';
//把react和react-dom先打包好，在开发时引用打包好的文件
 class App extends Component {
    render() {
        return (
            <div>hello world</div>
        )
    }
}
ReactDOM.render(<App></App>,window.root)
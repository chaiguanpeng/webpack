import React, {Component,Fragment} from 'react';
import ReactDOM from 'react-dom';
// import Home from "./Home";
// import About from "./About";

//实现懒加载
class AsyncComponent extends React.Component{
    constructor(){
        super();
        this.state = {Comp:null}
    }
    componentWillMount(){
        this.props.load().then(res=>{
            console.log(res);
            this.setState({Comp:res.default});
        })
    }
    render(){
        let {Comp} = this.state;
        return Comp? <Comp/>: <div>loading</div>
    }
}

let Home = (props)=><AsyncComponent {...props} load={()=>import('./Home')}></AsyncComponent>
let About = (props)=><AsyncComponent {...props} load={()=>import('./About')}></AsyncComponent>

import {HashRouter as Router,Route,Link,Switch} from "react-router-dom";
 class App extends Component {
    render() {
        return (
                <Router>
                    <Fragment>
                        <Switch>
                            <Route path="/home" component={Home}></Route>
                            <Route path="/about" component={About}></Route>

                        </Switch>
                        <div>
                            <Link to="/home">home</Link>
                            <Link to="/about">about</Link>
                        </div>
                    </Fragment>
                </Router>
        )
    }
}
ReactDOM.render(<App></App>,window.root)
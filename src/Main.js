import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import One from "./One";
import Two from "./Two";
import Three from "./Three";
import "./index.css";





class Main extends Component {
    constructor(props){
        super(props);
        this.state={
            wordcount:null,
            text:null,
            intervals:null,
            timer:0
        }
        this.handleCallback=this.handleCallback.bind(this);
        this.handleCallback2=this.handleCallback2.bind(this);
        this.callback=this.callback.bind(this);
        this.callback2=this.callback2.bind(this);
    }

    handleCallback=(childData)=>{
        this.setState({wordcount:childData})
        
    }

    handleCallback2=(childData)=>{
        this.setState({text:childData})
    }



    
    componentDidMount(){
        setTimeout(this.callback,0)
    }
    callback2(){
        setTimeout(this.callback,0)
    }
    callback=()=>{
        this.props.parentCall(this.state.text)
        this.props.parentCall2(this.state.wordcount)
        this.props.parentCall3(this.state.close)
        this.props.parentCall4(this.state.timer)

    }



    render(){
        
        return(
            <HashRouter>
                <div>
                    <h1>Typing Test to Determine WPM</h1>
                    <ul className="header">
                        <li><NavLink exact to="/" onClick={this.callback2}>Beginner</NavLink></li>
                        <li><NavLink to="/two" onClick={this.callback2}>Intermediate</NavLink></li>
                        <li><NavLink to="/three" onClick={this.callback2}>Hard Mode</NavLink></li>
                    </ul>
                    <div className="content">
                        <Route exact path="/"><One parentCallback={this.handleCallback} parentCallback2={this.handleCallback2}/></Route>
                        <Route path="/two"><Two parentCallback={this.handleCallback} parentCallback2={this.handleCallback2}/></Route>
                        <Route path="/three"><Three parentCallback={this.handleCallback} parentCallback2={this.handleCallback2}/></Route>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default Main;
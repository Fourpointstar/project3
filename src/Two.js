import React, { Component } from "react";
import Header from "./Header"

class Two extends Component{
    constructor(props){
        super(props);

        this.state={
            wordcount:60,
            text:this.text
        }
        
    }

    onTrigger=()=>{
        this.props.parentCallback(this.state.wordcount)
        this.props.parentCallback2(this.state.text)
    }

    componentDidMount(){
        this.onTrigger()
    }
    text="As you're typing this out, remember that the average typing speed is 50-80 words per minute! There's always room for improvement and the best thing to focus on is finger positioning. The more familiar you become with all the characters on the keyboard, the easier it will be. With proper hand and finger positioning, it will make improving a breeze."
    header="Intermediate"
    render(){
   
        return(
            <div>
                <Header content={this.header} />
                <p className="testCompare">{this.text}</p>
                
            </div>
        );
    }
}

export default Two;
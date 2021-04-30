import React, { Component } from "react";

class Three extends Component{
    constructor(props){
        super(props);

        this.state={
            wordcount:52,
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
    text="Start with HTML and it'll put you in your element. Add in some CSS to give it visual development. JavaScript is the language of functionality, giving your application user-friendly usability. It's not your run of the mill coding that's focused on automation. We design what you consume, your consumption's our creation."

    render(){
        return(
            <div>
                <h2>Hard Mode</h2>
                <p className="testCompare">{this.text}</p>
                
            </div>
        );
    }
}

export default Three;
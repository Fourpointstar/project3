import React, { Component } from "react";
import Header from "./Header";

class One extends Component{
    constructor(props){
        super(props);
        

        this.state={
            wordcount:62,
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


    header="Test your typing skills with a basic paragraph!"
    text="If you type this fast enough, you may be able to get a high WPM! My average typing speed is about 77 words per minute and, to me, that's an accomplishment. This is just the first of three tests to see how fast you can type. I wish you all the luck in your endeavor to increase your typing speed through practice."

    render(){
        return(
            <div>
                <Header content={this.header} />
                <p id="textCompare">{this.text}</p>
            </div>
        );
    }
}

export default One;
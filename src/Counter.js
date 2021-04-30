import React, { Component } from "react";
import Main from "./Main";



class Counter extends Component{
    constructor(props){
        super(props);
        this.state={
            textarea: "",
            timer:0,
            intervals:0,
            text:null,
            wordcount:null,
            displaytext:"Input string is not correct yet",
            fired:false,
            wordpermin:null,
            close:false
        }

        this.startCounter=this.startCounter.bind(this);
        this.timerTick=this.timerTick.bind(this);
        this.updateInput=this.updateInput.bind(this);
        this.reset=this.reset.bind(this);
    }
    startCounter(e){
        if (this.state.textarea===this.state.text){
            this.calculateWPM();
            this.setState({
                displaytext:"The string is correct!",
                fired:false,
                close:true
            })
            clearInterval(this.intervals);
            
        } else if (this.state.textarea!==this.state.text){
            this.setState({
                displaytext:"Input string is not correct yet"
            })
        }


        this.updateInput(e);

        if (this.state.fired===false){
            console.log("timer")
                this.intervals=setInterval(this.timerTick, 100)
            this.setState({fired:true});
        } 
    }
    updateInput(){
            this.setState({
                textarea:this._input.value
            });
    }

    componentDidUpdate(){
        if (this.state.timer===0){
            this.props.decreaseCount();
        }
    }

    wpm=null;
    calculateWPM(){
        this.wpm=null;
        this.wpm=this.state.timer/60;
        this.wpm=this.state.wordcount/this.wpm;
        this.wpm=Math.round(this.wpm*100)/100;
        this.setState({
            wordpermin:this.wpm
        });
    }



    timerTick(){
        this.setState({
            timer:this.state.timer+.1,
        });
        this.props.increaseCount();
    }

    handleCall=(childData)=>{
        this.setState({
            text:childData.substring(0,childData.length-1),
            textarea: "",
            timer:0,
            intervals:0,
            displaytext:"Input string is not correct yet",
            fired:false,
            wordpermin:null
        })
    }

    handleCall2=(childData)=>{
        this.setState({wordcount:childData})
    }
    handleCall3=(childData)=>{
        this.setState({close:childData})
    }
    handleCall4=(childData)=>{
        this.setState({timer:childData})
    }

    reset(e){
        e.preventDefault();
        this.props.decreaseCount();
        clearInterval(this.intervals)
        this.setState({
            textarea: "",
            timer:0,
            intervals:0,
            displaytext:"Input string is not correct yet",
            fired:false,
            wordpermin:null,
            close:false
        });
    }

    render(){
        var self=this;
        return(
            <div className="countUp">
                <Main parentCall={this.handleCall} parentCall2={this.handleCall2} parentCall3={this.handleCall3} parentCall4={this.handleCall4}/>
                <textarea readOnly={this.state.close} rows="8"  onChange={this.startCounter} value={this.state.textarea}
                ref={
                    function(el){
                        self._input = el;
                    }
                }></textarea>
                <div className="timer">
                <p>Timer: <b>{this.props.countValue}</b></p>
                <p><b>{this.state.displaytext}</b></p>
                <p>Your WPM: <b>{this.state.wordpermin}</b></p>
                <button type="submit" onClick={this.reset}>Reset</button>
                </div>
            </div>
        );
    }
}

export default Counter;
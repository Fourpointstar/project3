(this.webpackJsonpfinalproject=this.webpackJsonpfinalproject||[]).push([[0],{22:function(t,e,a){},39:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a(16),i=a.n(r),c=a(24),s=a(17);var l=function(t,e){if(void 0===t)return{count:0};var a=t.count;switch(e.type){case"increase":return{count:Math.round(10*a+1)/10};case"decrease":return{count:0};default:return t}},o=a(9),u=a(10),h=a(7),d=a(12),p=a(11),b=a(15),j=a(3),x=a(1),m=function(t){Object(d.a)(a,t);var e=Object(p.a)(a);function a(t){var n;return Object(o.a)(this,a),(n=e.call(this,t)).onTrigger=function(){n.props.parentCallback(n.state.wordcount),n.props.parentCallback2(n.state.text),console.log(n.text.length)},n.text="If you type this fast enough, you may be able to get a high WPM! My average typing speed is about 77 words per minute and, to me, that's an accomplishment. This is just the first of three tests to see how fast you can type. I wish you all the luck in your endeavor to increase your typing speed through practice.",n.state={wordcount:62,text:n.text},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){console.log(this.state.text.length),this.onTrigger()}},{key:"render",value:function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)("h2",{children:"Test your typing skills with a basic paragraph!"}),Object(x.jsx)("p",{id:"textCompare",children:this.text})]})}}]),a}(n.Component),O=function(t){Object(d.a)(a,t);var e=Object(p.a)(a);function a(t){var n;return Object(o.a)(this,a),(n=e.call(this,t)).onTrigger=function(){n.props.parentCallback(n.state.wordcount),n.props.parentCallback2(n.state.text)},n.text="As you're typing this out, remember that the average typing speed is 50-80 words per minute! There's always room for improvement and the best thing to focus on is finger positioning. The more familiar you become with all the characters on the keyboard, the easier it will be. With proper hand and finger positioning, it will make improving a breeze.",n.state={wordcount:60,text:n.text},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.onTrigger()}},{key:"render",value:function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)("h2",{children:"Intermediate"}),Object(x.jsx)("p",{className:"testCompare",children:this.text})]})}}]),a}(n.Component),f=function(t){Object(d.a)(a,t);var e=Object(p.a)(a);function a(t){var n;return Object(o.a)(this,a),(n=e.call(this,t)).onTrigger=function(){n.props.parentCallback(n.state.wordcount),n.props.parentCallback2(n.state.text)},n.text="Start with HTML and it'll put you in your element. Add in some CSS to give it visual development. JavaScript is the language of functionality, giving your application user-friendly usability. It's not your run of the mill coding that's focused on automation. We design what you consume, your consumption's our creation.",n.state={wordcount:52,text:n.text},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.onTrigger()}},{key:"render",value:function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)("h2",{children:"Hard Mode"}),Object(x.jsx)("p",{className:"testCompare",children:this.text})]})}}]),a}(n.Component),v=(a(22),function(t){Object(d.a)(a,t);var e=Object(p.a)(a);function a(t){var n;return Object(o.a)(this,a),(n=e.call(this,t)).handleCallback=function(t){n.setState({wordcount:t})},n.handleCallback2=function(t){n.setState({text:t})},n.callback=function(){n.props.parentCall(n.state.text),n.props.parentCall2(n.state.wordcount),n.props.parentCall3(n.state.close)},n.state={wordcount:null,text:null,intervals:null},n.handleCallback=n.handleCallback.bind(Object(h.a)(n)),n.handleCallback2=n.handleCallback2.bind(Object(h.a)(n)),n.callback=n.callback.bind(Object(h.a)(n)),n.callback2=n.callback2.bind(Object(h.a)(n)),n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){setTimeout(this.callback,0)}},{key:"callback2",value:function(){setTimeout(this.callback,0)}},{key:"render",value:function(){return Object(x.jsx)(b.a,{children:Object(x.jsxs)("div",{children:[Object(x.jsx)("h1",{children:"Typing Test to Determine WPM"}),Object(x.jsxs)("ul",{className:"header",children:[Object(x.jsx)("li",{children:Object(x.jsx)(b.b,{exact:!0,to:"/",onClick:this.callback2,children:"Beginner"})}),Object(x.jsx)("li",{children:Object(x.jsx)(b.b,{to:"/intermediate",onClick:this.callback2,children:"Intermediate"})}),Object(x.jsx)("li",{children:Object(x.jsx)(b.b,{to:"/hardmode",onClick:this.callback2,children:"Hard Mode"})})]}),Object(x.jsxs)("div",{className:"content",children:[Object(x.jsx)(j.a,{exact:!0,path:"/",children:Object(x.jsx)(m,{parentCallback:this.handleCallback,parentCallback2:this.handleCallback2})}),Object(x.jsx)(j.a,{path:"/intermediate",children:Object(x.jsx)(O,{parentCallback:this.handleCallback,parentCallback2:this.handleCallback2})}),Object(x.jsx)(j.a,{path:"/hardmode",children:Object(x.jsx)(f,{parentCallback:this.handleCallback,parentCallback2:this.handleCallback2})})]})]})})}}]),a}(n.Component)),k=function(t){Object(d.a)(a,t);var e=Object(p.a)(a);function a(t){var n;return Object(o.a)(this,a),(n=e.call(this,t)).handleCall=function(t){return n.setState({text:t,textarea:"",intervals:0,displaytext:"Input string is not correct yet",fired:!1,wordpermin:null}),clearInterval(n.intervals),n.props.decreaseCount()},n.handleCall2=function(t){n.setState({wordcount:t})},n.handleCall3=function(t){n.setState({close:t})},n.state={textarea:"",intervals:null,text:"",wordcount:null,displaytext:"Input string is not correct yet",fired:!1,wordpermin:null,close:!1,textarea2:"",textLength:""},n.startCounter=n.startCounter.bind(Object(h.a)(n)),n.timerTick=n.timerTick.bind(Object(h.a)(n)),n.reset=n.reset.bind(Object(h.a)(n)),n.cur=n.cur.bind(Object(h.a)(n)),n}return Object(u.a)(a,[{key:"startCounter",value:function(t){!1===this.state.fired&&(console.log("timer"),this.intervals=setInterval(this.timerTick,100),this.setState({fired:!0})),this.setState({textarea:this._input.value,textarea2:t.target.value}),console.log(this.state.textarea2),setTimeout(this.cur,1)}},{key:"cur",value:function(){this.state.textarea2===this.state.text?(console.log(this.state.textarea.length),this.calculateWPM(),this.setState({displaytext:"The string is correct!",fired:!1,close:!0}),clearInterval(this.intervals)):this.state.textarea2!==this.state.text&&(console.log(this.state.textarea.length),this.setState({displaytext:"Input string is not correct yet"}))}},{key:"componentDidUpdate",value:function(){0===this.props.countValue&&this.props.decreaseCount()}},{key:"calculateWPM",value:function(){this.wpm=null,this.wpm=this.props.countValue/60,this.wpm=this.state.wordcount/this.wpm,this.wpm=Math.round(100*this.wpm)/100,this.setState({wordpermin:this.wpm})}},{key:"timerTick",value:function(){this.props.increaseCount()}},{key:"reset",value:function(t){t.preventDefault(),this.props.decreaseCount(),clearInterval(this.intervals),this.setState({textarea:"",intervals:0,displaytext:"Input string is not correct yet",fired:!1,wordpermin:null,close:!1})}},{key:"render",value:function(){var t=this;return Object(x.jsxs)("div",{className:"countUp",children:[Object(x.jsx)(v,{parentCall:this.handleCall,parentCall2:this.handleCall2,parentCall3:this.handleCall3}),Object(x.jsx)("textarea",{readOnly:this.state.close,rows:"8",onChange:this.startCounter,value:this.state.textarea,ref:function(e){t._input=e}}),Object(x.jsxs)("div",{className:"timer",children:[Object(x.jsxs)("p",{children:["Timer: ",Object(x.jsx)("b",{children:this.props.countValue})]}),Object(x.jsx)("p",{children:Object(x.jsx)("b",{children:this.state.displaytext})}),Object(x.jsxs)("p",{children:["Your WPM: ",Object(x.jsx)("b",{children:this.state.wordpermin})]}),Object(x.jsx)("button",{type:"submit",onClick:this.reset,children:"Reset"})]})]})}}]),a}(n.Component);var y={type:"increase"},C={type:"decrease"};var g=Object(s.b)((function(t){return{countValue:t.count}}),(function(t){return{increaseCount:function(){return console.log("dispatch"),t(y)},decreaseCount:function(){return t(C)}}}))(k),w=Object(c.a)(l);i.a.render(Object(x.jsx)("div",{children:Object(x.jsx)(s.a,{store:w,children:Object(x.jsx)(g,{})})}),document.getElementById("container"))}},[[39,1,2]]]);
//# sourceMappingURL=main.6babcf1d.chunk.js.map
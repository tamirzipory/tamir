(this.webpackJsonptamir_app=this.webpackJsonptamir_app||[]).push([[0],{22:function(e,t,a){e.exports=a(34)},27:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(19),o=a.n(s),l=a(5),c=a(6),i=a(8),m=a(7),u=a(9),p=a(12),d=a(10),h=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"base-container",ref:this.props.containerRef},r.a.createElement("div",{className:"header"},"Login"),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"form"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"username"},"Username"),r.a.createElement("input",{type:"text",name:"username",placeholder:"username"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",name:"password",placeholder:"password"})))),r.a.createElement("div",{className:"footer"},r.a.createElement("button",{type:"button",className:"btn"},"Login")))}}]),t}(n.Component),E=[{id:0,question:" dog",options:["\u05e4\u05e8\u05d4","\u05d7\u05ea\u05d5\u05dc","\u05db\u05dc\u05d1"],answer:"\u05db\u05dc\u05d1"},{id:1,question:"football",options:["\u05d8\u05e0\u05d9\u05e1 \u05e9\u05d5\u05dc\u05d7\u05df","\u05db\u05d3\u05d5\u05e8\u05d2\u05dc","\u05d4\u05d5\u05e7\u05d9 \u05e7\u05e8\u05d7"],answer:"\u05db\u05d3\u05d5\u05e8\u05d2\u05dc"},{id:3,question:"because",options:["\u05d1\u05e2\u05e7\u05d1\u05d5\u05ea","\u05d1\u05d2\u05dc\u05dc","\u05de\u05d3\u05d5\u05e2"],answer:"\u05d1\u05d2\u05dc\u05dc"},{id:4,question:"someone",options:["\u05de\u05e7\u05d5\u05dd","\u05d7\u05d9\u05e9\u05d5\u05d1","\u05de\u05d9\u05e9\u05d4\u05d5"],answer:"\u05de\u05d9\u05e9\u05d4\u05d5"},{id:5,question:"home",options:["\u05d1\u05d9\u05ea","\u05de\u05d6\u05e8\u05e7\u05d4","\u05d7\u05dc\u05d5\u05df"],answer:"\u05d1\u05d9\u05ea"}],b=(a(27),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={currentQuestion:0,myAnswer:null,options:[],score:0,disabled:!0,right_before:""},a.loadQuizData=function(){a.setState((function(){return{questions:E[a.state.currentQuestion].question,answer:E[a.state.currentQuestion].answer,options:E[a.state.currentQuestion].options}}))},a.nextQuestionHandler=function(){a.setState({disabled:!1});var e=a.state,t=e.myAnswer,n=e.answer,r=e.score;t===n?a.setState({score:r+1,right_before:"yess! get point!"}):a.setState({right_before:"no, the answer is: "+n}),a.setState({currentQuestion:Math.floor(4*Math.random())+1}),console.log(a.state.currentQuestion)},a.checkAnswer=function(e){a.setState({myAnswer:e,disabled:!1})},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.loadQuizData()}},{key:"componentDidUpdate",value:function(e,t){var a=this;this.state.currentQuestion!==t.currentQuestion&&this.setState((function(){return{disabled:!0,questions:E[a.state.currentQuestion].question,options:E[a.state.currentQuestion].options,answer:E[a.state.currentQuestion].answer}}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.options,n=t.myAnswer,s=t.score,o=t.right_before;return r.a.createElement("div",{className:"Api"},r.a.createElement("h1",null,this.state.questions," "),o,r.a.createElement("br",null),"your score is: ",s,r.a.createElement("br",null),r.a.createElement("span",null),a.map((function(t){return r.a.createElement("p",{key:t.id,className:"ui floating message options\n         ".concat(n===t?"selected":null,"\n         "),onClick:function(){return e.checkAnswer(t)}},t)})),r.a.createElement("button",{className:"ui inverted button",disabled:this.state.disabled,onClick:this.nextQuestionHandler},"Next"))}}]),t}(r.a.Component)),f=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"base-container",ref:this.props.containerRef},r.a.createElement("div",{className:"header"},"Register"),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"form"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"username"},"Username"),r.a.createElement("input",{type:"text",name:"username",placeholder:"username"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"text",name:"email",placeholder:"email"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"text",name:"password",placeholder:"password"})))),r.a.createElement("div",{className:"footer"},r.a.createElement("button",{type:"button",className:"btn"},"Register")))}}]),t}(n.Component),g=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(p.a,null,r.a.createElement("div",null,r.a.createElement("h1",null,"Simple SPA"),r.a.createElement("ul",{className:"profile_page"},r.a.createElement("li",null,r.a.createElement(p.b,{to:"/profile_page"},"Profile_page"))),r.a.createElement("ul",{className:"English_game"},r.a.createElement("li",null,r.a.createElement(p.b,{to:"/English_game"},"English_game"))),r.a.createElement("ul",{className:"shop"},r.a.createElement("li",null,r.a.createElement(p.b,{to:"/shop"},"Shop"))),r.a.createElement("li",null,r.a.createElement(p.b,{to:"/containers/Login"},"Login")),r.a.createElement("div",{className:"content"},r.a.createElement(d.a,{path:"/profile_page",component:h}),r.a.createElement(d.a,{path:"/English_game",component:b}),r.a.createElement(d.a,{path:"/shop",component:f}))))}}]),t}(n.Component);a(33);o.a.render(r.a.createElement(g,null),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.d18edf3f.chunk.js.map
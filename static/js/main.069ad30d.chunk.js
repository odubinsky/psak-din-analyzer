(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{118:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(18),s=a.n(l),i=(a(37),a(13)),o=a(14),c=a(16),u=a(15),d=a(17),h=a(5),b=(a(38),a(39),a(40),a(41),a(29)),p=a(30),m=a(19),g=a(9),v=a(20),j=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).linkTemplate=a.linkTemplate.bind(Object(h.a)(Object(h.a)(a))),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"isEmpty",value:function(e,t){return!e||"\u05db\u05dc\u05d5\u05dd"===e.label}},{key:"linkTemplate",value:function(e,t){var a=e.link;return r.a.createElement("a",{rel:"noopener noreferrer",href:a,target:"_blank"},"\u05e7\u05d9\u05e9\u05d5\u05e8")}},{key:"render",value:function(){var e=this.props,t=e.judges,a=e.chosenJudge,n=e.judgesArr,l=e.tab;if(this.isEmpty(a,l))return null;if("\u05e2\u05de\u05d5\u05d3\u05d5\u05ea"===l){var s=t["".concat(a)],i={labels:[],datasets:[{label:"\u05d0\u05d7\u05d5\u05d6\u05d9 \u05d4\u05e6\u05dc\u05d7\u05d4",backgroundColor:"#42A5F5",data:[]},{label:"\u05d0\u05d7\u05d5\u05d6\u05d9 \u05d3\u05d7\u05d9\u05d9\u05d4",backgroundColor:"#9CCC65",data:[]}]};return s&&(i.labels.push("".concat(a)),i.datasets[0].data.push(100*s["accepted_ratio: "]),i.datasets[1].data.push(100*s["rejected_ratio: "])),r.a.createElement(v.Chart,{type:"bar",data:i,style:{width:"500px",left:"calc(50% - 250px)",top:"20px"}})}if("\u05e2\u05d9\u05d2\u05d5\u05dc"===l){var o,c=t["".concat(a)];if(o={labels:["\u05d0\u05d7\u05d5\u05d6\u05d9 \u05e7\u05d1\u05dc\u05d4","\u05d0\u05d7\u05d5\u05d6\u05d9 \u05d3\u05d7\u05d9\u05d9\u05d4","\u05d0\u05d7\u05e8"],datasets:[{backgroundColor:["#42A5F5","#9CCC65","red"],data:[]}]},c){var u=[100*c["accepted_ratio: "],100*c["rejected_ratio: "]];o.datasets[0].data.push(u[0]),o.datasets[0].data.push(u[1]),o.datasets[0].data.push(100-u[0]-u[1])}return r.a.createElement("div",{style:{top:"40px",position:"relative"}},r.a.createElement(v.Chart,{type:"doughnut",data:o,style:{width:"50%",left:"calc(50% - 250px)",marginBottom:"20px"}}))}if("\u05e9\u05d5\u05e4\u05d8\u05d9\u05dd \u05de\u05d5\u05de\u05dc\u05e6\u05d9\u05dd"===l)return r.a.createElement(m.DataTable,{value:n,header:"\u05e9\u05d5\u05e4\u05d8\u05d9\u05dd \u05e9\u05de\u05e7\u05d1\u05dc\u05d9\u05dd \u05d0\u05ea \u05d4\u05ea\u05d1\u05d9\u05e2\u05d4",style:{marginBottom:"30px"}},r.a.createElement(g.Column,{field:"rejected_ratio",header:"\u05d0\u05d7\u05d5\u05d6 \u05d3\u05d7\u05d9\u05d9\u05d4",sortable:!0}),r.a.createElement(g.Column,{field:"accepted_ratio",header:"\u05d0\u05d7\u05d5\u05d6 \u05e7\u05d1\u05dc\u05d4",sortable:!0}),r.a.createElement(g.Column,{field:"name",header:"\u05e9\u05dd"}));if("\u05e4\u05e1\u05e7\u05d9 \u05d3\u05d9\u05df"===l){var d=t["".concat(a)].links;return d=d.map(function(e){return{link:(e=e[0].split("\t"))[0],result:Number(e[1])?"\u05d4\u05ea\u05e7\u05d1\u05dc":"\u05e0\u05d3\u05d7\u05d4"}}),r.a.createElement(m.DataTable,{value:d,style:{marginBottom:"30px"}},r.a.createElement(g.Column,{field:"link",header:"\u05e7\u05d9\u05e9\u05d5\u05e8",body:this.linkTemplate}),r.a.createElement(g.Column,{field:"result",header:"\u05ea\u05d5\u05e6\u05d0\u05d4"}))}return null}}]),t}(n.Component),f=a(21),y=a.n(f),w=function(e){function t(){var e;Object(i.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).call(this))).state={judge:{label:"\u05db\u05dc\u05d5\u05dd",value:"\u05db\u05dc\u05d5\u05dd"},lawyer:{label:"\u05db\u05dc\u05d5\u05dd",value:"\u05db\u05dc\u05d5\u05dd"},tab:{label:"\u05db\u05dc\u05d5\u05dd"},dataLoaded:!1,globalRatios:{}},e.parseText=e.parseText.bind(Object(h.a)(Object(h.a)(e))),e.parseGlobal=e.parseGlobal.bind(Object(h.a)(Object(h.a)(e))),e.returnAvg=e.returnAvg.bind(Object(h.a)(Object(h.a)(e))),e.createDropdownLists=e.createDropdownLists.bind(Object(h.a)(Object(h.a)(e)));var a=window.document.documentURI+"/judges.txt",n=window.document.documentURI+"/global.txt";return y.a.get(a,e.parseText),y.a.get(n,e.parseGlobal),e.judges={},e.tabs=[{label:"\u05e2\u05de\u05d5\u05d3\u05d5\u05ea"},{label:"\u05e2\u05d9\u05d2\u05d5\u05dc"},{label:"\u05e4\u05e1\u05e7\u05d9 \u05d3\u05d9\u05df"},{label:"\u05e9\u05d5\u05e4\u05d8\u05d9\u05dd \u05de\u05d5\u05de\u05dc\u05e6\u05d9\u05dd"}],e.judgesKeys=[],e.lawyersKeys=[],e.onJudgeChange=e.onJudgeChange.bind(Object(h.a)(Object(h.a)(e))),e.onAuthChange=e.onAuthChange.bind(Object(h.a)(Object(h.a)(e))),e}return Object(d.a)(t,e),Object(o.a)(t,[{key:"createDropdownLists",value:function(){for(var e in this.judges)!e.match(/^.\s+/g)&&this.judges[e]["accepted_ratio: "]>0&&this.judgesKeys.push({label:e,value:e})}},{key:"onJudgeChange",value:function(e){this.setState({judge:e.value})}},{key:"onAuthChange",value:function(e){this.setState({lawyer:e.value})}},{key:"onTabChange",value:function(e){this.setState({tab:e.value})}},{key:"mapToTable",value:function(e){return{name:e[0],accepted_ratio:100*e[1]["accepted_ratio: "],rejected_ratio:100*e[1]["rejected_ratio: "]}}},{key:"parseGlobal",value:function(e){var t=e.split("\n");t={accpeted:t[0].split(" ")[1],rejected:t[1].split(" ")[1]},this.setState({globalRatios:t})}},{key:"parseText",value:function(e){for(var t,a,n=e.split("\n"),r="",l=!0,s=0;s<n.length;s++)if((a=n[s]).match(/(https?:\/\/[^\s]+)/g)){var i=a.split(" ");this.judges[r].links.push(i)}else a.match(/^[01]/)?(l?t=a:this.judges[r]={"accepted_ratio: ":t,"rejected_ratio: ":a,links:[]},l=!l):r=a;this.judgesArr=Object.entries(this.judges).filter(function(e){return e[1].links.length>10}).sort(function(e,t){return Number(e[1]["accepted_ratio: "])>Number(t[1]["accepted_ratio: "])?1:-1}).slice(-10).map(this.mapToTable),this.createDropdownLists(),this.setState({dataLoaded:!0})}},{key:"returnAvg",value:function(){var e=Number(this.state.globalRatios.accpeted)+Number(this.state.globalRatios.rejected),t=Number(this.state.globalRatios.accpeted)/e,a=Number(this.state.globalRatios.rejected)/e;return r.a.createElement("div",null,r.a.createElement("div",{style:{direction:"rtl"}},"\u05de\u05de\u05d5\u05e6\u05e2 \u05e7\u05d1\u05dc\u05d4 \u05d5\u05d3\u05d7\u05d9\u05d9\u05d4 \u05d0\u05e6\u05dc \u05e9\u05d5\u05e4\u05d8\u05d9\u05dd:"),r.a.createElement("div",null,"\u05d0\u05d7\u05d5\u05d6 \u05e7\u05d1\u05dc\u05d4: ".concat(100*t)),r.a.createElement("div",null,"\u05d0\u05d7\u05d5\u05d6 \u05d3\u05d7\u05d9\u05d9\u05d4: ".concat(100*a)))}},{key:"render",value:function(){var e=this,t={tab:this.state.tab.label,chosenJudge:this.state.judge,chosenLawyer:this.state.lawyer,judges:this.judges,judgesArr:this.judgesArr,lawyers:this.lawyers,lawyersArr:this.lawyersArr};return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},"\u05e0\u05d9\u05ea\u05d5\u05d7 \u05e4\u05e1\u05e7\u05d9 \u05d3\u05d9\u05df"),r.a.createElement("div",{className:"pick-section"},r.a.createElement(b.Dropdown,{value:this.state.judge,options:this.judgesKeys,onChange:this.onJudgeChange,style:{width:"300px",direction:"rtl"},placeholder:"\u05d1\u05d7\u05e8 \u05e9\u05d5\u05e4\u05d8",filter:!0,showClear:!0})),r.a.createElement("div",{className:"avg-section"},this.state.globalRatios?this.returnAvg():""),r.a.createElement("div",{className:"visualization-section",style:{width:"1000px",left:"calc(50% - 500px)"}},r.a.createElement(p.TabMenu,{model:this.tabs,activeItem:this.state.tab,onTabChange:function(t){return e.setState({tab:t.value})},style:{width:"1000px",float:"right !important"}}),r.a.createElement(j,t)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},31:function(e,t,a){e.exports=a(118)},37:function(e,t,a){},38:function(e,t,a){}},[[31,1,2]]]);
//# sourceMappingURL=main.069ad30d.chunk.js.map
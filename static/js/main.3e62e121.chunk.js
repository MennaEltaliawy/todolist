(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{18:function(t,e,n){},19:function(t,e,n){},20:function(t,e,n){},21:function(t,e,n){},28:function(t,e,n){"use strict";n.r(e);var c=n(2),i=n.n(c),s=n(10),r=n.n(s),a=(n(18),n(19),n(4)),o=n(5),u=n(7),j=n(6),d=n(13),l=(n(20),n(21),n(11)),b=n(1);var m=function(t){var e=t.Items.map((function(t){return Object(b.jsxs)("div",{className:"List",children:[Object(b.jsx)("p",{children:Object(b.jsx)("input",{type:"text",id:t.key,value:t.item})}),Object(b.jsx)("span",{children:Object(b.jsx)(l.a,{className:"iconn",icon:"trash"})})]},t.key)}));return Object(b.jsx)("div",{children:e})},h=n(3),f=n(12);h.b.add(f.a);var O=function(t){Object(u.a)(n,t);var e=Object(j.a)(n);function n(t){var c;return Object(a.a)(this,n),(c=e.call(this,t)).state={Items:[],currrentItem:{item:"",key:""}},c.handleinput=function(t){c.setState({currrentItem:{item:t.target.value,key:Date.now()}})},c.handlesubmit=function(t){t.preventDefault();var e=c.state.currrentItem;if(console.log(e),""!==e){var n=[].concat(Object(d.a)(c.state.Items),[e]);c.setState({Items:n})}},c}return Object(o.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"form",children:[Object(b.jsxs)("form",{onSubmit:this.handlesubmit,children:[Object(b.jsx)("input",{id:"text",type:"text",value:this.state.currrentItem.item,onChange:this.handleinput,placeholder:"ToDo....."}),Object(b.jsx)("button",{type:"submit",children:"Add"})]}),Object(b.jsx)(m,{Items:this.state.Items})]})}}]),n}(c.Component);c.Component;var p=function(){return Object(b.jsx)("div",{children:Object(b.jsx)(O,{})})},v=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,29)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,s=e.getLCP,r=e.getTTFB;n(t),c(t),i(t),s(t),r(t)}))};r.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(p,{})}),document.getElementById("root")),v()}},[[28,1,2]]]);
//# sourceMappingURL=main.3e62e121.chunk.js.map
"use strict";(self.webpackChunkez_modal_react_github_io=self.webpackChunkez_modal_react_github_io||[]).push([[433],{12948:function(Z,s,e){e.r(s);var C="This is a description.",u=function(){return C};s.default=u},83462:function(Z,s,e){e.r(s),e.d(s,{Mult:function(){return h},default:function(){return x}});var C=e(17061),u=e.n(C),f=e(17156),A=e.n(f),j=e(27424),i=e.n(j),T=e(18404),R=e(73611),a=e(89779),I=e(10154),r=e(18428),d=e(56881),g=e(71230),E=e(15746),t=e(34176),_=e(78957),o=e(90396),v=e(67294),n=e(85893),z=function(l){var D=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1e3;return new Promise(function(){setTimeout(function(){l()},D)})},L={width:"100%"},W=T.Z.Text,y=1,h=function O(l){var D=v.useState(),M=i()(D,2),m=M[0],K=M[1];return(0,n.jsxs)(R.Z,{title:"Hello Mult Modal",open:l.visible,onOk:function(){return l.hide(m)},onCancel:function(){return l.hide(null)},afterClose:l.remove,children:[(0,n.jsxs)("div",{children:["props.name ",(0,n.jsx)(W,{type:"success",children:l.name})]}),(0,n.jsxs)("div",{children:["props.age",(0,n.jsxs)(W,{type:"success",children:[" ",l.age]})]}),(0,n.jsx)("ul",{children:new Array(10).fill(0,0,10).map(function(P,c){return(0,n.jsx)("li",{children:c},c)})}),(0,n.jsx)(a.ZP,{onClick:function(){o.Z.show(O,{name:"easy"+y++,age:54}).then(function(c){I.ZP.success("show-result:"+c)})},children:"\u518D\u6253\u5F00\u4E00\u4E2A\u76F8\u540C\u7684\u5F39\u7A97"}),(0,n.jsx)(r.Z.Item,{label:"return",children:(0,n.jsx)(d.Z,{style:L,value:m,onChange:function(c){return K(c.target.value)},placeholder:"\u5C06\u4F5C\u4E3AEasyModal.show()\u8C03\u7528\u7684\u8FD4\u56DE\u503C"})})]})};function x(){var O=v.useState("easy"),l=i()(O,2),D=l[0],M=l[1],m=v.useState(99),K=i()(m,2),P=K[0],c=K[1];return(0,n.jsx)(o.Z.Provider,{children:(0,n.jsxs)(g.Z,{gutter:[24,24],children:[(0,n.jsx)(E.Z,{span:8,children:(0,n.jsx)(r.Z.Item,{label:"name",children:(0,n.jsx)(d.Z,{style:L,value:D,onChange:function(U){return M(U.target.value)},placeholder:"\u5C06\u4F5C\u4E3Aname\u5C5E\u6027\u4F20\u9012\u7ED9\u7EC4\u4EF6"})})}),(0,n.jsx)(E.Z,{span:8,children:(0,n.jsx)(r.Z.Item,{label:"age",children:(0,n.jsx)(t.Z,{style:L,value:P,onChange:function(U){return c(U)},placeholder:"\u5C06\u4F5C\u4E3Aage\u5C5E\u6027\u4F20\u9012\u7ED9\u7EC4\u4EF6"})})}),(0,n.jsx)(E.Z,{span:24,children:(0,n.jsx)(_.Z,{children:(0,n.jsxs)(a.ZP,{type:"primary",onClick:A()(u()().mark(function B(){return u()().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:o.Z.show(h,{name:D,age:P}).then(function(F){I.ZP.success("show-result:"+F)});case 1:case"end":return b.stop()}},B)})),children:["EasyModal.show(MultModal,","{name,age}",")"]})})})]})})}},16088:function(Z,s,e){e.r(s),e.d(s,{ExampleModal:function(){return d},default:function(){return g}});var C=e(17061),u=e.n(C),f=e(17156),A=e.n(f),j=e(73611),i=e(78957),T=e(89779),R=e(10154),a=e(90396),I=e(67294),r=e(85893),d=function(t){var _=(0,a.d)();return(0,r.jsx)(j.Z,{title:"Hello Antd:".concat(t.index),open:_.visible,onOk:function(){return _.hide(t.index)},onCancel:function(){return _.hide(null)},afterClose:_.remove,confirmLoading:t.loading})};function g(){return(0,r.jsx)(a.Z.Provider,{children:(0,r.jsxs)(i.Z,{children:[(0,r.jsx)(T.ZP,{type:"primary",onClick:A()(u()().mark(function E(){return u()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:a.Z.show(d,{index:4,loading:!0},{id:2}).then(function(o){console.log("show-result:",o)}),R.ZP.info("3\u79D2\u540E\u7ACB\u5373\u79FB\u9664\u7EC4\u4EF6",3e3),setTimeout(function(){a.Z.remove(2)},3e3);case 3:case"end":return _.stop()}},E)})),children:"\u901A\u8FC7id\u79FB\u9664\u7EC4\u4EF6"}),(0,r.jsx)(T.ZP,{type:"primary",onClick:A()(u()().mark(function E(){var t;return u()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:t=a.Z.create(d),a.Z.show(t,{index:5,loading:!0}).then(function(v){console.log("show-result:",v)}),R.ZP.info("3\u79D2\u540E\u7ACB\u5373\u79FB\u9664\u7EC4\u4EF6",3e3),setTimeout(function(){a.Z.remove(t)},3e3);case 4:case"end":return o.stop()}},E)})),children:"\u901A\u8FC7HOC\u79FB\u9664\u7EC4\u4EF6"})]})})}},44788:function(Z,s,e){e.r(s),e.d(s,{SingleModal:function(){return W},default:function(){return y}});var C=e(17061),u=e.n(C),f=e(17156),A=e.n(f),j=e(27424),i=e.n(j),T=e(18404),R=e(73611),a=e(18428),I=e(56881),r=e(71230),d=e(15746),g=e(34176),E=e(78957),t=e(89779),_=e(10154),o=e(90396),v=e(67294),n=e(85893),z={width:"100%"},L=T.Z.Text,W=o.Z.create(function(h){var x=v.useState(),O=i()(x,2),l=O[0],D=O[1];return(0,n.jsxs)(R.Z,{title:"Hello Single Modal",open:h.visible,onOk:function(){return h.hide(l)},onCancel:function(){return h.hide(null)},afterClose:h.remove,children:[(0,n.jsxs)("div",{children:["props.name ",(0,n.jsx)(L,{type:"success",children:h.name})]}),(0,n.jsxs)("div",{children:["props.age",(0,n.jsxs)(L,{type:"success",children:[" ",h.age]})]}),(0,n.jsx)("ul",{children:new Array(10).fill(0,0,10).map(function(M,m){return(0,n.jsx)("li",{children:m},m)})}),(0,n.jsx)(a.Z.Item,{label:"return",children:(0,n.jsx)(I.Z,{style:z,value:l,onChange:function(m){return D(m.target.value)},placeholder:"\u5C06\u4F5C\u4E3AEasyModal.show()\u8C03\u7528\u7684\u8FD4\u56DE\u503C"})})]})});function y(){var h=v.useState("hello"),x=i()(h,2),O=x[0],l=x[1],D=v.useState(0),M=i()(D,2),m=M[0],K=M[1];return(0,n.jsx)(o.Z.Provider,{children:(0,n.jsxs)(r.Z,{gutter:[24,24],children:[(0,n.jsx)(d.Z,{span:8,children:(0,n.jsx)(a.Z.Item,{label:"name",children:(0,n.jsx)(I.Z,{style:z,value:O,onChange:function(c){return l(c.target.value)},placeholder:"\u5C06\u4F5C\u4E3Aname\u5C5E\u6027\u4F20\u9012\u7ED9\u7EC4\u4EF6"})})}),(0,n.jsx)(d.Z,{span:8,children:(0,n.jsx)(a.Z.Item,{label:"age",children:(0,n.jsx)(g.Z,{style:z,value:m,onChange:function(c){return K(c)},placeholder:"\u5C06\u4F5C\u4E3Aage\u5C5E\u6027\u4F20\u9012\u7ED9\u7EC4\u4EF6"})})}),(0,n.jsx)(d.Z,{span:24,children:(0,n.jsx)(E.Z,{children:(0,n.jsxs)(t.ZP,{type:"primary",onClick:A()(u()().mark(function P(){return u()().wrap(function(B){for(;;)switch(B.prev=B.next){case 0:o.Z.show(W,{name:O,age:m}).then(function(U){_.ZP.success("show-result:"+U)});case 1:case"end":return B.stop()}},P)})),children:["EasyModal.show(SingleModal,","{name,age}",")"]})})})]})})}},53389:function(Z,s,e){e.r(s),e.d(s,{ExampleModal:function(){return d},default:function(){return g}});var C=e(17061),u=e.n(C),f=e(17156),A=e.n(f),j=e(73611),i=e(78957),T=e(89779),R=e(10154),a=e(90396),I=e(67294),r=e(85893),d=function(t){var _=(0,a.d)();return(0,r.jsx)(j.Z,{title:"Hello Antd:".concat(t.index),open:_.visible,onOk:function(){return _.hide(t.index)},onCancel:function(){return _.hide(null)},afterClose:_.remove,confirmLoading:t.loading})};function g(){return(0,r.jsx)(a.Z.Provider,{children:(0,r.jsx)(i.Z,{children:(0,r.jsx)(T.ZP,{type:"primary",onClick:A()(u()().mark(function E(){return u()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:a.Z.show(d,{index:4,loading:!0},{id:"hello world"}).then(function(o){console.log("show-result:",o)}),R.ZP.info("3\u79D2\u540E\u66F4\u65B0title\u5185\u5BB9",3e3),setTimeout(function(){a.Z.update("hello world",{index:66,loading:!1})},3e3);case 3:case"end":return _.stop()}},E)})),children:"\u66F4\u65B0 Mult \u6A21\u5F0F\u7EC4\u4EF6"})})})}}}]);
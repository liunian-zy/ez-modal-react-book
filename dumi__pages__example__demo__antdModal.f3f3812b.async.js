"use strict";(self.webpackChunkez_modal_react_github_io=self.webpackChunkez_modal_react_github_io||[]).push([[233],{43362:function(z,D,e){e.r(D),e.d(D,{SingleModal:function(){return j},default:function(){return W}});var A=e(17061),P=e.n(A),R=e(17156),T=e.n(R),g=e(27424),u=e.n(g),f=e(18404),I=e(21555),d=e(18428),O=e(56881),x=e(71230),E=e(15746),B=e(34176),K=e(78957),L=e(89779),U=e(10154),c=e(90396),h=e(67294),_=e(85893),m={width:"100%"},v=f.Z.Text,j=c.Z.create(function(n){var l=h.useState(),o=u()(l,2),r=o[0],i=o[1];return(0,_.jsxs)(I.Z,{title:"Hello Modal",open:n.visible,onOk:function(){return n.hide(r)},onCancel:function(){return n.hide(null)},afterClose:n.remove,children:[(0,_.jsxs)("div",{children:["props.name ",(0,_.jsx)(v,{type:"success",children:n.name})]}),(0,_.jsxs)("div",{children:["props.age",(0,_.jsxs)(v,{type:"success",children:[" ",n.age]})]}),(0,_.jsx)("ul",{children:new Array(10).fill(0,0,10).map(function(t,a){return(0,_.jsx)("li",{children:a},a)})}),(0,_.jsx)(d.Z.Item,{label:"return",children:(0,_.jsx)(O.Z,{style:m,value:r,onChange:function(a){return i(a.target.value)},placeholder:"\u5C06\u4F5C\u4E3AEasyModal.show()\u8C03\u7528\u7684\u8FD4\u56DE\u503C"})})]})});function W(){var n=h.useState("modal"),l=u()(n,2),o=l[0],r=l[1],i=h.useState(10),t=u()(i,2),a=t[0],Z=t[1];return(0,_.jsx)(c.Z.Provider,{children:(0,_.jsxs)(x.Z,{gutter:[24,24],children:[(0,_.jsx)(E.Z,{span:8,children:(0,_.jsx)(d.Z.Item,{label:"name",children:(0,_.jsx)(O.Z,{style:m,value:o,onChange:function(s){return r(s.target.value)},placeholder:"\u5C06\u4F5C\u4E3Aname\u5C5E\u6027\u4F20\u9012\u7ED9\u7EC4\u4EF6"})})}),(0,_.jsx)(E.Z,{span:8,children:(0,_.jsx)(d.Z.Item,{label:"age",children:(0,_.jsx)(B.Z,{style:m,value:a,onChange:function(s){return Z(s)},placeholder:"\u5C06\u4F5C\u4E3Aage\u5C5E\u6027\u4F20\u9012\u7ED9\u7EC4\u4EF6"})})}),(0,_.jsx)(E.Z,{span:24,children:(0,_.jsx)(K.Z,{children:(0,_.jsxs)(L.ZP,{type:"primary",onClick:T()(P()().mark(function C(){return P()().wrap(function(M){for(;;)switch(M.prev=M.next){case 0:c.Z.show(j,{name:o,age:a}).then(function(y){U.ZP.success("show-result:"+y)});case 1:case"end":return M.stop()}},C)})),children:["EasyModal.show(SingleModal,","{name,age}",")"]})})})]})})}}}]);

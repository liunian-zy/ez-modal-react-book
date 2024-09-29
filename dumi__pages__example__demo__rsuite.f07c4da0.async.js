"use strict";(self.webpackChunkez_modal_react_github_io=self.webpackChunkez_modal_react_github_io||[]).push([[275],{89445:function(G,I,s){s.r(I),s.d(I,{default:function(){return z}});var c=s(17061),m=s.n(c),U=s(17156),L=s.n(U),W=s(27424),P=s.n(W),C=s(90396),T=s(67294),y=s(63995),d=s(95116),B=s(82206),D=s(85093),R=s(56900),j=s(95692),K=s(44159),_=s(85893),i=C.Z.create(function(M){var u=T.useState("RsuiteModal"),O=P()(u,2),f=O[0],v=O[1],h=function(b){M.hide(b),setTimeout(function(){return M.remove()},300)};return(0,_.jsxs)(y.Z,{open:M.visible,onEsc:function(){return h()},onClose:function(){return h()},children:[(0,_.jsx)(y.Z.Header,{children:(0,_.jsx)(y.Z.Title,{children:"Modal Title "})}),(0,_.jsxs)(y.Z.Body,{children:[(0,_.jsx)("div",{children:"Hello Rsuite Modal"}),(0,_.jsx)(d.Z,{value:f,onChange:function(b){return v(b)},placeholder:"Default Input"}),(0,_.jsx)(B.Z.Paragraph,{})]}),(0,_.jsxs)(y.Z.Footer,{children:[(0,_.jsx)(D.Z,{onClick:function(){return h(f)},children:"Ok"}),(0,_.jsx)(D.Z,{onClick:function(){return h("Cancel")},children:"Cancel"})]})]})});function z(){var M=(0,R.Z)();return(0,_.jsx)(C.Z.Provider,{children:(0,_.jsx)(D.Z,{type:"button",onClick:L()(m()().mark(function u(){return m()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:C.Z.show(i).then(function(v){console.log("show-result:",v),v&&M.push((0,_.jsx)(j.Z,{children:v}),{placement:"topEnd"})});case 1:case"end":return f.stop()}},u)})),children:"Rsuite Modal"})})}},90396:function(G,I,s){s.d(I,{Z:function(){return ne},d:function(){return Y}});var c=s(67294),m=s(85893),U=Object.defineProperty,L=Object.defineProperties,W=Object.getOwnPropertyDescriptors,P=Object.getOwnPropertySymbols,C=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable,y=(e,o,a)=>o in e?U(e,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[o]=a,d=(e,o)=>{for(var a in o||(o={}))C.call(o,a)&&y(e,a,o[a]);if(P)for(var a of P(o))T.call(o,a)&&y(e,a,o[a]);return e},B=(e,o)=>L(e,W(o)),D=(e,o)=>{var a={};for(var r in e)C.call(e,r)&&o.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&P)for(var r of P(e))o.indexOf(r)<0&&T.call(e,r)&&(a[r]=e[r]);return a};function R(e){let o="";switch(e){case 2:o="This component has been opened, if you want to update Component, proposal use EasyModal.update";break;case 0:o="Please pass in the react component.";break;case 1:o=`
        invalid Component or invalid customId!
        If you want to update Component , there are two aways:
        1. use EasyModal.create function create a EasyHOCComponents , and pass in EasyModal.update(/* EasyHOCComponents */)'
            then use EasyModal.update(Comp, willUpdateProps)
            
            example:

            const YourComp = EasyModal.create(Component)
            EasyModal.show(YourComp, props);
            EasyModal.update(YourComp, willUpdateProps);
            

        2. Please use EasyModal.show(Comp/* EasyModal.create or React Comp */, props, { id: /*here write customId*/ })
            then, use EasyModal.update(id /*pass above customId*/, willUpdateProps)

            example:

            const YourComp = EasyModal.create(Component)
            EasyModal.show(Component, props, { id: 'i am customId' });
            EasyModal.update('i am customId', willUpdateProps);

            `;break;case 5:o=`
        No dispatch method detected, did you embed your app with EasyModal.Provider?

        example:

        <EasyModal.Provider>
          <App/>
        </EasyModal.Provider>
        `;break;case 6:o=`
        invalid id , please use valid string or valid number
    
        example:
  
        EasyModal.register('i am id',...)
        EasyModal.register(12345,...)
        `;break;default:break}return o}var j=Symbol.for("easy_modal_id"),K=Symbol.for("easy_modal_hoc_type"),_=Symbol.for("react.forward_ref"),i={},z=0,M=e=>u(e)?e:`_easy_modal_${z++}_`;function u(e){return typeof e=="string"&&e!==""||typeof e=="number"&&!Number.isNaN(e)}function O(e){return e&&e.__typeof_easy_modal__===K}function f(e,o){return u(e)?e:(e[j]||(e[j]=M(o)),e[j])}function v(e){if(u(e)&&i[e])return i[e];const o=Object.values(i).find(a=>a.Component===e);return o||void 0}function h(e,o){let a="";const r=f(e);u(r)||(a=`No id found in EasyModal.${o}`);const l=v(r);l||(a+=`
No Component found in EasyModal.${o}.`);const n=!!l;return!n&&a&&console.warn(a+`
It may have been pre-removed, which is allowed`),{id:r,hoc:l,get:n}}var p=c.createContext([]),b=c.createContext(null),w=()=>{throw new Error(R(5))};function V(e,o){const a=o.payload,{id:r}=a,l=D(a,["id"]),n=[...e],t=n.findIndex(E=>E.id===r);switch(i[r]&&Object.assign(i[r],d({},l)),o.type){case"easy_modal/show":{t>-1?n[t]=d(d({},n[t]),o.payload):n.push(d(d({},n[t]),o.payload));break}case"easy_modal/update":{n[t]=d(d({},n[t]),o.payload);break}case"easy_modal/hide":{n[t]=d(d({},n[t]),o.payload);break}case"easy_modal/remove":{n.splice(t,1),delete i[r];break}}return n}function J(e,o,a,r){return{type:"easy_modal/show",payload:{id:e,props:o,promise:a,config:r,visible:!0}}}function Q(e,o){return{type:"easy_modal/update",payload:{id:e,props:o}}}function X(e){return{type:"easy_modal/hide",payload:{id:e,visible:!1}}}function q(e){return{type:"easy_modal/remove",payload:{id:e}}}function H(e,o=!0){if(!e)throw new Error(R(0));const a=({id:r})=>{const l=Y(r);return a.displayName="EasyModalHOCWrapper"+r,(0,m.jsx)(b.Provider,{value:r,children:(0,m.jsx)(e,d({},l))})};return a.__typeof_easy_modal__=K,a.__easy_modal_is_single__=o,a}function ee(e,o,a){i[e]||(i[e]={Component:o,props:a,id:e})}function oe(e,o={},a={}){var r,l,n;a.resolveOnHide=(r=a.resolveOnHide)!=null?r:!0,a.id=(l=a.id)!=null?l:"";const t=O(e)?e:H(e,!1),E=f(t,a.id);((n=v(t))!=null?n:v(E))||ee(E,t,o);let g,A;const N=new Promise((te,se)=>{g=te,A=se});return w(J(E,o,{resolve:g,reject:A},a)),N}function ae(e,o={}){var a;if(!O(e)&&!u(e))return console.warn(R(1));const{id:r,get:l}=h(e,"update");if(!l)return;const n=((a=i[r])==null?void 0:a.props)||{};w(Q(r,d(d({},n),o)))}function S(e,o){var a,r,l;const{id:n,hoc:t,get:E}=h(e,"hide");E&&(w(X(n)),(a=t==null?void 0:t.config)!=null&&a.resolveOnHide&&((r=t.promise)==null||r.resolve(o)),!(t!=null&&t.Component.__easy_modal_is_single__)&&!u((l=t==null?void 0:t.config)==null?void 0:l.id)&&setTimeout(()=>Z(n),300))}function Z(e){const{id:o,get:a}=h(e,"remove");a&&w(q(o))}function Y(e){const o=(0,c.useContext)(p),a=(0,c.useContext)(b);if(u(e)||(e=a),!u(e))throw new Error("No modal id found in EasyModal.useModal.");const r=o.find(k=>k.id===e);if(!r)throw new Error("No modalInfo found in EasyModal.useModal.");const{props:l,promise:n,config:t,visible:E}=r,x=e,g=(0,c.useCallback)(k=>{S(x,k)},[x]),A=(0,c.useCallback)(()=>{Z(x)},[x]),N=B(d(d({},l),n),{visible:E,config:t,hide:g,remove:A});return Object.freeze(N)}var $=()=>{const a=(0,c.useContext)(p).filter(r=>u(r.id)&&i[r.id]).map(r=>({id:r.id,Component:i[r.id].Component}));return(0,m.jsx)(m.Fragment,{children:a.map(r=>(0,m.jsx)(r.Component,{id:r.id},r.id))})};$.displayName="EasyModalPlaceholder";var F=({children:e})=>{const o=(0,c.useReducer)(V,[]),a=o[0],r=(0,c.useRef)();return r.current=(0,c.useMemo)(()=>function(n){o[1](n)},[o]),w=r.current,(0,m.jsxs)(p.Provider,{value:a,children:[e,(0,m.jsx)($,{})]})};F.displayName="EasyModalProvider";var re={ModalContext:p,Provider:F,update:ae,create:function(o){return H(o)},show:oe,hide:S,remove:Z},ne=re}}]);

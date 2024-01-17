"use strict";(self.webpackChunkez_modal_react_github_io=self.webpackChunkez_modal_react_github_io||[]).push([[275],{89445:function(G,I,t){t.r(I),t.d(I,{default:function(){return z}});var u=t(17061),c=t.n(u),U=t(17156),L=t.n(U),W=t(27424),P=t.n(W),C=t(90396),T=t(67294),v=t(63995),d=t(95116),B=t(82206),D=t(85093),R=t(56900),j=t(95692),K=t(44159),_=t(85893),i=C.Z.create(function(h){var E=T.useState("RsuiteModal"),O=P()(E,2),p=O[0],f=O[1],y=function(b){h.hide(b),setTimeout(function(){return h.remove()},300)};return(0,_.jsxs)(v.Z,{open:h.visible,onEsc:function(){return y()},onClose:function(){return y()},children:[(0,_.jsx)(v.Z.Header,{children:(0,_.jsx)(v.Z.Title,{children:"Modal Title "})}),(0,_.jsxs)(v.Z.Body,{children:[(0,_.jsx)("div",{children:"Hello Rsuite Modal"}),(0,_.jsx)(d.Z,{value:p,onChange:function(b){return f(b)},placeholder:"Default Input"}),(0,_.jsx)(B.Z.Paragraph,{})]}),(0,_.jsxs)(v.Z.Footer,{children:[(0,_.jsx)(D.Z,{onClick:function(){return y(p)},children:"Ok"}),(0,_.jsx)(D.Z,{onClick:function(){return y("Cancel")},children:"Cancel"})]})]})});function z(){var h=(0,R.Z)();return(0,_.jsx)(C.Z.Provider,{children:(0,_.jsx)(D.Z,{type:"button",onClick:L()(c()().mark(function E(){return c()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:C.Z.show(i).then(function(f){console.log("show-result:",f),f&&h.push((0,_.jsx)(j.Z,{children:f}),{placement:"topEnd"})});case 1:case"end":return p.stop()}},E)})),children:"Rsuite Modal"})})}},90396:function(G,I,t){t.d(I,{Z:function(){return ne},d:function(){return Y}});var u=t(67294),c=t(85893),U=Object.defineProperty,L=Object.defineProperties,W=Object.getOwnPropertyDescriptors,P=Object.getOwnPropertySymbols,C=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable,v=(e,o,a)=>o in e?U(e,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[o]=a,d=(e,o)=>{for(var a in o||(o={}))C.call(o,a)&&v(e,a,o[a]);if(P)for(var a of P(o))T.call(o,a)&&v(e,a,o[a]);return e},B=(e,o)=>L(e,W(o)),D=(e,o)=>{var a={};for(var r in e)C.call(e,r)&&o.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&P)for(var r of P(e))o.indexOf(r)<0&&T.call(e,r)&&(a[r]=e[r]);return a};function R(e){let o="";switch(e){case 2:o="This component has been opened, if you want to update Component, proposal use EasyModal.update";break;case 0:o="Please pass in the react component.";break;case 1:o=`
        invalid Component or invalid customId!
        If you want to update Component , there are two aways:
        1. use EasyModal.create function create a EasyHOCComponents , and pass in EasyModal.update(/* EasyHOCComponents */)'
            then use EasyModal.update(Comp, willUpdateProps)
            
            example:

            const YourComp = EasyModal.create(Component)
            EasyModal.show(YourComp,props);
            EasyModal.update(YourComp,willUpdateProps);
            

        2. Please use EasyModal.show(Comp/* EasyModal.create or React Comp */, props, { id: /*here write customId*/ })
            then, use EasyModal.update(id /*pass above customId*/, willUpdateProps)

            example:

            const YourComp = EasyModal.show(Component,props,{id: 'i am customId'});
            EasyModal.update('i am customId',willUpdateProps);

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
        `;break;default:break}return o}var j=Symbol.for("easy_modal_id"),K=Symbol.for("easy_modal_hoc_type"),_=Symbol.for("react.forward_ref"),i={},z=0,h=e=>E(e)?e:`_easy_modal_${z++}_`;function E(e){return typeof e=="string"&&e!==""||typeof e=="number"}function O(e){return e&&e.__typeof_easy_modal__===K}function p(e,o){return E(e)?e:(e[j]||(e[j]=h(o)),e[j])}function f(e){if(E(e)&&i[e])return i[e];const o=Object.values(i).find(a=>a.Component===e);return o||void 0}function y(e,o){let a="";const r=p(e);r||(a=`No id found in EasyModal.${o}`);const s=f(r);s||(a+=`
No Component found in EasyModal.${o}.`);const n=!!(r&&s);return!n&&a&&console.warn(a+`
It may have been pre-removed, which is allowed`),{id:r,hoc:s,get:n}}var m=u.createContext([]),b=u.createContext(null),w=()=>{throw new Error(R(5))};function V(e,o){const a=o.payload,{id:r}=a,s=D(a,["id"]),n=[...e],l=n.findIndex(M=>M.id===r);switch(i[r]&&Object.assign(i[r],d({},s)),o.type){case"easy_modal/show":{l>-1?n[l]=d(d({},n[l]),o.payload):n.push(d(d({},n[l]),o.payload));break}case"easy_modal/update":{n[l]=d(d({},n[l]),o.payload);break}case"easy_modal/hide":{n[l]=d(d({},n[l]),o.payload);break}case"easy_modal/remove":{n.splice(l,1),delete i[r];break}}return n}function J(e,o,a,r){return{type:"easy_modal/show",payload:{id:e,props:o,promise:a,config:r,visible:!0}}}function Q(e,o){return{type:"easy_modal/update",payload:{id:e,props:o}}}function X(e){return{type:"easy_modal/hide",payload:{id:e,visible:!1}}}function q(e){return{type:"easy_modal/remove",payload:{id:e}}}function S(e,o=!0){if(!e)throw new Error(R(0));const a=({id:r})=>{const s=Y(r);return a.displayName="EasyModalHOCWrapper"+r,(0,c.jsx)(b.Provider,{value:r,children:(0,c.jsx)(e,d({},s))})};return a.__typeof_easy_modal__=K,a.__easy_modal_is_single__=o,a}function ee(e,o,a){i[e]||(i[e]={Component:o,props:a,id:e})}function oe(e,o={},a={}){var r,s,n;a.resolveOnHide=(r=a.resolveOnHide)!=null?r:!0,a.id=(s=a.id)!=null?s:"";const l=O(e)?e:S(e,!1),M=p(l,a.id);((n=f(l))!=null?n:f(M))||ee(M,l,o);let g,A;const H=new Promise((te,se)=>{g=te,A=se});return w(J(M,o,{resolve:g,reject:A},a)),H}function ae(e,o={}){var a;if(!O(e)&&!E(e))return console.warn(R(1));const{id:r,get:s}=y(e,"update");if(!s)return;const n=((a=i[r])==null?void 0:a.props)||{};w(Q(r,d(d({},n),o)))}function N(e,o){var a,r;const{id:s,hoc:n,get:l}=y(e,"hide");l&&(w(X(s)),(a=n==null?void 0:n.config)!=null&&a.resolveOnHide&&((r=n.promise)==null||r.resolve(o)),n!=null&&n.Component.__easy_modal_is_single__||setTimeout(()=>Z(s),300))}function Z(e){const{id:o,get:a}=y(e,"remove");a&&w(q(o))}function Y(e){const o=(0,u.useContext)(m),a=(0,u.useContext)(b);if(e||(e=a),!e)throw new Error("No modal id found in EasyModal.useModal.");const r=o.find(k=>k.id===e);if(!r)throw new Error("No modalInfo found in EasyModal.useModal.");const{props:s,promise:n,config:l,visible:M}=r,x=e,g=(0,u.useCallback)(k=>{N(x,k)},[x]),A=(0,u.useCallback)(()=>{Z(x)},[x]),H=B(d(d({},s),n),{visible:M,config:l,hide:g,remove:A});return Object.freeze(H)}var $=()=>{const a=(0,u.useContext)(m).filter(r=>r.id&&i[r.id]).map(r=>({id:r.id,Component:i[r.id].Component}));return(0,c.jsx)(c.Fragment,{children:a.map(r=>(0,c.jsx)(r.Component,{id:r.id},r.id))})};$.displayName="EasyModalPlaceholder";var F=({children:e})=>{const o=(0,u.useReducer)(V,[]),a=o[0],r=(0,u.useRef)();return r.current=(0,u.useMemo)(()=>function(n){o[1](n)},[o]),w=r.current,(0,c.jsxs)(m.Provider,{value:a,children:[e,(0,c.jsx)($,{})]})};F.displayName="EasyModalProvider";var re={ModalContext:m,Provider:F,update:ae,create:function(o){return S(o)},show:oe,hide:N,remove:Z},ne=re}}]);

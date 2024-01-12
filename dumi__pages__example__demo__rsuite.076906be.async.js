"use strict";(self.webpackChunkez_modal_react_github_io=self.webpackChunkez_modal_react_github_io||[]).push([[275],{89445:function(G,x,t){t.r(x),t.d(x,{default:function(){return K}});var u=t(17061),c=t.n(u),k=t(17156),U=t.n(k),L=t(27424),M=t.n(L),P=t(90396),I=t(67294),f=t(63995),d=t(95116),W=t(82206),b=t(85093),D=t(56900),R=t(95692),B=t(44159),_=t(85893),i=P.Z.create(function(v){var E=I.useState("RsuiteModal"),C=M()(E,2),m=C[0],p=C[1];return(0,_.jsxs)(f.Z,{backdrop:!0,keyboard:!1,open:v.visible,onClose:function(){return v.hide(null)},children:[(0,_.jsx)(f.Z.Header,{children:(0,_.jsx)(f.Z.Title,{children:"Modal Title "})}),(0,_.jsxs)(f.Z.Body,{children:[(0,_.jsx)("div",{children:"Hello Rsuite Modal"}),(0,_.jsx)(d.Z,{value:m,onChange:function(O){return p(O)},placeholder:"Default Input"}),(0,_.jsx)(W.Z.Paragraph,{})]}),(0,_.jsxs)(f.Z.Footer,{children:[(0,_.jsx)(b.Z,{onClick:function(){return v.hide(m)},children:"Ok"}),(0,_.jsx)(b.Z,{onClick:function(){return v.hide("Cancel")},children:"Cancel"})]})]})});function K(){var v=(0,D.Z)();return(0,_.jsx)(P.Z.Provider,{children:(0,_.jsx)(b.Z,{type:"button",onClick:U()(c()().mark(function E(){return c()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:P.Z.show(i).then(function(p){console.log("show-result:",p),p&&v.push((0,_.jsx)(R.Z,{children:p}),{placement:"topEnd"})});case 1:case"end":return m.stop()}},E)})),children:"Rsuite Modal"})})}},90396:function(G,x,t){t.d(x,{Z:function(){return ne},d:function(){return Y}});var u=t(67294),c=t(85893),k=Object.defineProperty,U=Object.defineProperties,L=Object.getOwnPropertyDescriptors,M=Object.getOwnPropertySymbols,P=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable,f=(e,o,a)=>o in e?k(e,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[o]=a,d=(e,o)=>{for(var a in o||(o={}))P.call(o,a)&&f(e,a,o[a]);if(M)for(var a of M(o))I.call(o,a)&&f(e,a,o[a]);return e},W=(e,o)=>U(e,L(o)),b=(e,o)=>{var a={};for(var r in e)P.call(e,r)&&o.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&M)for(var r of M(e))o.indexOf(r)<0&&I.call(e,r)&&(a[r]=e[r]);return a};function D(e){let o="";switch(e){case 2:o="This component has been opened, if you want to update Component, proposal use EasyModal.update";break;case 0:o="Please pass in the react component.";break;case 1:o=`
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
        `;break;default:break}return o}var R=Symbol.for("easy_modal_id"),B=Symbol.for("easy_modal_hoc_type"),_=Symbol.for("react.forward_ref"),i={},K=0,v=e=>E(e)?e:`_easy_modal_${K++}_`;function E(e){return typeof e=="string"&&e!==""||typeof e=="number"}function C(e){return e&&e.__typeof_easy_modal__===B}function m(e,o){return E(e)?e:(e[R]||(e[R]=v(o)),e[R])}function p(e){if(E(e)&&i[e])return i[e];const o=Object.values(i).find(a=>a.Component===e);return o||void 0}function y(e,o){let a="";const r=m(e);r||(a=`No id found in EasyModal.${o}`);const s=p(r);s||(a+=`
No Component found in EasyModal.${o}.`);const n=!!(r&&s);return!n&&a&&console.warn(a+`
It may have been pre-removed, which is allowed`),{id:r,hoc:s,get:n}}var O=u.createContext([]),H=u.createContext(null),j=()=>{throw new Error(D(5))};function V(e,o){const a=o.payload,{id:r}=a,s=b(a,["id"]),n=[...e],l=n.findIndex(h=>h.id===r);switch(i[r]&&Object.assign(i[r],d({},s)),o.type){case"easy_modal/show":{l>-1?n[l]=d(d({},n[l]),o.payload):n.push(d(d({},n[l]),o.payload));break}case"easy_modal/update":{n[l]=d(d({},n[l]),o.payload);break}case"easy_modal/hide":{n[l]=d(d({},n[l]),o.payload);break}case"easy_modal/remove":{n.splice(l,1),delete i[r];break}}return n}function J(e,o,a,r){return{type:"easy_modal/show",payload:{id:e,props:o,promise:a,config:r,visible:!0}}}function Q(e,o){return{type:"easy_modal/update",payload:{id:e,props:o}}}function X(e){return{type:"easy_modal/hide",payload:{id:e,visible:!1}}}function q(e){return{type:"easy_modal/remove",payload:{id:e}}}function S(e,o=!0){if(!e)throw new Error(D(0));const a=({id:r})=>{const s=Y(r);return a.displayName="EasyModalHOCWrapper"+r,(0,c.jsx)(H.Provider,{value:r,children:(0,c.jsx)(e,d({},s))})};return a.__typeof_easy_modal__=B,a.__easy_modal_is_single__=o,a}function ee(e,o,a){i[e]||(i[e]={Component:o,props:a,id:e})}function oe(e,o={},a={}){var r,s,n;a.resolveOnHide=(r=a.resolveOnHide)!=null?r:!0,a.id=(s=a.id)!=null?s:"";const l=C(e)?e:S(e,!1),h=m(l,a.id);((n=p(l))!=null?n:p(h))||ee(h,l,o);let T,g;const Z=new Promise((te,se)=>{T=te,g=se});return j(J(h,o,{resolve:T,reject:g},a)),Z}function ae(e,o={}){var a;if(!C(e)&&!E(e))return console.warn(D(1));const{id:r,get:s}=y(e,"update");if(!s)return;const n=((a=i[r])==null?void 0:a.props)||{};j(Q(r,d(d({},n),o)))}function N(e,o){var a,r;const{id:s,hoc:n,get:l}=y(e,"hide");l&&(j(X(s)),(a=n==null?void 0:n.config)!=null&&a.resolveOnHide&&((r=n.promise)==null||r.resolve(o)),n!=null&&n.Component.__easy_modal_is_single__||setTimeout(()=>z(s),300))}function z(e){const{id:o,get:a}=y(e,"remove");a&&j(q(o))}function Y(e){const o=(0,u.useContext)(O),a=(0,u.useContext)(H);if(e||(e=a),!e)throw new Error("No modal id found in EasyModal.useModal.");const r=o.find(A=>A.id===e);if(!r)throw new Error("No modalInfo found in EasyModal.useModal.");const{props:s,promise:n,config:l,visible:h}=r,w=e,T=(0,u.useCallback)(A=>{N(w,A)},[w]),g=(0,u.useCallback)(()=>{z(w)},[w]),Z=W(d(d({},s),n),{visible:h,config:l,hide:T,remove:g});return Object.freeze(Z)}var $=()=>{const a=(0,u.useContext)(O).filter(r=>r.id&&i[r.id]).map(r=>({id:r.id,Component:i[r.id].Component}));return(0,c.jsx)(c.Fragment,{children:a.map(r=>(0,c.jsx)(r.Component,{id:r.id},r.id))})};$.displayName="EasyModalPlaceholder";var F=({children:e})=>{const o=(0,u.useReducer)(V,[]),a=o[0],r=(0,u.useRef)();return r.current=(0,u.useMemo)(()=>function(n){o[1](n)},[o]),j=r.current,(0,c.jsxs)(O.Provider,{value:a,children:[e,(0,c.jsx)($,{})]})};F.displayName="EasyModalProvider";var re={ModalContext:O,Provider:F,update:ae,create:function(o){return S(o)},show:oe,hide:N,remove:z},ne=re}}]);

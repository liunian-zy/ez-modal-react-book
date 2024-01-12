"use strict";(self.webpackChunkez_modal_react_github_io=self.webpackChunkez_modal_react_github_io||[]).push([[583],{72591:function(H,C,n){n.r(C),n.d(C,{default:function(){return z}});var d=n(17061),u=n.n(d),f=n(17156),b=n.n(f),k=n(27424),D=n.n(k),x=n(50657),T=n(37645),g=n(6514),l=n(58951),B=n(6932),K=n(31425),y=n(95268),h=n(90396),A=n(67294),c=n(85893),i=h.Z.create(function(E){return(0,c.jsxs)(x.Z,{open:E.visible,onClose:function(){return E.hide(null)},PaperProps:{component:"form",onSubmit:function(M){M.preventDefault();var w=new FormData(M.currentTarget),P=Object.fromEntries(w.entries()),p=P.email;console.log(p),E.hide(p)}},children:[(0,c.jsx)(T.Z,{children:"Subscribe"}),(0,c.jsxs)(g.Z,{children:[(0,c.jsx)(l.Z,{children:"To subscribe to this website, please enter your email address here. We will send updates occasionally."}),(0,c.jsx)(B.Z,{autoFocus:!0,required:!0,margin:"dense",id:"name",name:"email",label:"Email Address",type:"email",fullWidth:!0,variant:"standard"})]}),(0,c.jsxs)(K.Z,{children:[(0,c.jsx)(y.Z,{onClick:function(){return E.hide(null)},children:"Cancel"}),(0,c.jsx)(y.Z,{type:"submit",children:"Subscribe"})]})]})});function z(){var E=A.useState(),m=D()(E,2),M=m[0],w=m[1];return(0,c.jsx)(h.Z.Provider,{children:(0,c.jsxs)(y.Z,{onClick:b()(u()().mark(function P(){var p;return u()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,h.Z.show(i);case 2:p=v.sent,w(p);case 4:case"end":return v.stop()}},P)})),color:"primary",children:["Material Modal ",M]})})}},94578:function(H,C,n){n.d(C,{Z:function(){return u}});var d=n(89611);function u(f,b){f.prototype=Object.create(b.prototype),f.prototype.constructor=f,(0,d.Z)(f,b)}},90396:function(H,C,n){n.d(C,{Z:function(){return te},d:function(){return $}});var d=n(67294),u=n(85893),f=Object.defineProperty,b=Object.defineProperties,k=Object.getOwnPropertyDescriptors,D=Object.getOwnPropertySymbols,x=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable,g=(e,o,a)=>o in e?f(e,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[o]=a,l=(e,o)=>{for(var a in o||(o={}))x.call(o,a)&&g(e,a,o[a]);if(D)for(var a of D(o))T.call(o,a)&&g(e,a,o[a]);return e},B=(e,o)=>b(e,k(o)),K=(e,o)=>{var a={};for(var r in e)x.call(e,r)&&o.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&D)for(var r of D(e))o.indexOf(r)<0&&T.call(e,r)&&(a[r]=e[r]);return a};function y(e){let o="";switch(e){case 2:o="This component has been opened, if you want to update Component, proposal use EasyModal.update";break;case 0:o="Please pass in the react component.";break;case 1:o=`
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
        `;break;default:break}return o}var h=Symbol.for("easy_modal_id"),A=Symbol.for("easy_modal_hoc_type"),c=Symbol.for("react.forward_ref"),i={},z=0,E=e=>m(e)?e:`_easy_modal_${z++}_`;function m(e){return typeof e=="string"&&e!==""||typeof e=="number"}function M(e){return e&&e.__typeof_easy_modal__===A}function w(e,o){return m(e)?e:(e[h]||(e[h]=E(o)),e[h])}function P(e){if(m(e)&&i[e])return i[e];const o=Object.values(i).find(a=>a.Component===e);return o||void 0}function p(e,o){let a="";const r=w(e);r||(a=`No id found in EasyModal.${o}`);const s=P(r);s||(a+=`
No Component found in EasyModal.${o}.`);const t=!!(r&&s);return!t&&a&&console.warn(a+`
It may have been pre-removed, which is allowed`),{id:r,hoc:s,get:t}}var j=d.createContext([]),v=d.createContext(null),I=()=>{throw new Error(y(5))};function V(e,o){const a=o.payload,{id:r}=a,s=K(a,["id"]),t=[...e],_=t.findIndex(O=>O.id===r);switch(i[r]&&Object.assign(i[r],l({},s)),o.type){case"easy_modal/show":{_>-1?t[_]=l(l({},t[_]),o.payload):t.push(l(l({},t[_]),o.payload));break}case"easy_modal/update":{t[_]=l(l({},t[_]),o.payload);break}case"easy_modal/hide":{t[_]=l(l({},t[_]),o.payload);break}case"easy_modal/remove":{t.splice(_,1),delete i[r];break}}return t}function J(e,o,a,r){return{type:"easy_modal/show",payload:{id:e,props:o,promise:a,config:r,visible:!0}}}function Q(e,o){return{type:"easy_modal/update",payload:{id:e,props:o}}}function X(e){return{type:"easy_modal/hide",payload:{id:e,visible:!1}}}function q(e){return{type:"easy_modal/remove",payload:{id:e}}}function N(e,o=!0){if(!e)throw new Error(y(0));const a=({id:r})=>{const s=$(r);return a.displayName="EasyModalHOCWrapper"+r,(0,u.jsx)(v.Provider,{value:r,children:(0,u.jsx)(e,l({},s))})};return a.__typeof_easy_modal__=A,a.__easy_modal_is_single__=o,a}function ee(e,o,a){i[e]||(i[e]={Component:o,props:a,id:e})}function oe(e,o={},a={}){var r,s,t;a.resolveOnHide=(r=a.resolveOnHide)!=null?r:!0,a.id=(s=a.id)!=null?s:"";const _=M(e)?e:N(e,!1),O=w(_,a.id);((t=P(_))!=null?t:P(O))||ee(O,_,o);let U,W;const Z=new Promise((ne,se)=>{U=ne,W=se});return I(J(O,o,{resolve:U,reject:W},a)),Z}function ae(e,o={}){var a;if(!M(e)&&!m(e))return console.warn(y(1));const{id:r,get:s}=p(e,"update");if(!s)return;const t=((a=i[r])==null?void 0:a.props)||{};I(Q(r,l(l({},t),o)))}function Y(e,o){var a,r;const{id:s,hoc:t,get:_}=p(e,"hide");_&&(I(X(s)),(a=t==null?void 0:t.config)!=null&&a.resolveOnHide&&((r=t.promise)==null||r.resolve(o)),t!=null&&t.Component.__easy_modal_is_single__||setTimeout(()=>S(s),300))}function S(e){const{id:o,get:a}=p(e,"remove");a&&I(q(o))}function $(e){const o=(0,d.useContext)(j),a=(0,d.useContext)(v);if(e||(e=a),!e)throw new Error("No modal id found in EasyModal.useModal.");const r=o.find(L=>L.id===e);if(!r)throw new Error("No modalInfo found in EasyModal.useModal.");const{props:s,promise:t,config:_,visible:O}=r,R=e,U=(0,d.useCallback)(L=>{Y(R,L)},[R]),W=(0,d.useCallback)(()=>{S(R)},[R]),Z=B(l(l({},s),t),{visible:O,config:_,hide:U,remove:W});return Object.freeze(Z)}var F=()=>{const a=(0,d.useContext)(j).filter(r=>r.id&&i[r.id]).map(r=>({id:r.id,Component:i[r.id].Component}));return(0,u.jsx)(u.Fragment,{children:a.map(r=>(0,u.jsx)(r.Component,{id:r.id},r.id))})};F.displayName="EasyModalPlaceholder";var G=({children:e})=>{const o=(0,d.useReducer)(V,[]),a=o[0],r=(0,d.useRef)();return r.current=(0,d.useMemo)(()=>function(t){o[1](t)},[o]),I=r.current,(0,u.jsxs)(j.Provider,{value:a,children:[e,(0,u.jsx)(F,{})]})};G.displayName="EasyModalProvider";var re={ModalContext:j,Provider:G,update:ae,create:function(o){return N(o)},show:oe,hide:Y,remove:S},te=re}}]);

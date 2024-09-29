"use strict";(self.webpackChunkez_modal_react_github_io=self.webpackChunkez_modal_react_github_io||[]).push([[583],{72591:function(N,C,n){n.r(C),n.d(C,{default:function(){return z}});var i=n(17061),c=n.n(i),v=n(17156),b=n.n(v),k=n(27424),D=n.n(k),x=n(50657),T=n(37645),g=n(6514),_=n(58951),B=n(6932),K=n(31425),h=n(95268),M=n(90396),A=n(67294),m=n(85893),u=M.Z.create(function(p){return(0,m.jsxs)(x.Z,{open:p.visible,onClose:function(){return p.hide(null)},PaperProps:{component:"form",onSubmit:function(P){P.preventDefault();var w=new FormData(P.currentTarget),O=Object.fromEntries(w.entries()),f=O.email;console.log(f),p.hide(f)}},TransitionProps:{onExited:function(){return p.remove()}},children:[(0,m.jsx)(T.Z,{children:"Subscribe"}),(0,m.jsxs)(g.Z,{children:[(0,m.jsx)(_.Z,{children:"To subscribe to this website, please enter your email address here. We will send updates occasionally."}),(0,m.jsx)(B.Z,{autoFocus:!0,required:!0,margin:"dense",id:"name",name:"email",label:"Email Address",type:"email",fullWidth:!0,variant:"standard"})]}),(0,m.jsxs)(K.Z,{children:[(0,m.jsx)(h.Z,{onClick:function(){return p.hide(null)},children:"Cancel"}),(0,m.jsx)(h.Z,{type:"submit",children:"Subscribe"})]})]})});function z(){var p=A.useState(),d=D()(p,2),P=d[0],w=d[1];return(0,m.jsx)(M.Z.Provider,{children:(0,m.jsxs)(h.Z,{onClick:b()(c()().mark(function O(){var f;return c()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,M.Z.show(u);case 2:f=y.sent,w(f);case 4:case"end":return y.stop()}},O)})),color:"primary",children:["Material Modal ",P]})})}},94578:function(N,C,n){n.d(C,{Z:function(){return c}});var i=n(89611);function c(v,b){v.prototype=Object.create(b.prototype),v.prototype.constructor=v,(0,i.Z)(v,b)}},90396:function(N,C,n){n.d(C,{Z:function(){return te},d:function(){return $}});var i=n(67294),c=n(85893),v=Object.defineProperty,b=Object.defineProperties,k=Object.getOwnPropertyDescriptors,D=Object.getOwnPropertySymbols,x=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable,g=(e,o,a)=>o in e?v(e,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[o]=a,_=(e,o)=>{for(var a in o||(o={}))x.call(o,a)&&g(e,a,o[a]);if(D)for(var a of D(o))T.call(o,a)&&g(e,a,o[a]);return e},B=(e,o)=>b(e,k(o)),K=(e,o)=>{var a={};for(var r in e)x.call(e,r)&&o.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&D)for(var r of D(e))o.indexOf(r)<0&&T.call(e,r)&&(a[r]=e[r]);return a};function h(e){let o="";switch(e){case 2:o="This component has been opened, if you want to update Component, proposal use EasyModal.update";break;case 0:o="Please pass in the react component.";break;case 1:o=`
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
        `;break;default:break}return o}var M=Symbol.for("easy_modal_id"),A=Symbol.for("easy_modal_hoc_type"),m=Symbol.for("react.forward_ref"),u={},z=0,p=e=>d(e)?e:`_easy_modal_${z++}_`;function d(e){return typeof e=="string"&&e!==""||typeof e=="number"&&!Number.isNaN(e)}function P(e){return e&&e.__typeof_easy_modal__===A}function w(e,o){return d(e)?e:(e[M]||(e[M]=p(o)),e[M])}function O(e){if(d(e)&&u[e])return u[e];const o=Object.values(u).find(a=>a.Component===e);return o||void 0}function f(e,o){let a="";const r=w(e);d(r)||(a=`No id found in EasyModal.${o}`);const l=O(r);l||(a+=`
No Component found in EasyModal.${o}.`);const t=!!l;return!t&&a&&console.warn(a+`
It may have been pre-removed, which is allowed`),{id:r,hoc:l,get:t}}var j=i.createContext([]),y=i.createContext(null),I=()=>{throw new Error(h(5))};function V(e,o){const a=o.payload,{id:r}=a,l=K(a,["id"]),t=[...e],s=t.findIndex(E=>E.id===r);switch(u[r]&&Object.assign(u[r],_({},l)),o.type){case"easy_modal/show":{s>-1?t[s]=_(_({},t[s]),o.payload):t.push(_(_({},t[s]),o.payload));break}case"easy_modal/update":{t[s]=_(_({},t[s]),o.payload);break}case"easy_modal/hide":{t[s]=_(_({},t[s]),o.payload);break}case"easy_modal/remove":{t.splice(s,1),delete u[r];break}}return t}function J(e,o,a,r){return{type:"easy_modal/show",payload:{id:e,props:o,promise:a,config:r,visible:!0}}}function Q(e,o){return{type:"easy_modal/update",payload:{id:e,props:o}}}function X(e){return{type:"easy_modal/hide",payload:{id:e,visible:!1}}}function q(e){return{type:"easy_modal/remove",payload:{id:e}}}function H(e,o=!0){if(!e)throw new Error(h(0));const a=({id:r})=>{const l=$(r);return a.displayName="EasyModalHOCWrapper"+r,(0,c.jsx)(y.Provider,{value:r,children:(0,c.jsx)(e,_({},l))})};return a.__typeof_easy_modal__=A,a.__easy_modal_is_single__=o,a}function ee(e,o,a){u[e]||(u[e]={Component:o,props:a,id:e})}function oe(e,o={},a={}){var r,l,t;a.resolveOnHide=(r=a.resolveOnHide)!=null?r:!0,a.id=(l=a.id)!=null?l:"";const s=P(e)?e:H(e,!1),E=w(s,a.id);((t=O(s))!=null?t:O(E))||ee(E,s,o);let U,W;const Z=new Promise((ne,se)=>{U=ne,W=se});return I(J(E,o,{resolve:U,reject:W},a)),Z}function ae(e,o={}){var a;if(!P(e)&&!d(e))return console.warn(h(1));const{id:r,get:l}=f(e,"update");if(!l)return;const t=((a=u[r])==null?void 0:a.props)||{};I(Q(r,_(_({},t),o)))}function Y(e,o){var a,r,l;const{id:t,hoc:s,get:E}=f(e,"hide");E&&(I(X(t)),(a=s==null?void 0:s.config)!=null&&a.resolveOnHide&&((r=s.promise)==null||r.resolve(o)),!(s!=null&&s.Component.__easy_modal_is_single__)&&!d((l=s==null?void 0:s.config)==null?void 0:l.id)&&setTimeout(()=>S(t),300))}function S(e){const{id:o,get:a}=f(e,"remove");a&&I(q(o))}function $(e){const o=(0,i.useContext)(j),a=(0,i.useContext)(y);if(d(e)||(e=a),!d(e))throw new Error("No modal id found in EasyModal.useModal.");const r=o.find(L=>L.id===e);if(!r)throw new Error("No modalInfo found in EasyModal.useModal.");const{props:l,promise:t,config:s,visible:E}=r,R=e,U=(0,i.useCallback)(L=>{Y(R,L)},[R]),W=(0,i.useCallback)(()=>{S(R)},[R]),Z=B(_(_({},l),t),{visible:E,config:s,hide:U,remove:W});return Object.freeze(Z)}var F=()=>{const a=(0,i.useContext)(j).filter(r=>d(r.id)&&u[r.id]).map(r=>({id:r.id,Component:u[r.id].Component}));return(0,c.jsx)(c.Fragment,{children:a.map(r=>(0,c.jsx)(r.Component,{id:r.id},r.id))})};F.displayName="EasyModalPlaceholder";var G=({children:e})=>{const o=(0,i.useReducer)(V,[]),a=o[0],r=(0,i.useRef)();return r.current=(0,i.useMemo)(()=>function(t){o[1](t)},[o]),I=r.current,(0,c.jsxs)(j.Provider,{value:a,children:[e,(0,c.jsx)(F,{})]})};G.displayName="EasyModalProvider";var re={ModalContext:j,Provider:G,update:ae,create:function(o){return H(o)},show:oe,hide:Y,remove:S},te=re}}]);

"use strict";(self.webpackChunkez_modal_react_github_io=self.webpackChunkez_modal_react_github_io||[]).push([[555],{21555:function(dn,et,c){c.d(et,{Z:function(){return on}});var D=c(74902),fe=c(38135),a=c(67294),te=c(28459),tt=c(69123),nt=c(86581),ot=c(88141),at=c(31510),lt=c(13144),V=c.n(lt),ue=c(87263),_=c(33603),ne=c(10110),rt=c(46605),it=c(30470),oe=c(89779),me=c(33671);function ve(e){return!!(e&&e.then)}var ge=e=>{const{type:t,children:n,prefixCls:o,buttonProps:l,close:r,autoFocus:u,emitEvent:g,isSilent:i,quitOnNullishReturnValue:m,actionFn:s}=e,C=a.useRef(!1),f=a.useRef(null),[y,O]=(0,it.Z)(!1),v=function(){r==null||r.apply(void 0,arguments)};a.useEffect(()=>{let d=null;return u&&(d=setTimeout(()=>{var x;(x=f.current)===null||x===void 0||x.focus()})),()=>{d&&clearTimeout(d)}},[]);const p=d=>{ve(d)&&(O(!0),d.then(function(){O(!1,!0),v.apply(void 0,arguments),C.current=!1},x=>{if(O(!1,!0),C.current=!1,!(i!=null&&i()))return Promise.reject(x)}))},b=d=>{if(C.current)return;if(C.current=!0,!s){v();return}let x;if(g){if(x=s(d),m&&!ve(x)){C.current=!1,v(d);return}}else if(s.length)x=s(r),C.current=!1;else if(x=s(),!x){v();return}p(x)};return a.createElement(oe.ZP,Object.assign({},(0,me.nx)(t),{onClick:b,loading:y,prefixCls:o},l,{ref:f}),n)};const J=a.createContext({}),{Provider:Ce}=J;var be=()=>{const{autoFocusButton:e,cancelButtonProps:t,cancelTextLocale:n,isSilent:o,mergedOkCancel:l,rootPrefixCls:r,close:u,onCancel:g,onConfirm:i}=(0,a.useContext)(J);return l?a.createElement(ge,{isSilent:o,actionFn:g,close:function(){u==null||u.apply(void 0,arguments),i==null||i(!1)},autoFocus:e==="cancel",buttonProps:t,prefixCls:`${r}-btn`},n):null},ye=()=>{const{autoFocusButton:e,close:t,isSilent:n,okButtonProps:o,rootPrefixCls:l,okTextLocale:r,okType:u,onConfirm:g,onOk:i}=(0,a.useContext)(J);return a.createElement(ge,{isSilent:n,type:u||"primary",actionFn:i,close:function(){t==null||t.apply(void 0,arguments),g==null||g(!0)},autoFocus:e==="ok",buttonProps:o,prefixCls:`${l}-btn`},r)},xe=c(12057),G=c(87462),ae=c(97685),st=c(54535),he=a.createContext({}),N=c(1413),ct=c(94184),z=c.n(ct),pe=c(94999),dt=c(7028),Oe=c(15105),ft=c(64217);function Pe(e,t,n){var o=t;return!o&&n&&(o="".concat(e,"-").concat(n)),o}function $e(e,t){var n=e["page".concat(t?"Y":"X","Offset")],o="scroll".concat(t?"Top":"Left");if(typeof n!="number"){var l=e.document;n=l.documentElement[o],typeof n!="number"&&(n=l.body[o])}return n}function ut(e){var t=e.getBoundingClientRect(),n={left:t.left,top:t.top},o=e.ownerDocument,l=o.defaultView||o.parentWindow;return n.left+=$e(l),n.top+=$e(l,!0),n}var Se=c(82225),mt=c(42550),vt=a.memo(function(e){var t=e.children;return t},function(e,t){var n=t.shouldUpdate;return!n}),Ee={width:0,height:0,overflow:"hidden",outline:"none"},gt=a.forwardRef(function(e,t){var n=e.prefixCls,o=e.className,l=e.style,r=e.title,u=e.ariaId,g=e.footer,i=e.closable,m=e.closeIcon,s=e.onClose,C=e.children,f=e.bodyStyle,y=e.bodyProps,O=e.modalRender,v=e.onMouseDown,p=e.onMouseUp,b=e.holderRef,d=e.visible,x=e.forceRender,P=e.width,$=e.height,h=e.classNames,S=e.styles,Z=a.useContext(he),R=Z.panel,H=(0,mt.x1)(b,R),j=(0,a.useRef)(),X=(0,a.useRef)();a.useImperativeHandle(t,function(){return{focus:function(){var M;(M=j.current)===null||M===void 0||M.focus()},changeActive:function(M){var Q=document,K=Q.activeElement;M&&K===X.current?j.current.focus():!M&&K===j.current&&X.current.focus()}}});var I={};P!==void 0&&(I.width=P),$!==void 0&&(I.height=$);var w;g&&(w=a.createElement("div",{className:z()("".concat(n,"-footer"),h==null?void 0:h.footer),style:(0,N.Z)({},S==null?void 0:S.footer)},g));var F;r&&(F=a.createElement("div",{className:z()("".concat(n,"-header"),h==null?void 0:h.header),style:(0,N.Z)({},S==null?void 0:S.header)},a.createElement("div",{className:"".concat(n,"-title"),id:u},r)));var A;i&&(A=a.createElement("button",{type:"button",onClick:s,"aria-label":"Close",className:"".concat(n,"-close")},m||a.createElement("span",{className:"".concat(n,"-close-x")})));var W=a.createElement("div",{className:z()("".concat(n,"-content"),h==null?void 0:h.content),style:S==null?void 0:S.content},A,F,a.createElement("div",(0,G.Z)({className:z()("".concat(n,"-body"),h==null?void 0:h.body),style:(0,N.Z)((0,N.Z)({},f),S==null?void 0:S.body)},y),C),w);return a.createElement("div",{key:"dialog-element",role:"dialog","aria-labelledby":r?u:null,"aria-modal":"true",ref:H,style:(0,N.Z)((0,N.Z)({},l),I),className:z()(n,o),onMouseDown:v,onMouseUp:p},a.createElement("div",{tabIndex:0,ref:j,style:Ee,"aria-hidden":"true"}),a.createElement(vt,{shouldUpdate:d||x},O?O(W):W),a.createElement("div",{tabIndex:0,ref:X,style:Ee,"aria-hidden":"true"}))}),Te=gt,Ne=a.forwardRef(function(e,t){var n=e.prefixCls,o=e.title,l=e.style,r=e.className,u=e.visible,g=e.forceRender,i=e.destroyOnClose,m=e.motionName,s=e.ariaId,C=e.onVisibleChanged,f=e.mousePosition,y=(0,a.useRef)(),O=a.useState(),v=(0,ae.Z)(O,2),p=v[0],b=v[1],d={};p&&(d.transformOrigin=p);function x(){var P=ut(y.current);b(f?"".concat(f.x-P.left,"px ").concat(f.y-P.top,"px"):"")}return a.createElement(Se.ZP,{visible:u,onVisibleChanged:C,onAppearPrepare:x,onEnterPrepare:x,forceRender:g,motionName:m,removeOnLeave:i,ref:y},function(P,$){var h=P.className,S=P.style;return a.createElement(Te,(0,G.Z)({},e,{ref:t,title:o,ariaId:s,prefixCls:n,holderRef:$,style:(0,N.Z)((0,N.Z)((0,N.Z)({},S),l),d),className:z()(r,h)}))})});Ne.displayName="Content";var Ct=Ne;function bt(e){var t=e.prefixCls,n=e.style,o=e.visible,l=e.maskProps,r=e.motionName,u=e.className;return a.createElement(Se.ZP,{key:"mask",visible:o,motionName:r,leavedClassName:"".concat(t,"-mask-hidden")},function(g,i){var m=g.className,s=g.style;return a.createElement("div",(0,G.Z)({ref:i,style:(0,N.Z)((0,N.Z)({},s),n),className:z()("".concat(t,"-mask"),m,u)},l))})}var vn=c(80334);function yt(e){var t=e.prefixCls,n=t===void 0?"rc-dialog":t,o=e.zIndex,l=e.visible,r=l===void 0?!1:l,u=e.keyboard,g=u===void 0?!0:u,i=e.focusTriggerAfterClose,m=i===void 0?!0:i,s=e.wrapStyle,C=e.wrapClassName,f=e.wrapProps,y=e.onClose,O=e.afterOpenChange,v=e.afterClose,p=e.transitionName,b=e.animation,d=e.closable,x=d===void 0?!0:d,P=e.mask,$=P===void 0?!0:P,h=e.maskTransitionName,S=e.maskAnimation,Z=e.maskClosable,R=Z===void 0?!0:Z,H=e.maskStyle,j=e.maskProps,X=e.rootClassName,I=e.classNames,w=e.styles,F=(0,a.useRef)(),A=(0,a.useRef)(),W=(0,a.useRef)(),k=a.useState(r),M=(0,ae.Z)(k,2),Q=M[0],K=M[1],Y=(0,dt.Z)();function L(){(0,pe.Z)(A.current,document.activeElement)||(F.current=document.activeElement)}function an(){if(!(0,pe.Z)(A.current,document.activeElement)){var T;(T=W.current)===null||T===void 0||T.focus()}}function ln(T){if(T)an();else{if(K(!1),$&&F.current&&m){try{F.current.focus({preventScroll:!0})}catch(de){}F.current=null}Q&&(v==null||v())}O==null||O(T)}function se(T){y==null||y(T)}var ee=(0,a.useRef)(!1),ce=(0,a.useRef)(),rn=function(){clearTimeout(ce.current),ee.current=!0},sn=function(){ce.current=setTimeout(function(){ee.current=!1})},_e=null;R&&(_e=function(de){ee.current?ee.current=!1:A.current===de.target&&se(de)});function cn(T){if(g&&T.keyCode===Oe.Z.ESC){T.stopPropagation(),se(T);return}r&&T.keyCode===Oe.Z.TAB&&W.current.changeActive(!T.shiftKey)}return(0,a.useEffect)(function(){r&&(K(!0),L())},[r]),(0,a.useEffect)(function(){return function(){clearTimeout(ce.current)}},[]),a.createElement("div",(0,G.Z)({className:z()("".concat(n,"-root"),X)},(0,ft.Z)(e,{data:!0})),a.createElement(bt,{prefixCls:n,visible:$&&r,motionName:Pe(n,h,S),style:(0,N.Z)((0,N.Z)({zIndex:o},H),w==null?void 0:w.mask),maskProps:j,className:I==null?void 0:I.mask}),a.createElement("div",(0,G.Z)({tabIndex:-1,onKeyDown:cn,className:z()("".concat(n,"-wrap"),C,I==null?void 0:I.wrapper),ref:A,onClick:_e,style:(0,N.Z)((0,N.Z)((0,N.Z)({zIndex:o},s),w==null?void 0:w.wrapper),{},{display:Q?null:"none"})},f),a.createElement(Ct,(0,G.Z)({},e,{onMouseDown:rn,onMouseUp:sn,ref:W,closable:x,ariaId:Y,prefixCls:n,visible:r&&Q,onClose:se,onVisibleChanged:ln,motionName:Pe(n,p,b)}))))}var Re=function(t){var n=t.visible,o=t.getContainer,l=t.forceRender,r=t.destroyOnClose,u=r===void 0?!1:r,g=t.afterClose,i=t.panelRef,m=a.useState(n),s=(0,ae.Z)(m,2),C=s[0],f=s[1],y=a.useMemo(function(){return{panel:i}},[i]);return a.useEffect(function(){n&&f(!0)},[n]),!l&&u&&!C?null:a.createElement(he.Provider,{value:y},a.createElement(st.Z,{open:n||l||C,autoDestroy:!1,getContainer:o,autoLock:n||C},a.createElement(yt,(0,G.Z)({},t,{destroyOnClose:u,afterClose:function(){g==null||g(),f(!1)}}))))};Re.displayName="Dialog";var xt=Re,ht=xt,pt=c(69760),Ot=c(98924);const Pt=()=>(0,Ot.Z)()&&window.document.documentElement;var $t=c(43945),le=c(53124),St=c(65223),Et=c(4173),Tt=c(16569),Nt=c(98866),Ie=()=>{const{cancelButtonProps:e,cancelTextLocale:t,onCancel:n}=(0,a.useContext)(J);return a.createElement(oe.ZP,Object.assign({onClick:n},e),t)},Be=()=>{const{confirmLoading:e,okButtonProps:t,okType:n,okTextLocale:o,onOk:l}=(0,a.useContext)(J);return a.createElement(oe.ZP,Object.assign({},(0,me.nx)(n),{loading:e,onClick:l},t),o)},je=c(83008);function we(e,t){return a.createElement("span",{className:`${e}-close-x`},t||a.createElement(xe.Z,{className:`${e}-close-icon`}))}const Me=e=>{const{okText:t,okType:n="primary",cancelText:o,confirmLoading:l,onOk:r,onCancel:u,okButtonProps:g,cancelButtonProps:i,footer:m}=e,[s]=(0,ne.Z)("Modal",(0,je.A)()),C=t||(s==null?void 0:s.okText),f=o||(s==null?void 0:s.cancelText),y={confirmLoading:l,okButtonProps:g,cancelButtonProps:i,okTextLocale:C,cancelTextLocale:f,okType:n,onOk:r,onCancel:u},O=a.useMemo(()=>y,(0,D.Z)(Object.values(y)));let v;return typeof m=="function"||typeof m=="undefined"?(v=a.createElement(a.Fragment,null,a.createElement(Ie,null),a.createElement(Be,null)),typeof m=="function"&&(v=m(v,{OkBtn:Be,CancelBtn:Ie})),v=a.createElement(Ce,{value:O},v)):v=m,a.createElement(Nt.n,{disabled:!1},v)};var re=c(14747),E=c(54548),Rt=c(93590);const It=new E.E4("antFadeIn",{"0%":{opacity:0},"100%":{opacity:1}}),Bt=new E.E4("antFadeOut",{"0%":{opacity:1},"100%":{opacity:0}}),jt=function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;const{antCls:n}=e,o=`${n}-fade`,l=t?"&":"";return[(0,Rt.R)(o,It,Bt,e.motionDurationMid,t),{[`
        ${l}${o}-enter,
        ${l}${o}-appear
      `]:{opacity:0,animationTimingFunction:"linear"},[`${l}${o}-leave`]:{animationTimingFunction:"linear"}}]};var wt=c(50438),Mt=c(45503),Ze=c(91945);function ze(e){return{position:e,inset:0}}const Zt=e=>{const{componentCls:t,antCls:n}=e;return[{[`${t}-root`]:{[`${t}${n}-zoom-enter, ${t}${n}-zoom-appear`]:{transform:"none",opacity:0,animationDuration:e.motionDurationSlow,userSelect:"none"},[`${t}${n}-zoom-leave ${t}-content`]:{pointerEvents:"none"},[`${t}-mask`]:Object.assign(Object.assign({},ze("fixed")),{zIndex:e.zIndexPopupBase,height:"100%",backgroundColor:e.colorBgMask,pointerEvents:"none",[`${t}-hidden`]:{display:"none"}}),[`${t}-wrap`]:Object.assign(Object.assign({},ze("fixed")),{zIndex:e.zIndexPopupBase,overflow:"auto",outline:0,WebkitOverflowScrolling:"touch",[`&:has(${t}${n}-zoom-enter), &:has(${t}${n}-zoom-appear)`]:{pointerEvents:"none"}})}},{[`${t}-root`]:jt(e)}]},zt=e=>{const{componentCls:t}=e;return[{[`${t}-root`]:{[`${t}-wrap-rtl`]:{direction:"rtl"},[`${t}-centered`]:{textAlign:"center","&::before":{display:"inline-block",width:0,height:"100%",verticalAlign:"middle",content:'""'},[t]:{top:0,display:"inline-block",paddingBottom:0,textAlign:"start",verticalAlign:"middle"}},[`@media (max-width: ${e.screenSMMax}px)`]:{[t]:{maxWidth:"calc(100vw - 16px)",margin:`${(0,E.bf)(e.marginXS)} auto`},[`${t}-centered`]:{[t]:{flex:1}}}}},{[t]:Object.assign(Object.assign({},(0,re.Wf)(e)),{pointerEvents:"none",position:"relative",top:100,width:"auto",maxWidth:`calc(100vw - ${(0,E.bf)(e.calc(e.margin).mul(2).equal())})`,margin:"0 auto",paddingBottom:e.paddingLG,[`${t}-title`]:{margin:0,color:e.titleColor,fontWeight:e.fontWeightStrong,fontSize:e.titleFontSize,lineHeight:e.titleLineHeight,wordWrap:"break-word"},[`${t}-content`]:{position:"relative",backgroundColor:e.contentBg,backgroundClip:"padding-box",border:0,borderRadius:e.borderRadiusLG,boxShadow:e.boxShadow,pointerEvents:"auto",padding:e.contentPadding},[`${t}-close`]:Object.assign({position:"absolute",top:e.calc(e.modalHeaderHeight).sub(e.modalCloseBtnSize).div(2).equal(),insetInlineEnd:e.calc(e.modalHeaderHeight).sub(e.modalCloseBtnSize).div(2).equal(),zIndex:e.calc(e.zIndexPopupBase).add(10).equal(),padding:0,color:e.modalCloseIconColor,fontWeight:e.fontWeightStrong,lineHeight:1,textDecoration:"none",background:"transparent",borderRadius:e.borderRadiusSM,width:e.modalCloseBtnSize,height:e.modalCloseBtnSize,border:0,outline:0,cursor:"pointer",transition:`color ${e.motionDurationMid}, background-color ${e.motionDurationMid}`,"&-x":{display:"flex",fontSize:e.fontSizeLG,fontStyle:"normal",lineHeight:`${(0,E.bf)(e.modalCloseBtnSize)}`,justifyContent:"center",textTransform:"none",textRendering:"auto"},"&:hover":{color:e.modalIconHoverColor,backgroundColor:e.closeBtnHoverBg,textDecoration:"none"},"&:active":{backgroundColor:e.closeBtnActiveBg}},(0,re.Qy)(e)),[`${t}-header`]:{color:e.colorText,background:e.headerBg,borderRadius:`${(0,E.bf)(e.borderRadiusLG)} ${(0,E.bf)(e.borderRadiusLG)} 0 0`,marginBottom:e.headerMarginBottom,padding:e.headerPadding,borderBottom:e.headerBorderBottom},[`${t}-body`]:{fontSize:e.fontSize,lineHeight:e.lineHeight,wordWrap:"break-word",padding:e.bodyPadding},[`${t}-footer`]:{textAlign:"end",background:e.footerBg,marginTop:e.footerMarginTop,padding:e.footerPadding,borderTop:e.footerBorderTop,borderRadius:e.footerBorderRadius,[`> ${e.antCls}-btn + ${e.antCls}-btn`]:{marginInlineStart:e.marginXS}},[`${t}-open`]:{overflow:"hidden"}})},{[`${t}-pure-panel`]:{top:"auto",padding:0,display:"flex",flexDirection:"column",[`${t}-content,
          ${t}-body,
          ${t}-confirm-body-wrapper`]:{display:"flex",flexDirection:"column",flex:"auto"},[`${t}-confirm-body`]:{marginBottom:"auto"}}}]},Ht=e=>{const{componentCls:t}=e;return{[`${t}-root`]:{[`${t}-wrap-rtl`]:{direction:"rtl",[`${t}-confirm-body`]:{direction:"rtl"}}}}},He=e=>{const t=e.padding,n=e.fontSizeHeading5,o=e.lineHeightHeading5;return(0,Mt.TS)(e,{modalHeaderHeight:e.calc(e.calc(o).mul(n).equal()).add(e.calc(t).mul(2).equal()).equal(),modalFooterBorderColorSplit:e.colorSplit,modalFooterBorderStyle:e.lineType,modalFooterBorderWidth:e.lineWidth,modalIconHoverColor:e.colorIconHover,modalCloseIconColor:e.colorIcon,modalCloseBtnSize:e.fontHeight,modalConfirmIconSize:e.fontHeight,modalTitleHeight:e.calc(e.titleFontSize).mul(e.titleLineHeight).equal()})},Fe=e=>({footerBg:"transparent",headerBg:e.colorBgElevated,titleLineHeight:e.lineHeightHeading5,titleFontSize:e.fontSizeHeading5,contentBg:e.colorBgElevated,titleColor:e.colorTextHeading,closeBtnHoverBg:e.wireframe?"transparent":e.colorFillContent,closeBtnActiveBg:e.wireframe?"transparent":e.colorFillContentHover,contentPadding:e.wireframe?0:`${(0,E.bf)(e.paddingMD)} ${(0,E.bf)(e.paddingContentHorizontalLG)}`,headerPadding:e.wireframe?`${(0,E.bf)(e.padding)} ${(0,E.bf)(e.paddingLG)}`:0,headerBorderBottom:e.wireframe?`${(0,E.bf)(e.lineWidth)} ${e.lineType} ${e.colorSplit}`:"none",headerMarginBottom:e.wireframe?0:e.marginXS,bodyPadding:e.wireframe?e.paddingLG:0,footerPadding:e.wireframe?`${(0,E.bf)(e.paddingXS)} ${(0,E.bf)(e.padding)}`:0,footerBorderTop:e.wireframe?`${(0,E.bf)(e.lineWidth)} ${e.lineType} ${e.colorSplit}`:"none",footerBorderRadius:e.wireframe?`0 0 ${(0,E.bf)(e.borderRadiusLG)} ${(0,E.bf)(e.borderRadiusLG)}`:0,footerMarginTop:e.wireframe?0:e.marginSM,confirmBodyPadding:e.wireframe?`${(0,E.bf)(e.padding*2)} ${(0,E.bf)(e.padding*2)} ${(0,E.bf)(e.paddingLG)}`:0,confirmIconMarginInlineEnd:e.wireframe?e.margin:e.marginSM,confirmBtnsMarginTop:e.wireframe?e.marginLG:e.marginSM});var Ae=(0,Ze.I$)("Modal",e=>{const t=He(e);return[zt(t),Ht(t),Zt(t),(0,wt._y)(t,"zoom")]},Fe,{unitless:{titleLineHeight:!0}}),Le=c(35792),Ft=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,o=Object.getOwnPropertySymbols(e);l<o.length;l++)t.indexOf(o[l])<0&&Object.prototype.propertyIsEnumerable.call(e,o[l])&&(n[o[l]]=e[o[l]]);return n};let ie;const At=e=>{ie={x:e.pageX,y:e.pageY},setTimeout(()=>{ie=null},100)};Pt()&&document.documentElement.addEventListener("click",At,!0);var De=e=>{var t;const{getPopupContainer:n,getPrefixCls:o,direction:l,modal:r}=a.useContext(le.E_),u=Y=>{const{onCancel:L}=e;L==null||L(Y)},g=Y=>{const{onOk:L}=e;L==null||L(Y)},{prefixCls:i,className:m,rootClassName:s,open:C,wrapClassName:f,centered:y,getContainer:O,closeIcon:v,closable:p,focusTriggerAfterClose:b=!0,style:d,visible:x,width:P=520,footer:$,classNames:h,styles:S}=e,Z=Ft(e,["prefixCls","className","rootClassName","open","wrapClassName","centered","getContainer","closeIcon","closable","focusTriggerAfterClose","style","visible","width","footer","classNames","styles"]),R=o("modal",i),H=o(),j=(0,Le.Z)(R),[X,I,w]=Ae(R,j),F=V()(f,{[`${R}-centered`]:!!y,[`${R}-wrap-rtl`]:l==="rtl"}),A=$!==null&&a.createElement(Me,Object.assign({},e,{onOk:g,onCancel:u})),[W,k]=(0,pt.Z)(p,v,Y=>we(R,Y),a.createElement(xe.Z,{className:`${R}-close-icon`}),!0),M=(0,Tt.H)(`.${R}-content`),[Q,K]=(0,ue.Cn)("Modal",Z.zIndex);return X(a.createElement(Et.BR,null,a.createElement(St.Ux,{status:!0,override:!0},a.createElement($t.Z.Provider,{value:K},a.createElement(ht,Object.assign({width:P},Z,{zIndex:Q,getContainer:O===void 0?n:O,prefixCls:R,rootClassName:V()(I,s,w,j),footer:A,visible:C!=null?C:x,mousePosition:(t=Z.mousePosition)!==null&&t!==void 0?t:ie,onClose:u,closable:W,closeIcon:k,focusTriggerAfterClose:b,transitionName:(0,_.m)(H,"zoom",e.transitionName),maskTransitionName:(0,_.m)(H,"fade",e.maskTransitionName),className:V()(I,m,r==null?void 0:r.className),style:Object.assign(Object.assign({},r==null?void 0:r.style),d),classNames:Object.assign(Object.assign({wrapper:F},r==null?void 0:r.classNames),h),styles:Object.assign(Object.assign({},r==null?void 0:r.styles),S),panelRef:M}))))))};const Lt=e=>{const{componentCls:t,titleFontSize:n,titleLineHeight:o,modalConfirmIconSize:l,fontSize:r,lineHeight:u,modalTitleHeight:g,fontHeight:i,confirmBodyPadding:m}=e,s=`${t}-confirm`;return{[s]:{"&-rtl":{direction:"rtl"},[`${e.antCls}-modal-header`]:{display:"none"},[`${s}-body-wrapper`]:Object.assign({},(0,re.dF)()),[`&${t} ${t}-body`]:{padding:m},[`${s}-body`]:{display:"flex",flexWrap:"nowrap",alignItems:"start",[`> ${e.iconCls}`]:{flex:"none",fontSize:l,marginInlineEnd:e.confirmIconMarginInlineEnd,marginTop:e.calc(e.calc(i).sub(l).equal()).div(2).equal()},[`&-has-title > ${e.iconCls}`]:{marginTop:e.calc(e.calc(g).sub(l).equal()).div(2).equal()}},[`${s}-paragraph`]:{display:"flex",flexDirection:"column",flex:"auto",rowGap:e.marginXS,maxWidth:`calc(100% - ${(0,E.bf)(e.calc(e.modalConfirmIconSize).add(e.marginSM).equal())})`},[`${s}-title`]:{color:e.colorTextHeading,fontWeight:e.fontWeightStrong,fontSize:n,lineHeight:o},[`${s}-content`]:{color:e.colorText,fontSize:r,lineHeight:u},[`${s}-btns`]:{textAlign:"end",marginTop:e.confirmBtnsMarginTop,[`${e.antCls}-btn + ${e.antCls}-btn`]:{marginBottom:0,marginInlineStart:e.marginXS}}},[`${s}-error ${s}-body > ${e.iconCls}`]:{color:e.colorError},[`${s}-warning ${s}-body > ${e.iconCls},
        ${s}-confirm ${s}-body > ${e.iconCls}`]:{color:e.colorWarning},[`${s}-info ${s}-body > ${e.iconCls}`]:{color:e.colorInfo},[`${s}-success ${s}-body > ${e.iconCls}`]:{color:e.colorSuccess}}};var Dt=(0,Ze.bk)(["Modal","confirm"],e=>{const t=He(e);return[Lt(t)]},Fe,{order:-1e3}),Wt=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,o=Object.getOwnPropertySymbols(e);l<o.length;l++)t.indexOf(o[l])<0&&Object.prototype.propertyIsEnumerable.call(e,o[l])&&(n[o[l]]=e[o[l]]);return n};function We(e){const{prefixCls:t,icon:n,okText:o,cancelText:l,confirmPrefixCls:r,type:u,okCancel:g,footer:i,locale:m}=e,s=Wt(e,["prefixCls","icon","okText","cancelText","confirmPrefixCls","type","okCancel","footer","locale"]);let C=n;if(!n&&n!==null)switch(u){case"info":C=a.createElement(at.Z,null);break;case"success":C=a.createElement(tt.Z,null);break;case"error":C=a.createElement(nt.Z,null);break;default:C=a.createElement(ot.Z,null)}const f=g!=null?g:u==="confirm",y=e.autoFocusButton===null?!1:e.autoFocusButton||"ok",[O]=(0,ne.Z)("Modal"),v=m||O,p=o||(f?v==null?void 0:v.okText:v==null?void 0:v.justOkText),b=l||(v==null?void 0:v.cancelText),d=Object.assign({autoFocusButton:y,cancelTextLocale:b,okTextLocale:p,mergedOkCancel:f},s),x=a.useMemo(()=>d,(0,D.Z)(Object.values(d))),P=a.createElement(a.Fragment,null,a.createElement(be,null),a.createElement(ye,null)),$=e.title!==void 0&&e.title!==null,h=`${r}-body`;return a.createElement("div",{className:`${r}-body-wrapper`},a.createElement("div",{className:V()(h,{[`${h}-has-title`]:$})},C,a.createElement("div",{className:`${r}-paragraph`},$&&a.createElement("span",{className:`${r}-title`},e.title),a.createElement("div",{className:`${r}-content`},e.content))),i===void 0||typeof i=="function"?a.createElement(Ce,{value:x},a.createElement("div",{className:`${r}-btns`},typeof i=="function"?i(P,{OkBtn:ye,CancelBtn:be}):P)):i,a.createElement(Dt,{prefixCls:t}))}const Vt=e=>{const{close:t,zIndex:n,afterClose:o,open:l,keyboard:r,centered:u,getContainer:g,maskStyle:i,direction:m,prefixCls:s,wrapClassName:C,rootPrefixCls:f,bodyStyle:y,closable:O=!1,closeIcon:v,modalRender:p,focusTriggerAfterClose:b,onConfirm:d,styles:x}=e,P=`${s}-confirm`,$=e.width||416,h=e.style||{},S=e.mask===void 0?!0:e.mask,Z=e.maskClosable===void 0?!1:e.maskClosable,R=V()(P,`${P}-${e.type}`,{[`${P}-rtl`]:m==="rtl"},e.className),[,H]=(0,rt.ZP)(),j=a.useMemo(()=>n!==void 0?n:H.zIndexPopupBase+ue.u6,[n,H]);return a.createElement(De,{prefixCls:s,className:R,wrapClassName:V()({[`${P}-centered`]:!!e.centered},C),onCancel:()=>{t==null||t({triggerCancel:!0}),d==null||d(!1)},open:l,title:"",footer:null,transitionName:(0,_.m)(f||"","zoom",e.transitionName),maskTransitionName:(0,_.m)(f||"","fade",e.maskTransitionName),mask:S,maskClosable:Z,style:h,styles:Object.assign({body:y,mask:i},x),width:$,zIndex:j,afterClose:o,keyboard:r,centered:u,getContainer:g,closable:O,closeIcon:v,modalRender:p,focusTriggerAfterClose:b},a.createElement(We,Object.assign({},e,{confirmPrefixCls:P})))};var Ve=e=>{const{rootPrefixCls:t,iconPrefixCls:n,direction:o,theme:l}=e;return a.createElement(te.ZP,{prefixCls:t,iconPrefixCls:n,direction:o,theme:l},a.createElement(Vt,Object.assign({},e)))},U=[],Gt=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,o=Object.getOwnPropertySymbols(e);l<o.length;l++)t.indexOf(o[l])<0&&Object.prototype.propertyIsEnumerable.call(e,o[l])&&(n[o[l]]=e[o[l]]);return n};let Ge="";function Ut(){return Ge}function q(e){const t=document.createDocumentFragment();let n=Object.assign(Object.assign({},e),{close:u,open:!0}),o;function l(){for(var i=arguments.length,m=new Array(i),s=0;s<i;s++)m[s]=arguments[s];const C=m.some(f=>f&&f.triggerCancel);e.onCancel&&C&&e.onCancel.apply(e,[()=>{}].concat((0,D.Z)(m.slice(1))));for(let f=0;f<U.length;f++)if(U[f]===u){U.splice(f,1);break}(0,fe.v)(t)}function r(i){var{okText:m,cancelText:s,prefixCls:C,getContainer:f}=i,y=Gt(i,["okText","cancelText","prefixCls","getContainer"]);clearTimeout(o),o=setTimeout(()=>{const O=(0,je.A)(),{getPrefixCls:v,getIconPrefixCls:p,getTheme:b}=(0,te.w6)(),d=v(void 0,Ut()),x=C||`${d}-modal`,P=p(),$=b();let h=f;h===!1&&(h=void 0),(0,fe.s)(a.createElement(Ve,Object.assign({},y,{getContainer:h,prefixCls:x,rootPrefixCls:d,iconPrefixCls:P,okText:m,locale:O,theme:$,cancelText:s||O.cancelText})),t)})}function u(){for(var i=arguments.length,m=new Array(i),s=0;s<i;s++)m[s]=arguments[s];n=Object.assign(Object.assign({},n),{open:!1,afterClose:()=>{typeof e.afterClose=="function"&&e.afterClose(),l.apply(this,m)}}),n.visible&&delete n.visible,r(n)}function g(i){typeof i=="function"?n=i(n):n=Object.assign(Object.assign({},n),i),r(n)}return r(n),U.push(u),{destroy:u,update:g}}function Ue(e){return Object.assign(Object.assign({},e),{type:"warning"})}function Xe(e){return Object.assign(Object.assign({},e),{type:"info"})}function Qe(e){return Object.assign(Object.assign({},e),{type:"success"})}function Ke(e){return Object.assign(Object.assign({},e),{type:"error"})}function Ye(e){return Object.assign(Object.assign({},e),{type:"confirm"})}function Xt(e){let{rootPrefixCls:t}=e;Ge=t}var hn=c(21770);function Je(e){return t=>a.createElement(te.ZP,{theme:{token:{motion:!1,zIndexPopupBase:0}}},a.createElement(e,Object.assign({},t)))}const pn=(e,t,n,o)=>Je(r=>{const{prefixCls:u,style:g}=r,i=React.useRef(null),[m,s]=React.useState(0),[C,f]=React.useState(0),[y,O]=useMergedState(!1,{value:r.open}),{getPrefixCls:v}=React.useContext(ConfigContext),p=v(t||"select",u);React.useEffect(()=>{if(O(!0),typeof ResizeObserver!="undefined"){const x=new ResizeObserver($=>{const h=$[0].target;s(h.offsetHeight+8),f(h.offsetWidth)}),P=setInterval(()=>{var $;const h=n?`.${n(p)}`:`.${p}-dropdown`,S=($=i.current)===null||$===void 0?void 0:$.querySelector(h);S&&(clearInterval(P),x.observe(S))},10);return()=>{clearInterval(P),x.disconnect()}}},[]);let b=Object.assign(Object.assign({},r),{style:Object.assign(Object.assign({},g),{margin:0}),open:y,visible:y,getPopupContainer:()=>i.current});o&&(b=o(b));const d={paddingBottom:m,position:"relative",minWidth:C};return React.createElement("div",{ref:i,style:d},React.createElement(e,Object.assign({},b)))});var On=null,Qt=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,o=Object.getOwnPropertySymbols(e);l<o.length;l++)t.indexOf(o[l])<0&&Object.prototype.propertyIsEnumerable.call(e,o[l])&&(n[o[l]]=e[o[l]]);return n},Kt=Je(e=>{const{prefixCls:t,className:n,closeIcon:o,closable:l,type:r,title:u,children:g,footer:i}=e,m=Qt(e,["prefixCls","className","closeIcon","closable","type","title","children","footer"]),{getPrefixCls:s}=a.useContext(le.E_),C=s(),f=t||s("modal"),y=(0,Le.Z)(C),[O,v,p]=Ae(f,y),b=`${f}-confirm`;let d={};return r?d={closable:l!=null?l:!1,title:"",footer:"",children:a.createElement(We,Object.assign({},e,{prefixCls:f,confirmPrefixCls:b,rootPrefixCls:C,content:g}))}:d={closable:l!=null?l:!0,title:u,footer:i!==null&&a.createElement(Me,Object.assign({},e)),children:g},O(a.createElement(Te,Object.assign({prefixCls:f,className:V()(v,`${f}-pure-panel`,r&&b,r&&`${b}-${r}`,n,p,y)},m,{closeIcon:we(f,o),closable:l},d)))});function Yt(){const[e,t]=a.useState([]),n=a.useCallback(o=>(t(l=>[].concat((0,D.Z)(l),[o])),()=>{t(l=>l.filter(r=>r!==o))}),[]);return[e,n]}var Jt=c(81570),qt=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,o=Object.getOwnPropertySymbols(e);l<o.length;l++)t.indexOf(o[l])<0&&Object.prototype.propertyIsEnumerable.call(e,o[l])&&(n[o[l]]=e[o[l]]);return n};const kt=(e,t)=>{var n,{afterClose:o,config:l}=e,r=qt(e,["afterClose","config"]);const[u,g]=a.useState(!0),[i,m]=a.useState(l),{direction:s,getPrefixCls:C}=a.useContext(le.E_),f=C("modal"),y=C(),O=()=>{var d;o(),(d=i.afterClose)===null||d===void 0||d.call(i)},v=function(){g(!1);for(var d=arguments.length,x=new Array(d),P=0;P<d;P++)x[P]=arguments[P];const $=x.some(h=>h&&h.triggerCancel);i.onCancel&&$&&i.onCancel.apply(i,[()=>{}].concat((0,D.Z)(x.slice(1))))};a.useImperativeHandle(t,()=>({destroy:v,update:d=>{m(x=>Object.assign(Object.assign({},x),d))}}));const p=(n=i.okCancel)!==null&&n!==void 0?n:i.type==="confirm",[b]=(0,ne.Z)("Modal",Jt.Z.Modal);return a.createElement(Ve,Object.assign({prefixCls:f,rootPrefixCls:y},i,{close:v,open:u,afterClose:O,okText:i.okText||(p?b==null?void 0:b.okText:b==null?void 0:b.justOkText),direction:i.direction||s,cancelText:i.cancelText||(b==null?void 0:b.cancelText)},r))};var _t=a.forwardRef(kt);let qe=0;const en=a.memo(a.forwardRef((e,t)=>{const[n,o]=Yt();return a.useImperativeHandle(t,()=>({patchElement:o}),[]),a.createElement(a.Fragment,null,n)}));function tn(){const e=a.useRef(null),[t,n]=a.useState([]);a.useEffect(()=>{t.length&&((0,D.Z)(t).forEach(u=>{u()}),n([]))},[t]);const o=a.useCallback(r=>function(g){var i;qe+=1;const m=a.createRef();let s;const C=new Promise(p=>{s=p});let f=!1,y;const O=a.createElement(_t,{key:`modal-${qe}`,config:r(g),ref:m,afterClose:()=>{y==null||y()},isSilent:()=>f,onConfirm:p=>{s(p)}});return y=(i=e.current)===null||i===void 0?void 0:i.patchElement(O),y&&U.push(y),{destroy:()=>{function p(){var b;(b=m.current)===null||b===void 0||b.destroy()}m.current?p():n(b=>[].concat((0,D.Z)(b),[p]))},update:p=>{function b(){var d;(d=m.current)===null||d===void 0||d.update(p)}m.current?b():n(d=>[].concat((0,D.Z)(d),[b]))},then:p=>(f=!0,C.then(p))}},[]);return[a.useMemo(()=>({info:o(Xe),success:o(Qe),error:o(Ke),warning:o(Ue),confirm:o(Ye)}),[]),a.createElement(en,{key:"modal-holder",ref:e})]}var nn=tn;function ke(e){return q(Ue(e))}const B=De;B.useModal=nn,B.info=function(t){return q(Xe(t))},B.success=function(t){return q(Qe(t))},B.error=function(t){return q(Ke(t))},B.warning=ke,B.warn=ke,B.confirm=function(t){return q(Ye(t))},B.destroyAll=function(){for(;U.length;){const t=U.pop();t&&t()}},B.config=Xt,B._InternalPanelDoNotUseOrYouWillBeFired=Kt;var on=B}}]);
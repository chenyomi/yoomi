import{s as B,aR as Oe,Y as j,aZ as st,x as K,aj as le,aK as se,z as _,aL as ie,a_ as it,W as Me,T as V,D as N,e as r,aa as M,aW as Q,aI as ve,ab as fe,ao as me,a$ as ot,ac as ye,a7 as Te,aJ as ut,at as _e,B as rt,bb as ge,b3 as De,ae as be,au as he,af as pe,bc as ct,ax as ee,b0 as dt,a8 as Fe,c as g,am as te,av as Ge,b5 as Ee,N as $,ag as T,an as $e,R as ne,X as z,i as W,A as F,U as X,bd as R,a as x,be as je,aY as vt,aA as Ke,o as ft,a2 as mt,y as yt,v as Ne,F as Re,C as Ue,bf as gt,a9 as bt,aX as O,az as Se,ad as ht,bg as re,n as pt,aF as we,bh as St}from"./index-a2eabe8b.js";import{g as Ct,h as kt,f as Vt}from"./VInput-d192d255.js";import{V as ae,c as ze}from"./VAvatar-2b5e6595.js";import{M as It}from"./VImg-52e65ea0.js";import{V as At}from"./VDivider-f5717089.js";import{m as wt,a as Pt,u as Lt,b as Pe,V as Le}from"./VOverlay-6b227702.js";const He=Symbol.for("vuetify:v-chip-group"),Bt=B({column:Boolean,filter:Boolean,valueComparator:{type:Function,default:Oe},...j(),...st({selectedClass:"v-chip--selected"}),...K(),...le(),...se({variant:"tonal"})},"VChipGroup");_()({name:"VChipGroup",props:Bt(),emits:{"update:modelValue":e=>!0},setup(e,s){let{slots:t}=s;const{themeClasses:n}=ie(e),{isSelected:l,select:a,next:i,prev:o,selected:y}=it(e,He);return Me({VChip:{color:V(e,"color"),disabled:V(e,"disabled"),filter:V(e,"filter"),variant:V(e,"variant")}}),N(()=>r(e.tag,{class:["v-chip-group",{"v-chip-group--column":e.column},n.value,e.class],style:e.style},{default:()=>{var b;return[(b=t.default)==null?void 0:b.call(t,{isSelected:l,select:a,next:i,prev:o,selected:y.value})]}})),{}}});const xt=B({activeClass:String,appendAvatar:String,appendIcon:M,closable:Boolean,closeIcon:{type:M,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:{type:Boolean,default:void 0},pill:Boolean,prependAvatar:String,prependIcon:M,ripple:{type:[Boolean,Object],default:!0},text:String,modelValue:{type:Boolean,default:!0},onClick:Q(),onClickOnce:Q(),...ve(),...j(),...fe(),...me(),...ot(),...ye(),...Te(),...ut(),...K({tag:"span"}),...le(),...se({variant:"tonal"})},"VChip"),on=_()({name:"VChip",directives:{Ripple:_e},props:xt(),emits:{"click:close":e=>!0,"update:modelValue":e=>!0,"group:selected":e=>!0,click:e=>!0},setup(e,s){let{attrs:t,emit:n,slots:l}=s;const{t:a}=rt(),{borderClasses:i}=ge(e),{colorClasses:o,colorStyles:y,variantClasses:b}=De(e),{densityClasses:p}=be(e),{elevationClasses:u}=he(e),{roundedClasses:v}=pe(e),{sizeClasses:m}=ct(e),{themeClasses:f}=ie(e),d=ee(e,"modelValue"),c=dt(e,He,!1),h=Fe(e,t),k=g(()=>e.link!==!1&&h.isLink.value),S=g(()=>!e.disabled&&e.link!==!1&&(!!c||e.link||h.isClickable.value)),L=g(()=>({"aria-label":a(e.closeLabel),onClick(I){I.stopPropagation(),d.value=!1,n("click:close",I)}}));function D(I){var w;n("click",I),S.value&&((w=h.navigate)==null||w.call(h,I),c==null||c.toggle())}function U(I){(I.key==="Enter"||I.key===" ")&&(I.preventDefault(),D(I))}return()=>{const I=h.isLink.value?"a":e.tag,w=!!(e.appendIcon||e.appendAvatar),A=!!(w||l.append),G=!!(l.close||e.closable),q=!!(l.filter||e.filter)&&c,Y=!!(e.prependIcon||e.prependAvatar),oe=!!(Y||l.prepend),J=!c||c.isSelected.value;return d.value&&te(r(I,{class:["v-chip",{"v-chip--disabled":e.disabled,"v-chip--label":e.label,"v-chip--link":S.value,"v-chip--filter":q,"v-chip--pill":e.pill},f.value,i.value,J?o.value:void 0,p.value,u.value,v.value,m.value,b.value,c==null?void 0:c.selectedClass.value,e.class],style:[J?y.value:void 0,e.style],disabled:e.disabled||void 0,draggable:e.draggable,href:h.href.value,tabindex:S.value?0:void 0,onClick:D,onKeydown:S.value&&!k.value&&U},{default:()=>{var E;return[Ee(S.value,"v-chip"),q&&r(Ct,{key:"filter"},{default:()=>[te(r("div",{class:"v-chip__filter"},[l.filter?r(T,{key:"filter-defaults",disabled:!e.filterIcon,defaults:{VIcon:{icon:e.filterIcon}}},l.filter):r($,{key:"filter-icon",icon:e.filterIcon},null)]),[[$e,c.isSelected.value]])]}),oe&&r("div",{key:"prepend",class:"v-chip__prepend"},[l.prepend?r(T,{key:"prepend-defaults",disabled:!Y,defaults:{VAvatar:{image:e.prependAvatar,start:!0},VIcon:{icon:e.prependIcon,start:!0}}},l.prepend):r(ne,null,[e.prependIcon&&r($,{key:"prepend-icon",icon:e.prependIcon,start:!0},null),e.prependAvatar&&r(ae,{key:"prepend-avatar",image:e.prependAvatar,start:!0},null)])]),r("div",{class:"v-chip__content"},[((E=l.default)==null?void 0:E.call(l,{isSelected:c==null?void 0:c.isSelected.value,selectedClass:c==null?void 0:c.selectedClass.value,select:c==null?void 0:c.select,toggle:c==null?void 0:c.toggle,value:c==null?void 0:c.value.value,disabled:e.disabled}))??e.text]),A&&r("div",{key:"append",class:"v-chip__append"},[l.append?r(T,{key:"append-defaults",disabled:!w,defaults:{VAvatar:{end:!0,image:e.appendAvatar},VIcon:{end:!0,icon:e.appendIcon}}},l.append):r(ne,null,[e.appendIcon&&r($,{key:"append-icon",end:!0,icon:e.appendIcon},null),e.appendAvatar&&r(ae,{key:"append-avatar",end:!0,image:e.appendAvatar},null)])]),G&&r("button",z({key:"close",class:"v-chip__close"},L.value),[l.close?r(T,{key:"close-defaults",defaults:{VIcon:{icon:e.closeIcon,size:"x-small"}}},l.close):r($,{key:"close-icon",icon:e.closeIcon,size:"x-small"},null)])]}}),[[Ge("ripple"),S.value&&e.ripple,null]])}}});const ce=Symbol.for("vuetify:list");function We(){const e=W(ce,{hasPrepend:F(!1),updateHasPrepend:()=>null}),s={hasPrepend:F(!1),updateHasPrepend:t=>{t&&(s.hasPrepend.value=t)}};return X(ce,s),e}function Xe(){return W(ce,null)}const Ot={open:e=>{let{id:s,value:t,opened:n,parents:l}=e;if(t){const a=new Set;a.add(s);let i=l.get(s);for(;i!=null;)a.add(i),i=l.get(i);return a}else return n.delete(s),n},select:()=>null},qe={open:e=>{let{id:s,value:t,opened:n,parents:l}=e;if(t){let a=l.get(s);for(n.add(s);a!=null&&a!==s;)n.add(a),a=l.get(a);return n}else n.delete(s);return n},select:()=>null},Mt={open:qe.open,select:e=>{let{id:s,value:t,opened:n,parents:l}=e;if(!t)return n;const a=[];let i=l.get(s);for(;i!=null;)a.push(i),i=l.get(i);return new Set(a)}},Ce=e=>{const s={select:t=>{let{id:n,value:l,selected:a}=t;if(n=R(n),e&&!l){const i=Array.from(a.entries()).reduce((o,y)=>{let[b,p]=y;return p==="on"?[...o,b]:o},[]);if(i.length===1&&i[0]===n)return a}return a.set(n,l?"on":"off"),a},in:(t,n,l)=>{let a=new Map;for(const i of t||[])a=s.select({id:i,value:!0,selected:new Map(a),children:n,parents:l});return a},out:t=>{const n=[];for(const[l,a]of t.entries())a==="on"&&n.push(l);return n}};return s},Ye=e=>{const s=Ce(e);return{select:n=>{let{selected:l,id:a,...i}=n;a=R(a);const o=l.has(a)?new Map([[a,l.get(a)]]):new Map;return s.select({...i,id:a,selected:o})},in:(n,l,a)=>{let i=new Map;return n!=null&&n.length&&(i=s.in(n.slice(0,1),l,a)),i},out:(n,l,a)=>s.out(n,l,a)}},Tt=e=>{const s=Ce(e);return{select:n=>{let{id:l,selected:a,children:i,...o}=n;return l=R(l),i.has(l)?a:s.select({id:l,selected:a,children:i,...o})},in:s.in,out:s.out}},_t=e=>{const s=Ye(e);return{select:n=>{let{id:l,selected:a,children:i,...o}=n;return l=R(l),i.has(l)?a:s.select({id:l,selected:a,children:i,...o})},in:s.in,out:s.out}},Dt=e=>{const s={select:t=>{let{id:n,value:l,selected:a,children:i,parents:o}=t;n=R(n);const y=new Map(a),b=[n];for(;b.length;){const u=b.shift();a.set(u,l?"on":"off"),i.has(u)&&b.push(...i.get(u))}let p=o.get(n);for(;p;){const u=i.get(p),v=u.every(f=>a.get(f)==="on"),m=u.every(f=>!a.has(f)||a.get(f)==="off");a.set(p,v?"on":m?"off":"indeterminate"),p=o.get(p)}return e&&!l&&Array.from(a.entries()).reduce((v,m)=>{let[f,d]=m;return d==="on"?[...v,f]:v},[]).length===0?y:a},in:(t,n,l)=>{let a=new Map;for(const i of t||[])a=s.select({id:i,value:!0,selected:new Map(a),children:n,parents:l});return a},out:(t,n)=>{const l=[];for(const[a,i]of t.entries())i==="on"&&!n.has(a)&&l.push(a);return l}};return s},H=Symbol.for("vuetify:nested"),Je={id:F(),root:{register:()=>null,unregister:()=>null,parents:x(new Map),children:x(new Map),open:()=>null,openOnSelect:()=>null,select:()=>null,opened:x(new Set),selected:x(new Map),selectedValues:x([])}},Ft=B({selectStrategy:[String,Function],openStrategy:[String,Object],opened:Array,selected:Array,mandatory:Boolean},"nested"),Gt=e=>{let s=!1;const t=x(new Map),n=x(new Map),l=ee(e,"opened",e.opened,u=>new Set(u),u=>[...u.values()]),a=g(()=>{if(typeof e.selectStrategy=="object")return e.selectStrategy;switch(e.selectStrategy){case"single-leaf":return _t(e.mandatory);case"leaf":return Tt(e.mandatory);case"independent":return Ce(e.mandatory);case"single-independent":return Ye(e.mandatory);case"classic":default:return Dt(e.mandatory)}}),i=g(()=>{if(typeof e.openStrategy=="object")return e.openStrategy;switch(e.openStrategy){case"list":return Mt;case"single":return Ot;case"multiple":default:return qe}}),o=ee(e,"selected",e.selected,u=>a.value.in(u,t.value,n.value),u=>a.value.out(u,t.value,n.value));je(()=>{s=!0});function y(u){const v=[];let m=u;for(;m!=null;)v.unshift(m),m=n.value.get(m);return v}const b=vt("nested"),p={id:F(),root:{opened:l,selected:o,selectedValues:g(()=>{const u=[];for(const[v,m]of o.value.entries())m==="on"&&u.push(v);return u}),register:(u,v,m)=>{v&&u!==v&&n.value.set(u,v),m&&t.value.set(u,[]),v!=null&&t.value.set(v,[...t.value.get(v)||[],u])},unregister:u=>{if(s)return;t.value.delete(u);const v=n.value.get(u);if(v){const m=t.value.get(v)??[];t.value.set(v,m.filter(f=>f!==u))}n.value.delete(u),l.value.delete(u)},open:(u,v,m)=>{b.emit("click:open",{id:u,value:v,path:y(u),event:m});const f=i.value.open({id:u,value:v,opened:new Set(l.value),children:t.value,parents:n.value,event:m});f&&(l.value=f)},openOnSelect:(u,v,m)=>{const f=i.value.select({id:u,value:v,selected:new Map(o.value),opened:new Set(l.value),children:t.value,parents:n.value,event:m});f&&(l.value=f)},select:(u,v,m)=>{b.emit("click:select",{id:u,value:v,path:y(u),event:m});const f=a.value.select({id:u,value:v,selected:new Map(o.value),children:t.value,parents:n.value,event:m});f&&(o.value=f),p.root.openOnSelect(u,v,m)},children:t,parents:n}};return X(H,p),p.root},Ze=(e,s)=>{const t=W(H,Je),n=Symbol(Ke()),l=g(()=>e.value!==void 0?e.value:n),a={...t,id:l,open:(i,o)=>t.root.open(l.value,i,o),openOnSelect:(i,o)=>t.root.openOnSelect(l.value,i,o),isOpen:g(()=>t.root.opened.value.has(l.value)),parent:g(()=>t.root.parents.value.get(l.value)),select:(i,o)=>t.root.select(l.value,i,o),isSelected:g(()=>t.root.selected.value.get(R(l.value))==="on"),isIndeterminate:g(()=>t.root.selected.value.get(l.value)==="indeterminate"),isLeaf:g(()=>!t.root.children.value.get(l.value)),isGroupActivator:t.isGroupActivator};return!t.isGroupActivator&&t.root.register(l.value,t.id.value,s),je(()=>{!t.isGroupActivator&&t.root.unregister(l.value)}),s&&X(H,a),a},Et=()=>{const e=W(H,Je);X(H,{...e,isGroupActivator:!0})};function $t(){const e=F(!1);return ft(()=>{window.requestAnimationFrame(()=>{e.value=!0})}),{ssrBootStyles:g(()=>e.value?void 0:{transition:"none !important"}),isBooted:mt(e)}}const jt=yt({name:"VListGroupActivator",setup(e,s){let{slots:t}=s;return Et(),()=>{var n;return(n=t.default)==null?void 0:n.call(t)}}}),Kt=B({activeColor:String,baseColor:String,color:String,collapseIcon:{type:M,default:"$collapse"},expandIcon:{type:M,default:"$expand"},prependIcon:M,appendIcon:M,fluid:Boolean,subgroup:Boolean,title:String,value:null,...j(),...K()},"VListGroup"),Be=_()({name:"VListGroup",props:Kt(),setup(e,s){let{slots:t}=s;const{isOpen:n,open:l,id:a}=Ze(V(e,"value"),!0),i=g(()=>`v-list-group--id-${String(a.value)}`),o=Xe(),{isBooted:y}=$t();function b(m){l(!n.value,m)}const p=g(()=>({onClick:b,class:"v-list-group__header",id:i.value})),u=g(()=>n.value?e.collapseIcon:e.expandIcon),v=g(()=>({VListItem:{active:n.value,activeColor:e.activeColor,baseColor:e.baseColor,color:e.color,prependIcon:e.prependIcon||e.subgroup&&u.value,appendIcon:e.appendIcon||!e.subgroup&&u.value,title:e.title,value:e.value}}));return N(()=>r(e.tag,{class:["v-list-group",{"v-list-group--prepend":o==null?void 0:o.hasPrepend.value,"v-list-group--fluid":e.fluid,"v-list-group--subgroup":e.subgroup,"v-list-group--open":n.value},e.class],style:e.style},{default:()=>[t.activator&&r(T,{defaults:v.value},{default:()=>[r(jt,null,{default:()=>[t.activator({props:p.value,isOpen:n.value})]})]}),r(It,{transition:{component:kt},disabled:!y.value},{default:()=>{var m;return[te(r("div",{class:"v-list-group__items",role:"group","aria-labelledby":i.value},[(m=t.default)==null?void 0:m.call(t)]),[[$e,n.value]])]}})]})),{}}});const Nt=ze("v-list-item-subtitle"),Rt=ze("v-list-item-title"),Ut=B({active:{type:Boolean,default:void 0},activeClass:String,activeColor:String,appendAvatar:String,appendIcon:M,baseColor:String,disabled:Boolean,lines:String,link:{type:Boolean,default:void 0},nav:Boolean,prependAvatar:String,prependIcon:M,ripple:{type:[Boolean,Object],default:!0},slim:Boolean,subtitle:[String,Number],title:[String,Number],value:null,onClick:Q(),onClickOnce:Q(),...ve(),...j(),...fe(),...Ne(),...me(),...ye(),...Te(),...K(),...le(),...se({variant:"text"})},"VListItem"),xe=_()({name:"VListItem",directives:{Ripple:_e},props:Ut(),emits:{click:e=>!0},setup(e,s){let{attrs:t,slots:n,emit:l}=s;const a=Fe(e,t),i=g(()=>e.value===void 0?a.href.value:e.value),{select:o,isSelected:y,isIndeterminate:b,isGroupActivator:p,root:u,parent:v,openOnSelect:m}=Ze(i,!1),f=Xe(),d=g(()=>{var C;return e.active!==!1&&(e.active||((C=a.isActive)==null?void 0:C.value)||y.value)}),c=g(()=>e.link!==!1&&a.isLink.value),h=g(()=>!e.disabled&&e.link!==!1&&(e.link||a.isClickable.value||e.value!=null&&!!f)),k=g(()=>e.rounded||e.nav),S=g(()=>e.color??e.activeColor),L=g(()=>({color:d.value?S.value??e.baseColor:e.baseColor,variant:e.variant}));Re(()=>{var C;return(C=a.isActive)==null?void 0:C.value},C=>{C&&v.value!=null&&u.open(v.value,!0),C&&m(C)},{immediate:!0});const{themeClasses:D}=ie(e),{borderClasses:U}=ge(e),{colorClasses:I,colorStyles:w,variantClasses:A}=De(L),{densityClasses:G}=be(e),{dimensionStyles:q}=Ue(e),{elevationClasses:Y}=he(e),{roundedClasses:oe}=pe(k),J=g(()=>e.lines?`v-list-item--${e.lines}-line`:void 0),E=g(()=>({isActive:d.value,select:o,isSelected:y.value,isIndeterminate:b.value}));function ke(C){var Z;l("click",C),!(p||!h.value)&&((Z=a.navigate)==null||Z.call(a,C),e.value!=null&&o(!y.value,C))}function nt(C){(C.key==="Enter"||C.key===" ")&&(C.preventDefault(),ke(C))}return N(()=>{const C=c.value?"a":e.tag,Z=n.title||e.title!=null,at=n.subtitle||e.subtitle!=null,Ve=!!(e.appendAvatar||e.appendIcon),lt=!!(Ve||n.append),Ie=!!(e.prependAvatar||e.prependIcon),ue=!!(Ie||n.prepend);return f==null||f.updateHasPrepend(ue),e.activeColor&&gt("active-color",["color","base-color"]),te(r(C,{class:["v-list-item",{"v-list-item--active":d.value,"v-list-item--disabled":e.disabled,"v-list-item--link":h.value,"v-list-item--nav":e.nav,"v-list-item--prepend":!ue&&(f==null?void 0:f.hasPrepend.value),"v-list-item--slim":e.slim,[`${e.activeClass}`]:e.activeClass&&d.value},D.value,U.value,I.value,G.value,Y.value,J.value,oe.value,A.value,e.class],style:[w.value,q.value,e.style],href:a.href.value,tabindex:h.value?f?-2:0:void 0,onClick:ke,onKeydown:h.value&&!c.value&&nt},{default:()=>{var Ae;return[Ee(h.value||d.value,"v-list-item"),ue&&r("div",{key:"prepend",class:"v-list-item__prepend"},[n.prepend?r(T,{key:"prepend-defaults",disabled:!Ie,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon},VListItemAction:{start:!0}}},{default:()=>{var P;return[(P=n.prepend)==null?void 0:P.call(n,E.value)]}}):r(ne,null,[e.prependAvatar&&r(ae,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&r($,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)]),r("div",{class:"v-list-item__spacer"},null)]),r("div",{class:"v-list-item__content","data-no-activator":""},[Z&&r(Rt,{key:"title"},{default:()=>{var P;return[((P=n.title)==null?void 0:P.call(n,{title:e.title}))??e.title]}}),at&&r(Nt,{key:"subtitle"},{default:()=>{var P;return[((P=n.subtitle)==null?void 0:P.call(n,{subtitle:e.subtitle}))??e.subtitle]}}),(Ae=n.default)==null?void 0:Ae.call(n,E.value)]),lt&&r("div",{key:"append",class:"v-list-item__append"},[n.append?r(T,{key:"append-defaults",disabled:!Ve,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon},VListItemAction:{end:!0}}},{default:()=>{var P;return[(P=n.append)==null?void 0:P.call(n,E.value)]}}):r(ne,null,[e.appendIcon&&r($,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&r(ae,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)]),r("div",{class:"v-list-item__spacer"},null)])]}}),[[Ge("ripple"),h.value&&e.ripple]])}),{}}}),zt=B({color:String,inset:Boolean,sticky:Boolean,title:String,...j(),...K()},"VListSubheader"),Ht=_()({name:"VListSubheader",props:zt(),setup(e,s){let{slots:t}=s;const{textColorClasses:n,textColorStyles:l}=bt(V(e,"color"));return N(()=>{const a=!!(t.default||e.title);return r(e.tag,{class:["v-list-subheader",{"v-list-subheader--inset":e.inset,"v-list-subheader--sticky":e.sticky},n.value,e.class],style:[{textColorStyles:l},e.style]},{default:()=>{var i;return[a&&r("div",{class:"v-list-subheader__text"},[((i=t.default)==null?void 0:i.call(t))??e.title])]}})}),{}}}),Wt=B({items:Array,returnObject:Boolean},"VListChildren"),Qe=_()({name:"VListChildren",props:Wt(),setup(e,s){let{slots:t}=s;return We(),()=>{var n,l;return((n=t.default)==null?void 0:n.call(t))??((l=e.items)==null?void 0:l.map(a=>{var v,m;let{children:i,props:o,type:y,raw:b}=a;if(y==="divider")return((v=t.divider)==null?void 0:v.call(t,{props:o}))??r(At,o,null);if(y==="subheader")return((m=t.subheader)==null?void 0:m.call(t,{props:o}))??r(Ht,o,null);const p={subtitle:t.subtitle?f=>{var d;return(d=t.subtitle)==null?void 0:d.call(t,{...f,item:b})}:void 0,prepend:t.prepend?f=>{var d;return(d=t.prepend)==null?void 0:d.call(t,{...f,item:b})}:void 0,append:t.append?f=>{var d;return(d=t.append)==null?void 0:d.call(t,{...f,item:b})}:void 0,title:t.title?f=>{var d;return(d=t.title)==null?void 0:d.call(t,{...f,item:b})}:void 0},u=Be.filterProps(o);return i?r(Be,z({value:o==null?void 0:o.value},u),{activator:f=>{let{props:d}=f;const c={...o,...d,value:e.returnObject?b:o.value};return t.header?t.header({props:c}):r(xe,c,p)},default:()=>r(Qe,{items:i},t)}):t.item?t.item({props:o}):r(xe,z(o,{value:e.returnObject?b:o.value}),p)}))}}}),Xt=B({items:{type:Array,default:()=>[]},itemTitle:{type:[String,Array,Function],default:"title"},itemValue:{type:[String,Array,Function],default:"value"},itemChildren:{type:[Boolean,String,Array,Function],default:"children"},itemProps:{type:[Boolean,String,Array,Function],default:"props"},returnObject:Boolean,valueComparator:{type:Function,default:Oe}},"list-items");function de(e,s){const t=O(s,e.itemTitle,s),n=O(s,e.itemValue,t),l=O(s,e.itemChildren),a=e.itemProps===!0?typeof s=="object"&&s!=null&&!Array.isArray(s)?"children"in s?Se(s,["children"]):s:void 0:O(s,e.itemProps),i={title:t,value:n,...a};return{title:String(i.title??""),value:i.value,props:i,children:Array.isArray(l)?et(e,l):void 0,raw:s}}function et(e,s){const t=[];for(const n of s)t.push(de(e,n));return t}function un(e){const s=g(()=>et(e,e.items)),t=g(()=>s.value.some(a=>a.value===null));function n(a){return t.value||(a=a.filter(i=>i!==null)),a.map(i=>e.returnObject&&typeof i=="string"?de(e,i):s.value.find(o=>e.valueComparator(i,o.value))||de(e,i))}function l(a){return e.returnObject?a.map(i=>{let{raw:o}=i;return o}):a.map(i=>{let{value:o}=i;return o})}return{items:s,transformIn:n,transformOut:l}}function qt(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function Yt(e,s){const t=O(s,e.itemType,"item"),n=qt(s)?s:O(s,e.itemTitle),l=O(s,e.itemValue,void 0),a=O(s,e.itemChildren),i=e.itemProps===!0?Se(s,["children"]):O(s,e.itemProps),o={title:n,value:l,...i};return{type:t,title:o.title,value:o.value,props:o,children:t==="item"&&a?tt(e,a):void 0,raw:s}}function tt(e,s){const t=[];for(const n of s)t.push(Yt(e,n));return t}function Jt(e){return{items:g(()=>tt(e,e.items))}}const Zt=B({baseColor:String,activeColor:String,activeClass:String,bgColor:String,disabled:Boolean,lines:{type:[Boolean,String],default:"one"},slim:Boolean,nav:Boolean,...Ft({selectStrategy:"single-leaf",openStrategy:"list"}),...ve(),...j(),...fe(),...Ne(),...me(),itemType:{type:String,default:"type"},...Xt(),...ye(),...K(),...le(),...se({variant:"text"})},"VList"),rn=_()({name:"VList",props:Zt(),emits:{"update:selected":e=>!0,"update:opened":e=>!0,"click:open":e=>!0,"click:select":e=>!0},setup(e,s){let{slots:t}=s;const{items:n}=Jt(e),{themeClasses:l}=ie(e),{backgroundColorClasses:a,backgroundColorStyles:i}=ht(V(e,"bgColor")),{borderClasses:o}=ge(e),{densityClasses:y}=be(e),{dimensionStyles:b}=Ue(e),{elevationClasses:p}=he(e),{roundedClasses:u}=pe(e),{open:v,select:m}=Gt(e),f=g(()=>e.lines?`v-list--${e.lines}-line`:void 0),d=V(e,"activeColor"),c=V(e,"baseColor"),h=V(e,"color");We(),Me({VListGroup:{activeColor:d,baseColor:c,color:h},VListItem:{activeClass:V(e,"activeClass"),activeColor:d,baseColor:c,color:h,density:V(e,"density"),disabled:V(e,"disabled"),lines:V(e,"lines"),nav:V(e,"nav"),slim:V(e,"slim"),variant:V(e,"variant")}});const k=F(!1),S=x();function L(A){k.value=!0}function D(A){k.value=!1}function U(A){var G;!k.value&&!(A.relatedTarget&&((G=S.value)!=null&&G.contains(A.relatedTarget)))&&w()}function I(A){if(S.value){if(A.key==="ArrowDown")w("next");else if(A.key==="ArrowUp")w("prev");else if(A.key==="Home")w("first");else if(A.key==="End")w("last");else return;A.preventDefault()}}function w(A){if(S.value)return re(S.value,A)}return N(()=>r(e.tag,{ref:S,class:["v-list",{"v-list--disabled":e.disabled,"v-list--nav":e.nav},l.value,a.value,o.value,y.value,p.value,f.value,u.value,e.class],style:[i.value,b.value,e.style],tabindex:e.disabled||k.value?-1:0,role:"listbox","aria-activedescendant":void 0,onFocusin:L,onFocusout:D,onFocus:U,onKeydown:I},{default:()=>[r(Qe,{items:n.value,returnObject:e.returnObject},t)]})),{open:v,select:m,focus:w}}});const Qt=B({id:String,...Se(wt({closeDelay:250,closeOnContentClick:!0,locationStrategy:"connected",openDelay:300,scrim:!1,scrollStrategy:"reposition",transition:{component:Pt}}),["absolute"])},"VMenu"),cn=_()({name:"VMenu",props:Qt(),emits:{"update:modelValue":e=>!0},setup(e,s){let{slots:t}=s;const n=ee(e,"modelValue"),{scopeId:l}=Lt(),a=Ke(),i=g(()=>e.id||`v-menu-${a}`),o=x(),y=W(Pe,null),b=F(0);X(Pe,{register(){++b.value},unregister(){--b.value},closeParents(){setTimeout(()=>{b.value||(n.value=!1,y==null||y.closeParents())},40)}});async function p(d){var k,S,L;const c=d.relatedTarget,h=d.target;await pt(),n.value&&c!==h&&((k=o.value)!=null&&k.contentEl)&&((S=o.value)!=null&&S.globalTop)&&![document,o.value.contentEl].includes(h)&&!o.value.contentEl.contains(h)&&((L=we(o.value.contentEl)[0])==null||L.focus())}Re(n,d=>{d?(y==null||y.register(),document.addEventListener("focusin",p,{once:!0})):(y==null||y.unregister(),document.removeEventListener("focusin",p))});function u(){y==null||y.closeParents()}function v(d){var c,h,k;e.disabled||d.key==="Tab"&&(St(we((c=o.value)==null?void 0:c.contentEl,!1),d.shiftKey?"prev":"next",L=>L.tabIndex>=0)||(n.value=!1,(k=(h=o.value)==null?void 0:h.activatorEl)==null||k.focus()))}function m(d){var h;if(e.disabled)return;const c=(h=o.value)==null?void 0:h.contentEl;c&&n.value?d.key==="ArrowDown"?(d.preventDefault(),re(c,"next")):d.key==="ArrowUp"&&(d.preventDefault(),re(c,"prev")):["ArrowDown","ArrowUp"].includes(d.key)&&(n.value=!0,d.preventDefault(),setTimeout(()=>setTimeout(()=>m(d))))}const f=g(()=>z({"aria-haspopup":"menu","aria-expanded":String(n.value),"aria-owns":i.value,onKeydown:m},e.activatorProps));return N(()=>{const d=Le.filterProps(e);return r(Le,z({ref:o,class:["v-menu",e.class],style:e.style},d,{modelValue:n.value,"onUpdate:modelValue":c=>n.value=c,absolute:!0,activatorProps:f.value,"onClick:outside":u,onKeydown:v},l),{activator:t.activator,default:function(){for(var c=arguments.length,h=new Array(c),k=0;k<c;k++)h[k]=arguments[k];return r(T,{root:"VMenu"},{default:()=>{var S;return[(S=t.default)==null?void 0:S.call(t,...h)]}})}})}),Vt({id:i,ΨopenChildren:b},o)}});export{on as V,cn as a,rn as b,xe as c,Rt as d,Nt as e,Xt as m,un as u};
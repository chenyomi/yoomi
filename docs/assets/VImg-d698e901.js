import{f as R,H as C,m as L,i as N,l as G,n as U,b as r,c as h,I as J,a4 as F,aA as K,bm as W,av as Q,s as y,r as X,t as z,bd as Y,z as Z,aE as p,ae as $,aO as ee,F as te,x as ne,af as re}from"./index-eed639dd.js";function ae(e){return{aspectStyles:h(()=>{const l=Number(e.aspectRatio);return l?{paddingBottom:String(1/l*100)+"%"}:void 0})}}const E=R({aspectRatio:[String,Number],contentClass:String,inline:Boolean,...C(),...L()},"VResponsive"),k=N()({name:"VResponsive",props:E(),setup(e,l){let{slots:i}=l;const{aspectStyles:n}=ae(e),{dimensionStyles:c}=G(e);return U(()=>{var v;return r("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[c.value,e.style]},[r("div",{class:"v-responsive__sizer",style:n.value},null),(v=i.additional)==null?void 0:v.call(i),i.default&&r("div",{class:["v-responsive__content",e.contentClass]},[i.default()])])}),{}}}),ie=R({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),b=(e,l)=>{let{slots:i}=l;const{transition:n,disabled:c,...v}=e,{component:s=K,...a}=typeof n=="object"?n:{};return J(s,F(typeof n=="string"?{name:c?"":n}:a,v,{disabled:c}),i)};function se(e,l){if(!W)return;const i=l.modifiers||{},n=l.value,{handler:c,options:v}=typeof n=="object"?n:{handler:n,options:{}},s=new IntersectionObserver(function(){var g;let a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],f=arguments.length>1?arguments[1]:void 0;const d=(g=e._observe)==null?void 0:g[l.instance.$.uid];if(!d)return;const o=a.some(S=>S.isIntersecting);c&&(!i.quiet||d.init)&&(!i.once||o||d.init)&&c(o,a,f),o&&i.once?x(e,l):d.init=!0},v);e._observe=Object(e._observe),e._observe[l.instance.$.uid]={init:!1,observer:s},s.observe(e)}function x(e,l){var n;const i=(n=e._observe)==null?void 0:n[l.instance.$.uid];i&&(i.observer.unobserve(e),delete e._observe[l.instance.$.uid])}const le={mounted:se,unmounted:x},oe=le,ue=R({alt:String,cover:Boolean,draggable:{type:[Boolean,String],default:void 0},eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},crossorigin:String,referrerpolicy:String,srcset:String,position:String,...E(),...C(),...ie()},"VImg"),ve=N()({name:"VImg",directives:{intersect:oe},props:ue(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,l){let{emit:i,slots:n}=l;const c=Q("VImg"),v=y(""),s=X(),a=y(e.eager?"loading":"idle"),f=y(),d=y(),o=h(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),g=h(()=>o.value.aspect||f.value/d.value||0);z(()=>e.src,()=>{S(a.value!=="idle")}),z(g,(t,u)=>{!t&&u&&s.value&&_(s.value)}),Y(()=>S());function S(t){if(!(e.eager&&t)&&!(W&&!t&&!e.eager)){if(a.value="loading",o.value.lazySrc){const u=new Image;u.src=o.value.lazySrc,_(u,null)}o.value.src&&Z(()=>{var u;i("loadstart",((u=s.value)==null?void 0:u.currentSrc)||o.value.src),setTimeout(()=>{var m;if(!c.isUnmounted)if((m=s.value)!=null&&m.complete){if(s.value.naturalWidth||V(),a.value==="error")return;g.value||_(s.value,null),a.value==="loading"&&P()}else g.value||_(s.value),T()})})}}function P(){var t;c.isUnmounted||(T(),_(s.value),a.value="loaded",i("load",((t=s.value)==null?void 0:t.currentSrc)||o.value.src))}function V(){var t;c.isUnmounted||(a.value="error",i("error",((t=s.value)==null?void 0:t.currentSrc)||o.value.src))}function T(){const t=s.value;t&&(v.value=t.currentSrc||t.src)}let I=-1;p(()=>{clearTimeout(I)});function _(t){let u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const m=()=>{if(clearTimeout(I),c.isUnmounted)return;const{naturalHeight:B,naturalWidth:O}=t;B||O?(f.value=O,d.value=B):!t.complete&&a.value==="loading"&&u!=null?I=window.setTimeout(m,u):(t.currentSrc.endsWith(".svg")||t.currentSrc.startsWith("data:image/svg+xml"))&&(f.value=1,d.value=1)};m()}const w=h(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),A=()=>{var m;if(!o.value.src||a.value==="idle")return null;const t=r("img",{class:["v-img__img",w.value],style:{objectPosition:e.position},src:o.value.src,srcset:o.value.srcset,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable,sizes:e.sizes,ref:s,onLoad:P,onError:V},null),u=(m=n.sources)==null?void 0:m.call(n);return r(b,{transition:e.transition,appear:!0},{default:()=>[$(u?r("picture",{class:"v-img__picture"},[u,t]):t,[[re,a.value==="loaded"]])]})},D=()=>r(b,{transition:e.transition},{default:()=>[o.value.lazySrc&&a.value!=="loaded"&&r("img",{class:["v-img__img","v-img__img--preload",w.value],style:{objectPosition:e.position},src:o.value.lazySrc,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable},null)]}),H=()=>n.placeholder?r(b,{transition:e.transition,appear:!0},{default:()=>[(a.value==="loading"||a.value==="error"&&!n.error)&&r("div",{class:"v-img__placeholder"},[n.placeholder()])]}):null,M=()=>n.error?r(b,{transition:e.transition,appear:!0},{default:()=>[a.value==="error"&&r("div",{class:"v-img__error"},[n.error()])]}):null,q=()=>e.gradient?r("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,j=y(!1);{const t=z(g,u=>{u&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{j.value=!0})}),t())})}return U(()=>{const t=k.filterProps(e);return $(r(k,F({class:["v-img",{"v-img--booting":!j.value},e.class],style:[{width:ne(e.width==="auto"?f.value:e.width)},e.style]},t,{aspectRatio:g.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>r(te,null,[r(A,null,null),r(D,null,null),r(q,null,null),r(H,null,null),r(M,null,null)]),default:n.default}),[[ee("intersect"),{handler:S,options:e.options},null,{once:!0}]])}),{currentSrc:v,image:s,state:a,naturalWidth:f,naturalHeight:d}}});export{oe as I,b as M,ve as V,ie as m};
import{f as O,m as U,g as W,h as G,i as K,r as b,s as k,c as X,j as N,k as Y,l as J,n as P,b as s,q as Q,t as Z,v as q,x as ee,V,y as te,z as w,A as ne,o as x,B as L,w as y,a as ie,C as re,D as I,F as ae,d as a,E as le}from"./index-eed639dd.js";import{a as oe,b as se,c as ce,V as ue}from"./VCard-2c8b4ed4.js";import"./VImg-d698e901.js";const de=O({color:String,direction:{type:String,default:"vertical",validator:e=>["vertical","horizontal"].includes(e)},side:{type:String,default:"end",validator:e=>["start","end","both"].includes(e)},mode:{type:String,default:"intersect",validator:e=>["intersect","manual"].includes(e)},margin:[Number,String],loadMoreText:{type:String,default:"$vuetify.infiniteScroll.loadMore"},emptyText:{type:String,default:"$vuetify.infiniteScroll.empty"},...U(),...W()},"VInfiniteScroll"),R=G({name:"VInfiniteScrollIntersect",props:{side:{type:String,required:!0},rootRef:null,rootMargin:String},emits:{intersect:(e,v)=>!0},setup(e,v){let{emit:n}=v;const{intersectionRef:f,isIntersecting:i}=Q(m=>{},e.rootMargin?{rootMargin:e.rootMargin}:void 0);return Z(i,async m=>{n("intersect",e.side,m)}),P(()=>s("div",{class:"v-infinite-scroll-intersect",ref:f},[q(" ")])),{}}}),fe=K()({name:"VInfiniteScroll",props:de(),emits:{load:e=>!0},setup(e,v){let{slots:n,emit:f}=v;const i=b(),m=k("ok"),r=k("ok"),c=X(()=>ee(e.margin)),l=k(!1);function d(t){if(!i.value)return;const o=e.direction==="vertical"?"scrollTop":"scrollLeft";i.value[o]=t}function C(){if(!i.value)return 0;const t=e.direction==="vertical"?"scrollTop":"scrollLeft";return i.value[t]}function S(){if(!i.value)return 0;const t=e.direction==="vertical"?"scrollHeight":"scrollWidth";return i.value[t]}function $(){if(!i.value)return 0;const t=e.direction==="vertical"?"clientHeight":"clientWidth";return i.value[t]}N(()=>{i.value&&(e.side==="start"?d(S()):e.side==="both"&&d(S()/2-$()/2))});function A(t,o){t==="start"?m.value=o:t==="end"&&(r.value=o)}function H(t){return t==="start"?m.value:r.value}let T=0;function z(t,o){l.value=o,l.value&&_(t)}function _(t){if(e.mode!=="manual"&&!l.value)return;const o=H(t);if(!i.value||o==="loading")return;T=S(),A(t,"loading");function g(u){A(t,u),w(()=>{u==="empty"||u==="error"||(u==="ok"&&t==="start"&&d(S()-T+C()),e.mode!=="manual"&&w(()=>{window.requestAnimationFrame(()=>{window.requestAnimationFrame(()=>{window.requestAnimationFrame(()=>{_(t)})})})}))})}f("load",{side:t,done:g})}const{t:M}=Y();function p(t,o){var h,B,F,D,E;if(e.side!==t&&e.side!=="both")return;const g=()=>_(t),u={side:t,props:{onClick:g,color:e.color}};return o==="error"?(h=n.error)==null?void 0:h.call(n,u):o==="empty"?((B=n.empty)==null?void 0:B.call(n,u))??s("div",null,[M(e.emptyText)]):e.mode==="manual"?o==="loading"?((F=n.loading)==null?void 0:F.call(n,u))??s(V,{indeterminate:!0,color:e.color},null):((D=n["load-more"])==null?void 0:D.call(n,u))??s(te,{variant:"outlined",color:e.color,onClick:g},{default:()=>[M(e.loadMoreText)]}):((E=n.loading)==null?void 0:E.call(n,u))??s(V,{indeterminate:!0,color:e.color},null)}const{dimensionStyles:j}=J(e);P(()=>{const t=e.tag,o=e.side==="start"||e.side==="both",g=e.side==="end"||e.side==="both",u=e.mode==="intersect";return s(t,{ref:i,class:["v-infinite-scroll",`v-infinite-scroll--${e.direction}`,{"v-infinite-scroll--start":o,"v-infinite-scroll--end":g}],style:j.value},{default:()=>{var h;return[s("div",{class:"v-infinite-scroll__side"},[p("start",m.value)]),i.value&&o&&u&&s(R,{key:"start",side:"start",onIntersect:z,rootRef:i.value,rootMargin:c.value},null),(h=n.default)==null?void 0:h.call(n),i.value&&g&&u&&s(R,{key:"end",side:"end",onIntersect:z,rootRef:i.value,rootMargin:c.value},null),s("div",{class:"v-infinite-scroll__side"},[p("end",r.value)])]}})})}}),me=a("span",{class:"mx-5"},"IN BEARBEIYUNG",-1),ve=a("span",null,"1089",-1),ge={class:"d-flex align-center justify-space-between"},he={class:"d-flex gap-3 align-center"},ye=a("div",null,[a("h6",null,"Mazak VARIAXIS C600 | 3001 - KSP - 160 -1"),a("h6",null,"002_DEMO_MAIN")],-1),Se={class:"d-flex gap-4 align-center"},_e=a("h6",null,"5/25",-1),ke=a("div",null,[a("h6",null,"开始时间："),a("h6",null,"平均周期："),a("h6",null,"预计结束时间：")],-1),xe=a("div",{class:"text-right"},[a("h6",null,"21/09/2023 15:00:00"),a("h6",null,"00:50:00"),a("h6",null,"21/09/2023 15:00:00")],-1),we={__name:"tasklist",props:{header:{type:Object}},setup(e){const v=e,n=b(null),f=b([]),i=({done:r})=>{if(f.value.length>=30)r("empty");else{const c=Array.from({length:10},(l,d)=>d+1);r("loading"),setTimeout(()=>{c.forEach(l=>{f.value.push(l)}),r("ok")},1e3)}},m={0:"bxs-cube-alt",1:"bxs-cylinder",2:"bxs-pyramid"};return N(()=>{w(()=>{v.header.setHeaderData([{name:"新建",color:"#42A5F5",size:"large",width:80,mark:"是否新建任务？",fn:({close:r,openLoading:c,closeLoading:l})=>{r()}},{name:"编辑",color:"#00ACC1",size:"large",width:80,mark:"是否编辑选中任务？",fn:({close:r,openLoading:c,closeLoading:l})=>{r()}},{name:"完成",color:"#66BB6A",size:"large",width:80,mark:"是否完成选中任务？",fn:({close:r,openLoading:c,closeLoading:l})=>{c({text:"正在更新状态中"}),r(),setTimeout(()=>{l()},2e3)}},{name:"删除",color:"#EF5350",size:"large",width:80,mark:"是否删除选中任务？",fn:({close:r,openLoading:c,closeLoading:l})=>{c({text:"正在删除中"}),r(),setTimeout(()=>{l()},2e3)}},{name:"开始",color:"#D32F2F",icon:"bxs-zap",size:"large",width:120,mark:"是否开启任务？",fn:({close:r,openLoading:c,closeLoading:l})=>{c({text:"正在开启中"}),r(),setTimeout(()=>{l()},2e3)}}])})}),ne(()=>{v.header.setHeaderData([])}),(r,c)=>(x(),L(fe,{class:"h-100",items:I(f),"empty-text":"暂无数据",onLoad:i},{default:y(()=>[(x(!0),ie(ae,null,re(I(f),(l,d)=>(x(),L(oe,{key:l,class:"d-flex flex-column mb-3",style:{overflow:"unset"},variant:I(n)===d?"outlined":"flat",onClick:C=>n.value=d},{default:y(()=>[s(se,{style:{"border-radius":"0.5rem 0.5rem 0 0",background:"#111",color:"#fff","line-height":"1.875rem"}},{default:y(()=>[a("span",null,le(d+1),1),me,q(),ve]),_:2},1024),s(ce,{class:"py-2"},{default:y(()=>[a("div",ge,[a("div",he,[s(ue,{icon:m[d%3],color:"#7986CB",size:"50",rounded:"",variant:"tonal"},null,8,["icon"]),ye]),a("div",Se,[s(V,{rotate:360,size:70,width:6,"model-value":20,color:"teal"},{default:y(()=>[_e]),_:1}),ke,xe])])]),_:2},1024)]),_:2},1032,["variant","onClick"]))),128))]),_:1},8,["items"]))}};export{we as default};
import{b as L}from"./request-99d94a23.js";import{_ as O}from"./modal-55072e82.js";import{g as k}from"./utils-79b8b97a.js";import{l as N}from"./lodash-d51f920f.js";import{a as A,V as c}from"./VRow-36079f24.js";import{V as Y}from"./VMenu-b0bfb582.js";import{V as m}from"./VTextField-dfe34a1b.js";import{V as U}from"./VSelect-9029300f.js";import{V as F}from"./VContainer-b0c5ade5.js";import{i as v,a as g,b as W,q as R,w as d,e as o,G as w,h as e,B as E,o as _,n as I,d as $,L as j,R as q,A as h,t as u,f as z,I as M}from"./index-a2eabe8b.js";import{d as G}from"./setting-drawer-svg-6defae7e.js";import{V as P}from"./VDataTableVirtual-57173a06.js";import{V as H}from"./VCheckbox-38bd8e3e.js";import"./index-8609523b.js";import"./VCard-db09e018.js";import"./VAvatar-2b5e6595.js";import"./VImg-52e65ea0.js";/* empty css              */import"./VDialog-3e748fcf.js";import"./VOverlay-6b227702.js";import"./VInput-d192d255.js";import"./VDivider-f5717089.js";import"./VCheckboxBtn-eadfcaec.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./VDataTable-f4c244fa.js";const T={drawerList(V){return L("/sss/trawlboard/list",V,"get")},drawerEdit(V){return L("/sss/trawlboard",V,V.id?"put":"post")}},D={__name:"setting-drawer-form",props:{data:{type:Object}},setup(V,{expose:f}){const x=V,r=v("density"),a=g(N.cloneDeep(x.data)),B=()=>new Promise(y=>{T.drawerEdit(a.value).finally(()=>{y()})}),b=k("sss_trawl_board_shape"),S=k("sss_trawl_board_state");return f({submit:B}),(y,t)=>(W(),R(F,null,{default:d(()=>[o(A,null,{default:d(()=>[o(c,{cols:"4"}),o(c,{cols:"4",class:"text-center"},{default:d(()=>[o(Y,{class:"ma-1",color:"#FF9800"},{default:d(()=>[w(" X轴方向 ")]),_:1})]),_:1}),o(c,{cols:"4",class:"text-center"},{default:d(()=>[o(Y,{class:"ma-1",color:"#4CAF50"},{default:d(()=>[w(" Y轴方向 ")]),_:1})]),_:1}),o(c,{cols:"4"},{default:d(()=>[o(m,{modelValue:e(a).trawlBoardSafeDistance,"onUpdate:modelValue":t[0]||(t[0]=l=>e(a).trawlBoardSafeDistance=l),label:"安全距离：",density:e(r),class:"mb-2",suffix:"mm"},null,8,["modelValue","density"]),o(m,{modelValue:e(a).trawlBoardName,"onUpdate:modelValue":t[1]||(t[1]=l=>e(a).trawlBoardName=l),label:"网板名称：",density:e(r),class:"mb-2"},null,8,["modelValue","density"]),o(m,{modelValue:e(a).trawlBoardThickness,"onUpdate:modelValue":t[2]||(t[2]=l=>e(a).trawlBoardThickness=l),label:"厚度：",density:e(r),suffix:"mm",class:"mb-2"},null,8,["modelValue","density"]),o(U,{modelValue:e(a).trawlBoardShape,"onUpdate:modelValue":t[3]||(t[3]=l=>e(a).trawlBoardShape=l),density:e(r),items:e(b),class:"mb-2",label:"形状"},null,8,["modelValue","density","items"]),o(U,{modelValue:e(a).trawlBoardState,"onUpdate:modelValue":t[4]||(t[4]=l=>e(a).trawlBoardState=l),density:e(r),items:e(S),label:"是否开启"},null,8,["modelValue","density","items"])]),_:1}),o(c,{cols:"4"},{default:d(()=>[o(m,{modelValue:e(a).trawlBoardLengthX,"onUpdate:modelValue":t[5]||(t[5]=l=>e(a).trawlBoardLengthX=l),label:"板：",density:e(r),suffix:"mm",class:"mb-2"},null,8,["modelValue","density"]),o(m,{modelValue:e(a).trawlBoardOffsetX,"onUpdate:modelValue":t[6]||(t[6]=l=>e(a).trawlBoardOffsetX=l),label:"原点偏移：",density:e(r),suffix:"mm",class:"mb-2"},null,8,["modelValue","density"]),o(m,{modelValue:e(a).trawlBoardSiteX,"onUpdate:modelValue":t[7]||(t[7]=l=>e(a).trawlBoardSiteX=l),label:"占位：",density:e(r),class:"mb-2"},null,8,["modelValue","density"]),o(m,{modelValue:e(a).trawlBoardSiteLengthX,"onUpdate:modelValue":t[8]||(t[8]=l=>e(a).trawlBoardSiteLengthX=l),label:"单元尺寸：",density:e(r),suffix:"mm",class:"mb-2"},null,8,["modelValue","density"]),o(m,{modelValue:e(a).trawlBoardSiteSpaceX,"onUpdate:modelValue":t[9]||(t[9]=l=>e(a).trawlBoardSiteSpaceX=l),label:"单元间距：",density:e(r),suffix:"mm",class:"mb-2"},null,8,["modelValue","density"])]),_:1}),o(c,{cols:"4"},{default:d(()=>[o(m,{modelValue:e(a).trawlBoardLengthY,"onUpdate:modelValue":t[10]||(t[10]=l=>e(a).trawlBoardLengthY=l),label:"板：",density:e(r),suffix:"mm",class:"mb-2"},null,8,["modelValue","density"]),o(m,{modelValue:e(a).trawlBoardOffsetY,"onUpdate:modelValue":t[11]||(t[11]=l=>e(a).trawlBoardOffsetY=l),label:"原点偏移：",density:e(r),suffix:"mm",class:"mb-2"},null,8,["modelValue","density"]),o(m,{modelValue:e(a).trawlBoardSiteY,"onUpdate:modelValue":t[12]||(t[12]=l=>e(a).trawlBoardSiteY=l),label:"占位：",density:e(r),class:"mb-2"},null,8,["modelValue","density"]),o(m,{modelValue:e(a).trawlBoardSiteLengthY,"onUpdate:modelValue":t[13]||(t[13]=l=>e(a).trawlBoardSiteLengthY=l),label:"单元尺寸：",density:e(r),suffix:"mm",class:"mb-2"},null,8,["modelValue","density"]),o(m,{modelValue:e(a).trawlBoardSiteSpaceY,"onUpdate:modelValue":t[14]||(t[14]=l=>e(a).trawlBoardSiteSpaceY=l),label:"单元间距：",density:e(r),suffix:"mm",class:"mb-2"},null,8,["modelValue","density"])]),_:1})]),_:1})]),_:1}))}},J={style:{"text-align":"end"}},xe={__name:"setting-drawer",setup(V){const{t:f}=E(),x=v("density"),r=g([]),a=g(!0),B=g();let b=[];const S=g();setTimeout(()=>{a.value=!1},1e3);const y=()=>{T.drawerList().then(i=>{r.value=i.rows,B.value=i.rows[0].id,t.value[1].slotData=i.rows[0]})},t=v("btnList");_(()=>{I(()=>{t.value=[{name:"新增",color:"#42A5F5",size:"large",width:80,formWidth:800,slot:h(D),fn:({close:i,openLoading:p,closeLoading:s,diaFormRef:n})=>{p({text:"正在上传更新"}),n.submit().finally(()=>{i(),setTimeout(()=>{y(),s()},2e3)})}},{name:"编辑",color:"#00ACC1",size:"large",width:150,formWidth:800,slot:h(D),fn:({close:i,openLoading:p,closeLoading:s,diaFormRef:n})=>{p({text:"正在上传更新"}),n.submit().finally(()=>{i(),setTimeout(()=>{y(),s()},2e3)})}}]})});const l=g([{align:"start",sortable:!1,key:"exclusive",fixed:!0,width:70,minWidth:70},{title:f("名称"),align:"start",sortable:!1,key:"trawlBoardName",minWidth:120},{title:f("安全距离"),key:"trawlBoardSafeDistance",align:"center",sortable:!1,minWidth:90},{title:f("厚度"),key:"trawlBoardThickness",align:"center",sortable:!1,minWidth:60},{title:f("板")+"（X-Y）",key:"trawlBoardLengthX",align:"center",sortable:!1,minWidth:100},{title:f("原点偏移")+"（X-Y）",key:"trawlBoardOffsetX",align:"center",sortable:!1,minWidth:130},{title:f("占位")+"（X-Y）",key:"trawlBoardSiteX",align:"center",sortable:!1,minWidth:120},{title:f("占位单元尺寸")+"（X-Y）",key:"trawlBoardSiteLengthX",align:"center",sortable:!1,minWidth:160},{title:f("占位单元间距")+"（X-Y）",key:"trawlBoardSiteSpaceX",align:"center",sortable:!1,minWidth:160}]),C=()=>{S.value.open({formWidth:854,hideDiaName:!0,hideDiaOk:!0,hideDiaCancel:!0,slot:h(G),slotData:r.value.filter(i=>i.id==B.value)[0],fn:({close:i,openLoading:p,closeLoading:s,diaFormRef:n})=>{p({text:"正在上传更新"}),n.submit().finally(()=>{i(),setTimeout(()=>{s()},2e3)})}})};return(i,p)=>(W(),$(q,null,[o(P,{"fixed-header":"",headers:l.value,items:r.value,loading:a.value,"loading-text":"",hover:"",height:"calc(100vh - 230px)","expand-on-click":"",density:e(x),"onUpdate:options":y,"onUpdate:expanded":p[0]||(p[0]=s=>{s.map(n=>{e(b).includes(n)||(B.value=n,e(t)[1].slotData=r.value.filter(X=>X.id==n)[0])}),e(b).map(n=>{s.includes(n)||(B.value=n,e(t)[1].slotData=r.value.filter(X=>X.id==n)[0])}),j(b)?b.value=s:b=s})},{"item.exclusive":d(({item:s})=>[o(H,{"model-value":s.id==B.value,readonly:""},null,8,["model-value"])]),"item.trawlBoardLengthX":d(({item:s})=>[w(u(s.trawlBoardLengthX)+"-"+u(s.trawlBoardLengthY),1)]),"item.trawlBoardOffsetX":d(({item:s})=>[w(u(s.trawlBoardOffsetX)+"-"+u(s.trawlBoardOffsetY),1)]),"item.trawlBoardSiteX":d(({item:s})=>[w(u(s.trawlBoardSiteX)+"-"+u(s.trawlBoardSiteY),1)]),"item.trawlBoardSiteLengthX":d(({item:s})=>[w(u(s.trawlBoardSiteLengthX)+"-"+u(s.trawlBoardSiteLengthY),1)]),"item.trawlBoardSiteSpaceX":d(({item:s})=>[w(u(s.trawlBoardSiteSpaceX)+"-"+u(s.trawlBoardSiteSpaceY),1)]),loading:d(()=>[]),bottom:d(()=>[z("div",J,[o(M,{class:"ma-2 w-25",onClick:C},{default:d(()=>[w(u(i.$t("预览")),1)]),_:1})])]),_:1},8,["headers","items","loading","density"]),o(O,{ref_key:"modal",ref:S},null,512)],64))}};export{xe as default};
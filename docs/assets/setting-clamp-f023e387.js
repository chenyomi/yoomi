import{a as V}from"./VCard-2c8b4ed4.js";import{V as c,a as m}from"./VRow-dbb64d94.js";import{V as b}from"./VSelect-3593d793.js";import{a as s}from"./VTextField-3c48d3f1.js";import{V as n}from"./VChip-baf95cce.js";import{V as v}from"./VContainer-840d9fbb.js";import{j as y,z as U,A as C,r as i,o as B,B as _,w as t,b as e,v as f}from"./index-eed639dd.js";import"./VImg-d698e901.js";/* empty css              */import"./forwardRefs-e658ad70.js";import"./VMenu-e85bba02.js";import"./index-fd07a2ae.js";import"./VDivider-5eca9a60.js";import"./VOverlay-46c0d627.js";import"./VCheckboxBtn-2ce9c03c.js";const X={__name:"setting-clamp",props:{header:{type:Object}},setup(x){const u=x;y(()=>{U(()=>{u.header.setHeaderData([{name:"保存",color:"#66BB6A",icon:"bx-cloud-upload",size:"large",width:220,mark:"是否保存并上传更新数据？",fn:({close:r,openLoading:l,closeLoading:a})=>{l({text:"正在上传更新"}),r(),setTimeout(()=>{a()},2e3)}}])})}),C(()=>{u.header.setHeaderData([])});const o=i({code:1601,exmx1:320,exmx2:160,exmy1:235,exmy2:170}),p=[{title:"夹具-1",value:"0"},{title:"夹具-2",value:"1"},{title:"夹具-3",value:"2"},{title:"夹具-4",value:"3"}],d=i({title:"夹具-1",value:"0"});return(r,l)=>(B(),_(V,{class:"h-100"},{default:t(()=>[e(v,null,{default:t(()=>[e(c,null,{default:t(()=>[e(m,{cols:"6",class:"text-center"},{default:t(()=>[e(b,{modelValue:d.value,"onUpdate:modelValue":l[0]||(l[0]=a=>d.value=a),items:p,density:"comfortable",label:"当前夹具"},null,8,["modelValue"])]),_:1}),e(m,{cols:"6",class:"text-center"},{default:t(()=>[e(s,{modelValue:o.value.code,"onUpdate:modelValue":l[1]||(l[1]=a=>o.value.code=a),label:"编号：",density:"comfortable"},null,8,["modelValue"])]),_:1}),e(m,{cols:"6",class:"text-center"},{default:t(()=>[e(n,{class:"ma-1",color:"#FF9800"},{default:t(()=>[f(" X轴方向 ")]),_:1})]),_:1}),e(m,{cols:"6",class:"text-center"},{default:t(()=>[e(n,{class:"ma-1",color:"#4CAF50"},{default:t(()=>[f(" Y轴方向 ")]),_:1})]),_:1}),e(m,{cols:"6"},{default:t(()=>[e(s,{modelValue:o.value.exmx1,"onUpdate:modelValue":l[2]||(l[2]=a=>o.value.exmx1=a),label:"尺寸：",density:"comfortable",suffix:"mm",class:"mb-2"},null,8,["modelValue"]),e(s,{modelValue:o.value.exmx2,"onUpdate:modelValue":l[3]||(l[3]=a=>o.value.exmx2=a),label:"定位：",density:"comfortable",suffix:"mm",class:"mb-2"},null,8,["modelValue"])]),_:1}),e(m,{cols:"6"},{default:t(()=>[e(s,{modelValue:o.value.exmy1,"onUpdate:modelValue":l[4]||(l[4]=a=>o.value.exmy1=a),label:"尺寸：",density:"comfortable",suffix:"mm",class:"mb-2"},null,8,["modelValue"]),e(s,{modelValue:o.value.exmy2,"onUpdate:modelValue":l[5]||(l[5]=a=>o.value.exmy2=a),label:"定位：",density:"comfortable",suffix:"mm",class:"mb-2"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}))}};export{X as default};
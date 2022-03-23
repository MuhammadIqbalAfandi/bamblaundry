"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[602],{3744:(e,t)=>{t.Z=(e,t)=>{const l=e.__vccOpts||e;for(const[e,o]of t)l[e]=o;return l}},6244:(e,t,l)=>{l.d(t,{Z:()=>a});var o=l(821),r=l(9038),n={key:1,class:"p-button-label"};const a={props:{icon:String,label:String},setup:function(e){return function(t,l){return(0,o.openBlock)(),(0,o.createBlock)((0,o.unref)(r.rU),{class:"p-button p-component",as:"button",type:"button"},{default:(0,o.withCtx)((function(){return[e.icon?((0,o.openBlock)(),(0,o.createElementBlock)("span",{key:0,class:(0,o.normalizeClass)(["p-button-icon p-button-icon-left",e.icon])},null,2)):(0,o.createCommentVNode)("",!0),e.label?((0,o.openBlock)(),(0,o.createElementBlock)("span",n,(0,o.toDisplayString)(e.label),1)):(0,o.createCommentVNode)("",!0)]})),_:1})}}}},3701:(e,t,l)=>{l.d(t,{Z:()=>u});var o=l(821),r=["for"],n={key:0},a={key:1},i=["id"];const u={props:{optionLabel:{type:String,default:"label"},optionValue:{type:String,default:"value"},optionDisabled:{type:String,default:"disabled"},options:{type:Array,required:!0},label:{type:String,required:!0},placeholder:{type:String,required:!0},error:{type:String,default:null},modelValue:null},emits:["update:modelValue"],setup:function(e){var t=e,l=(0,o.computed)((function(){return!!t.error})),u=(0,o.computed)((function(){return t.label.toLowerCase().replace(/\s+/g,"-")})),c=(0,o.computed)((function(){return t.label.toLowerCase().replace(/\s+/g,"-")+"-help"})),s=function(e){var l=t.options.find((function(l){return l[t.optionValue]==e}));if(l)return l[t.optionLabel]};return function(t,d){var p=(0,o.resolveComponent)("Dropdown");return(0,o.openBlock)(),(0,o.createElementBlock)(o.Fragment,null,[(0,o.createElementVNode)("label",{for:(0,o.unref)(u)},(0,o.toDisplayString)(e.label),9,r),(0,o.createVNode)(p,{class:(0,o.normalizeClass)(["w-full mt-2",{"p-invalid":(0,o.unref)(l)}]),id:(0,o.unref)(u),"aria-describedby":(0,o.unref)(c),"option-disabled":e.optionDisabled,"option-label":e.optionLabel,"option-value":e.optionValue,placeholder:e.placeholder,options:e.options,"model-value":e.modelValue,onChange:d[0]||(d[0]=function(e){return t.$emit("update:modelValue",e.value)})},{value:(0,o.withCtx)((function(e){return[e.value?((0,o.openBlock)(),(0,o.createElementBlock)("div",n,(0,o.toDisplayString)(s(e.value)),1)):((0,o.openBlock)(),(0,o.createElementBlock)("div",a,(0,o.toDisplayString)(e.placeholder),1))]})),option:(0,o.withCtx)((function(e){var l=e.option,r=e.index;return[(0,o.renderSlot)(t.$slots,"option",{option:l,index:r})]})),_:3},8,["class","id","aria-describedby","option-disabled","option-label","option-value","placeholder","options","model-value"]),e.error?((0,o.openBlock)(),(0,o.createElementBlock)("small",{key:0,id:(0,o.unref)(c),class:(0,o.normalizeClass)({"p-error":(0,o.unref)(l)})},(0,o.toDisplayString)(e.error),11,i)):(0,o.createCommentVNode)("",!0)],64)}}}},7098:(e,t,l)=>{l.d(t,{Z:()=>i});var o=l(821),r={class:"field"},n=["for"],a=["id"];const i={props:{type:{type:String,default:"text"},label:{type:String,required:!0},disabled:{type:Boolean,default:!1},placeholder:{type:String,required:!0},error:{type:String,default:null},modelValue:null},emits:["update:modelValue"],setup:function(e){var t=e,l=(0,o.computed)((function(){return!!t.error})),i=(0,o.computed)((function(){return t.label.toLowerCase().replace(/\s+/g,"-")})),u=(0,o.computed)((function(){return t.label.toLowerCase().replace(/\s+/g,"-")+"-help"}));return function(t,c){var s=(0,o.resolveComponent)("InputText");return(0,o.openBlock)(),(0,o.createElementBlock)("div",r,[(0,o.createElementVNode)("label",{for:(0,o.unref)(i)},(0,o.toDisplayString)(e.label),9,n),(0,o.createVNode)(s,{class:(0,o.normalizeClass)(["w-full",{"p-invalid":(0,o.unref)(l)}]),id:(0,o.unref)(i),"aria-describedby":(0,o.unref)(u),"model-value":e.type,placeholder:e.placeholder,value:e.modelValue,disabled:e.disabled,onInput:c[0]||(c[0]=function(e){return t.$emit("update:modelValue",e.target.value)})},null,8,["class","id","aria-describedby","model-value","placeholder","value","disabled"]),e.error?((0,o.openBlock)(),(0,o.createElementBlock)("small",{key:0,id:(0,o.unref)(u),class:(0,o.normalizeClass)({"p-error":(0,o.unref)(l)})},(0,o.toDisplayString)(e.error),11,a)):(0,o.createCommentVNode)("",!0)])}}}},3444:(e,t,l)=>{l.d(t,{Z:()=>T});var o=l(821),r=l(9038),n={class:"layout-topbar"},a=(0,o.createElementVNode)("div",{class:"layout-topbar-logo"},[(0,o.createElementVNode)("img",{alt:"Logo",src:"/images/logo-dark.svg"}),(0,o.createElementVNode)("span",null,"SAKAI")],-1),i=[(0,o.createElementVNode)("i",{class:"pi pi-bars"},null,-1)],u={class:"p-link layout-topbar-menu-button layout-topbar-button"},c=[(0,o.createElementVNode)("i",{class:"pi pi-ellipsis-v"},null,-1)],s={class:"layout-topbar-menu hidden lg:flex origin-top"},d={class:"hidden lg:inline"},p=(0,o.createElementVNode)("i",{class:"pi pi-user"},null,-1),m=(0,o.createElementVNode)("span",null,"Pengaturan Profil",-1),f=(0,o.createElementVNode)("i",{class:"pi pi-sign-out"},null,-1),v=(0,o.createElementVNode)("span",null,"Sign Out",-1);const k={emits:["menu-toggle"],setup:function(e){return function(e,t){var l=(0,o.resolveDirective)("styleclass"),k=(0,o.resolveDirective)("tooltip");return(0,o.openBlock)(),(0,o.createElementBlock)("div",n,[a,(0,o.createElementVNode)("button",{class:"p-link layout-menu-button layout-topbar-button",onClick:t[0]||(t[0]=function(t){return e.$emit("menu-toggle")})},i),(0,o.withDirectives)(((0,o.openBlock)(),(0,o.createElementBlock)("button",u,c)),[[l,{selector:"@next",enterClass:"hidden",enterActiveClass:"scalein",leaveToClass:"hidden",leaveActiveClass:"fadeout",hideOnOutsideClick:!0}]]),(0,o.createElementVNode)("ul",s,[(0,o.createElementVNode)("li",null,[(0,o.createElementVNode)("span",d,(0,o.toDisplayString)(e.$page.props.auth.user.name),1),(0,o.withDirectives)(((0,o.openBlock)(),(0,o.createBlock)((0,o.unref)(r.rU),{href:e.route("users.show",e.$page.props.auth.user.id),class:"p-link layout-topbar-button"},{default:(0,o.withCtx)((function(){return[p,m]})),_:1},8,["href"])),[[k,"Pengaturan Profil",void 0,{bottom:!0}]]),(0,o.withDirectives)(((0,o.openBlock)(),(0,o.createBlock)((0,o.unref)(r.rU),{href:e.route("logout"),as:"button",method:"post",class:"p-link layout-topbar-button"},{default:(0,o.withCtx)((function(){return[f,v]})),_:1},8,["href"])),[[k,"Sign Out",void 0,{bottom:!0}]])])])])}}};var b={key:0},y=["aria-label"],V={key:0,class:"pi pi-angle-down menuitem-toggle-icon"},g=["href","onClick","aria-label"],h={key:0,class:"pi pi-angle-down menuitem-toggle-icon"};const N={props:{items:Array,root:{type:Boolean,default:!1}},setup:function(e){var t=(0,o.ref)(null),l=function(e,l,o){l.to||e.preventDefault(),t.value=o===t.value?null:o};return function(n,a){var i=(0,o.resolveComponent)("AppSubSidebar",!0),u=(0,o.resolveDirective)("ripple");return e.items?((0,o.openBlock)(),(0,o.createElementBlock)("ul",b,[((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)(e.items,(function(n,a){return(0,o.openBlock)(),(0,o.createElementBlock)("li",{key:n.label||a,class:(0,o.normalizeClass)([{"layout-menuitem-category":e.root,"active-menuitem":t.value===a&&!n.to}])},[e.root?((0,o.openBlock)(),(0,o.createElementBlock)(o.Fragment,{key:0},[(0,o.createElementVNode)("div",{class:"layout-menuitem-root-text","aria-label":n.label},(0,o.toDisplayString)(n.label),9,y),(0,o.createVNode)(i,{items:n.items},null,8,["items"])],64)):((0,o.openBlock)(),(0,o.createElementBlock)(o.Fragment,{key:1},[n.to?(0,o.withDirectives)(((0,o.openBlock)(),(0,o.createBlock)((0,o.unref)(r.rU),{key:0,href:n.to,class:(0,o.normalizeClass)(["p-ripple",{"router-link-active":t.value,"router-link-exact-active":t.value}]),onClick:function(e){return l(e,n,a)},"aria-label":n.label},{default:(0,o.withCtx)((function(){return[(0,o.createElementVNode)("i",{class:(0,o.normalizeClass)(n.icon)},null,2),(0,o.createElementVNode)("span",null,(0,o.toDisplayString)(n.label),1),n.items?((0,o.openBlock)(),(0,o.createElementBlock)("i",V)):(0,o.createCommentVNode)("",!0)]})),_:2},1032,["href","class","onClick","aria-label"])),[[u]]):(0,o.createCommentVNode)("",!0),n.to?(0,o.createCommentVNode)("",!0):(0,o.withDirectives)(((0,o.openBlock)(),(0,o.createElementBlock)("a",{key:1,href:n.url||"#",class:"p-ripple",onClick:function(e){return l(e,n,a)},"aria-label":n.label},[(0,o.createElementVNode)("i",{class:(0,o.normalizeClass)(n.icon)},null,2),(0,o.createElementVNode)("span",null,(0,o.toDisplayString)(n.label),1),n.items?((0,o.openBlock)(),(0,o.createElementBlock)("i",h)):(0,o.createCommentVNode)("",!0)],8,g)),[[u]]),(0,o.createVNode)(o.Transition,{name:"layout-submenu-wrapper"},{default:(0,o.withCtx)((function(){return[(0,o.withDirectives)((0,o.createVNode)(i,{items:n.items},null,8,["items"]),[[o.vShow,t.value===a]])]})),_:2},1024)],64))],2)})),128))])):(0,o.createCommentVNode)("",!0)}}};var B={class:"layout-menu-container"};const E={props:{model:Array},setup:function(e){return function(t,l){return(0,o.openBlock)(),(0,o.createElementBlock)("div",B,[(0,o.createVNode)(N,{items:e.model,root:!0,class:"layout-menu"},null,8,["items"])])}}};var C={class:"layout-footer"},w=[(0,o.createElementVNode)("img",{alt:"Logo",src:"/images/logo-dark.svg",height:"20",class:"mr-2"},null,-1),(0,o.createTextVNode)(" by "),(0,o.createElementVNode)("span",{class:"font-medium ml-2"},"PrimeVue",-1)];const S={},D=(0,l(3744).Z)(S,[["render",function(e,t){return(0,o.openBlock)(),(0,o.createElementBlock)("div",C,w)}]]);var x={class:"grid"},_={class:"col-12 lg:col-8"},Z={key:0},$={key:1};const z={setup:function(e){var t=(0,o.computed)((function(){return(0,r.qt)().props.value.flash})),l=(0,o.ref)({}),n=function(){(0,r.qt)().props.value.errors={},(0,r.qt)().props.value.flash.success=null,(0,r.qt)().props.value.flash.error=null,l.value={display:"none"}};return(0,o.watch)(t,(function(){l.value={display:""}}),{deep:!0}),function(e,t){var r=(0,o.resolveComponent)("Message");return(0,o.openBlock)(),(0,o.createElementBlock)("div",x,[(0,o.createElementVNode)("div",_,[e.$page.props.flash.success?((0,o.openBlock)(),(0,o.createBlock)(r,{key:0,severity:"success",style:(0,o.normalizeStyle)(l.value),onClose:t[0]||(t[0]=function(e){return n()})},{default:(0,o.withCtx)((function(){return[(0,o.createTextVNode)((0,o.toDisplayString)(e.$page.props.flash.success),1)]})),_:1},8,["style"])):(0,o.createCommentVNode)("",!0),e.$page.props.flash.error||Object.keys(e.$page.props.errors).length>0?((0,o.openBlock)(),(0,o.createElementBlock)(o.Fragment,{key:1},[e.$page.props.flash.error?((0,o.openBlock)(),(0,o.createBlock)(r,{key:0,severity:"error",style:(0,o.normalizeStyle)(l.value),onClose:t[1]||(t[1]=function(e){return n()})},{default:(0,o.withCtx)((function(){return[(0,o.createTextVNode)((0,o.toDisplayString)(e.$page.props.flash.error),1)]})),_:1},8,["style"])):((0,o.openBlock)(),(0,o.createBlock)(r,{key:1,severity:"error",style:(0,o.normalizeStyle)(l.value),onClose:t[2]||(t[2]=function(e){return n()})},{default:(0,o.withCtx)((function(){return[1===Object.keys(e.$page.props.errors).length?((0,o.openBlock)(),(0,o.createElementBlock)("div",Z,"Ditemukan satu error pada form")):((0,o.openBlock)(),(0,o.createElementBlock)("div",$,"Ditemukan "+(0,o.toDisplayString)(Object.keys(e.$page.props.errors).length)+" error pada form",1))]})),_:1},8,["style"]))],64)):(0,o.createCommentVNode)("",!0)])])}}},A=[{label:"Menu",items:[{label:"Transaksi",icon:"pi pi-shopping-cart",to:"/transactions"},{label:"Laporan",icon:"pi pi-book",to:"/invoices"},{label:"Pengeluaran",icon:"pi pi-wallet",to:"/expenses"}]},{label:"Master",items:[{label:"User",icon:"pi pi-user",to:"/users"},{label:"Customer",icon:"pi pi-users",to:"/customers"},{label:"Outlet",icon:"pi pi-share-alt",to:"/outlets"},{label:"Laundry",icon:"pi pi-table",to:"/laundries"}]}];var U={class:"layout-sidebar"},L={class:"layout-main-container"},q={class:"layout-main"},O={key:0,class:"layout-mask p-component-overlay"};const T={setup:function(e){var t=(0,o.computed)((function(){return["layout-wrapper","layout-static",{"layout-static-sidebar-inactive":r.value,"layout-mobile-sidebar-active":l.value}]})),l=(0,o.ref)(!1),r=(0,o.ref)(!1),n=(0,o.ref)(!1),a=function(){n.value=!0,window.innerWidth>=992?r.value=!r.value:l.value=!l.value},i=function(){n.value||(l.value=!1),n.value=!1};return function(e,r){return(0,o.openBlock)(),(0,o.createElementBlock)("div",{class:(0,o.normalizeClass)((0,o.unref)(t)),onClick:i},[(0,o.createVNode)(k,{onMenuToggle:a}),(0,o.createElementVNode)("div",U,[(0,o.createVNode)(E,{model:(0,o.unref)(A)},null,8,["model"])]),(0,o.createElementVNode)("div",L,[(0,o.createElementVNode)("div",q,[(0,o.createVNode)(z),(0,o.renderSlot)(e.$slots,"default")]),(0,o.createVNode)(D)]),(0,o.createVNode)(o.Transition,{name:"layout-mask"},{default:(0,o.withCtx)((function(){return[l.value?((0,o.openBlock)(),(0,o.createElementBlock)("div",O)):(0,o.createCommentVNode)("",!0)]})),_:1})],2)}}}},4602:(e,t,l)=>{l.r(t),l.d(t,{default:()=>g});var o=l(821),r=l(9038),n=l(7098),a=l(3701),i=l(6244),u=l(3444),c={class:"grid"},s={class:"col-12 lg:col-8"},d={class:"grid"},p={class:"col-12 md:col-6"},m={class:"col-12 md:col-6"},f={class:"col-12 md:col-6"},v={class:"col-12 md:col-6"},k={class:"col-12 md:col-6"},b={class:"col-12 md:col-6"},y={class:"col-12 md:col-6"},V={class:"flex justify-content-end"};const g={props:{genders:Array,outlets:Array,roles:Array},setup:function(e){var t=(0,r.cI)({name:"",phone:"",email:"",address:"",gender_id:"",outlet_id:"",role_id:""}),l=function(){t.post(route("users.store"))},g=(0,o.computed)((function(){return(0,r.qt)().props.value.errors}));return(0,o.watch)(g,(function(){t.clearErrors()})),function(g,h){var N=(0,o.resolveComponent)("Card");return(0,o.openBlock)(),(0,o.createElementBlock)(o.Fragment,null,[(0,o.createVNode)((0,o.unref)(r.Fb),{title:"Tambah User"}),(0,o.createVNode)(u.Z,null,{default:(0,o.withCtx)((function(){return[(0,o.createElementVNode)("div",c,[(0,o.createElementVNode)("div",s,[(0,o.createVNode)(N,null,{content:(0,o.withCtx)((function(){return[(0,o.createElementVNode)("div",d,[(0,o.createElementVNode)("div",p,[(0,o.createVNode)(n.Z,{label:"Nama",placeholder:"nama",error:(0,o.unref)(t).errors.name,modelValue:(0,o.unref)(t).name,"onUpdate:modelValue":h[0]||(h[0]=function(e){return(0,o.unref)(t).name=e})},null,8,["error","modelValue"])]),(0,o.createElementVNode)("div",m,[(0,o.createVNode)(n.Z,{label:"Nomor HP",placeholder:"nomor hp",error:(0,o.unref)(t).errors.phone,modelValue:(0,o.unref)(t).phone,"onUpdate:modelValue":h[1]||(h[1]=function(e){return(0,o.unref)(t).phone=e})},null,8,["error","modelValue"])]),(0,o.createElementVNode)("div",f,[(0,o.createVNode)(n.Z,{label:"Email",placeholder:"email",error:(0,o.unref)(t).errors.email,modelValue:(0,o.unref)(t).email,"onUpdate:modelValue":h[2]||(h[2]=function(e){return(0,o.unref)(t).email=e})},null,8,["error","modelValue"])]),(0,o.createElementVNode)("div",v,[(0,o.createVNode)(n.Z,{label:"Alamat",placeholder:"alamat",error:(0,o.unref)(t).errors.address,modelValue:(0,o.unref)(t).address,"onUpdate:modelValue":h[3]||(h[3]=function(e){return(0,o.unref)(t).address=e})},null,8,["error","modelValue"])]),(0,o.createElementVNode)("div",k,[(0,o.createVNode)(a.Z,{label:"Jenis Kelamin",placeholder:"pilih satu",modelValue:(0,o.unref)(t).gender_id,"onUpdate:modelValue":h[4]||(h[4]=function(e){return(0,o.unref)(t).gender_id=e}),options:e.genders,error:(0,o.unref)(t).errors.gender_id},null,8,["modelValue","options","error"])]),(0,o.createElementVNode)("div",b,[(0,o.createVNode)(a.Z,{label:"Hak Akses",placeholder:"pilih satu",modelValue:(0,o.unref)(t).role_id,"onUpdate:modelValue":h[5]||(h[5]=function(e){return(0,o.unref)(t).role_id=e}),options:e.roles,error:(0,o.unref)(t).errors.role_id},null,8,["modelValue","options","error"])]),(0,o.createElementVNode)("div",y,[(0,o.createVNode)(a.Z,{label:"Outlet",placeholder:"pilih satu",modelValue:(0,o.unref)(t).outlet_id,"onUpdate:modelValue":h[6]||(h[6]=function(e){return(0,o.unref)(t).outlet_id=e}),options:e.outlets,error:(0,o.unref)(t).errors.outlet_id},null,8,["modelValue","options","error"])])])]})),footer:(0,o.withCtx)((function(){return[(0,o.createElementVNode)("div",V,[(0,o.createVNode)(i.Z,{label:"Simpan",onClick:l,icon:"pi pi-check",class:"p-button-text"})])]})),_:1})])])]})),_:1})],64)}}}}}]);
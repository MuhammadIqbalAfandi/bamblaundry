"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[173],{3744:(e,t)=>{t.Z=(e,t)=>{const l=e.__vccOpts||e;for(const[e,o]of t)l[e]=o;return l}},6244:(e,t,l)=>{l.d(t,{Z:()=>a});var o=l(821),r=l(9038),n={key:1,class:"p-button-label"};const a={props:{icon:String,label:String},setup:function(e){return function(t,l){return(0,o.openBlock)(),(0,o.createBlock)((0,o.unref)(r.rU),{class:"p-button p-component",as:"button",type:"button"},{default:(0,o.withCtx)((function(){return[e.icon?((0,o.openBlock)(),(0,o.createElementBlock)("span",{key:0,class:(0,o.normalizeClass)(["p-button-icon p-button-icon-left",e.icon])},null,2)):(0,o.createCommentVNode)("",!0),e.label?((0,o.openBlock)(),(0,o.createElementBlock)("span",n,(0,o.toDisplayString)(e.label),1)):(0,o.createCommentVNode)("",!0)]})),_:1})}}}},7098:(e,t,l)=>{l.d(t,{Z:()=>c});var o=l(821),r={class:"field"},n=["for"],a=["id"];const c={props:{type:{type:String,default:"text"},label:{type:String,required:!0},disabled:{type:Boolean,default:!1},placeholder:{type:String,required:!0},error:{type:String,default:null},modelValue:null},emits:["update:modelValue"],setup:function(e){var t=e,l=(0,o.computed)((function(){return!!t.error})),c=(0,o.computed)((function(){return t.label.toLowerCase().replace(/\s+/g,"-")})),u=(0,o.computed)((function(){return t.label.toLowerCase().replace(/\s+/g,"-")+"-help"}));return function(t,i){var s=(0,o.resolveComponent)("InputText");return(0,o.openBlock)(),(0,o.createElementBlock)("div",r,[(0,o.createElementVNode)("label",{for:(0,o.unref)(c)},(0,o.toDisplayString)(e.label),9,n),(0,o.createVNode)(s,{class:(0,o.normalizeClass)(["w-full",{"p-invalid":(0,o.unref)(l)}]),id:(0,o.unref)(c),"aria-describedby":(0,o.unref)(u),"model-value":e.type,placeholder:e.placeholder,value:e.modelValue,disabled:e.disabled,onInput:i[0]||(i[0]=function(e){return t.$emit("update:modelValue",e.target.value)})},null,8,["class","id","aria-describedby","model-value","placeholder","value","disabled"]),e.error?((0,o.openBlock)(),(0,o.createElementBlock)("small",{key:0,id:(0,o.unref)(u),class:(0,o.normalizeClass)({"p-error":(0,o.unref)(l)})},(0,o.toDisplayString)(e.error),11,a)):(0,o.createCommentVNode)("",!0)])}}}},3444:(e,t,l)=>{l.d(t,{Z:()=>P});var o=l(821),r=l(9038),n={class:"layout-topbar"},a=(0,o.createElementVNode)("div",{class:"layout-topbar-logo"},[(0,o.createElementVNode)("img",{alt:"Logo",src:"/images/logo-dark.svg"}),(0,o.createElementVNode)("span",null,"SAKAI")],-1),c=[(0,o.createElementVNode)("i",{class:"pi pi-bars"},null,-1)],u={class:"p-link layout-topbar-menu-button layout-topbar-button"},i=[(0,o.createElementVNode)("i",{class:"pi pi-ellipsis-v"},null,-1)],s={class:"layout-topbar-menu hidden lg:flex origin-top"},p={class:"hidden lg:inline"},d=(0,o.createElementVNode)("i",{class:"pi pi-user"},null,-1),m=(0,o.createElementVNode)("span",null,"Pengaturan Profil",-1),f=(0,o.createElementVNode)("i",{class:"pi pi-sign-out"},null,-1),v=(0,o.createElementVNode)("span",null,"Sign Out",-1);const k={emits:["menu-toggle"],setup:function(e){return function(e,t){var l=(0,o.resolveDirective)("styleclass"),k=(0,o.resolveDirective)("tooltip");return(0,o.openBlock)(),(0,o.createElementBlock)("div",n,[a,(0,o.createElementVNode)("button",{class:"p-link layout-menu-button layout-topbar-button",onClick:t[0]||(t[0]=function(t){return e.$emit("menu-toggle")})},c),(0,o.withDirectives)(((0,o.openBlock)(),(0,o.createElementBlock)("button",u,i)),[[l,{selector:"@next",enterClass:"hidden",enterActiveClass:"scalein",leaveToClass:"hidden",leaveActiveClass:"fadeout",hideOnOutsideClick:!0}]]),(0,o.createElementVNode)("ul",s,[(0,o.createElementVNode)("li",null,[(0,o.createElementVNode)("span",p,(0,o.toDisplayString)(e.$page.props.auth.user.name),1),(0,o.withDirectives)(((0,o.openBlock)(),(0,o.createBlock)((0,o.unref)(r.rU),{href:e.route("users.show",e.$page.props.auth.user.id),class:"p-link layout-topbar-button"},{default:(0,o.withCtx)((function(){return[d,m]})),_:1},8,["href"])),[[k,"Pengaturan Profil",void 0,{bottom:!0}]]),(0,o.withDirectives)(((0,o.openBlock)(),(0,o.createBlock)((0,o.unref)(r.rU),{href:e.route("logout"),as:"button",method:"post",class:"p-link layout-topbar-button"},{default:(0,o.withCtx)((function(){return[f,v]})),_:1},8,["href"])),[[k,"Sign Out",void 0,{bottom:!0}]])])])])}}};var b={key:0},y=["aria-label"],V={key:0,class:"pi pi-angle-down menuitem-toggle-icon"},g=["href","onClick","aria-label"],h={key:0,class:"pi pi-angle-down menuitem-toggle-icon"};const N={props:{items:Array,root:{type:Boolean,default:!1}},setup:function(e){var t=(0,o.ref)(null),l=function(e,l,o){l.to||e.preventDefault(),t.value=o===t.value?null:o};return function(n,a){var c=(0,o.resolveComponent)("AppSubSidebar",!0),u=(0,o.resolveDirective)("ripple");return e.items?((0,o.openBlock)(),(0,o.createElementBlock)("ul",b,[((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)(e.items,(function(n,a){return(0,o.openBlock)(),(0,o.createElementBlock)("li",{key:n.label||a,class:(0,o.normalizeClass)([{"layout-menuitem-category":e.root,"active-menuitem":t.value===a&&!n.to}])},[e.root?((0,o.openBlock)(),(0,o.createElementBlock)(o.Fragment,{key:0},[(0,o.createElementVNode)("div",{class:"layout-menuitem-root-text","aria-label":n.label},(0,o.toDisplayString)(n.label),9,y),(0,o.createVNode)(c,{items:n.items},null,8,["items"])],64)):((0,o.openBlock)(),(0,o.createElementBlock)(o.Fragment,{key:1},[n.to?(0,o.withDirectives)(((0,o.openBlock)(),(0,o.createBlock)((0,o.unref)(r.rU),{key:0,href:n.to,class:(0,o.normalizeClass)(["p-ripple",{"router-link-active":t.value,"router-link-exact-active":t.value}]),onClick:function(e){return l(e,n,a)},"aria-label":n.label},{default:(0,o.withCtx)((function(){return[(0,o.createElementVNode)("i",{class:(0,o.normalizeClass)(n.icon)},null,2),(0,o.createElementVNode)("span",null,(0,o.toDisplayString)(n.label),1),n.items?((0,o.openBlock)(),(0,o.createElementBlock)("i",V)):(0,o.createCommentVNode)("",!0)]})),_:2},1032,["href","class","onClick","aria-label"])),[[u]]):(0,o.createCommentVNode)("",!0),n.to?(0,o.createCommentVNode)("",!0):(0,o.withDirectives)(((0,o.openBlock)(),(0,o.createElementBlock)("a",{key:1,href:n.url||"#",class:"p-ripple",onClick:function(e){return l(e,n,a)},"aria-label":n.label},[(0,o.createElementVNode)("i",{class:(0,o.normalizeClass)(n.icon)},null,2),(0,o.createElementVNode)("span",null,(0,o.toDisplayString)(n.label),1),n.items?((0,o.openBlock)(),(0,o.createElementBlock)("i",h)):(0,o.createCommentVNode)("",!0)],8,g)),[[u]]),(0,o.createVNode)(o.Transition,{name:"layout-submenu-wrapper"},{default:(0,o.withCtx)((function(){return[(0,o.withDirectives)((0,o.createVNode)(c,{items:n.items},null,8,["items"]),[[o.vShow,t.value===a]])]})),_:2},1024)],64))],2)})),128))])):(0,o.createCommentVNode)("",!0)}}};var B={class:"layout-menu-container"};const C={props:{model:Array},setup:function(e){return function(t,l){return(0,o.openBlock)(),(0,o.createElementBlock)("div",B,[(0,o.createVNode)(N,{items:e.model,root:!0,class:"layout-menu"},null,8,["items"])])}}};var E={class:"layout-footer"},w=[(0,o.createElementVNode)("img",{alt:"Logo",src:"/images/logo-dark.svg",height:"20",class:"mr-2"},null,-1),(0,o.createTextVNode)(" by "),(0,o.createElementVNode)("span",{class:"font-medium ml-2"},"PrimeVue",-1)];const S={},x=(0,l(3744).Z)(S,[["render",function(e,t){return(0,o.openBlock)(),(0,o.createElementBlock)("div",E,w)}]]);var D={class:"grid"},_={class:"col-12 lg:col-8"},$={key:0},z={key:1};const O={setup:function(e){var t=(0,o.computed)((function(){return(0,r.qt)().props.value.flash})),l=(0,o.ref)({}),n=function(){(0,r.qt)().props.value.errors={},(0,r.qt)().props.value.flash.success=null,(0,r.qt)().props.value.flash.error=null,l.value={display:"none"}};return(0,o.watch)(t,(function(){l.value={display:""}}),{deep:!0}),function(e,t){var r=(0,o.resolveComponent)("Message");return(0,o.openBlock)(),(0,o.createElementBlock)("div",D,[(0,o.createElementVNode)("div",_,[e.$page.props.flash.success?((0,o.openBlock)(),(0,o.createBlock)(r,{key:0,severity:"success",style:(0,o.normalizeStyle)(l.value),onClose:t[0]||(t[0]=function(e){return n()})},{default:(0,o.withCtx)((function(){return[(0,o.createTextVNode)((0,o.toDisplayString)(e.$page.props.flash.success),1)]})),_:1},8,["style"])):(0,o.createCommentVNode)("",!0),e.$page.props.flash.error||Object.keys(e.$page.props.errors).length>0?((0,o.openBlock)(),(0,o.createElementBlock)(o.Fragment,{key:1},[e.$page.props.flash.error?((0,o.openBlock)(),(0,o.createBlock)(r,{key:0,severity:"error",style:(0,o.normalizeStyle)(l.value),onClose:t[1]||(t[1]=function(e){return n()})},{default:(0,o.withCtx)((function(){return[(0,o.createTextVNode)((0,o.toDisplayString)(e.$page.props.flash.error),1)]})),_:1},8,["style"])):((0,o.openBlock)(),(0,o.createBlock)(r,{key:1,severity:"error",style:(0,o.normalizeStyle)(l.value),onClose:t[2]||(t[2]=function(e){return n()})},{default:(0,o.withCtx)((function(){return[1===Object.keys(e.$page.props.errors).length?((0,o.openBlock)(),(0,o.createElementBlock)("div",$,"Ditemukan satu error pada form")):((0,o.openBlock)(),(0,o.createElementBlock)("div",z,"Ditemukan "+(0,o.toDisplayString)(Object.keys(e.$page.props.errors).length)+" error pada form",1))]})),_:1},8,["style"]))],64)):(0,o.createCommentVNode)("",!0)])])}}},Z=[{label:"Menu",items:[{label:"Transaksi",icon:"pi pi-shopping-cart",to:"/transactions"},{label:"Laporan",icon:"pi pi-book",to:"/invoices"},{label:"Pengeluaran",icon:"pi pi-wallet",to:"/expenses"}]},{label:"Master",items:[{label:"User",icon:"pi pi-user",to:"/users"},{label:"Customer",icon:"pi pi-users",to:"/customers"},{label:"Outlet",icon:"pi pi-share-alt",to:"/outlets"},{label:"Laundry",icon:"pi pi-table",to:"/laundries"}]}];var T={class:"layout-sidebar"},U={class:"layout-main-container"},A={class:"layout-main"},L={key:0,class:"layout-mask p-component-overlay"};const P={setup:function(e){var t=(0,o.computed)((function(){return["layout-wrapper","layout-static",{"layout-static-sidebar-inactive":r.value,"layout-mobile-sidebar-active":l.value}]})),l=(0,o.ref)(!1),r=(0,o.ref)(!1),n=(0,o.ref)(!1),a=function(){n.value=!0,window.innerWidth>=992?r.value=!r.value:l.value=!l.value},c=function(){n.value||(l.value=!1),n.value=!1};return function(e,r){return(0,o.openBlock)(),(0,o.createElementBlock)("div",{class:(0,o.normalizeClass)((0,o.unref)(t)),onClick:c},[(0,o.createVNode)(k,{onMenuToggle:a}),(0,o.createElementVNode)("div",T,[(0,o.createVNode)(C,{model:(0,o.unref)(Z)},null,8,["model"])]),(0,o.createElementVNode)("div",U,[(0,o.createElementVNode)("div",A,[(0,o.createVNode)(O),(0,o.renderSlot)(e.$slots,"default")]),(0,o.createVNode)(x)]),(0,o.createVNode)(o.Transition,{name:"layout-mask"},{default:(0,o.withCtx)((function(){return[l.value?((0,o.openBlock)(),(0,o.createElementBlock)("div",L)):(0,o.createCommentVNode)("",!0)]})),_:1})],2)}}}},1173:(e,t,l)=>{l.r(t),l.d(t,{default:()=>k});var o=l(821),r=l(9038),n=l(6244),a=l(7098),c=l(3444),u={class:"grid"},i={class:"col-12 lg:col-8"},s={class:"grid"},p={class:"col-12 md:col-6"},d={class:"col-12 md:col-6"},m={class:"col-12 md:col-6"},f={class:"col-12 md:col-6"},v={class:"flex justify-content-end"};const k={props:{outlet_number:String},setup:function(e){var t=e,l=(0,r.cI)({outlet_number:t.outlet_number,name:"",phone:"",address:""}),k=function(){l.post(route("outlets.store"))};return function(e,t){var b=(0,o.resolveComponent)("Card");return(0,o.openBlock)(),(0,o.createElementBlock)(o.Fragment,null,[(0,o.createVNode)((0,o.unref)(r.Fb),{title:"Tambah Outlet"}),(0,o.createVNode)(c.Z,null,{default:(0,o.withCtx)((function(){return[(0,o.createElementVNode)("div",u,[(0,o.createElementVNode)("div",i,[(0,o.createVNode)(b,null,{content:(0,o.withCtx)((function(){return[(0,o.createElementVNode)("div",s,[(0,o.createElementVNode)("div",p,[(0,o.createVNode)(a.Z,{disabled:!0,label:"Id Outlet",modelValue:(0,o.unref)(l).outlet_number,"onUpdate:modelValue":t[0]||(t[0]=function(e){return(0,o.unref)(l).outlet_number=e})},null,8,["modelValue"])]),(0,o.createElementVNode)("div",d,[(0,o.createVNode)(a.Z,{label:"Nama",placeholder:"nama",error:(0,o.unref)(l).errors.name,modelValue:(0,o.unref)(l).name,"onUpdate:modelValue":t[1]||(t[1]=function(e){return(0,o.unref)(l).name=e})},null,8,["error","modelValue"])]),(0,o.createElementVNode)("div",m,[(0,o.createVNode)(a.Z,{label:"Nomor HP",placeholder:"nomor hp",error:(0,o.unref)(l).errors.phone,modelValue:(0,o.unref)(l).phone,"onUpdate:modelValue":t[2]||(t[2]=function(e){return(0,o.unref)(l).phone=e})},null,8,["error","modelValue"])]),(0,o.createElementVNode)("div",f,[(0,o.createVNode)(a.Z,{label:"Alamat",placeholder:"alamat",error:(0,o.unref)(l).errors.address,modelValue:(0,o.unref)(l).address,"onUpdate:modelValue":t[3]||(t[3]=function(e){return(0,o.unref)(l).address=e})},null,8,["error","modelValue"])])])]})),footer:(0,o.withCtx)((function(){return[(0,o.createElementVNode)("div",v,[(0,o.createVNode)(n.Z,{onClick:k,label:"Simpan",icon:"pi pi-check"})])]})),_:1})])])]})),_:1})],64)}}}}}]);
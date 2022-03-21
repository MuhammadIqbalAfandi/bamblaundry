"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[603],{3744:(e,t)=>{t.Z=(e,t)=>{const l=e.__vccOpts||e;for(const[e,o]of t)l[e]=o;return l}},6244:(e,t,l)=>{l.d(t,{Z:()=>a});var o=l(821),n=l(9038),r={key:1,class:"p-button-label"};const a={props:{icon:String,label:String},setup:function(e){return function(t,l){return(0,o.openBlock)(),(0,o.createBlock)((0,o.unref)(n.rU),{class:"p-button p-component",as:"button",type:"button"},{default:(0,o.withCtx)((function(){return[e.icon?((0,o.openBlock)(),(0,o.createElementBlock)("span",{key:0,class:(0,o.normalizeClass)(["p-button-icon p-button-icon-left",e.icon])},null,2)):(0,o.createCommentVNode)("",!0),e.label?((0,o.openBlock)(),(0,o.createElementBlock)("span",r,(0,o.toDisplayString)(e.label),1)):(0,o.createCommentVNode)("",!0)]})),_:1})}}}},5869:(e,t,l)=>{l.d(t,{Z:()=>i});var o=l(821),n={class:"flex align-items-center justify-content-center"},r=(0,o.createElementVNode)("i",{class:"pi pi-exclamation-triangle mr-3",style:{"font-size":"2rem"}},null,-1),a={key:0};const i={props:{message:{type:String,default:null},header:{type:String,default:"Peringatan"},cancelLabel:{type:String,default:"Tidak"},agreeLabel:{type:String,default:"Ya"}},emits:["cancel","agree"],setup:function(e){return function(t,l){var i=(0,o.resolveComponent)("Button"),c=(0,o.resolveComponent)("Dialog");return(0,o.openBlock)(),(0,o.createBlock)(c,{header:e.header,style:{width:"450px"},modal:!0,breakpoints:{"960px":"75vw"}},{footer:(0,o.withCtx)((function(){return[(0,o.createVNode)(i,{label:e.cancelLabel,icon:"pi pi-times",class:"p-button-text",onClick:l[0]||(l[0]=function(e){return t.$emit("cancel")})},null,8,["label"]),(0,o.createVNode)(i,{label:e.agreeLabel,icon:"pi pi-check",class:"p-button-text",onClick:l[1]||(l[1]=function(e){return t.$emit("agree")})},null,8,["label"])]})),default:(0,o.withCtx)((function(){return[(0,o.createElementVNode)("div",n,[r,e.message?((0,o.openBlock)(),(0,o.createElementBlock)("p",a,(0,o.toDisplayString)(e.message),1)):(0,o.createCommentVNode)("",!0)])]})),_:1},8,["header"])}}}},3701:(e,t,l)=>{l.d(t,{Z:()=>c});var o=l(821),n=["for"],r={key:0},a={key:1},i=["id"];const c={props:{optionLabel:{type:String,default:"label"},optionValue:{type:String,default:"value"},optionDisabled:{type:String,default:"disabled"},options:{type:Array,required:!0},label:{type:String,required:!0},placeholder:{type:String,required:!0},error:{type:String,default:null},modelValue:null},emits:["update:modelValue"],setup:function(e){var t=e,l=(0,o.computed)((function(){return!!t.error})),c=(0,o.computed)((function(){return t.label.toLowerCase().replace(/\s+/g,"-")})),u=(0,o.computed)((function(){return t.label.toLowerCase().replace(/\s+/g,"-")+"-help"})),s=function(e){var l=t.options.find((function(l){return l[t.optionValue]==e}));if(l)return l[t.optionLabel]};return function(t,d){var p=(0,o.resolveComponent)("Dropdown");return(0,o.openBlock)(),(0,o.createElementBlock)(o.Fragment,null,[(0,o.createElementVNode)("label",{for:(0,o.unref)(c)},(0,o.toDisplayString)(e.label),9,n),(0,o.createVNode)(p,{class:(0,o.normalizeClass)(["w-full mt-2",{"p-invalid":(0,o.unref)(l)}]),id:(0,o.unref)(c),"aria-describedby":(0,o.unref)(u),"option-disabled":e.optionDisabled,"option-label":e.optionLabel,"option-value":e.optionValue,placeholder:e.placeholder,options:e.options,"model-value":e.modelValue,onChange:d[0]||(d[0]=function(e){return t.$emit("update:modelValue",e.value)})},{value:(0,o.withCtx)((function(e){return[e.value?((0,o.openBlock)(),(0,o.createElementBlock)("div",r,(0,o.toDisplayString)(s(e.value)),1)):((0,o.openBlock)(),(0,o.createElementBlock)("div",a,(0,o.toDisplayString)(e.placeholder),1))]})),option:(0,o.withCtx)((function(e){var l=e.option,n=e.index;return[(0,o.renderSlot)(t.$slots,"option",{option:l,index:n})]})),_:3},8,["class","id","aria-describedby","option-disabled","option-label","option-value","placeholder","options","model-value"]),e.error?((0,o.openBlock)(),(0,o.createElementBlock)("small",{key:0,id:(0,o.unref)(u),class:(0,o.normalizeClass)({"p-error":(0,o.unref)(l)})},(0,o.toDisplayString)(e.error),11,i)):(0,o.createCommentVNode)("",!0)],64)}}}},7098:(e,t,l)=>{l.d(t,{Z:()=>i});var o=l(821),n={class:"field"},r=["for"],a=["id"];const i={props:{type:{type:String,default:"text"},label:{type:String,required:!0},disabled:{type:Boolean,default:!1},placeholder:{type:String,required:!0},error:{type:String,default:null},modelValue:null},emits:["update:modelValue"],setup:function(e){var t=e,l=(0,o.computed)((function(){return!!t.error})),i=(0,o.computed)((function(){return t.label.toLowerCase().replace(/\s+/g,"-")})),c=(0,o.computed)((function(){return t.label.toLowerCase().replace(/\s+/g,"-")+"-help"}));return function(t,u){var s=(0,o.resolveComponent)("InputText");return(0,o.openBlock)(),(0,o.createElementBlock)("div",n,[(0,o.createElementVNode)("label",{for:(0,o.unref)(i)},(0,o.toDisplayString)(e.label),9,r),(0,o.createVNode)(s,{class:(0,o.normalizeClass)(["w-full",{"p-invalid":(0,o.unref)(l)}]),id:(0,o.unref)(i),"aria-describedby":(0,o.unref)(c),"model-value":e.type,placeholder:e.placeholder,value:e.modelValue,disabled:e.disabled,onInput:u[0]||(u[0]=function(e){return t.$emit("update:modelValue",e.target.value)})},null,8,["class","id","aria-describedby","model-value","placeholder","value","disabled"]),e.error?((0,o.openBlock)(),(0,o.createElementBlock)("small",{key:0,id:(0,o.unref)(c),class:(0,o.normalizeClass)({"p-error":(0,o.unref)(l)})},(0,o.toDisplayString)(e.error),11,a)):(0,o.createCommentVNode)("",!0)])}}}},3444:(e,t,l)=>{l.d(t,{Z:()=>q});var o=l(821),n=l(9038),r={class:"layout-topbar"},a=(0,o.createElementVNode)("div",{class:"layout-topbar-logo"},[(0,o.createElementVNode)("img",{alt:"Logo",src:"/images/logo-dark.svg"}),(0,o.createElementVNode)("span",null,"SAKAI")],-1),i=[(0,o.createElementVNode)("i",{class:"pi pi-bars"},null,-1)],c={class:"p-link layout-topbar-menu-button layout-topbar-button"},u=[(0,o.createElementVNode)("i",{class:"pi pi-ellipsis-v"},null,-1)],s={class:"layout-topbar-menu hidden lg:flex origin-top"},d={class:"hidden lg:inline"},p=(0,o.createElementVNode)("i",{class:"pi pi-user"},null,-1),m=(0,o.createElementVNode)("span",null,"Pengaturan Profil",-1),f=(0,o.createElementVNode)("i",{class:"pi pi-sign-out"},null,-1),v=(0,o.createElementVNode)("span",null,"Sign Out",-1);const b={emits:["menu-toggle"],setup:function(e){return function(e,t){var l=(0,o.resolveDirective)("styleclass"),b=(0,o.resolveDirective)("tooltip");return(0,o.openBlock)(),(0,o.createElementBlock)("div",r,[a,(0,o.createElementVNode)("button",{class:"p-link layout-menu-button layout-topbar-button",onClick:t[0]||(t[0]=function(t){return e.$emit("menu-toggle")})},i),(0,o.withDirectives)(((0,o.openBlock)(),(0,o.createElementBlock)("button",c,u)),[[l,{selector:"@next",enterClass:"hidden",enterActiveClass:"scalein",leaveToClass:"hidden",leaveActiveClass:"fadeout",hideOnOutsideClick:!0}]]),(0,o.createElementVNode)("ul",s,[(0,o.createElementVNode)("li",null,[(0,o.createElementVNode)("span",d,(0,o.toDisplayString)(e.$page.props.auth.user.name),1),(0,o.withDirectives)(((0,o.openBlock)(),(0,o.createBlock)((0,o.unref)(n.rU),{href:e.route("users.show",e.$page.props.auth.user.id),class:"p-link layout-topbar-button"},{default:(0,o.withCtx)((function(){return[p,m]})),_:1},8,["href"])),[[b,"Pengaturan Profil",void 0,{bottom:!0}]]),(0,o.withDirectives)(((0,o.openBlock)(),(0,o.createBlock)((0,o.unref)(n.rU),{href:e.route("logout"),as:"button",method:"post",class:"p-link layout-topbar-button"},{default:(0,o.withCtx)((function(){return[f,v]})),_:1},8,["href"])),[[b,"Sign Out",void 0,{bottom:!0}]])])])])}}};var k={key:0},g=["aria-label"],y={key:0,class:"pi pi-angle-down menuitem-toggle-icon"},V=["href","onClick","aria-label"],h={key:0,class:"pi pi-angle-down menuitem-toggle-icon"};const N={props:{items:Array,root:{type:Boolean,default:!1}},setup:function(e){var t=(0,o.ref)(null),l=function(e,l,o){l.to||e.preventDefault(),t.value=o===t.value?null:o};return function(r,a){var i=(0,o.resolveComponent)("AppSubSidebar",!0),c=(0,o.resolveDirective)("ripple");return e.items?((0,o.openBlock)(),(0,o.createElementBlock)("ul",k,[((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)(e.items,(function(r,a){return(0,o.openBlock)(),(0,o.createElementBlock)("li",{key:r.label||a,class:(0,o.normalizeClass)([{"layout-menuitem-category":e.root,"active-menuitem":t.value===a&&!r.to}])},[e.root?((0,o.openBlock)(),(0,o.createElementBlock)(o.Fragment,{key:0},[(0,o.createElementVNode)("div",{class:"layout-menuitem-root-text","aria-label":r.label},(0,o.toDisplayString)(r.label),9,g),(0,o.createVNode)(i,{items:r.items},null,8,["items"])],64)):((0,o.openBlock)(),(0,o.createElementBlock)(o.Fragment,{key:1},[r.to?(0,o.withDirectives)(((0,o.openBlock)(),(0,o.createBlock)((0,o.unref)(n.rU),{key:0,href:r.to,class:(0,o.normalizeClass)(["p-ripple",{"router-link-active":t.value,"router-link-exact-active":t.value}]),onClick:function(e){return l(e,r,a)},"aria-label":r.label},{default:(0,o.withCtx)((function(){return[(0,o.createElementVNode)("i",{class:(0,o.normalizeClass)(r.icon)},null,2),(0,o.createElementVNode)("span",null,(0,o.toDisplayString)(r.label),1),r.items?((0,o.openBlock)(),(0,o.createElementBlock)("i",y)):(0,o.createCommentVNode)("",!0)]})),_:2},1032,["href","class","onClick","aria-label"])),[[c]]):(0,o.createCommentVNode)("",!0),r.to?(0,o.createCommentVNode)("",!0):(0,o.withDirectives)(((0,o.openBlock)(),(0,o.createElementBlock)("a",{key:1,href:r.url||"#",class:"p-ripple",onClick:function(e){return l(e,r,a)},"aria-label":r.label},[(0,o.createElementVNode)("i",{class:(0,o.normalizeClass)(r.icon)},null,2),(0,o.createElementVNode)("span",null,(0,o.toDisplayString)(r.label),1),r.items?((0,o.openBlock)(),(0,o.createElementBlock)("i",h)):(0,o.createCommentVNode)("",!0)],8,V)),[[c]]),(0,o.createVNode)(o.Transition,{name:"layout-submenu-wrapper"},{default:(0,o.withCtx)((function(){return[(0,o.withDirectives)((0,o.createVNode)(i,{items:r.items},null,8,["items"]),[[o.vShow,t.value===a]])]})),_:2},1024)],64))],2)})),128))])):(0,o.createCommentVNode)("",!0)}}};var C={class:"layout-menu-container"};const B={props:{model:Array},setup:function(e){return function(t,l){return(0,o.openBlock)(),(0,o.createElementBlock)("div",C,[(0,o.createVNode)(N,{items:e.model,root:!0,class:"layout-menu"},null,8,["items"])])}}};var E={class:"layout-footer"},w=[(0,o.createElementVNode)("img",{alt:"Logo",src:"/images/logo-dark.svg",height:"20",class:"mr-2"},null,-1),(0,o.createTextVNode)(" by "),(0,o.createElementVNode)("span",{class:"font-medium ml-2"},"PrimeVue",-1)];const S={},x=(0,l(3744).Z)(S,[["render",function(e,t){return(0,o.openBlock)(),(0,o.createElementBlock)("div",E,w)}]]);var D={class:"grid"},_={class:"col-12 lg:col-8"},$={key:0},L={key:1};const Z={setup:function(e){var t=(0,o.computed)((function(){return(0,n.qt)().props.value.flash})),l=(0,o.ref)({}),r=function(){(0,n.qt)().props.value.errors={},(0,n.qt)().props.value.flash.success=null,(0,n.qt)().props.value.flash.error=null,l.value={display:"none"}};return(0,o.watch)(t,(function(){l.value={display:""}}),{deep:!0}),function(e,t){var n=(0,o.resolveComponent)("Message");return(0,o.openBlock)(),(0,o.createElementBlock)("div",D,[(0,o.createElementVNode)("div",_,[e.$page.props.flash.success?((0,o.openBlock)(),(0,o.createBlock)(n,{key:0,severity:"success",style:(0,o.normalizeStyle)(l.value),onClose:t[0]||(t[0]=function(e){return r()})},{default:(0,o.withCtx)((function(){return[(0,o.createTextVNode)((0,o.toDisplayString)(e.$page.props.flash.success),1)]})),_:1},8,["style"])):(0,o.createCommentVNode)("",!0),e.$page.props.flash.error||Object.keys(e.$page.props.errors).length>0?((0,o.openBlock)(),(0,o.createElementBlock)(o.Fragment,{key:1},[e.$page.props.flash.error?((0,o.openBlock)(),(0,o.createBlock)(n,{key:0,severity:"error",style:(0,o.normalizeStyle)(l.value),onClose:t[1]||(t[1]=function(e){return r()})},{default:(0,o.withCtx)((function(){return[(0,o.createTextVNode)((0,o.toDisplayString)(e.$page.props.flash.error),1)]})),_:1},8,["style"])):((0,o.openBlock)(),(0,o.createBlock)(n,{key:1,severity:"error",style:(0,o.normalizeStyle)(l.value),onClose:t[2]||(t[2]=function(e){return r()})},{default:(0,o.withCtx)((function(){return[1===Object.keys(e.$page.props.errors).length?((0,o.openBlock)(),(0,o.createElementBlock)("div",$,"Ditemukan satu error pada form")):((0,o.openBlock)(),(0,o.createElementBlock)("div",L,"Ditemukan "+(0,o.toDisplayString)(Object.keys(e.$page.props.errors).length)+" error pada form",1))]})),_:1},8,["style"]))],64)):(0,o.createCommentVNode)("",!0)])])}}},z=[{label:"Menu",items:[{label:"Transaksi",icon:"pi pi-shopping-cart",to:"/transactions"},{label:"Laporan",icon:"pi pi-book",to:"/invoices"},{label:"Pengeluaran",icon:"pi pi-wallet",to:"/expenses"}]},{label:"Master",items:[{label:"User",icon:"pi pi-user",to:"/users"},{label:"Customer",icon:"pi pi-users",to:"/customers"},{label:"Outlet",icon:"pi pi-share-alt",to:"/outlets"},{label:"Laundry",icon:"pi pi-table",to:"/laundries"}]}];var U={class:"layout-sidebar"},A={class:"layout-main-container"},O={class:"layout-main"},T={key:0,class:"layout-mask p-component-overlay"};const q={setup:function(e){var t=(0,o.computed)((function(){return["layout-wrapper","layout-static",{"layout-static-sidebar-inactive":n.value,"layout-mobile-sidebar-active":l.value}]})),l=(0,o.ref)(!1),n=(0,o.ref)(!1),r=(0,o.ref)(!1),a=function(){r.value=!0,window.innerWidth>=992?n.value=!n.value:l.value=!l.value},i=function(){r.value||(l.value=!1),r.value=!1};return function(e,n){return(0,o.openBlock)(),(0,o.createElementBlock)("div",{class:(0,o.normalizeClass)((0,o.unref)(t)),onClick:i},[(0,o.createVNode)(b,{onMenuToggle:a}),(0,o.createElementVNode)("div",U,[(0,o.createVNode)(B,{model:(0,o.unref)(z)},null,8,["model"])]),(0,o.createElementVNode)("div",A,[(0,o.createElementVNode)("div",O,[(0,o.createVNode)(Z),(0,o.renderSlot)(e.$slots,"default")]),(0,o.createVNode)(x)]),(0,o.createVNode)(o.Transition,{name:"layout-mask"},{default:(0,o.withCtx)((function(){return[l.value?((0,o.openBlock)(),(0,o.createElementBlock)("div",T)):(0,o.createCommentVNode)("",!0)]})),_:1})],2)}}}},6603:(e,t,l)=>{l.r(t),l.d(t,{default:()=>V});var o=l(821),n=l(9680),r=l(9038),a=l(6244),i=l(3701),c=l(7098),u=l(5869),s=l(3444),d={class:"grid"},p={class:"col-12 lg:col-8"},m={class:"grid"},f={class:"col-12 md:col-6"},v={class:"col-12 md:col-6"},b={class:"col-12 md:col-6"},k={class:"col-12 md:col-6"},g={class:"col-12 md:col-6"},y={class:"flex flex-column sm:flex-row align-items-center sm:justify-content-center sm:justify-content-between"};const V={props:{customer:Object,genders:Array},setup:function(e){var t=e,l=(0,r.cI)({customer_number:t.customer.customer_number,name:t.customer.name,phone:t.customer.phone,address:t.customer.address,gender_id:t.customer.gender_id}),V=function(){l.put(route("customers.update",t.customer.id))},h=(0,o.ref)(!1),N=function(){h.value=!0},C=function(){return h.value=!1};return function(t,B){var E=(0,o.resolveComponent)("Button"),w=(0,o.resolveComponent)("Card");return(0,o.openBlock)(),(0,o.createElementBlock)(o.Fragment,null,[(0,o.createVNode)((0,o.unref)(r.Fb),{title:"Ubah Customer"}),(0,o.createVNode)(s.Z,null,{default:(0,o.withCtx)((function(){return[(0,o.createElementVNode)("div",d,[(0,o.createElementVNode)("div",p,[(0,o.createVNode)(w,null,{content:(0,o.withCtx)((function(){return[(0,o.createElementVNode)("div",m,[(0,o.createElementVNode)("div",f,[(0,o.createVNode)(c.Z,{disabled:!0,label:"Id Customer",modelValue:(0,o.unref)(l).customer_number,"onUpdate:modelValue":B[0]||(B[0]=function(e){return(0,o.unref)(l).customer_number=e})},null,8,["modelValue"])]),(0,o.createElementVNode)("div",v,[(0,o.createVNode)(c.Z,{label:"Nama",placeholder:"nama",error:(0,o.unref)(l).errors.name,modelValue:(0,o.unref)(l).name,"onUpdate:modelValue":B[1]||(B[1]=function(e){return(0,o.unref)(l).name=e})},null,8,["error","modelValue"])]),(0,o.createElementVNode)("div",b,[(0,o.createVNode)(c.Z,{label:"Nomor HP",placeholder:"nomor hp",error:(0,o.unref)(l).errors.phone,modelValue:(0,o.unref)(l).phone,"onUpdate:modelValue":B[2]||(B[2]=function(e){return(0,o.unref)(l).phone=e})},null,8,["error","modelValue"])]),(0,o.createElementVNode)("div",k,[(0,o.createVNode)(c.Z,{label:"Alamat",placeholder:"alamat",error:(0,o.unref)(l).errors.address,modelValue:(0,o.unref)(l).address,"onUpdate:modelValue":B[3]||(B[3]=function(e){return(0,o.unref)(l).address=e})},null,8,["error","modelValue"])]),(0,o.createElementVNode)("div",g,[(0,o.createVNode)(i.Z,{label:"Jenis Kelamin",placeholder:"Pilih satu",modelValue:(0,o.unref)(l).gender_id,"onUpdate:modelValue":B[4]||(B[4]=function(e){return(0,o.unref)(l).gender_id=e}),options:e.genders,error:(0,o.unref)(l).errors.gender_id},null,8,["modelValue","options","error"])])])]})),footer:(0,o.withCtx)((function(){return[(0,o.createElementVNode)("div",y,[(0,o.createVNode)(u.Z,{message:"Yakin akan menghapus data ini?",visible:h.value,"onUpdate:visible":B[5]||(B[5]=function(e){return h.value=e}),onAgree:B[6]||(B[6]=function(t){return l=e.customer.id,n.Inertia.delete(route("customers.destroy",l));var l}),onCancel:C},null,8,["visible"]),(0,o.createVNode)(E,{label:"Hapus",icon:"pi pi-trash",class:"p-button-text p-button-danger",onClick:N}),(0,o.createVNode)(a.Z,{onClick:V,label:"Simpan",icon:"pi pi-check"})])]})),_:1})])])]})),_:1})],64)}}}}}]);
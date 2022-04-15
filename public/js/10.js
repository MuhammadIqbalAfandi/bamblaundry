"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[10],{3744:(e,t)=>{t.Z=(e,t)=>{const o=e.__vccOpts||e;for(const[e,n]of t)o[e]=n;return o}},5869:(e,t,o)=>{o.d(t,{Z:()=>i});var n=o(821),l={class:"flex align-items-center justify-content-center"},a=(0,n.createElementVNode)("i",{class:"pi pi-exclamation-triangle mr-3",style:{"font-size":"2rem"}},null,-1),r={key:0};const i={props:{message:{type:String,default:null},header:{type:String,default:"Peringatan"},cancelLabel:{type:String,default:"Tidak"},agreeLabel:{type:String,default:"Ya"}},emits:["cancel","agree"],setup:function(e){return function(t,o){var i=(0,n.resolveComponent)("Button"),c=(0,n.resolveComponent)("Dialog");return(0,n.openBlock)(),(0,n.createBlock)(c,{header:e.header,style:{width:"450px"},modal:!0,breakpoints:{"960px":"75vw"}},{footer:(0,n.withCtx)((function(){return[(0,n.createVNode)(i,{label:e.cancelLabel,icon:"pi pi-times",class:"p-button-text",onClick:o[0]||(o[0]=function(e){return t.$emit("cancel")})},null,8,["label"]),(0,n.createVNode)(i,{label:e.agreeLabel,icon:"pi pi-check",class:"p-button-text",onClick:o[1]||(o[1]=function(e){return t.$emit("agree")})},null,8,["label"])]})),default:(0,n.withCtx)((function(){return[(0,n.createElementVNode)("div",l,[a,e.message?((0,n.openBlock)(),(0,n.createElementBlock)("p",r,(0,n.toDisplayString)(e.message),1)):(0,n.createCommentVNode)("",!0)])]})),_:1},8,["header"])}}}},7098:(e,t,o)=>{o.d(t,{Z:()=>i});var n=o(821),l={class:"field"},a=["for"],r=["id"];const i={props:{type:{type:String,default:"text"},label:{type:String,required:!0},disabled:{type:Boolean,default:!1},placeholder:{type:String,required:!0},error:{type:String,default:null},modelValue:null},emits:["update:modelValue"],setup:function(e){var t=e,o=(0,n.computed)((function(){return!!t.error})),i=(0,n.computed)((function(){return t.label.toLowerCase().replace(/\s+/g,"-")})),c=(0,n.computed)((function(){return t.label.toLowerCase().replace(/\s+/g,"-")+"-help"}));return function(t,s){var u=(0,n.resolveComponent)("InputText");return(0,n.openBlock)(),(0,n.createElementBlock)("div",l,[(0,n.createElementVNode)("label",{for:(0,n.unref)(i)},(0,n.toDisplayString)(e.label),9,a),(0,n.createVNode)(u,{class:(0,n.normalizeClass)(["w-full",{"p-invalid":(0,n.unref)(o)}]),id:(0,n.unref)(i),"aria-describedby":(0,n.unref)(c),"model-value":e.modelValue,type:e.type,placeholder:e.placeholder,value:e.modelValue,disabled:e.disabled,onInput:s[0]||(s[0]=function(e){return t.$emit("update:modelValue",e.target.value)})},null,8,["class","id","aria-describedby","model-value","type","placeholder","value","disabled"]),e.error?((0,n.openBlock)(),(0,n.createElementBlock)("small",{key:0,id:(0,n.unref)(c),class:(0,n.normalizeClass)({"p-error":(0,n.unref)(o)})},(0,n.toDisplayString)(e.error),11,r)):(0,n.createCommentVNode)("",!0)])}}}},2676:(e,t,o)=>{o.d(t,{Z:()=>P});var n=o(821),l=o(9038),a={class:"layout-topbar"},r=(0,n.createElementVNode)("div",{class:"layout-topbar-logo"},[(0,n.createElementVNode)("img",{alt:"Logo",src:"/images/logo.png",class:"md:mr-3"}),(0,n.createElementVNode)("span",{class:"md:block hidden"},"BAMB'S LAUNDRY")],-1),i=[(0,n.createElementVNode)("i",{class:"pi pi-bars"},null,-1)],c={class:"p-link layout-topbar-menu-button layout-topbar-button"},s=[(0,n.createElementVNode)("i",{class:"pi pi-ellipsis-v"},null,-1)],u={class:"layout-topbar-menu hidden lg:flex origin-top"},p={class:"hidden lg:inline"},m=(0,n.createElementVNode)("i",{class:"pi pi-user"},null,-1),d=(0,n.createElementVNode)("span",null,"Profil Saya",-1),f=(0,n.createElementVNode)("i",{class:"pi pi-sign-out"},null,-1),b=(0,n.createElementVNode)("span",null,"Sign Out",-1);const k={emits:["menu-toggle"],setup:function(e){return function(e,t){var o=(0,n.resolveDirective)("styleclass"),k=(0,n.resolveDirective)("tooltip");return(0,n.openBlock)(),(0,n.createElementBlock)("div",a,[r,(0,n.createElementVNode)("button",{class:"p-link layout-menu-button layout-topbar-button",onClick:t[0]||(t[0]=function(t){return e.$emit("menu-toggle")})},i),(0,n.withDirectives)(((0,n.openBlock)(),(0,n.createElementBlock)("button",c,s)),[[o,{selector:"@next",enterClass:"hidden",enterActiveClass:"scalein",leaveToClass:"hidden",leaveActiveClass:"fadeout",hideOnOutsideClick:!0}]]),(0,n.createElementVNode)("ul",u,[(0,n.createElementVNode)("li",null,[(0,n.createElementVNode)("span",p,(0,n.toDisplayString)(e.$page.props.auth.user.name),1),(0,n.withDirectives)(((0,n.openBlock)(),(0,n.createBlock)((0,n.unref)(l.rU),{href:e.route("users.show",e.$page.props.auth.user.id),class:"p-link layout-topbar-button"},{default:(0,n.withCtx)((function(){return[m,d]})),_:1},8,["href"])),[[k,"Profil Saya",void 0,{bottom:!0}]]),(0,n.withDirectives)(((0,n.openBlock)(),(0,n.createBlock)((0,n.unref)(l.rU),{href:e.route("logout"),as:"button",method:"post",class:"p-link layout-topbar-button"},{default:(0,n.withCtx)((function(){return[f,b]})),_:1},8,["href"])),[[k,"Sign Out",void 0,{bottom:!0}]])])])])}}};var v={key:0},y=["aria-label"],g={key:0,class:"pi pi-fw pi-angle-down menuitem-toggle-icon"},h=["href","target","aria-label","onClick"],V={key:0,class:"pi pi-fw pi-angle-down menuitem-toggle-icon"};const N={props:{items:Array,root:{type:Boolean,default:!1}},emits:["menuitem-click"],setup:function(e,t){var o=t.emit,a=(0,n.ref)(null),r=function(e,t,n){t.disabled?e.preventDefault():(t.to||t.url||e.preventDefault(),t.command&&t.command({originalEvent:e,item:t}),a.value=n===a.value?null:n,o("menuitem-click",{originalEvent:e,item:t}))},i=function(e){return"function"==typeof e.visible?e.visible():!1!==e.visible};return function(t,o){var c=(0,n.resolveComponent)("AppSubSidebar",!0),s=(0,n.resolveComponent)("Badge"),u=(0,n.resolveDirective)("ripple");return e.items?((0,n.openBlock)(),(0,n.createElementBlock)("ul",v,[((0,n.openBlock)(!0),(0,n.createElementBlock)(n.Fragment,null,(0,n.renderList)(e.items,(function(p,m){return(0,n.openBlock)(),(0,n.createElementBlock)(n.Fragment,null,[i(p)&&!p.separator?((0,n.openBlock)(),(0,n.createElementBlock)("li",{role:"none",key:p.label||m,class:(0,n.normalizeClass)([{"layout-menuitem-category":e.root,"active-menuitem":a.value===m&&!p.to&&!p.disabled}])},[e.root?((0,n.openBlock)(),(0,n.createElementBlock)(n.Fragment,{key:0},[(0,n.createElementVNode)("div",{class:"layout-menuitem-root-text","aria-label":p.label},(0,n.toDisplayString)(p.label),9,y),(0,n.createVNode)(c,{items:i(p)&&p.items,onMenuitemClick:o[0]||(o[0]=function(e){return t.$emit("menuitem-click",e)})},null,8,["items"])],64)):((0,n.openBlock)(),(0,n.createElementBlock)(n.Fragment,{key:1},[p.to?((0,n.openBlock)(),(0,n.createBlock)((0,n.unref)(l.rU),{key:0,role:"menuitem",href:p.to,class:(0,n.normalizeClass)([p.class,"p-ripple",{"p-disabled":p.disabled,"router-link-exact-active":t.$page.component.startsWith(p.component)||t.$page.url.startsWith(p.to)}]),style:(0,n.normalizeStyle)(p.style),target:p.target,"aria-label":p.label,onClick:function(e){return r(e,p,m)}},{default:(0,n.withCtx)((function(){return[(0,n.createElementVNode)("i",{class:(0,n.normalizeClass)(p.icon)},null,2),(0,n.createElementVNode)("span",null,(0,n.toDisplayString)(p.label),1),p.items?((0,n.openBlock)(),(0,n.createElementBlock)("i",g)):(0,n.createCommentVNode)("",!0),p.badge?((0,n.openBlock)(),(0,n.createBlock)(s,{key:1,value:p.badge},null,8,["value"])):(0,n.createCommentVNode)("",!0)]})),_:2},1032,["href","class","style","target","aria-label","onClick"])):(0,n.createCommentVNode)("",!0),p.to?(0,n.createCommentVNode)("",!0):(0,n.withDirectives)(((0,n.openBlock)(),(0,n.createElementBlock)("a",{key:1,role:"menuitem",href:p.url||"#",style:(0,n.normalizeStyle)(p.style),class:(0,n.normalizeClass)([p.class,"p-ripple",{"p-disabled":p.disabled}]),target:p.target,"aria-label":p.label,onClick:function(e){return r(e,p,m)}},[(0,n.createElementVNode)("i",{class:(0,n.normalizeClass)(p.icon)},null,2),(0,n.createElementVNode)("span",null,(0,n.toDisplayString)(p.label),1),p.items?((0,n.openBlock)(),(0,n.createElementBlock)("i",V)):(0,n.createCommentVNode)("",!0),p.badge?((0,n.openBlock)(),(0,n.createBlock)(s,{key:1,value:p.badge},null,8,["value"])):(0,n.createCommentVNode)("",!0)],14,h)),[[u]]),(0,n.createVNode)(n.Transition,{name:"layout-submenu-wrapper"},{default:(0,n.withCtx)((function(){return[(0,n.withDirectives)((0,n.createVNode)(c,{items:i(p)&&p.items,onMenuitemClick:o[1]||(o[1]=function(e){return t.$emit("menuitem-click",e)})},null,8,["items"]),[[n.vShow,a.value===m]])]})),_:2},1024)],64))],2)):(0,n.createCommentVNode)("",!0),i(p)&&p.separator?((0,n.openBlock)(),(0,n.createElementBlock)("li",{role:"separator",class:"p-menu-separator",style:(0,n.normalizeStyle)(p.style),key:"separator"+m},null,4)):(0,n.createCommentVNode)("",!0)],64)})),256))])):(0,n.createCommentVNode)("",!0)}}};var B={class:"layout-menu-container"};const C={props:{model:Array},emits:["menuitem-click"],setup:function(e,t){var o=t.emit,l=function(e){var t=e.target;"Enter"!==e.code&&"Space"!==e.code||(t.click(),e.preventDefault())},a=function(e){o("menuitem-click",e)};return function(t,o){return(0,n.openBlock)(),(0,n.createElementBlock)("div",B,[(0,n.createVNode)(N,{class:"layout-menu",items:e.model,root:!0,onKeydown:l,onMenuitemClick:a},null,8,["items"])])}}};var E={class:"layout-footer"},x=[(0,n.createTextVNode)(" Developed by "),(0,n.createElementVNode)("a",{href:"https://dijitalcode.com",target:"_blank",class:"font-medium ml-2"},"DijitalCODE",-1)];const w={},S=(0,o(3744).Z)(w,[["render",function(e,t){return(0,n.openBlock)(),(0,n.createElementBlock)("div",E,x)}]]);var D={class:"grid"},I={class:"col-12"},$={key:0},z={key:1};const M={setup:function(e){var t=(0,n.computed)((function(){return(0,l.qt)().props.value.flash})),o=(0,n.ref)({}),a=function(){(0,l.qt)().props.value.errors={},(0,l.qt)().props.value.flash.success=null,(0,l.qt)().props.value.flash.error=null,o.value={display:"none"}};return(0,n.watch)(t,(function(){o.value={display:""}}),{deep:!0}),function(e,t){var l=(0,n.resolveComponent)("Message");return(0,n.openBlock)(),(0,n.createElementBlock)("div",D,[(0,n.createElementVNode)("div",I,[e.$page.props.flash.success?((0,n.openBlock)(),(0,n.createBlock)(l,{key:0,severity:"success",style:(0,n.normalizeStyle)(o.value),onClose:a},{default:(0,n.withCtx)((function(){return[(0,n.createTextVNode)((0,n.toDisplayString)(e.$page.props.flash.success),1)]})),_:1},8,["style"])):(0,n.createCommentVNode)("",!0),e.$page.props.flash.error||Object.keys(e.$page.props.errors).length>0?((0,n.openBlock)(),(0,n.createElementBlock)(n.Fragment,{key:1},[e.$page.props.flash.error?((0,n.openBlock)(),(0,n.createBlock)(l,{key:0,severity:"error",style:(0,n.normalizeStyle)(o.value),onClose:a},{default:(0,n.withCtx)((function(){return[(0,n.createTextVNode)((0,n.toDisplayString)(e.$page.props.flash.error),1)]})),_:1},8,["style"])):((0,n.openBlock)(),(0,n.createBlock)(l,{key:1,severity:"error",style:(0,n.normalizeStyle)(o.value),onClose:a},{default:(0,n.withCtx)((function(){return[1===Object.keys(e.$page.props.errors).length?((0,n.openBlock)(),(0,n.createElementBlock)("div",$,"Ditemukan satu error pada form")):((0,n.openBlock)(),(0,n.createElementBlock)("div",z,"Ditemukan "+(0,n.toDisplayString)(Object.keys(e.$page.props.errors).length)+" error pada form",1))]})),_:1},8,["style"]))],64)):(0,n.createCommentVNode)("",!0)])])}}},T={1:[{label:"Home",items:[{label:"Dashboard",icon:"pi pi-home",to:"/dashboards",component:"home/Index"}]},{label:"Menu",items:[{label:"Transaksi",icon:"pi pi-shopping-cart",to:"/transactions",component:"transaction/Index"},{label:"Pengeluaran",icon:"pi pi-wallet",to:"/expenses",component:"expense/Index"},{label:"Laporan",icon:"pi pi-book",items:[{label:"Mutasi",icon:"pi pi-circle",to:"/reports/mutations",component:"mutation/Report"},{label:"Transaksi",icon:"pi pi-circle",to:"/reports/transactions",component:"transaction/Report"}]}]},{label:"Master",items:[{label:"User",icon:"pi pi-user",to:"/users",component:"user/Index"},{label:"Customer",icon:"pi pi-users",to:"/customers",component:"customer/Index"},{label:"Outlet",icon:"pi pi-share-alt",to:"/outlets",component:"outlet/Index"},{label:"Laundry",icon:"pi pi-table",to:"/laundries",component:"laundry/Index"},{label:"Product",icon:"pi pi-table",to:"/products",component:"product/Index"}]},{label:"Pengaturan",items:[{label:"Diskon",icon:"pi pi-percentage",to:"/discounts",component:"discount/Index"}]}],2:[{label:"Home",items:[{label:"Dashboard",icon:"pi pi-home",to:"/dashboards",component:"home/Index"}]},{label:"Menu",items:[{label:"Transaksi",icon:"pi pi-shopping-cart",to:"/transactions",component:"transaction/Index"},{label:"Pengeluaran",icon:"pi pi-wallet",to:"/expenses",component:"expense/Index"},{label:"Laporan",icon:"pi pi-book",items:[{label:"Mutasi",icon:"pi pi-circle",to:"/reports/mutations",component:"mutation/Report"},{label:"Transaksi",icon:"pi pi-circle",to:"/reports/transactions",component:"transaction/Report"}]}]},{label:"Master",items:[{label:"Customer",icon:"pi pi-users",to:"/customers",component:"customer/Index"},{label:"Laundry",icon:"pi pi-table",to:"/laundries",component:"laundry/Index"},{label:"Product",icon:"pi pi-table",to:"/products",component:"product/Index"}]},{label:"Pengaturan",items:[{label:"Diskon",icon:"pi pi-percentage",to:"/discounts",component:"discount/Index"}]}],3:[{label:"Home",items:[{label:"Dashboard",icon:"pi pi-home",to:"/dashboards",component:"home/Index"}]},{label:"Menu",items:[{label:"Transaksi",icon:"pi pi-shopping-cart",to:"/transactions",component:"transaction/Index"},{label:"Pengeluaran",icon:"pi pi-wallet",to:"/expenses",component:"expense/Index"},{label:"Laporan",icon:"pi pi-book",items:[{label:"Mutasi",icon:"pi pi-circle",to:"/reports/mutations",component:"mutation/Report"},{label:"Transaksi",icon:"pi pi-circle",to:"/reports/transactions",component:"transaction/Report"}]}]},{label:"Master",items:[{label:"Customer",icon:"pi pi-users",to:"/customers",component:"customer/Index"}]}]};var _={class:"layout-sidebar"},L={class:"layout-main-container"},O={class:"layout-main"},j={key:0,class:"layout-mask p-component-overlay"};const P={setup:function(e){var t=(0,n.computed)((function(){return["layout-wrapper","layout-static",{"layout-static-sidebar-inactive":l.value,"layout-mobile-sidebar-active":o.value}]})),o=(0,n.ref)(!1),l=(0,n.ref)(!1),a=(0,n.ref)(!1),r=function(){a.value=!0,window.innerWidth>=992?l.value=!l.value:o.value=!o.value},i=function(){a.value||(o.value=!1),a.value=!1};return function(e,l){return(0,n.openBlock)(),(0,n.createElementBlock)("div",{class:(0,n.normalizeClass)((0,n.unref)(t)),onClick:i},[(0,n.createVNode)(k,{onMenuToggle:r}),(0,n.createElementVNode)("div",_,[(0,n.createVNode)(C,{model:(0,n.unref)(T)[e.$page.props.auth.user.role_id]},null,8,["model"])]),(0,n.createElementVNode)("div",L,[(0,n.createElementVNode)("div",O,[(0,n.createVNode)(M),(0,n.renderSlot)(e.$slots,"default")]),(0,n.createVNode)(S)]),(0,n.createVNode)(n.Transition,{name:"layout-mask"},{default:(0,n.withCtx)((function(){return[o.value?((0,n.openBlock)(),(0,n.createElementBlock)("div",j)):(0,n.createCommentVNode)("",!0)]})),_:1})],2)}}}},7010:(e,t,o)=>{o.r(t),o.d(t,{default:()=>y});var n=o(821),l=o(9680),a=o(9038),r=o(7098),i=o(5869),c=o(2676),s={class:"grid"},u={class:"col-12 lg:col-8"},p={class:"grid"},m={class:"col-12 md:col-6"},d={class:"col-12 md:col-6"},f={class:"col-12 md:col-6"},b={class:"grid"},k={class:"col-12 md:col-6 flex flex-column md:flex-row justify-content-center md:justify-content-start"},v={class:"col-12 md:col-6 flex flex-column md:flex-row justify-content-center md:justify-content-end"};const y={props:{outlet:Object},setup:function(e){var t=e,o=(0,a.cI)({name:t.outlet.name,phone:t.outlet.phone,address:t.outlet.address}),y=function(){o.put(route("outlets.update",t.outlet.id))},g=(0,n.computed)((function(){return(0,a.qt)().props.value.errors}));(0,n.watch)(g,(function(){o.clearErrors()}));var h=(0,n.ref)(!1),V=function(){h.value=!0},N=function(){return h.value=!1};return function(t,g){var B=(0,n.resolveComponent)("Button"),C=(0,n.resolveComponent)("Card");return(0,n.openBlock)(),(0,n.createElementBlock)(n.Fragment,null,[(0,n.createVNode)((0,n.unref)(a.Fb),{title:"Ubah Outlet"}),(0,n.createVNode)(c.Z,null,{default:(0,n.withCtx)((function(){return[(0,n.createElementVNode)("div",s,[(0,n.createElementVNode)("div",u,[(0,n.createVNode)(C,null,{content:(0,n.withCtx)((function(){return[(0,n.createElementVNode)("div",p,[(0,n.createElementVNode)("div",m,[(0,n.createVNode)(r.Z,{label:"Nama",placeholder:"nama",error:(0,n.unref)(o).errors.name,modelValue:(0,n.unref)(o).name,"onUpdate:modelValue":g[0]||(g[0]=function(e){return(0,n.unref)(o).name=e})},null,8,["error","modelValue"])]),(0,n.createElementVNode)("div",d,[(0,n.createVNode)(r.Z,{label:"Nomor HP",placeholder:"nomor hp",error:(0,n.unref)(o).errors.phone,modelValue:(0,n.unref)(o).phone,"onUpdate:modelValue":g[1]||(g[1]=function(e){return(0,n.unref)(o).phone=e})},null,8,["error","modelValue"])]),(0,n.createElementVNode)("div",f,[(0,n.createVNode)(r.Z,{label:"Alamat",placeholder:"alamat",error:(0,n.unref)(o).errors.address,modelValue:(0,n.unref)(o).address,"onUpdate:modelValue":g[2]||(g[2]=function(e){return(0,n.unref)(o).address=e})},null,8,["error","modelValue"])])])]})),footer:(0,n.withCtx)((function(){return[(0,n.createElementVNode)("div",b,[(0,n.createElementVNode)("div",k,[(0,n.createVNode)(i.Z,{message:"Yakin akan menghapus data ini?",visible:h.value,"onUpdate:visible":g[3]||(g[3]=function(e){return h.value=e}),onAgree:g[4]||(g[4]=function(t){return o=e.outlet.id,l.Inertia.delete(route("outlets.destroy",o));var o}),onCancel:N},null,8,["visible"]),e.outlet.relation?(0,n.createCommentVNode)("",!0):((0,n.openBlock)(),(0,n.createBlock)(B,{key:0,label:"Hapus",icon:"pi pi-trash",class:"p-button-outlined p-button-danger",onClick:V}))]),(0,n.createElementVNode)("div",v,[(0,n.createVNode)(B,{label:"Simpan",icon:"pi pi-check",class:"p-button-outlined",onClick:y})])])]})),_:1})])])]})),_:1})],64)}}}}}]);
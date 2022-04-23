"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[251],{3744:(e,t)=>{t.Z=(e,t)=>{const o=e.__vccOpts||e;for(const[e,n]of t)o[e]=n;return o}},1641:(e,t,o)=>{o.d(t,{Z:()=>i});var n=o(821),l={class:"field"},r=["for"],a=["id"];const i={props:{label:{type:String,required:!0},disabled:{type:Boolean,default:!1},type:{type:String,default:"text"},mode:{type:String,default:"decimal"},incrementButtonClass:{type:String,default:null},decrementButtonClass:{type:String,default:null},incrementButtonIcon:{type:String,default:"pi pi-angle-up"},decrementButtonIcon:{type:String,default:"pi pi-angle-down"},showButtons:{type:Boolean,default:!1},buttonLayout:{type:String,default:"stacked"},min:{type:Number,default:null},max:{type:Number,default:null},step:{type:Number,default:1},prefix:{type:String,default:null},suffix:{type:String,default:null},placeholder:{type:String,required:!0},useGrouping:{type:Boolean,default:!0},currency:{type:String,default:void 0},locale:{type:String,default:void 0},error:{type:String,default:null},currencyDisplay:{type:String,default:void 0},modelValue:null},emits:["update:modelValue"],setup:function(e){var t=e,o=(0,n.computed)((function(){return!!t.error})),i=(0,n.computed)((function(){return t.label.toLowerCase().replace(/\s+/g,"-")})),c=(0,n.computed)((function(){return t.label.toLowerCase().replace(/\s+/g,"-")+"-help"}));return function(t,s){var u=(0,n.resolveComponent)("InputNumber");return(0,n.openBlock)(),(0,n.createElementBlock)("div",l,[(0,n.createElementVNode)("label",{for:(0,n.unref)(i)},(0,n.toDisplayString)(e.label),9,r),(0,n.createVNode)(u,{class:(0,n.normalizeClass)(["w-full",{"p-invalid":(0,n.unref)(o)}]),"input-class":"w-full",currency:e.currency,"currency-display":e.currencyDisplay,locale:e.locale,id:(0,n.unref)(i),"aria-describedby":(0,n.unref)(c),type:e.type,placeholder:e.placeholder,"model-value":e.modelValue,disabled:e.disabled,prefix:e.prefix,suffix:e.suffix,step:e.step,min:e.min,max:e.max,mode:e.mode,"use-grouping":e.useGrouping,"show-buttons":e.showButtons,"button-layout":e.buttonLayout,"increment-button-class":e.incrementButtonClass,"decrement-button-class":e.decrementButtonClass,"increment-button-icon":e.incrementButtonIcon,"decrement-button-icon":e.decrementButtonIcon,onInput:s[0]||(s[0]=function(e){return t.$emit("update:modelValue",e.value)})},null,8,["currency","currency-display","locale","class","id","aria-describedby","type","placeholder","model-value","disabled","prefix","suffix","step","min","max","mode","use-grouping","show-buttons","button-layout","increment-button-class","decrement-button-class","increment-button-icon","decrement-button-icon"]),e.error?((0,n.openBlock)(),(0,n.createElementBlock)("small",{key:0,id:(0,n.unref)(c),class:(0,n.normalizeClass)({"p-error":(0,n.unref)(o)})},(0,n.toDisplayString)(e.error),11,a)):(0,n.createCommentVNode)("",!0)])}}}},2676:(e,t,o)=>{o.d(t,{Z:()=>P});var n=o(821),l=o(9038),r={class:"layout-topbar"},a=(0,n.createElementVNode)("div",{class:"layout-topbar-logo"},[(0,n.createElementVNode)("img",{alt:"Logo",src:"/images/logo.png",class:"md:mr-3"}),(0,n.createElementVNode)("span",{class:"md:block hidden"},"BAMB'S LAUNDRY")],-1),i=[(0,n.createElementVNode)("i",{class:"pi pi-bars"},null,-1)],c={class:"p-link layout-topbar-menu-button layout-topbar-button"},s=[(0,n.createElementVNode)("i",{class:"pi pi-ellipsis-v"},null,-1)],u={class:"layout-topbar-menu hidden lg:flex origin-top"},p={class:"align-self-center"},d={class:"hidden lg:inline"},m=(0,n.createElementVNode)("i",{class:"pi pi-user"},null,-1),f=(0,n.createElementVNode)("span",null,"Profil Saya",-1),b=(0,n.createElementVNode)("i",{class:"pi pi-sign-out"},null,-1),y=(0,n.createElementVNode)("span",null,"Sign Out",-1);const v={emits:["menu-toggle"],setup:function(e){return function(e,t){var o=(0,n.resolveDirective)("styleclass");return(0,n.openBlock)(),(0,n.createElementBlock)("div",r,[a,(0,n.createElementVNode)("button",{class:"p-link layout-menu-button layout-topbar-button",onClick:t[0]||(t[0]=function(t){return e.$emit("menu-toggle",t)})},i),(0,n.withDirectives)(((0,n.openBlock)(),(0,n.createElementBlock)("button",c,s)),[[o,{selector:"@next",enterClass:"hidden",enterActiveClass:"scalein",leaveToClass:"hidden",leaveActiveClass:"fadeout",hideOnOutsideClick:!0}]]),(0,n.createElementVNode)("ul",u,[(0,n.createElementVNode)("li",p,[(0,n.createElementVNode)("span",d,(0,n.toDisplayString)(e.$page.props.auth.user.name),1)]),(0,n.createElementVNode)("li",null,[(0,n.createVNode)((0,n.unref)(l.rU),{href:e.route("users.show",e.$page.props.auth.user.id),class:"p-link layout-topbar-button"},{default:(0,n.withCtx)((function(){return[m,f]})),_:1},8,["href"])]),(0,n.createElementVNode)("li",null,[(0,n.createVNode)((0,n.unref)(l.rU),{href:e.route("logout"),as:"button",method:"post",class:"p-link layout-topbar-button"},{default:(0,n.withCtx)((function(){return[b,y]})),_:1},8,["href"])])])])}}};var k={key:0},g=["aria-label"],h={key:0,class:"pi pi-fw pi-angle-down menuitem-toggle-icon"},B=["href","target","aria-label","onClick"],V={key:0,class:"pi pi-fw pi-angle-down menuitem-toggle-icon"};const C={props:{items:Array,root:{type:Boolean,default:!1}},emits:["menuitem-click"],setup:function(e,t){var o=t.emit,r=(0,n.ref)(null),a=function(e,t,n){t.disabled?e.preventDefault():(t.to||t.url||e.preventDefault(),t.command&&t.command({originalEvent:e,item:t}),r.value=n===r.value?null:n,o("menuitem-click",{originalEvent:e,item:t}))},i=function(e){return"function"==typeof e.visible?e.visible():!1!==e.visible};return function(t,o){var c=(0,n.resolveComponent)("AppSubSidebar",!0),s=(0,n.resolveComponent)("Badge"),u=(0,n.resolveDirective)("ripple");return e.items?((0,n.openBlock)(),(0,n.createElementBlock)("ul",k,[((0,n.openBlock)(!0),(0,n.createElementBlock)(n.Fragment,null,(0,n.renderList)(e.items,(function(p,d){return(0,n.openBlock)(),(0,n.createElementBlock)(n.Fragment,null,[i(p)&&!p.separator?((0,n.openBlock)(),(0,n.createElementBlock)("li",{key:p.label||d,class:(0,n.normalizeClass)([{"layout-menuitem-category":e.root,"active-menuitem":r.value===d&&!p.to&&!p.disabled}]),role:"none"},[e.root?((0,n.openBlock)(),(0,n.createElementBlock)(n.Fragment,{key:0},[(0,n.createElementVNode)("div",{class:"layout-menuitem-root-text","aria-label":p.label},(0,n.toDisplayString)(p.label),9,g),(0,n.createVNode)(c,{items:i(p)&&p.items,onMenuitemClick:o[0]||(o[0]=function(e){return t.$emit("menuitem-click",e)})},null,8,["items"])],64)):((0,n.openBlock)(),(0,n.createElementBlock)(n.Fragment,{key:1},[p.to?(0,n.withDirectives)(((0,n.openBlock)(),(0,n.createBlock)((0,n.unref)(l.rU),{key:0,role:"menuitem",href:p.to,class:(0,n.normalizeClass)([p.class,"p-ripple",{"p-disabled":p.disabled,"router-link-active":t.$page.component.startsWith(p.component)||t.$page.url.startsWith(p.to),"router-link-exact-active":t.$page.component.startsWith(p.component)||t.$page.url.startsWith(p.to)}]),style:(0,n.normalizeStyle)(p.style),target:p.target,"aria-label":p.label,onClick:function(e){return a(e,p,d)}},{default:(0,n.withCtx)((function(){return[(0,n.createElementVNode)("i",{class:(0,n.normalizeClass)(p.icon)},null,2),(0,n.createElementVNode)("span",null,(0,n.toDisplayString)(p.label),1),p.items?((0,n.openBlock)(),(0,n.createElementBlock)("i",h)):(0,n.createCommentVNode)("",!0),p.badge?((0,n.openBlock)(),(0,n.createBlock)(s,{key:1,value:p.badge},null,8,["value"])):(0,n.createCommentVNode)("",!0)]})),_:2},1032,["href","class","style","target","aria-label","onClick"])),[[u]]):(0,n.createCommentVNode)("",!0),p.to?(0,n.createCommentVNode)("",!0):(0,n.withDirectives)(((0,n.openBlock)(),(0,n.createElementBlock)("a",{key:1,role:"menuitem",style:(0,n.normalizeStyle)(p.style),class:(0,n.normalizeClass)([p.class,"p-ripple",{"p-disabled":p.disabled}]),href:p.url||"#",target:p.target,"aria-label":p.label,onClick:function(e){return a(e,p,d)}},[(0,n.createElementVNode)("i",{class:(0,n.normalizeClass)(p.icon)},null,2),(0,n.createElementVNode)("span",null,(0,n.toDisplayString)(p.label),1),p.items?((0,n.openBlock)(),(0,n.createElementBlock)("i",V)):(0,n.createCommentVNode)("",!0),p.badge?((0,n.openBlock)(),(0,n.createBlock)(s,{key:1,value:p.badge},null,8,["value"])):(0,n.createCommentVNode)("",!0)],14,B)),[[u]]),(0,n.createVNode)(n.Transition,{name:"layout-submenu-wrapper"},{default:(0,n.withCtx)((function(){return[(0,n.withDirectives)((0,n.createVNode)(c,{items:i(p)&&p.items,onMenuitemClick:o[1]||(o[1]=function(e){return t.$emit("menuitem-click",e)})},null,8,["items"]),[[n.vShow,r.value===d]])]})),_:2},1024)],64))],2)):(0,n.createCommentVNode)("",!0),i(p)&&p.separator?((0,n.openBlock)(),(0,n.createElementBlock)("li",{class:"p-menu-separator",role:"separator",style:(0,n.normalizeStyle)(p.style),key:"separator"+d},null,4)):(0,n.createCommentVNode)("",!0)],64)})),256))])):(0,n.createCommentVNode)("",!0)}}};var N={class:"layout-menu-container"};const E={props:{model:Array},emits:["menuitem-click"],setup:function(e,t){var o=t.emit,l=function(e){var t=e.target;"Enter"!==e.code&&"Space"!==e.code||(t.click(),e.preventDefault())},r=function(e){o("menuitem-click",e)};return function(t,o){return(0,n.openBlock)(),(0,n.createElementBlock)("div",N,[(0,n.createVNode)(C,{class:"layout-menu",items:e.model,root:!0,onKeydown:l,onMenuitemClick:r},null,8,["items"])])}}};var x={class:"layout-footer"},w=[(0,n.createTextVNode)(" Developed by "),(0,n.createElementVNode)("a",{href:"https://dijitalcode.com",target:"_blank",class:"font-medium ml-2"},"DijitalCODE",-1)];const S={},D=(0,o(3744).Z)(S,[["render",function(e,t){return(0,n.openBlock)(),(0,n.createElementBlock)("div",x,w)}]]);var I={class:"grid"},$={class:"col-12"},L={key:0},q={key:1};const M={setup:function(e){var t=(0,n.computed)((function(){return(0,l.qt)().props.value.flash})),o=(0,n.ref)({}),r=function(){(0,l.qt)().props.value.errors={},(0,l.qt)().props.value.flash.success=null,(0,l.qt)().props.value.flash.error=null,o.value={display:"none"}};return(0,n.watch)(t,(function(){o.value={display:""}}),{deep:!0}),function(e,t){var l=(0,n.resolveComponent)("Message");return(0,n.openBlock)(),(0,n.createElementBlock)("div",I,[(0,n.createElementVNode)("div",$,[e.$page.props.flash.success?((0,n.openBlock)(),(0,n.createBlock)(l,{key:0,severity:"success",style:(0,n.normalizeStyle)(o.value),onClose:r},{default:(0,n.withCtx)((function(){return[(0,n.createTextVNode)((0,n.toDisplayString)(e.$page.props.flash.success),1)]})),_:1},8,["style"])):(0,n.createCommentVNode)("",!0),e.$page.props.flash.error||Object.keys(e.$page.props.errors).length>0?((0,n.openBlock)(),(0,n.createElementBlock)(n.Fragment,{key:1},[e.$page.props.flash.error?((0,n.openBlock)(),(0,n.createBlock)(l,{key:0,severity:"error",style:(0,n.normalizeStyle)(o.value),onClose:r},{default:(0,n.withCtx)((function(){return[(0,n.createTextVNode)((0,n.toDisplayString)(e.$page.props.flash.error),1)]})),_:1},8,["style"])):((0,n.openBlock)(),(0,n.createBlock)(l,{key:1,severity:"error",style:(0,n.normalizeStyle)(o.value),onClose:r},{default:(0,n.withCtx)((function(){return[1===Object.keys(e.$page.props.errors).length?((0,n.openBlock)(),(0,n.createElementBlock)("div",L,"Ditemukan satu error pada form")):((0,n.openBlock)(),(0,n.createElementBlock)("div",q,"Ditemukan "+(0,n.toDisplayString)(Object.keys(e.$page.props.errors).length)+" error pada form",1))]})),_:1},8,["style"]))],64)):(0,n.createCommentVNode)("",!0)])])}}},_={1:[{label:"Home",items:[{label:"Dashboard",icon:"pi pi-home",to:"/dashboards",component:"home/Index"}]},{label:"Menu",items:[{label:"Transaksi",icon:"pi pi-shopping-cart",to:"/transactions",component:"transaction/Index"},{label:"Pengeluaran",icon:"pi pi-wallet",to:"/expenses",component:"expense/Index"},{label:"Laporan",icon:"pi pi-book",items:[{label:"Mutasi",icon:"pi pi-circle",to:"/reports/mutations",component:"mutation/Report"},{label:"Transaksi",icon:"pi pi-circle",to:"/reports/transactions",component:"transaction/Report"}]}]},{label:"Master",items:[{label:"User",icon:"pi pi-user",to:"/users",component:"user/Index"},{label:"Customer",icon:"pi pi-users",to:"/customers",component:"customer/Index"},{label:"Outlet",icon:"pi pi-share-alt",to:"/outlets",component:"outlet/Index"},{label:"Laundry",icon:"pi pi-table",to:"/laundries",component:"laundry/Index"},{label:"Product",icon:"pi pi-table",to:"/products",component:"product/Index"}]},{label:"Pengaturan",items:[{label:"Diskon",icon:"pi pi-percentage",to:"/discounts",component:"discount/Index"}]}],2:[{label:"Home",items:[{label:"Dashboard",icon:"pi pi-home",to:"/dashboards",component:"home/Index"}]},{label:"Menu",items:[{label:"Transaksi",icon:"pi pi-shopping-cart",to:"/transactions",component:"transaction/Index"},{label:"Pengeluaran",icon:"pi pi-wallet",to:"/expenses",component:"expense/Index"},{label:"Laporan",icon:"pi pi-book",items:[{label:"Mutasi",icon:"pi pi-circle",to:"/reports/mutations",component:"mutation/Report"},{label:"Transaksi",icon:"pi pi-circle",to:"/reports/transactions",component:"transaction/Report"}]}]},{label:"Master",items:[{label:"Customer",icon:"pi pi-users",to:"/customers",component:"customer/Index"},{label:"Laundry",icon:"pi pi-table",to:"/laundries",component:"laundry/Index"},{label:"Product",icon:"pi pi-table",to:"/products",component:"product/Index"}]},{label:"Pengaturan",items:[{label:"Diskon",icon:"pi pi-percentage",to:"/discounts",component:"discount/Index"}]}],3:[{label:"Home",items:[{label:"Dashboard",icon:"pi pi-home",to:"/dashboards",component:"home/Index"}]},{label:"Menu",items:[{label:"Transaksi",icon:"pi pi-shopping-cart",to:"/transactions",component:"transaction/Index"},{label:"Pengeluaran",icon:"pi pi-wallet",to:"/expenses",component:"expense/Index"},{label:"Laporan",icon:"pi pi-book",items:[{label:"Mutasi",icon:"pi pi-circle",to:"/reports/mutations",component:"mutation/Report"},{label:"Transaksi",icon:"pi pi-circle",to:"/reports/transactions",component:"transaction/Report"}]}]},{label:"Master",items:[{label:"Customer",icon:"pi pi-users",to:"/customers",component:"customer/Index"}]}]};var z={class:"layout-main-container"},T={class:"layout-main"},O={key:0,class:"layout-mask p-component-overlay"};const P={setup:function(e){var t=(0,n.ref)(!1),o=(0,n.ref)(!1),l=(0,n.ref)(!1);(0,n.onBeforeUpdate)((function(){var e,o;t.value?(e=document.body,o="body-overflow-hidden",e.classList?e.classList.add(o):e.className+=" "+o):function(e,t){e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," ")}(document.body,"body-overflow-hidden")}));var r=(0,n.computed)((function(){return["layout-wrapper","layout-static",{"layout-static-sidebar-inactive":o.value,"layout-mobile-sidebar-active":t.value}]})),a=function(){l.value||(t.value=!1),l.value=!1},i=function(e){l.value=!0,window.innerWidth>=992?o.value=!o.value:t.value=!t.value,e.preventDefault()},c=function(){l.value=!0},s=function(e){e.item&&!e.item.items&&(t.value=!1)};return function(e,o){return(0,n.openBlock)(),(0,n.createElementBlock)("div",{class:(0,n.normalizeClass)((0,n.unref)(r)),onClick:a},[(0,n.createVNode)(v,{onMenuToggle:i}),(0,n.createElementVNode)("div",{class:"layout-sidebar",onClick:c},[(0,n.createVNode)(E,{model:(0,n.unref)(_)[e.$page.props.auth.user.role_id],onMenuitemClick:s},null,8,["model"])]),(0,n.createElementVNode)("div",z,[(0,n.createElementVNode)("div",T,[(0,n.createVNode)(M),(0,n.renderSlot)(e.$slots,"default")]),(0,n.createVNode)(D)]),(0,n.createVNode)(n.Transition,{name:"layout-mask"},{default:(0,n.withCtx)((function(){return[t.value?((0,n.openBlock)(),(0,n.createElementBlock)("div",O)):(0,n.createCommentVNode)("",!0)]})),_:1})],2)}}}},2251:(e,t,o)=>{o.r(t),o.d(t,{default:()=>B});var n=o(821),l=o(9038),r=o(2676),a=o(1641),i={class:"field"},c=["for"],s=["id"];const u={props:{label:{type:String,required:!0},placeholder:{type:String,required:!0},readOnly:{type:Boolean,required:!1},error:{type:String,default:null},editorStyle:null,modelValue:null},emits:["update:modelValue"],setup:function(e){var t=e,o=(0,n.computed)((function(){return!!t.error})),l=(0,n.computed)((function(){return t.label?t.label.toLowerCase().replace(/\s+/g,"-"):null})),r=(0,n.computed)((function(){return t.label?t.label.toLowerCase().replace(/\s+/g,"-")+"-help":null}));return function(t,a){var u=(0,n.resolveComponent)("Editor");return(0,n.openBlock)(),(0,n.createElementBlock)("div",i,[e.label?((0,n.openBlock)(),(0,n.createElementBlock)("label",{key:0,for:(0,n.unref)(l)},(0,n.toDisplayString)(e.label),9,c)):(0,n.createCommentVNode)("",!0),(0,n.createVNode)(u,{"read-only":e.readOnly,"model-value":e.modelValue,"editor-style":e.editorStyle,placeholder:e.placeholder,onTextChange:a[0]||(a[0]=function(e){return t.$emit("update:modelValue",e.htmlValue)})},{toolbar:(0,n.withCtx)((function(){return[(0,n.renderSlot)(t.$slots,"toolbar")]})),_:3},8,["read-only","model-value","editor-style","placeholder"]),e.error?((0,n.openBlock)(),(0,n.createElementBlock)("small",{key:1,id:(0,n.unref)(r),class:(0,n.normalizeClass)({"p-error":(0,n.unref)(o)})},(0,n.toDisplayString)(e.error),11,s)):(0,n.createCommentVNode)("",!0)])}}};var p={class:"grid"},d={class:"col-12 md:col-8"},m={class:"q-formats"},f={class:"ql-bold"},b={class:"ql-italic"},y={class:"ql-underline"},v={class:"ql-formats"},k={class:"ql-list",value:"ordered"},g={class:"ql-list",value:"bullet"},h={class:"flex flex-column md:flex-row justify-content-end"};const B={setup:function(e){var t=(0,n.computed)((function(){return(0,l.qt)().props.value.errors}));(0,n.watch)(t,(function(){o.clearErrors()}));var o=(0,l.cI)({description:null,amount:null}),i=function(){o.post(route("expenses.store"),{onSuccess:function(){return o.reset()}})};return function(e,t){var l=(0,n.resolveComponent)("Button"),c=(0,n.resolveComponent)("Card"),s=(0,n.resolveDirective)("tooltip");return(0,n.openBlock)(),(0,n.createBlock)(r.Z,null,{default:(0,n.withCtx)((function(){return[(0,n.createElementVNode)("div",p,[(0,n.createElementVNode)("div",d,[(0,n.createVNode)(c,null,{content:(0,n.withCtx)((function(){return[(0,n.createVNode)(a.Z,{modelValue:(0,n.unref)(o).amount,"onUpdate:modelValue":t[0]||(t[0]=function(e){return(0,n.unref)(o).amount=e}),class:"md:w-16rem",label:"Pengeluaran",placeholder:"pengeluaran",error:(0,n.unref)(o).errors.amount},null,8,["modelValue","error"]),(0,n.createVNode)(u,{label:"Keterangan",modelValue:(0,n.unref)(o).description,"onUpdate:modelValue":t[1]||(t[1]=function(e){return(0,n.unref)(o).description=e}),"editor-style":"height: 320px",placeholder:"tulis keterangan disini",error:(0,n.unref)(o).errors.description},{toolbar:(0,n.withCtx)((function(){return[(0,n.createElementVNode)("span",m,[(0,n.withDirectives)((0,n.createElementVNode)("button",f,null,512),[[s,"Bold",void 0,{bottom:!0}]]),(0,n.withDirectives)((0,n.createElementVNode)("button",b,null,512),[[s,"Italic",void 0,{bottom:!0}]]),(0,n.withDirectives)((0,n.createElementVNode)("button",y,null,512),[[s,"Underline",void 0,{bottom:!0}]])]),(0,n.createElementVNode)("span",v,[(0,n.withDirectives)((0,n.createElementVNode)("button",k,null,512),[[s,"Ordered",void 0,{bottom:!0}]]),(0,n.withDirectives)((0,n.createElementVNode)("button",g,null,512),[[s,"Bullet",void 0,{bottom:!0}]])])]})),_:1},8,["modelValue","error"])]})),footer:(0,n.withCtx)((function(){return[(0,n.createElementVNode)("div",h,[(0,n.createVNode)(l,{label:"Simpan",icon:"pi pi-check",class:"p-button-outlined",disabled:(0,n.unref)(o).processing,onClick:i},null,8,["disabled"])])]})),_:1})])])]})),_:1})}}}}}]);
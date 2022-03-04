"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_assets_styles_layout_scss"],{

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./resources/js/assets/styles/layout.scss":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./resources/js/assets/styles/layout.scss ***!
  \**************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* General */\n.preloader {\n  position: fixed;\n  z-index: 999999;\n  background: #edf1f5;\n  width: 100%;\n  height: 100%;\n}\n\n.preloader-content {\n  border: 0 solid transparent;\n  border-radius: 50%;\n  width: 150px;\n  height: 150px;\n  position: absolute;\n  top: calc(50vh - 75px);\n  left: calc(50vw - 75px);\n}\n\n.preloader-content:before, .preloader-content:after {\n  content: \"\";\n  border: 1em solid var(--primary-color);\n  border-radius: 50%;\n  width: inherit;\n  height: inherit;\n  position: absolute;\n  top: 0;\n  left: 0;\n  -webkit-animation: loader 2s linear infinite;\n          animation: loader 2s linear infinite;\n  opacity: 0;\n}\n\n.preloader-content:before {\n  -webkit-animation-delay: 0.5s;\n          animation-delay: 0.5s;\n}\n\n@-webkit-keyframes loader {\n  0% {\n    transform: scale(0);\n    opacity: 0;\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    transform: scale(1);\n    opacity: 0;\n  }\n}\n\n@keyframes loader {\n  0% {\n    transform: scale(0);\n    opacity: 0;\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    transform: scale(1);\n    opacity: 0;\n  }\n}\n* {\n  box-sizing: border-box;\n}\n\nhtml {\n  height: 100%;\n  font-size: 14px;\n}\n\nbody {\n  font-family: var(--font-family);\n  color: var(--text-color);\n  background-color: var(--surface-ground);\n  margin: 0;\n  padding: 0;\n  min-height: 100%;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\na {\n  text-decoration: none;\n  color: var(--primary-color);\n}\n\n.layout-theme-light {\n  background-color: #edf1f5;\n}\n\n.layout-topbar {\n  position: fixed;\n  height: 5rem;\n  z-index: 997;\n  left: 0;\n  top: 0;\n  width: 100%;\n  padding: 0 2rem;\n  background-color: var(--surface-card);\n  transition: left 0.2s;\n  display: flex;\n  align-items: center;\n  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.02), 0px 0px 2px rgba(0, 0, 0, 0.05), 0px 1px 4px rgba(0, 0, 0, 0.08);\n}\n.layout-topbar .layout-topbar-logo {\n  display: flex;\n  align-items: center;\n  color: var(--surface-900);\n  font-size: 1.5rem;\n  font-weight: 500;\n  width: 300px;\n  border-radius: 12px;\n}\n.layout-topbar .layout-topbar-logo img {\n  height: 2.5rem;\n  margin-right: 0.5rem;\n}\n.layout-topbar .layout-topbar-logo:focus {\n  outline: 0 none;\n  outline-offset: 0;\n  transition: box-shadow 0.2s;\n  box-shadow: var(--focus-ring);\n}\n.layout-topbar .layout-topbar-button {\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  color: var(--text-color-secondary);\n  border-radius: 50%;\n  width: 3rem;\n  height: 3rem;\n  cursor: pointer;\n  transition: background-color 0.2s;\n}\n.layout-topbar .layout-topbar-button:hover {\n  color: var(--text-color);\n  background-color: var(--surface-hover);\n}\n.layout-topbar .layout-topbar-button:focus {\n  outline: 0 none;\n  outline-offset: 0;\n  transition: box-shadow 0.2s;\n  box-shadow: var(--focus-ring);\n}\n.layout-topbar .layout-topbar-button i {\n  font-size: 1.5rem;\n}\n.layout-topbar .layout-topbar-button span {\n  font-size: 1rem;\n  display: none;\n}\n.layout-topbar .layout-menu-button {\n  margin-left: 2rem;\n}\n.layout-topbar .layout-topbar-menu-button {\n  display: none;\n}\n.layout-topbar .layout-topbar-menu-button i {\n  font-size: 1.25rem;\n}\n.layout-topbar .layout-topbar-menu {\n  margin: 0 0 0 auto;\n  padding: 0;\n  list-style: none;\n  display: flex;\n}\n.layout-topbar .layout-topbar-menu .layout-topbar-button {\n  margin-left: 1rem;\n}\n\n@media (max-width: 991px) {\n  .layout-topbar {\n    justify-content: space-between;\n  }\n  .layout-topbar .layout-topbar-logo {\n    width: auto;\n    order: 2;\n  }\n  .layout-topbar .layout-menu-button {\n    margin-left: 0;\n    order: 1;\n  }\n  .layout-topbar .layout-topbar-menu-button {\n    display: inline-flex;\n    margin-left: 0;\n    order: 3;\n  }\n  .layout-topbar .layout-topbar-menu {\n    margin-left: 0;\n    position: absolute;\n    flex-direction: column;\n    background-color: var(--surface-overlay);\n    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.02), 0px 0px 2px rgba(0, 0, 0, 0.05), 0px 1px 4px rgba(0, 0, 0, 0.08);\n    border-radius: 12px;\n    padding: 1rem;\n    right: 2rem;\n    top: 5rem;\n    min-width: 15rem;\n  }\n  .layout-topbar .layout-topbar-menu .layout-topbar-button {\n    margin-left: 0;\n    display: flex;\n    width: 100%;\n    height: auto;\n    justify-content: flex-start;\n    border-radius: 12px;\n    padding: 1rem;\n  }\n  .layout-topbar .layout-topbar-menu .layout-topbar-button i {\n    font-size: 1rem;\n    margin-right: 0.5rem;\n  }\n  .layout-topbar .layout-topbar-menu .layout-topbar-button span {\n    font-weight: medium;\n    display: block;\n  }\n}\n.layout-sidebar {\n  position: fixed;\n  width: 300px;\n  height: calc(100vh - 9rem);\n  z-index: 999;\n  overflow-y: auto;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  top: 7rem;\n  left: 2rem;\n  transition: transform 0.2s, left 0.2s;\n  background-color: var(--surface-overlay);\n  border-radius: 12px;\n  padding: 1.5rem;\n  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.02), 0px 0px 2px rgba(0, 0, 0, 0.05), 0px 1px 4px rgba(0, 0, 0, 0.08);\n}\n\n.layout-menu {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n}\n.layout-menu li.layout-menuitem-category {\n  margin-top: 0.75rem;\n}\n.layout-menu li.layout-menuitem-category:first-child {\n  margin-top: 0;\n}\n.layout-menu li .layout-menuitem-root-text {\n  text-transform: uppercase;\n  color: var(--surface-900);\n  font-weight: 600;\n  margin-bottom: 0.5rem;\n  font-size: 0.875rem;\n}\n.layout-menu li a {\n  cursor: pointer;\n  text-decoration: none;\n  display: flex;\n  align-items: center;\n  color: var(--text-color);\n  transition: color 0.2s;\n  border-radius: 12px;\n  padding: 0.75rem 1rem;\n  transition: background-color 0.15s;\n}\n.layout-menu li a span {\n  margin-left: 0.5rem;\n}\n.layout-menu li a .menuitem-toggle-icon {\n  margin-left: auto;\n}\n.layout-menu li a:focus {\n  outline: 0 none;\n  outline-offset: 0;\n  transition: box-shadow 0.2s;\n  box-shadow: inset var(--focus-ring);\n}\n.layout-menu li a:hover {\n  background-color: var(--surface-hover);\n}\n.layout-menu li a.router-link-exact-active {\n  font-weight: 700;\n  color: var(--primary-color);\n}\n.layout-menu li a .p-badge {\n  margin-left: auto;\n}\n.layout-menu li.active-menuitem > a .menuitem-toggle-icon:before {\n  content: \"\\e933\";\n}\n.layout-menu li ul {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n}\n.layout-menu li ul.layout-submenu-wrapper-enter-from, .layout-menu li ul.layout-submenu-wrapper-leave-to {\n  max-height: 0;\n}\n.layout-menu li ul.layout-submenu-wrapper-enter-to, .layout-menu li ul.layout-submenu-wrapper-leave-from {\n  max-height: 1000px;\n}\n.layout-menu li ul.layout-submenu-wrapper-leave-active {\n  overflow: hidden;\n  transition: max-height 0.45s cubic-bezier(0, 1, 0, 1);\n}\n.layout-menu li ul.layout-submenu-wrapper-enter-active {\n  overflow: hidden;\n  transition: max-height 1s ease-in-out;\n}\n.layout-menu li ul ul {\n  padding-left: 1rem;\n}\n\n.layout-config {\n  position: fixed;\n  top: 0;\n  padding: 0;\n  right: 0;\n  width: 20rem;\n  z-index: 999;\n  height: 100vh;\n  transform: translateX(100%);\n  transition: transform 0.2s;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.02), 0px 0px 2px rgba(0, 0, 0, 0.05), 0px 1px 4px rgba(0, 0, 0, 0.08) !important;\n  color: var(--text-color);\n  background-color: var(--surface-overlay);\n  border-top-left-radius: 12px;\n  border-bottom-left-radius: 12px;\n}\n.layout-config.layout-config-active {\n  transform: translateX(0);\n}\n.layout-config .layout-config-button {\n  display: block;\n  position: absolute;\n  width: 52px;\n  height: 52px;\n  line-height: 52px;\n  background-color: var(--primary-color);\n  color: var(--primary-color-text);\n  text-align: center;\n  top: 230px;\n  left: -52px;\n  z-index: -1;\n  overflow: hidden;\n  cursor: pointer;\n  border-top-left-radius: 12px;\n  border-bottom-left-radius: 12px;\n  transition: background-color 0.2s;\n}\n.layout-config .layout-config-button i {\n  font-size: 32px;\n  line-height: inherit;\n  cursor: pointer;\n  transform: rotate(0deg);\n  transition: color 0.2s, transform 1s;\n}\n.layout-config .layout-config-close {\n  position: absolute;\n  right: 1rem;\n  top: 1rem;\n  z-index: 1;\n}\n.layout-config .layout-config-content {\n  position: relative;\n  overflow: auto;\n  height: 100vh;\n  padding: 2rem;\n}\n.layout-config .config-scale {\n  display: flex;\n  align-items: center;\n  margin: 1rem 0 2rem 0;\n}\n.layout-config .config-scale .p-button {\n  margin-right: 0.5rem;\n}\n.layout-config .config-scale i {\n  margin-right: 0.5rem;\n  font-size: 0.75rem;\n  color: var(--text-color-secondary);\n}\n.layout-config .config-scale i.scale-active {\n  font-size: 1.25rem;\n  color: var(--primary-color);\n}\n.layout-config .free-themes img {\n  width: 2rem;\n  border-radius: 4px;\n  transition: transform 0.2s;\n}\n.layout-config .free-themes img:hover {\n  transform: scale(1.1);\n}\n.layout-config .free-themes span {\n  font-size: 0.75rem;\n  margin-top: 0.25rem;\n}\n\n.layout-main-container {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  justify-content: space-between;\n  padding: 7rem 2rem 2rem 4rem;\n  transition: margin-left 0.2s;\n}\n\n.layout-main {\n  flex: 1 1 auto;\n}\n\n.layout-footer {\n  transition: margin-left 0.2s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding-top: 1rem;\n  border-top: 1px solid var(--surface-border);\n}\n\n@media (min-width: 992px) {\n  .layout-wrapper.layout-overlay .layout-main-container {\n    margin-left: 0;\n    padding-left: 2rem;\n  }\n  .layout-wrapper.layout-overlay .layout-sidebar {\n    transform: translateX(-100%);\n    left: 0;\n    top: 0;\n    height: 100vh;\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n  }\n  .layout-wrapper.layout-overlay.layout-overlay-sidebar-active .layout-sidebar {\n    transform: translateX(0);\n  }\n  .layout-wrapper.layout-static .layout-main-container {\n    margin-left: 300px;\n  }\n  .layout-wrapper.layout-static.layout-static-sidebar-inactive .layout-sidebar {\n    transform: translateX(-100%);\n    left: 0;\n  }\n  .layout-wrapper.layout-static.layout-static-sidebar-inactive .layout-main-container {\n    margin-left: 0;\n    padding-left: 2rem;\n  }\n  .layout-wrapper .layout-mask {\n    display: none;\n  }\n}\n@media (max-width: 991px) {\n  .layout-wrapper .layout-main-container {\n    margin-left: 0;\n    padding-left: 2rem;\n  }\n  .layout-wrapper .layout-sidebar {\n    transform: translateX(-100%);\n    left: 0;\n    top: 0;\n    height: 100vh;\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n  }\n  .layout-wrapper .layout-mask {\n    z-index: 998;\n    background-color: var(--maskbg);\n  }\n  .layout-wrapper .layout-mask.layout-mask-enter-from, .layout-wrapper .layout-mask.layout-mask-leave-to {\n    background-color: transparent;\n  }\n  .layout-wrapper.layout-mobile-sidebar-active .layout-sidebar {\n    transform: translateX(0);\n  }\n  .layout-wrapper.layout-mobile-sidebar-active .layout-mask {\n    display: block;\n  }\n\n  .body-overflow-hidden {\n    overflow: hidden;\n  }\n}\n.card {\n  background-color: var(--surface-card);\n  padding: 1.5rem;\n  color: var(--surface-900);\n  margin-bottom: 1rem;\n  border-radius: 12px;\n  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.02), 0px 0px 2px rgba(0, 0, 0, 0.05), 0px 1px 4px rgba(0, 0, 0, 0.08) !important;\n}\n.card.card-w-title {\n  padding-bottom: 2rem;\n}\n\nh1, h2, h3, h4, h5, h6 {\n  margin: 1.5rem 0 1rem 0;\n  font-family: inherit;\n  font-weight: 500;\n  line-height: 1.2;\n  color: inherit;\n}\nh1:first-child, h2:first-child, h3:first-child, h4:first-child, h5:first-child, h6:first-child {\n  margin-top: 0;\n}\n\nh1 {\n  font-size: 2.5rem;\n}\n\nh2 {\n  font-size: 2rem;\n}\n\nh3 {\n  font-size: 1.75rem;\n}\n\nh4 {\n  font-size: 1.5rem;\n}\n\nh5 {\n  font-size: 1.25rem;\n}\n\nh6 {\n  font-size: 1rem;\n}\n\nmark {\n  background: #FFF8E1;\n  padding: 0.25rem 0.4rem;\n  border-radius: 12px;\n  font-family: monospace;\n}\n\nblockquote {\n  margin: 1rem 0;\n  padding: 0 2rem;\n  border-left: 4px solid #90A4AE;\n}\n\nhr {\n  border-top: solid var(--surface-border);\n  border-width: 1px 0 0 0;\n  margin: 1rem 0;\n}\n\np {\n  margin: 0 0 1rem 0;\n  line-height: 1.5;\n}\np:last-child {\n  margin-bottom: 0;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./resources/js/assets/styles/layout.scss":
/*!************************************************!*\
  !*** ./resources/js/assets/styles/layout.scss ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_layout_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./layout.scss */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./resources/js/assets/styles/layout.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_layout_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_layout_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ })

}]);
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/styles/index.less":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/styles/index.less ***!
  \************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\nbody {\n  height: 500px;\n  font: bold 20px \"Courier\";\n}\n#main {\n  width: 360px;\n  height: 490px;\n  background-color: #e9e8b0;\n  margin: 100px auto;\n  border: 10px solid black;\n  border-radius: 30px;\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  justify-content: space-around;\n}\n#main #stage {\n  width: 304px;\n  height: 304px;\n  border: 2px solid black;\n  position: relative;\n}\n#main #stage #snake > div {\n  width: 10px;\n  height: 10px;\n  background-color: black;\n  border: 1px solid #e9e8b0;\n  position: absolute;\n}\n#main #stage #food {\n  width: 10px;\n  height: 10px;\n  position: absolute;\n  left: 100px;\n  top: 100px;\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-between;\n  align-content: space-between;\n}\n#main #stage #food > div {\n  width: 4px;\n  height: 4px;\n  background-color: red;\n  transform: rotate(45deg);\n}\n#main #score-panel {\n  width: 300px;\n  display: flex;\n  justify-content: space-between;\n}\n#main #control-panel {\n  display: flex;\n  height: 80px;\n  margin-bottom: 10px;\n}\n#main #control-panel > #updown {\n  display: flex;\n  flex-flow: column;\n}\n#main #control-panel > #updown > #up {\n  width: 80px;\n  height: 40px;\n  background-color: #8bafd0;\n  border: 3px solid #43386e;\n  color: white;\n  margin: 1px;\n}\n#main #control-panel > #updown > #down {\n  width: 80px;\n  height: 40px;\n  background-color: #d0c58b;\n  border: 3px solid #e9b459;\n  color: white;\n  margin: 1px;\n}\n#main #control-panel > #right {\n  width: 80px;\n  height: 82px;\n  margin: 1px;\n  border: 3px solid #1f483d;\n  border: 3px solid #478a6a;\n}\n#main #control-panel > #left {\n  width: 80px;\n  height: 82px;\n  margin: 1px;\n  border: 3px solid #1f483d;\n  border: 3px solid #478a6a;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://typescript/./src/styles/index.less?./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://typescript/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://typescript/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/index.less":
/*!*******************************!*\
  !*** ./src/styles/index.less ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_index_less__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/less-loader/dist/cjs.js!./index.less */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/styles/index.less\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_index_less__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_index_less__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_index_less__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_index_less__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://typescript/./src/styles/index.less?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://typescript/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://typescript/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://typescript/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://typescript/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://typescript/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://typescript/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n__webpack_require__(/*! ./styles/index.less */ \"./src/styles/index.less\");\nconst game_control_1 = __importDefault(__webpack_require__(/*! ./modules/game-control */ \"./src/modules/game-control.ts\"));\nconst game = new game_control_1.default();\n\n\n//# sourceURL=webpack://typescript/./src/index.ts?");

/***/ }),

/***/ "./src/modules/food.ts":
/*!*****************************!*\
  !*** ./src/modules/food.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nclass Food {\n    constructor() {\n        this.element = document.getElementById(\"food\"); //一定有\n    }\n    get x() {\n        return this.element.offsetLeft;\n    }\n    get y() {\n        return this.element.offsetTop;\n    }\n    change() {\n        //最少0 最多290px\n        let top = Math.round(Math.random() * 29) * 10;\n        let left = Math.round(Math.random() * 29) * 10;\n        this.element.style.left = left + \"px\";\n        this.element.style.top = top + \"px\";\n    }\n}\nexports[\"default\"] = Food;\n\n\n//# sourceURL=webpack://typescript/./src/modules/food.ts?");

/***/ }),

/***/ "./src/modules/game-control.ts":
/*!*************************************!*\
  !*** ./src/modules/game-control.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\n// import Snake from \"./snake\";\n// import Food from \"./food\";\n// import ScorePanel from \"./score-panel\";\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n// export default class GameControl {\n//     snake: Snake;\n//     food: Food;\n//     scorePanel: ScorePanel;\n//     direction: string = '';\n//     isLive = true;\n//     xDown: number | null = null;\n//     yDown: number | null = null;\n//     constructor() {\n//         this.snake = new Snake();\n//         this.food = new Food();\n//         this.scorePanel = new ScorePanel(10, 5);\n//         this.init();\n//     }\n//     init() {\n//         document.addEventListener(\"keydown\", this.keydownHandler.bind(this));\n//         document.addEventListener(\"touchstart\", this.handleTouchStart.bind(this), false);\n//         document.addEventListener(\"touchmove\", this.handleTouchMove.bind(this), false);\n//         this.run();\n//     }\n//     keydownHandler(event: KeyboardEvent) {\n//         if (event.key === \"ArrowUp\" || event.key === \"ArrowDown\" || event.key === \"ArrowLeft\" || event.key === \"ArrowRight\") {\n//             this.direction = event.key;\n//         }\n//     }\n//     handleTouchStart(event: TouchEvent) {\n//         this.xDown = event.touches[0].clientX;\n//         this.yDown = event.touches[0].clientY;\n//     }\n//     handleTouchMove(event: TouchEvent) {\n//         if (!this.xDown || !this.yDown) {\n//             return;\n//         }\n//         var xUp = event.touches[0].clientX;\n//         var yUp = event.touches[0].clientY;\n//         var xDiff = this.xDown - xUp;\n//         var yDiff = this.yDown - yUp;\n//         if (Math.abs(xDiff) > Math.abs(yDiff)) {\n//             if (xDiff > 0) {\n//                 /* left swipe */\n//                 this.direction = \"ArrowLeft\";\n//             } else {\n//                 /* right swipe */\n//                 this.direction = \"ArrowRight\";\n//             }\n//         } else {\n//             if (yDiff > 0) {\n//                 /* up swipe */\n//                 this.direction = \"ArrowUp\";\n//             } else {\n//                 /* down swipe */\n//                 this.direction = \"ArrowDown\";\n//             }\n//         }\n//         /* reset values */\n//         this.xDown = null;\n//         this.yDown = null;\n//     }\n//     run(){\n//         let X = this.snake.x;\n//         let Y = this.snake.y;\n//         switch(this.direction){\n//             //based on the width and height of the snake\n//             case \"ArrowUp\":\n//                 Y -= 10;\n//                 break;\n//             case \"ArrowDown\":\n//                 Y += 10;\n//                 break;\n//             case \"ArrowLeft\":\n//                 X -= 10;\n//                 break;\n//             case \"ArrowRight\":\n//                 X += 10;\n//                 break;\n//         }\n//         //check if the snake eats the food\n//         this.checkEat(X,Y);\n//         try {\n//             this.snake.x = X;\n//             this.snake.y = Y;\n//         } catch(e: any) {\n//             alert(e.message + \", Game Over\");\n//             this.isLive = false;\n//         }\n//         //move the snake    \n//         this.isLive && setTimeout(this.run.bind(this),300-(this.scorePanel.level-1)*30);\n//     }\n//     checkEat(X:number,Y:number){\n//         if(X === this.food.x && Y === this.food.y){\n//             this.food.change();\n//             this.scorePanel.addScore();\n//             this.snake.addBody();\n//         }\n//     };\n// };\nconst snake_1 = __importDefault(__webpack_require__(/*! ./snake */ \"./src/modules/snake.ts\"));\nconst food_1 = __importDefault(__webpack_require__(/*! ./food */ \"./src/modules/food.ts\"));\nconst score_panel_1 = __importDefault(__webpack_require__(/*! ./score-panel */ \"./src/modules/score-panel.ts\"));\nclass GameControl {\n    constructor() {\n        this.direction = \"ArrowRight\";\n        this.isLive = true;\n        this.snake = new snake_1.default();\n        this.scorePanel = new score_panel_1.default(15, 7);\n        this.food = new food_1.default();\n        this.init();\n    }\n    init() {\n        var _a, _b, _c, _d;\n        document.addEventListener(\"keydown\", this.keydownHandler.bind(this));\n        (_a = document.getElementById('left')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {\n            this.direction = 'ArrowLeft';\n        });\n        (_b = document.getElementById('right')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', () => {\n            this.direction = 'ArrowRight';\n        });\n        (_c = document.getElementById('up')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', () => {\n            this.direction = 'ArrowUp';\n        });\n        (_d = document.getElementById('down')) === null || _d === void 0 ? void 0 : _d.addEventListener('click', () => {\n            this.direction = 'ArrowDown';\n        });\n        this.run();\n    }\n    keydownHandler(event) {\n        if (event.key === \"ArrowUp\"\n            || event.key === \"ArrowDown\"\n            || event.key === \"ArrowLeft\"\n            || event.key === \"ArrowRight\") {\n            this.direction = event.key;\n        }\n    }\n    ;\n    run() {\n        let X = this.snake.x;\n        let Y = this.snake.y;\n        console.log(\"snake x,y\", X, Y);\n        switch (this.direction) {\n            //based on the width and height of the snake\n            case \"ArrowUp\":\n                Y -= 10;\n                break;\n            case \"ArrowDown\":\n                Y += 10;\n                break;\n            case \"ArrowLeft\":\n                X -= 10;\n                break;\n            case \"ArrowRight\":\n                X += 10;\n                break;\n        }\n        //check if the snake eats the food\n        this.checkEat(X, Y);\n        try {\n            this.snake.x = X;\n            this.snake.y = Y;\n        }\n        catch (e) {\n            alert(e.message + \", Game Over\");\n            this.isLive = false;\n        }\n        //move the snake    \n        this.isLive && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 20);\n    }\n    checkEat(X, Y) {\n        console.log(\"food x,y\", this.food.x, this.food.y);\n        if (X === this.food.x && Y === this.food.y) {\n            this.food.change();\n            this.scorePanel.addScore();\n            this.snake.addBody();\n        }\n    }\n    ;\n}\nexports[\"default\"] = GameControl;\n;\n\n\n//# sourceURL=webpack://typescript/./src/modules/game-control.ts?");

/***/ }),

/***/ "./src/modules/score-panel.ts":
/*!************************************!*\
  !*** ./src/modules/score-panel.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nclass ScorePanel {\n    constructor(maxLevel = 10, upScore = 10) {\n        this.score = 0;\n        this.level = 1;\n        this.scoreEle = document.getElementById(\"score\");\n        this.levelEle = document.getElementById(\"level\");\n        this.maxLevel = maxLevel;\n        this.upScore = upScore;\n    }\n    addScore() {\n        this.scoreEle.innerHTML = ++this.score + \"\";\n        //分數是10的倍數就升級\n        if (this.score % this.upScore === 0) {\n            this.levelUp();\n        }\n    }\n    levelUp() {\n        if (this.level < this.maxLevel) {\n            this.levelEle.innerHTML = ++this.level + \"\";\n        }\n    }\n}\nexports[\"default\"] = ScorePanel;\n\n\n//# sourceURL=webpack://typescript/./src/modules/score-panel.ts?");

/***/ }),

/***/ "./src/modules/snake.ts":
/*!******************************!*\
  !*** ./src/modules/snake.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nclass Snake {\n    constructor() {\n        this.element = document.getElementById(\"snake\");\n        this.head = document.querySelector(\"#snake > div\");\n        this.bodies = this.element.getElementsByTagName(\"div\");\n    }\n    get x() {\n        return this.head.offsetLeft;\n    }\n    get y() {\n        return this.head.offsetTop;\n    }\n    set x(value) {\n        if (this.x === value) {\n            return;\n        }\n        if (value < 0 || value > 290) {\n            throw new Error(\"Snake hit the wall\");\n        }\n        //can not move to the opposite direction\n        if (this.bodies[1] && this.bodies[1].offsetLeft === value) {\n            if (value > this.x) {\n                value = this.x - 10;\n            }\n            else {\n                value = this.x + 10;\n            }\n        }\n        this.moveBody();\n        this.head.style.left = value + \"px\";\n        this.checkHeadBody();\n    }\n    set y(value) {\n        if (this.y === value) {\n            return;\n        }\n        if (value < 0 || value > 290) {\n            throw new Error(\"Snake hit the wall\");\n        }\n        if (this.bodies[1] && this.bodies[1].offsetTop === value) {\n            if (value > this.y) {\n                value = this.y - 10;\n            }\n            else {\n                value = this.y + 10;\n            }\n        }\n        this.moveBody();\n        this.head.style.top = value + \"px\";\n        this.checkHeadBody();\n    }\n    addBody() {\n        this.element.insertAdjacentHTML(\"beforeend\", \"<div></div>\");\n    }\n    moveBody() {\n        //後面＝前面的位置\n        for (let i = this.bodies.length - 1; i > 0; i--) {\n            //X,Y是前一個的位置\n            let X = this.bodies[i - 1].offsetLeft;\n            let Y = this.bodies[i - 1].offsetTop;\n            this.bodies[i].style.left = X + \"px\";\n            this.bodies[i].style.top = Y + \"px\";\n        }\n    }\n    checkHeadBody() {\n        for (let i = 1; i < this.bodies.length; i++) {\n            let bd = this.bodies[i];\n            if (this.x === bd.offsetLeft && this.y === bd.offsetTop) {\n                throw new Error(\"Snake hit itself\");\n            }\n        }\n    }\n}\nexports[\"default\"] = Snake;\n\n\n//# sourceURL=webpack://typescript/./src/modules/snake.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;
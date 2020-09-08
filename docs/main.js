/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/scripts/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles/index.scss":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/sass-loader/dist/cjs.js??ref--6-2!./src/styles/index.scss ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(true);\n// Module\nexports.push([module.i, \"body {\\n  margin: 0;\\n  overflow: scroll;\\n  -ms-overflow-style: none;\\n  scrollbar-width: none; }\\n\\n::-webkit-scrollbar {\\n  display: none;\\n  -webkit-appearance: none; }\\n\\n#glCanvas {\\n  position: fixed;\\n  left: 0%;\\n  top: 0%;\\n  z-index: 10; }\\n\", \"\",{\"version\":3,\"sources\":[\"C:/VisualDev/s1c_sample/src/styles/index.scss\"],\"names\":[],\"mappings\":\"AAAA;EACI,SAAS;EACZ,gBAAgB;EAChB,wBAAwB;EACxB,qBAAqB,EAAA;;AAEtB;EACC,aAAa;EACb,wBAAwB,EAAA;;AAEzB;EACC,eAAe;EACf,QAAQ;EACR,OAAO;EACP,WAAW,EAAA\",\"file\":\"index.scss\",\"sourcesContent\":[\"body {\\r\\n    margin: 0;\\r\\n\\toverflow: scroll;\\r\\n\\t-ms-overflow-style: none; \\r\\n\\tscrollbar-width: none;\\r\\n}\\r\\n::-webkit-scrollbar {\\r\\n\\tdisplay: none;\\r\\n\\t-webkit-appearance: none;\\r\\n}\\r\\n#glCanvas{\\r\\n\\tposition: fixed;\\r\\n\\tleft: 0%;\\r\\n\\ttop: 0%;\\r\\n\\tz-index: 10;\\r\\n}\"]}]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/styles/index.scss?./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/sass-loader/dist/cjs.js??ref--6-2");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/scripts/gl/PureRaymarch.ts":
/*!****************************************!*\
  !*** ./src/scripts/gl/PureRaymarch.ts ***!
  \****************************************/
/*! exports provided: PureRaymarch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PureRaymarch\", function() { return PureRaymarch; });\n/* harmony import */ var _libs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./libs */ \"./src/scripts/gl/libs/index.ts\");\n/* harmony import */ var _shaders_vertQuad_vert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shaders/vertQuad.vert */ \"./src/scripts/shaders/vertQuad.vert\");\n/* harmony import */ var _shaders_fragQuad_frag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shaders/fragQuad.frag */ \"./src/scripts/shaders/fragQuad.frag\");\n/* harmony import */ var _shaders_raymarchHeart_frag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shaders/raymarchHeart.frag */ \"./src/scripts/shaders/raymarchHeart.frag\");\n/* harmony import */ var _shaders_Byob_frag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shaders/Byob.frag */ \"./src/scripts/shaders/Byob.frag\");\n/* harmony import */ var _shaders_Sobel_frag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shaders/Sobel.frag */ \"./src/scripts/shaders/Sobel.frag\");\n/* harmony import */ var _shaders_s1main_frag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shaders/s1main.frag */ \"./src/scripts/shaders/s1main.frag\");\n/* harmony import */ var _shaders_vertMatQuad_vert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shaders/vertMatQuad.vert */ \"./src/scripts/shaders/vertMatQuad.vert\");\n/* harmony import */ var _shaders_vertBg_vert__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shaders/vertBg.vert */ \"./src/scripts/shaders/vertBg.vert\");\n/* harmony import */ var _shaders_fragBg_frag__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shaders/fragBg.frag */ \"./src/scripts/shaders/fragBg.frag\");\n/* harmony import */ var _shaders_fragNoise_frag__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shaders/fragNoise.frag */ \"./src/scripts/shaders/fragNoise.frag\");\n/* harmony import */ var _shaders_vertShadow_vert__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shaders/vertShadow.vert */ \"./src/scripts/shaders/vertShadow.vert\");\n/* harmony import */ var _shaders_fragShadow_frag__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shaders/fragShadow.frag */ \"./src/scripts/shaders/fragShadow.frag\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nvar m = new _libs__WEBPACK_IMPORTED_MODULE_0__[\"matIV\"]();\r\nvar mp = new _libs__WEBPACK_IMPORTED_MODULE_0__[\"minPrimitive\"]();\r\nvar gl;\r\nvar cw;\r\nvar ch;\r\nvar startTime;\r\nvar pb;\r\nvar rayPrg;\r\nvar mainPrg;\r\nvar s1_byobPrg;\r\nvar s1_sobelPrg;\r\nvar s1_mainPrg;\r\nvar s1_quadPrg;\r\nvar s2_bgPrg;\r\nvar s2_shadPrg;\r\nvar s2_noisePrg;\r\nvar PureRaymarch = /** @class */ (function () {\r\n    function PureRaymarch(canvas) {\r\n        cw = window.innerWidth;\r\n        ch = window.innerHeight;\r\n        canvas.width = cw;\r\n        canvas.height = ch;\r\n        gl = canvas.getContext(\"webgl\");\r\n        pb = new _libs__WEBPACK_IMPORTED_MODULE_0__[\"PureBase\"](gl);\r\n        gl.getExtension('OES_texture_float');\r\n        gl.getExtension('OES_float_linear');\r\n        gl.getExtension('OES_texture_half_float');\r\n        rayPrg = pb.createProgram(_shaders_vertQuad_vert__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _shaders_raymarchHeart_frag__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\r\n        mainPrg = pb.createProgram(_shaders_vertQuad_vert__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _shaders_fragQuad_frag__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\r\n        s1_byobPrg = pb.createProgram(_shaders_vertQuad_vert__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _shaders_Byob_frag__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\r\n        s1_sobelPrg = pb.createProgram(_shaders_vertQuad_vert__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _shaders_Sobel_frag__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\r\n        s1_mainPrg = pb.createProgram(_shaders_vertQuad_vert__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _shaders_s1main_frag__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\r\n        s1_quadPrg = pb.createProgram(_shaders_vertMatQuad_vert__WEBPACK_IMPORTED_MODULE_7__[\"default\"], _shaders_fragQuad_frag__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\r\n        s2_bgPrg = pb.createProgram(_shaders_vertBg_vert__WEBPACK_IMPORTED_MODULE_8__[\"default\"], _shaders_fragBg_frag__WEBPACK_IMPORTED_MODULE_9__[\"default\"]);\r\n        s2_shadPrg = pb.createProgram(_shaders_vertShadow_vert__WEBPACK_IMPORTED_MODULE_11__[\"default\"], _shaders_fragShadow_frag__WEBPACK_IMPORTED_MODULE_12__[\"default\"]);\r\n        s2_noisePrg = pb.createProgram(_shaders_vertQuad_vert__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _shaders_fragNoise_frag__WEBPACK_IMPORTED_MODULE_10__[\"default\"]);\r\n    }\r\n    PureRaymarch.prototype.init = function () {\r\n        var quadPos = mp.quad();\r\n        var quadVbo = pb.createVbo(quadPos);\r\n        var quadVboList = [quadVbo];\r\n        var mMatrix = m.identity(m.create());\r\n        var vMatrix = m.identity(m.create());\r\n        var pMatrix = m.identity(m.create());\r\n        var tmpMatrix = m.identity(m.create());\r\n        var mvpMatrix = m.identity(m.create());\r\n        m.lookAt([0.0, 0.0, 5.0], [0, 0, 0], [0, 1, 0], vMatrix);\r\n        m.perspective(45, cw / ch, 0.1, 10.0, pMatrix);\r\n        m.multiply(pMatrix, vMatrix, tmpMatrix);\r\n        var s1_byobBuffer = pb.createFrameBuffer(cw, ch);\r\n        var s1_sobelBuffer = pb.createFrameBuffer(cw, ch);\r\n        var s1_rayBuffer = pb.createFrameBuffer(cw, ch);\r\n        var s1_mainBuffer = pb.createFrameBuffer(cw, ch);\r\n        var s2_NoiseBuffer = pb.createFrameBuffer(cw, ch);\r\n        var mainBuffer = pb.createFrameBuffer(cw, ch);\r\n        startTime = new Date().getTime();\r\n        var renderRaymarch = function (target, time, width, height) {\r\n            gl.bindFramebuffer(gl.FRAMEBUFFER, target);\r\n            pb.clear(0., 0., 0., 1., 1.);\r\n            gl.viewport(0, 0, width, height);\r\n            gl.useProgram(rayPrg);\r\n            gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);\r\n            pb.setAttribute(rayPrg, quadVboList, 'position', 3);\r\n            pb.uniform1f(rayPrg, 'u_time', time);\r\n            pb.uniform2fv(rayPrg, 'u_resolution', [width, height]);\r\n            gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);\r\n        };\r\n        var renderMain = function (target, buffer) {\r\n            gl.bindFramebuffer(gl.FRAMEBUFFER, target);\r\n            pb.clear(0., 0., 0., 1., 1.);\r\n            gl.viewport(0, 0, cw, ch);\r\n            gl.useProgram(mainPrg);\r\n            // gl.blendFunc( gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA );\r\n            pb.setAttribute(mainPrg, quadVboList, 'position', 3);\r\n            pb.uniform2fv(mainPrg, 'resolution', [cw, ch]);\r\n            pb.uniform1i(mainPrg, 'texture', 0);\r\n            gl.activeTexture(gl.TEXTURE0);\r\n            gl.bindTexture(gl.TEXTURE_2D, buffer);\r\n            gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);\r\n        };\r\n        var renderByob = function (target, width, height) {\r\n            gl.bindFramebuffer(gl.FRAMEBUFFER, target);\r\n            pb.clear(0., 0., 0., 1., 1.);\r\n            gl.viewport(0, 0, width, height);\r\n            gl.useProgram(s1_byobPrg);\r\n            // gl.blendFunc( gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA );\r\n            pb.setAttribute(s1_byobPrg, quadVboList, 'position', 3);\r\n            pb.uniform2fv(s1_byobPrg, 'u_resolution', [width, height]);\r\n            gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);\r\n        };\r\n        var renderSobel = function (target, buffer, width, height) {\r\n            gl.bindFramebuffer(gl.FRAMEBUFFER, target);\r\n            pb.clear(0., 0., 0., 1., 1.);\r\n            gl.viewport(0, 0, width, height);\r\n            gl.useProgram(s1_sobelPrg);\r\n            // gl.blendFunc( gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA );\r\n            pb.setAttribute(s1_sobelPrg, quadVboList, 'position', 3);\r\n            pb.uniform1i(s1_sobelPrg, 'texture', 0);\r\n            pb.uniform2fv(s1_sobelPrg, 'resolution', [width, height]);\r\n            gl.activeTexture(gl.TEXTURE0);\r\n            gl.bindTexture(gl.TEXTURE_2D, buffer);\r\n            gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);\r\n        };\r\n        var renders1main = function (target, buffer_byob, buffer_sobel, width, height) {\r\n            gl.bindFramebuffer(gl.FRAMEBUFFER, target);\r\n            pb.clear(0., 0., 0., 1., 1.);\r\n            gl.viewport(0, 0, width, height);\r\n            gl.useProgram(s1_mainPrg);\r\n            // gl.blendFunc( gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA );\r\n            pb.setAttribute(s1_mainPrg, quadVboList, 'position', 3);\r\n            pb.uniform2fv(s1_mainPrg, 'resolution', [width, height]);\r\n            pb.uniform1i(s1_mainPrg, 'texture_byob', 0);\r\n            pb.uniform1i(s1_mainPrg, 'texture_sobel', 1);\r\n            gl.activeTexture(gl.TEXTURE0);\r\n            gl.bindTexture(gl.TEXTURE_2D, buffer_byob);\r\n            gl.activeTexture(gl.TEXTURE1);\r\n            gl.bindTexture(gl.TEXTURE_2D, buffer_sobel);\r\n            gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);\r\n        };\r\n        var renders1quad = function (target, buffer, width, height) {\r\n            gl.bindFramebuffer(gl.FRAMEBUFFER, target);\r\n            gl.viewport(0, 0, width, height);\r\n            gl.useProgram(s1_quadPrg);\r\n            // gl.blendFunc( gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA );\r\n            pb.setAttribute(s1_quadPrg, quadVboList, 'position', 3);\r\n            pb.uniformMatrix4fv(s1_quadPrg, 'mvpMatrix', mvpMatrix);\r\n            pb.uniform2fv(s1_quadPrg, 'resolution', [width, height]);\r\n            pb.uniform1i(s1_quadPrg, 'texture', 0);\r\n            gl.activeTexture(gl.TEXTURE0);\r\n            gl.bindTexture(gl.TEXTURE_2D, buffer);\r\n            m.identity(mMatrix);\r\n            m.multiply(tmpMatrix, mMatrix, mvpMatrix);\r\n            gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);\r\n        };\r\n        var renders2Bg = function (target, width, height, time) {\r\n            gl.bindFramebuffer(gl.FRAMEBUFFER, target);\r\n            gl.viewport(0, 0, width, height);\r\n            gl.useProgram(s2_bgPrg);\r\n            gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);\r\n            pb.setAttribute(s2_bgPrg, quadVboList, 'position', 3);\r\n            pb.uniformMatrix4fv(s2_bgPrg, 'mvpMatrix', mvpMatrix);\r\n            pb.uniform2fv(s2_bgPrg, 'resolution', [width, height]);\r\n            pb.uniform1f(s2_bgPrg, 'time', time);\r\n            m.identity(mMatrix);\r\n            m.multiply(tmpMatrix, mMatrix, mvpMatrix);\r\n            gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);\r\n        };\r\n        var renderNoise = function (target, buffer, width, height) {\r\n            gl.bindFramebuffer(gl.FRAMEBUFFER, target);\r\n            pb.clear(0., 0., 0., 1., 1.);\r\n            gl.viewport(0, 0, width, height);\r\n            gl.useProgram(s2_noisePrg);\r\n            // gl.blendFunc( gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA );\r\n            pb.setAttribute(s2_noisePrg, quadVboList, 'position', 3);\r\n            pb.uniform2fv(s2_noisePrg, 'resolution', [width, height]);\r\n            pb.uniform1i(s2_noisePrg, 'texture', 0);\r\n            gl.activeTexture(gl.TEXTURE0);\r\n            gl.bindTexture(gl.TEXTURE_2D, buffer);\r\n            gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);\r\n        };\r\n        var renderShad = function (target, width, height) {\r\n            gl.bindFramebuffer(gl.FRAMEBUFFER, target);\r\n            gl.viewport(0, 0, width, height);\r\n            gl.useProgram(s2_shadPrg);\r\n            // gl.blendFunc( gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA );\r\n            pb.setAttribute(s2_shadPrg, quadVboList, 'position', 3);\r\n            pb.uniformMatrix4fv(s2_shadPrg, 'mvpMatrix', mvpMatrix);\r\n            pb.uniform2fv(s2_shadPrg, 'resolution', [width, height]);\r\n            m.identity(mMatrix);\r\n            m.multiply(tmpMatrix, mMatrix, mvpMatrix);\r\n            gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);\r\n        };\r\n        //-------------\r\n        var render = function () {\r\n            var time = (new Date().getTime() - startTime) * 0.001;\r\n            gl.disable(gl.DEPTH_TEST);\r\n            renders2Bg(s2_NoiseBuffer.f, cw, ch, time);\r\n            renderShad(s2_NoiseBuffer.f, cw, ch);\r\n            renderByob(s1_byobBuffer.f, cw, ch);\r\n            renderRaymarch(s1_rayBuffer.f, time, cw, ch);\r\n            renderSobel(s1_sobelBuffer.f, s1_rayBuffer.t, cw, ch);\r\n            renders1main(s1_mainBuffer.f, s1_byobBuffer.t, s1_sobelBuffer.t, cw, ch);\r\n            renders1quad(s2_NoiseBuffer.f, s1_mainBuffer.t, cw, ch);\r\n            renderNoise(mainBuffer.f, s2_NoiseBuffer.t, cw, ch);\r\n            renderMain(null, mainBuffer.t);\r\n            // renderMain(null, .t);\r\n            gl.flush();\r\n            requestAnimationFrame(render);\r\n        };\r\n        render();\r\n    };\r\n    return PureRaymarch;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack:///./src/scripts/gl/PureRaymarch.ts?");

/***/ }),

/***/ "./src/scripts/gl/index.ts":
/*!*********************************!*\
  !*** ./src/scripts/gl/index.ts ***!
  \*********************************/
/*! exports provided: PureRaymarch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _PureRaymarch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PureRaymarch */ \"./src/scripts/gl/PureRaymarch.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"PureRaymarch\", function() { return _PureRaymarch__WEBPACK_IMPORTED_MODULE_0__[\"PureRaymarch\"]; });\n\n\r\n\n\n//# sourceURL=webpack:///./src/scripts/gl/index.ts?");

/***/ }),

/***/ "./src/scripts/gl/libs/PureBase.ts":
/*!*****************************************!*\
  !*** ./src/scripts/gl/libs/PureBase.ts ***!
  \*****************************************/
/*! exports provided: PureBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PureBase\", function() { return PureBase; });\nvar gl;\r\nvar PureBase = /** @class */ (function () {\r\n    function PureBase(webgl) {\r\n        gl = webgl;\r\n    }\r\n    PureBase.prototype.createProgram = function (vert, frag) {\r\n        var vertexShader = gl.createShader(gl.VERTEX_SHADER);\r\n        this.compileShader(vertexShader, vert);\r\n        var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);\r\n        this.compileShader(fragmentShader, frag);\r\n        var program = gl.createProgram();\r\n        gl.attachShader(program, vertexShader);\r\n        gl.attachShader(program, fragmentShader);\r\n        gl.linkProgram(program);\r\n        gl.useProgram(program);\r\n        return program;\r\n    };\r\n    PureBase.prototype.compileShader = function (shader, code) {\r\n        gl.shaderSource(shader, code);\r\n        gl.compileShader(shader);\r\n    };\r\n    PureBase.prototype.createVbo = function (data) {\r\n        var vbo = gl.createBuffer();\r\n        gl.bindBuffer(gl.ARRAY_BUFFER, vbo);\r\n        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data), gl.STATIC_DRAW);\r\n        gl.bindBuffer(gl.ARRAY_BUFFER, null);\r\n        return vbo;\r\n    };\r\n    PureBase.prototype.createFrameBuffer = function (w, h) {\r\n        var frameBuffer = gl.createFramebuffer();\r\n        gl.bindFramebuffer(gl.FRAMEBUFFER, frameBuffer);\r\n        var depthBuffer = gl.createRenderbuffer();\r\n        gl.bindRenderbuffer(gl.RENDERBUFFER, depthBuffer);\r\n        gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, w, h);\r\n        gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, depthBuffer);\r\n        var textureBuffer = gl.createTexture();\r\n        gl.bindTexture(gl.TEXTURE_2D, textureBuffer);\r\n        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, w, h, 0, gl.RGBA, gl.FLOAT, null);\r\n        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);\r\n        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);\r\n        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);\r\n        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);\r\n        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, textureBuffer, 0);\r\n        gl.bindTexture(gl.TEXTURE_2D, null);\r\n        gl.bindRenderbuffer(gl.RENDERBUFFER, null);\r\n        gl.bindFramebuffer(gl.FRAMEBUFFER, null);\r\n        return { f: frameBuffer, d: depthBuffer, t: textureBuffer };\r\n    };\r\n    PureBase.prototype.clear = function (r, g, b, a, depth) {\r\n        gl.clearColor(r, g, b, a);\r\n        gl.clearDepth(depth);\r\n        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);\r\n    };\r\n    PureBase.prototype.setAttribute = function (prg, data, name, stride) {\r\n        var attLocation;\r\n        attLocation = gl.getAttribLocation(prg, name);\r\n        for (var i in data) {\r\n            gl.bindBuffer(gl.ARRAY_BUFFER, data[i]);\r\n            gl.enableVertexAttribArray(attLocation);\r\n            gl.vertexAttribPointer(attLocation, stride, gl.FLOAT, false, 0, 0);\r\n        }\r\n        gl.bindBuffer(gl.ARRAY_BUFFER, null);\r\n    };\r\n    PureBase.prototype.uniform1f = function (prg, name, data) {\r\n        var uniLocation;\r\n        uniLocation = gl.getUniformLocation(prg, name);\r\n        gl.uniform1f(uniLocation, data);\r\n    };\r\n    PureBase.prototype.uniform1i = function (prg, name, data) {\r\n        var uniLocation;\r\n        uniLocation = gl.getUniformLocation(prg, name);\r\n        gl.uniform1i(uniLocation, data);\r\n    };\r\n    PureBase.prototype.uniform2fv = function (prg, name, data) {\r\n        var uniLocation;\r\n        uniLocation = gl.getUniformLocation(prg, name);\r\n        gl.uniform2fv(uniLocation, data);\r\n    };\r\n    PureBase.prototype.uniform4fv = function (prg, name, data) {\r\n        var uniLocation;\r\n        uniLocation = gl.getUniformLocation(prg, name);\r\n        gl.uniform4fv(uniLocation, data);\r\n    };\r\n    PureBase.prototype.uniformMatrix4fv = function (prg, name, data) {\r\n        var uniLocation;\r\n        uniLocation = gl.getUniformLocation(prg, name);\r\n        gl.uniformMatrix4fv(uniLocation, false, data);\r\n    };\r\n    return PureBase;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack:///./src/scripts/gl/libs/PureBase.ts?");

/***/ }),

/***/ "./src/scripts/gl/libs/index.ts":
/*!**************************************!*\
  !*** ./src/scripts/gl/libs/index.ts ***!
  \**************************************/
/*! exports provided: matIV, minPrimitive, PureBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _minMatrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./minMatrix */ \"./src/scripts/gl/libs/minMatrix.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"matIV\", function() { return _minMatrix__WEBPACK_IMPORTED_MODULE_0__[\"matIV\"]; });\n\n/* harmony import */ var _minPrimitive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./minPrimitive */ \"./src/scripts/gl/libs/minPrimitive.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"minPrimitive\", function() { return _minPrimitive__WEBPACK_IMPORTED_MODULE_1__[\"minPrimitive\"]; });\n\n/* harmony import */ var _PureBase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PureBase */ \"./src/scripts/gl/libs/PureBase.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"PureBase\", function() { return _PureBase__WEBPACK_IMPORTED_MODULE_2__[\"PureBase\"]; });\n\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/scripts/gl/libs/index.ts?");

/***/ }),

/***/ "./src/scripts/gl/libs/minMatrix.ts":
/*!******************************************!*\
  !*** ./src/scripts/gl/libs/minMatrix.ts ***!
  \******************************************/
/*! exports provided: matIV */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"matIV\", function() { return matIV; });\n// ------------------------------------------------------------------------------------------------\r\n// minMatrix.js\r\n// version 0.0.1\r\n// Copyright (c) doxas\r\n// ------------------------------------------------------------------------------------------------\r\nvar matIV = /** @class */ (function () {\r\n    function matIV() {\r\n    }\r\n    matIV.prototype.create = function () {\r\n        return new Float32Array(16);\r\n    };\r\n    ;\r\n    matIV.prototype.identity = function (dest) {\r\n        dest[0] = 1;\r\n        dest[1] = 0;\r\n        dest[2] = 0;\r\n        dest[3] = 0;\r\n        dest[4] = 0;\r\n        dest[5] = 1;\r\n        dest[6] = 0;\r\n        dest[7] = 0;\r\n        dest[8] = 0;\r\n        dest[9] = 0;\r\n        dest[10] = 1;\r\n        dest[11] = 0;\r\n        dest[12] = 0;\r\n        dest[13] = 0;\r\n        dest[14] = 0;\r\n        dest[15] = 1;\r\n        return dest;\r\n    };\r\n    ;\r\n    matIV.prototype.multiply = function (mat1, mat2, dest) {\r\n        var a = mat1[0], b = mat1[1], c = mat1[2], d = mat1[3], e = mat1[4], f = mat1[5], g = mat1[6], h = mat1[7], i = mat1[8], j = mat1[9], k = mat1[10], l = mat1[11], m = mat1[12], n = mat1[13], o = mat1[14], p = mat1[15], A = mat2[0], B = mat2[1], C = mat2[2], D = mat2[3], E = mat2[4], F = mat2[5], G = mat2[6], H = mat2[7], I = mat2[8], J = mat2[9], K = mat2[10], L = mat2[11], M = mat2[12], N = mat2[13], O = mat2[14], P = mat2[15];\r\n        dest[0] = A * a + B * e + C * i + D * m;\r\n        dest[1] = A * b + B * f + C * j + D * n;\r\n        dest[2] = A * c + B * g + C * k + D * o;\r\n        dest[3] = A * d + B * h + C * l + D * p;\r\n        dest[4] = E * a + F * e + G * i + H * m;\r\n        dest[5] = E * b + F * f + G * j + H * n;\r\n        dest[6] = E * c + F * g + G * k + H * o;\r\n        dest[7] = E * d + F * h + G * l + H * p;\r\n        dest[8] = I * a + J * e + K * i + L * m;\r\n        dest[9] = I * b + J * f + K * j + L * n;\r\n        dest[10] = I * c + J * g + K * k + L * o;\r\n        dest[11] = I * d + J * h + K * l + L * p;\r\n        dest[12] = M * a + N * e + O * i + P * m;\r\n        dest[13] = M * b + N * f + O * j + P * n;\r\n        dest[14] = M * c + N * g + O * k + P * o;\r\n        dest[15] = M * d + N * h + O * l + P * p;\r\n        return dest;\r\n    };\r\n    ;\r\n    matIV.prototype.scale = function (mat, vec, dest) {\r\n        dest[0] = mat[0] * vec[0];\r\n        dest[1] = mat[1] * vec[0];\r\n        dest[2] = mat[2] * vec[0];\r\n        dest[3] = mat[3] * vec[0];\r\n        dest[4] = mat[4] * vec[1];\r\n        dest[5] = mat[5] * vec[1];\r\n        dest[6] = mat[6] * vec[1];\r\n        dest[7] = mat[7] * vec[1];\r\n        dest[8] = mat[8] * vec[2];\r\n        dest[9] = mat[9] * vec[2];\r\n        dest[10] = mat[10] * vec[2];\r\n        dest[11] = mat[11] * vec[2];\r\n        dest[12] = mat[12];\r\n        dest[13] = mat[13];\r\n        dest[14] = mat[14];\r\n        dest[15] = mat[15];\r\n        return dest;\r\n    };\r\n    ;\r\n    matIV.prototype.translate = function (mat, vec, dest) {\r\n        dest[0] = mat[0];\r\n        dest[1] = mat[1];\r\n        dest[2] = mat[2];\r\n        dest[3] = mat[3];\r\n        dest[4] = mat[4];\r\n        dest[5] = mat[5];\r\n        dest[6] = mat[6];\r\n        dest[7] = mat[7];\r\n        dest[8] = mat[8];\r\n        dest[9] = mat[9];\r\n        dest[10] = mat[10];\r\n        dest[11] = mat[11];\r\n        dest[12] = mat[0] * vec[0] + mat[4] * vec[1] + mat[8] * vec[2] + mat[12];\r\n        dest[13] = mat[1] * vec[0] + mat[5] * vec[1] + mat[9] * vec[2] + mat[13];\r\n        dest[14] = mat[2] * vec[0] + mat[6] * vec[1] + mat[10] * vec[2] + mat[14];\r\n        dest[15] = mat[3] * vec[0] + mat[7] * vec[1] + mat[11] * vec[2] + mat[15];\r\n        return dest;\r\n    };\r\n    ;\r\n    matIV.prototype.rotate = function (mat, angle, axis, dest) {\r\n        var sq = Math.sqrt(axis[0] * axis[0] + axis[1] * axis[1] + axis[2] * axis[2]);\r\n        if (!sq) {\r\n            return null;\r\n        }\r\n        var a = axis[0], b = axis[1], c = axis[2];\r\n        if (sq != 1) {\r\n            sq = 1 / sq;\r\n            a *= sq;\r\n            b *= sq;\r\n            c *= sq;\r\n        }\r\n        var d = Math.sin(angle), e = Math.cos(angle), f = 1 - e, g = mat[0], h = mat[1], i = mat[2], j = mat[3], k = mat[4], l = mat[5], m = mat[6], n = mat[7], o = mat[8], p = mat[9], q = mat[10], r = mat[11], s = a * a * f + e, t = b * a * f + c * d, u = c * a * f - b * d, v = a * b * f - c * d, w = b * b * f + e, x = c * b * f + a * d, y = a * c * f + b * d, z = b * c * f - a * d, A = c * c * f + e;\r\n        if (angle) {\r\n            if (mat != dest) {\r\n                dest[12] = mat[12];\r\n                dest[13] = mat[13];\r\n                dest[14] = mat[14];\r\n                dest[15] = mat[15];\r\n            }\r\n        }\r\n        else {\r\n            dest = mat;\r\n        }\r\n        dest[0] = g * s + k * t + o * u;\r\n        dest[1] = h * s + l * t + p * u;\r\n        dest[2] = i * s + m * t + q * u;\r\n        dest[3] = j * s + n * t + r * u;\r\n        dest[4] = g * v + k * w + o * x;\r\n        dest[5] = h * v + l * w + p * x;\r\n        dest[6] = i * v + m * w + q * x;\r\n        dest[7] = j * v + n * w + r * x;\r\n        dest[8] = g * y + k * z + o * A;\r\n        dest[9] = h * y + l * z + p * A;\r\n        dest[10] = i * y + m * z + q * A;\r\n        dest[11] = j * y + n * z + r * A;\r\n        return dest;\r\n    };\r\n    ;\r\n    matIV.prototype.lookAt = function (eye, center, up, dest) {\r\n        var eyeX = eye[0], eyeY = eye[1], eyeZ = eye[2], upX = up[0], upY = up[1], upZ = up[2], centerX = center[0], centerY = center[1], centerZ = center[2];\r\n        if (eyeX == centerX && eyeY == centerY && eyeZ == centerZ) {\r\n            return this.identity(dest);\r\n        }\r\n        var x0, x1, x2, y0, y1, y2, z0, z1, z2, l;\r\n        z0 = eyeX - center[0];\r\n        z1 = eyeY - center[1];\r\n        z2 = eyeZ - center[2];\r\n        l = 1 / Math.sqrt(z0 * z0 + z1 * z1 + z2 * z2);\r\n        z0 *= l;\r\n        z1 *= l;\r\n        z2 *= l;\r\n        x0 = upY * z2 - upZ * z1;\r\n        x1 = upZ * z0 - upX * z2;\r\n        x2 = upX * z1 - upY * z0;\r\n        l = Math.sqrt(x0 * x0 + x1 * x1 + x2 * x2);\r\n        if (!l) {\r\n            x0 = 0;\r\n            x1 = 0;\r\n            x2 = 0;\r\n        }\r\n        else {\r\n            l = 1 / l;\r\n            x0 *= l;\r\n            x1 *= l;\r\n            x2 *= l;\r\n        }\r\n        y0 = z1 * x2 - z2 * x1;\r\n        y1 = z2 * x0 - z0 * x2;\r\n        y2 = z0 * x1 - z1 * x0;\r\n        l = Math.sqrt(y0 * y0 + y1 * y1 + y2 * y2);\r\n        if (!l) {\r\n            y0 = 0;\r\n            y1 = 0;\r\n            y2 = 0;\r\n        }\r\n        else {\r\n            l = 1 / l;\r\n            y0 *= l;\r\n            y1 *= l;\r\n            y2 *= l;\r\n        }\r\n        dest[0] = x0;\r\n        dest[1] = y0;\r\n        dest[2] = z0;\r\n        dest[3] = 0;\r\n        dest[4] = x1;\r\n        dest[5] = y1;\r\n        dest[6] = z1;\r\n        dest[7] = 0;\r\n        dest[8] = x2;\r\n        dest[9] = y2;\r\n        dest[10] = z2;\r\n        dest[11] = 0;\r\n        dest[12] = -(x0 * eyeX + x1 * eyeY + x2 * eyeZ);\r\n        dest[13] = -(y0 * eyeX + y1 * eyeY + y2 * eyeZ);\r\n        dest[14] = -(z0 * eyeX + z1 * eyeY + z2 * eyeZ);\r\n        dest[15] = 1;\r\n        return dest;\r\n    };\r\n    ;\r\n    matIV.prototype.perspective = function (fovy, aspect, near, far, dest) {\r\n        var t = near * Math.tan(fovy * Math.PI / 360);\r\n        var r = t * aspect;\r\n        var a = r * 2, b = t * 2, c = far - near;\r\n        dest[0] = near * 2 / a;\r\n        dest[1] = 0;\r\n        dest[2] = 0;\r\n        dest[3] = 0;\r\n        dest[4] = 0;\r\n        dest[5] = near * 2 / b;\r\n        dest[6] = 0;\r\n        dest[7] = 0;\r\n        dest[8] = 0;\r\n        dest[9] = 0;\r\n        dest[10] = -(far + near) / c;\r\n        dest[11] = -1;\r\n        dest[12] = 0;\r\n        dest[13] = 0;\r\n        dest[14] = -(far * near * 2) / c;\r\n        dest[15] = 0;\r\n        return dest;\r\n    };\r\n    ;\r\n    matIV.prototype.transpose = function (mat, dest) {\r\n        dest[0] = mat[0];\r\n        dest[1] = mat[4];\r\n        dest[2] = mat[8];\r\n        dest[3] = mat[12];\r\n        dest[4] = mat[1];\r\n        dest[5] = mat[5];\r\n        dest[6] = mat[9];\r\n        dest[7] = mat[13];\r\n        dest[8] = mat[2];\r\n        dest[9] = mat[6];\r\n        dest[10] = mat[10];\r\n        dest[11] = mat[14];\r\n        dest[12] = mat[3];\r\n        dest[13] = mat[7];\r\n        dest[14] = mat[11];\r\n        dest[15] = mat[15];\r\n        return dest;\r\n    };\r\n    ;\r\n    matIV.prototype.inverse = function (mat, dest) {\r\n        var a = mat[0], b = mat[1], c = mat[2], d = mat[3], e = mat[4], f = mat[5], g = mat[6], h = mat[7], i = mat[8], j = mat[9], k = mat[10], l = mat[11], m = mat[12], n = mat[13], o = mat[14], p = mat[15], q = a * f - b * e, r = a * g - c * e, s = a * h - d * e, t = b * g - c * f, u = b * h - d * f, v = c * h - d * g, w = i * n - j * m, x = i * o - k * m, y = i * p - l * m, z = j * o - k * n, A = j * p - l * n, B = k * p - l * o, ivd = 1 / (q * B - r * A + s * z + t * y - u * x + v * w);\r\n        dest[0] = (f * B - g * A + h * z) * ivd;\r\n        dest[1] = (-b * B + c * A - d * z) * ivd;\r\n        dest[2] = (n * v - o * u + p * t) * ivd;\r\n        dest[3] = (-j * v + k * u - l * t) * ivd;\r\n        dest[4] = (-e * B + g * y - h * x) * ivd;\r\n        dest[5] = (a * B - c * y + d * x) * ivd;\r\n        dest[6] = (-m * v + o * s - p * r) * ivd;\r\n        dest[7] = (i * v - k * s + l * r) * ivd;\r\n        dest[8] = (e * A - f * y + h * w) * ivd;\r\n        dest[9] = (-a * A + b * y - d * w) * ivd;\r\n        dest[10] = (m * u - n * s + p * q) * ivd;\r\n        dest[11] = (-i * u + j * s - l * q) * ivd;\r\n        dest[12] = (-e * z + f * x - g * w) * ivd;\r\n        dest[13] = (a * z - b * x + c * w) * ivd;\r\n        dest[14] = (-m * t + n * r - o * q) * ivd;\r\n        dest[15] = (i * t - j * r + k * q) * ivd;\r\n        return dest;\r\n    };\r\n    ;\r\n    return matIV;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack:///./src/scripts/gl/libs/minMatrix.ts?");

/***/ }),

/***/ "./src/scripts/gl/libs/minPrimitive.ts":
/*!*********************************************!*\
  !*** ./src/scripts/gl/libs/minPrimitive.ts ***!
  \*********************************************/
/*! exports provided: minPrimitive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"minPrimitive\", function() { return minPrimitive; });\nvar minPrimitive = /** @class */ (function () {\r\n    function minPrimitive() {\r\n    }\r\n    minPrimitive.prototype.quad = function () {\r\n        var quadPos = [\r\n            -1.0, 1.0, 0.0,\r\n            -1.0, -1.0, 0.0,\r\n            1.0, 1.0, 0.0,\r\n            1.0, -1.0, 0.0\r\n        ];\r\n        return quadPos;\r\n    };\r\n    return minPrimitive;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack:///./src/scripts/gl/libs/minPrimitive.ts?");

/***/ }),

/***/ "./src/scripts/main.ts":
/*!*****************************!*\
  !*** ./src/scripts/main.ts ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _gl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gl */ \"./src/scripts/gl/index.ts\");\n/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/index.scss */ \"./src/styles/index.scss\");\n/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\nvar canvas = document.getElementById(\"glCanvas\");\r\nvar pr = new _gl__WEBPACK_IMPORTED_MODULE_0__[\"PureRaymarch\"](canvas);\r\npr.init();\r\n// window.addEventListener('resize', function(){\r\n//     pr.resize();\r\n// });\r\n\n\n//# sourceURL=webpack:///./src/scripts/main.ts?");

/***/ }),

/***/ "./src/scripts/shaders/Byob.frag":
/*!***************************************!*\
  !*** ./src/scripts/shaders/Byob.frag ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"precision highp float;\\r\\n\\r\\nuniform vec2 u_resolution;\\r\\n\\r\\nvec2 resolution = u_resolution;\\r\\n\\r\\nconst float pi = acos(-1.);\\r\\n\\r\\nfloat rand(vec2 co)\\r\\n{\\r\\n    return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);\\r\\n}\\r\\n\\r\\n//https://gist.github.com/patriciogonzalezvivo/670c22f3966e662d2f83\\r\\nfloat noise(vec2 p, float freq )\\r\\n{\\r\\n\\tfloat unit = resolution.x / freq;\\r\\n\\tvec2 ij = floor(p/unit);\\r\\n\\tvec2 xy = mod(p,unit)/unit;\\r\\n\\txy = .5*(1.-cos(pi*xy));\\r\\n\\tfloat a = rand((ij+vec2(0.,0.)));\\r\\n\\tfloat b = rand((ij+vec2(1.,0.)));\\r\\n\\tfloat c = rand((ij+vec2(0.,1.)));\\r\\n\\tfloat d = rand((ij+vec2(1.,1.)));\\r\\n\\tfloat x1 = mix(a, b, xy.x);\\r\\n\\tfloat x2 = mix(c, d, xy.x);\\r\\n\\treturn mix(x1, x2, xy.y);\\r\\n}\\r\\n\\r\\nfloat pNoise(vec2 p, int res)\\r\\n{\\r\\n\\tfloat persistance = .5;\\r\\n\\tfloat n = 0.;\\r\\n\\tfloat normK = 0.;\\r\\n\\tfloat f = 4.;\\r\\n\\tfloat amp = 1.;\\r\\n\\tint iCount = 0;\\r\\n\\tfor (int i = 0; i<50; i++)\\r\\n\\t{\\r\\n\\t\\tn+=amp*noise(p, f);\\r\\n\\t\\tf*=2.;\\r\\n\\t\\tnormK+=amp;\\r\\n\\t\\tamp*=persistance;\\r\\n\\t\\tif (iCount == res) break;\\r\\n\\t\\tiCount++;\\r\\n\\t}\\r\\n\\tfloat nf = n/normK;\\r\\n\\treturn nf*nf*nf*nf;\\r\\n}\\r\\n\\r\\nvec3 byob(vec2 cuv, vec3 col_1, vec3 col_2)\\r\\n{\\r\\n    vec3 col;\\r\\n    float cm = 0.8;\\r\\n    col_1 *= cm;\\r\\n    col_2 *= cm;\\r\\n    // vec3 col_1 = vec3(1.0, 0.902, 0.0) * cm;\\r\\n    // vec3 col_2 = vec3(1.0, 0.8118, 0.2) * cm;\\r\\n\\r\\n    float t = mod(floor(cuv.x) + floor(cuv.y), 2.);\\r\\n\\r\\n    col = mix(col_1, col_2, t);\\r\\n\\r\\n    return col;\\r\\n}\\r\\n\\r\\nvoid main() \\r\\n{\\r\\n    vec2 p = (gl_FragCoord.xy * 2. - resolution) / min(resolution.x, resolution.y);\\r\\n    vec2 cuv = gl_FragCoord.xy / resolution;\\r\\n\\r\\n    cuv.x *= resolution.x / resolution.y;\\r\\n    cuv *= 13.;\\r\\n\\r\\n    vec4 col_1 = vec4(byob(cuv, vec3(1.0, 0.902, 0.0), vec3(1.0, 0.8118, 0.2)), 1.);\\r\\n    vec4 col_2 = vec4(byob(cuv * 3. + vec2(0.7), vec3(1.0, 0.9451, 0.4667), vec3(1.0, 0.8627, 0.4157)) + vec3(0.2), 0.1);\\r\\n    vec4 col_3 = vec4(byob(cuv * 1.5 + vec2(-0.7, 0.2), vec3(1.0, 0.9451, 0.4667), vec3(1.0, 0.8627, 0.4157)) + vec3(0.2), 0.1);\\r\\n    vec4 col_4 = vec4(byob(cuv * 4. + vec2(0.2, 0.4), vec3(1.0, 0.9686, 0.6941), vec3(1.0, 0.8745, 0.4667)) + vec3(0.2), 0.1);\\r\\n\\r\\n    vec4 col = col_1;\\r\\n    col *= col_2;\\r\\n    col *= col_3;\\r\\n    col *= col_4;\\r\\n    col.rgb += vec3(0.09);\\r\\n    \\r\\n    gl_FragColor = col;\\r\\n}\");\n\n//# sourceURL=webpack:///./src/scripts/shaders/Byob.frag?");

/***/ }),

/***/ "./src/scripts/shaders/Sobel.frag":
/*!****************************************!*\
  !*** ./src/scripts/shaders/Sobel.frag ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"precision mediump float;\\r\\n\\r\\nuniform sampler2D texture;\\r\\nuniform vec2 resolution;\\r\\n\\r\\nfloat intensity(in vec4 color)\\r\\n{\\r\\n\\treturn sqrt((color.x*color.x)+(color.y*color.y)+(color.z*color.z));\\r\\n}\\r\\n\\r\\n//https://www.forceflow.be/thesis/thesis-code/(CC BY-NC-SA 3.0)\\r\\nvec3 sobel(vec2 r, vec2 center)\\r\\n{\\r\\n\\t\\t  // get samples around pixel\\r\\n    float tleft = intensity(texture2D(texture,center + vec2(-r.x,r.y)));\\r\\n    float left = intensity(texture2D(texture,center + vec2(-r.x,0)));\\r\\n    float bleft = intensity(texture2D(texture,center + vec2(-r.x,-r.y)));\\r\\n    float top = intensity(texture2D(texture,center + vec2(0,r.y)));\\r\\n    float bottom = intensity(texture2D(texture,center + vec2(0,-r.y)));\\r\\n    float tright = intensity(texture2D(texture,center + vec2(r.x,r.y)));\\r\\n    float right = intensity(texture2D(texture,center + vec2(r.x,0)));\\r\\n    float bright = intensity(texture2D(texture,center + vec2(r.x,-r.y)));\\r\\n\\r\\n      // Sobel masks (to estimate gradient)\\r\\n      //        1 0 -1     -1 -2 -1\\r\\n      //    X = 2 0 -2  Y = 0  0  0\\r\\n      //        1 0 -1      1  2  1\\r\\n\\r\\n    float x = tleft + 2.0*left + bleft - tright - 2.0*right - bright;\\r\\n    float y = -tleft - 2.0*top - tright + bleft + 2.0 * bottom + bright;\\r\\n    float color = sqrt((x*x) + (y*y));\\r\\n\\t  // if (color > limit){return vec3(0.0,0.0,0.0);}\\r\\n    // return vec3(1.0,1.0,1.0);\\r\\n\\r\\n    return vec3(color);\\r\\n}\\r\\n\\r\\nvoid main()\\r\\n{\\r\\n\\tvec2 uv = gl_FragCoord.xy / resolution;\\r\\n\\tvec2 r = vec2(1. / resolution.x, 1. / resolution.y);\\r\\n\\r\\n\\tgl_FragColor = vec4(sobel(r, uv),1.);\\r\\n}\");\n\n//# sourceURL=webpack:///./src/scripts/shaders/Sobel.frag?");

/***/ }),

/***/ "./src/scripts/shaders/fragBg.frag":
/*!*****************************************!*\
  !*** ./src/scripts/shaders/fragBg.frag ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"precision highp float;\\r\\n\\r\\nuniform vec2 resolution;\\r\\nuniform float time;\\r\\n\\r\\nvec2 rand(vec2 co)\\r\\n{\\r\\n    vec2 rd = fract(sin(vec2( dot(co,vec2(127.1,311.7)),dot(co,vec2(269.5,183.3)) ))*43758.5453123);\\r\\n    return rd * 2. - 1.;\\r\\n}\\r\\n\\r\\n//ref: https://thebookofshaders.com/11/\\r\\nfloat noise(vec2 co) \\r\\n{\\r\\n    vec2 i = floor(co);\\r\\n    vec2 f = fract(co);\\r\\n    vec2 u = f * f * (3. - 2. * f);\\r\\n\\r\\n    vec2 r = vec2(1., 0.);\\r\\n    vec2 a = rand(i + r.yy);\\r\\n    vec2 b = rand(i + r.xy);\\r\\n    vec2 c = rand(i + r.yx);\\r\\n    vec2 d = rand(i + r.xx);\\r\\n\\r\\n    float aa = dot(a, f - r.yy);\\r\\n    float bb = dot(b, f - r.xy);\\r\\n    float cc = dot(c, f - r.yx);\\r\\n    float dd = dot(d, f - r.xx);\\r\\n\\r\\n    return mix(mix(aa, bb, u.x), mix(cc, dd, u.x), u.y);\\r\\n}\\r\\n\\r\\nvoid main() \\r\\n{\\r\\n    vec2 uv = gl_FragCoord.xy / resolution;\\r\\n\\r\\n    vec3 color = vec3(1.0, 0.4824, 0.0);\\r\\n\\r\\n    vec2 pos = vec2(uv.x*5.0 + time * -1., uv.y * 5.);\\r\\n\\r\\n    color = vec3( noise(pos)*.5+.5 );\\r\\n    // color *= color;\\r\\n\\r\\n    vec3 c = mix(vec3(0.9), color, 0.15);\\r\\n\\r\\n    vec4 col = vec4(uv.x, uv.y,1.,1.);\\r\\n    // vec3 c = 0.5 + 0.5*cos(time+uv.xyx+vec3(0,2,4));\\r\\n\\r\\n\\r\\n    gl_FragColor = col;\\r\\n}\");\n\n//# sourceURL=webpack:///./src/scripts/shaders/fragBg.frag?");

/***/ }),

/***/ "./src/scripts/shaders/fragNoise.frag":
/*!********************************************!*\
  !*** ./src/scripts/shaders/fragNoise.frag ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"precision highp float;\\r\\n\\r\\nuniform vec2 resolution;\\r\\nuniform sampler2D texture;\\r\\n\\r\\nfloat rand(vec2 co)\\r\\n{\\r\\n    return fract(sin(dot(co,vec2(12.9898, 78.233))) * 43758.5453);\\r\\n}\\r\\n\\r\\nvoid main() \\r\\n{\\r\\n    vec2 uv = gl_FragCoord.xy / resolution;\\r\\n    vec4 tex = texture2D( texture, uv );\\r\\n\\r\\n    float nv = rand(uv);\\r\\n    float noisePower = 0.3;\\r\\n\\r\\n    nv *= noisePower;\\r\\n    nv += 1.;\\r\\n\\r\\n    tex *= nv;\\r\\n    \\r\\n    gl_FragColor = tex;\\r\\n}\");\n\n//# sourceURL=webpack:///./src/scripts/shaders/fragNoise.frag?");

/***/ }),

/***/ "./src/scripts/shaders/fragQuad.frag":
/*!*******************************************!*\
  !*** ./src/scripts/shaders/fragQuad.frag ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"precision highp float;\\r\\n\\r\\nuniform vec2 resolution;\\r\\nuniform sampler2D texture;\\r\\n\\r\\nvoid main() \\r\\n{\\r\\n    vec2 uv = gl_FragCoord.xy / resolution;\\r\\n    gl_FragColor = texture2D( texture, uv );\\r\\n}\");\n\n//# sourceURL=webpack:///./src/scripts/shaders/fragQuad.frag?");

/***/ }),

/***/ "./src/scripts/shaders/fragShadow.frag":
/*!*********************************************!*\
  !*** ./src/scripts/shaders/fragShadow.frag ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"precision highp float;\\r\\n\\r\\nuniform vec2 resolution;\\r\\n\\r\\nvoid main() \\r\\n{\\r\\n    vec2 uv = gl_FragCoord.xy / resolution;\\r\\n    vec4 col = vec4(vec3(0.4), 1.);\\r\\n    gl_FragColor = col;\\r\\n}\");\n\n//# sourceURL=webpack:///./src/scripts/shaders/fragShadow.frag?");

/***/ }),

/***/ "./src/scripts/shaders/raymarchHeart.frag":
/*!************************************************!*\
  !*** ./src/scripts/shaders/raymarchHeart.frag ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"precision highp float;\\r\\n\\r\\nuniform float u_time;\\r\\nuniform vec2  u_resolution;\\r\\nuniform int depthBool;//0 == false, 1 == true\\r\\n\\r\\nvec2 resolution=u_resolution;\\r\\nfloat time=u_time;\\r\\n\\r\\nfloat pi=acos(-1.);\\r\\n\\r\\nmat2 rot(float a)\\r\\n{\\r\\n    float c=cos(a),s=sin(a);\\r\\n    return mat2(c,s,-s,c);\\r\\n}\\r\\n\\r\\nfloat box(vec3 p,vec3 r)\\r\\n{\\r\\n    p=abs(p)-r;\\r\\n    return max(max(p.x,p.y),p.z);\\r\\n}\\r\\n\\r\\nfloat sphere(vec3 p, float r)\\r\\n{\\r\\n    float d = length(p) - r;\\r\\n    return d;\\r\\n}\\r\\n\\r\\nvec3 rep(vec3 p,float r)\\r\\n{\\r\\n    return mod(p,r)-.5*r;\\r\\n}\\r\\n\\r\\nfloat ifsbox(vec3 p)\\r\\n{\\r\\n    for(int i=0;i<3;i++)\\r\\n    {\\r\\n        p=abs(p)-2.;\\r\\n    }\\r\\n    return box(rep(p,9.),vec3(1.,4.,3.));\\r\\n}\\r\\n\\r\\nvec3 hsv(float h,float s,float v)\\r\\n{\\r\\n    return((clamp(abs(fract(h+vec3(0.,2.,1.)/3.)*6.-3.)-1.,0.,1.)-1.)*s+1.)*v;\\r\\n}\\r\\n\\r\\n//ref: https://www.iquilezles.org/www/articles/distfunctions/distfunctions.htm\\r\\nfloat displacement(vec3 p, vec3 v) \\r\\n{\\r\\n  return sin(v.x * p.x) * sin(v.y * p.y) * sin(v.z * p.z);\\r\\n}\\r\\n\\r\\nvec3 camOffset = vec3(7.2 * 0.8 + cos(time) * 0.2, -0. * -0.1 + sin(time) * 0.5, 1.9);\\r\\n\\r\\nfloat spDisplace(vec3 p, float size, vec3 v)\\r\\n{\\r\\n    p += camOffset;\\r\\n    float d1 = sphere(p, size);\\r\\n    float d2 = displacement(p, v);\\r\\n    return d1+d2;\\r\\n}\\r\\n\\r\\nfloat rootSpeed = time  * 30.;\\r\\n\\r\\nfloat sceneHeart(vec3 p, float size)\\r\\n{\\r\\n    float d;\\r\\n    p.z -= rootSpeed;\\r\\n    p.z -= 5.;\\r\\n\\r\\n    float d1 = sphere(p + vec3(3. + cos(time), 0.5 - 0.5*sin(time),0.), size * 0.8);\\r\\n    float d2 = spDisplace(p, size, vec3(10, 10,10.));//sphere(p, size);\\r\\n\\r\\n    d = mix(d1, d2, smoothstep(0.3, 0.7, sin(u_time / 1.5)));\\r\\n\\r\\n    return d;\\r\\n}\\r\\n\\r\\nvec3 repz(vec3 p,float r)\\r\\n{\\r\\n    p.z = mod(p.z, r) - 0.5 * r;\\r\\n    return p;\\r\\n}\\r\\n\\r\\nvec3 ifsPos(vec3 p)\\r\\n{\\r\\n    for(int i=0;i<3;i++)\\r\\n    {\\r\\n        p = abs(p) - 0.5;\\r\\n        p.xy *= rot(0.7);\\r\\n        // p.zx *= rot(0.8);\\r\\n    }\\r\\n    return p;\\r\\n}\\r\\n\\r\\nfloat load(vec3 p)\\r\\n{\\r\\n    float d;\\r\\n\\r\\n    vec2 s1 = vec2(5., 0.15);\\r\\n    vec2 s2 = vec2(5., 0.05);\\r\\n    vec2 s3 = vec2(8., 1.5);\\r\\n\\r\\n    vec3 p1;\\r\\n    p1 = abs(p);\\r\\n    p1.x -= 1.5;\\r\\n    p1.y += 0.3;\\r\\n    p1.xy *= rot(0.25 * pi);\\r\\n\\r\\n    vec3 p2;\\r\\n    p2 = abs(p);\\r\\n    float dx = box(rep(p1, 7.), vec3(s1.xyy));\\r\\n    float dy = box(rep(p1, 6.), vec3(s1.yxy));\\r\\n    float dz = box(rep(p2, 112.), vec3(s2.yyx));\\r\\n\\r\\n    vec3 p3;\\r\\n    p3 = p;\\r\\n    p3.xy *= rot(0.5 * pi);\\r\\n    float dx_a = box(rep(p3, 9.), vec3(s1.xyy));\\r\\n    float dy_a = box(rep(p3, 5.), vec3(s1.yxy));\\r\\n    float dz_a = box(rep(p3, 82.), vec3(s1.yyx));\\r\\n\\r\\n    vec3 p4 = p;\\r\\n    // p4.xy *= 4.;\\r\\n    p4.x += sin(p4.z + time) * .8;\\r\\n    p4.y += cos(p4.z + time) * .8;\\r\\n    float d4 = length(p4.xy) - abs(sin(time)) * 0.1;\\r\\n\\r\\n    vec3 p5 = p;\\r\\n    p5 = abs(p5);\\r\\n    p5.x += 0.3 * sin(time * 2.) + 5.;\\r\\n    p5.y += 0.;\\r\\n    float dx_b = box(rep(p5, 9.), vec3(s3.xyy));\\r\\n    float dy_b = box(rep(p5, 5.), vec3(s3.yxy));\\r\\n    float dz_b = box(rep(p5, 5.), vec3(s3.yyx));\\r\\n    \\r\\n    float d1 = dx;\\r\\n    d1 = min(d1, dy);\\r\\n    d1 = min(d1, dz);\\r\\n\\r\\n    float d2 = dx_a;\\r\\n    d2 = min(d2, dy_a);\\r\\n    d2 = min(d2, dz_a);\\r\\n\\r\\n    float d3 = dx_b;\\r\\n    d3 = min(d3, dy_b);\\r\\n    d3 = min(d3, dz_b);\\r\\n\\r\\n    d = min(d1, d2);\\r\\n    d = max(d, d3);\\r\\n    // d = min(d, d4);\\r\\n\\r\\n    return d;\\r\\n}\\r\\n\\r\\nfloat sceneLoad(vec3 p)\\r\\n{\\r\\n    float d;\\r\\n\\r\\n    d = load(p);//load(ifsPos(p));\\r\\n    // d = min(d, particle(p, 0.5, 3.));\\r\\n    // d = min(d, particle(p, 3., 1.));\\r\\n    \\r\\n    return d;\\r\\n}\\r\\n\\r\\nfloat map(vec3 p)\\r\\n{\\r\\n    float m;\\r\\n\\r\\n    float t = u_time / 2.;\\r\\n    float tt = t - floor(t);\\r\\n    float size = exp(abs(tt - 0.5) * -1. * 15.)/5.;\\r\\n    size += 2.;\\r\\n\\r\\n    float dh = sceneHeart(p, size);\\r\\n    float dl = sceneLoad(p);\\r\\n\\r\\n    m = min(dh, dl);\\r\\n    // m= dl;\\r\\n\\r\\n    return m;\\r\\n}\\r\\n\\r\\nvec3 fog(vec3 col, vec3 fogCol, float dist, float val) \\r\\n{\\r\\n    float value = 1. - exp(-1. * dist * val);\\r\\n    return mix(col, fogCol, value);\\r\\n}\\r\\n\\r\\nvec3 rayMarching(vec3 ro, vec3 rd) \\r\\n{\\r\\n    vec3 rayCol;\\r\\n    ro.z += rootSpeed;\\r\\n\\r\\n    float sceneDist;\\r\\n    float rayDepth = 0.;\\r\\n\\r\\n    for(int i = 0; i < 100; i++) \\r\\n    {\\r\\n        sceneDist = map(ro + rd * rayDepth);\\r\\n\\r\\n        if(sceneDist < 0.001) \\r\\n        {\\r\\n            break;\\r\\n        }\\r\\n\\r\\n        rayDepth += sceneDist;\\r\\n    }\\r\\n\\r\\n    if(rayDepth > 80.) \\r\\n    {\\r\\n        vec3 bgCol = vec3(0.);\\r\\n        vec3 d_bgCol = vec3(0.);\\r\\n\\r\\n        if(depthBool == 1)\\r\\n        {\\r\\n            rayCol = d_bgCol;\\r\\n        }else{\\r\\n            rayCol = bgCol;\\r\\n        }\\r\\n        \\r\\n        return rayCol;\\r\\n    }\\r\\n\\r\\n    vec3 rayPos = ro + rd * rayDepth;\\r\\n\\r\\n    rayCol = vec3(1.);\\r\\n    rayCol = fog(rayCol, vec3(0.0, 0.0, 0.0), rayDepth, 0.07);\\r\\n\\r\\n    float d = 20. / rayDepth * 0.8 ;\\r\\n    vec3 depthCol = vec3(1.) * d;\\r\\n\\r\\n    vec3 mainCol;\\r\\n    if(depthBool == 1)\\r\\n    {\\r\\n        mainCol = depthCol;\\r\\n    }else{\\r\\n        mainCol = rayCol;\\r\\n    }\\r\\n\\r\\n    return mainCol;\\r\\n}\\r\\n\\r\\nvoid main()\\r\\n{\\r\\n    vec2 p = (gl_FragCoord.xy * 2. - resolution) / min(resolution.x, resolution.y);\\r\\n    \\r\\n    vec3 ro = vec3(0., 0., -25.);\\r\\n    ro += camOffset;\\r\\n\\r\\n    vec3 ta = vec3(0.);\\r\\n\\r\\n    vec3 z = normalize(ta - ro);\\r\\n    vec3 up = vec3(0., 1., 0.);\\r\\n\\r\\n    vec3 x = normalize(cross(z, up));\\r\\n    vec3 y = normalize(cross(x, z));\\r\\n\\r\\n    vec3 rd = normalize(x * p.x + y * p.y + z * 2.5);\\r\\n\\r\\n    vec3 c = rayMarching(ro, rd);\\r\\n\\r\\n    gl_FragColor=vec4(c, 1.);\\r\\n}\");\n\n//# sourceURL=webpack:///./src/scripts/shaders/raymarchHeart.frag?");

/***/ }),

/***/ "./src/scripts/shaders/s1main.frag":
/*!*****************************************!*\
  !*** ./src/scripts/shaders/s1main.frag ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"precision highp float;\\r\\n\\r\\nuniform vec2 resolution;\\r\\nuniform sampler2D texture_byob;\\r\\nuniform sampler2D texture_sobel;\\r\\n\\r\\nvoid main() \\r\\n{\\r\\n    vec2 uv = gl_FragCoord.xy / resolution;\\r\\n    vec4 tex_ray = texture2D( texture_byob, uv );\\r\\n    vec4 tex_sobel = texture2D(texture_sobel, uv); \\r\\n\\r\\n    tex_ray += tex_sobel;\\r\\n    \\r\\n    gl_FragColor = tex_ray;\\r\\n}\");\n\n//# sourceURL=webpack:///./src/scripts/shaders/s1main.frag?");

/***/ }),

/***/ "./src/scripts/shaders/vertBg.vert":
/*!*****************************************!*\
  !*** ./src/scripts/shaders/vertBg.vert ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"attribute vec3 position;\\r\\n\\r\\nuniform mat4 mvpMatrix;\\r\\nuniform vec2 resolution;\\r\\n\\r\\nvoid main(void)\\r\\n{\\r\\n    float r = resolution.x / resolution.y;\\r\\n    vec3 pos = position;\\r\\n    pos.x *= r;\\r\\n\\r\\n    pos.xy *= 200.;\\r\\n\\r\\n    // pox.x += 1.;\\r\\n\\r\\n    pos.z -= 3.;\\r\\n    \\r\\n    gl_Position  = mvpMatrix * vec4(pos, 1.0);\\r\\n}\");\n\n//# sourceURL=webpack:///./src/scripts/shaders/vertBg.vert?");

/***/ }),

/***/ "./src/scripts/shaders/vertMatQuad.vert":
/*!**********************************************!*\
  !*** ./src/scripts/shaders/vertMatQuad.vert ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"attribute vec3 position;\\r\\n\\r\\nuniform mat4 mvpMatrix;\\r\\nuniform vec2 resolution;\\r\\n\\r\\nvoid main(void)\\r\\n{\\r\\n    float r = resolution.x / resolution.y;\\r\\n    vec3 pos = position;\\r\\n    pos.x *= r;\\r\\n    gl_Position  = mvpMatrix * vec4(pos, 1.0);\\r\\n}\");\n\n//# sourceURL=webpack:///./src/scripts/shaders/vertMatQuad.vert?");

/***/ }),

/***/ "./src/scripts/shaders/vertQuad.vert":
/*!*******************************************!*\
  !*** ./src/scripts/shaders/vertQuad.vert ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"attribute vec3 position;\\r\\n\\r\\nvoid main(void){\\r\\n\\tgl_Position = vec4(position, 1.0);\\r\\n}\");\n\n//# sourceURL=webpack:///./src/scripts/shaders/vertQuad.vert?");

/***/ }),

/***/ "./src/scripts/shaders/vertShadow.vert":
/*!*********************************************!*\
  !*** ./src/scripts/shaders/vertShadow.vert ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"attribute vec3 position;\\r\\n\\r\\nuniform mat4 mvpMatrix;\\r\\nuniform vec2 resolution;\\r\\n\\r\\nvoid main(void)\\r\\n{\\r\\n    float r = resolution.x / resolution.y;\\r\\n    vec3 pos = position;\\r\\n    pos.x *= r;\\r\\n    // pos.y *= r * 0.009 + 1.;\\r\\n\\r\\n    pos.xy *= 1.03;\\r\\n    pos.y *= 1. + pow(resolution.x / 10000., 2.2);\\r\\n    gl_Position = mvpMatrix * vec4(pos, 1.0);\\r\\n}\");\n\n//# sourceURL=webpack:///./src/scripts/shaders/vertShadow.vert?");

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../node_modules/sass-loader/dist/cjs.js??ref--6-2!./index.scss */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles/index.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/styles/index.scss?");

/***/ })

/******/ });
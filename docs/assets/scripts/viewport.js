/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/scripts/structure/adjustView.js":
/*!****************************************************!*\
  !*** ./src/assets/scripts/structure/adjustView.js ***!
  \****************************************************/
/***/ (function() {

eval("/**\n * ウィンドウの横幅と高さをCSS変数として設定する関数。\n * これにより、CSS内でviewportの高さ(vh)や横幅(vw)を変数として利用できるようになります。\n */\n(() => {\n  // 初期のウィンドウの横幅を取得\n  let baseVw = window.innerWidth;\n\n  /**\n   * viewportの高さをCSS変数として設定する関数。\n   */\n  const adjustVh = () => {\n    const vh = document.documentElement.clientHeight * 0.01;\n    document.documentElement.style.setProperty('--vh', `${vh}px`);\n  };\n\n  /**\n   * viewportの横幅をCSS変数として設定する関数。\n   */\n  const adjustVw = () => {\n    const vw = document.documentElement.clientWidth * 0.01;\n    document.documentElement.style.setProperty('--vw', `${vw}px`);\n  };\n\n  // ウィンドウのサイズが変更されたときのイベントリスナー\n  window.addEventListener('resize', () => {\n    adjustVw();\n    if (baseVw === window.innerWidth && navigator.userAgent.match(/iPhone|Android.+Mobile/)) {\n      // 画面の横幅に変動がない場合は、高さの再計算をスキップ\n      return;\n    }\n    // 画面の横幅に変動があった場合のみ、高さを再計算\n    baseVw = window.innerWidth;\n    adjustVh();\n  });\n\n  // 初期化時に横幅と高さのCSS変数を設定\n  adjustVh();\n  adjustVw();\n})();\n\n// Usage Examples\n// -----------------\n// // CSS\n// .eml {\n//   width: calc(var(--vw) * 100); // 100vw\n//   height: calc(var(--vh) * 100); // 100vh\n//   width: calc(var(--vw) * 50); // 50vw\n//   height: calc(var(--vh) * 80); // 80vh\n// }\n\n\n\n//# sourceURL=webpack://static-kit/./src/assets/scripts/structure/adjustView.js?");

/***/ }),

/***/ "./src/assets/scripts/structure/adjustViewport.js":
/*!********************************************************!*\
  !*** ./src/assets/scripts/structure/adjustViewport.js ***!
  \********************************************************/
/***/ (function() {

eval("/**\n * 390px以下のデバイス向けにviewportを調整する関数。\n * 390pxより大きいデバイスでは、通常のviewport設定を使用。\n * 390px以下のデバイスでは、viewportの幅を390pxに固定。\n */\n(() => {\n  // viewportのmetaタグを取得\n  const viewport = document.querySelector('meta[name=\"viewport\"]');\n\n  /**\n   * viewportの設定を調整する関数。\n   */\n  const adjustViewport = () => {\n    // ウィンドウの外部幅が390pxより大きい場合と390px以下の場合で、viewportの設定を変更\n    const value =\n      window.outerWidth > 390\n        ? 'width=device-width,initial-scale=1'\n        : 'width=390';\n\n    // 現在のviewportの設定と新しい設定が異なる場合のみ、viewportを更新\n    if (viewport.getAttribute('content') !== value) {\n      viewport.setAttribute('content', value);\n    }\n  };\n\n  // ウィンドウのサイズが変更されたときのイベントリスナーを追加\n  window.addEventListener('resize', adjustViewport);\n\n  // 初期化時にviewportを調整\n  adjustViewport();\n})();\n\n\n//# sourceURL=webpack://static-kit/./src/assets/scripts/structure/adjustViewport.js?");

/***/ }),

/***/ "./src/assets/scripts/viewport.js":
/*!****************************************!*\
  !*** ./src/assets/scripts/viewport.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _structure_adjustView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./structure/adjustView */ \"./src/assets/scripts/structure/adjustView.js\");\n/* harmony import */ var _structure_adjustView__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_structure_adjustView__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _structure_adjustViewport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./structure/adjustViewport */ \"./src/assets/scripts/structure/adjustViewport.js\");\n/* harmony import */ var _structure_adjustViewport__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_structure_adjustViewport__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n\n\n//# sourceURL=webpack://static-kit/./src/assets/scripts/viewport.js?");

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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/assets/scripts/viewport.js");
/******/ 	
/******/ })()
;
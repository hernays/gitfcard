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

/***/ "./src/css/styles.css":
/*!****************************!*\
  !*** ./src/css/styles.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://index/./src/css/styles.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/styles.css */ \"./src/css/styles.css\");\n\r\n\r\n\r\nconst caja = document.querySelectorAll('.ocultar');\r\nconst  fuegos = document.querySelector('#fuegos');\r\nconst card = document.querySelector('#card');\r\nconst body = document.querySelector('#body');\r\nconst cajah = document.querySelector('#cajah');\r\nconst audio = document.querySelector('#audio');\r\n\r\n\r\n\r\n\r\nconst ocultarCaja = (event) => {\r\n\r\n    const img = event.target;\r\n\r\n    if(img.classList.contains('regalo')){\r\n    \r\n    img.classList.replace('regalo','rapida');\r\n\r\nsetTimeout( (evento) => {\r\n\r\n     caja[0].style.display = 'none';\r\n\r\n     evento = true;\r\n\r\n     if(evento){\r\n\r\n        setTimeout( () => {\r\n\r\n             fuegos.classList.add('fuegos');\r\n             fuegos.src=\"assets/img/fuegos-artificiales.gif\";\r\n             card.classList.add('cardAbrir');\r\n             body.classList.add('flexBody');\r\n             cajah.classList.add('cardAbrir');\r\n             audio.classList.add('cardAbrir');\r\n\r\n             audio.play();\r\n\r\n         },10);\r\n        \r\n     }\r\n     \r\n },5000);\r\n\r\n    }\r\n\r\n}\r\n\r\n\r\n    caja[0].addEventListener('click', (event) => {\r\n\r\n        ocultarCaja(event);\r\n       \r\n    });\r\n\r\n\r\n\n\n//# sourceURL=webpack://index/./src/index.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
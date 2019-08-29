(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["index"],{

/***/ "./src/customSyntax.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return printMe; });
console.log("hello loader dep");

console.log("hello loader dep");

function printMe() {
    console.log("I get called from print.js!");
}


/***/ }),

/***/ "./src/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _customSyntax__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/customSyntax.js");
console.log("hello loader dep");




Object(_customSyntax__WEBPACK_IMPORTED_MODULE_1__["default"])();

console.log("src/index.js");

function component() {
  let element = document.createElement("div");

  // element.innerHTML = ["Hello", "webpack"].join(" ");
  element.innerHTML = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.join(["Hello", "webpack"], " ");

  return element;
}

document.body.appendChild(component());


/***/ })

},[["./src/index.js","runtime","vendors~index"]]]);
//# sourceMappingURL=index.js.map
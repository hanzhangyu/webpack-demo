(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["index"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _print_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./print.js */ "./src/print.js");



function component() {
    var element = document.createElement("div");
    var btn = document.createElement('button');

    element.innerHTML = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.join(["Hello", "webpack"], " ");

    btn.innerHTML = '点击这里，然后查看 console！';
    btn.onclick = _print_js__WEBPACK_IMPORTED_MODULE_1__["default"];

    element.appendChild(btn);

    return element;
}

document.body.appendChild(component());


/***/ }),

/***/ "./src/print.js":
/*!**********************!*\
  !*** ./src/print.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
console.log('The print.js module has loaded! See the network tab in dev tools...');

/* harmony default export */ __webpack_exports__["default"] = (() => {
  console.log('Button Clicked: Here\'s "some text"!');
});

/***/ })

},[["./src/index.js","runtime","vendors"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ByaW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF1QjtBQUNVOztBQUVqQztBQUNBO0FBQ0E7O0FBRUEsd0JBQXdCLDZDQUFDOztBQUV6QjtBQUNBLGtCQUFrQixpREFBTzs7QUFFekI7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7OztBQ2pCQTtBQUFBOztBQUVlO0FBQ2Y7QUFDQSxDQUFDLEUiLCJmaWxlIjoiaW5kZXguYzI3MzRiYzA4MjE3NmJlNGY2NTcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5pbXBvcnQgcHJpbnRNZSBmcm9tICcuL3ByaW50LmpzJztcblxuZnVuY3Rpb24gY29tcG9uZW50KCkge1xuICAgIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB2YXIgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICBlbGVtZW50LmlubmVySFRNTCA9IF8uam9pbihbXCJIZWxsb1wiLCBcIndlYnBhY2tcIl0sIFwiIFwiKTtcblxuICAgIGJ0bi5pbm5lckhUTUwgPSAn54K55Ye76L+Z6YeM77yM54S25ZCO5p+l55yLIGNvbnNvbGXvvIEnO1xuICAgIGJ0bi5vbmNsaWNrID0gcHJpbnRNZTtcblxuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoYnRuKTtcblxuICAgIHJldHVybiBlbGVtZW50O1xufVxuXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbXBvbmVudCgpKTtcbiIsImNvbnNvbGUubG9nKCdUaGUgcHJpbnQuanMgbW9kdWxlIGhhcyBsb2FkZWQhIFNlZSB0aGUgbmV0d29yayB0YWIgaW4gZGV2IHRvb2xzLi4uJyk7XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgY29uc29sZS5sb2coJ0J1dHRvbiBDbGlja2VkOiBIZXJlXFwncyBcInNvbWUgdGV4dFwiIScpO1xufTsiXSwic291cmNlUm9vdCI6IiJ9
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return print; });
function print(text) {
  console.log(text);
}


/***/ })

},[["./src/index.js","runtime","vendors"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ByaW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF1QjtBQUNVOztBQUVqQztBQUNBO0FBQ0E7O0FBRUEsd0JBQXdCLDZDQUFDOztBQUV6QjtBQUNBLGtCQUFrQixpREFBTzs7QUFFekI7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7OztBQ2pCQTtBQUFBO0FBQWU7QUFDZjtBQUNBIiwiZmlsZSI6ImluZGV4LjIzYzI2YjEwZmVmNWQ2NmNjNDc3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xuaW1wb3J0IHByaW50TWUgZnJvbSAnLi9wcmludC5qcyc7XG5cbmZ1bmN0aW9uIGNvbXBvbmVudCgpIHtcbiAgICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdmFyIGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgZWxlbWVudC5pbm5lckhUTUwgPSBfLmpvaW4oW1wiSGVsbG9cIiwgXCJ3ZWJwYWNrXCJdLCBcIiBcIik7XG5cbiAgICBidG4uaW5uZXJIVE1MID0gJ+eCueWHu+i/memHjO+8jOeEtuWQjuafpeeciyBjb25zb2xl77yBJztcbiAgICBidG4ub25jbGljayA9IHByaW50TWU7XG5cbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGJ0bik7XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbn1cblxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb21wb25lbnQoKSk7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcmludCh0ZXh0KSB7XG4gIGNvbnNvbGUubG9nKHRleHQpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==
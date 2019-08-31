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

const name = "a";
__webpack_require__("./src/lib sync recursive ^\\.\\/.*\\.lib\\.js$")(`./${name}.lib.js`);

console.log("src/index.js");

function component() {
  let element = document.createElement("div");

  // element.innerHTML = ["Hello", "webpack"].join(" ");
  element.innerHTML = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.join(["Hello", "webpack"], " ");

  return element;
}

document.body.appendChild(component());


/***/ }),

/***/ "./src/lib sync recursive ^\\.\\/.*\\.lib\\.js$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./a.lib.js": "./src/lib/a.lib.js",
	"./b.lib.js": "./src/lib/b.lib.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/lib sync recursive ^\\.\\/.*\\.lib\\.js$";

/***/ })

},[["./src/index.js","runtime","vendors~index","lib~index"]]]);
//# sourceMappingURL=index.js.map
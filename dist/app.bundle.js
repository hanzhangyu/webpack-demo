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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof3 = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _typeof2(obj) {
  if (typeof Symbol === "function" && _typeof3(Symbol.iterator) === "symbol") {
    _typeof2 = function _typeof2(obj) {
      return _typeof3(obj);
    };
  } else {
    _typeof2 = function _typeof2(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof3(obj);
    };
  }

  return _typeof2(obj);
}

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var runtime = function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.

  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.

    generator._invoke = makeInvokeMethod(innerFn, self, context);
    return generator;
  }

  exports.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.

  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed"; // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.

  var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.

  function Generator() {}

  function GeneratorFunction() {}

  function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.


  var IteratorPrototype = {};

  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

  if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction"; // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.

  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      prototype[method] = function (arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function (genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
    // do is to check its .name property.
    (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
  };

  exports.mark = function (genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;

      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }

    genFun.prototype = Object.create(Gp);
    return genFun;
  }; // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.


  exports.awrap = function (arg) {
    return {
      __await: arg
    };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);

      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;

        if (value && _typeof(value) === "object" && hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function (unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function (error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise = // If enqueue has been called before, then we want to wait until
      // all previous Promises have been resolved before calling invoke,
      // so that results are always delivered in the correct order. If
      // enqueue has not been called before, then it is important to
      // call invoke immediately, without waiting on a callback to fire,
      // so that the async generator function has the opportunity to do
      // any necessary setup in a predictable way. This predictability
      // is why the Promise constructor synchronously invokes its
      // executor callback, and why async functions synchronously
      // execute code before the first await. Since we implement simple
      // async functions in terms of async generators, it is especially
      // important to get this right, even though it requires care.
      previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
      // invocations of the iterator.
      callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    } // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).


    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);

  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };

  exports.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.

  exports.async = function (innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList));
    return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
    : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;
    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        } // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume


        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;

        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);

          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;
        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);
        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;
        var record = tryCatch(innerFn, self, context);

        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done ? GenStateCompleted : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };
        } else if (record.type === "throw") {
          state = GenStateCompleted; // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.

          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  } // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.


  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];

    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError("The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (!info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).

      context.next = delegate.nextLoc; // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.

      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }
    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    } // The delegate iterator is finished, so forget it and continue with
    // the outer generator.


    context.delegate = null;
    return ContinueSentinel;
  } // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.


  defineIteratorMethods(Gp);
  Gp[toStringTagSymbol] = "Generator"; // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.

  Gp[iteratorSymbol] = function () {
    return this;
  };

  Gp.toString = function () {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{
      tryLoc: "root"
    }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function (object) {
    var keys = [];

    for (var key in object) {
      keys.push(key);
    }

    keys.reverse(); // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.

    return function next() {
      while (keys.length) {
        var key = keys.pop();

        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      } // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.


      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];

      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;
          return next;
        };

        return next.next = next;
      }
    } // Return an iterator with no values.


    return {
      next: doneResult
    };
  }

  exports.values = values;

  function doneResult() {
    return {
      value: undefined,
      done: true
    };
  }

  Context.prototype = {
    constructor: Context,
    reset: function reset(skipTempReset) {
      this.prev = 0;
      this.next = 0; // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.

      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;
      this.method = "next";
      this.arg = undefined;
      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },
    stop: function stop() {
      this.done = true;
      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;

      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },
    dispatchException: function dispatchException(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;

      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }
          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },
    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },
    complete: function complete(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" || record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },
    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },
    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;

          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }

          return thrown;
        }
      } // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.


      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  }; // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.

  return exports;
}( // If this script is executing as a CommonJS module, use module.exports
// as the regeneratorRuntime namespace. Otherwise create a new empty
// object. Either way, the resulting object will be used to initialize
// the regeneratorRuntime variable at the top of this file.
( false ? undefined : _typeof(module)) === "object" ? module.exports : {});

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./math */ "./src/math.js");


// import Vue from "vue";
 // import Hello from "../node_modules/@paulhan/Comp/Hello.vue";
// import {asyncFN} from "../node_modules/@paulhan/Comp";

function init() {
  return _init.apply(this, arguments);
}

function _init() {
  _init = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // await asyncFN();
            console.log("inited");

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _init.apply(this, arguments);
}

init(); // new Vue({
//   el: "#app",
//   render: h => h(Hello)
// });
// console.log(Hello);

function component() {
  var element = document.createElement("pre");
  element.innerHTML = ["Hello webpack!", "5 cubed is equal to " + Object(_math__WEBPACK_IMPORTED_MODULE_2__["cube"])(5)].join("\n\n");
  return element;
}

var element = component();
document.body.appendChild(element);

/***/ }),

/***/ "./src/math.js":
/*!*********************!*\
  !*** ./src/math.js ***!
  \*********************/
/*! exports provided: cube, square, effect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cube", function() { return cube; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "square", function() { return square; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "effect", function() { return effect; });
function cube(x) {
  return x * x * x;
}
function square(x) {
  return x * x;
}
var effect = window.screen.width;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXN5bmNUb0dlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21hdGguanMiXSwibmFtZXMiOlsiYXN5bmNHZW5lcmF0b3JTdGVwIiwiZ2VuIiwicmVzb2x2ZSIsInJlamVjdCIsIl9uZXh0IiwiX3Rocm93Iiwia2V5IiwiYXJnIiwiaW5mbyIsInZhbHVlIiwiZXJyb3IiLCJkb25lIiwiUHJvbWlzZSIsInRoZW4iLCJfYXN5bmNUb0dlbmVyYXRvciIsImZuIiwic2VsZiIsImFyZ3MiLCJhcmd1bWVudHMiLCJhcHBseSIsImVyciIsInVuZGVmaW5lZCIsIm1vZHVsZSIsImV4cG9ydHMiLCJfdHlwZW9mMiIsIm9iaiIsIlN5bWJvbCIsIml0ZXJhdG9yIiwiY29uc3RydWN0b3IiLCJwcm90b3R5cGUiLCJfdHlwZW9mIiwicmVxdWlyZSIsInJ1bnRpbWUiLCJPcCIsIk9iamVjdCIsImhhc093biIsImhhc093blByb3BlcnR5IiwiJFN5bWJvbCIsIml0ZXJhdG9yU3ltYm9sIiwiYXN5bmNJdGVyYXRvclN5bWJvbCIsImFzeW5jSXRlcmF0b3IiLCJ0b1N0cmluZ1RhZ1N5bWJvbCIsInRvU3RyaW5nVGFnIiwid3JhcCIsImlubmVyRm4iLCJvdXRlckZuIiwidHJ5TG9jc0xpc3QiLCJwcm90b0dlbmVyYXRvciIsIkdlbmVyYXRvciIsImdlbmVyYXRvciIsImNyZWF0ZSIsImNvbnRleHQiLCJDb250ZXh0IiwiX2ludm9rZSIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsInR5cGUiLCJjYWxsIiwiR2VuU3RhdGVTdXNwZW5kZWRTdGFydCIsIkdlblN0YXRlU3VzcGVuZGVkWWllbGQiLCJHZW5TdGF0ZUV4ZWN1dGluZyIsIkdlblN0YXRlQ29tcGxldGVkIiwiQ29udGludWVTZW50aW5lbCIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJJdGVyYXRvclByb3RvdHlwZSIsImdldFByb3RvIiwiZ2V0UHJvdG90eXBlT2YiLCJOYXRpdmVJdGVyYXRvclByb3RvdHlwZSIsInZhbHVlcyIsIkdwIiwiZGlzcGxheU5hbWUiLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJmb3JFYWNoIiwibWV0aG9kIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImdlbkZ1biIsImN0b3IiLCJuYW1lIiwibWFyayIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiYXdyYXAiLCJfX2F3YWl0IiwiQXN5bmNJdGVyYXRvciIsImludm9rZSIsInJlY29yZCIsInJlc3VsdCIsInVud3JhcHBlZCIsInByZXZpb3VzUHJvbWlzZSIsImVucXVldWUiLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsImFzeW5jIiwiaXRlciIsIm5leHQiLCJzdGF0ZSIsIkVycm9yIiwiZG9uZVJlc3VsdCIsImRlbGVnYXRlIiwiZGVsZWdhdGVSZXN1bHQiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJUeXBlRXJyb3IiLCJyZXN1bHROYW1lIiwibmV4dExvYyIsInRvU3RyaW5nIiwicHVzaFRyeUVudHJ5IiwibG9jcyIsImVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicHVzaCIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJrZXlzIiwib2JqZWN0IiwicmV2ZXJzZSIsImxlbmd0aCIsInBvcCIsIml0ZXJhYmxlIiwiaXRlcmF0b3JNZXRob2QiLCJpc05hTiIsImkiLCJza2lwVGVtcFJlc2V0IiwicHJldiIsImNoYXJBdCIsInNsaWNlIiwic3RvcCIsInJvb3RFbnRyeSIsInJvb3RSZWNvcmQiLCJydmFsIiwiZXhjZXB0aW9uIiwiaGFuZGxlIiwibG9jIiwiY2F1Z2h0IiwiaGFzQ2F0Y2giLCJoYXNGaW5hbGx5IiwiZmluYWxseUVudHJ5IiwiY29tcGxldGUiLCJmaW5pc2giLCJ0aHJvd24iLCJkZWxlZ2F0ZVlpZWxkIiwicmVnZW5lcmF0b3JSdW50aW1lIiwiYWNjaWRlbnRhbFN0cmljdE1vZGUiLCJGdW5jdGlvbiIsIndlYnBhY2tQb2x5ZmlsbCIsImRlcHJlY2F0ZSIsInBhdGhzIiwiY2hpbGRyZW4iLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJnZXQiLCJsIiwiaW5pdCIsImNvbnNvbGUiLCJsb2ciLCJjb21wb25lbnQiLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwiY3ViZSIsImpvaW4iLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJ4Iiwic3F1YXJlIiwiZWZmZWN0Iiwid2luZG93Iiwic2NyZWVuIiwid2lkdGgiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURB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QTs7U0FFZTBJLEk7Ozs7Ozs7eUVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNFO0FBQ0FDLG1CQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaOztBQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7Ozs7QUFLQUYsSUFBSSxHLENBRUo7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQSxTQUFTRyxTQUFULEdBQXFCO0FBQ25CLE1BQUlDLE9BQU8sR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQWQ7QUFFQUYsU0FBTyxDQUFDRyxTQUFSLEdBQW9CLENBQUMsZ0JBQUQsRUFBbUIseUJBQXlCQyxrREFBSSxDQUFDLENBQUQsQ0FBaEQsRUFBcURDLElBQXJELENBQ2xCLE1BRGtCLENBQXBCO0FBSUEsU0FBT0wsT0FBUDtBQUNEOztBQUVELElBQUlBLE9BQU8sR0FBR0QsU0FBUyxFQUF2QjtBQUNBRSxRQUFRLENBQUNLLElBQVQsQ0FBY0MsV0FBZCxDQUEwQlAsT0FBMUIsRTs7Ozs7Ozs7Ozs7O0FDL0JBO0FBQUE7QUFBQTtBQUFBO0FBQU8sU0FBU0ksSUFBVCxDQUFjSSxDQUFkLEVBQWlCO0FBQ3BCLFNBQU9BLENBQUMsR0FBR0EsQ0FBSixHQUFRQSxDQUFmO0FBQ0g7QUFFTSxTQUFTQyxNQUFULENBQWdCRCxDQUFoQixFQUFtQjtBQUN0QixTQUFPQSxDQUFDLEdBQUdBLENBQVg7QUFDSDtBQUVNLElBQU1FLE1BQU0sR0FBR0MsTUFBTSxDQUFDQyxNQUFQLENBQWNDLEtBQTdCLEMiLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiZnVuY3Rpb24gYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBrZXksIGFyZykge1xuICB0cnkge1xuICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcbiAgICB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlamVjdChlcnJvcik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGluZm8uZG9uZSkge1xuICAgIHJlc29sdmUodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihfbmV4dCwgX3Rocm93KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuXG4gICAgICBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIF90aHJvdyhlcnIpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7XG4gICAgICB9XG5cbiAgICAgIF9uZXh0KHVuZGVmaW5lZCk7XG4gICAgfSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FzeW5jVG9HZW5lcmF0b3I7IiwiZnVuY3Rpb24gX3R5cGVvZjIob2JqKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mMiA9IGZ1bmN0aW9uIF90eXBlb2YyKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZjIgPSBmdW5jdGlvbiBfdHlwZW9mMihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2YyKG9iaik7IH1cblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBfdHlwZW9mMihTeW1ib2wuaXRlcmF0b3IpID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBfdHlwZW9mMihvYmopO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiBfdHlwZW9mMihvYmopO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZVwiKTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxudmFyIHJ1bnRpbWUgPSAoZnVuY3Rpb24gKGV4cG9ydHMpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIE9wID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgdmFyIGhhc093biA9IE9wLmhhc093blByb3BlcnR5O1xuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcbiAgdmFyIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIjtcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCBhbmQgb3V0ZXJGbi5wcm90b3R5cGUgaXMgYSBHZW5lcmF0b3IsIHRoZW4gb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IuXG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3I7XG4gICAgdmFyIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKTtcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTtcblxuICAgIC8vIFRoZSAuX2ludm9rZSBtZXRob2QgdW5pZmllcyB0aGUgaW1wbGVtZW50YXRpb25zIG9mIHRoZSAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMuXG4gICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgfVxuICBleHBvcnRzLndyYXAgPSB3cmFwO1xuXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGRcbiAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcbiAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG4gIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZVxuICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XG5cbiAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICAvLyBUaGlzIGlzIGEgcG9seWZpbGwgZm9yICVJdGVyYXRvclByb3RvdHlwZSUgZm9yIGVudmlyb25tZW50cyB0aGF0XG4gIC8vIGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgaXQuXG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuICBJdGVyYXRvclByb3RvdHlwZVtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuICB2YXIgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7XG4gIGlmIChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJlxuICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmXG4gICAgICBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpKSB7XG4gICAgLy8gVGhpcyBlbnZpcm9ubWVudCBoYXMgYSBuYXRpdmUgJUl0ZXJhdG9yUHJvdG90eXBlJTsgdXNlIGl0IGluc3RlYWRcbiAgICAvLyBvZiB0aGUgcG9seWZpbGwuXG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9XG4gICAgR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHcC5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZVt0b1N0cmluZ1RhZ1N5bWJvbF0gPVxuICAgIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuXG4gIC8vIEhlbHBlciBmb3IgZGVmaW5pbmcgdGhlIC5uZXh0LCAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMgb2YgdGhlXG4gIC8vIEl0ZXJhdG9yIGludGVyZmFjZSBpbiB0ZXJtcyBvZiBhIHNpbmdsZSAuX2ludm9rZSBtZXRob2QuXG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgIHByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gdHlwZW9mIGdlbkZ1biA9PT0gXCJmdW5jdGlvblwiICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gY3RvclxuICAgICAgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fFxuICAgICAgICAvLyBGb3IgdGhlIG5hdGl2ZSBHZW5lcmF0b3JGdW5jdGlvbiBjb25zdHJ1Y3RvciwgdGhlIGJlc3Qgd2UgY2FuXG4gICAgICAgIC8vIGRvIGlzIHRvIGNoZWNrIGl0cyAubmFtZSBwcm9wZXJ0eS5cbiAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICAgICA6IGZhbHNlO1xuICB9O1xuXG4gIGV4cG9ydHMubWFyayA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICAgICAgaWYgKCEodG9TdHJpbmdUYWdTeW1ib2wgaW4gZ2VuRnVuKSkge1xuICAgICAgICBnZW5GdW5bdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuICAgICAgfVxuICAgIH1cbiAgICBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCk7XG4gICAgcmV0dXJuIGdlbkZ1bjtcbiAgfTtcblxuICAvLyBXaXRoaW4gdGhlIGJvZHkgb2YgYW55IGFzeW5jIGZ1bmN0aW9uLCBgYXdhaXQgeGAgaXMgdHJhbnNmb3JtZWQgdG9cbiAgLy8gYHlpZWxkIHJlZ2VuZXJhdG9yUnVudGltZS5hd3JhcCh4KWAsIHNvIHRoYXQgdGhlIHJ1bnRpbWUgY2FuIHRlc3RcbiAgLy8gYGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIilgIHRvIGRldGVybWluZSBpZiB0aGUgeWllbGRlZCB2YWx1ZSBpc1xuICAvLyBtZWFudCB0byBiZSBhd2FpdGVkLlxuICBleHBvcnRzLmF3cmFwID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIHsgX19hd2FpdDogYXJnIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZztcbiAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgJiZcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24odW53cmFwcGVkKSB7XG4gICAgICAgICAgLy8gV2hlbiBhIHlpZWxkZWQgUHJvbWlzZSBpcyByZXNvbHZlZCwgaXRzIGZpbmFsIHZhbHVlIGJlY29tZXNcbiAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IGl0ZXJhdGlvbi5cbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQ7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgIC8vIElmIGEgcmVqZWN0ZWQgUHJvbWlzZSB3YXMgeWllbGRlZCwgdGhyb3cgdGhlIHJlamVjdGlvbiBiYWNrXG4gICAgICAgICAgLy8gaW50byB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIHNvIGl0IGNhbiBiZSBoYW5kbGVkIHRoZXJlLlxuICAgICAgICAgIHJldHVybiBpbnZva2UoXCJ0aHJvd1wiLCBlcnJvciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcbiAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xuICAgICAgICApIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuICBBc3luY0l0ZXJhdG9yLnByb3RvdHlwZVthc3luY0l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbiAgZXhwb3J0cy5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvcjtcblxuICAvLyBOb3RlIHRoYXQgc2ltcGxlIGFzeW5jIGZ1bmN0aW9ucyBhcmUgaW1wbGVtZW50ZWQgb24gdG9wIG9mXG4gIC8vIEFzeW5jSXRlcmF0b3Igb2JqZWN0czsgdGhleSBqdXN0IHJldHVybiBhIFByb21pc2UgZm9yIHRoZSB2YWx1ZSBvZlxuICAvLyB0aGUgZmluYWwgcmVzdWx0IHByb2R1Y2VkIGJ5IHRoZSBpdGVyYXRvci5cbiAgZXhwb3J0cy5hc3luYyA9IGZ1bmN0aW9uKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpXG4gICAgKTtcblxuICAgIHJldHVybiBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIGNvbnRleHQuYXJnID0gYXJnO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXG4gIC8vIHJlc3VsdCwgZWl0aGVyIGJ5IHJldHVybmluZyBhIHsgdmFsdWUsIGRvbmUgfSByZXN1bHQgZnJvbSB0aGVcbiAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsXG4gIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTtcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEEgLnRocm93IG9yIC5yZXR1cm4gd2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIC50aHJvd1xuICAgICAgLy8gbWV0aG9kIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAvLyBOb3RlOiBbXCJyZXR1cm5cIl0gbXVzdCBiZSB1c2VkIGZvciBFUzMgcGFyc2luZyBjb21wYXRpYmlsaXR5LlxuICAgICAgICBpZiAoZGVsZWdhdGUuaXRlcmF0b3JbXCJyZXR1cm5cIl0pIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIGEgcmV0dXJuIG1ldGhvZCwgZ2l2ZSBpdCBhXG4gICAgICAgICAgLy8gY2hhbmNlIHRvIGNsZWFuIHVwLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICAvLyBJZiBtYXliZUludm9rZURlbGVnYXRlKGNvbnRleHQpIGNoYW5nZWQgY29udGV4dC5tZXRob2QgZnJvbVxuICAgICAgICAgICAgLy8gXCJyZXR1cm5cIiB0byBcInRocm93XCIsIGxldCB0aGF0IG92ZXJyaWRlIHRoZSBUeXBlRXJyb3IgYmVsb3cuXG4gICAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgIFwiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAndGhyb3cnIG1ldGhvZFwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKG1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGNvbnRleHQuYXJnKTtcblxuICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xuXG4gICAgaWYgKCEgaW5mbykge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdFwiKTtcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgLy8gQXNzaWduIHRoZSByZXN1bHQgb2YgdGhlIGZpbmlzaGVkIGRlbGVnYXRlIHRvIHRoZSB0ZW1wb3JhcnlcbiAgICAgIC8vIHZhcmlhYmxlIHNwZWNpZmllZCBieSBkZWxlZ2F0ZS5yZXN1bHROYW1lIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZTtcblxuICAgICAgLy8gUmVzdW1lIGV4ZWN1dGlvbiBhdCB0aGUgZGVzaXJlZCBsb2NhdGlvbiAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYztcblxuICAgICAgLy8gSWYgY29udGV4dC5tZXRob2Qgd2FzIFwidGhyb3dcIiBidXQgdGhlIGRlbGVnYXRlIGhhbmRsZWQgdGhlXG4gICAgICAvLyBleGNlcHRpb24sIGxldCB0aGUgb3V0ZXIgZ2VuZXJhdG9yIHByb2NlZWQgbm9ybWFsbHkuIElmXG4gICAgICAvLyBjb250ZXh0Lm1ldGhvZCB3YXMgXCJuZXh0XCIsIGZvcmdldCBjb250ZXh0LmFyZyBzaW5jZSBpdCBoYXMgYmVlblxuICAgICAgLy8gXCJjb25zdW1lZFwiIGJ5IHRoZSBkZWxlZ2F0ZSBpdGVyYXRvci4gSWYgY29udGV4dC5tZXRob2Qgd2FzXG4gICAgICAvLyBcInJldHVyblwiLCBhbGxvdyB0aGUgb3JpZ2luYWwgLnJldHVybiBjYWxsIHRvIGNvbnRpbnVlIGluIHRoZVxuICAgICAgLy8gb3V0ZXIgZ2VuZXJhdG9yLlxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kICE9PSBcInJldHVyblwiKSB7XG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlLXlpZWxkIHRoZSByZXN1bHQgcmV0dXJuZWQgYnkgdGhlIGRlbGVnYXRlIG1ldGhvZC5cbiAgICAgIHJldHVybiBpbmZvO1xuICAgIH1cblxuICAgIC8vIFRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBpcyBmaW5pc2hlZCwgc28gZm9yZ2V0IGl0IGFuZCBjb250aW51ZSB3aXRoXG4gICAgLy8gdGhlIG91dGVyIGdlbmVyYXRvci5cbiAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgfVxuXG4gIC8vIERlZmluZSBHZW5lcmF0b3IucHJvdG90eXBlLntuZXh0LHRocm93LHJldHVybn0gaW4gdGVybXMgb2YgdGhlXG4gIC8vIHVuaWZpZWQgLl9pbnZva2UgaGVscGVyIG1ldGhvZC5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKTtcblxuICBHcFt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvclwiO1xuXG4gIC8vIEEgR2VuZXJhdG9yIHNob3VsZCBhbHdheXMgcmV0dXJuIGl0c2VsZiBhcyB0aGUgaXRlcmF0b3Igb2JqZWN0IHdoZW4gdGhlXG4gIC8vIEBAaXRlcmF0b3IgZnVuY3Rpb24gaXMgY2FsbGVkIG9uIGl0LiBTb21lIGJyb3dzZXJzJyBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlXG4gIC8vIGl0ZXJhdG9yIHByb3RvdHlwZSBjaGFpbiBpbmNvcnJlY3RseSBpbXBsZW1lbnQgdGhpcywgY2F1c2luZyB0aGUgR2VuZXJhdG9yXG4gIC8vIG9iamVjdCB0byBub3QgYmUgcmV0dXJuZWQgZnJvbSB0aGlzIGNhbGwuIFRoaXMgZW5zdXJlcyB0aGF0IGRvZXNuJ3QgaGFwcGVuLlxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2lzc3Vlcy8yNzQgZm9yIG1vcmUgZGV0YWlscy5cbiAgR3BbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgR3AudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfTtcblxuICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkobG9jcykge1xuICAgIHZhciBlbnRyeSA9IHsgdHJ5TG9jOiBsb2NzWzBdIH07XG5cbiAgICBpZiAoMSBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV07XG4gICAgfVxuXG4gICAgaWYgKDIgaW4gbG9jcykge1xuICAgICAgZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl07XG4gICAgICBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM107XG4gICAgfVxuXG4gICAgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeShlbnRyeSkge1xuICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9O1xuICAgIHJlY29yZC50eXBlID0gXCJub3JtYWxcIjtcbiAgICBkZWxldGUgcmVjb3JkLmFyZztcbiAgICBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICB9XG5cbiAgZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCkge1xuICAgIC8vIFRoZSByb290IGVudHJ5IG9iamVjdCAoZWZmZWN0aXZlbHkgYSB0cnkgc3RhdGVtZW50IHdpdGhvdXQgYSBjYXRjaFxuICAgIC8vIG9yIGEgZmluYWxseSBibG9jaykgZ2l2ZXMgdXMgYSBwbGFjZSB0byBzdG9yZSB2YWx1ZXMgdGhyb3duIGZyb21cbiAgICAvLyBsb2NhdGlvbnMgd2hlcmUgdGhlcmUgaXMgbm8gZW5jbG9zaW5nIHRyeSBzdGF0ZW1lbnQuXG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3sgdHJ5TG9jOiBcInJvb3RcIiB9XTtcbiAgICB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyk7XG4gICAgdGhpcy5yZXNldCh0cnVlKTtcbiAgfVxuXG4gIGV4cG9ydHMua2V5cyA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgfVxuICAgIGtleXMucmV2ZXJzZSgpO1xuXG4gICAgLy8gUmF0aGVyIHRoYW4gcmV0dXJuaW5nIGFuIG9iamVjdCB3aXRoIGEgbmV4dCBtZXRob2QsIHdlIGtlZXBcbiAgICAvLyB0aGluZ3Mgc2ltcGxlIGFuZCByZXR1cm4gdGhlIG5leHQgZnVuY3Rpb24gaXRzZWxmLlxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgd2hpbGUgKGtleXMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzLnBvcCgpO1xuICAgICAgICBpZiAoa2V5IGluIG9iamVjdCkge1xuICAgICAgICAgIG5leHQudmFsdWUgPSBrZXk7XG4gICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVG8gYXZvaWQgY3JlYXRpbmcgYW4gYWRkaXRpb25hbCBvYmplY3QsIHdlIGp1c3QgaGFuZyB0aGUgLnZhbHVlXG4gICAgICAvLyBhbmQgLmRvbmUgcHJvcGVydGllcyBvZmYgdGhlIG5leHQgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZi4gVGhpc1xuICAgICAgLy8gYWxzbyBlbnN1cmVzIHRoYXQgdGhlIG1pbmlmaWVyIHdpbGwgbm90IGFub255bWl6ZSB0aGUgZnVuY3Rpb24uXG4gICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuICAgICAgcmV0dXJuIG5leHQ7XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcbiAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmFibGUubmV4dCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBpdGVyYWJsZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBpID0gLTEsIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgIHdoaWxlICgrK2kgPCBpdGVyYWJsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChpdGVyYWJsZSwgaSkpIHtcbiAgICAgICAgICAgICAgbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldO1xuICAgICAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmV4dC52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGFuIGl0ZXJhdG9yIHdpdGggbm8gdmFsdWVzLlxuICAgIHJldHVybiB7IG5leHQ6IGRvbmVSZXN1bHQgfTtcbiAgfVxuICBleHBvcnRzLnZhbHVlcyA9IHZhbHVlcztcblxuICBmdW5jdGlvbiBkb25lUmVzdWx0KCkge1xuICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgfVxuXG4gIENvbnRleHQucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxuXG4gICAgcmVzZXQ6IGZ1bmN0aW9uKHNraXBUZW1wUmVzZXQpIHtcbiAgICAgIHRoaXMucHJldiA9IDA7XG4gICAgICB0aGlzLm5leHQgPSAwO1xuICAgICAgLy8gUmVzZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICB0aGlzLnNlbnQgPSB0aGlzLl9zZW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICB0aGlzLmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuXG4gICAgICB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KTtcblxuICAgICAgaWYgKCFza2lwVGVtcFJlc2V0KSB7XG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcykge1xuICAgICAgICAgIC8vIE5vdCBzdXJlIGFib3V0IHRoZSBvcHRpbWFsIG9yZGVyIG9mIHRoZXNlIGNvbmRpdGlvbnM6XG4gICAgICAgICAgaWYgKG5hbWUuY2hhckF0KDApID09PSBcInRcIiAmJlxuICAgICAgICAgICAgICBoYXNPd24uY2FsbCh0aGlzLCBuYW1lKSAmJlxuICAgICAgICAgICAgICAhaXNOYU4oK25hbWUuc2xpY2UoMSkpKSB7XG4gICAgICAgICAgICB0aGlzW25hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBzdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZG9uZSA9IHRydWU7XG5cbiAgICAgIHZhciByb290RW50cnkgPSB0aGlzLnRyeUVudHJpZXNbMF07XG4gICAgICB2YXIgcm9vdFJlY29yZCA9IHJvb3RFbnRyeS5jb21wbGV0aW9uO1xuICAgICAgaWYgKHJvb3RSZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJvb3RSZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ydmFsO1xuICAgIH0sXG5cbiAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24oZXhjZXB0aW9uKSB7XG4gICAgICBpZiAodGhpcy5kb25lKSB7XG4gICAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgZnVuY3Rpb24gaGFuZGxlKGxvYywgY2F1Z2h0KSB7XG4gICAgICAgIHJlY29yZC50eXBlID0gXCJ0aHJvd1wiO1xuICAgICAgICByZWNvcmQuYXJnID0gZXhjZXB0aW9uO1xuICAgICAgICBjb250ZXh0Lm5leHQgPSBsb2M7XG5cbiAgICAgICAgaWYgKGNhdWdodCkge1xuICAgICAgICAgIC8vIElmIHRoZSBkaXNwYXRjaGVkIGV4Y2VwdGlvbiB3YXMgY2F1Z2h0IGJ5IGEgY2F0Y2ggYmxvY2ssXG4gICAgICAgICAgLy8gdGhlbiBsZXQgdGhhdCBjYXRjaCBibG9jayBoYW5kbGUgdGhlIGV4Y2VwdGlvbiBub3JtYWxseS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICEhIGNhdWdodDtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IFwicm9vdFwiKSB7XG4gICAgICAgICAgLy8gRXhjZXB0aW9uIHRocm93biBvdXRzaWRlIG9mIGFueSB0cnkgYmxvY2sgdGhhdCBjb3VsZCBoYW5kbGVcbiAgICAgICAgICAvLyBpdCwgc28gc2V0IHRoZSBjb21wbGV0aW9uIHZhbHVlIG9mIHRoZSBlbnRpcmUgZnVuY3Rpb24gdG9cbiAgICAgICAgICAvLyB0aHJvdyB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJldHVybiBoYW5kbGUoXCJlbmRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldikge1xuICAgICAgICAgIHZhciBoYXNDYXRjaCA9IGhhc093bi5jYWxsKGVudHJ5LCBcImNhdGNoTG9jXCIpO1xuICAgICAgICAgIHZhciBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKTtcblxuICAgICAgICAgIGlmIChoYXNDYXRjaCAmJiBoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzQ2F0Y2gpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYWJydXB0OiBmdW5jdGlvbih0eXBlLCBhcmcpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKSAmJlxuICAgICAgICAgICAgdGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgIHZhciBmaW5hbGx5RW50cnkgPSBlbnRyeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZmluYWxseUVudHJ5ICYmXG4gICAgICAgICAgKHR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgICB0eXBlID09PSBcImNvbnRpbnVlXCIpICYmXG4gICAgICAgICAgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiZcbiAgICAgICAgICBhcmcgPD0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgLy8gSWdub3JlIHRoZSBmaW5hbGx5IGVudHJ5IGlmIGNvbnRyb2wgaXMgbm90IGp1bXBpbmcgdG8gYVxuICAgICAgICAvLyBsb2NhdGlvbiBvdXRzaWRlIHRoZSB0cnkvY2F0Y2ggYmxvY2suXG4gICAgICAgIGZpbmFsbHlFbnRyeSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciByZWNvcmQgPSBmaW5hbGx5RW50cnkgPyBmaW5hbGx5RW50cnkuY29tcGxldGlvbiA6IHt9O1xuICAgICAgcmVjb3JkLnR5cGUgPSB0eXBlO1xuICAgICAgcmVjb3JkLmFyZyA9IGFyZztcblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSkge1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICB0aGlzLm5leHQgPSBmaW5hbGx5RW50cnkuZmluYWxseUxvYztcbiAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlKHJlY29yZCk7XG4gICAgfSxcblxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZWNvcmQsIGFmdGVyTG9jKSB7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgIHJlY29yZC50eXBlID09PSBcImNvbnRpbnVlXCIpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gcmVjb3JkLmFyZztcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgdGhpcy5ydmFsID0gdGhpcy5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgIHRoaXMubmV4dCA9IFwiZW5kXCI7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiICYmIGFmdGVyTG9jKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IGFmdGVyTG9jO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9LFxuXG4gICAgZmluaXNoOiBmdW5jdGlvbihmaW5hbGx5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LmZpbmFsbHlMb2MgPT09IGZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sIGVudHJ5LmFmdGVyTG9jKTtcbiAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBcImNhdGNoXCI6IGZ1bmN0aW9uKHRyeUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykge1xuICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICB2YXIgdGhyb3duID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhyb3duO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBjb250ZXh0LmNhdGNoIG1ldGhvZCBtdXN0IG9ubHkgYmUgY2FsbGVkIHdpdGggYSBsb2NhdGlvblxuICAgICAgLy8gYXJndW1lbnQgdGhhdCBjb3JyZXNwb25kcyB0byBhIGtub3duIGNhdGNoIGJsb2NrLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpO1xuICAgIH0sXG5cbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbihpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykge1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IHtcbiAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksXG4gICAgICAgIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsXG4gICAgICAgIG5leHRMb2M6IG5leHRMb2NcbiAgICAgIH07XG5cbiAgICAgIGlmICh0aGlzLm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgLy8gRGVsaWJlcmF0ZWx5IGZvcmdldCB0aGUgbGFzdCBzZW50IHZhbHVlIHNvIHRoYXQgd2UgZG9uJ3RcbiAgICAgICAgLy8gYWNjaWRlbnRhbGx5IHBhc3MgaXQgb24gdG8gdGhlIGRlbGVnYXRlLlxuICAgICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuICB9O1xuXG4gIC8vIFJlZ2FyZGxlc3Mgb2Ygd2hldGhlciB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGVcbiAgLy8gb3Igbm90LCByZXR1cm4gdGhlIHJ1bnRpbWUgb2JqZWN0IHNvIHRoYXQgd2UgY2FuIGRlY2xhcmUgdGhlIHZhcmlhYmxlXG4gIC8vIHJlZ2VuZXJhdG9yUnVudGltZSBpbiB0aGUgb3V0ZXIgc2NvcGUsIHdoaWNoIGFsbG93cyB0aGlzIG1vZHVsZSB0byBiZVxuICAvLyBpbmplY3RlZCBlYXNpbHkgYnkgYGJpbi9yZWdlbmVyYXRvciAtLWluY2x1ZGUtcnVudGltZSBzY3JpcHQuanNgLlxuICByZXR1cm4gZXhwb3J0cztcblxufShcbiAgLy8gSWYgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlLCB1c2UgbW9kdWxlLmV4cG9ydHNcbiAgLy8gYXMgdGhlIHJlZ2VuZXJhdG9yUnVudGltZSBuYW1lc3BhY2UuIE90aGVyd2lzZSBjcmVhdGUgYSBuZXcgZW1wdHlcbiAgLy8gb2JqZWN0LiBFaXRoZXIgd2F5LCB0aGUgcmVzdWx0aW5nIG9iamVjdCB3aWxsIGJlIHVzZWQgdG8gaW5pdGlhbGl6ZVxuICAvLyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIHZhcmlhYmxlIGF0IHRoZSB0b3Agb2YgdGhpcyBmaWxlLlxuICB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiID8gbW9kdWxlLmV4cG9ydHMgOiB7fVxuKSk7XG5cbnRyeSB7XG4gIHJlZ2VuZXJhdG9yUnVudGltZSA9IHJ1bnRpbWU7XG59IGNhdGNoIChhY2NpZGVudGFsU3RyaWN0TW9kZSkge1xuICAvLyBUaGlzIG1vZHVsZSBzaG91bGQgbm90IGJlIHJ1bm5pbmcgaW4gc3RyaWN0IG1vZGUsIHNvIHRoZSBhYm92ZVxuICAvLyBhc3NpZ25tZW50IHNob3VsZCBhbHdheXMgd29yayB1bmxlc3Mgc29tZXRoaW5nIGlzIG1pc2NvbmZpZ3VyZWQuIEp1c3RcbiAgLy8gaW4gY2FzZSBydW50aW1lLmpzIGFjY2lkZW50YWxseSBydW5zIGluIHN0cmljdCBtb2RlLCB3ZSBjYW4gZXNjYXBlXG4gIC8vIHN0cmljdCBtb2RlIHVzaW5nIGEgZ2xvYmFsIEZ1bmN0aW9uIGNhbGwuIFRoaXMgY291bGQgY29uY2VpdmFibHkgZmFpbFxuICAvLyBpZiBhIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5IGZvcmJpZHMgdXNpbmcgRnVuY3Rpb24sIGJ1dCBpbiB0aGF0IGNhc2VcbiAgLy8gdGhlIHByb3BlciBzb2x1dGlvbiBpcyB0byBmaXggdGhlIGFjY2lkZW50YWwgc3RyaWN0IG1vZGUgcHJvYmxlbS4gSWZcbiAgLy8geW91J3ZlIG1pc2NvbmZpZ3VyZWQgeW91ciBidW5kbGVyIHRvIGZvcmNlIHN0cmljdCBtb2RlIGFuZCBhcHBsaWVkIGFcbiAgLy8gQ1NQIHRvIGZvcmJpZCBGdW5jdGlvbiwgYW5kIHlvdSdyZSBub3Qgd2lsbGluZyB0byBmaXggZWl0aGVyIG9mIHRob3NlXG4gIC8vIHByb2JsZW1zLCBwbGVhc2UgZGV0YWlsIHlvdXIgdW5pcXVlIHByZWRpY2FtZW50IGluIGEgR2l0SHViIGlzc3VlLlxuICBGdW5jdGlvbihcInJcIiwgXCJyZWdlbmVyYXRvclJ1bnRpbWUgPSByXCIpKHJ1bnRpbWUpO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUpIHtcblx0aWYgKCFtb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XG5cdFx0bW9kdWxlLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKCkge307XG5cdFx0bW9kdWxlLnBhdGhzID0gW107XG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XG5cdFx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xuXHR9XG5cdHJldHVybiBtb2R1bGU7XG59O1xuIiwiLy8gaW1wb3J0IFZ1ZSBmcm9tIFwidnVlXCI7XG5pbXBvcnQgeyBjdWJlIH0gZnJvbSBcIi4vbWF0aFwiO1xuXG4vLyBpbXBvcnQgSGVsbG8gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9AcGF1bGhhbi9Db21wL0hlbGxvLnZ1ZVwiO1xuLy8gaW1wb3J0IHthc3luY0ZOfSBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL0BwYXVsaGFuL0NvbXBcIjtcblxuYXN5bmMgZnVuY3Rpb24gaW5pdCgpIHtcbiAgLy8gYXdhaXQgYXN5bmNGTigpO1xuICBjb25zb2xlLmxvZyhcImluaXRlZFwiKTtcbn1cblxuaW5pdCgpO1xuXG4vLyBuZXcgVnVlKHtcbi8vICAgZWw6IFwiI2FwcFwiLFxuLy8gICByZW5kZXI6IGggPT4gaChIZWxsbylcbi8vIH0pO1xuXG4vLyBjb25zb2xlLmxvZyhIZWxsbyk7XG5cbmZ1bmN0aW9uIGNvbXBvbmVudCgpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicHJlXCIpO1xuXG4gIGVsZW1lbnQuaW5uZXJIVE1MID0gW1wiSGVsbG8gd2VicGFjayFcIiwgXCI1IGN1YmVkIGlzIGVxdWFsIHRvIFwiICsgY3ViZSg1KV0uam9pbihcbiAgICBcIlxcblxcblwiXG4gICk7XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmxldCBlbGVtZW50ID0gY29tcG9uZW50KCk7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuIiwiZXhwb3J0IGZ1bmN0aW9uIGN1YmUoeCkge1xuICAgIHJldHVybiB4ICogeCAqIHg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzcXVhcmUoeCkge1xuICAgIHJldHVybiB4ICogeDtcbn1cblxuZXhwb3J0IGNvbnN0IGVmZmVjdCA9IHdpbmRvdy5zY3JlZW4ud2lkdGg7XG4iXSwic291cmNlUm9vdCI6IiJ9
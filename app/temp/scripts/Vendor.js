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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/assets/scripts/Vendor.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/assets/scripts/Vendor.js":
/*!**************************************!*\
  !*** ./app/assets/scripts/Vendor.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _temp_scripts_modernizr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../temp/scripts/modernizr */ \"./app/temp/scripts/modernizr.js\");\n/* harmony import */ var _temp_scripts_modernizr__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_temp_scripts_modernizr__WEBPACK_IMPORTED_MODULE_0__);\n\n\n//# sourceURL=webpack:///./app/assets/scripts/Vendor.js?");

/***/ }),

/***/ "./app/temp/scripts/modernizr.js":
/*!***************************************!*\
  !*** ./app/temp/scripts/modernizr.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n/*!\n * modernizr v3.6.0\n * Build https://modernizr.com/download?-setclasses-dontmin\n *\n * Copyright (c)\n *  Faruk Ates\n *  Paul Irish\n *  Alex Sexton\n *  Ryan Seddon\n *  Patrick Kettner\n *  Stu Cox\n *  Richard Herrera\n\n * MIT License\n */\n\n/*\n * Modernizr tests which native CSS3 and HTML5 features are available in the\n * current UA and makes the results available to you in two ways: as properties on\n * a global `Modernizr` object, and as classes on the `<html>` element. This\n * information allows you to progressively enhance your pages with a granular level\n * of control over the experience.\n*/\n;\n\n(function (window, document, undefined) {\n  var tests = [];\n  /**\n   *\n   * ModernizrProto is the constructor for Modernizr\n   *\n   * @class\n   * @access public\n   */\n\n  var ModernizrProto = {\n    // The current version, dummy\n    _version: '3.6.0',\n    // Any settings that don't work as separate modules\n    // can go in here as configuration.\n    _config: {\n      'classPrefix': '',\n      'enableClasses': true,\n      'enableJSClass': true,\n      'usePrefixes': true\n    },\n    // Queue of tests\n    _q: [],\n    // Stub these for people who are listening\n    on: function on(test, cb) {\n      // I don't really think people should do this, but we can\n      // safe guard it a bit.\n      // -- NOTE:: this gets WAY overridden in src/addTest for actual async tests.\n      // This is in case people listen to synchronous tests. I would leave it out,\n      // but the code to *disallow* sync tests in the real version of this\n      // function is actually larger than this.\n      var self = this;\n      setTimeout(function () {\n        cb(self[test]);\n      }, 0);\n    },\n    addTest: function addTest(name, fn, options) {\n      tests.push({\n        name: name,\n        fn: fn,\n        options: options\n      });\n    },\n    addAsyncTest: function addAsyncTest(fn) {\n      tests.push({\n        name: null,\n        fn: fn\n      });\n    }\n  }; // Fake some of Object.create so we can force non test results to be non \"own\" properties.\n\n  var Modernizr = function Modernizr() {};\n\n  Modernizr.prototype = ModernizrProto; // Leak modernizr globally when you `require` it rather than force it here.\n  // Overwrite name so constructor name is nicer :D\n\n  Modernizr = new Modernizr();\n  var classes = [];\n  /**\n   * is returns a boolean if the typeof an obj is exactly type.\n   *\n   * @access private\n   * @function is\n   * @param {*} obj - A thing we want to check the type of\n   * @param {string} type - A string to compare the typeof against\n   * @returns {boolean}\n   */\n\n  function is(obj, type) {\n    return _typeof(obj) === type;\n  }\n\n  ;\n  /**\n   * Run through all tests and detect their support in the current UA.\n   *\n   * @access private\n   */\n\n  function testRunner() {\n    var featureNames;\n    var feature;\n    var aliasIdx;\n    var result;\n    var nameIdx;\n    var featureName;\n    var featureNameSplit;\n\n    for (var featureIdx in tests) {\n      if (tests.hasOwnProperty(featureIdx)) {\n        featureNames = [];\n        feature = tests[featureIdx]; // run the test, throw the return value into the Modernizr,\n        // then based on that boolean, define an appropriate className\n        // and push it into an array of classes we'll join later.\n        //\n        // If there is no name, it's an 'async' test that is run,\n        // but not directly added to the object. That should\n        // be done with a post-run addTest call.\n\n        if (feature.name) {\n          featureNames.push(feature.name.toLowerCase());\n\n          if (feature.options && feature.options.aliases && feature.options.aliases.length) {\n            // Add all the aliases into the names list\n            for (aliasIdx = 0; aliasIdx < feature.options.aliases.length; aliasIdx++) {\n              featureNames.push(feature.options.aliases[aliasIdx].toLowerCase());\n            }\n          }\n        } // Run the test, or use the raw value if it's not a function\n\n\n        result = is(feature.fn, 'function') ? feature.fn() : feature.fn; // Set each of the names on the Modernizr object\n\n        for (nameIdx = 0; nameIdx < featureNames.length; nameIdx++) {\n          featureName = featureNames[nameIdx]; // Support dot properties as sub tests. We don't do checking to make sure\n          // that the implied parent tests have been added. You must call them in\n          // order (either in the test, or make the parent test a dependency).\n          //\n          // Cap it to TWO to make the logic simple and because who needs that kind of subtesting\n          // hashtag famous last words\n\n          featureNameSplit = featureName.split('.');\n\n          if (featureNameSplit.length === 1) {\n            Modernizr[featureNameSplit[0]] = result;\n          } else {\n            // cast to a Boolean, if not one already\n            if (Modernizr[featureNameSplit[0]] && !(Modernizr[featureNameSplit[0]] instanceof Boolean)) {\n              Modernizr[featureNameSplit[0]] = new Boolean(Modernizr[featureNameSplit[0]]);\n            }\n\n            Modernizr[featureNameSplit[0]][featureNameSplit[1]] = result;\n          }\n\n          classes.push((result ? '' : 'no-') + featureNameSplit.join('-'));\n        }\n      }\n    }\n  }\n\n  ;\n  /**\n   * docElement is a convenience wrapper to grab the root element of the document\n   *\n   * @access private\n   * @returns {HTMLElement|SVGElement} The root element of the document\n   */\n\n  var docElement = document.documentElement;\n  /**\n   * A convenience helper to check if the document we are running in is an SVG document\n   *\n   * @access private\n   * @returns {boolean}\n   */\n\n  var isSVG = docElement.nodeName.toLowerCase() === 'svg';\n  /**\n   * setClasses takes an array of class names and adds them to the root element\n   *\n   * @access private\n   * @function setClasses\n   * @param {string[]} classes - Array of class names\n   */\n  // Pass in an and array of class names, e.g.:\n  //  ['no-webp', 'borderradius', ...]\n\n  function setClasses(classes) {\n    var className = docElement.className;\n    var classPrefix = Modernizr._config.classPrefix || '';\n\n    if (isSVG) {\n      className = className.baseVal;\n    } // Change `no-js` to `js` (independently of the `enableClasses` option)\n    // Handle classPrefix on this too\n\n\n    if (Modernizr._config.enableJSClass) {\n      var reJS = new RegExp('(^|\\\\s)' + classPrefix + 'no-js(\\\\s|$)');\n      className = className.replace(reJS, '$1' + classPrefix + 'js$2');\n    }\n\n    if (Modernizr._config.enableClasses) {\n      // Add the new classes\n      className += ' ' + classPrefix + classes.join(' ' + classPrefix);\n\n      if (isSVG) {\n        docElement.className.baseVal = className;\n      } else {\n        docElement.className = className;\n      }\n    }\n  }\n\n  ; // Run each test\n\n  testRunner(); // Remove the \"no-js\" class if it exists\n\n  setClasses(classes);\n  delete ModernizrProto.addTest;\n  delete ModernizrProto.addAsyncTest; // Run the things that are supposed to run after the tests\n\n  for (var i = 0; i < Modernizr._q.length; i++) {\n    Modernizr._q[i]();\n  } // Leak Modernizr namespace\n\n\n  window.Modernizr = Modernizr;\n  ;\n})(window, document);\n\n//# sourceURL=webpack:///./app/temp/scripts/modernizr.js?");

/***/ })

/******/ });
webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./src/styles/components/LevelUpModal.module.css":
/*!*******************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-2-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-2-2!./src/styles/components/LevelUpModal.module.css ***!
  \*******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".LevelUpModal_overlay__1huQl{\r\n    background: rgba(242, 243, 245, 0.8);\r\n    position: fixed;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.LevelUpModal_levelUpModalContainer__3E4Q3{\r\n    background: var(--white);\r\n    width: 100%;\r\n    max-width: 400px;\r\n    padding: 2rem 3rem;\r\n    border-radius: 5px;\r\n    box-shadow: rgba(0, 0, 0, 0.05);\r\n    text-align: center;\r\n    position: relative;\r\n}\r\n\r\n.LevelUpModal_levelUpModalContainer__3E4Q3 header{\r\n    font-size: 8.75rem;\r\n    font-weight: 600;\r\n    color: var(--blue);\r\n    background: url('/icons/levelup.svg') no-repeat center;\r\n    background-size: contain;\r\n}\r\n\r\n.LevelUpModal_levelUpModalContainer__3E4Q3 strong{\r\n    font-size: 2.25rem;\r\n    color: var(--title);\r\n}\r\n\r\n.LevelUpModal_levelUpModalContainer__3E4Q3 p{\r\n    font-size: 1.25rem;\r\n    color: var(--text);\r\n    margin-top: 0.25rem;\r\n}\r\n\r\n.LevelUpModal_levelUpModalContainer__3E4Q3 button{\r\n    position: absolute;\r\n    right: 0.5rem;\r\n    top: 0.5rem;\r\n    background: transparent;\r\n    border: 0;\r\n}", "",{"version":3,"sources":["webpack://src/styles/components/LevelUpModal.module.css"],"names":[],"mappings":"AAAA;IACI,oCAAoC;IACpC,eAAe;IACf,MAAM;IACN,SAAS;IACT,OAAO;IACP,QAAQ;;IAER,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,wBAAwB;IACxB,WAAW;IACX,gBAAgB;IAChB,kBAAkB;IAClB,kBAAkB;IAClB,+BAA+B;IAC/B,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,gBAAgB;IAChB,kBAAkB;IAClB,sDAAsD;IACtD,wBAAwB;AAC5B;;AAEA;IACI,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,WAAW;IACX,uBAAuB;IACvB,SAAS;AACb","sourcesContent":[".overlay{\r\n    background: rgba(242, 243, 245, 0.8);\r\n    position: fixed;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.levelUpModalContainer{\r\n    background: var(--white);\r\n    width: 100%;\r\n    max-width: 400px;\r\n    padding: 2rem 3rem;\r\n    border-radius: 5px;\r\n    box-shadow: rgba(0, 0, 0, 0.05);\r\n    text-align: center;\r\n    position: relative;\r\n}\r\n\r\n.levelUpModalContainer header{\r\n    font-size: 8.75rem;\r\n    font-weight: 600;\r\n    color: var(--blue);\r\n    background: url('/icons/levelup.svg') no-repeat center;\r\n    background-size: contain;\r\n}\r\n\r\n.levelUpModalContainer strong{\r\n    font-size: 2.25rem;\r\n    color: var(--title);\r\n}\r\n\r\n.levelUpModalContainer p{\r\n    font-size: 1.25rem;\r\n    color: var(--text);\r\n    margin-top: 0.25rem;\r\n}\r\n\r\n.levelUpModalContainer button{\r\n    position: absolute;\r\n    right: 0.5rem;\r\n    top: 0.5rem;\r\n    background: transparent;\r\n    border: 0;\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"overlay": "LevelUpModal_overlay__1huQl",
	"levelUpModalContainer": "LevelUpModal_levelUpModalContainer__3E4Q3"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./src/components/LevelUpModal.tsx":
/*!*****************************************!*\
  !*** ./src/components/LevelUpModal.tsx ***!
  \*****************************************/
/*! exports provided: LevelUpModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LevelUpModal", function() { return LevelUpModal; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_components_LevelUpModal_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/components/LevelUpModal.module.css */ "./src/styles/components/LevelUpModal.module.css");
/* harmony import */ var _styles_components_LevelUpModal_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_components_LevelUpModal_module_css__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\Samuel\\Desktop\\nlw4\\trilha_react\\moveit-next\\src\\components\\LevelUpModal.tsx";

function LevelUpModal() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_components_LevelUpModal_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.overlay,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_components_LevelUpModal_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.levelUpModalContainer,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
        children: "2"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
        children: "Parab\xE9ns"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "Voc\xEA alcan\xE7ou um novo level."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        type: "button",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "/icons/close.svg",
          alt: "Fechar modal"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, this);
}
_c = LevelUpModal;

var _c;

$RefreshReg$(_c, "LevelUpModal");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./src/contexts/ChallangesContext.tsx":
/*!********************************************!*\
  !*** ./src/contexts/ChallangesContext.tsx ***!
  \********************************************/
/*! exports provided: ChallangesContext, ChallangesProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChallangesContext", function() { return ChallangesContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChallangesProvider", function() { return ChallangesProvider; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Samuel_Desktop_nlw4_trilha_react_moveit_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _challanges_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../challanges.json */ "./challanges.json");
var _challanges_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../challanges.json */ "./challanges.json", 1);
/* harmony import */ var _components_LevelUpModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/LevelUpModal */ "./src/components/LevelUpModal.tsx");



var _jsxFileName = "C:\\Users\\Samuel\\Desktop\\nlw4\\trilha_react\\moveit-next\\src\\contexts\\ChallangesContext.tsx",
    _s = $RefreshSig$();





var ChallangesContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_2__["createContext"])({});
function ChallangesProvider(_ref) {
  _s();

  var _rest$level, _rest$currentExperien, _rest$challangesCompl;

  var children = _ref.children,
      rest = Object(C_Users_Samuel_Desktop_nlw4_trilha_react_moveit_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["children"]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])((_rest$level = rest.level) !== null && _rest$level !== void 0 ? _rest$level : 1),
      level = _useState[0],
      setLevel = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])((_rest$currentExperien = rest.currentExperience) !== null && _rest$currentExperien !== void 0 ? _rest$currentExperien : 0),
      currentExperience = _useState2[0],
      setCurrentExperience = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])((_rest$challangesCompl = rest.challangesCompleted) !== null && _rest$challangesCompl !== void 0 ? _rest$challangesCompl : 0),
      challangeCompleted = _useState3[0],
      setChallangeCompleted = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      activeChallange = _useState4[0],
      setActiveChallange = _useState4[1];

  var experienceToNextLevel = Math.pow((level + 1) * 4, 2);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    Notification.requestPermission();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set('level', String(level));
    js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set('currentExperience', String(currentExperience));
    js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set('challangesCompleted', String(challangeCompleted));
  }, [level, currentExperience, challangeCompleted]);

  function levelUp() {
    setLevel(level + 1);
  }

  function startNewChallange() {
    var ramdomChallangesIndex = Math.floor(Math.random() * _challanges_json__WEBPACK_IMPORTED_MODULE_4__.length);
    var challange = _challanges_json__WEBPACK_IMPORTED_MODULE_4__[ramdomChallangesIndex];
    setActiveChallange(challange);
    new Audio('/notification.mp3').play();

    if (Notification.permission === 'granted') {
      new Notification('Novo desafio! :3', {
        body: "Valendo ".concat(challange.amount, "xp!")
      });
    }
  }

  function resetChallange() {
    setActiveChallange(null);
  }

  function completeChallange() {
    if (!activeChallange) {
      return;
    }

    var amount = activeChallange.amount;
    var finalExperience = currentExperience + amount;

    if (finalExperience >= experienceToNextLevel) {
      finalExperience = finalExperience - experienceToNextLevel;
      levelUp();
    }

    setCurrentExperience(finalExperience);
    setActiveChallange(null);
    setChallangeCompleted(challangeCompleted + 1);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ChallangesContext.Provider, {
    value: {
      level: level,
      currentExperience: currentExperience,
      experienceToNextLevel: experienceToNextLevel,
      challangeCompleted: challangeCompleted,
      activeChallange: activeChallange,
      levelUp: levelUp,
      startNewChallange: startNewChallange,
      resetChallange: resetChallange,
      completeChallange: completeChallange
    },
    children: [children, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_LevelUpModal__WEBPACK_IMPORTED_MODULE_5__["LevelUpModal"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 96,
    columnNumber: 9
  }, this);
}

_s(ChallangesProvider, "6WY3AbPK7QlI8Bq6ugCVA85u9Fk=");

_c = ChallangesProvider;

var _c;

$RefreshReg$(_c, "ChallangesProvider");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./src/styles/components/LevelUpModal.module.css":
/*!*******************************************************!*\
  !*** ./src/styles/components/LevelUpModal.module.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-2-1!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./LevelUpModal.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./src/styles/components/LevelUpModal.module.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-2-1!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./LevelUpModal.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./src/styles/components/LevelUpModal.module.css",
      function () {
        content = __webpack_require__(/*! !../../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-2-1!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./LevelUpModal.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./src/styles/components/LevelUpModal.module.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0eWxlcy9jb21wb25lbnRzL0xldmVsVXBNb2RhbC5tb2R1bGUuY3NzIiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9MZXZlbFVwTW9kYWwudHN4Iiwid2VicGFjazovL19OX0UvLi9zcmMvY29udGV4dHMvQ2hhbGxhbmdlc0NvbnRleHQudHN4Iiwid2VicGFjazovL19OX0UvLi9zcmMvc3R5bGVzL2NvbXBvbmVudHMvTGV2ZWxVcE1vZGFsLm1vZHVsZS5jc3M/YzhjNCJdLCJuYW1lcyI6WyJMZXZlbFVwTW9kYWwiLCJzdHlsZXMiLCJvdmVybGF5IiwibGV2ZWxVcE1vZGFsQ29udGFpbmVyIiwiQ2hhbGxhbmdlc0NvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiQ2hhbGxhbmdlc1Byb3ZpZGVyIiwiY2hpbGRyZW4iLCJyZXN0IiwidXNlU3RhdGUiLCJsZXZlbCIsInNldExldmVsIiwiY3VycmVudEV4cGVyaWVuY2UiLCJzZXRDdXJyZW50RXhwZXJpZW5jZSIsImNoYWxsYW5nZXNDb21wbGV0ZWQiLCJjaGFsbGFuZ2VDb21wbGV0ZWQiLCJzZXRDaGFsbGFuZ2VDb21wbGV0ZWQiLCJhY3RpdmVDaGFsbGFuZ2UiLCJzZXRBY3RpdmVDaGFsbGFuZ2UiLCJleHBlcmllbmNlVG9OZXh0TGV2ZWwiLCJNYXRoIiwicG93IiwidXNlRWZmZWN0IiwiTm90aWZpY2F0aW9uIiwicmVxdWVzdFBlcm1pc3Npb24iLCJDb29raWVzIiwic2V0IiwiU3RyaW5nIiwibGV2ZWxVcCIsInN0YXJ0TmV3Q2hhbGxhbmdlIiwicmFtZG9tQ2hhbGxhbmdlc0luZGV4IiwiZmxvb3IiLCJyYW5kb20iLCJjaGFsbGFuZ2VzIiwibGVuZ3RoIiwiY2hhbGxhbmdlIiwiQXVkaW8iLCJwbGF5IiwicGVybWlzc2lvbiIsImJvZHkiLCJhbW91bnQiLCJyZXNldENoYWxsYW5nZSIsImNvbXBsZXRlQ2hhbGxhbmdlIiwiZmluYWxFeHBlcmllbmNlIl0s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UUFiTixlQWVJLHFFQUFDLHFFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFmSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQW1CSDs7R0FqRmVELGtCOztLQUFBQSxrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaENoQixVQUFVLG1CQUFPLENBQUMseU5BQThHO0FBQ2hJLDBCQUEwQixtQkFBTyxDQUFDLCtWQUEyTDs7QUFFN047O0FBRUE7QUFDQSwwQkFBMEIsUUFBUztBQUNuQzs7QUFFQTs7QUFFQSxtQ0FBbUM7QUFDbkM7QUFDQSxzRUFBc0Usd0NBQXdDO0FBQzlHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBLElBQUksSUFBVTtBQUNkO0FBQ0Esa0VBQWtFLGlCQUFpQixjQUFjLE1BQU0sWUFBWSxpQ0FBaUM7QUFDcEosVUFBVSxnQkFBZ0IsZUFBZSxZQUFZLGlDQUFpQztBQUN0RixVQUFVLFVBQVUsZUFBZTtBQUNuQzs7QUFFQTtBQUNBLE1BQU0sK1ZBQTJMO0FBQ2pNO0FBQ0Esa0JBQWtCLG1CQUFPLENBQUMsK1ZBQTJMOztBQUVyTjs7QUFFQTtBQUNBLDRCQUE0QixRQUFTO0FBQ3JDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBLHNDIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4Ljg2MWFkMmE1YjQ0MWYxMzg4YjRjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuTGV2ZWxVcE1vZGFsX292ZXJsYXlfXzFodVFse1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0MiwgMjQzLCAyNDUsIDAuOCk7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBib3R0b206IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcblxcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLkxldmVsVXBNb2RhbF9sZXZlbFVwTW9kYWxDb250YWluZXJfXzNFNFEze1xcclxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xcclxcbiAgICBwYWRkaW5nOiAycmVtIDNyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjA1KTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5MZXZlbFVwTW9kYWxfbGV2ZWxVcE1vZGFsQ29udGFpbmVyX18zRTRRMyBoZWFkZXJ7XFxyXFxuICAgIGZvbnQtc2l6ZTogOC43NXJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgY29sb3I6IHZhcigtLWJsdWUpO1xcclxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy9pY29ucy9sZXZlbHVwLnN2ZycpIG5vLXJlcGVhdCBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXHJcXG59XFxyXFxuXFxyXFxuLkxldmVsVXBNb2RhbF9sZXZlbFVwTW9kYWxDb250YWluZXJfXzNFNFEzIHN0cm9uZ3tcXHJcXG4gICAgZm9udC1zaXplOiAyLjI1cmVtO1xcclxcbiAgICBjb2xvcjogdmFyKC0tdGl0bGUpO1xcclxcbn1cXHJcXG5cXHJcXG4uTGV2ZWxVcE1vZGFsX2xldmVsVXBNb2RhbENvbnRhaW5lcl9fM0U0UTMgcHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcclxcbiAgICBjb2xvcjogdmFyKC0tdGV4dCk7XFxyXFxuICAgIG1hcmdpbi10b3A6IDAuMjVyZW07XFxyXFxufVxcclxcblxcclxcbi5MZXZlbFVwTW9kYWxfbGV2ZWxVcE1vZGFsQ29udGFpbmVyX18zRTRRMyBidXR0b257XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgcmlnaHQ6IDAuNXJlbTtcXHJcXG4gICAgdG9wOiAwLjVyZW07XFxyXFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcclxcbiAgICBib3JkZXI6IDA7XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zcmMvc3R5bGVzL2NvbXBvbmVudHMvTGV2ZWxVcE1vZGFsLm1vZHVsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxvQ0FBb0M7SUFDcEMsZUFBZTtJQUNmLE1BQU07SUFDTixTQUFTO0lBQ1QsT0FBTztJQUNQLFFBQVE7O0lBRVIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLCtCQUErQjtJQUMvQixrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsc0RBQXNEO0lBQ3RELHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsV0FBVztJQUNYLHVCQUF1QjtJQUN2QixTQUFTO0FBQ2JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLm92ZXJsYXl7XFxyXFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjQyLCAyNDMsIDI0NSwgMC44KTtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubGV2ZWxVcE1vZGFsQ29udGFpbmVye1xcclxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xcclxcbiAgICBwYWRkaW5nOiAycmVtIDNyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjA1KTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5sZXZlbFVwTW9kYWxDb250YWluZXIgaGVhZGVye1xcclxcbiAgICBmb250LXNpemU6IDguNzVyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1ibHVlKTtcXHJcXG4gICAgYmFja2dyb3VuZDogdXJsKCcvaWNvbnMvbGV2ZWx1cC5zdmcnKSBuby1yZXBlYXQgY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxyXFxufVxcclxcblxcclxcbi5sZXZlbFVwTW9kYWxDb250YWluZXIgc3Ryb25ne1xcclxcbiAgICBmb250LXNpemU6IDIuMjVyZW07XFxyXFxuICAgIGNvbG9yOiB2YXIoLS10aXRsZSk7XFxyXFxufVxcclxcblxcclxcbi5sZXZlbFVwTW9kYWxDb250YWluZXIgcHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcclxcbiAgICBjb2xvcjogdmFyKC0tdGV4dCk7XFxyXFxuICAgIG1hcmdpbi10b3A6IDAuMjVyZW07XFxyXFxufVxcclxcblxcclxcbi5sZXZlbFVwTW9kYWxDb250YWluZXIgYnV0dG9ue1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHJpZ2h0OiAwLjVyZW07XFxyXFxuICAgIHRvcDogMC41cmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgYm9yZGVyOiAwO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJvdmVybGF5XCI6IFwiTGV2ZWxVcE1vZGFsX292ZXJsYXlfXzFodVFsXCIsXG5cdFwibGV2ZWxVcE1vZGFsQ29udGFpbmVyXCI6IFwiTGV2ZWxVcE1vZGFsX2xldmVsVXBNb2RhbENvbnRhaW5lcl9fM0U0UTNcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJpbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9jb21wb25lbnRzL0xldmVsVXBNb2RhbC5tb2R1bGUuY3NzJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBMZXZlbFVwTW9kYWwoKXtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5vdmVybGF5fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sZXZlbFVwTW9kYWxDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgPGhlYWRlcj4yPC9oZWFkZXI+XHJcbiAgICAgICAgICAgICAgICA8c3Ryb25nPlBhcmFiw6luczwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgPHA+Vm9jw6ogYWxjYW7Dp291IHVtIG5vdm8gbGV2ZWwuPC9wPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaWNvbnMvY2xvc2Uuc3ZnXCIgYWx0PVwiRmVjaGFyIG1vZGFsXCIvPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgUmVhY3ROb2RlLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnO1xyXG5pbXBvcnQgY2hhbGxhbmdlcyBmcm9tICcuLi8uLi9jaGFsbGFuZ2VzLmpzb24nO1xyXG5pbXBvcnQgeyBMZXZlbFVwTW9kYWwgfSBmcm9tICcuLi9jb21wb25lbnRzL0xldmVsVXBNb2RhbCc7XHJcblxyXG5pbnRlcmZhY2UgQ2hhbGxhbmdle1xyXG4gICAgdHlwZTogJ2JvZHknIHwgJ2V5ZSc7XHJcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gICAgYW1vdW50OiBudW1iZXI7XHJcbn1cclxuXHJcbmludGVyZmFjZSBDaGFsbGFuZ2VzQ29udGV4dERhdGF7XHJcbiAgICBsZXZlbDogbnVtYmVyO1xyXG4gICAgY3VycmVudEV4cGVyaWVuY2U6IG51bWJlcjtcclxuICAgIGV4cGVyaWVuY2VUb05leHRMZXZlbDogbnVtYmVyO1xyXG4gICAgY2hhbGxhbmdlQ29tcGxldGVkOiBudW1iZXI7XHJcbiAgICBhY3RpdmVDaGFsbGFuZ2U6IENoYWxsYW5nZTtcclxuICAgIGxldmVsVXA6ICgpID0+IHZvaWQ7XHJcbiAgICBzdGFydE5ld0NoYWxsYW5nZTogKCkgPT4gdm9pZDtcclxuICAgIHJlc2V0Q2hhbGxhbmdlOiAoKSA9PiB2b2lkO1xyXG4gICAgY29tcGxldGVDaGFsbGFuZ2U6ICgpID0+IHZvaWQ7IFxyXG59XHJcblxyXG5pbnRlcmZhY2UgQ2hhbGxhbmdlc1Byb3ZpZGVyUHJvcHN7XHJcbiAgICBjaGlsZHJlbjogUmVhY3ROb2RlO1xyXG4gICAgbGV2ZWw6IG51bWJlcjtcclxuICAgIGN1cnJlbnRFeHBlcmllbmNlOiBudW1iZXI7XHJcbiAgICBjaGFsbGFuZ2VzQ29tcGxldGVkOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDaGFsbGFuZ2VzQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30gYXMgQ2hhbGxhbmdlc0NvbnRleHREYXRhKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBDaGFsbGFuZ2VzUHJvdmlkZXIoeyBjaGlsZHJlbiwgLi4ucmVzdCB9OiBDaGFsbGFuZ2VzUHJvdmlkZXJQcm9wcyl7XHJcbiAgICBjb25zdCBbbGV2ZWwsIHNldExldmVsXSA9IHVzZVN0YXRlKHJlc3QubGV2ZWwgPz8gMSk7XHJcbiAgICBjb25zdCBbY3VycmVudEV4cGVyaWVuY2UsIHNldEN1cnJlbnRFeHBlcmllbmNlXSA9IHVzZVN0YXRlKHJlc3QuY3VycmVudEV4cGVyaWVuY2UgPz8gMCk7XHJcbiAgICBjb25zdCBbY2hhbGxhbmdlQ29tcGxldGVkLCBzZXRDaGFsbGFuZ2VDb21wbGV0ZWRdID0gdXNlU3RhdGUocmVzdC5jaGFsbGFuZ2VzQ29tcGxldGVkID8/IDApO1xyXG5cclxuICAgIGNvbnN0IFthY3RpdmVDaGFsbGFuZ2UsIHNldEFjdGl2ZUNoYWxsYW5nZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgICBjb25zdCBleHBlcmllbmNlVG9OZXh0TGV2ZWwgPSBNYXRoLnBvdygobGV2ZWwgKyAxKSAqIDQsIDIpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIE5vdGlmaWNhdGlvbi5yZXF1ZXN0UGVybWlzc2lvbigpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIENvb2tpZXMuc2V0KCdsZXZlbCcsIFN0cmluZyhsZXZlbCkpO1xyXG4gICAgICAgIENvb2tpZXMuc2V0KCdjdXJyZW50RXhwZXJpZW5jZScsIFN0cmluZyhjdXJyZW50RXhwZXJpZW5jZSkpO1xyXG4gICAgICAgIENvb2tpZXMuc2V0KCdjaGFsbGFuZ2VzQ29tcGxldGVkJywgU3RyaW5nKGNoYWxsYW5nZUNvbXBsZXRlZCkpO1xyXG4gICAgfSwgW2xldmVsLCBjdXJyZW50RXhwZXJpZW5jZSwgY2hhbGxhbmdlQ29tcGxldGVkXSk7XHJcblxyXG4gICAgZnVuY3Rpb24gbGV2ZWxVcCgpe1xyXG4gICAgICAgIHNldExldmVsKGxldmVsICsgMSk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc3RhcnROZXdDaGFsbGFuZ2UoKXtcclxuICAgICAgICBjb25zdCByYW1kb21DaGFsbGFuZ2VzSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjaGFsbGFuZ2VzLmxlbmd0aCk7XHJcbiAgICAgICAgY29uc3QgY2hhbGxhbmdlID0gY2hhbGxhbmdlc1tyYW1kb21DaGFsbGFuZ2VzSW5kZXhdO1xyXG5cclxuICAgICAgICBzZXRBY3RpdmVDaGFsbGFuZ2UoY2hhbGxhbmdlKTtcclxuICAgICAgICBcclxuICAgICAgICBuZXcgQXVkaW8oJy9ub3RpZmljYXRpb24ubXAzJykucGxheSgpO1xyXG5cclxuICAgICAgICBpZihOb3RpZmljYXRpb24ucGVybWlzc2lvbiA9PT0gJ2dyYW50ZWQnKXtcclxuICAgICAgICAgICAgbmV3IE5vdGlmaWNhdGlvbignTm92byBkZXNhZmlvISA6Mycse1xyXG4gICAgICAgICAgICAgICAgYm9keTogYFZhbGVuZG8gJHtjaGFsbGFuZ2UuYW1vdW50fXhwIWAsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlc2V0Q2hhbGxhbmdlKCl7XHJcbiAgICAgICAgc2V0QWN0aXZlQ2hhbGxhbmdlKG51bGwpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNvbXBsZXRlQ2hhbGxhbmdlKCl7XHJcbiAgICAgICAgaWYoIWFjdGl2ZUNoYWxsYW5nZSl7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHsgYW1vdW50IH0gPSBhY3RpdmVDaGFsbGFuZ2U7XHJcblxyXG4gICAgICAgIGxldCBmaW5hbEV4cGVyaWVuY2UgPSBjdXJyZW50RXhwZXJpZW5jZSArIGFtb3VudDtcclxuXHJcbiAgICAgICAgaWYoZmluYWxFeHBlcmllbmNlID49IGV4cGVyaWVuY2VUb05leHRMZXZlbCl7XHJcbiAgICAgICAgICAgIGZpbmFsRXhwZXJpZW5jZSA9IGZpbmFsRXhwZXJpZW5jZSAtIGV4cGVyaWVuY2VUb05leHRMZXZlbDtcclxuICAgICAgICAgICAgbGV2ZWxVcCgpOyAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0Q3VycmVudEV4cGVyaWVuY2UoZmluYWxFeHBlcmllbmNlKTtcclxuICAgICAgICBzZXRBY3RpdmVDaGFsbGFuZ2UobnVsbCk7XHJcbiAgICAgICAgc2V0Q2hhbGxhbmdlQ29tcGxldGVkKGNoYWxsYW5nZUNvbXBsZXRlZCArIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENoYWxsYW5nZXNDb250ZXh0LlByb3ZpZGVyIFxyXG4gICAgICAgICAgICB2YWx1ZT17eyBcclxuICAgICAgICAgICAgICAgIGxldmVsLCBcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRFeHBlcmllbmNlLFxyXG4gICAgICAgICAgICAgICAgZXhwZXJpZW5jZVRvTmV4dExldmVsLFxyXG4gICAgICAgICAgICAgICAgY2hhbGxhbmdlQ29tcGxldGVkLCBcclxuICAgICAgICAgICAgICAgIGFjdGl2ZUNoYWxsYW5nZSxcclxuICAgICAgICAgICAgICAgIGxldmVsVXAsXHJcbiAgICAgICAgICAgICAgICBzdGFydE5ld0NoYWxsYW5nZSxcclxuICAgICAgICAgICAgICAgIHJlc2V0Q2hhbGxhbmdlLFxyXG4gICAgICAgICAgICAgICAgY29tcGxldGVDaGFsbGFuZ2VcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIHsgY2hpbGRyZW4gfVxyXG5cclxuICAgICAgICAgICAgPExldmVsVXBNb2RhbCAvPlxyXG4gICAgICAgIDwvQ2hhbGxhbmdlc0NvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApO1xyXG59IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1zdHlsZS1sb2FkZXIvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0yLTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0yLTIhLi9MZXZlbFVwTW9kYWwubW9kdWxlLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKGVsZW1lbnQpey8vIFRoZXNlIGVsZW1lbnRzIHNob3VsZCBhbHdheXMgZXhpc3QuIElmIHRoZXkgZG8gbm90LFxuLy8gdGhpcyBjb2RlIHNob3VsZCBmYWlsLlxudmFyIGFuY2hvckVsZW1lbnQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19fbmV4dF9jc3NfX0RPX05PVF9VU0VfXycpO3ZhciBwYXJlbnROb2RlPWFuY2hvckVsZW1lbnQucGFyZW50Tm9kZTsvLyBOb3JtYWxseSA8aGVhZD5cbi8vIEVhY2ggc3R5bGUgdGFnIHNob3VsZCBiZSBwbGFjZWQgcmlnaHQgYmVmb3JlIG91clxuLy8gYW5jaG9yLiBCeSBpbnNlcnRpbmcgYmVmb3JlIGFuZCBub3QgYWZ0ZXIsIHdlIGRvIG5vdFxuLy8gbmVlZCB0byB0cmFjayB0aGUgbGFzdCBpbnNlcnRlZCBlbGVtZW50LlxucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCxhbmNob3JFbGVtZW50KTt9O1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLGIsaXNOYW1lZEV4cG9ydCl7aWYoIWEmJmJ8fGEmJiFiKXtyZXR1cm4gZmFsc2U7fWxldCBwO2ZvcihwIGluIGEpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKGFbcF0hPT1iW3BdKXtyZXR1cm4gZmFsc2U7fX1mb3IocCBpbiBiKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZighYVtwXSl7cmV0dXJuIGZhbHNlO319cmV0dXJuIHRydWU7fTtcbiAgICB2YXIgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMi0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMi0yIS4vTGV2ZWxVcE1vZGFsLm1vZHVsZS5jc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0yLTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0yLTIhLi9MZXZlbFVwTW9kYWwubW9kdWxlLmNzc1wiKTtcblxuICAgICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgY29udGVudC5sb2NhbHMpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiXSwic291cmNlUm9vdCI6IiJ9
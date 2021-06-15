webpackHotUpdate_N_E("pages/index",{

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

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      isLevelUpModalUp = _useState5[0],
      setIsLevelUpModalUp = _useState5[1];

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
    setIsLevelUpModalUp(true);
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
      isLevelUpModalUp: isLevelUpModalUp,
      levelUp: levelUp,
      startNewChallange: startNewChallange,
      resetChallange: resetChallange,
      completeChallange: completeChallange
    },
    children: [children, isLevelUpModalUp && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_LevelUpModal__WEBPACK_IMPORTED_MODULE_5__["LevelUpModal"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 35
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 98,
    columnNumber: 9
  }, this);
}

_s(ChallangesProvider, "wzMwnmDEcjYk00URcUzLmrMKb44=");

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL0NoYWxsYW5nZXNDb250ZXh0LnRzeCJdLCJuYW1lcyI6WyJDaGFsbGFuZ2VzQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJDaGFsbGFuZ2VzUHJvdmlkZXIiLCJjaGlsZHJlbiIsInJlc3QiLCJ1c2VTdGF0ZSIsImxldmVsIiwic2V0TGV2ZWwiLCJjdXJyZW50RXhwZXJpZW5jZSIsInNldEN1cnJlbnRFeHBlcmllbmNlIiwiY2hhbGxhbmdlc0NvbXBsZXRlZCIsImNoYWxsYW5nZUNvbXBsZXRlZCIsInNldENoYWxsYW5nZUNvbXBsZXRlZCIsImFjdGl2ZUNoYWxsYW5nZSIsInNldEFjdGl2ZUNoYWxsYW5nZSIsImlzTGV2ZWxVcE1vZGFsVXAiLCJzZXRJc0xldmVsVXBNb2RhbFVwIiwiZXhwZXJpZW5jZVRvTmV4dExldmVsIiwiTWF0aCIsInBvdyIsInVzZUVmZmVjdCIsIk5vdGlmaWNhdGlvbiIsInJlcXVlc3RQZXJtaXNzaW9uIiwiQ29va2llcyIsInNldCIsIlN0cmluZyIsImxldmVsVXAiLCJzdGFydE5ld0NoYWxsYW5nZSIsInJhbWRvbUNoYWxsYW5nZXNJbmRleCIsImZsb29yIiwicmFuZG9tIiwiY2hhbGxhbmdlcyIsImxlbmd0aCIsImNoYWxsYW5nZSIsIkF1ZGlvIiwicGxheSIsInBlcm1pc3Npb24iLCJib2R5IiwiYW1vdW50IiwicmVzZXRDaGFsbGFuZ2UiLCJjb21wbGV0ZUNoYWxsYW5nZSIsImZpbmFsRXhwZXJpZW5jZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQTRCTyxJQUFNQSxpQkFBaUIsZ0JBQUdDLDJEQUFhLENBQUMsRUFBRCxDQUF2QztBQUVBLFNBQVNDLGtCQUFULE9BQTJFO0FBQUE7O0FBQUE7O0FBQUEsTUFBN0NDLFFBQTZDLFFBQTdDQSxRQUE2QztBQUFBLE1BQWhDQyxJQUFnQzs7QUFBQSxrQkFD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QUFuQjtBQUNJLFNBQUssRUFBRTtBQUNITCxXQUFLLEVBQUxBLEtBREc7QUFFSEUsdUJBQWlCLEVBQWpCQSxpQkFGRztBQUdIUywyQkFBcUIsRUFBckJBLHFCQUhHO0FBSUhOLHdCQUFrQixFQUFsQkEsa0JBSkc7QUFLSEUscUJBQWUsRUFBZkEsZUFMRztBQU1IRSxzQkFBZ0IsRUFBaEJBLGdCQU5HO0FBT0hXLGFBQU8sRUFBUEEsT0FQRztBQVFIQyx1QkFBaUIsRUFBakJBLGlCQVJHO0FBU0hZLG9CQUFjLEVBQWRBLGNBVEc7QUFVSEMsdUJBQWlCLEVBQWpCQTtBQVZHLEtBRFg7QUFBQSxlQWNNckMsUUFkTixFQWdCTVksZ0JBQWdCLGlCQUFJLHFFQUFDLHFFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFoQjFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBb0JIOztHQW5GZWIsa0I7O0tBQUFBLGtCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjBjMzM4ODgzMTkyZTczMmNkY2UzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCBSZWFjdE5vZGUsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSc7XHJcbmltcG9ydCBjaGFsbGFuZ2VzIGZyb20gJy4uLy4uL2NoYWxsYW5nZXMuanNvbic7XHJcbmltcG9ydCB7IExldmVsVXBNb2RhbCB9IGZyb20gJy4uL2NvbXBvbmVudHMvTGV2ZWxVcE1vZGFsJztcclxuXHJcbmludGVyZmFjZSBDaGFsbGFuZ2V7XHJcbiAgICB0eXBlOiAnYm9keScgfCAnZXllJztcclxuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgICBhbW91bnQ6IG51bWJlcjtcclxufVxyXG5cclxuaW50ZXJmYWNlIENoYWxsYW5nZXNDb250ZXh0RGF0YXtcclxuICAgIGxldmVsOiBudW1iZXI7XHJcbiAgICBjdXJyZW50RXhwZXJpZW5jZTogbnVtYmVyO1xyXG4gICAgZXhwZXJpZW5jZVRvTmV4dExldmVsOiBudW1iZXI7XHJcbiAgICBjaGFsbGFuZ2VDb21wbGV0ZWQ6IG51bWJlcjtcclxuICAgIHNldElzTGV2ZWxVcE1vZGFsVXA6IGJvb2xlYW47XHJcbiAgICBhY3RpdmVDaGFsbGFuZ2U6IENoYWxsYW5nZTtcclxuICAgIGxldmVsVXA6ICgpID0+IHZvaWQ7XHJcbiAgICBzdGFydE5ld0NoYWxsYW5nZTogKCkgPT4gdm9pZDtcclxuICAgIHJlc2V0Q2hhbGxhbmdlOiAoKSA9PiB2b2lkO1xyXG4gICAgY29tcGxldGVDaGFsbGFuZ2U6ICgpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmludGVyZmFjZSBDaGFsbGFuZ2VzUHJvdmlkZXJQcm9wc3tcclxuICAgIGNoaWxkcmVuOiBSZWFjdE5vZGU7XHJcbiAgICBsZXZlbDogbnVtYmVyO1xyXG4gICAgY3VycmVudEV4cGVyaWVuY2U6IG51bWJlcjtcclxuICAgIGNoYWxsYW5nZXNDb21wbGV0ZWQ6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IENoYWxsYW5nZXNDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSBhcyBDaGFsbGFuZ2VzQ29udGV4dERhdGEpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIENoYWxsYW5nZXNQcm92aWRlcih7IGNoaWxkcmVuLCAuLi5yZXN0IH06IENoYWxsYW5nZXNQcm92aWRlclByb3BzKXtcclxuICAgIGNvbnN0IFtsZXZlbCwgc2V0TGV2ZWxdID0gdXNlU3RhdGUocmVzdC5sZXZlbCA/PyAxKTtcclxuICAgIGNvbnN0IFtjdXJyZW50RXhwZXJpZW5jZSwgc2V0Q3VycmVudEV4cGVyaWVuY2VdID0gdXNlU3RhdGUocmVzdC5jdXJyZW50RXhwZXJpZW5jZSA/PyAwKTtcclxuICAgIGNvbnN0IFtjaGFsbGFuZ2VDb21wbGV0ZWQsIHNldENoYWxsYW5nZUNvbXBsZXRlZF0gPSB1c2VTdGF0ZShyZXN0LmNoYWxsYW5nZXNDb21wbGV0ZWQgPz8gMCk7XHJcblxyXG4gICAgY29uc3QgW2FjdGl2ZUNoYWxsYW5nZSwgc2V0QWN0aXZlQ2hhbGxhbmdlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW2lzTGV2ZWxVcE1vZGFsVXAsIHNldElzTGV2ZWxVcE1vZGFsVXBdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IGV4cGVyaWVuY2VUb05leHRMZXZlbCA9IE1hdGgucG93KChsZXZlbCArIDEpICogNCwgMik7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgTm90aWZpY2F0aW9uLnJlcXVlc3RQZXJtaXNzaW9uKCk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgQ29va2llcy5zZXQoJ2xldmVsJywgU3RyaW5nKGxldmVsKSk7XHJcbiAgICAgICAgQ29va2llcy5zZXQoJ2N1cnJlbnRFeHBlcmllbmNlJywgU3RyaW5nKGN1cnJlbnRFeHBlcmllbmNlKSk7XHJcbiAgICAgICAgQ29va2llcy5zZXQoJ2NoYWxsYW5nZXNDb21wbGV0ZWQnLCBTdHJpbmcoY2hhbGxhbmdlQ29tcGxldGVkKSk7XHJcbiAgICB9LCBbbGV2ZWwsIGN1cnJlbnRFeHBlcmllbmNlLCBjaGFsbGFuZ2VDb21wbGV0ZWRdKTtcclxuXHJcbiAgICBmdW5jdGlvbiBsZXZlbFVwKCl7XHJcbiAgICAgICAgc2V0TGV2ZWwobGV2ZWwgKyAxKTtcclxuICAgICAgICBzZXRJc0xldmVsVXBNb2RhbFVwKHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHN0YXJ0TmV3Q2hhbGxhbmdlKCl7XHJcbiAgICAgICAgY29uc3QgcmFtZG9tQ2hhbGxhbmdlc0luZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY2hhbGxhbmdlcy5sZW5ndGgpO1xyXG4gICAgICAgIGNvbnN0IGNoYWxsYW5nZSA9IGNoYWxsYW5nZXNbcmFtZG9tQ2hhbGxhbmdlc0luZGV4XTtcclxuXHJcbiAgICAgICAgc2V0QWN0aXZlQ2hhbGxhbmdlKGNoYWxsYW5nZSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbmV3IEF1ZGlvKCcvbm90aWZpY2F0aW9uLm1wMycpLnBsYXkoKTtcclxuXHJcbiAgICAgICAgaWYoTm90aWZpY2F0aW9uLnBlcm1pc3Npb24gPT09ICdncmFudGVkJyl7XHJcbiAgICAgICAgICAgIG5ldyBOb3RpZmljYXRpb24oJ05vdm8gZGVzYWZpbyEgOjMnLHtcclxuICAgICAgICAgICAgICAgIGJvZHk6IGBWYWxlbmRvICR7Y2hhbGxhbmdlLmFtb3VudH14cCFgLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZXNldENoYWxsYW5nZSgpe1xyXG4gICAgICAgIHNldEFjdGl2ZUNoYWxsYW5nZShudWxsKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjb21wbGV0ZUNoYWxsYW5nZSgpe1xyXG4gICAgICAgIGlmKCFhY3RpdmVDaGFsbGFuZ2Upe1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCB7IGFtb3VudCB9ID0gYWN0aXZlQ2hhbGxhbmdlO1xyXG5cclxuICAgICAgICBsZXQgZmluYWxFeHBlcmllbmNlID0gY3VycmVudEV4cGVyaWVuY2UgKyBhbW91bnQ7XHJcblxyXG4gICAgICAgIGlmKGZpbmFsRXhwZXJpZW5jZSA+PSBleHBlcmllbmNlVG9OZXh0TGV2ZWwpe1xyXG4gICAgICAgICAgICBmaW5hbEV4cGVyaWVuY2UgPSBmaW5hbEV4cGVyaWVuY2UgLSBleHBlcmllbmNlVG9OZXh0TGV2ZWw7XHJcbiAgICAgICAgICAgIGxldmVsVXAoKTsgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldEN1cnJlbnRFeHBlcmllbmNlKGZpbmFsRXhwZXJpZW5jZSk7XHJcbiAgICAgICAgc2V0QWN0aXZlQ2hhbGxhbmdlKG51bGwpO1xyXG4gICAgICAgIHNldENoYWxsYW5nZUNvbXBsZXRlZChjaGFsbGFuZ2VDb21wbGV0ZWQgKyAxKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDaGFsbGFuZ2VzQ29udGV4dC5Qcm92aWRlciBcclxuICAgICAgICAgICAgdmFsdWU9e3sgXHJcbiAgICAgICAgICAgICAgICBsZXZlbCwgXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50RXhwZXJpZW5jZSxcclxuICAgICAgICAgICAgICAgIGV4cGVyaWVuY2VUb05leHRMZXZlbCxcclxuICAgICAgICAgICAgICAgIGNoYWxsYW5nZUNvbXBsZXRlZCwgXHJcbiAgICAgICAgICAgICAgICBhY3RpdmVDaGFsbGFuZ2UsXHJcbiAgICAgICAgICAgICAgICBpc0xldmVsVXBNb2RhbFVwLFxyXG4gICAgICAgICAgICAgICAgbGV2ZWxVcCxcclxuICAgICAgICAgICAgICAgIHN0YXJ0TmV3Q2hhbGxhbmdlLFxyXG4gICAgICAgICAgICAgICAgcmVzZXRDaGFsbGFuZ2UsXHJcbiAgICAgICAgICAgICAgICBjb21wbGV0ZUNoYWxsYW5nZSxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIHsgY2hpbGRyZW4gfVxyXG5cclxuICAgICAgICAgICAgeyBpc0xldmVsVXBNb2RhbFVwICYmIDxMZXZlbFVwTW9kYWwgLz59XHJcbiAgICAgICAgPC9DaGFsbGFuZ2VzQ29udGV4dC5Qcm92aWRlcj5cclxuICAgICk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9
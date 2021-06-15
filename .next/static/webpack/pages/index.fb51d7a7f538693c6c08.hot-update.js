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
      levelUp: levelUp,
      startNewChallange: startNewChallange,
      resetChallange: resetChallange,
      completeChallange: completeChallange
    },
    children: [children, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_LevelUpModal__WEBPACK_IMPORTED_MODULE_5__["LevelUpModal"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 97,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL0NoYWxsYW5nZXNDb250ZXh0LnRzeCJdLCJuYW1lcyI6WyJDaGFsbGFuZ2VzQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJDaGFsbGFuZ2VzUHJvdmlkZXIiLCJjaGlsZHJlbiIsInJlc3QiLCJ1c2VTdGF0ZSIsImxldmVsIiwic2V0TGV2ZWwiLCJjdXJyZW50RXhwZXJpZW5jZSIsInNldEN1cnJlbnRFeHBlcmllbmNlIiwiY2hhbGxhbmdlc0NvbXBsZXRlZCIsImNoYWxsYW5nZUNvbXBsZXRlZCIsInNldENoYWxsYW5nZUNvbXBsZXRlZCIsImFjdGl2ZUNoYWxsYW5nZSIsInNldEFjdGl2ZUNoYWxsYW5nZSIsImlzTGV2ZWxVcE1vZGFsVXAiLCJzZXRJc0xldmVsVXBNb2RhbFVwIiwiZXhwZXJpZW5jZVRvTmV4dExldmVsIiwiTWF0aCIsInBvdyIsInVzZUVmZmVjdCIsIk5vdGlmaWNhdGlvbiIsInJlcXVlc3RQZXJtaXNzaW9uIiwiQ29va2llcyIsInNldCIsIlN0cmluZyIsImxldmVsVXAiLCJzdGFydE5ld0NoYWxsYW5nZSIsInJhbWRvbUNoYWxsYW5nZXNJbmRleCIsImZsb29yIiwicmFuZG9tIiwiY2hhbGxhbmdlcyIsImxlbmd0aCIsImNoYWxsYW5nZSIsIkF1ZGlvIiwicGxheSIsInBlcm1pc3Npb24iLCJib2R5IiwiYW1vdW50IiwicmVzZXRDaGFsbGFuZ2UiLCJjb21wbGV0ZUNoYWxsYW5nZSIsImZpbmFsRXhwZXJpZW5jZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQTJCTyxJQUFNQSxpQkFBaUIsZ0JBQUdDLDJEQUFhLENBQUMsRUFBRCxDQUF2QztBQUVBLFNBQVNDLGtCQUFULE9BQTJFO0FBQUE7O0FBQUE7O0FBQUEsTUFBN0NDLFFBQTZDLFFBQTdDQSxRQUE2QztBQUFBLE1BQWhDQyxJQUFnQzs7QUFBQSxrQkFD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QUFuQjtBQUNJLFNBQUssRUFBRTtBQUNITCxXQUFLLEVBQUxBLEtBREc7QUFFSEUsdUJBQWlCLEVBQWpCQSxpQkFGRztBQUdIUywyQkFBcUIsRUFBckJBLHFCQUhHO0FBSUhOLHdCQUFrQixFQUFsQkEsa0JBSkc7QUFLSEUscUJBQWUsRUFBZkEsZUFMRztBQU1IYSxhQUFPLEVBQVBBLE9BTkc7QUFPSEMsdUJBQWlCLEVBQWpCQSxpQkFQRztBQVFIWSxvQkFBYyxFQUFkQSxjQVJHO0FBU0hDLHVCQUFpQixFQUFqQkE7QUFURyxLQURYO0FBQUEsZUFhTXJDLFFBYk4sZUFlSSxxRUFBQyxxRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBZko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFtQkg7O0dBbEZlRCxrQjs7S0FBQUEsa0IiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZmI1MWQ3YTdmNTM4NjkzYzZjMDguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIFJlYWN0Tm9kZSwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJztcclxuaW1wb3J0IGNoYWxsYW5nZXMgZnJvbSAnLi4vLi4vY2hhbGxhbmdlcy5qc29uJztcclxuaW1wb3J0IHsgTGV2ZWxVcE1vZGFsIH0gZnJvbSAnLi4vY29tcG9uZW50cy9MZXZlbFVwTW9kYWwnO1xyXG5cclxuaW50ZXJmYWNlIENoYWxsYW5nZXtcclxuICAgIHR5cGU6ICdib2R5JyB8ICdleWUnO1xyXG4gICAgZGVzY3JpcHRpb246IHN0cmluZztcclxuICAgIGFtb3VudDogbnVtYmVyO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgQ2hhbGxhbmdlc0NvbnRleHREYXRhe1xyXG4gICAgbGV2ZWw6IG51bWJlcjtcclxuICAgIGN1cnJlbnRFeHBlcmllbmNlOiBudW1iZXI7XHJcbiAgICBleHBlcmllbmNlVG9OZXh0TGV2ZWw6IG51bWJlcjtcclxuICAgIGNoYWxsYW5nZUNvbXBsZXRlZDogbnVtYmVyO1xyXG4gICAgYWN0aXZlQ2hhbGxhbmdlOiBDaGFsbGFuZ2U7XHJcbiAgICBsZXZlbFVwOiAoKSA9PiB2b2lkO1xyXG4gICAgc3RhcnROZXdDaGFsbGFuZ2U6ICgpID0+IHZvaWQ7XHJcbiAgICByZXNldENoYWxsYW5nZTogKCkgPT4gdm9pZDtcclxuICAgIGNvbXBsZXRlQ2hhbGxhbmdlOiAoKSA9PiB2b2lkOyBcclxufVxyXG5cclxuaW50ZXJmYWNlIENoYWxsYW5nZXNQcm92aWRlclByb3Bze1xyXG4gICAgY2hpbGRyZW46IFJlYWN0Tm9kZTtcclxuICAgIGxldmVsOiBudW1iZXI7XHJcbiAgICBjdXJyZW50RXhwZXJpZW5jZTogbnVtYmVyO1xyXG4gICAgY2hhbGxhbmdlc0NvbXBsZXRlZDogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQ2hhbGxhbmdlc0NvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9IGFzIENoYWxsYW5nZXNDb250ZXh0RGF0YSk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQ2hhbGxhbmdlc1Byb3ZpZGVyKHsgY2hpbGRyZW4sIC4uLnJlc3QgfTogQ2hhbGxhbmdlc1Byb3ZpZGVyUHJvcHMpe1xyXG4gICAgY29uc3QgW2xldmVsLCBzZXRMZXZlbF0gPSB1c2VTdGF0ZShyZXN0LmxldmVsID8/IDEpO1xyXG4gICAgY29uc3QgW2N1cnJlbnRFeHBlcmllbmNlLCBzZXRDdXJyZW50RXhwZXJpZW5jZV0gPSB1c2VTdGF0ZShyZXN0LmN1cnJlbnRFeHBlcmllbmNlID8/IDApO1xyXG4gICAgY29uc3QgW2NoYWxsYW5nZUNvbXBsZXRlZCwgc2V0Q2hhbGxhbmdlQ29tcGxldGVkXSA9IHVzZVN0YXRlKHJlc3QuY2hhbGxhbmdlc0NvbXBsZXRlZCA/PyAwKTtcclxuXHJcbiAgICBjb25zdCBbYWN0aXZlQ2hhbGxhbmdlLCBzZXRBY3RpdmVDaGFsbGFuZ2VdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbaXNMZXZlbFVwTW9kYWxVcCwgc2V0SXNMZXZlbFVwTW9kYWxVcF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgZXhwZXJpZW5jZVRvTmV4dExldmVsID0gTWF0aC5wb3coKGxldmVsICsgMSkgKiA0LCAyKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBOb3RpZmljYXRpb24ucmVxdWVzdFBlcm1pc3Npb24oKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBDb29raWVzLnNldCgnbGV2ZWwnLCBTdHJpbmcobGV2ZWwpKTtcclxuICAgICAgICBDb29raWVzLnNldCgnY3VycmVudEV4cGVyaWVuY2UnLCBTdHJpbmcoY3VycmVudEV4cGVyaWVuY2UpKTtcclxuICAgICAgICBDb29raWVzLnNldCgnY2hhbGxhbmdlc0NvbXBsZXRlZCcsIFN0cmluZyhjaGFsbGFuZ2VDb21wbGV0ZWQpKTtcclxuICAgIH0sIFtsZXZlbCwgY3VycmVudEV4cGVyaWVuY2UsIGNoYWxsYW5nZUNvbXBsZXRlZF0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIGxldmVsVXAoKXtcclxuICAgICAgICBzZXRMZXZlbChsZXZlbCArIDEpO1xyXG4gICAgICAgIHNldElzTGV2ZWxVcE1vZGFsVXAodHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc3RhcnROZXdDaGFsbGFuZ2UoKXtcclxuICAgICAgICBjb25zdCByYW1kb21DaGFsbGFuZ2VzSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjaGFsbGFuZ2VzLmxlbmd0aCk7XHJcbiAgICAgICAgY29uc3QgY2hhbGxhbmdlID0gY2hhbGxhbmdlc1tyYW1kb21DaGFsbGFuZ2VzSW5kZXhdO1xyXG5cclxuICAgICAgICBzZXRBY3RpdmVDaGFsbGFuZ2UoY2hhbGxhbmdlKTtcclxuICAgICAgICBcclxuICAgICAgICBuZXcgQXVkaW8oJy9ub3RpZmljYXRpb24ubXAzJykucGxheSgpO1xyXG5cclxuICAgICAgICBpZihOb3RpZmljYXRpb24ucGVybWlzc2lvbiA9PT0gJ2dyYW50ZWQnKXtcclxuICAgICAgICAgICAgbmV3IE5vdGlmaWNhdGlvbignTm92byBkZXNhZmlvISA6Mycse1xyXG4gICAgICAgICAgICAgICAgYm9keTogYFZhbGVuZG8gJHtjaGFsbGFuZ2UuYW1vdW50fXhwIWAsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlc2V0Q2hhbGxhbmdlKCl7XHJcbiAgICAgICAgc2V0QWN0aXZlQ2hhbGxhbmdlKG51bGwpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNvbXBsZXRlQ2hhbGxhbmdlKCl7XHJcbiAgICAgICAgaWYoIWFjdGl2ZUNoYWxsYW5nZSl7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHsgYW1vdW50IH0gPSBhY3RpdmVDaGFsbGFuZ2U7XHJcblxyXG4gICAgICAgIGxldCBmaW5hbEV4cGVyaWVuY2UgPSBjdXJyZW50RXhwZXJpZW5jZSArIGFtb3VudDtcclxuXHJcbiAgICAgICAgaWYoZmluYWxFeHBlcmllbmNlID49IGV4cGVyaWVuY2VUb05leHRMZXZlbCl7XHJcbiAgICAgICAgICAgIGZpbmFsRXhwZXJpZW5jZSA9IGZpbmFsRXhwZXJpZW5jZSAtIGV4cGVyaWVuY2VUb05leHRMZXZlbDtcclxuICAgICAgICAgICAgbGV2ZWxVcCgpOyAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0Q3VycmVudEV4cGVyaWVuY2UoZmluYWxFeHBlcmllbmNlKTtcclxuICAgICAgICBzZXRBY3RpdmVDaGFsbGFuZ2UobnVsbCk7XHJcbiAgICAgICAgc2V0Q2hhbGxhbmdlQ29tcGxldGVkKGNoYWxsYW5nZUNvbXBsZXRlZCArIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENoYWxsYW5nZXNDb250ZXh0LlByb3ZpZGVyIFxyXG4gICAgICAgICAgICB2YWx1ZT17eyBcclxuICAgICAgICAgICAgICAgIGxldmVsLCBcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRFeHBlcmllbmNlLFxyXG4gICAgICAgICAgICAgICAgZXhwZXJpZW5jZVRvTmV4dExldmVsLFxyXG4gICAgICAgICAgICAgICAgY2hhbGxhbmdlQ29tcGxldGVkLCBcclxuICAgICAgICAgICAgICAgIGFjdGl2ZUNoYWxsYW5nZSxcclxuICAgICAgICAgICAgICAgIGxldmVsVXAsXHJcbiAgICAgICAgICAgICAgICBzdGFydE5ld0NoYWxsYW5nZSxcclxuICAgICAgICAgICAgICAgIHJlc2V0Q2hhbGxhbmdlLFxyXG4gICAgICAgICAgICAgICAgY29tcGxldGVDaGFsbGFuZ2VcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIHsgY2hpbGRyZW4gfVxyXG5cclxuICAgICAgICAgICAgPExldmVsVXBNb2RhbCAvPlxyXG4gICAgICAgIDwvQ2hhbGxhbmdlc0NvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==
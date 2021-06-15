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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _challanges_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../challanges.json */ "./challanges.json");
var _challanges_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../challanges.json */ "./challanges.json", 1);


var _jsxFileName = "C:\\Users\\Samuel\\Desktop\\nlw4\\trilha_react\\moveit-next\\src\\contexts\\ChallangesContext.tsx",
    _s = $RefreshSig$();




var ChallangesContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])({});
function ChallangesProvider(_ref) {
  _s();

  var children = _ref.children;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(1),
      level = _useState[0],
      setLevel = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      currentExperience = _useState2[0],
      setCurrentExperience = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      challangeCompleted = _useState3[0],
      setChallangeCompleted = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      activeChallange = _useState4[0],
      setActiveChallange = _useState4[1];

  var experienceToNextLevel = Math.pow((level + 1) * 4, 2);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    Notification.requestPermission();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.set('level', String(level));
    js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.set('currentExperience', String(currentExperience));
    js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.set('challangesCompleted', String(challangeCompleted));
  }, [level, currentExperience, challangeCompleted]);

  function levelUp() {
    setLevel(level + 1);
    alert("Parab\xE9ns voc\xEA foi para o level ".concat(level + 1));
  }

  function startNewChallange() {
    var ramdomChallangesIndex = Math.floor(Math.random() * _challanges_json__WEBPACK_IMPORTED_MODULE_3__.length);
    var challange = _challanges_json__WEBPACK_IMPORTED_MODULE_3__[ramdomChallangesIndex];
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
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 92,
    columnNumber: 9
  }, this);
}

_s(ChallangesProvider, "os8Czb4a9rFjRzIEggL4RFn77ZU=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL0NoYWxsYW5nZXNDb250ZXh0LnRzeCJdLCJuYW1lcyI6WyJDaGFsbGFuZ2VzQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJDaGFsbGFuZ2VzUHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZVN0YXRlIiwibGV2ZWwiLCJzZXRMZXZlbCIsImN1cnJlbnRFeHBlcmllbmNlIiwic2V0Q3VycmVudEV4cGVyaWVuY2UiLCJjaGFsbGFuZ2VDb21wbGV0ZWQiLCJzZXRDaGFsbGFuZ2VDb21wbGV0ZWQiLCJhY3RpdmVDaGFsbGFuZ2UiLCJzZXRBY3RpdmVDaGFsbGFuZ2UiLCJleHBlcmllbmNlVG9OZXh0TGV2ZWwiLCJNYXRoIiwicG93IiwidXNlRWZmZWN0IiwiTm90aWZpY2F0aW9uIiwicmVxdWVzdFBlcm1pc3Npb24iLCJDb29raWVzIiwic2V0IiwiU3RyaW5nIiwibGV2ZWxVcCIsImFsZXJ0Iiwic3RhcnROZXdDaGFsbGFuZ2UiLCJyYW1kb21DaGFsbGFuZ2VzSW5kZXgiLCJmbG9vciIsInJhbmRvbSIsImNoYWxsYW5nZXMiLCJsZW5ndGgiLCJjaGFsbGFuZ2UiLCJBdWRpbyIsInBsYXkiLCJwZXJtaXNzaW9uIiwiYm9keSIsImFtb3VudCIsInJlc2V0Q2hhbGxhbmdlIiwiY29tcGxldGVDaGFsbGFuZ2UiLCJmaW5hbEV4cGVyaWVuY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBd0JPLElBQU1BLGlCQUFpQixnQkFBR0MsMkRBQWEsQ0FBQyxFQUFELENBQXZDO0FBRUEsU0FBU0Msa0JBQVQsT0FBa0U7QUFBQTs7QUFBQSxNQUFwQ0MsUUFBb0MsUUFBcENBLFFBQW9DOztBQUFBLGtCQUMzQ0Msc0RBQVEsQ0FBQyxDQUFELENBRG1DO0FBQUEsTUFDOURDLEtBRDhEO0FBQUEsTUFDdkRDLFFBRHVEOztBQUFBLG1CQUVuQkYsc0RBQVEsQ0FBQyxDQUFELENB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VEcsS0FEWDtBQUFBLGNBYU1sQztBQWJOO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQWlCSDs7R0EvRWVELGtCOztLQUFBQSxrQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC42N2M0ZDcyOWYzMDc3NTNjNzJlMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgUmVhY3ROb2RlLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnO1xyXG5pbXBvcnQgY2hhbGxhbmdlcyBmcm9tICcuLi8uLi9jaGFsbGFuZ2VzLmpzb24nO1xyXG5cclxuaW50ZXJmYWNlIENoYWxsYW5nZXtcclxuICAgIHR5cGU6ICdib2R5JyB8ICdleWUnO1xyXG4gICAgZGVzY3JpcHRpb246IHN0cmluZztcclxuICAgIGFtb3VudDogbnVtYmVyO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgQ2hhbGxhbmdlc0NvbnRleHREYXRhe1xyXG4gICAgbGV2ZWw6IG51bWJlcjtcclxuICAgIGN1cnJlbnRFeHBlcmllbmNlOiBudW1iZXI7XHJcbiAgICBleHBlcmllbmNlVG9OZXh0TGV2ZWw6IG51bWJlcjtcclxuICAgIGNoYWxsYW5nZUNvbXBsZXRlZDogbnVtYmVyO1xyXG4gICAgYWN0aXZlQ2hhbGxhbmdlOiBDaGFsbGFuZ2U7XHJcbiAgICBsZXZlbFVwOiAoKSA9PiB2b2lkO1xyXG4gICAgc3RhcnROZXdDaGFsbGFuZ2U6ICgpID0+IHZvaWQ7XHJcbiAgICByZXNldENoYWxsYW5nZTogKCkgPT4gdm9pZDtcclxuICAgIGNvbXBsZXRlQ2hhbGxhbmdlOiAoKSA9PiB2b2lkOyBcclxufVxyXG5cclxuaW50ZXJmYWNlIENoYWxsYW5nZXNQcm92aWRlclByb3Bze1xyXG4gICAgY2hpbGRyZW46IFJlYWN0Tm9kZTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IENoYWxsYW5nZXNDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSBhcyBDaGFsbGFuZ2VzQ29udGV4dERhdGEpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIENoYWxsYW5nZXNQcm92aWRlcih7IGNoaWxkcmVuIH06IENoYWxsYW5nZXNQcm92aWRlclByb3BzKXtcclxuICAgIGNvbnN0IFtsZXZlbCwgc2V0TGV2ZWxdID0gdXNlU3RhdGUoMSk7XHJcbiAgICBjb25zdCBbY3VycmVudEV4cGVyaWVuY2UsIHNldEN1cnJlbnRFeHBlcmllbmNlXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW2NoYWxsYW5nZUNvbXBsZXRlZCwgc2V0Q2hhbGxhbmdlQ29tcGxldGVkXSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICAgIGNvbnN0IFthY3RpdmVDaGFsbGFuZ2UsIHNldEFjdGl2ZUNoYWxsYW5nZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgICBjb25zdCBleHBlcmllbmNlVG9OZXh0TGV2ZWwgPSBNYXRoLnBvdygobGV2ZWwgKyAxKSAqIDQsIDIpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIE5vdGlmaWNhdGlvbi5yZXF1ZXN0UGVybWlzc2lvbigpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIENvb2tpZXMuc2V0KCdsZXZlbCcsIFN0cmluZyhsZXZlbCkpO1xyXG4gICAgICAgIENvb2tpZXMuc2V0KCdjdXJyZW50RXhwZXJpZW5jZScsIFN0cmluZyhjdXJyZW50RXhwZXJpZW5jZSkpO1xyXG4gICAgICAgIENvb2tpZXMuc2V0KCdjaGFsbGFuZ2VzQ29tcGxldGVkJywgU3RyaW5nKGNoYWxsYW5nZUNvbXBsZXRlZCkpO1xyXG4gICAgfSwgW2xldmVsLCBjdXJyZW50RXhwZXJpZW5jZSwgY2hhbGxhbmdlQ29tcGxldGVkXSk7XHJcblxyXG4gICAgZnVuY3Rpb24gbGV2ZWxVcCgpe1xyXG4gICAgICAgIHNldExldmVsKGxldmVsICsgMSk7XHJcbiAgICAgICAgYWxlcnQoYFBhcmFiw6lucyB2b2PDqiBmb2kgcGFyYSBvIGxldmVsICR7bGV2ZWwrMX1gKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzdGFydE5ld0NoYWxsYW5nZSgpe1xyXG4gICAgICAgIGNvbnN0IHJhbWRvbUNoYWxsYW5nZXNJbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNoYWxsYW5nZXMubGVuZ3RoKTtcclxuICAgICAgICBjb25zdCBjaGFsbGFuZ2UgPSBjaGFsbGFuZ2VzW3JhbWRvbUNoYWxsYW5nZXNJbmRleF07XHJcblxyXG4gICAgICAgIHNldEFjdGl2ZUNoYWxsYW5nZShjaGFsbGFuZ2UpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIG5ldyBBdWRpbygnL25vdGlmaWNhdGlvbi5tcDMnKS5wbGF5KCk7XHJcblxyXG4gICAgICAgIGlmKE5vdGlmaWNhdGlvbi5wZXJtaXNzaW9uID09PSAnZ3JhbnRlZCcpe1xyXG4gICAgICAgICAgICBuZXcgTm90aWZpY2F0aW9uKCdOb3ZvIGRlc2FmaW8hIDozJyx7XHJcbiAgICAgICAgICAgICAgICBib2R5OiBgVmFsZW5kbyAke2NoYWxsYW5nZS5hbW91bnR9eHAhYCxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVzZXRDaGFsbGFuZ2UoKXtcclxuICAgICAgICBzZXRBY3RpdmVDaGFsbGFuZ2UobnVsbCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY29tcGxldGVDaGFsbGFuZ2UoKXtcclxuICAgICAgICBpZighYWN0aXZlQ2hhbGxhbmdlKXtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgeyBhbW91bnQgfSA9IGFjdGl2ZUNoYWxsYW5nZTtcclxuXHJcbiAgICAgICAgbGV0IGZpbmFsRXhwZXJpZW5jZSA9IGN1cnJlbnRFeHBlcmllbmNlICsgYW1vdW50O1xyXG5cclxuICAgICAgICBpZihmaW5hbEV4cGVyaWVuY2UgPj0gZXhwZXJpZW5jZVRvTmV4dExldmVsKXtcclxuICAgICAgICAgICAgZmluYWxFeHBlcmllbmNlID0gZmluYWxFeHBlcmllbmNlIC0gZXhwZXJpZW5jZVRvTmV4dExldmVsO1xyXG4gICAgICAgICAgICBsZXZlbFVwKCk7ICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRDdXJyZW50RXhwZXJpZW5jZShmaW5hbEV4cGVyaWVuY2UpO1xyXG4gICAgICAgIHNldEFjdGl2ZUNoYWxsYW5nZShudWxsKTtcclxuICAgICAgICBzZXRDaGFsbGFuZ2VDb21wbGV0ZWQoY2hhbGxhbmdlQ29tcGxldGVkICsgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q2hhbGxhbmdlc0NvbnRleHQuUHJvdmlkZXIgXHJcbiAgICAgICAgICAgIHZhbHVlPXt7IFxyXG4gICAgICAgICAgICAgICAgbGV2ZWwsIFxyXG4gICAgICAgICAgICAgICAgY3VycmVudEV4cGVyaWVuY2UsXHJcbiAgICAgICAgICAgICAgICBleHBlcmllbmNlVG9OZXh0TGV2ZWwsXHJcbiAgICAgICAgICAgICAgICBjaGFsbGFuZ2VDb21wbGV0ZWQsIFxyXG4gICAgICAgICAgICAgICAgYWN0aXZlQ2hhbGxhbmdlLFxyXG4gICAgICAgICAgICAgICAgbGV2ZWxVcCxcclxuICAgICAgICAgICAgICAgIHN0YXJ0TmV3Q2hhbGxhbmdlLFxyXG4gICAgICAgICAgICAgICAgcmVzZXRDaGFsbGFuZ2UsXHJcbiAgICAgICAgICAgICAgICBjb21wbGV0ZUNoYWxsYW5nZVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgeyBjaGlsZHJlbiB9XHJcbiAgICAgICAgPC9DaGFsbGFuZ2VzQ29udGV4dC5Qcm92aWRlcj5cclxuICAgICk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9
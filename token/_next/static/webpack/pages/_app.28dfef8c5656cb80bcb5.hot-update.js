webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/services/Asset.service.ts":
/*!***************************************!*\
  !*** ./src/services/Asset.service.ts ***!
  \***************************************/
/*! exports provided: AssetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetService", function() { return AssetService; });
/* harmony import */ var C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Environment_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Environment.service */ "./src/services/Environment.service.ts");



var AssetService = /*#__PURE__*/function () {
  function AssetService() {
    Object(C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AssetService);
  }

  Object(C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AssetService, null, [{
    key: "getPath",

    /**
     * Enriches file path related to environment (production/dev)
     * @param filePath Path to media
     */
    value: function getPath(filePath) {
      return _Environment_service__WEBPACK_IMPORTED_MODULE_2__["EnvironmentService"].isProductionEnv() ? "/token/".concat(filePath) : filePath;
    }
  }]);

  return AssetService;
}();

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/services/Environment.service.ts":
/*!*********************************************!*\
  !*** ./src/services/Environment.service.ts ***!
  \*********************************************/
/*! exports provided: EnvironmentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnvironmentService", function() { return EnvironmentService; });
/* harmony import */ var C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");


var EnvironmentService = /*#__PURE__*/function () {
  function EnvironmentService() {
    Object(C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, EnvironmentService);
  }

  Object(C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(EnvironmentService, null, [{
    key: "isProductionEnv",
    value: function isProductionEnv() {
      return false;
    }
  }]);

  return EnvironmentService;
}();

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlcnZpY2VzL0Fzc2V0LnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zZXJ2aWNlcy9FbnZpcm9ubWVudC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbIkFzc2V0U2VydmljZSIsImZpbGVQYXRoIiwiRW52aXJvbm1lbnRTZXJ2aWNlIiwiaXNQcm9kdWN0aW9uRW52Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRU8sSUFBTUEsWUFBYjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUNJO0FBQ0o7QUFDQTtBQUNBO0FBSkEsNEJBSzBCQyxRQUwxQixFQUs0QztBQUNwQyxhQUFPQyx1RUFBa0IsQ0FBQ0MsZUFBbkIsc0JBQWlERixRQUFqRCxJQUE4REEsUUFBckU7QUFDSDtBQVBMOztBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0RPLElBQU1DLGtCQUFiO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSxzQ0FDb0M7QUFDNUI7QUFDSDtBQUhMOztBQUFBO0FBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4yOGRmZWY4YzU2NTZjYjgwYmNiNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRW52aXJvbm1lbnRTZXJ2aWNlIH0gZnJvbSBcIi4vRW52aXJvbm1lbnQuc2VydmljZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEFzc2V0U2VydmljZSB7XHJcbiAgICAvKipcclxuICAgICAqIEVucmljaGVzIGZpbGUgcGF0aCByZWxhdGVkIHRvIGVudmlyb25tZW50IChwcm9kdWN0aW9uL2RldilcclxuICAgICAqIEBwYXJhbSBmaWxlUGF0aCBQYXRoIHRvIG1lZGlhXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0UGF0aChmaWxlUGF0aDogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIEVudmlyb25tZW50U2VydmljZS5pc1Byb2R1Y3Rpb25FbnYoKSA/IGAvdG9rZW4vJHtmaWxlUGF0aH1gIDogZmlsZVBhdGg7XHJcbiAgICB9XHJcbn0iLCJcclxuZXhwb3J0IGNsYXNzIEVudmlyb25tZW50U2VydmljZSB7XHJcbiAgICBwdWJsaWMgc3RhdGljIGlzUHJvZHVjdGlvbkVudigpIHtcclxuICAgICAgICByZXR1cm4gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJztcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=
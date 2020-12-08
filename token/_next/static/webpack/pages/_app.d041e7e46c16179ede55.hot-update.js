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
      return _Environment_service__WEBPACK_IMPORTED_MODULE_2__["EnvironmentService"].isProductionEnv() ? "token.wavect.io/token/".concat(filePath) : "http://localhost:300/".concat(filePath);
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlcnZpY2VzL0Fzc2V0LnNlcnZpY2UudHMiXSwibmFtZXMiOlsiQXNzZXRTZXJ2aWNlIiwiZmlsZVBhdGgiLCJFbnZpcm9ubWVudFNlcnZpY2UiLCJpc1Byb2R1Y3Rpb25FbnYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFTyxJQUFNQSxZQUFiO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQ0k7QUFDSjtBQUNBO0FBQ0E7QUFKQSw0QkFLMEJDLFFBTDFCLEVBSzRDO0FBQ3BDLGFBQU9DLHVFQUFrQixDQUFDQyxlQUFuQixxQ0FBZ0VGLFFBQWhFLG1DQUFxR0EsUUFBckcsQ0FBUDtBQUNIO0FBUEw7O0FBQUE7QUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmQwNDFlN2U0NmMxNjE3OWVkZTU1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbnZpcm9ubWVudFNlcnZpY2UgfSBmcm9tIFwiLi9FbnZpcm9ubWVudC5zZXJ2aWNlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQXNzZXRTZXJ2aWNlIHtcclxuICAgIC8qKlxyXG4gICAgICogRW5yaWNoZXMgZmlsZSBwYXRoIHJlbGF0ZWQgdG8gZW52aXJvbm1lbnQgKHByb2R1Y3Rpb24vZGV2KVxyXG4gICAgICogQHBhcmFtIGZpbGVQYXRoIFBhdGggdG8gbWVkaWFcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXRQYXRoKGZpbGVQYXRoOiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gRW52aXJvbm1lbnRTZXJ2aWNlLmlzUHJvZHVjdGlvbkVudigpID8gYHRva2VuLndhdmVjdC5pby90b2tlbi8ke2ZpbGVQYXRofWAgOiBgaHR0cDovL2xvY2FsaG9zdDozMDAvJHtmaWxlUGF0aH1gO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==
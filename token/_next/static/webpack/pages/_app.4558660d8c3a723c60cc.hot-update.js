webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/services/Event.service.ts":
/*!***************************************!*\
  !*** ./src/services/Event.service.ts ***!
  \***************************************/
/*! exports provided: default, EVENT_BLOCKCHAIN_DATA_CHANGED */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVENT_BLOCKCHAIN_DATA_CHANGED", function() { return EVENT_BLOCKCHAIN_DATA_CHANGED; });
/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! eventemitter3 */ "./node_modules/eventemitter3/index.js");
/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(eventemitter3__WEBPACK_IMPORTED_MODULE_0__);

var eventEmitter = new eventemitter3__WEBPACK_IMPORTED_MODULE_0___default.a();
var Emitter = {
  on: function on(event, fn) {
    return eventEmitter.on(event, fn);
  },
  once: function once(event, fn) {
    return eventEmitter.once(event, fn);
  },
  off: function off(event, fn) {
    return eventEmitter.off(event, fn);
  },
  emit: function emit(event, payload) {
    return eventEmitter.emit(event, payload);
  }
};
Object.freeze(Emitter);
console.log("CALLED: ", Emitter);
/* harmony default export */ __webpack_exports__["default"] = (Emitter); // List global events here

var EVENT_BLOCKCHAIN_DATA_CHANGED = 'EVENT_BLOCKCHAIN_DATA_CHANGED';

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlcnZpY2VzL0V2ZW50LnNlcnZpY2UudHMiXSwibmFtZXMiOlsiZXZlbnRFbWl0dGVyIiwiRXZlbnRFbWl0dGVyIiwiRW1pdHRlciIsIm9uIiwiZXZlbnQiLCJmbiIsIm9uY2UiLCJvZmYiLCJlbWl0IiwicGF5bG9hZCIsIk9iamVjdCIsImZyZWV6ZSIsImNvbnNvbGUiLCJsb2ciLCJFVkVOVF9CTE9DS0NIQUlOX0RBVEFfQ0hBTkdFRCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQSxJQUFNQSxZQUFZLEdBQUcsSUFBSUMsb0RBQUosRUFBckI7QUFFQSxJQUFNQyxPQUFPLEdBQUc7QUFDZEMsSUFBRSxFQUFFLFlBQUNDLEtBQUQsRUFBUUMsRUFBUjtBQUFBLFdBQWVMLFlBQVksQ0FBQ0csRUFBYixDQUFnQkMsS0FBaEIsRUFBdUJDLEVBQXZCLENBQWY7QUFBQSxHQURVO0FBRWRDLE1BQUksRUFBRSxjQUFDRixLQUFELEVBQVFDLEVBQVI7QUFBQSxXQUFlTCxZQUFZLENBQUNNLElBQWIsQ0FBa0JGLEtBQWxCLEVBQXlCQyxFQUF6QixDQUFmO0FBQUEsR0FGUTtBQUdkRSxLQUFHLEVBQUUsYUFBQ0gsS0FBRCxFQUFRQyxFQUFSO0FBQUEsV0FBZUwsWUFBWSxDQUFDTyxHQUFiLENBQWlCSCxLQUFqQixFQUF3QkMsRUFBeEIsQ0FBZjtBQUFBLEdBSFM7QUFJZEcsTUFBSSxFQUFFLGNBQUNKLEtBQUQsRUFBUUssT0FBUjtBQUFBLFdBQXFCVCxZQUFZLENBQUNRLElBQWIsQ0FBa0JKLEtBQWxCLEVBQXlCSyxPQUF6QixDQUFyQjtBQUFBO0FBSlEsQ0FBaEI7QUFPQUMsTUFBTSxDQUFDQyxNQUFQLENBQWNULE9BQWQ7QUFDQVUsT0FBTyxDQUFDQyxHQUFSLENBQVksVUFBWixFQUF1QlgsT0FBdkI7QUFDZUEsc0VBQWYsRSxDQUVBOztBQUNPLElBQU1ZLDZCQUE2QixHQUFHLCtCQUF0QyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjQ1NTg2NjBkOGMzYTcyM2M2MGNjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJ2V2ZW50ZW1pdHRlcjMnO1xyXG5cclxuY29uc3QgZXZlbnRFbWl0dGVyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuY29uc3QgRW1pdHRlciA9IHtcclxuICBvbjogKGV2ZW50LCBmbikgPT4gZXZlbnRFbWl0dGVyLm9uKGV2ZW50LCBmbiksXHJcbiAgb25jZTogKGV2ZW50LCBmbikgPT4gZXZlbnRFbWl0dGVyLm9uY2UoZXZlbnQsIGZuKSxcclxuICBvZmY6IChldmVudCwgZm4pID0+IGV2ZW50RW1pdHRlci5vZmYoZXZlbnQsIGZuKSxcclxuICBlbWl0OiAoZXZlbnQsIHBheWxvYWQ/KSA9PiBldmVudEVtaXR0ZXIuZW1pdChldmVudCwgcGF5bG9hZClcclxufVxyXG5cclxuT2JqZWN0LmZyZWV6ZShFbWl0dGVyKTtcclxuY29uc29sZS5sb2coXCJDQUxMRUQ6IFwiLEVtaXR0ZXIpXHJcbmV4cG9ydCBkZWZhdWx0IEVtaXR0ZXI7XHJcblxyXG4vLyBMaXN0IGdsb2JhbCBldmVudHMgaGVyZVxyXG5leHBvcnQgY29uc3QgRVZFTlRfQkxPQ0tDSEFJTl9EQVRBX0NIQU5HRUQgPSAnRVZFTlRfQkxPQ0tDSEFJTl9EQVRBX0NIQU5HRUQnIl0sInNvdXJjZVJvb3QiOiIifQ==
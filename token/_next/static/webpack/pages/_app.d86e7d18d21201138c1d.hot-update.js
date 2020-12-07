webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/pages/api/Main/Main.tsx":
/*!*************************************!*\
  !*** ./src/pages/api/Main/Main.tsx ***!
  \*************************************/
/*! exports provided: Main, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Main", function() { return Main; });
/* harmony import */ var C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var src_services_Blockchain_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/services/Blockchain.service */ "./src/services/Blockchain.service.ts");
/* harmony import */ var src_services_Event_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/services/Event.service */ "./src/services/Event.service.ts");
/* harmony import */ var _BgVideo_BgVideo__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../BgVideo/BgVideo */ "./src/pages/api/BgVideo/BgVideo.tsx");
/* harmony import */ var _ControlPanel_ControlPanel__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../ControlPanel/ControlPanel */ "./src/pages/api/ControlPanel/ControlPanel.tsx");
/* harmony import */ var _LoadingIndicator_LoadingIndicator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../LoadingIndicator/LoadingIndicator */ "./src/pages/api/LoadingIndicator/LoadingIndicator.tsx");











var _jsxFileName = "C:\\Users\\WSDT\\Desktop\\hugo\\wavect.io\\token\\src\\pages\\api\\Main\\Main.tsx";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }







var Main = /*#__PURE__*/function (_Component) {
  Object(C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Main, _Component);

  var _super = _createSuper(Main);

  function Main() {
    var _this;

    Object(C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Main);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      wavectTokenBalance: '0',
      stakingBalance: '0',
      isLoading: true
    });

    return _this;
  }

  Object(C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Main, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = Object(C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var _this2 = this;

        return C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                // Load blockchain data once
                src_services_Event_service__WEBPACK_IMPORTED_MODULE_12__["default"].on(src_services_Event_service__WEBPACK_IMPORTED_MODULE_12__["EVENT_BLOCKCHAIN_DATA_CHANGED"], /*#__PURE__*/Object(C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
                  return C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          _context.t0 = _this2;
                          _context.next = 3;
                          return src_services_Blockchain_service__WEBPACK_IMPORTED_MODULE_11__["BlockchainService"].getWavectTokenBalance(true);

                        case 3:
                          _context.t1 = _context.sent;
                          _context.next = 6;
                          return src_services_Blockchain_service__WEBPACK_IMPORTED_MODULE_11__["BlockchainService"].getStakingBalance(true);

                        case 6:
                          _context.t2 = _context.sent;
                          _context.t3 = {
                            wavectTokenBalance: _context.t1,
                            stakingBalance: _context.t2,
                            isLoading: false
                          };

                          _context.t0.setState.call(_context.t0, _context.t3);

                        case 9:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee);
                })));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "loadMaintenanceScreen",
    value: function loadMaintenanceScreen() {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("h1", {
        className: "text-white text-5xl",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("strong", {
          children: "WavectToken"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 48
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 76
        }, this), "coming soon.."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 12
      }, this);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_BgVideo_BgVideo__WEBPACK_IMPORTED_MODULE_13__["BgVideo"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 7
        }, this), this.props.isConnectingToBlockchain || this.state.isLoading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_LoadingIndicator_LoadingIndicator__WEBPACK_IMPORTED_MODULE_15__["LoadingIndicator"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 13
        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
          id: "content",
          className: "mt-3 absolute inset-0 flex items-center justify-center",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
            className: "bg-black bg-opacity-80 p-6 rounded-md w-max",
            children: this.props.showMaintenanceMode ? this.loadMaintenanceScreen() : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_ControlPanel_ControlPanel__WEBPACK_IMPORTED_MODULE_14__["ControlPanel"], {
              wavectTokenBalance: this.state.wavectTokenBalance,
              stakingBalance: this.state.stakingBalance
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 21
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 13
        }, this)]
      }, void 0, true);
    }
  }]);

  return Main;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (Main);

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2FwaS9NYWluL01haW4udHN4Il0sIm5hbWVzIjpbIk1haW4iLCJ3YXZlY3RUb2tlbkJhbGFuY2UiLCJzdGFraW5nQmFsYW5jZSIsImlzTG9hZGluZyIsIkVtaXR0ZXIiLCJvbiIsIkVWRU5UX0JMT0NLQ0hBSU5fREFUQV9DSEFOR0VEIiwiQmxvY2tjaGFpblNlcnZpY2UiLCJnZXRXYXZlY3RUb2tlbkJhbGFuY2UiLCJnZXRTdGFraW5nQmFsYW5jZSIsInNldFN0YXRlIiwicHJvcHMiLCJpc0Nvbm5lY3RpbmdUb0Jsb2NrY2hhaW4iLCJzdGF0ZSIsInNob3dNYWludGVuYW5jZU1vZGUiLCJsb2FkTWFpbnRlbmFuY2VTY3JlZW4iLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUtPLElBQU1BLElBQWI7QUFBQTs7QUFBQTs7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQSw0VEFFc0I7QUFDbEJDLHdCQUFrQixFQUFFLEdBREY7QUFFbEJDLG9CQUFjLEVBQUUsR0FGRTtBQUdsQkMsZUFBUyxFQUFFO0FBSE8sS0FGdEI7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBU0k7QUFDQUMsbUZBQU8sQ0FBQ0MsRUFBUixDQUFXQyx5RkFBWCw0U0FBMEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdDQUN4QyxNQUR3QztBQUFBO0FBQUEsaUNBRVhDLGtGQUFpQixDQUFDQyxxQkFBbEIsQ0FBd0MsSUFBeEMsQ0FGVzs7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FHZkQsa0ZBQWlCLENBQUNFLGlCQUFsQixDQUFvQyxJQUFwQyxDQUhlOztBQUFBO0FBQUE7QUFBQTtBQUV0Q1IsOENBRnNDO0FBR3RDQywwQ0FIc0M7QUFJdENDLHFDQUpzQyxFQUkzQjtBQUoyQjs7QUFBQSxzQ0FDbkNPLFFBRG1DOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUExQzs7QUFWSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0Q0FtQmtDO0FBQzlCLDBCQUFPO0FBQUksaUJBQVMsRUFBQyxxQkFBZDtBQUFBLGdDQUFvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBcEMsZUFBZ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBaEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQVA7QUFDRDtBQXJCSDtBQUFBO0FBQUEsNkJBdUJXO0FBQ1AsMEJBQ0U7QUFBQSxnQ0FDQSxxRUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURBLEVBRUUsS0FBS0MsS0FBTCxDQUFXQyx3QkFBWCxJQUF1QyxLQUFLQyxLQUFMLENBQVdWLFNBQWxELGdCQUNJLHFFQUFDLG9GQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZ0JBRUk7QUFBSyxZQUFFLEVBQUMsU0FBUjtBQUFrQixtQkFBUyxFQUFDLHdEQUE1QjtBQUFBLGlDQUNFO0FBQUsscUJBQVMsRUFBQyw2Q0FBZjtBQUFBLHNCQUNJLEtBQUtRLEtBQUwsQ0FBV0csbUJBQVgsR0FDRSxLQUFLQyxxQkFBTCxFQURGLGdCQUVFLHFFQUFDLHdFQUFEO0FBQWMsZ0NBQWtCLEVBQUUsS0FBS0YsS0FBTCxDQUFXWixrQkFBN0M7QUFDRSw0QkFBYyxFQUFFLEtBQUtZLEtBQUwsQ0FBV1g7QUFEN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpOO0FBQUEsc0JBREY7QUFnQkQ7QUF4Q0g7O0FBQUE7QUFBQSxFQUEwQmMsZ0RBQTFCO0FBMkNlaEIsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5kODZlN2QxOGQyMTIwMTEzOGMxZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBCbG9ja2NoYWluU2VydmljZSB9IGZyb20gJ3NyYy9zZXJ2aWNlcy9CbG9ja2NoYWluLnNlcnZpY2UnO1xyXG5pbXBvcnQgRW1pdHRlciwgeyBFVkVOVF9CTE9DS0NIQUlOX0RBVEFfQ0hBTkdFRCB9IGZyb20gJ3NyYy9zZXJ2aWNlcy9FdmVudC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTm90aWZpY2F0aW9uU2VydmljZSB9IGZyb20gJ3NyYy9zZXJ2aWNlcy9Ob3RpZmljYXRpb24uc2VydmljZSc7XHJcbmltcG9ydCB7IEJnVmlkZW8gfSBmcm9tICcuLi9CZ1ZpZGVvL0JnVmlkZW8nO1xyXG5pbXBvcnQgeyBDb250cm9sUGFuZWwgfSBmcm9tICcuLi9Db250cm9sUGFuZWwvQ29udHJvbFBhbmVsJztcclxuaW1wb3J0IHsgTG9hZGluZ0luZGljYXRvciB9IGZyb20gJy4uL0xvYWRpbmdJbmRpY2F0b3IvTG9hZGluZ0luZGljYXRvcic7XHJcbmltcG9ydCB7IElNYWluUHJvcHMgfSBmcm9tICcuL0lNYWluLnByb3BzJztcclxuaW1wb3J0IHsgSU1haW5TdGF0ZSB9IGZyb20gJy4vSU1haW4uc3RhdGUnO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBNYWluIGV4dGVuZHMgQ29tcG9uZW50PElNYWluUHJvcHMsIElNYWluU3RhdGU+IHtcclxuXHJcbiAgc3RhdGU6IElNYWluU3RhdGUgPSB7XHJcbiAgICB3YXZlY3RUb2tlbkJhbGFuY2U6ICcwJyxcclxuICAgIHN0YWtpbmdCYWxhbmNlOiAnMCcsXHJcbiAgICBpc0xvYWRpbmc6IHRydWUsXHJcbiAgfTtcclxuXHJcbiAgYXN5bmMgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAvLyBMb2FkIGJsb2NrY2hhaW4gZGF0YSBvbmNlXHJcbiAgICBFbWl0dGVyLm9uKEVWRU5UX0JMT0NLQ0hBSU5fREFUQV9DSEFOR0VELCBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIHdhdmVjdFRva2VuQmFsYW5jZTogKGF3YWl0IEJsb2NrY2hhaW5TZXJ2aWNlLmdldFdhdmVjdFRva2VuQmFsYW5jZSh0cnVlKSksXHJcbiAgICAgICAgc3Rha2luZ0JhbGFuY2U6IChhd2FpdCBCbG9ja2NoYWluU2VydmljZS5nZXRTdGFraW5nQmFsYW5jZSh0cnVlKSksXHJcbiAgICAgICAgaXNMb2FkaW5nOiBmYWxzZSxcclxuICAgICAgfSk7XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBsb2FkTWFpbnRlbmFuY2VTY3JlZW4oKSB7XHJcbiAgICByZXR1cm4gPGgxIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdGV4dC01eGxcIj48c3Ryb25nPldhdmVjdFRva2VuPC9zdHJvbmc+PGJyIC8+Y29taW5nIHNvb24uLjwvaDE+XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICA8QmdWaWRlbyAvPlxyXG4gICAgICB7IHRoaXMucHJvcHMuaXNDb25uZWN0aW5nVG9CbG9ja2NoYWluIHx8IHRoaXMuc3RhdGUuaXNMb2FkaW5nXHJcbiAgICAgICAgICA/IDxMb2FkaW5nSW5kaWNhdG9yIC8+XHJcbiAgICAgICAgICA6IDxkaXYgaWQ9XCJjb250ZW50XCIgY2xhc3NOYW1lPVwibXQtMyBhYnNvbHV0ZSBpbnNldC0wIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ibGFjayBiZy1vcGFjaXR5LTgwIHAtNiByb3VuZGVkLW1kIHctbWF4XCI+XHJcbiAgICAgICAgICAgICAgICB7IHRoaXMucHJvcHMuc2hvd01haW50ZW5hbmNlTW9kZSBcclxuICAgICAgICAgICAgICAgICAgPyB0aGlzLmxvYWRNYWludGVuYW5jZVNjcmVlbigpXHJcbiAgICAgICAgICAgICAgICAgIDogPENvbnRyb2xQYW5lbCB3YXZlY3RUb2tlbkJhbGFuY2U9e3RoaXMuc3RhdGUud2F2ZWN0VG9rZW5CYWxhbmNlfSBcclxuICAgICAgICAgICAgICAgICAgICAgIHN0YWtpbmdCYWxhbmNlPXt0aGlzLnN0YXRlLnN0YWtpbmdCYWxhbmNlfSAvPiB9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICB9XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haW47XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
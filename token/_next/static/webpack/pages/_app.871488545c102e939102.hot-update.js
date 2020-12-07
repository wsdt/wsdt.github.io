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
                          return src_services_Blockchain_service__WEBPACK_IMPORTED_MODULE_11__["BlockchainService"].getWavectTokenBalance();

                        case 3:
                          _context.t1 = _context.sent;
                          _context.next = 6;
                          return src_services_Blockchain_service__WEBPACK_IMPORTED_MODULE_11__["BlockchainService"].getStakingBalance();

                        case 6:
                          _context.t2 = _context.sent;
                          _context.t3 = {
                            wavectTokenBalance: _context.t1,
                            stakingBalance: _context.t2,
                            isLoading: false
                          };

                          _context.t0.setState.call(_context.t0, _context.t3);

                          console.log("B: ", _this2.state.stakingBalance, _this2.state.wavectTokenBalance);

                        case 10:
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
          lineNumber: 33,
          columnNumber: 48
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 76
        }, this), "coming soon.."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 12
      }, this);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_BgVideo_BgVideo__WEBPACK_IMPORTED_MODULE_13__["BgVideo"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 7
        }, this), this.props.isConnectingToBlockchain || this.state.isLoading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_LoadingIndicator_LoadingIndicator__WEBPACK_IMPORTED_MODULE_15__["LoadingIndicator"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
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
              lineNumber: 46,
              columnNumber: 21
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2FwaS9NYWluL01haW4udHN4Il0sIm5hbWVzIjpbIk1haW4iLCJ3YXZlY3RUb2tlbkJhbGFuY2UiLCJzdGFraW5nQmFsYW5jZSIsImlzTG9hZGluZyIsIkVtaXR0ZXIiLCJvbiIsIkVWRU5UX0JMT0NLQ0hBSU5fREFUQV9DSEFOR0VEIiwiQmxvY2tjaGFpblNlcnZpY2UiLCJnZXRXYXZlY3RUb2tlbkJhbGFuY2UiLCJnZXRTdGFraW5nQmFsYW5jZSIsInNldFN0YXRlIiwiY29uc29sZSIsImxvZyIsInN0YXRlIiwicHJvcHMiLCJpc0Nvbm5lY3RpbmdUb0Jsb2NrY2hhaW4iLCJzaG93TWFpbnRlbmFuY2VNb2RlIiwibG9hZE1haW50ZW5hbmNlU2NyZWVuIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFLTyxJQUFNQSxJQUFiO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUEsNFRBRXNCO0FBQ2xCQyx3QkFBa0IsRUFBRSxHQURGO0FBRWxCQyxvQkFBYyxFQUFFLEdBRkU7QUFHbEJDLGVBQVMsRUFBRTtBQUhPLEtBRnRCOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVNJO0FBQ0FDLG1GQUFPLENBQUNDLEVBQVIsQ0FBV0MseUZBQVgsNFNBQTBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3Q0FDeEMsTUFEd0M7QUFBQTtBQUFBLGlDQUVaQyxrRkFBaUIsQ0FBQ0MscUJBQWxCLEVBRlk7O0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBR2hCRCxrRkFBaUIsQ0FBQ0UsaUJBQWxCLEVBSGdCOztBQUFBO0FBQUE7QUFBQTtBQUV0Q1IsOENBRnNDO0FBR3RDQywwQ0FIc0M7QUFJdENDLHFDQUpzQyxFQUkzQjtBQUoyQjs7QUFBQSxzQ0FDbkNPLFFBRG1DOztBQU14Q0MsaUNBQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQVosRUFBbUIsTUFBSSxDQUFDQyxLQUFMLENBQVdYLGNBQTlCLEVBQThDLE1BQUksQ0FBQ1csS0FBTCxDQUFXWixrQkFBekQ7O0FBTndDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUExQzs7QUFWSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0Q0FvQmtDO0FBQzlCLDBCQUFPO0FBQUksaUJBQVMsRUFBQyxxQkFBZDtBQUFBLGdDQUFvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBcEMsZUFBZ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBaEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQVA7QUFDRDtBQXRCSDtBQUFBO0FBQUEsNkJBd0JXO0FBQ1AsMEJBQ0U7QUFBQSxnQ0FDQSxxRUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURBLEVBRUUsS0FBS2EsS0FBTCxDQUFXQyx3QkFBWCxJQUF1QyxLQUFLRixLQUFMLENBQVdWLFNBQWxELGdCQUNJLHFFQUFDLG9GQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZ0JBRUk7QUFBSyxZQUFFLEVBQUMsU0FBUjtBQUFrQixtQkFBUyxFQUFDLHdEQUE1QjtBQUFBLGlDQUNFO0FBQUsscUJBQVMsRUFBQyw2Q0FBZjtBQUFBLHNCQUNJLEtBQUtXLEtBQUwsQ0FBV0UsbUJBQVgsR0FDRSxLQUFLQyxxQkFBTCxFQURGLGdCQUVFLHFFQUFDLHdFQUFEO0FBQWMsZ0NBQWtCLEVBQUUsS0FBS0osS0FBTCxDQUFXWixrQkFBN0M7QUFDRSw0QkFBYyxFQUFFLEtBQUtZLEtBQUwsQ0FBV1g7QUFEN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpOO0FBQUEsc0JBREY7QUFnQkQ7QUF6Q0g7O0FBQUE7QUFBQSxFQUEwQmdCLGdEQUExQjtBQTRDZWxCLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuODcxNDg4NTQ1YzEwMmU5MzkxMDIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgQmxvY2tjaGFpblNlcnZpY2UgfSBmcm9tICdzcmMvc2VydmljZXMvQmxvY2tjaGFpbi5zZXJ2aWNlJztcclxuaW1wb3J0IEVtaXR0ZXIsIHsgRVZFTlRfQkxPQ0tDSEFJTl9EQVRBX0NIQU5HRUQgfSBmcm9tICdzcmMvc2VydmljZXMvRXZlbnQuc2VydmljZSc7XHJcbmltcG9ydCB7IE5vdGlmaWNhdGlvblNlcnZpY2UgfSBmcm9tICdzcmMvc2VydmljZXMvTm90aWZpY2F0aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBCZ1ZpZGVvIH0gZnJvbSAnLi4vQmdWaWRlby9CZ1ZpZGVvJztcclxuaW1wb3J0IHsgQ29udHJvbFBhbmVsIH0gZnJvbSAnLi4vQ29udHJvbFBhbmVsL0NvbnRyb2xQYW5lbCc7XHJcbmltcG9ydCB7IExvYWRpbmdJbmRpY2F0b3IgfSBmcm9tICcuLi9Mb2FkaW5nSW5kaWNhdG9yL0xvYWRpbmdJbmRpY2F0b3InO1xyXG5pbXBvcnQgeyBJTWFpblByb3BzIH0gZnJvbSAnLi9JTWFpbi5wcm9wcyc7XHJcbmltcG9ydCB7IElNYWluU3RhdGUgfSBmcm9tICcuL0lNYWluLnN0YXRlJztcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgTWFpbiBleHRlbmRzIENvbXBvbmVudDxJTWFpblByb3BzLCBJTWFpblN0YXRlPiB7XHJcblxyXG4gIHN0YXRlOiBJTWFpblN0YXRlID0ge1xyXG4gICAgd2F2ZWN0VG9rZW5CYWxhbmNlOiAnMCcsXHJcbiAgICBzdGFraW5nQmFsYW5jZTogJzAnLFxyXG4gICAgaXNMb2FkaW5nOiB0cnVlLFxyXG4gIH07XHJcblxyXG4gIGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgLy8gTG9hZCBibG9ja2NoYWluIGRhdGEgb25jZVxyXG4gICAgRW1pdHRlci5vbihFVkVOVF9CTE9DS0NIQUlOX0RBVEFfQ0hBTkdFRCwgYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICB3YXZlY3RUb2tlbkJhbGFuY2U6IGF3YWl0IEJsb2NrY2hhaW5TZXJ2aWNlLmdldFdhdmVjdFRva2VuQmFsYW5jZSgpLFxyXG4gICAgICAgIHN0YWtpbmdCYWxhbmNlOiBhd2FpdCBCbG9ja2NoYWluU2VydmljZS5nZXRTdGFraW5nQmFsYW5jZSgpLFxyXG4gICAgICAgIGlzTG9hZGluZzogZmFsc2UsXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkI6IFwiLCB0aGlzLnN0YXRlLnN0YWtpbmdCYWxhbmNlLCB0aGlzLnN0YXRlLndhdmVjdFRva2VuQmFsYW5jZSlcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGxvYWRNYWludGVuYW5jZVNjcmVlbigpIHtcclxuICAgIHJldHVybiA8aDEgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB0ZXh0LTV4bFwiPjxzdHJvbmc+V2F2ZWN0VG9rZW48L3N0cm9uZz48YnIgLz5jb21pbmcgc29vbi4uPC9oMT5cclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgIDxCZ1ZpZGVvIC8+XHJcbiAgICAgIHsgdGhpcy5wcm9wcy5pc0Nvbm5lY3RpbmdUb0Jsb2NrY2hhaW4gfHwgdGhpcy5zdGF0ZS5pc0xvYWRpbmdcclxuICAgICAgICAgID8gPExvYWRpbmdJbmRpY2F0b3IgLz5cclxuICAgICAgICAgIDogPGRpdiBpZD1cImNvbnRlbnRcIiBjbGFzc05hbWU9XCJtdC0zIGFic29sdXRlIGluc2V0LTAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWJsYWNrIGJnLW9wYWNpdHktODAgcC02IHJvdW5kZWQtbWQgdy1tYXhcIj5cclxuICAgICAgICAgICAgICAgIHsgdGhpcy5wcm9wcy5zaG93TWFpbnRlbmFuY2VNb2RlIFxyXG4gICAgICAgICAgICAgICAgICA/IHRoaXMubG9hZE1haW50ZW5hbmNlU2NyZWVuKClcclxuICAgICAgICAgICAgICAgICAgOiA8Q29udHJvbFBhbmVsIHdhdmVjdFRva2VuQmFsYW5jZT17dGhpcy5zdGF0ZS53YXZlY3RUb2tlbkJhbGFuY2V9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgc3Rha2luZ0JhbGFuY2U9e3RoaXMuc3RhdGUuc3Rha2luZ0JhbGFuY2V9IC8+IH1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgIH1cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFpbjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
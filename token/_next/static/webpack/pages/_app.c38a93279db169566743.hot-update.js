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

                          _context.t4 = console;
                          _context.next = 12;
                          return _this2.state.stakingBalance;

                        case 12:
                          _context.t5 = _context.sent;
                          _context.next = 15;
                          return _this2.state.wavectTokenBalance;

                        case 15:
                          _context.t6 = _context.sent;

                          _context.t4.log.call(_context.t4, "B: ", _context.t5, _context.t6);

                        case 17:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2FwaS9NYWluL01haW4udHN4Il0sIm5hbWVzIjpbIk1haW4iLCJ3YXZlY3RUb2tlbkJhbGFuY2UiLCJzdGFraW5nQmFsYW5jZSIsImlzTG9hZGluZyIsIkVtaXR0ZXIiLCJvbiIsIkVWRU5UX0JMT0NLQ0hBSU5fREFUQV9DSEFOR0VEIiwiQmxvY2tjaGFpblNlcnZpY2UiLCJnZXRXYXZlY3RUb2tlbkJhbGFuY2UiLCJnZXRTdGFraW5nQmFsYW5jZSIsInNldFN0YXRlIiwiY29uc29sZSIsInN0YXRlIiwibG9nIiwicHJvcHMiLCJpc0Nvbm5lY3RpbmdUb0Jsb2NrY2hhaW4iLCJzaG93TWFpbnRlbmFuY2VNb2RlIiwibG9hZE1haW50ZW5hbmNlU2NyZWVuIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFLTyxJQUFNQSxJQUFiO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUEsNFRBRXNCO0FBQ2xCQyx3QkFBa0IsRUFBRSxHQURGO0FBRWxCQyxvQkFBYyxFQUFFLEdBRkU7QUFHbEJDLGVBQVMsRUFBRTtBQUhPLEtBRnRCOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVNJO0FBQ0FDLG1GQUFPLENBQUNDLEVBQVIsQ0FBV0MseUZBQVgsNFNBQTBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3Q0FDeEMsTUFEd0M7QUFBQTtBQUFBLGlDQUVaQyxrRkFBaUIsQ0FBQ0MscUJBQWxCLEVBRlk7O0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBR2hCRCxrRkFBaUIsQ0FBQ0UsaUJBQWxCLEVBSGdCOztBQUFBO0FBQUE7QUFBQTtBQUV0Q1IsOENBRnNDO0FBR3RDQywwQ0FIc0M7QUFJdENDLHFDQUpzQyxFQUkzQjtBQUoyQjs7QUFBQSxzQ0FDbkNPLFFBRG1DOztBQUFBLHdDQU14Q0MsT0FOd0M7QUFBQTtBQUFBLGlDQU1mLE1BQUksQ0FBQ0MsS0FBTCxDQUFXVixjQU5JOztBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQU1rQixNQUFJLENBQUNVLEtBQUwsQ0FBV1gsa0JBTjdCOztBQUFBO0FBQUE7O0FBQUEsc0NBTWhDWSxHQU5nQyxtQkFNNUIsS0FONEI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQTFDOztBQVZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRDQW9Ca0M7QUFDOUIsMEJBQU87QUFBSSxpQkFBUyxFQUFDLHFCQUFkO0FBQUEsZ0NBQW9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUFwQyxlQUFnRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUFoRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBUDtBQUNEO0FBdEJIO0FBQUE7QUFBQSw2QkF3Qlc7QUFDUCwwQkFDRTtBQUFBLGdDQUNBLHFFQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREEsRUFFRSxLQUFLQyxLQUFMLENBQVdDLHdCQUFYLElBQXVDLEtBQUtILEtBQUwsQ0FBV1QsU0FBbEQsZ0JBQ0kscUVBQUMsb0ZBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixnQkFFSTtBQUFLLFlBQUUsRUFBQyxTQUFSO0FBQWtCLG1CQUFTLEVBQUMsd0RBQTVCO0FBQUEsaUNBQ0U7QUFBSyxxQkFBUyxFQUFDLDZDQUFmO0FBQUEsc0JBQ0ksS0FBS1csS0FBTCxDQUFXRSxtQkFBWCxHQUNFLEtBQUtDLHFCQUFMLEVBREYsZ0JBRUUscUVBQUMsd0VBQUQ7QUFBYyxnQ0FBa0IsRUFBRSxLQUFLTCxLQUFMLENBQVdYLGtCQUE3QztBQUNFLDRCQUFjLEVBQUUsS0FBS1csS0FBTCxDQUFXVjtBQUQ3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSk47QUFBQSxzQkFERjtBQWdCRDtBQXpDSDs7QUFBQTtBQUFBLEVBQTBCZ0IsZ0RBQTFCO0FBNENlbEIsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5jMzhhOTMyNzlkYjE2OTU2Njc0My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBCbG9ja2NoYWluU2VydmljZSB9IGZyb20gJ3NyYy9zZXJ2aWNlcy9CbG9ja2NoYWluLnNlcnZpY2UnO1xyXG5pbXBvcnQgRW1pdHRlciwgeyBFVkVOVF9CTE9DS0NIQUlOX0RBVEFfQ0hBTkdFRCB9IGZyb20gJ3NyYy9zZXJ2aWNlcy9FdmVudC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTm90aWZpY2F0aW9uU2VydmljZSB9IGZyb20gJ3NyYy9zZXJ2aWNlcy9Ob3RpZmljYXRpb24uc2VydmljZSc7XHJcbmltcG9ydCB7IEJnVmlkZW8gfSBmcm9tICcuLi9CZ1ZpZGVvL0JnVmlkZW8nO1xyXG5pbXBvcnQgeyBDb250cm9sUGFuZWwgfSBmcm9tICcuLi9Db250cm9sUGFuZWwvQ29udHJvbFBhbmVsJztcclxuaW1wb3J0IHsgTG9hZGluZ0luZGljYXRvciB9IGZyb20gJy4uL0xvYWRpbmdJbmRpY2F0b3IvTG9hZGluZ0luZGljYXRvcic7XHJcbmltcG9ydCB7IElNYWluUHJvcHMgfSBmcm9tICcuL0lNYWluLnByb3BzJztcclxuaW1wb3J0IHsgSU1haW5TdGF0ZSB9IGZyb20gJy4vSU1haW4uc3RhdGUnO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBNYWluIGV4dGVuZHMgQ29tcG9uZW50PElNYWluUHJvcHMsIElNYWluU3RhdGU+IHtcclxuXHJcbiAgc3RhdGU6IElNYWluU3RhdGUgPSB7XHJcbiAgICB3YXZlY3RUb2tlbkJhbGFuY2U6ICcwJyxcclxuICAgIHN0YWtpbmdCYWxhbmNlOiAnMCcsXHJcbiAgICBpc0xvYWRpbmc6IHRydWUsXHJcbiAgfTtcclxuXHJcbiAgYXN5bmMgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAvLyBMb2FkIGJsb2NrY2hhaW4gZGF0YSBvbmNlXHJcbiAgICBFbWl0dGVyLm9uKEVWRU5UX0JMT0NLQ0hBSU5fREFUQV9DSEFOR0VELCBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIHdhdmVjdFRva2VuQmFsYW5jZTogYXdhaXQgQmxvY2tjaGFpblNlcnZpY2UuZ2V0V2F2ZWN0VG9rZW5CYWxhbmNlKCksXHJcbiAgICAgICAgc3Rha2luZ0JhbGFuY2U6IGF3YWl0IEJsb2NrY2hhaW5TZXJ2aWNlLmdldFN0YWtpbmdCYWxhbmNlKCksXHJcbiAgICAgICAgaXNMb2FkaW5nOiBmYWxzZSxcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiQjogXCIsIGF3YWl0IHRoaXMuc3RhdGUuc3Rha2luZ0JhbGFuY2UsIGF3YWl0IHRoaXMuc3RhdGUud2F2ZWN0VG9rZW5CYWxhbmNlKVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHByaXZhdGUgbG9hZE1haW50ZW5hbmNlU2NyZWVuKCkge1xyXG4gICAgcmV0dXJuIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRleHQtNXhsXCI+PHN0cm9uZz5XYXZlY3RUb2tlbjwvc3Ryb25nPjxiciAvPmNvbWluZyBzb29uLi48L2gxPlxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgPEJnVmlkZW8gLz5cclxuICAgICAgeyB0aGlzLnByb3BzLmlzQ29ubmVjdGluZ1RvQmxvY2tjaGFpbiB8fCB0aGlzLnN0YXRlLmlzTG9hZGluZ1xyXG4gICAgICAgICAgPyA8TG9hZGluZ0luZGljYXRvciAvPlxyXG4gICAgICAgICAgOiA8ZGl2IGlkPVwiY29udGVudFwiIGNsYXNzTmFtZT1cIm10LTMgYWJzb2x1dGUgaW5zZXQtMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctYmxhY2sgYmctb3BhY2l0eS04MCBwLTYgcm91bmRlZC1tZCB3LW1heFwiPlxyXG4gICAgICAgICAgICAgICAgeyB0aGlzLnByb3BzLnNob3dNYWludGVuYW5jZU1vZGUgXHJcbiAgICAgICAgICAgICAgICAgID8gdGhpcy5sb2FkTWFpbnRlbmFuY2VTY3JlZW4oKVxyXG4gICAgICAgICAgICAgICAgICA6IDxDb250cm9sUGFuZWwgd2F2ZWN0VG9rZW5CYWxhbmNlPXt0aGlzLnN0YXRlLndhdmVjdFRva2VuQmFsYW5jZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdGFraW5nQmFsYW5jZT17dGhpcy5zdGF0ZS5zdGFraW5nQmFsYW5jZX0gLz4gfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgfVxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9
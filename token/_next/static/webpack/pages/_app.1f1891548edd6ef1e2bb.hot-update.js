webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/pages/api/ControlPanel/ControlPanel.tsx":
/*!*****************************************************!*\
  !*** ./src/pages/api/ControlPanel/ControlPanel.tsx ***!
  \*****************************************************/
/*! exports provided: ControlPanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlPanel", function() { return ControlPanel; });
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
/* harmony import */ var src_services_Notification_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/services/Notification.service */ "./src/services/Notification.service.ts");
/* harmony import */ var _ControlPanel_module_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ControlPanel.module.css */ "./src/pages/api/ControlPanel/ControlPanel.module.css");
/* harmony import */ var _ControlPanel_module_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_ControlPanel_module_css__WEBPACK_IMPORTED_MODULE_13__);











var _jsxFileName = "C:\\Users\\WSDT\\Desktop\\hugo\\wavect.io\\token\\src\\pages\\api\\ControlPanel\\ControlPanel.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var ControlPanel = /*#__PURE__*/function (_Component) {
  Object(C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(ControlPanel, _Component);

  var _super = _createSuper(ControlPanel);

  function ControlPanel() {
    var _this;

    Object(C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, ControlPanel);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      ethAmountToPay: 1,
      isLoading: false
    });

    Object(C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "getRewardBalance", function () {
      return window.web3.utils.fromWei(_this.props.wavectTokenBalance, 'Ether');
    });

    Object(C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "getStakedCrypto", function () {
      return window.web3.utils.fromWei(_this.props.stakingBalance, 'Ether');
    });

    Object(C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "submitPayment", /*#__PURE__*/Object(C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var amount;
      return C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(_this.state.ethAmountToPay > 0)) {
                _context.next = 17;
                break;
              }

              _this.setState(_objectSpread(_objectSpread({}, _this.state), {}, {
                isLoading: true
              }));

              _context.prev = 2;
              amount = _this.state.ethAmountToPay.toString();
              amount = window.web3.utils.toWei(amount, 'Ether');
              _context.next = 7;
              return src_services_Blockchain_service__WEBPACK_IMPORTED_MODULE_11__["BlockchainService"].stakeTokens(amount);

            case 7:
              _context.next = 12;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](2);
              src_services_Notification_service__WEBPACK_IMPORTED_MODULE_12__["NotificationService"].showError('Could not transfer ETH to Wavect.', _context.t0);

            case 12:
              _context.prev = 12;

              _this.setState(_objectSpread(_objectSpread({}, _this.state), {}, {
                isLoading: false
              }));

              return _context.finish(12);

            case 15:
              _context.next = 18;
              break;

            case 17:
              src_services_Notification_service__WEBPACK_IMPORTED_MODULE_12__["NotificationService"].showError('You cannot transfer 0 or less ETH.');

            case 18:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 9, 12, 15]]);
    })));

    Object(C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "inputChangedHandler", function (event) {
      _this.setState(_objectSpread(_objectSpread({}, _this.state), {}, {
        ethAmountToPay: event.target.value
      }));
    });

    return _this;
  }

  Object(C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(ControlPanel, [{
    key: "loadPaymentInput",
    value: function loadPaymentInput() {
      var _this2 = this;

      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
          className: _ControlPanel_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.paymentInput,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("label", {
            htmlFor: "price",
            className: "block text-sm font-medium text-gray-700",
            children: "Price"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 9
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
            className: "mt-1 relative rounded-md shadow-sm",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
              className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("span", {
                className: "text-gray-500 sm:text-sm",
                children: "\u039E"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 46,
                columnNumber: 13
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 11
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("input", {
              type: "text",
              name: "price",
              id: "price",
              className: "p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md text-black",
              placeholder: "0.00",
              value: this.state.ethAmountToPay,
              onChange: function onChange(event) {
                return _this2.inputChangedHandler(event);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 11
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
              className: "absolute inset-y-0 right-0 flex items-center",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("label", {
                htmlFor: "currency",
                className: "sr-only",
                children: "Currency"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 51,
                columnNumber: 13
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("select", {
                id: "Currency",
                name: "currency",
                className: "focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("option", {
                  children: "ETH"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 53,
                  columnNumber: 15
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 52,
                columnNumber: 13
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 11
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 9
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("button", {
          className: "align-middle mt-4 w-full h-12 px-6 text-blue-100 transition-colors duration-150 bg-blue-700 disabled:opacity-50 rounded-lg focus:shadow-outline enabled:hover:bg-blue-800",
          onClick: /*#__PURE__*/Object(C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
            return C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return _this2.submitPayment();

                  case 2:
                    return _context2.abrupt("return", _context2.sent);

                  case 3:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2);
          })),
          disabled: this.state.isLoading,
          children: this.state.isLoading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
            className: "mt-1 ".concat(_ControlPanel_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.ldsRipple),
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 63
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 74
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 19
          }, this) : "Submit payment"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 9
        }, this)]
      }, void 0, true);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
        id: _ControlPanel_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.controlPanelContainer,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("span", {
          className: "tracking-wider text-white bg-blue-800 px-4 py-1 text-sm rounded leading-loose mx-2 font-semibold",
          title: "",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("i", {
            className: "fas fa-award",
            "aria-hidden": "true"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 20
          }, this), " ", this.getStakedCrypto(), " ETH paid"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("span", {
          className: "tracking-wider text-white bg-blue-400 px-4 py-1 text-sm rounded leading-loose mx-2 font-semibold",
          title: "",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("i", {
            className: "fas fa-award",
            "aria-hidden": "true"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 20
          }, this), " ", this.getRewardBalance(), " WACT earned"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("h1", {
          className: _ControlPanel_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.header,
          children: ["Wavect", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("sup", {
            children: "\xAE"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 53
          }, this), " Token"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("p", {
          className: _ControlPanel_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.p,
          children: "We at Wavect not only accept certain cryptos such as ETH, BTC or XMR, but even want to encourage our customers to do so."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("p", {
          className: _ControlPanel_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.p,
          children: "Therefore, each payment settled in cryptos will be rewarded with so-called Wavect-Tokens which can be redeemed in future projects."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("p", {
          className: _ControlPanel_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.p,
          children: "Basically, it's just a futuristic and secure voucher :-). At the moment only Ethereum is supported."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 17
        }, this), this.loadPaymentInput()]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 16
      }, this);
    }
  }]);

  return ControlPanel;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2FwaS9Db250cm9sUGFuZWwvQ29udHJvbFBhbmVsLnRzeCJdLCJuYW1lcyI6WyJDb250cm9sUGFuZWwiLCJldGhBbW91bnRUb1BheSIsImlzTG9hZGluZyIsIndpbmRvdyIsIndlYjMiLCJ1dGlscyIsImZyb21XZWkiLCJwcm9wcyIsIndhdmVjdFRva2VuQmFsYW5jZSIsInN0YWtpbmdCYWxhbmNlIiwic3RhdGUiLCJzZXRTdGF0ZSIsImFtb3VudCIsInRvU3RyaW5nIiwidG9XZWkiLCJCbG9ja2NoYWluU2VydmljZSIsInN0YWtlVG9rZW5zIiwiTm90aWZpY2F0aW9uU2VydmljZSIsInNob3dFcnJvciIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJzdHlsZXMiLCJwYXltZW50SW5wdXQiLCJpbnB1dENoYW5nZWRIYW5kbGVyIiwic3VibWl0UGF5bWVudCIsImxkc1JpcHBsZSIsImNvbnRyb2xQYW5lbENvbnRhaW5lciIsImdldFN0YWtlZENyeXB0byIsImdldFJld2FyZEJhbGFuY2UiLCJoZWFkZXIiLCJwIiwibG9hZFBheW1lbnRJbnB1dCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFJTyxJQUFNQSxZQUFiO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUEsNFRBQ2dDO0FBQ3hCQyxvQkFBYyxFQUFFLENBRFE7QUFFeEJDLGVBQVMsRUFBRTtBQUZhLEtBRGhDOztBQUFBLHVVQU0rQixZQUFNO0FBQzdCLGFBQVFDLE1BQUQsQ0FBZ0JDLElBQWhCLENBQXFCQyxLQUFyQixDQUEyQkMsT0FBM0IsQ0FBbUMsTUFBS0MsS0FBTCxDQUFXQyxrQkFBOUMsRUFBa0UsT0FBbEUsQ0FBUDtBQUNILEtBUkw7O0FBQUEsc1VBVThCLFlB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O0FBQUE7QUFBQSxnQkFMRCxlQVFDO0FBQUksbUJBQVMsRUFBRVAsZ0VBQU0sQ0FBQ1EsTUFBdEI7QUFBQSw0Q0FBb0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFSRCxlQVNDO0FBQUcsbUJBQVMsRUFBRVIsZ0VBQU0sQ0FBQ1MsQ0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBVEQsZUFVQztBQUFHLG1CQUFTLEVBQUVULGdFQUFNLENBQUNTLENBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVZELGVBV0M7QUFBRyxtQkFBUyxFQUFFVCxnRUFBTSxDQUFDUyxDQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFYRCxFQWFHLEtBQUtDLGdCQUFMLEVBYkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQVA7QUFlSDtBQWhGTDs7QUFBQTtBQUFBLEVBQWtDQyxnREFBbEMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4xZjE4OTE1NDhlZGQ2ZWYxZTJiYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEJsb2NrY2hhaW5TZXJ2aWNlIH0gZnJvbSBcInNyYy9zZXJ2aWNlcy9CbG9ja2NoYWluLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgTm90aWZpY2F0aW9uU2VydmljZSB9IGZyb20gXCJzcmMvc2VydmljZXMvTm90aWZpY2F0aW9uLnNlcnZpY2VcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0NvbnRyb2xQYW5lbC5tb2R1bGUuY3NzJztcclxuaW1wb3J0IHsgSUNvbnRyb2xQYW5lbFByb3BzIH0gZnJvbSBcIi4vSUNvbnRyb2xQYW5lbC5wcm9wc1wiO1xyXG5pbXBvcnQgeyBJQ29udHJvbFBhbmVsU3RhdGUgfSBmcm9tIFwiLi9JQ29udHJvbFBhbmVsLnN0YXRlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ29udHJvbFBhbmVsIGV4dGVuZHMgQ29tcG9uZW50PElDb250cm9sUGFuZWxQcm9wcywgSUNvbnRyb2xQYW5lbFN0YXRlPiB7XHJcbiAgICBzdGF0ZTogSUNvbnRyb2xQYW5lbFN0YXRlID0ge1xyXG4gICAgICAgIGV0aEFtb3VudFRvUGF5OiAxLFxyXG4gICAgICAgIGlzTG9hZGluZzogZmFsc2UsXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRSZXdhcmRCYWxhbmNlID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiAod2luZG93IGFzIGFueSkud2ViMy51dGlscy5mcm9tV2VpKHRoaXMucHJvcHMud2F2ZWN0VG9rZW5CYWxhbmNlLCAnRXRoZXInKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFN0YWtlZENyeXB0byA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gKHdpbmRvdyBhcyBhbnkpLndlYjMudXRpbHMuZnJvbVdlaSh0aGlzLnByb3BzLnN0YWtpbmdCYWxhbmNlLCAnRXRoZXInKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN1Ym1pdFBheW1lbnQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIC8vIGFsc28gd29ya2luZyBmb3IgdW5kZWZpbmVkIG91dC1vZi10aGUtYm94IGR1ZSB0byBqYXZhU2NyaXB0IG5hdHVyZVxyXG4gICAgICBpZiAodGhpcy5zdGF0ZS5ldGhBbW91bnRUb1BheSA+IDApIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsuLi50aGlzLnN0YXRlLCBpc0xvYWRpbmc6IHRydWUgfSlcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgbGV0IGFtb3VudCA9IHRoaXMuc3RhdGUuZXRoQW1vdW50VG9QYXkudG9TdHJpbmcoKVxyXG4gICAgICAgICAgYW1vdW50ID0gKHdpbmRvdyBhcyBhbnkpLndlYjMudXRpbHMudG9XZWkoYW1vdW50LCAnRXRoZXInKVxyXG4gICAgICAgICAgYXdhaXQgQmxvY2tjaGFpblNlcnZpY2Uuc3Rha2VUb2tlbnMoYW1vdW50KVxyXG4gICAgICAgIH0gY2F0Y2goZXJyKSB7XHJcbiAgICAgICAgICBOb3RpZmljYXRpb25TZXJ2aWNlLnNob3dFcnJvcignQ291bGQgbm90IHRyYW5zZmVyIEVUSCB0byBXYXZlY3QuJywgZXJyKTtcclxuICAgICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Li4udGhpcy5zdGF0ZSwgaXNMb2FkaW5nOiBmYWxzZSB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBOb3RpZmljYXRpb25TZXJ2aWNlLnNob3dFcnJvcignWW91IGNhbm5vdCB0cmFuc2ZlciAwIG9yIGxlc3MgRVRILicpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBsb2FkUGF5bWVudElucHV0KCkgeyBcclxuICAgICAgICByZXR1cm4gKDw+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wYXltZW50SW5wdXR9PlxyXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwicHJpY2VcIiBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS03MDBcIj5QcmljZTwvbGFiZWw+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xIHJlbGF0aXZlIHJvdW5kZWQtbWQgc2hhZG93LXNtXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LXktMCBsZWZ0LTAgcGwtMyBmbGV4IGl0ZW1zLWNlbnRlciBwb2ludGVyLWV2ZW50cy1ub25lXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDAgc206dGV4dC1zbVwiPs6ePC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwicHJpY2VcIiBpZD1cInByaWNlXCIgY2xhc3NOYW1lPVwicC0yIGZvY3VzOnJpbmctaW5kaWdvLTUwMCBmb2N1czpib3JkZXItaW5kaWdvLTUwMCBibG9jayB3LWZ1bGwgcGwtNyBwci0xMiBzbTp0ZXh0LXNtIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLW1kIHRleHQtYmxhY2tcIiBcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIwLjAwXCIgdmFsdWU9e3RoaXMuc3RhdGUuZXRoQW1vdW50VG9QYXl9IG9uQ2hhbmdlPXsoZXZlbnQpPT50aGlzLmlucHV0Q2hhbmdlZEhhbmRsZXIoZXZlbnQpfSAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC15LTAgcmlnaHQtMCBmbGV4IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImN1cnJlbmN5XCIgY2xhc3NOYW1lPVwic3Itb25seVwiPkN1cnJlbmN5PC9sYWJlbD5cclxuICAgICAgICAgICAgPHNlbGVjdCBpZD1cIkN1cnJlbmN5XCIgbmFtZT1cImN1cnJlbmN5XCIgY2xhc3NOYW1lPVwiZm9jdXM6cmluZy1pbmRpZ28tNTAwIGZvY3VzOmJvcmRlci1pbmRpZ28tNTAwIGgtZnVsbCBweS0wIHBsLTIgcHItNyBib3JkZXItdHJhbnNwYXJlbnQgYmctdHJhbnNwYXJlbnQgdGV4dC1ncmF5LTUwMCBzbTp0ZXh0LXNtIHJvdW5kZWQtbWRcIj5cclxuICAgICAgICAgICAgICA8b3B0aW9uPkVUSDwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgXHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJhbGlnbi1taWRkbGUgbXQtNCB3LWZ1bGwgaC0xMiBweC02IHRleHQtYmx1ZS0xMDAgdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMTUwIGJnLWJsdWUtNzAwIGRpc2FibGVkOm9wYWNpdHktNTAgcm91bmRlZC1sZyBmb2N1czpzaGFkb3ctb3V0bGluZSBlbmFibGVkOmhvdmVyOmJnLWJsdWUtODAwXCJcclxuICAgICAgICAgICAgb25DbGljaz17YXN5bmMgKCkgPT4gYXdhaXQgdGhpcy5zdWJtaXRQYXltZW50KCl9IGRpc2FibGVkPXt0aGlzLnN0YXRlLmlzTG9hZGluZ30+XHJcbiAgICAgICAgICAgICAge3RoaXMuc3RhdGUuaXNMb2FkaW5nIFxyXG4gICAgICAgICAgICAgICAgPyA8ZGl2IGNsYXNzTmFtZT17YG10LTEgJHtzdHlsZXMubGRzUmlwcGxlfWB9PjxkaXY+PC9kaXY+PGRpdj48L2Rpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDogXCJTdWJtaXQgcGF5bWVudFwifVxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8Lz4pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaW5wdXRDaGFuZ2VkSGFuZGxlciA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyAuLi50aGlzLnN0YXRlLCBldGhBbW91bnRUb1BheTogZXZlbnQudGFyZ2V0LnZhbHVlfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiA8ZGl2IGlkPXtzdHlsZXMuY29udHJvbFBhbmVsQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRyYWNraW5nLXdpZGVyIHRleHQtd2hpdGUgYmctYmx1ZS04MDAgcHgtNCBweS0xIHRleHQtc20gcm91bmRlZCBsZWFkaW5nLWxvb3NlIG14LTIgZm9udC1zZW1pYm9sZFwiIHRpdGxlPVwiXCI+XHJcbiAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtYXdhcmRcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+IHt0aGlzLmdldFN0YWtlZENyeXB0bygpfSBFVEggcGFpZFxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRyYWNraW5nLXdpZGVyIHRleHQtd2hpdGUgYmctYmx1ZS00MDAgcHgtNCBweS0xIHRleHQtc20gcm91bmRlZCBsZWFkaW5nLWxvb3NlIG14LTIgZm9udC1zZW1pYm9sZFwiIHRpdGxlPVwiXCI+XHJcbiAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtYXdhcmRcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+IHt0aGlzLmdldFJld2FyZEJhbGFuY2UoKX0gV0FDVCBlYXJuZWRcclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PldhdmVjdDxzdXA+wq48L3N1cD4gVG9rZW48L2gxPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMucH0+V2UgYXQgV2F2ZWN0IG5vdCBvbmx5IGFjY2VwdCBjZXJ0YWluIGNyeXB0b3Mgc3VjaCBhcyBFVEgsIEJUQyBvciBYTVIsIGJ1dCBldmVuIHdhbnQgdG8gZW5jb3VyYWdlIG91ciBjdXN0b21lcnMgdG8gZG8gc28uPC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMucH0+VGhlcmVmb3JlLCBlYWNoIHBheW1lbnQgc2V0dGxlZCBpbiBjcnlwdG9zIHdpbGwgYmUgcmV3YXJkZWQgd2l0aCBzby1jYWxsZWQgV2F2ZWN0LVRva2VucyB3aGljaCBjYW4gYmUgcmVkZWVtZWQgaW4gZnV0dXJlIHByb2plY3RzLjwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnB9PkJhc2ljYWxseSwgaXQncyBqdXN0IGEgZnV0dXJpc3RpYyBhbmQgc2VjdXJlIHZvdWNoZXIgOi0pLiBBdCB0aGUgbW9tZW50IG9ubHkgRXRoZXJldW0gaXMgc3VwcG9ydGVkLjwvcD5cclxuXHJcbiAgICAgICAgICAgICAgICB7IHRoaXMubG9hZFBheW1lbnRJbnB1dCgpIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=
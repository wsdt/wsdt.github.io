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
                _context.next = 9;
                break;
              }

              _this.setState(_objectSpread(_objectSpread({}, _this.state), {}, {
                isLoading: true
              }));

              amount = _this.state.ethAmountToPay.toString();
              amount = window.web3.utils.toWei(amount, 'Ether');
              _context.next = 6;
              return src_services_Blockchain_service__WEBPACK_IMPORTED_MODULE_11__["BlockchainService"].stakeTokens(amount);

            case 6:
              _this.setState(_objectSpread(_objectSpread({}, _this.state), {}, {
                isLoading: false
              }));

              _context.next = 10;
              break;

            case 9:
              src_services_Notification_service__WEBPACK_IMPORTED_MODULE_12__["NotificationService"].showError('You cannot transfer 0 or less ETH.');

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
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
            lineNumber: 38,
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
                lineNumber: 41,
                columnNumber: 13
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 40,
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
              lineNumber: 43,
              columnNumber: 11
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
              className: "absolute inset-y-0 right-0 flex items-center",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("label", {
                htmlFor: "currency",
                className: "sr-only",
                children: "Currency"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 46,
                columnNumber: 13
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("select", {
                id: "Currency",
                name: "currency",
                className: "focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("option", {
                  children: "ETH"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 48,
                  columnNumber: 15
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 47,
                columnNumber: 13
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 11
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 9
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("button", {
          className: "mt-4 w-full h-12 px-6 text-blue-100 transition-colors duration-150 bg-blue-700 disabled:opacity-50 rounded-lg focus:shadow-outline enabled:hover:bg-blue-800",
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
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
            className: "float-left ".concat(_ControlPanel_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.ldsRipple),
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 65
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 76
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("span", {
            className: "pt-3 inline-block",
            children: "Submit payment"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 54,
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
            lineNumber: 69,
            columnNumber: 20
          }, this), " ", this.getStakedCrypto(), " ETH paid"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("span", {
          className: "tracking-wider text-white bg-blue-400 px-4 py-1 text-sm rounded leading-loose mx-2 font-semibold",
          title: "",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("i", {
            className: "fas fa-award",
            "aria-hidden": "true"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 20
          }, this), " ", this.getRewardBalance(), " WACT earned"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("h1", {
          className: _ControlPanel_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.header,
          children: ["Wavect", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("sup", {
            children: "\xAE"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 53
          }, this), " Token"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("p", {
          className: _ControlPanel_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.p,
          children: "We at Wavect not only accept certain cryptos such as ETH, BTC or XMR, but even want to encourage our customers to do so."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("p", {
          className: _ControlPanel_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.p,
          children: "Therefore, each payment settled in cryptos will be rewarded with so-called Wavect-Tokens which can be redeemed in future projects."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("p", {
          className: _ControlPanel_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.p,
          children: "Basically, it's just a futuristic and secure voucher :-). At the moment only Ethereum is supported."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 17
        }, this), this.loadPaymentInput()]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 67,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2FwaS9Db250cm9sUGFuZWwvQ29udHJvbFBhbmVsLnRzeCJdLCJuYW1lcyI6WyJDb250cm9sUGFuZWwiLCJldGhBbW91bnRUb1BheSIsImlzTG9hZGluZyIsIndpbmRvdyIsIndlYjMiLCJ1dGlscyIsImZyb21XZWkiLCJwcm9wcyIsIndhdmVjdFRva2VuQmFsYW5jZSIsInN0YWtpbmdCYWxhbmNlIiwic3RhdGUiLCJzZXRTdGF0ZSIsImFtb3VudCIsInRvU3RyaW5nIiwidG9XZWkiLCJCbG9ja2NoYWluU2VydmljZSIsInN0YWtlVG9rZW5zIiwiTm90aWZpY2F0aW9uU2VydmljZSIsInNob3dFcnJvciIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJzdHlsZXMiLCJwYXltZW50SW5wdXQiLCJpbnB1dENoYW5nZWRIYW5kbGVyIiwic3VibWl0UGF5bWVudCIsImxkc1JpcHBsZSIsImNvbnRyb2xQYW5lbENvbnRhaW5lciIsImdldFN0YWtlZENyeXB0byIsImdldFJld2FyZEJhbGFuY2UiLCJoZWFkZXIiLCJwIiwibG9hZFBheW1lbnRJbnB1dCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFJTyxJQUFNQSxZQUFiO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUEsNFRBQ2dDO0FBQ3hCQyxvQkFBYyxFQUFFLENBRFE7QUFFeEJDLGVBQVMsRUFBRTtBQUZhLEtBRGhDOztBQUFBLHVVQU0rQixZQUFNO0FBQzdCLGFBQVFDLE1BQUQsQ0FBZ0JDLElBQWhCLENBQXFCQyxLQUFyQixDQUEyQkMsT0FBM0IsQ0FBbUMsTUFBS0MsS0FBTCxDQUFXQyxrQkFBOUMsRUFBa0UsT0FBbEUsQ0FBUDtBQUNILEtBUkw7O0FBQUEsc1VBVThCLFlB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NENBQW9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUkQsZUFTQztBQUFHLG1CQUFTLEVBQUVSLGdFQUFNLENBQUNTLENBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVRELGVBVUM7QUFBRyxtQkFBUyxFQUFFVCxnRUFBTSxDQUFDUyxDQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFWRCxlQVdDO0FBQUcsbUJBQVMsRUFBRVQsZ0VBQU0sQ0FBQ1MsQ0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBWEQsRUFhRyxLQUFLQyxnQkFBTCxFQWJIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUFQO0FBZUg7QUExRUw7O0FBQUE7QUFBQSxFQUFrQ0MsZ0RBQWxDIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuOThjOTNiMTM5NmQ3MGVlYjk4NjYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBCbG9ja2NoYWluU2VydmljZSB9IGZyb20gXCJzcmMvc2VydmljZXMvQmxvY2tjaGFpbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IE5vdGlmaWNhdGlvblNlcnZpY2UgfSBmcm9tIFwic3JjL3NlcnZpY2VzL05vdGlmaWNhdGlvbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Db250cm9sUGFuZWwubW9kdWxlLmNzcyc7XHJcbmltcG9ydCB7IElDb250cm9sUGFuZWxQcm9wcyB9IGZyb20gXCIuL0lDb250cm9sUGFuZWwucHJvcHNcIjtcclxuaW1wb3J0IHsgSUNvbnRyb2xQYW5lbFN0YXRlIH0gZnJvbSBcIi4vSUNvbnRyb2xQYW5lbC5zdGF0ZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENvbnRyb2xQYW5lbCBleHRlbmRzIENvbXBvbmVudDxJQ29udHJvbFBhbmVsUHJvcHMsIElDb250cm9sUGFuZWxTdGF0ZT4ge1xyXG4gICAgc3RhdGU6IElDb250cm9sUGFuZWxTdGF0ZSA9IHtcclxuICAgICAgICBldGhBbW91bnRUb1BheTogMSxcclxuICAgICAgICBpc0xvYWRpbmc6IGZhbHNlLFxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0UmV3YXJkQmFsYW5jZSA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gKHdpbmRvdyBhcyBhbnkpLndlYjMudXRpbHMuZnJvbVdlaSh0aGlzLnByb3BzLndhdmVjdFRva2VuQmFsYW5jZSwgJ0V0aGVyJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRTdGFrZWRDcnlwdG8gPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuICh3aW5kb3cgYXMgYW55KS53ZWIzLnV0aWxzLmZyb21XZWkodGhpcy5wcm9wcy5zdGFraW5nQmFsYW5jZSwgJ0V0aGVyJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdWJtaXRQYXltZW50ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAvLyBhbHNvIHdvcmtpbmcgZm9yIHVuZGVmaW5lZCBvdXQtb2YtdGhlLWJveCBkdWUgdG8gamF2YVNjcmlwdCBuYXR1cmVcclxuICAgICAgaWYgKHRoaXMuc3RhdGUuZXRoQW1vdW50VG9QYXkgPiAwKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Li4udGhpcy5zdGF0ZSwgaXNMb2FkaW5nOiB0cnVlIH0pXHJcbiAgICAgICAgbGV0IGFtb3VudCA9IHRoaXMuc3RhdGUuZXRoQW1vdW50VG9QYXkudG9TdHJpbmcoKVxyXG4gICAgICAgIGFtb3VudCA9ICh3aW5kb3cgYXMgYW55KS53ZWIzLnV0aWxzLnRvV2VpKGFtb3VudCwgJ0V0aGVyJylcclxuICAgICAgICBhd2FpdCBCbG9ja2NoYWluU2VydmljZS5zdGFrZVRva2VucyhhbW91bnQpXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Li4udGhpcy5zdGF0ZSwgaXNMb2FkaW5nOiBmYWxzZSB9KVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIE5vdGlmaWNhdGlvblNlcnZpY2Uuc2hvd0Vycm9yKCdZb3UgY2Fubm90IHRyYW5zZmVyIDAgb3IgbGVzcyBFVEguJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGxvYWRQYXltZW50SW5wdXQoKSB7IFxyXG4gICAgICAgIHJldHVybiAoPD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBheW1lbnRJbnB1dH0+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwcmljZVwiIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTcwMFwiPlByaWNlPC9sYWJlbD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTEgcmVsYXRpdmUgcm91bmRlZC1tZCBzaGFkb3ctc21cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQteS0wIGxlZnQtMCBwbC0zIGZsZXggaXRlbXMtY2VudGVyIHBvaW50ZXItZXZlbnRzLW5vbmVcIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwMCBzbTp0ZXh0LXNtXCI+zp48L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJwcmljZVwiIGlkPVwicHJpY2VcIiBjbGFzc05hbWU9XCJwLTIgZm9jdXM6cmluZy1pbmRpZ28tNTAwIGZvY3VzOmJvcmRlci1pbmRpZ28tNTAwIGJsb2NrIHctZnVsbCBwbC03IHByLTEyIHNtOnRleHQtc20gYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbWQgdGV4dC1ibGFja1wiIFxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjAuMDBcIiB2YWx1ZT17dGhpcy5zdGF0ZS5ldGhBbW91bnRUb1BheX0gb25DaGFuZ2U9eyhldmVudCk9PnRoaXMuaW5wdXRDaGFuZ2VkSGFuZGxlcihldmVudCl9IC8+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LXktMCByaWdodC0wIGZsZXggaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY3VycmVuY3lcIiBjbGFzc05hbWU9XCJzci1vbmx5XCI+Q3VycmVuY3k8L2xhYmVsPlxyXG4gICAgICAgICAgICA8c2VsZWN0IGlkPVwiQ3VycmVuY3lcIiBuYW1lPVwiY3VycmVuY3lcIiBjbGFzc05hbWU9XCJmb2N1czpyaW5nLWluZGlnby01MDAgZm9jdXM6Ym9yZGVyLWluZGlnby01MDAgaC1mdWxsIHB5LTAgcGwtMiBwci03IGJvcmRlci10cmFuc3BhcmVudCBiZy10cmFuc3BhcmVudCB0ZXh0LWdyYXktNTAwIHNtOnRleHQtc20gcm91bmRlZC1tZFwiPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24+RVRIPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICBcclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm10LTQgdy1mdWxsIGgtMTIgcHgtNiB0ZXh0LWJsdWUtMTAwIHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTE1MCBiZy1ibHVlLTcwMCBkaXNhYmxlZDpvcGFjaXR5LTUwIHJvdW5kZWQtbGcgZm9jdXM6c2hhZG93LW91dGxpbmUgZW5hYmxlZDpob3ZlcjpiZy1ibHVlLTgwMFwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2FzeW5jICgpID0+IGF3YWl0IHRoaXMuc3VibWl0UGF5bWVudCgpfSBkaXNhYmxlZD17dGhpcy5zdGF0ZS5pc0xvYWRpbmd9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZmxvYXQtbGVmdCAke3N0eWxlcy5sZHNSaXBwbGV9YH0+PGRpdj48L2Rpdj48ZGl2PjwvZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInB0LTMgaW5saW5lLWJsb2NrXCI+U3VibWl0IHBheW1lbnQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvPik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpbnB1dENoYW5nZWRIYW5kbGVyID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IC4uLnRoaXMuc3RhdGUsIGV0aEFtb3VudFRvUGF5OiBldmVudC50YXJnZXQudmFsdWV9KTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIDxkaXYgaWQ9e3N0eWxlcy5jb250cm9sUGFuZWxDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidHJhY2tpbmctd2lkZXIgdGV4dC13aGl0ZSBiZy1ibHVlLTgwMCBweC00IHB5LTEgdGV4dC1zbSByb3VuZGVkIGxlYWRpbmctbG9vc2UgbXgtMiBmb250LXNlbWlib2xkXCIgdGl0bGU9XCJcIj5cclxuICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1hd2FyZFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT4ge3RoaXMuZ2V0U3Rha2VkQ3J5cHRvKCl9IEVUSCBwYWlkXHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcblxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidHJhY2tpbmctd2lkZXIgdGV4dC13aGl0ZSBiZy1ibHVlLTQwMCBweC00IHB5LTEgdGV4dC1zbSByb3VuZGVkIGxlYWRpbmctbG9vc2UgbXgtMiBmb250LXNlbWlib2xkXCIgdGl0bGU9XCJcIj5cclxuICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1hd2FyZFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT4ge3RoaXMuZ2V0UmV3YXJkQmFsYW5jZSgpfSBXQUNUIGVhcm5lZFxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+V2F2ZWN0PHN1cD7Crjwvc3VwPiBUb2tlbjwvaDE+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5wfT5XZSBhdCBXYXZlY3Qgbm90IG9ubHkgYWNjZXB0IGNlcnRhaW4gY3J5cHRvcyBzdWNoIGFzIEVUSCwgQlRDIG9yIFhNUiwgYnV0IGV2ZW4gd2FudCB0byBlbmNvdXJhZ2Ugb3VyIGN1c3RvbWVycyB0byBkbyBzby48L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5wfT5UaGVyZWZvcmUsIGVhY2ggcGF5bWVudCBzZXR0bGVkIGluIGNyeXB0b3Mgd2lsbCBiZSByZXdhcmRlZCB3aXRoIHNvLWNhbGxlZCBXYXZlY3QtVG9rZW5zIHdoaWNoIGNhbiBiZSByZWRlZW1lZCBpbiBmdXR1cmUgcHJvamVjdHMuPC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMucH0+QmFzaWNhbGx5LCBpdCdzIGp1c3QgYSBmdXR1cmlzdGljIGFuZCBzZWN1cmUgdm91Y2hlciA6LSkuIEF0IHRoZSBtb21lbnQgb25seSBFdGhlcmV1bSBpcyBzdXBwb3J0ZWQuPC9wPlxyXG5cclxuICAgICAgICAgICAgICAgIHsgdGhpcy5sb2FkUGF5bWVudElucHV0KCkgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==
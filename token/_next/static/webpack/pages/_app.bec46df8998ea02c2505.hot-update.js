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
/* harmony import */ var C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var src_services_Blockchain_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/services/Blockchain.service */ "./src/services/Blockchain.service.ts");
/* harmony import */ var _ControlPanel_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ControlPanel.module.css */ "./src/pages/api/ControlPanel/ControlPanel.module.css");
/* harmony import */ var _ControlPanel_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_ControlPanel_module_css__WEBPACK_IMPORTED_MODULE_10__);









var _jsxFileName = "C:\\Users\\WSDT\\Desktop\\hugo\\wavect.io\\token\\src\\pages\\api\\ControlPanel\\ControlPanel.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var ControlPanel = /*#__PURE__*/function (_Component) {
  Object(C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(ControlPanel, _Component);

  var _super = _createSuper(ControlPanel);

  function ControlPanel() {
    var _this;

    Object(C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ControlPanel);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "state", {
      ethAmountToPay: 0
    });

    Object(C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "inputChangedHandler", function (event) {
      _this.setState(_objectSpread(_objectSpread({}, _this.state), {}, {
        ethAmountToPay: event.target.value
      }));
    });

    return _this;
  }

  Object(C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ControlPanel, [{
    key: "getRewardBalance",
    value: function getRewardBalance() {
      return window.web3.utils.fromWei(this.props.wavectTokenBalance, 'Ether');
    }
  }, {
    key: "getStakedCrypto",
    value: function getStakedCrypto() {
      return window.web3.utils.fromWei(this.props.stakingBalance, 'Ether');
    }
  }, {
    key: "loadPaymentInput",
    value: function loadPaymentInput() {
      var _this2 = this;

      var submitPayment = function submitPayment() {
        var amount = _this2.state.ethAmountToPay.toString();

        amount = window.web3.utils.toWei(amount, 'Ether');
        src_services_Blockchain_service__WEBPACK_IMPORTED_MODULE_9__["BlockchainService"].stakeTokens(amount);
      };

      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          className: _ControlPanel_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.paymentInput,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("label", {
            htmlFor: "price",
            className: "block text-sm font-medium text-gray-700",
            children: "Price"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 9
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
            className: "mt-1 relative rounded-md shadow-sm",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
              className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("span", {
                className: "text-gray-500 sm:text-sm",
                children: "\u039E"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 32,
                columnNumber: 13
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 31,
              columnNumber: 11
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("input", {
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
              lineNumber: 34,
              columnNumber: 11
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
              className: "absolute inset-y-0 right-0 flex items-center",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("label", {
                htmlFor: "currency",
                className: "sr-only",
                children: "Currency"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 37,
                columnNumber: 13
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("select", {
                id: "Currency",
                name: "currency",
                className: "focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("option", {
                  children: "ETH"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 39,
                  columnNumber: 15
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 38,
                columnNumber: 13
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 36,
              columnNumber: 11
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 9
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("button", {
          className: "mt-4 w-full h-12 px-6 text-blue-100 transition-colors duration-150 bg-blue-700 rounded-lg focus:shadow-outline hover:bg-blue-800",
          onClick: function onClick() {
            return submitPayment();
          },
          children: "Submit payment"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 9
        }, this)]
      }, void 0, true);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
        id: _ControlPanel_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.controlPanelContainer,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("h1", {
          className: _ControlPanel_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.header,
          children: "Wavect Token"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("p", {
          className: _ControlPanel_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.p,
          children: "We at Wavect not only accept certain cryptos such as ETH, BTC or XMR, but even want to encourage our customers to do so."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("p", {
          className: _ControlPanel_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.p,
          children: "Therefore, each payment settled in cryptos will be rewarded with so-called Wavect-Tokens which can be redeemed in future projects."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("p", {
          className: _ControlPanel_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.p,
          children: "Basically, it's just a futuristic and secure voucher :-)"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("p", {
            className: _ControlPanel_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.p,
            children: ["Already paid in crypto:\xA0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("strong", {
              children: [this.getStakedCrypto(), " ETH"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("p", {
            className: _ControlPanel_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.p,
            children: ["Reward Balance:\xA0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("strong", {
              children: [this.getRewardBalance(), " WACT"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 17
        }, this), this.loadPaymentInput()]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 16
      }, this);
    }
  }]);

  return ControlPanel;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2FwaS9Db250cm9sUGFuZWwvQ29udHJvbFBhbmVsLnRzeCJdLCJuYW1lcyI6WyJDb250cm9sUGFuZWwiLCJldGhBbW91bnRUb1BheSIsImV2ZW50Iiwic2V0U3RhdGUiLCJzdGF0ZSIsInRhcmdldCIsInZhbHVlIiwid2luZG93Iiwid2ViMyIsInV0aWxzIiwiZnJvbVdlaSIsInByb3BzIiwid2F2ZWN0VG9rZW5CYWxhbmNlIiwic3Rha2luZ0JhbGFuY2UiLCJzdWJtaXRQYXltZW50IiwiYW1vdW50IiwidG9TdHJpbmciLCJ0b1dlaSIsIkJsb2NrY2hhaW5TZXJ2aWNlIiwic3Rha2VUb2tlbnMiLCJzdHlsZXMiLCJwYXltZW50SW5wdXQiLCJpbnB1dENoYW5nZWRIYW5kbGVyIiwiY29udHJvbFBhbmVsQ29udGFpbmVyIiwiaGVhZGVyIiwicCIsImdldFN0YWtlZENyeXB0byIsImdldFJld2FyZEJhbGFuY2UiLCJsb2FkUGF5bWVudElucHV0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFJTyxJQUFNQSxZQUFiO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUEsNFRBQ2dDO0FBQ3hCQyxvQkFBYyxFQUFFO0FBRFEsS0FEaEM7O0FBQUEsMFVBMkNrQyxVQUFDQyxLQUFELEVBQVc7QUFDckMsWUFBS0MsUUFBTCxpQ0FBbUIsTUFBS0MsS0FBeEI7QUFBK0JILHNCQUFjLEVBQUVDLEtBQUssQ0FBQ0csTUFBTixDQUFhQztBQUE1RDtBQUNILEtBN0NMOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLHVDQUsrQjtBQUN2QixhQUFRQyxNQUFELENBQWdCQyxJQUFoQixDQUFxQkMsS0FBckIsQ0FBMkJDLE9BQTNCLENBQW1DLEtBQUtDLEtBQUwsQ0FBV0Ms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LGVBSUM7QUFBRyxtQkFBUyxFQUFFTCxnRUFBTSxDQUFDSyxDQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKRCxlQUtDO0FBQUEsa0NBQ0k7QUFBRyxxQkFBUyxFQUFFTCxnRUFBTSxDQUFDSyxDQUFyQjtBQUFBLG1FQUNJO0FBQUEseUJBQVMsS0FBS0MsZUFBTCxFQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosZUFJSTtBQUFHLHFCQUFTLEVBQUVOLGdFQUFNLENBQUNLLENBQXJCO0FBQUEsMkRBQ0k7QUFBQSx5QkFBUyxLQUFLRSxnQkFBTCxFQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUxELEVBYUcsS0FBS0MsZ0JBQUwsRUFiSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBUDtBQWVIO0FBL0RMOztBQUFBO0FBQUEsRUFBa0NDLCtDQUFsQyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmJlYzQ2ZGY4OTk4ZWEwMmMyNTA1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQmxvY2tjaGFpblNlcnZpY2UgfSBmcm9tIFwic3JjL3NlcnZpY2VzL0Jsb2NrY2hhaW4uc2VydmljZVwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQ29udHJvbFBhbmVsLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgeyBJQ29udHJvbFBhbmVsUHJvcHMgfSBmcm9tIFwiLi9JQ29udHJvbFBhbmVsLnByb3BzXCI7XHJcbmltcG9ydCB7IElDb250cm9sUGFuZWxTdGF0ZSB9IGZyb20gXCIuL0lDb250cm9sUGFuZWwuc3RhdGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDb250cm9sUGFuZWwgZXh0ZW5kcyBDb21wb25lbnQ8SUNvbnRyb2xQYW5lbFByb3BzLCBJQ29udHJvbFBhbmVsU3RhdGU+IHtcclxuICAgIHN0YXRlOiBJQ29udHJvbFBhbmVsU3RhdGUgPSB7XHJcbiAgICAgICAgZXRoQW1vdW50VG9QYXk6IDAsXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRSZXdhcmRCYWxhbmNlKCkge1xyXG4gICAgICAgIHJldHVybiAod2luZG93IGFzIGFueSkud2ViMy51dGlscy5mcm9tV2VpKHRoaXMucHJvcHMud2F2ZWN0VG9rZW5CYWxhbmNlLCAnRXRoZXInKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFN0YWtlZENyeXB0bygpIHtcclxuICAgICAgICByZXR1cm4gKHdpbmRvdyBhcyBhbnkpLndlYjMudXRpbHMuZnJvbVdlaSh0aGlzLnByb3BzLnN0YWtpbmdCYWxhbmNlLCAnRXRoZXInKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGxvYWRQYXltZW50SW5wdXQoKSB7XHJcbiAgICAgICAgY29uc3Qgc3VibWl0UGF5bWVudCA9ICgpID0+IHtcclxuICAgICAgICAgICAgbGV0IGFtb3VudCA9IHRoaXMuc3RhdGUuZXRoQW1vdW50VG9QYXkudG9TdHJpbmcoKVxyXG4gICAgICAgICAgICBhbW91bnQgPSAod2luZG93IGFzIGFueSkud2ViMy51dGlscy50b1dlaShhbW91bnQsICdFdGhlcicpXHJcbiAgICAgICAgICAgIEJsb2NrY2hhaW5TZXJ2aWNlLnN0YWtlVG9rZW5zKGFtb3VudClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAoPD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBheW1lbnRJbnB1dH0+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwcmljZVwiIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTcwMFwiPlByaWNlPC9sYWJlbD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTEgcmVsYXRpdmUgcm91bmRlZC1tZCBzaGFkb3ctc21cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQteS0wIGxlZnQtMCBwbC0zIGZsZXggaXRlbXMtY2VudGVyIHBvaW50ZXItZXZlbnRzLW5vbmVcIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwMCBzbTp0ZXh0LXNtXCI+zp48L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJwcmljZVwiIGlkPVwicHJpY2VcIiBjbGFzc05hbWU9XCJwLTIgZm9jdXM6cmluZy1pbmRpZ28tNTAwIGZvY3VzOmJvcmRlci1pbmRpZ28tNTAwIGJsb2NrIHctZnVsbCBwbC03IHByLTEyIHNtOnRleHQtc20gYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbWQgdGV4dC1ibGFja1wiIFxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjAuMDBcIiB2YWx1ZT17dGhpcy5zdGF0ZS5ldGhBbW91bnRUb1BheX0gb25DaGFuZ2U9eyhldmVudCk9PnRoaXMuaW5wdXRDaGFuZ2VkSGFuZGxlcihldmVudCl9IC8+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LXktMCByaWdodC0wIGZsZXggaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY3VycmVuY3lcIiBjbGFzc05hbWU9XCJzci1vbmx5XCI+Q3VycmVuY3k8L2xhYmVsPlxyXG4gICAgICAgICAgICA8c2VsZWN0IGlkPVwiQ3VycmVuY3lcIiBuYW1lPVwiY3VycmVuY3lcIiBjbGFzc05hbWU9XCJmb2N1czpyaW5nLWluZGlnby01MDAgZm9jdXM6Ym9yZGVyLWluZGlnby01MDAgaC1mdWxsIHB5LTAgcGwtMiBwci03IGJvcmRlci10cmFuc3BhcmVudCBiZy10cmFuc3BhcmVudCB0ZXh0LWdyYXktNTAwIHNtOnRleHQtc20gcm91bmRlZC1tZFwiPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24+RVRIPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICBcclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm10LTQgdy1mdWxsIGgtMTIgcHgtNiB0ZXh0LWJsdWUtMTAwIHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTE1MCBiZy1ibHVlLTcwMCByb3VuZGVkLWxnIGZvY3VzOnNoYWRvdy1vdXRsaW5lIGhvdmVyOmJnLWJsdWUtODAwXCJcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc3VibWl0UGF5bWVudCgpfT5TdWJtaXQgcGF5bWVudDwvYnV0dG9uPlxyXG4gICAgICA8Lz4pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaW5wdXRDaGFuZ2VkSGFuZGxlciA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyAuLi50aGlzLnN0YXRlLCBldGhBbW91bnRUb1BheTogZXZlbnQudGFyZ2V0LnZhbHVlfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiA8ZGl2IGlkPXtzdHlsZXMuY29udHJvbFBhbmVsQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PldhdmVjdCBUb2tlbjwvaDE+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5wfT5XZSBhdCBXYXZlY3Qgbm90IG9ubHkgYWNjZXB0IGNlcnRhaW4gY3J5cHRvcyBzdWNoIGFzIEVUSCwgQlRDIG9yIFhNUiwgYnV0IGV2ZW4gd2FudCB0byBlbmNvdXJhZ2Ugb3VyIGN1c3RvbWVycyB0byBkbyBzby48L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5wfT5UaGVyZWZvcmUsIGVhY2ggcGF5bWVudCBzZXR0bGVkIGluIGNyeXB0b3Mgd2lsbCBiZSByZXdhcmRlZCB3aXRoIHNvLWNhbGxlZCBXYXZlY3QtVG9rZW5zIHdoaWNoIGNhbiBiZSByZWRlZW1lZCBpbiBmdXR1cmUgcHJvamVjdHMuPC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMucH0+QmFzaWNhbGx5LCBpdCdzIGp1c3QgYSBmdXR1cmlzdGljIGFuZCBzZWN1cmUgdm91Y2hlciA6LSk8L3A+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnB9PkFscmVhZHkgcGFpZCBpbiBjcnlwdG86Jm5ic3A7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+e3RoaXMuZ2V0U3Rha2VkQ3J5cHRvKCl9IEVUSDwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5wfT5SZXdhcmQgQmFsYW5jZTombmJzcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz57dGhpcy5nZXRSZXdhcmRCYWxhbmNlKCl9IFdBQ1Q8L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHsgdGhpcy5sb2FkUGF5bWVudElucHV0KCkgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==
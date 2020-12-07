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
      console.log("REW", this.props.wavectTokenBalance);
      return window.web3.utils.fromWei(this.props.wavectTokenBalance, 'Ether');
    }
  }, {
    key: "getStakedCrypto",
    value: function getStakedCrypto() {
      console.log("ETH", this.props.stakingBalance);
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
            lineNumber: 31,
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
                lineNumber: 34,
                columnNumber: 13
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 33,
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
              lineNumber: 36,
              columnNumber: 11
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
              className: "absolute inset-y-0 right-0 flex items-center",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("label", {
                htmlFor: "currency",
                className: "sr-only",
                children: "Currency"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 39,
                columnNumber: 13
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("select", {
                id: "Currency",
                name: "currency",
                className: "focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("option", {
                  children: "ETH"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 41,
                  columnNumber: 15
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 40,
                columnNumber: 13
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 11
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 9
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("button", {
          className: "mt-4 w-full h-12 px-6 text-blue-100 transition-colors duration-150 bg-blue-700 rounded-lg focus:shadow-outline hover:bg-blue-800",
          onClick: function onClick() {
            return submitPayment();
          },
          children: "Submit payment"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
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
          lineNumber: 58,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("p", {
          className: _ControlPanel_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.p,
          children: "We at Wavect not only accept certain cryptos such as ETH, BTC or XMR, but even want to encourage our customers to do so."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("p", {
          className: _ControlPanel_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.p,
          children: "Therefore, each payment settled in cryptos will be rewarded with so-called Wavect-Tokens which can be redeemed in future projects."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("p", {
          className: _ControlPanel_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.p,
          children: "Basically, it's just a futuristic and secure voucher :-)"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("p", {
            className: _ControlPanel_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.p,
            children: ["Already paid in crypto:\xA0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("strong", {
              children: [this.getStakedCrypto(), " ETH"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("p", {
            className: _ControlPanel_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.p,
            children: ["Reward Balance:\xA0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("strong", {
              children: [this.getRewardBalance(), " WACT"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 17
        }, this), this.loadPaymentInput()]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 57,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2FwaS9Db250cm9sUGFuZWwvQ29udHJvbFBhbmVsLnRzeCJdLCJuYW1lcyI6WyJDb250cm9sUGFuZWwiLCJldGhBbW91bnRUb1BheSIsImV2ZW50Iiwic2V0U3RhdGUiLCJzdGF0ZSIsInRhcmdldCIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsInByb3BzIiwid2F2ZWN0VG9rZW5CYWxhbmNlIiwid2luZG93Iiwid2ViMyIsInV0aWxzIiwiZnJvbVdlaSIsInN0YWtpbmdCYWxhbmNlIiwic3VibWl0UGF5bWVudCIsImFtb3VudCIsInRvU3RyaW5nIiwidG9XZWkiLCJCbG9ja2NoYWluU2VydmljZSIsInN0YWtlVG9rZW5zIiwic3R5bGVzIiwicGF5bWVudElucHV0IiwiaW5wdXRDaGFuZ2VkSGFuZGxlciIsImNvbnRyb2xQYW5lbENvbnRhaW5lciIsImhlYWRlciIsInAiLCJnZXRTdGFrZWRDcnlwdG8iLCJnZXRSZXdhcmRCYWxhbmNlIiwibG9hZFBheW1lbnRJbnB1dCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBSU8sSUFBTUEsWUFBYjtBQUFBOztBQUFBOztBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBLDRUQUNnQztBQUN4QkMsb0JBQWMsRUFBRTtBQURRLEtBRGhDOztBQUFBLDBVQTZDa0MsVUFBQ0MsS0FBRCxFQUFXO0FBQ3JDLFlBQUtDLFFBQUwsaUNBQW1CLE1BQUtDLEtBQXhCO0FBQStCSCxzQkFBYyxFQUFFQyxLQUFLLENBQUNHLE1BQU4sQ0FBYUM7QUFBNUQ7QUFDSCxLQS9DTDs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSx1Q0FLK0I7QUFDdkJDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQVosRUFBbUIsS0FBS0MsS0FBTCxDQUFXQyxrQkFBOUI7QUFDQSxhQUFRQyxNQUFELENBQWdCQyxJQUFoQixDQUFxQkMsS0FBckIsQ0FBMkJDLE9BQTNCLENBQW1DLEtBQUtMLEtBQUwsQ0FBV0Msa0JBQTlDLEVBQWtFLE9BQWxFLENBQVA7QUFDSDtBQVJMO0FBQUE7QUFBQSxzQ0FVOEI7QUFDeEJILGFBQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQVosRUFBbUIsS0FBS0MsS0FBTCxDQUFXTSxjQUE5QjtBQUNFLGFBQVFKLE1BQUQsQ0FBZ0JDLElBQWhCLENBQXFCQyxLQUFyQixDQUEyQkMsT0FBM0IsQ0FBbUMsS0FBS0wsS0FBTCxDQUFXTSxjQUE5QyxFQUE4RCxPQUE5RCxDQUFQO0FBQ0g7QUFiTDtBQUFBO0FBQUEsdUNBZStCO0FBQUE7O0FBQ3ZCLFVBQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBTTtBQUN4QixZQUFJQyxNQUFNLEdBQUcsTUFBSSxDQUFDYixLQUFMLENBQVdILGNBQVgsQ0FBMEJpQixRQUExQixFQUFiOztBQUNBRCxjQUFNLEdBQUlOLE1BQUQsQ0FBZ0JDLElBQWhCLENBQXFCQyxLQUFyQixDQUEyQk0sS0FBM0IsQ0FBaUNGLE1BQWpDLEVBQXlDLE9BQXpDLENBQVQ7QUFDQUcseUZBQWlCLENBQUNDLFdBQWxCLENBQThCSixNQUE5QjtBQUNILE9BSkQ7O0FBTUEsMEJBQVE7QUFBQSxnQ0FDUjtBQUFLLG1CQUFTLEVBQUVLLGdFQUFNLENBQUNDLFlBQXZCO0FBQUEsa0NBQ0E7QUFBTyxtQkFBTyxFQUFDLE9BQWY7QUFBdUIscUJBQVMsRUFBQyx5Q0FBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREEsZUFFQTtBQUFLLHFCQUFTLEVBQUMsb0NBQWY7QUFBQSxvQ0FDRTtBQUFLLHVCQUFTLEVBQUMsc0VBQWY7QUFBQSxxQ0FDRTtBQUFNLHlCQUFTLEVBQUMsMEJBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixlQUlFO0FBQU8sa0JBQUksRUFBQyxNQUFaO0FBQW1CLGtCQUFJLEVBQUMsT0FBeEI7QUFBZ0MsZ0JBQUUsRUFBQyxPQUFuQztBQUEyQyx1QkFBUyxFQUFDLDRIQUFyRDtBQUNFLHlCQUFXLEVBQUMsTUFEZDtBQUNxQixtQkFBSyxFQUFFLEtBQUtuQixLQUFMLENBQVdILGNBRHZDO0FBQ3VELHNCQUFRLEVBQUUsa0JBQUNDLEtBQUQ7QUFBQSx1QkFBUyxNQUFJLENBQUNzQixtQkFBTCxDQUF5QnRCLEtBQXpCLENBQVQ7QUFBQTtBQURqRTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUpGLGVBTUU7QUFBSyx1QkFBUyxFQUFDLDhDQUFmO0FBQUEsc0NBQ0U7QUFBTyx1QkFBTyxFQUFDLFVBQWY7QUFBMEIseUJBQVMsRUFBQyxTQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFERixlQUVFO0FBQVEsa0JBQUUsRUFBQyxVQUFYO0FBQXNCLG9CQUFJLEVBQUMsVUFBM0I7QUFBc0MseUJBQVMsRUFBQywySUFBaEQ7QUFBQSx1Q0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRFEsZUFrQlI7QUFBUSxtQkFBUyxFQUFDLGtJQUFsQjtBQUNJLGlCQUFPLEVBQUU7QUFBQSxtQkFBTWMsYUFBYSxFQUFuQjtBQUFBLFdBRGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBbEJRO0FBQUEsc0JBQVI7QUFxQkg7QUEzQ0w7QUFBQTtBQUFBLDZCQWlEYTtBQUNMLDBCQUFPO0FBQUssVUFBRSxFQUFFTSxnRUFBTSxDQUFDRyxxQkFBaEI7QUFBQSxnQ0FDQztBQUFJLG1CQUFTLEVBQUVILGdFQUFNLENBQUNJLE1BQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURELGVBRUM7QUFBRyxtQkFBUyxFQUFFSixnRUFBTSxDQUFDSyxDQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRCxlQUdDO0FBQUcsbUJBQVMsRUFBRUwsZ0VBQU0sQ0FBQ0ssQ0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSEQsZUFJQztBQUFHLG1CQUFTLEVBQUVMLGdFQUFNLENBQUNLLENBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpELGVBS0M7QUFBQSxrQ0FDSTtBQUFHLHFCQUFTLEVBQUVMLGdFQUFNLENBQUNLLENBQXJCO0FBQUEsbUVBQ0k7QUFBQSx5QkFBUyxLQUFLQyxlQUFMLEVBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixlQUlJO0FBQUcscUJBQVMsRUFBRU4sZ0VBQU0sQ0FBQ0ssQ0FBckI7QUFBQSwyREFDSTtBQUFBLHlCQUFTLEtBQUtFLGdCQUFMLEVBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTEQsRUFhRyxLQUFLQyxnQkFBTCxFQWJIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUFQO0FBZUg7QUFqRUw7O0FBQUE7QUFBQSxFQUFrQ0MsK0NBQWxDIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMzdkZjI3MmE3ZTJhMmJhYTE0NDQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBCbG9ja2NoYWluU2VydmljZSB9IGZyb20gXCJzcmMvc2VydmljZXMvQmxvY2tjaGFpbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Db250cm9sUGFuZWwubW9kdWxlLmNzcyc7XHJcbmltcG9ydCB7IElDb250cm9sUGFuZWxQcm9wcyB9IGZyb20gXCIuL0lDb250cm9sUGFuZWwucHJvcHNcIjtcclxuaW1wb3J0IHsgSUNvbnRyb2xQYW5lbFN0YXRlIH0gZnJvbSBcIi4vSUNvbnRyb2xQYW5lbC5zdGF0ZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENvbnRyb2xQYW5lbCBleHRlbmRzIENvbXBvbmVudDxJQ29udHJvbFBhbmVsUHJvcHMsIElDb250cm9sUGFuZWxTdGF0ZT4ge1xyXG4gICAgc3RhdGU6IElDb250cm9sUGFuZWxTdGF0ZSA9IHtcclxuICAgICAgICBldGhBbW91bnRUb1BheTogMCxcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFJld2FyZEJhbGFuY2UoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJSRVdcIiwgdGhpcy5wcm9wcy53YXZlY3RUb2tlbkJhbGFuY2UpXHJcbiAgICAgICAgcmV0dXJuICh3aW5kb3cgYXMgYW55KS53ZWIzLnV0aWxzLmZyb21XZWkodGhpcy5wcm9wcy53YXZlY3RUb2tlbkJhbGFuY2UsICdFdGhlcicpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0U3Rha2VkQ3J5cHRvKCkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkVUSFwiLCB0aGlzLnByb3BzLnN0YWtpbmdCYWxhbmNlKVxyXG4gICAgICAgIHJldHVybiAod2luZG93IGFzIGFueSkud2ViMy51dGlscy5mcm9tV2VpKHRoaXMucHJvcHMuc3Rha2luZ0JhbGFuY2UsICdFdGhlcicpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbG9hZFBheW1lbnRJbnB1dCgpIHtcclxuICAgICAgICBjb25zdCBzdWJtaXRQYXltZW50ID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgYW1vdW50ID0gdGhpcy5zdGF0ZS5ldGhBbW91bnRUb1BheS50b1N0cmluZygpXHJcbiAgICAgICAgICAgIGFtb3VudCA9ICh3aW5kb3cgYXMgYW55KS53ZWIzLnV0aWxzLnRvV2VpKGFtb3VudCwgJ0V0aGVyJylcclxuICAgICAgICAgICAgQmxvY2tjaGFpblNlcnZpY2Uuc3Rha2VUb2tlbnMoYW1vdW50KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuICg8PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGF5bWVudElucHV0fT5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInByaWNlXCIgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktNzAwXCI+UHJpY2U8L2xhYmVsPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMSByZWxhdGl2ZSByb3VuZGVkLW1kIHNoYWRvdy1zbVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC15LTAgbGVmdC0wIHBsLTMgZmxleCBpdGVtcy1jZW50ZXIgcG9pbnRlci1ldmVudHMtbm9uZVwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwIHNtOnRleHQtc21cIj7Onjwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInByaWNlXCIgaWQ9XCJwcmljZVwiIGNsYXNzTmFtZT1cInAtMiBmb2N1czpyaW5nLWluZGlnby01MDAgZm9jdXM6Ym9yZGVyLWluZGlnby01MDAgYmxvY2sgdy1mdWxsIHBsLTcgcHItMTIgc206dGV4dC1zbSBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1tZCB0ZXh0LWJsYWNrXCIgXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMC4wMFwiIHZhbHVlPXt0aGlzLnN0YXRlLmV0aEFtb3VudFRvUGF5fSBvbkNoYW5nZT17KGV2ZW50KT0+dGhpcy5pbnB1dENoYW5nZWRIYW5kbGVyKGV2ZW50KX0gLz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQteS0wIHJpZ2h0LTAgZmxleCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjdXJyZW5jeVwiIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5DdXJyZW5jeTwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxzZWxlY3QgaWQ9XCJDdXJyZW5jeVwiIG5hbWU9XCJjdXJyZW5jeVwiIGNsYXNzTmFtZT1cImZvY3VzOnJpbmctaW5kaWdvLTUwMCBmb2N1czpib3JkZXItaW5kaWdvLTUwMCBoLWZ1bGwgcHktMCBwbC0yIHByLTcgYm9yZGVyLXRyYW5zcGFyZW50IGJnLXRyYW5zcGFyZW50IHRleHQtZ3JheS01MDAgc206dGV4dC1zbSByb3VuZGVkLW1kXCI+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbj5FVEg8L29wdGlvbj5cclxuICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIFxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibXQtNCB3LWZ1bGwgaC0xMiBweC02IHRleHQtYmx1ZS0xMDAgdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMTUwIGJnLWJsdWUtNzAwIHJvdW5kZWQtbGcgZm9jdXM6c2hhZG93LW91dGxpbmUgaG92ZXI6YmctYmx1ZS04MDBcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzdWJtaXRQYXltZW50KCl9PlN1Ym1pdCBwYXltZW50PC9idXR0b24+XHJcbiAgICAgIDwvPik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpbnB1dENoYW5nZWRIYW5kbGVyID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IC4uLnRoaXMuc3RhdGUsIGV0aEFtb3VudFRvUGF5OiBldmVudC50YXJnZXQudmFsdWV9KTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIDxkaXYgaWQ9e3N0eWxlcy5jb250cm9sUGFuZWxDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+V2F2ZWN0IFRva2VuPC9oMT5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnB9PldlIGF0IFdhdmVjdCBub3Qgb25seSBhY2NlcHQgY2VydGFpbiBjcnlwdG9zIHN1Y2ggYXMgRVRILCBCVEMgb3IgWE1SLCBidXQgZXZlbiB3YW50IHRvIGVuY291cmFnZSBvdXIgY3VzdG9tZXJzIHRvIGRvIHNvLjwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnB9PlRoZXJlZm9yZSwgZWFjaCBwYXltZW50IHNldHRsZWQgaW4gY3J5cHRvcyB3aWxsIGJlIHJld2FyZGVkIHdpdGggc28tY2FsbGVkIFdhdmVjdC1Ub2tlbnMgd2hpY2ggY2FuIGJlIHJlZGVlbWVkIGluIGZ1dHVyZSBwcm9qZWN0cy48L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5wfT5CYXNpY2FsbHksIGl0J3MganVzdCBhIGZ1dHVyaXN0aWMgYW5kIHNlY3VyZSB2b3VjaGVyIDotKTwvcD5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMucH0+QWxyZWFkeSBwYWlkIGluIGNyeXB0bzombmJzcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz57dGhpcy5nZXRTdGFrZWRDcnlwdG8oKX0gRVRIPC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnB9PlJld2FyZCBCYWxhbmNlOiZuYnNwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPnt0aGlzLmdldFJld2FyZEJhbGFuY2UoKX0gV0FDVDwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgeyB0aGlzLmxvYWRQYXltZW50SW5wdXQoKSB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9
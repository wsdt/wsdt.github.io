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
/* harmony import */ var _ControlPanel_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ControlPanel.module.css */ "./src/pages/api/ControlPanel/ControlPanel.module.css");
/* harmony import */ var _ControlPanel_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_ControlPanel_module_css__WEBPACK_IMPORTED_MODULE_9__);









var _jsxFileName = "C:\\Users\\WSDT\\Desktop\\hugo\\wavect.io\\token\\src\\pages\\api\\ControlPanel\\ControlPanel.tsx";

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

        _this2.props.stakeTokens(amount);
      };

      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          className: _ControlPanel_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.paymentInput,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("label", {
            htmlFor: "price",
            className: "block text-sm font-medium text-gray-700",
            children: "Price"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
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
                lineNumber: 31,
                columnNumber: 13
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 30,
              columnNumber: 11
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("input", {
              type: "text",
              name: "price",
              id: "price",
              className: "focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md text-black",
              placeholder: "0.00",
              value: this.state.ethAmountToPay
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 33,
              columnNumber: 11
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
              className: "absolute inset-y-0 right-0 flex items-center",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("label", {
                htmlFor: "currency",
                className: "sr-only",
                children: "Currency"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 36,
                columnNumber: 13
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("select", {
                id: "Currency",
                name: "currency",
                className: "focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("option", {
                  children: "ETH"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 38,
                  columnNumber: 15
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 37,
                columnNumber: 13
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 11
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 9
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("button", {
          "class": "w-full h-12 px-6 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800",
          children: "Large block button"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 7
        }, this)]
      }, void 0, true);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
        id: _ControlPanel_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.controlPanelContainer,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("h1", {
          className: _ControlPanel_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.header,
          children: "Wavect Token"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("p", {
          className: _ControlPanel_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.p,
          children: "We at Wavect not only accept certain cryptos such as ETH, BTC or XMR, but even want to encourage our customers to do so."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("p", {
          className: _ControlPanel_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.p,
          children: "Therefore, each payment settled in cryptos will be rewarded with so-called Wavect-Tokens which can be redeemed in future projects."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("p", {
          className: _ControlPanel_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.p,
          children: "Basically, it's just a futuristic and secure voucher :-)"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("p", {
            className: _ControlPanel_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.p,
            children: ["Already paid in crypto:\xA0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("strong", {
              children: [this.getStakedCrypto(), " ETH"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("p", {
            className: _ControlPanel_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.p,
            children: ["Reward Balance:\xA0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("strong", {
              children: [this.getRewardBalance(), " WACT"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 17
        }, this), this.loadPaymentInput()]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 16
      }, this); //     return <><table className="table table-borderless text-muted text-center">
      //     <thead>
      //       <tr>
      //         <th scope="col">Staking Balance</th>
      //         <th scope="col">Reward Balance</th>
      //       </tr>
      //     </thead>
      //     <tbody>
      //       <tr>
      //         <td>{(window as any).web3.utils.fromWei(this.props.stakingBalance, 'Ether')} mDAI</td>
      //         <td>{(window as any).web3.utils.fromWei(this.props.dappTokenBalance, 'Ether')} DAPP</td>
      //       </tr>
      //     </tbody>
      //   </table>
      //   <div className="card mb-4" >
      //     <div className="card-body">
      //       <form className="mb-3" onSubmit={(event) => {
      //           event.preventDefault()
      //           let amount
      //           amount = this.input.value.toString()
      //           amount = (window as any).web3.utils.toWei(amount, 'Ether')
      //           this.props.stakeTokens(amount)
      //         }}>
      //         <div>
      //           <label className="float-left"><b>Stake Tokens</b></label>
      //           <span className="float-right text-muted">
      //             Balance: {(window as any).web3.utils.fromWei(this.props.daiTokenBalance, 'Ether')}
      //           </span>
      //         </div>
      //         <div className="input-group mb-4">
      //           <input
      //             type="text"
      //             ref={(input) => { this.input = input }}
      //             className="form-control form-control-lg"
      //             placeholder="0"
      //             required />
      //           <div className="input-group-append">
      //             <div className="input-group-text">
      //               <img src='/dai.png' width='auto' height='32' alt=""/>
      //               &nbsp;&nbsp;&nbsp; mDAI
      //             </div>
      //           </div>
      //         </div>
      //         <button type="submit" className="btn btn-primary btn-block btn-lg">STAKE!</button>
      //       </form>
      //     </div> 
      //       </div></>
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2FwaS9Db250cm9sUGFuZWwvQ29udHJvbFBhbmVsLnRzeCJdLCJuYW1lcyI6WyJDb250cm9sUGFuZWwiLCJldGhBbW91bnRUb1BheSIsIndpbmRvdyIsIndlYjMiLCJ1dGlscyIsImZyb21XZWkiLCJwcm9wcyIsIndhdmVjdFRva2VuQmFsYW5jZSIsInN0YWtpbmdCYWxhbmNlIiwic3VibWl0UGF5bWVudCIsImFtb3VudCIsInN0YXRlIiwidG9TdHJpbmciLCJ0b1dlaSIsInN0YWtlVG9rZW5zIiwic3R5bGVzIiwicGF5bWVudElucHV0IiwiY29udHJvbFBhbmVsQ29udGFpbmVyIiwiaGVhZGVyIiwicCIsImdldFN0YWtlZENyeXB0byIsImdldFJld2FyZEJhbGFuY2UiLCJsb2FkUGF5bWVudElucHV0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUlPLElBQU1BLFlBQWI7QUFBQTs7QUFBQTs7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQSw0VEFDZ0M7QUFDeEJDLG9CQUFjLEVBQUU7QUFEUSxLQURoQzs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSx1Q0FLK0I7QUFDdkIsYUFBUUMsTUFBRCxDQUFnQkMsSUFBaEIsQ0FBcUJDLEtBQXJCLENBQTJCQyxPQUEzQixDQUFtQyxLQUFLQyxLQUFMLENBQVdDLGtCQUE5QyxFQUFrRSxPQUFsRSxDQUFQO0FBQ0g7QUFQTDtBQUFBO0FBQUEsc0NBUzhCO0FBQ3RCLGFBQVFMLE1BQUQsQ0FBZ0JDLElBQWhCLENBQXFCQyxLQUFyQixDQUEyQkMsT0FBM0IsQ0FBbUMsS0FBS0MsS0FBTCxDQUFXRSxjQUE5QyxFQUE4RCxPQUE5RCxDQUFQO0FBQ0g7QUFYTDtBQUFBO0FBQUEsdUNBYStCO0FBQUE7O0FBQ3ZCLFVBQU1DLGFBQWEsR0FBRyxTQUFo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QUFBQTtBQUFBO0FBQUEsa0JBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUxELEVBYUcsS0FBS0MsZ0JBQUwsRUFiSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBUCxDQURLLENBZ0JUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQztBQTVHTDs7QUFBQTtBQUFBLEVBQWtDQywrQ0FBbEMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC41ZjNkMmEzNjgwMDM3ODBiZmJlMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Db250cm9sUGFuZWwubW9kdWxlLmNzcyc7XHJcbmltcG9ydCB7IElDb250cm9sUGFuZWxQcm9wcyB9IGZyb20gXCIuL0lDb250cm9sUGFuZWwucHJvcHNcIjtcclxuaW1wb3J0IHsgSUNvbnRyb2xQYW5lbFN0YXRlIH0gZnJvbSBcIi4vSUNvbnRyb2xQYW5lbC5zdGF0ZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENvbnRyb2xQYW5lbCBleHRlbmRzIENvbXBvbmVudDxJQ29udHJvbFBhbmVsUHJvcHMsIElDb250cm9sUGFuZWxTdGF0ZT4ge1xyXG4gICAgc3RhdGU6IElDb250cm9sUGFuZWxTdGF0ZSA9IHtcclxuICAgICAgICBldGhBbW91bnRUb1BheTogMCxcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFJld2FyZEJhbGFuY2UoKSB7XHJcbiAgICAgICAgcmV0dXJuICh3aW5kb3cgYXMgYW55KS53ZWIzLnV0aWxzLmZyb21XZWkodGhpcy5wcm9wcy53YXZlY3RUb2tlbkJhbGFuY2UsICdFdGhlcicpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0U3Rha2VkQ3J5cHRvKCkge1xyXG4gICAgICAgIHJldHVybiAod2luZG93IGFzIGFueSkud2ViMy51dGlscy5mcm9tV2VpKHRoaXMucHJvcHMuc3Rha2luZ0JhbGFuY2UsICdFdGhlcicpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbG9hZFBheW1lbnRJbnB1dCgpIHtcclxuICAgICAgICBjb25zdCBzdWJtaXRQYXltZW50ID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgYW1vdW50ID0gdGhpcy5zdGF0ZS5ldGhBbW91bnRUb1BheS50b1N0cmluZygpXHJcbiAgICAgICAgICAgIGFtb3VudCA9ICh3aW5kb3cgYXMgYW55KS53ZWIzLnV0aWxzLnRvV2VpKGFtb3VudCwgJ0V0aGVyJylcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5zdGFrZVRva2VucyhhbW91bnQpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gKDw+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wYXltZW50SW5wdXR9PlxyXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwicHJpY2VcIiBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS03MDBcIj5QcmljZTwvbGFiZWw+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xIHJlbGF0aXZlIHJvdW5kZWQtbWQgc2hhZG93LXNtXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LXktMCBsZWZ0LTAgcGwtMyBmbGV4IGl0ZW1zLWNlbnRlciBwb2ludGVyLWV2ZW50cy1ub25lXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDAgc206dGV4dC1zbVwiPs6ePC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwicHJpY2VcIiBpZD1cInByaWNlXCIgY2xhc3NOYW1lPVwiZm9jdXM6cmluZy1pbmRpZ28tNTAwIGZvY3VzOmJvcmRlci1pbmRpZ28tNTAwIGJsb2NrIHctZnVsbCBwbC03IHByLTEyIHNtOnRleHQtc20gYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbWQgdGV4dC1ibGFja1wiIFxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjAuMDBcIiB2YWx1ZT17dGhpcy5zdGF0ZS5ldGhBbW91bnRUb1BheX0gLz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQteS0wIHJpZ2h0LTAgZmxleCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjdXJyZW5jeVwiIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5DdXJyZW5jeTwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxzZWxlY3QgaWQ9XCJDdXJyZW5jeVwiIG5hbWU9XCJjdXJyZW5jeVwiIGNsYXNzTmFtZT1cImZvY3VzOnJpbmctaW5kaWdvLTUwMCBmb2N1czpib3JkZXItaW5kaWdvLTUwMCBoLWZ1bGwgcHktMCBwbC0yIHByLTcgYm9yZGVyLXRyYW5zcGFyZW50IGJnLXRyYW5zcGFyZW50IHRleHQtZ3JheS01MDAgc206dGV4dC1zbSByb3VuZGVkLW1kXCI+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbj5FVEg8L29wdGlvbj5cclxuICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIFxyXG4gICAgICA8YnV0dG9uIGNsYXNzPVwidy1mdWxsIGgtMTIgcHgtNiB0ZXh0LWluZGlnby0xMDAgdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMTUwIGJnLWluZGlnby03MDAgcm91bmRlZC1sZyBmb2N1czpzaGFkb3ctb3V0bGluZSBob3ZlcjpiZy1pbmRpZ28tODAwXCI+TGFyZ2UgYmxvY2sgYnV0dG9uPC9idXR0b24+XHJcbiAgICAgIDwvPik7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiA8ZGl2IGlkPXtzdHlsZXMuY29udHJvbFBhbmVsQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PldhdmVjdCBUb2tlbjwvaDE+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5wfT5XZSBhdCBXYXZlY3Qgbm90IG9ubHkgYWNjZXB0IGNlcnRhaW4gY3J5cHRvcyBzdWNoIGFzIEVUSCwgQlRDIG9yIFhNUiwgYnV0IGV2ZW4gd2FudCB0byBlbmNvdXJhZ2Ugb3VyIGN1c3RvbWVycyB0byBkbyBzby48L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5wfT5UaGVyZWZvcmUsIGVhY2ggcGF5bWVudCBzZXR0bGVkIGluIGNyeXB0b3Mgd2lsbCBiZSByZXdhcmRlZCB3aXRoIHNvLWNhbGxlZCBXYXZlY3QtVG9rZW5zIHdoaWNoIGNhbiBiZSByZWRlZW1lZCBpbiBmdXR1cmUgcHJvamVjdHMuPC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMucH0+QmFzaWNhbGx5LCBpdCdzIGp1c3QgYSBmdXR1cmlzdGljIGFuZCBzZWN1cmUgdm91Y2hlciA6LSk8L3A+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnB9PkFscmVhZHkgcGFpZCBpbiBjcnlwdG86Jm5ic3A7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+e3RoaXMuZ2V0U3Rha2VkQ3J5cHRvKCl9IEVUSDwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5wfT5SZXdhcmQgQmFsYW5jZTombmJzcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz57dGhpcy5nZXRSZXdhcmRCYWxhbmNlKCl9IFdBQ1Q8L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHsgdGhpcy5sb2FkUGF5bWVudElucHV0KCkgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgLy8gICAgIHJldHVybiA8Pjx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZSB0YWJsZS1ib3JkZXJsZXNzIHRleHQtbXV0ZWQgdGV4dC1jZW50ZXJcIj5cclxuICAgIC8vICAgICA8dGhlYWQ+XHJcbiAgICAvLyAgICAgICA8dHI+XHJcbiAgICAvLyAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPlN0YWtpbmcgQmFsYW5jZTwvdGg+XHJcbiAgICAvLyAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPlJld2FyZCBCYWxhbmNlPC90aD5cclxuICAgIC8vICAgICAgIDwvdHI+XHJcbiAgICAvLyAgICAgPC90aGVhZD5cclxuICAgIC8vICAgICA8dGJvZHk+XHJcbiAgICAvLyAgICAgICA8dHI+XHJcbiAgICAvLyAgICAgICAgIDx0ZD57KHdpbmRvdyBhcyBhbnkpLndlYjMudXRpbHMuZnJvbVdlaSh0aGlzLnByb3BzLnN0YWtpbmdCYWxhbmNlLCAnRXRoZXInKX0gbURBSTwvdGQ+XHJcbiAgICAvLyAgICAgICAgIDx0ZD57KHdpbmRvdyBhcyBhbnkpLndlYjMudXRpbHMuZnJvbVdlaSh0aGlzLnByb3BzLmRhcHBUb2tlbkJhbGFuY2UsICdFdGhlcicpfSBEQVBQPC90ZD5cclxuICAgIC8vICAgICAgIDwvdHI+XHJcbiAgICAvLyAgICAgPC90Ym9keT5cclxuICAgIC8vICAgPC90YWJsZT5cclxuICAgIFxyXG4gICAgLy8gICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgbWItNFwiID5cclxuICAgIFxyXG4gICAgLy8gICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICBcclxuICAgIC8vICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cIm1iLTNcIiBvblN1Ym1pdD17KGV2ZW50KSA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG4gICAgLy8gICAgICAgICAgIGxldCBhbW91bnRcclxuICAgIC8vICAgICAgICAgICBhbW91bnQgPSB0aGlzLmlucHV0LnZhbHVlLnRvU3RyaW5nKClcclxuICAgIC8vICAgICAgICAgICBhbW91bnQgPSAod2luZG93IGFzIGFueSkud2ViMy51dGlscy50b1dlaShhbW91bnQsICdFdGhlcicpXHJcbiAgICAvLyAgICAgICAgICAgdGhpcy5wcm9wcy5zdGFrZVRva2VucyhhbW91bnQpXHJcbiAgICAvLyAgICAgICAgIH19PlxyXG4gICAgLy8gICAgICAgICA8ZGl2PlxyXG4gICAgLy8gICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmbG9hdC1sZWZ0XCI+PGI+U3Rha2UgVG9rZW5zPC9iPjwvbGFiZWw+XHJcbiAgICAvLyAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxvYXQtcmlnaHQgdGV4dC1tdXRlZFwiPlxyXG4gICAgLy8gICAgICAgICAgICAgQmFsYW5jZTogeyh3aW5kb3cgYXMgYW55KS53ZWIzLnV0aWxzLmZyb21XZWkodGhpcy5wcm9wcy5kYWlUb2tlbkJhbGFuY2UsICdFdGhlcicpfVxyXG4gICAgLy8gICAgICAgICAgIDwvc3Bhbj5cclxuICAgIC8vICAgICAgICAgPC9kaXY+XHJcbiAgICAvLyAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAgbWItNFwiPlxyXG4gICAgLy8gICAgICAgICAgIDxpbnB1dFxyXG4gICAgLy8gICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgLy8gICAgICAgICAgICAgcmVmPXsoaW5wdXQpID0+IHsgdGhpcy5pbnB1dCA9IGlucHV0IH19XHJcbiAgICAvLyAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLWxnXCJcclxuICAgIC8vICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMFwiXHJcbiAgICAvLyAgICAgICAgICAgICByZXF1aXJlZCAvPlxyXG4gICAgLy8gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtYXBwZW5kXCI+XHJcbiAgICAvLyAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXRleHRcIj5cclxuICAgIC8vICAgICAgICAgICAgICAgPGltZyBzcmM9Jy9kYWkucG5nJyB3aWR0aD0nYXV0bycgaGVpZ2h0PSczMicgYWx0PVwiXCIvPlxyXG4gICAgLy8gICAgICAgICAgICAgICAmbmJzcDsmbmJzcDsmbmJzcDsgbURBSVxyXG4gICAgLy8gICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAvLyAgICAgICAgICAgPC9kaXY+XHJcbiAgICAvLyAgICAgICAgIDwvZGl2PlxyXG4gICAgLy8gICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgYnRuLWJsb2NrIGJ0bi1sZ1wiPlNUQUtFITwvYnV0dG9uPlxyXG4gICAgLy8gICAgICAgPC9mb3JtPlxyXG4gICAgLy8gICAgIDwvZGl2PiBcclxuICAgIC8vICAgICAgIDwvZGl2PjwvPlxyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==
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

      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
        className: _ControlPanel_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.paymentInput,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("label", {
          htmlFor: "price",
          className: "block text-sm font-medium text-gray-700",
          children: "Price"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
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
              lineNumber: 30,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
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
            lineNumber: 32,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
            className: "absolute inset-y-0 right-0 flex items-center",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("label", {
              htmlFor: "currency",
              className: "sr-only",
              children: "Currency"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("select", {
              id: "Currency",
              name: "currency",
              className: "focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("option", {
                children: "ETH"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 37,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 36,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 17
      }, this);
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
          lineNumber: 46,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("p", {
          className: _ControlPanel_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.p,
          children: "We at Wavect not only accept certain cryptos such as ETH, BTC or XMR, but even want to encourage our customers to do so."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("p", {
          className: _ControlPanel_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.p,
          children: "Therefore, each payment settled in cryptos will be rewarded with so-called Wavect-Tokens which can be redeemed in future projects."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("p", {
          className: _ControlPanel_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.p,
          children: "Basically, it's just a futuristic and secure voucher :-)"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("p", {
            className: _ControlPanel_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.p,
            children: ["Already paid in crypto:\xA0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("strong", {
              children: [this.getStakedCrypto(), " ETH"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("p", {
            className: _ControlPanel_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.p,
            children: ["Reward Balance:\xA0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("strong", {
              children: [this.getRewardBalance(), " WACT"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 17
        }, this), this.loadPaymentInput()]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 45,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2FwaS9Db250cm9sUGFuZWwvQ29udHJvbFBhbmVsLnRzeCJdLCJuYW1lcyI6WyJDb250cm9sUGFuZWwiLCJldGhBbW91bnRUb1BheSIsIndpbmRvdyIsIndlYjMiLCJ1dGlscyIsImZyb21XZWkiLCJwcm9wcyIsIndhdmVjdFRva2VuQmFsYW5jZSIsInN0YWtpbmdCYWxhbmNlIiwic3VibWl0UGF5bWVudCIsImFtb3VudCIsInN0YXRlIiwidG9TdHJpbmciLCJ0b1dlaSIsInN0YWtlVG9rZW5zIiwic3R5bGVzIiwicGF5bWVudElucHV0IiwiY29udHJvbFBhbmVsQ29udGFpbmVyIiwiaGVhZGVyIiwicCIsImdldFN0YWtlZENyeXB0byIsImdldFJld2FyZEJhbGFuY2UiLCJsb2FkUGF5bWVudElucHV0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBSU8sSUFBTUEsWUFBYjtBQUFBOztBQUFBOztBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBLDRUQUNnQztBQUN4QkMsb0JBQWMsRUFBRTtBQURRLEtBRGhDOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLHVDQUsrQjtBQUN2QixhQUFRQyxNQUFELENBQWdCQyxJQUFoQixDQUFxQkMsS0FBckIsQ0FBMkJDLE9BQTNCLENBQW1DLEtBQUtDLEtBQUwsQ0FBV0Msa0JBQTlDLEVBQWtFLE9BQWxFLENBQVA7QUFDSDtBQVBMO0FBQUE7QUFBQSxzQ0FTOEI7QUFDdEIsYUFBUUwsTUFBRCxDQUFnQkMsSUFBaEIsQ0FBcUJDLEtBQXJCLENBQTJCQyxPQUEzQixDQUFtQyxLQUFLQyxLQUFMLENBQVdFLGNBQTlDLEVBQThELE9BQTlELENBQVA7QUFDSDtBQVhMO0FBQUE7QUFBQSx1Q0FhK0I7QUFBQTs7QUFDdkIsVUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBQ3hCLFlBQUlDLE1BQU0sR0FBRyxNQUFJLENBQUNDLEtBQUwsQ0FBV1YsY0FBWCxDQUEwQlcsUUFBMUIsRUFBYjs7QUFDQUYsY0FBTSxHQUFJUixNQUFELENBQWdCQyxJQUFoQixDQUFxQkMsS0FBckIsQ0FBMkJTLEtBQTNCLENBQWlDSCxNQUFqQyxFQUF5QyxPQUF6QyxDQUFUOztBQUNBLGNBQUksQ0FBQ0osS0FBTCxDQUFXUSxXQUFYLENBQXVCSixNQUF2QjtBQUNILE9BSkQ7O0FBTUEsMEJBQVE7QUFBSyxpQkFBUyxFQUFFSywrREFBTSxDQUFDQyxZQUF2QjtBQUFBLGdDQUNSO0FBQU8saUJBQU8sRUFBQyxPQUFmO0FBQXVCLG1CQUFTLEVBQUMseUNBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURRLGVBRVI7QUFBSyxtQkFBUyxFQUFDLG9DQUFmO0FBQUEsa0NBQ0U7QUFBSyxxQkFBUyxFQUFDLHNFQUFmO0FBQUEsbUNBQ0U7QUFBTSx1QkFBUyxFQUFDLDBCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFJRTtBQUFPLGdCQUFJLEVBQUMsTUFBWjtBQUFtQixnQkFBSSxFQUFDLE9BQXhCO0FBQWdDLGNBQUUsRUFBQyxPQUFuQztBQUEyQyxxQkFBUyxFQUFDLHdIQUFyRDtBQUNFLHVCQUFXLEVBQUMsTUFEZDtBQUNxQixpQkFBSyxFQUFFLEtBQUtMLEtBQUwsQ0FBV1Y7QUFEdkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFKRixlQU1FO0FBQUsscUJBQVMsRUFBQyw4Q0FBZjtBQUFBLG9DQUNFO0FBQU8scUJBQU8sRUFBQyxVQUFmO0FBQTBCLHVCQUFTLEVBQUMsU0FBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsZUFFRTtBQUFRLGdCQUFFLEVBQUMsVUFBWDtBQUFzQixrQkFBSSxFQUFDLFVBQTNCO0FBQXNDLHVCQUFTLEVBQUMsMklBQWhEO0FBQUEscUNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRlE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQVI7QUFnQkg7QUFwQ0w7QUFBQTtBQUFBLDZCQXNDYTtBQUNMLDBCQUFPO0FBQUssVUFBRSxFQUFFYywrREFBTSxDQUFDRSxxQkFBaEI7QUFBQSxnQ0FDQztBQUFJLG1CQUFTLEVBQUVGLCtEQUFNLENBQUNHLE1BQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURELGVBRUM7QUFBRyxtQkFBUyxFQUFFSCwrREFBTSxDQUFDSSxDQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRCxlQUdDO0FBQUcsbUJBQVMsRUFBRUosK0RBQU0sQ0FBQ0ksQ0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSEQsZUFJQztBQUFHLG1CQUFTLEVBQUVKLCtEQUFNLENBQUNJLENBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpELGVBS0M7QUFBQSxrQ0FDSTtBQUFHLHFCQUFTLEVBQUVKLCtEQUFNLENBQUNJLENBQXJCO0FBQUEsbUVBQ0k7QUFBQSx5QkFBUyxLQUFLQyxlQUFMLEVBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixlQUlJO0FBQUcscUJBQVMsRUFBRUwsK0RBQU0sQ0FBQ0ksQ0FBckI7QUFBQSwyREFDSTtBQUFBLHlCQUFTLEtBQUtFLGdCQUFMLEVBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTEQsRUFhRyxLQUFLQyxnQkFBTCxFQWJIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUFQLENBREssQ0FnQlQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNDO0FBeEdMOztBQUFBO0FBQUEsRUFBa0NDLCtDQUFsQyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjU2NDhhOGQ2MzA2NWM1YTM3M2E3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0NvbnRyb2xQYW5lbC5tb2R1bGUuY3NzJztcclxuaW1wb3J0IHsgSUNvbnRyb2xQYW5lbFByb3BzIH0gZnJvbSBcIi4vSUNvbnRyb2xQYW5lbC5wcm9wc1wiO1xyXG5pbXBvcnQgeyBJQ29udHJvbFBhbmVsU3RhdGUgfSBmcm9tIFwiLi9JQ29udHJvbFBhbmVsLnN0YXRlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ29udHJvbFBhbmVsIGV4dGVuZHMgQ29tcG9uZW50PElDb250cm9sUGFuZWxQcm9wcywgSUNvbnRyb2xQYW5lbFN0YXRlPiB7XHJcbiAgICBzdGF0ZTogSUNvbnRyb2xQYW5lbFN0YXRlID0ge1xyXG4gICAgICAgIGV0aEFtb3VudFRvUGF5OiAwLFxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0UmV3YXJkQmFsYW5jZSgpIHtcclxuICAgICAgICByZXR1cm4gKHdpbmRvdyBhcyBhbnkpLndlYjMudXRpbHMuZnJvbVdlaSh0aGlzLnByb3BzLndhdmVjdFRva2VuQmFsYW5jZSwgJ0V0aGVyJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRTdGFrZWRDcnlwdG8oKSB7XHJcbiAgICAgICAgcmV0dXJuICh3aW5kb3cgYXMgYW55KS53ZWIzLnV0aWxzLmZyb21XZWkodGhpcy5wcm9wcy5zdGFraW5nQmFsYW5jZSwgJ0V0aGVyJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBsb2FkUGF5bWVudElucHV0KCkge1xyXG4gICAgICAgIGNvbnN0IHN1Ym1pdFBheW1lbnQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBhbW91bnQgPSB0aGlzLnN0YXRlLmV0aEFtb3VudFRvUGF5LnRvU3RyaW5nKClcclxuICAgICAgICAgICAgYW1vdW50ID0gKHdpbmRvdyBhcyBhbnkpLndlYjMudXRpbHMudG9XZWkoYW1vdW50LCAnRXRoZXInKVxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLnN0YWtlVG9rZW5zKGFtb3VudClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAoPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wYXltZW50SW5wdXR9PlxyXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwicHJpY2VcIiBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS03MDBcIj5QcmljZTwvbGFiZWw+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xIHJlbGF0aXZlIHJvdW5kZWQtbWQgc2hhZG93LXNtXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LXktMCBsZWZ0LTAgcGwtMyBmbGV4IGl0ZW1zLWNlbnRlciBwb2ludGVyLWV2ZW50cy1ub25lXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDAgc206dGV4dC1zbVwiPs6ePC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwicHJpY2VcIiBpZD1cInByaWNlXCIgY2xhc3NOYW1lPVwiZm9jdXM6cmluZy1pbmRpZ28tNTAwIGZvY3VzOmJvcmRlci1pbmRpZ28tNTAwIGJsb2NrIHctZnVsbCBwbC03IHByLTEyIHNtOnRleHQtc20gYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbWQgdGV4dC1ibGFja1wiIFxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjAuMDBcIiB2YWx1ZT17dGhpcy5zdGF0ZS5ldGhBbW91bnRUb1BheX0gLz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQteS0wIHJpZ2h0LTAgZmxleCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjdXJyZW5jeVwiIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5DdXJyZW5jeTwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxzZWxlY3QgaWQ9XCJDdXJyZW5jeVwiIG5hbWU9XCJjdXJyZW5jeVwiIGNsYXNzTmFtZT1cImZvY3VzOnJpbmctaW5kaWdvLTUwMCBmb2N1czpib3JkZXItaW5kaWdvLTUwMCBoLWZ1bGwgcHktMCBwbC0yIHByLTcgYm9yZGVyLXRyYW5zcGFyZW50IGJnLXRyYW5zcGFyZW50IHRleHQtZ3JheS01MDAgc206dGV4dC1zbSByb3VuZGVkLW1kXCI+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbj5FVEg8L29wdGlvbj5cclxuICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+KTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIDxkaXYgaWQ9e3N0eWxlcy5jb250cm9sUGFuZWxDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+V2F2ZWN0IFRva2VuPC9oMT5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnB9PldlIGF0IFdhdmVjdCBub3Qgb25seSBhY2NlcHQgY2VydGFpbiBjcnlwdG9zIHN1Y2ggYXMgRVRILCBCVEMgb3IgWE1SLCBidXQgZXZlbiB3YW50IHRvIGVuY291cmFnZSBvdXIgY3VzdG9tZXJzIHRvIGRvIHNvLjwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnB9PlRoZXJlZm9yZSwgZWFjaCBwYXltZW50IHNldHRsZWQgaW4gY3J5cHRvcyB3aWxsIGJlIHJld2FyZGVkIHdpdGggc28tY2FsbGVkIFdhdmVjdC1Ub2tlbnMgd2hpY2ggY2FuIGJlIHJlZGVlbWVkIGluIGZ1dHVyZSBwcm9qZWN0cy48L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5wfT5CYXNpY2FsbHksIGl0J3MganVzdCBhIGZ1dHVyaXN0aWMgYW5kIHNlY3VyZSB2b3VjaGVyIDotKTwvcD5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMucH0+QWxyZWFkeSBwYWlkIGluIGNyeXB0bzombmJzcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz57dGhpcy5nZXRTdGFrZWRDcnlwdG8oKX0gRVRIPC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnB9PlJld2FyZCBCYWxhbmNlOiZuYnNwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPnt0aGlzLmdldFJld2FyZEJhbGFuY2UoKX0gV0FDVDwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgeyB0aGlzLmxvYWRQYXltZW50SW5wdXQoKSB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAvLyAgICAgcmV0dXJuIDw+PHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlIHRhYmxlLWJvcmRlcmxlc3MgdGV4dC1tdXRlZCB0ZXh0LWNlbnRlclwiPlxyXG4gICAgLy8gICAgIDx0aGVhZD5cclxuICAgIC8vICAgICAgIDx0cj5cclxuICAgIC8vICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+U3Rha2luZyBCYWxhbmNlPC90aD5cclxuICAgIC8vICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+UmV3YXJkIEJhbGFuY2U8L3RoPlxyXG4gICAgLy8gICAgICAgPC90cj5cclxuICAgIC8vICAgICA8L3RoZWFkPlxyXG4gICAgLy8gICAgIDx0Ym9keT5cclxuICAgIC8vICAgICAgIDx0cj5cclxuICAgIC8vICAgICAgICAgPHRkPnsod2luZG93IGFzIGFueSkud2ViMy51dGlscy5mcm9tV2VpKHRoaXMucHJvcHMuc3Rha2luZ0JhbGFuY2UsICdFdGhlcicpfSBtREFJPC90ZD5cclxuICAgIC8vICAgICAgICAgPHRkPnsod2luZG93IGFzIGFueSkud2ViMy51dGlscy5mcm9tV2VpKHRoaXMucHJvcHMuZGFwcFRva2VuQmFsYW5jZSwgJ0V0aGVyJyl9IERBUFA8L3RkPlxyXG4gICAgLy8gICAgICAgPC90cj5cclxuICAgIC8vICAgICA8L3Rib2R5PlxyXG4gICAgLy8gICA8L3RhYmxlPlxyXG4gICAgXHJcbiAgICAvLyAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBtYi00XCIgPlxyXG4gICAgXHJcbiAgICAvLyAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgIFxyXG4gICAgLy8gICAgICAgPGZvcm0gY2xhc3NOYW1lPVwibWItM1wiIG9uU3VibWl0PXsoZXZlbnQpID0+IHtcclxuICAgIC8vICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAvLyAgICAgICAgICAgbGV0IGFtb3VudFxyXG4gICAgLy8gICAgICAgICAgIGFtb3VudCA9IHRoaXMuaW5wdXQudmFsdWUudG9TdHJpbmcoKVxyXG4gICAgLy8gICAgICAgICAgIGFtb3VudCA9ICh3aW5kb3cgYXMgYW55KS53ZWIzLnV0aWxzLnRvV2VpKGFtb3VudCwgJ0V0aGVyJylcclxuICAgIC8vICAgICAgICAgICB0aGlzLnByb3BzLnN0YWtlVG9rZW5zKGFtb3VudClcclxuICAgIC8vICAgICAgICAgfX0+XHJcbiAgICAvLyAgICAgICAgIDxkaXY+XHJcbiAgICAvLyAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZsb2F0LWxlZnRcIj48Yj5TdGFrZSBUb2tlbnM8L2I+PC9sYWJlbD5cclxuICAgIC8vICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbG9hdC1yaWdodCB0ZXh0LW11dGVkXCI+XHJcbiAgICAvLyAgICAgICAgICAgICBCYWxhbmNlOiB7KHdpbmRvdyBhcyBhbnkpLndlYjMudXRpbHMuZnJvbVdlaSh0aGlzLnByb3BzLmRhaVRva2VuQmFsYW5jZSwgJ0V0aGVyJyl9XHJcbiAgICAvLyAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgLy8gICAgICAgICA8L2Rpdj5cclxuICAgIC8vICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cCBtYi00XCI+XHJcbiAgICAvLyAgICAgICAgICAgPGlucHV0XHJcbiAgICAvLyAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAvLyAgICAgICAgICAgICByZWY9eyhpbnB1dCkgPT4geyB0aGlzLmlucHV0ID0gaW5wdXQgfX1cclxuICAgIC8vICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtbGdcIlxyXG4gICAgLy8gICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIwXCJcclxuICAgIC8vICAgICAgICAgICAgIHJlcXVpcmVkIC8+XHJcbiAgICAvLyAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1hcHBlbmRcIj5cclxuICAgIC8vICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtdGV4dFwiPlxyXG4gICAgLy8gICAgICAgICAgICAgICA8aW1nIHNyYz0nL2RhaS5wbmcnIHdpZHRoPSdhdXRvJyBoZWlnaHQ9JzMyJyBhbHQ9XCJcIi8+XHJcbiAgICAvLyAgICAgICAgICAgICAgICZuYnNwOyZuYnNwOyZuYnNwOyBtREFJXHJcbiAgICAvLyAgICAgICAgICAgICA8L2Rpdj5cclxuICAgIC8vICAgICAgICAgICA8L2Rpdj5cclxuICAgIC8vICAgICAgICAgPC9kaXY+XHJcbiAgICAvLyAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4tYmxvY2sgYnRuLWxnXCI+U1RBS0UhPC9idXR0b24+XHJcbiAgICAvLyAgICAgICA8L2Zvcm0+XHJcbiAgICAvLyAgICAgPC9kaXY+IFxyXG4gICAgLy8gICAgICAgPC9kaXY+PC8+XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9
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

    Object(C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "input", void 0);

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
    key: "render",
    value: function render() {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
        id: _ControlPanel_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.controlPanelContainer,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("h1", {
          className: _ControlPanel_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.header,
          children: "Wavect Token"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("p", {
          className: _ControlPanel_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.p,
          children: "We at Wavect not only accept certain cryptos such as ETH, BTC or XMR, but even want to encourage our customers to do so."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("p", {
          className: _ControlPanel_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.p,
          children: "Therefore, each payment settled in cryptos will be rewarded with so-called Wavect-Tokens which can be redeemed in future projects."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("p", {
          className: _ControlPanel_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.p,
          children: "Basically, it's just a futuristic and secure voucher :-)"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("p", {
            className: _ControlPanel_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.p,
            children: ["Already paid in crypto:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("strong", {
              children: [this.getStakedCrypto(), " ETH"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 24,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("p", {
            className: _ControlPanel_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.p,
            children: ["Reward Balance:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("strong", {
              children: [this.getRewardBalance(), " WACT"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 27,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 17,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2FwaS9Db250cm9sUGFuZWwvQ29udHJvbFBhbmVsLnRzeCJdLCJuYW1lcyI6WyJDb250cm9sUGFuZWwiLCJ3aW5kb3ciLCJ3ZWIzIiwidXRpbHMiLCJmcm9tV2VpIiwicHJvcHMiLCJ3YXZlY3RUb2tlbkJhbGFuY2UiLCJzdGFraW5nQmFsYW5jZSIsInN0eWxlcyIsImNvbnRyb2xQYW5lbENvbnRhaW5lciIsImhlYWRlciIsInAiLCJnZXRTdGFrZWRDcnlwdG8iLCJnZXRSZXdhcmRCYWxhbmNlIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBR08sSUFBTUEsWUFBYjtBQUFBOztBQUFBOztBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLHVDQUcrQjtBQUN2QixhQUFRQyxNQUFELENBQWdCQyxJQUFoQixDQUFxQkMsS0FBckIsQ0FBMkJDLE9BQTNCLENBQW1DLEtBQUtDLEtBQUwsQ0FBV0Msa0JBQTlDLEVBQWtFLE9BQWxFLENBQVA7QUFDSDtBQUxMO0FBQUE7QUFBQSxzQ0FPOEI7QUFDdEIsYUFBUUwsTUFBRCxDQUFnQkMsSUFBaEIsQ0FBcUJDLEtBQXJCLENBQTJCQyxPQUEzQixDQUFtQyxLQUFLQyxLQUFMLENBQVdFLGNBQTlDLEVBQThELE9BQTlELENBQVA7QUFDSDtBQVRMO0FBQUE7QUFBQSw2QkFXYTtBQUNMLDBCQUFPO0FBQUssVUFBRSxFQUFFQywrREFBTSxDQUFDQyxxQkFBaEI7QUFBQSxnQ0FDQztBQUFJLG1CQUFTLEVBQUVELCtEQUFNLENBQUNFLE1BQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURELGVBRUM7QUFBRyxtQkFBUyxFQUFFRiwrREFBTSxDQUFDRyxDQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRCxlQUdDO0FBQUcsbUJBQVMsRUFBRUgsK0RBQU0sQ0FBQ0csQ0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSEQsZUFJQztBQUFHLG1CQUFTLEVBQUVILCtEQUFNLENBQUNHLENBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpELGVBS0M7QUFBQSxrQ0FDSTtBQUFHLHFCQUFTLEVBQUVILCtEQUFNLENBQUNHLENBQXJCO0FBQUEsK0RBQ0k7QUFBQSx5QkFBUyxLQUFLQyxlQUFMLEVBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixlQUlJO0FBQUcscUJBQVMsRUFBRUosK0RBQU0sQ0FBQ0csQ0FBckI7QUFBQSx1REFDSTtBQUFBLHlCQUFTLEtBQUtFLGdCQUFMLEVBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQVAsQ0FESyxDQWVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQztBQTVFTDs7QUFBQTtBQUFBLEVBQWtDQywrQ0FBbEMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5kMDI4ZDQ3NWM3Njk0MmJjMjA3My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Db250cm9sUGFuZWwubW9kdWxlLmNzcyc7XHJcbmltcG9ydCB7IElDb250cm9sUGFuZWxQcm9wcyB9IGZyb20gXCIuL0lDb250cm9sUGFuZWwucHJvcHNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDb250cm9sUGFuZWwgZXh0ZW5kcyBDb21wb25lbnQ8SUNvbnRyb2xQYW5lbFByb3BzLCBhbnk+IHtcclxuICAgIHByaXZhdGUgaW5wdXQ6IGFueTtcclxuXHJcbiAgICBwcml2YXRlIGdldFJld2FyZEJhbGFuY2UoKSB7XHJcbiAgICAgICAgcmV0dXJuICh3aW5kb3cgYXMgYW55KS53ZWIzLnV0aWxzLmZyb21XZWkodGhpcy5wcm9wcy53YXZlY3RUb2tlbkJhbGFuY2UsICdFdGhlcicpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0U3Rha2VkQ3J5cHRvKCkge1xyXG4gICAgICAgIHJldHVybiAod2luZG93IGFzIGFueSkud2ViMy51dGlscy5mcm9tV2VpKHRoaXMucHJvcHMuc3Rha2luZ0JhbGFuY2UsICdFdGhlcicpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gPGRpdiBpZD17c3R5bGVzLmNvbnRyb2xQYW5lbENvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5XYXZlY3QgVG9rZW48L2gxPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMucH0+V2UgYXQgV2F2ZWN0IG5vdCBvbmx5IGFjY2VwdCBjZXJ0YWluIGNyeXB0b3Mgc3VjaCBhcyBFVEgsIEJUQyBvciBYTVIsIGJ1dCBldmVuIHdhbnQgdG8gZW5jb3VyYWdlIG91ciBjdXN0b21lcnMgdG8gZG8gc28uPC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMucH0+VGhlcmVmb3JlLCBlYWNoIHBheW1lbnQgc2V0dGxlZCBpbiBjcnlwdG9zIHdpbGwgYmUgcmV3YXJkZWQgd2l0aCBzby1jYWxsZWQgV2F2ZWN0LVRva2VucyB3aGljaCBjYW4gYmUgcmVkZWVtZWQgaW4gZnV0dXJlIHByb2plY3RzLjwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnB9PkJhc2ljYWxseSwgaXQncyBqdXN0IGEgZnV0dXJpc3RpYyBhbmQgc2VjdXJlIHZvdWNoZXIgOi0pPC9wPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5wfT5BbHJlYWR5IHBhaWQgaW4gY3J5cHRvOiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz57dGhpcy5nZXRTdGFrZWRDcnlwdG8oKX0gRVRIPC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnB9PlJld2FyZCBCYWxhbmNlOiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz57dGhpcy5nZXRSZXdhcmRCYWxhbmNlKCl9IFdBQ1Q8L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIC8vICAgICByZXR1cm4gPD48dGFibGUgY2xhc3NOYW1lPVwidGFibGUgdGFibGUtYm9yZGVybGVzcyB0ZXh0LW11dGVkIHRleHQtY2VudGVyXCI+XHJcbiAgICAvLyAgICAgPHRoZWFkPlxyXG4gICAgLy8gICAgICAgPHRyPlxyXG4gICAgLy8gICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5TdGFraW5nIEJhbGFuY2U8L3RoPlxyXG4gICAgLy8gICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5SZXdhcmQgQmFsYW5jZTwvdGg+XHJcbiAgICAvLyAgICAgICA8L3RyPlxyXG4gICAgLy8gICAgIDwvdGhlYWQ+XHJcbiAgICAvLyAgICAgPHRib2R5PlxyXG4gICAgLy8gICAgICAgPHRyPlxyXG4gICAgLy8gICAgICAgICA8dGQ+eyh3aW5kb3cgYXMgYW55KS53ZWIzLnV0aWxzLmZyb21XZWkodGhpcy5wcm9wcy5zdGFraW5nQmFsYW5jZSwgJ0V0aGVyJyl9IG1EQUk8L3RkPlxyXG4gICAgLy8gICAgICAgICA8dGQ+eyh3aW5kb3cgYXMgYW55KS53ZWIzLnV0aWxzLmZyb21XZWkodGhpcy5wcm9wcy5kYXBwVG9rZW5CYWxhbmNlLCAnRXRoZXInKX0gREFQUDwvdGQ+XHJcbiAgICAvLyAgICAgICA8L3RyPlxyXG4gICAgLy8gICAgIDwvdGJvZHk+XHJcbiAgICAvLyAgIDwvdGFibGU+XHJcbiAgICBcclxuICAgIC8vICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIG1iLTRcIiA+XHJcbiAgICBcclxuICAgIC8vICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgXHJcbiAgICAvLyAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJtYi0zXCIgb25TdWJtaXQ9eyhldmVudCkgPT4ge1xyXG4gICAgLy8gICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuICAgIC8vICAgICAgICAgICBsZXQgYW1vdW50XHJcbiAgICAvLyAgICAgICAgICAgYW1vdW50ID0gdGhpcy5pbnB1dC52YWx1ZS50b1N0cmluZygpXHJcbiAgICAvLyAgICAgICAgICAgYW1vdW50ID0gKHdpbmRvdyBhcyBhbnkpLndlYjMudXRpbHMudG9XZWkoYW1vdW50LCAnRXRoZXInKVxyXG4gICAgLy8gICAgICAgICAgIHRoaXMucHJvcHMuc3Rha2VUb2tlbnMoYW1vdW50KVxyXG4gICAgLy8gICAgICAgICB9fT5cclxuICAgIC8vICAgICAgICAgPGRpdj5cclxuICAgIC8vICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZmxvYXQtbGVmdFwiPjxiPlN0YWtlIFRva2VuczwvYj48L2xhYmVsPlxyXG4gICAgLy8gICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsb2F0LXJpZ2h0IHRleHQtbXV0ZWRcIj5cclxuICAgIC8vICAgICAgICAgICAgIEJhbGFuY2U6IHsod2luZG93IGFzIGFueSkud2ViMy51dGlscy5mcm9tV2VpKHRoaXMucHJvcHMuZGFpVG9rZW5CYWxhbmNlLCAnRXRoZXInKX1cclxuICAgIC8vICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAvLyAgICAgICAgIDwvZGl2PlxyXG4gICAgLy8gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwIG1iLTRcIj5cclxuICAgIC8vICAgICAgICAgICA8aW5wdXRcclxuICAgIC8vICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgIC8vICAgICAgICAgICAgIHJlZj17KGlucHV0KSA9PiB7IHRoaXMuaW5wdXQgPSBpbnB1dCB9fVxyXG4gICAgLy8gICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1sZ1wiXHJcbiAgICAvLyAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjBcIlxyXG4gICAgLy8gICAgICAgICAgICAgcmVxdWlyZWQgLz5cclxuICAgIC8vICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLWFwcGVuZFwiPlxyXG4gICAgLy8gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC10ZXh0XCI+XHJcbiAgICAvLyAgICAgICAgICAgICAgIDxpbWcgc3JjPScvZGFpLnBuZycgd2lkdGg9J2F1dG8nIGhlaWdodD0nMzInIGFsdD1cIlwiLz5cclxuICAgIC8vICAgICAgICAgICAgICAgJm5ic3A7Jm5ic3A7Jm5ic3A7IG1EQUlcclxuICAgIC8vICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgLy8gICAgICAgICAgIDwvZGl2PlxyXG4gICAgLy8gICAgICAgICA8L2Rpdj5cclxuICAgIC8vICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1ibG9jayBidG4tbGdcIj5TVEFLRSE8L2J1dHRvbj5cclxuICAgIC8vICAgICAgIDwvZm9ybT5cclxuICAgIC8vICAgICA8L2Rpdj4gXHJcbiAgICAvLyAgICAgICA8L2Rpdj48Lz5cclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=
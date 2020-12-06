webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./src/pages/_app.module.css":
false,

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./src/pages/api/LoadingIndicator/LoadingIndicator.module.css":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./src/pages/api/LoadingIndicator/LoadingIndicator.module.css ***!
  \******************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@-webkit-keyframes LoadingIndicator_loader-rotate__2vvnS {\n  0% {\n    transform: rotate(0);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes LoadingIndicator_loader-rotate__2vvnS {\n  0% {\n    transform: rotate(0);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n.LoadingIndicator_loader__1PlSI {\n  border-right-color: transparent;\n  -webkit-animation: LoadingIndicator_loader-rotate__2vvnS 1s linear infinite;\n          animation: LoadingIndicator_loader-rotate__2vvnS 1s linear infinite;\n  /* Center */\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%,-50%);\n}", "",{"version":3,"sources":["webpack://src/pages/api/LoadingIndicator/LoadingIndicator.module.css"],"names":[],"mappings":"AAAA;EACI;IACI,oBAAoB;EACxB;;EACA;IACI,yBAAyB;EAC7B;AACJ;;AAPA;EACI;IACI,oBAAoB;EACxB;;EACA;IACI,yBAAyB;EAC7B;AACJ;;AACA;EACI,+BAA+B;EAC/B,2EAA2C;UAA3C,mEAA2C;EAE3C,WAAW;EACX,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,+BAA+B;AACnC","sourcesContent":["@keyframes loader-rotate {\r\n    0% {\r\n        transform: rotate(0);\r\n    }\r\n    100% {\r\n        transform: rotate(360deg);\r\n    }\r\n}\r\n.loader {\r\n    border-right-color: transparent;\r\n    animation: loader-rotate 1s linear infinite;\r\n\r\n    /* Center */\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%,-50%);\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"loader": "LoadingIndicator_loader__1PlSI",
	"loader-rotate": "LoadingIndicator_loader-rotate__2vvnS"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./src/pages/_app.module.css":
false,

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/index.css */ "./src/styles/index.css");
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_index_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_notifications_lib_notifications_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-notifications/lib/notifications.css */ "./node_modules/react-notifications/lib/notifications.css");
/* harmony import */ var react_notifications_lib_notifications_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_notifications_lib_notifications_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_notifications__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-notifications */ "./node_modules/react-notifications/lib/index.js");
/* harmony import */ var react_notifications__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_notifications__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! web3 */ "./node_modules/web3/src/index.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _abis_DaiToken_json__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../abis/DaiToken.json */ "./src/abis/DaiToken.json");
var _abis_DaiToken_json__WEBPACK_IMPORTED_MODULE_15___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../abis/DaiToken.json */ "./src/abis/DaiToken.json", 1);
/* harmony import */ var _abis_DappToken_json__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../abis/DappToken.json */ "./src/abis/DappToken.json");
var _abis_DappToken_json__WEBPACK_IMPORTED_MODULE_16___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../abis/DappToken.json */ "./src/abis/DappToken.json", 1);
/* harmony import */ var _abis_TokenFarm_json__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../abis/TokenFarm.json */ "./src/abis/TokenFarm.json");
var _abis_TokenFarm_json__WEBPACK_IMPORTED_MODULE_17___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../abis/TokenFarm.json */ "./src/abis/TokenFarm.json", 1);
/* harmony import */ var _api_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./api/Navbar/Navbar */ "./src/pages/api/Navbar/Navbar.tsx");
/* harmony import */ var _api_Main_Main__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./api/Main/Main */ "./src/pages/api/Main/Main.tsx");
/* harmony import */ var _api_LoadingIndicator_LoadingIndicator__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./api/LoadingIndicator/LoadingIndicator */ "./src/pages/api/LoadingIndicator/LoadingIndicator.tsx");










var _jsxFileName = "C:\\Users\\WSDT\\Desktop\\hugo\\wavect.io\\token\\src\\pages\\_app.tsx";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }













var App = /*#__PURE__*/function (_Component) {
  Object(C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(App, _Component);

  var _super = _createSuper(App);

  Object(C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(App, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = Object(C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.t0 = this;
                _context.next = 3;
                return this.loadWeb3();

              case 3:
                _context.t1 = _context.sent;
                _context.next = 6;
                return _context.t0.loadBlockchainData.call(_context.t0, _context.t1);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "showError",
    value: function showError(msg) {
      react_notifications__WEBPACK_IMPORTED_MODULE_12__["NotificationManager"].error(msg, null, 5000);
      console.error(msg);
    }
  }, {
    key: "loadBlockchainData",
    value: function () {
      var _loadBlockchainData = Object(C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(web3) {
        var accounts, networkId, daiTokenData, daiToken, daiTokenBalance, dappTokenData, dappToken, dappTokenBalance, tokenFarmData, tokenFarm, stakingBalance;
        return C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!web3) {
                  _context2.next = 41;
                  break;
                }

                _context2.next = 3;
                return web3.eth.getAccounts();

              case 3:
                accounts = _context2.sent;
                this.setState({
                  account: accounts[0]
                });
                _context2.next = 7;
                return web3.eth.net.getId();

              case 7:
                networkId = _context2.sent;
                // Load DaiToken
                daiTokenData = _abis_DaiToken_json__WEBPACK_IMPORTED_MODULE_15__.networks[networkId];

                if (!daiTokenData) {
                  _context2.next = 18;
                  break;
                }

                daiToken = new web3.eth.Contract(_abis_DaiToken_json__WEBPACK_IMPORTED_MODULE_15__.abi, daiTokenData.address);
                this.setState({
                  daiToken: daiToken
                });
                _context2.next = 14;
                return daiToken.methods.balanceOf(this.state.account).call();

              case 14:
                daiTokenBalance = _context2.sent;
                this.setState({
                  daiTokenBalance: daiTokenBalance.toString()
                });
                _context2.next = 19;
                break;

              case 18:
                this.showError('DaiToken contract not deployed to detected network.');

              case 19:
                // Load DappToken
                dappTokenData = _abis_DappToken_json__WEBPACK_IMPORTED_MODULE_16__.networks[networkId];

                if (!dappTokenData) {
                  _context2.next = 29;
                  break;
                }

                dappToken = new web3.eth.Contract(_abis_DappToken_json__WEBPACK_IMPORTED_MODULE_16__.abi, dappTokenData.address);
                this.setState({
                  dappToken: dappToken
                });
                _context2.next = 25;
                return dappToken.methods.balanceOf(this.state.account).call();

              case 25:
                dappTokenBalance = _context2.sent;
                this.setState({
                  dappTokenBalance: dappTokenBalance.toString()
                });
                _context2.next = 30;
                break;

              case 29:
                this.showError('DappToken contract not deployed to detected network.');

              case 30:
                // Load TokenFarm
                tokenFarmData = _abis_TokenFarm_json__WEBPACK_IMPORTED_MODULE_17__.networks[networkId];

                if (!tokenFarmData) {
                  _context2.next = 40;
                  break;
                }

                tokenFarm = new web3.eth.Contract(_abis_TokenFarm_json__WEBPACK_IMPORTED_MODULE_17__.abi, tokenFarmData.address);
                this.setState({
                  tokenFarm: tokenFarm
                });
                _context2.next = 36;
                return tokenFarm.methods.stakingBalance(this.state.account).call();

              case 36:
                stakingBalance = _context2.sent;
                this.setState({
                  stakingBalance: stakingBalance.toString()
                });
                _context2.next = 41;
                break;

              case 40:
                this.showError('TokenFarm contract not deployed to detected network.');

              case 41:
                this.setState({
                  loading: false
                });

              case 42:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function loadBlockchainData(_x) {
        return _loadBlockchainData.apply(this, arguments);
      }

      return loadBlockchainData;
    }()
  }, {
    key: "loadWeb3",
    value: function () {
      var _loadWeb = Object(C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        return C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!window.ethereum) {
                  _context3.next = 6;
                  break;
                }

                window.web3 = new web3__WEBPACK_IMPORTED_MODULE_14___default.a(window.ethereum);
                _context3.next = 4;
                return window.ethereum.enable();

              case 4:
                _context3.next = 7;
                break;

              case 6:
                if (window.web3) {
                  window.web3 = new web3__WEBPACK_IMPORTED_MODULE_14___default.a(window.web3.currentProvider);
                } else {
                  this.showError('Non-Ethereum browser detected. You should consider trying MetaMask!');
                }

              case 7:
                return _context3.abrupt("return", window.web3);

              case 8:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function loadWeb3() {
        return _loadWeb.apply(this, arguments);
      }

      return loadWeb3;
    }()
  }]);

  function App(props) {
    var _this;

    Object(C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, App);

    _this = _super.call(this, props);

    Object(C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "stakeTokens", function (amount) {
      _this.setState({
        loading: true
      });

      _this.state.daiToken.methods.approve(_this.state.tokenFarm._address, amount).send({
        from: _this.state.account
      }).on('transactionHash', function (hash) {
        _this.state.tokenFarm.methods.stakeTokens(amount).send({
          from: _this.state.account
        }).on('transactionHash', function (hash) {
          _this.setState({
            loading: false
          });
        });
      });
    });

    Object(C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "unstakeTokens", function (amount) {
      _this.setState({
        loading: true
      });

      _this.state.tokenFarm.methods.unstakeTokens().send({
        from: _this.state.account
      }).on('transactionHash', function (hash) {
        _this.setState({
          loading: false
        });
      });
    });

    _this.state = {
      account: '0x0',
      daiToken: {},
      dappToken: {},
      tokenFarm: {},
      daiTokenBalance: '0',
      dappTokenBalance: '0',
      stakingBalance: '0',
      loading: true
    };
    return _this;
  }

  Object(C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(App, [{
    key: "render",
    value: function render() {
      var content;

      if (!this.state.loading) {
        content = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_api_LoadingIndicator_LoadingIndicator__WEBPACK_IMPORTED_MODULE_20__["LoadingIndicator"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 18
        }, this);
      } else {
        content = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_api_Main_Main__WEBPACK_IMPORTED_MODULE_19__["default"], {
          daiTokenBalance: this.state.daiTokenBalance,
          dappTokenBalance: this.state.dappTokenBalance,
          stakingBalance: this.state.stakingBalance,
          stakeTokens: this.stakeTokens,
          unstakeTokens: this.unstakeTokens
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 17
        }, this);
      }

      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_api_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_18__["default"], {
          account: this.state.account
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
          className: "container-fluid mt-5",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
            className: "row",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("main", {
              role: "main",
              className: "col-lg-12 ml-auto mr-auto",
              style: {
                maxWidth: '600px'
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
                className: "content mr-auto ml-auto",
                children: content
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 134,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 133,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 132,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_notifications__WEBPACK_IMPORTED_MODULE_12__["NotificationContainer"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 7
      }, this);
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_13__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (App);

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/pages/api/LoadingIndicator/LoadingIndicator.module.css":
/*!********************************************************************!*\
  !*** ./src/pages/api/LoadingIndicator/LoadingIndicator.module.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./LoadingIndicator.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./src/pages/api/LoadingIndicator/LoadingIndicator.module.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./LoadingIndicator.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./src/pages/api/LoadingIndicator/LoadingIndicator.module.css",
      function () {
        content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./LoadingIndicator.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./src/pages/api/LoadingIndicator/LoadingIndicator.module.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/pages/api/LoadingIndicator/LoadingIndicator.tsx":
/*!*************************************************************!*\
  !*** ./src/pages/api/LoadingIndicator/LoadingIndicator.tsx ***!
  \*************************************************************/
/*! exports provided: LoadingIndicator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingIndicator", function() { return LoadingIndicator; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _LoadingIndicator_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LoadingIndicator.module.css */ "./src/pages/api/LoadingIndicator/LoadingIndicator.module.css");
/* harmony import */ var _LoadingIndicator_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_LoadingIndicator_module_css__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\WSDT\\Desktop\\hugo\\wavect.io\\token\\src\\pages\\api\\LoadingIndicator\\LoadingIndicator.tsx";

function LoadingIndicator(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "w-20 h-20 border-4 border-black rounded-full ".concat(_LoadingIndicator_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.loader)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 12
  }, this);
}
_c = LoadingIndicator;

var _c;

$RefreshReg$(_c, "LoadingIndicator");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2FwaS9Mb2FkaW5nSW5kaWNhdG9yL0xvYWRpbmdJbmRpY2F0b3IubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL19hcHAudHN4Iiwid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvYXBpL0xvYWRpbmdJbmRpY2F0b3IvTG9hZGluZ0luZGljYXRvci5tb2R1bGUuY3NzP2Y3NzUiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9hcGkvTG9hZGluZ0luZGljYXRvci9Mb2FkaW5nSW5kaWNhdG9yLnRzeCJdLCJuYW1lcyI6WyJBcHAiLCJsb2FkV2ViMyIsImxvYWRCbG9ja2NoYWluRGF0YSIsIm1zZyIsIk5vdGlmaWNhdGlvbk1hbmFnZXIiLCJlcnJvciIsImNvbnNvbGUiLCJ3ZWIzIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsInNldFN0YXRlIiwiYWNjb3VudCIsIm5ldCIsImdldElkIiwibmV0d29ya0lkIiwiZGFpVG9rZW5EYXRhIiwiRGFpVG9rZW4iLCJuZXR3b3JrcyIsImRhaVRva2VuIiwiQ29udHJhY3QiLCJhYmkiLCJhZGRyZXNzIiwibWV0aG9kcyIsImJhbGFuY2VPZiIsInN0YXRlIiwiY2FsbCIsImRhaVRva2VuQmFsYW5jZSIsInRvU3RyaW5nIiwic2hvd0Vycm9yIiwiZGFwcFRva2VuRGF0YSIsIkRhcHBUb2tlbiIsImRhcHBUb2tlbiIsImRhcHBUb2tlbkJhbGFuY2UiLCJ0b2tlbkZhcm1EYXRhIiwiVG9rZW5GYXJtIiwidG9rZW5GYXJtIiwic3Rha2luZ0JhbGFuY2UiLCJsb2FkaW5nIiwid2luZG93IiwiZXRoZXJldW0iLCJXZWIzIiwiZW5hYmxlIiwiY3VycmVudFByb3ZpZGVyIiwicHJvcHMiLCJhbW91bnQiLCJhcHByb3ZlIiwiX2FkZHJlc3MiLCJzZW5kIiwiZnJvbSIsIm9uIiwiaGFzaCIsInN0YWtlVG9rZW5zIiwidW5zdGFrZVRva2VucyIsImNvbnRlbnQiLCJtYXhXaWR0aCIsIkNvbXBvbmVudCIsIkxvYWRpbmdJbmRpY2F0b3IiLCJzdHlsZXMiLCJsb2FkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsOEdBQXlEO0FBQ25HO0FBQ0E7QUFDQSw4QkFBOEIsUUFBUyw2REFBNkQsUUFBUSwyQkFBMkIsS0FBSyxZQUFZLGdDQUFnQyxLQUFLLEdBQUcsc0RBQXNELFFBQVEsMkJBQTJCLEtBQUssWUFBWSxnQ0FBZ0MsS0FBSyxHQUFHLHFDQUFxQyxvQ0FBb0MsZ0ZBQWdGLGdGQUFnRix1Q0FBdUMsYUFBYSxjQUFjLG9DQUFvQyxHQUFHLE9BQU8sMkhBQTJILEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLG9EQUFvRCxZQUFZLGlDQUFpQyxTQUFTLGNBQWMsc0NBQXNDLFNBQVMsS0FBSyxhQUFhLHdDQUF3QyxvREFBb0QsbURBQW1ELGlCQUFpQixrQkFBa0Isd0NBQXdDLEtBQUssbUJBQW1CO0FBQ242QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUVNQSxHOzs7Ozs7Ozs7Ozs7OzhCQUdJLEk7O3VCQUNFLEtBQUtDLFFBQUwsRTs7Ozs7bUNBREdDLGtCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBS0hDLEcsRUFBYTtBQUNyQkMsOEVBQW1CLENBQUNDLEtBQXBCLENBQTBCRixHQUExQixFQUErQixJQUEvQixFQUFxQyxJQUFyQztBQUNBRyxhQUFPLENBQUNELEtBQVIsQ0FBY0YsR0FBZDtBQUNEOzs7OytVQUV3Qkks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Ozs7OztBQzdFQTtBQUVPLFNBQVN5RCxnQkFBVCxDQUEwQmIsS0FBMUIsRUFBc0M7QUFDekMsc0JBQU87QUFBSyxhQUFTLHlEQUFrRGMsbUVBQU0sQ0FBQ0MsTUFBekQ7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFDSDtLQUZlRixnQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmZmMzc4NzQzZTg5M2FiNzg1MjliLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJALXdlYmtpdC1rZXlmcmFtZXMgTG9hZGluZ0luZGljYXRvcl9sb2FkZXItcm90YXRlX18ydnZuUyB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xcbiAgfVxcblxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgTG9hZGluZ0luZGljYXRvcl9sb2FkZXItcm90YXRlX18ydnZuUyB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xcbiAgfVxcblxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICB9XFxufVxcblxcbi5Mb2FkaW5nSW5kaWNhdG9yX2xvYWRlcl9fMVBsU0kge1xcbiAgYm9yZGVyLXJpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBMb2FkaW5nSW5kaWNhdG9yX2xvYWRlci1yb3RhdGVfXzJ2dm5TIDFzIGxpbmVhciBpbmZpbml0ZTtcXG4gICAgICAgICAgYW5pbWF0aW9uOiBMb2FkaW5nSW5kaWNhdG9yX2xvYWRlci1yb3RhdGVfXzJ2dm5TIDFzIGxpbmVhciBpbmZpbml0ZTtcXG4gIC8qIENlbnRlciAqL1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3JjL3BhZ2VzL2FwaS9Mb2FkaW5nSW5kaWNhdG9yL0xvYWRpbmdJbmRpY2F0b3IubW9kdWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNJO0lBQ0ksb0JBQW9CO0VBQ3hCOztFQUNBO0lBQ0kseUJBQXlCO0VBQzdCO0FBQ0o7O0FBUEE7RUFDSTtJQUNJLG9CQUFvQjtFQUN4Qjs7RUFDQTtJQUNJLHlCQUF5QjtFQUM3QjtBQUNKOztBQUNBO0VBQ0ksK0JBQStCO0VBQy9CLDJFQUEyQztVQUEzQyxtRUFBMkM7RUFFM0MsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULCtCQUErQjtBQUNuQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAa2V5ZnJhbWVzIGxvYWRlci1yb3RhdGUge1xcclxcbiAgICAwJSB7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcXHJcXG4gICAgfVxcclxcbiAgICAxMDAlIHtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuLmxvYWRlciB7XFxyXFxuICAgIGJvcmRlci1yaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIGFuaW1hdGlvbjogbG9hZGVyLXJvdGF0ZSAxcyBsaW5lYXIgaW5maW5pdGU7XFxyXFxuXFxyXFxuICAgIC8qIENlbnRlciAqL1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogNTAlO1xcclxcbiAgICBsZWZ0OiA1MCU7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImxvYWRlclwiOiBcIkxvYWRpbmdJbmRpY2F0b3JfbG9hZGVyX18xUGxTSVwiLFxuXHRcImxvYWRlci1yb3RhdGVcIjogXCJMb2FkaW5nSW5kaWNhdG9yX2xvYWRlci1yb3RhdGVfXzJ2dm5TXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiaW1wb3J0IHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCdcclxuaW1wb3J0ICcuLi9zdHlsZXMvaW5kZXguY3NzJ1xyXG5pbXBvcnQgJ3JlYWN0LW5vdGlmaWNhdGlvbnMvbGliL25vdGlmaWNhdGlvbnMuY3NzJztcclxuaW1wb3J0IHtOb3RpZmljYXRpb25Db250YWluZXIsIE5vdGlmaWNhdGlvbk1hbmFnZXJ9IGZyb20gJ3JlYWN0LW5vdGlmaWNhdGlvbnMnO1xyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBXZWIzIGZyb20gJ3dlYjMnXHJcbmltcG9ydCBEYWlUb2tlbiBmcm9tICcuLi9hYmlzL0RhaVRva2VuLmpzb24nXHJcbmltcG9ydCBEYXBwVG9rZW4gZnJvbSAnLi4vYWJpcy9EYXBwVG9rZW4uanNvbidcclxuaW1wb3J0IFRva2VuRmFybSBmcm9tICcuLi9hYmlzL1Rva2VuRmFybS5qc29uJ1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4vYXBpL05hdmJhci9OYXZiYXInXHJcbmltcG9ydCBNYWluIGZyb20gJy4vYXBpL01haW4vTWFpbidcclxuaW1wb3J0IHsgTG9hZGluZ0luZGljYXRvciB9IGZyb20gJy4vYXBpL0xvYWRpbmdJbmRpY2F0b3IvTG9hZGluZ0luZGljYXRvcic7XHJcblxyXG5jbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQ8QXBwUHJvcHMsIGFueT4ge1xyXG5cclxuICBhc3luYyBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIGF3YWl0IHRoaXMubG9hZEJsb2NrY2hhaW5EYXRhKFxyXG4gICAgICBhd2FpdCB0aGlzLmxvYWRXZWIzKClcclxuICAgIClcclxuICB9XHJcblxyXG4gIHNob3dFcnJvcihtc2c6IHN0cmluZykge1xyXG4gICAgTm90aWZpY2F0aW9uTWFuYWdlci5lcnJvcihtc2csIG51bGwsIDUwMDApO1xyXG4gICAgY29uc29sZS5lcnJvcihtc2cpO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgbG9hZEJsb2NrY2hhaW5EYXRhKHdlYjM6IGFueSkge1xyXG4gICAgaWYgKHdlYjMpIHtcclxuICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpXHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBhY2NvdW50OiBhY2NvdW50c1swXSB9KVxyXG5cclxuICAgICAgY29uc3QgbmV0d29ya0lkID0gYXdhaXQgd2ViMy5ldGgubmV0LmdldElkKClcclxuXHJcbiAgICAgIC8vIExvYWQgRGFpVG9rZW5cclxuICAgICAgY29uc3QgZGFpVG9rZW5EYXRhID0gRGFpVG9rZW4ubmV0d29ya3NbbmV0d29ya0lkXVxyXG4gICAgICBpZihkYWlUb2tlbkRhdGEpIHtcclxuICAgICAgICBjb25zdCBkYWlUb2tlbiA9IG5ldyB3ZWIzLmV0aC5Db250cmFjdChEYWlUb2tlbi5hYmksIGRhaVRva2VuRGF0YS5hZGRyZXNzKVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkYWlUb2tlbiB9KVxyXG4gICAgICAgIGxldCBkYWlUb2tlbkJhbGFuY2UgPSBhd2FpdCBkYWlUb2tlbi5tZXRob2RzLmJhbGFuY2VPZih0aGlzLnN0YXRlLmFjY291bnQpLmNhbGwoKVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkYWlUb2tlbkJhbGFuY2U6IGRhaVRva2VuQmFsYW5jZS50b1N0cmluZygpIH0pXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5zaG93RXJyb3IoJ0RhaVRva2VuIGNvbnRyYWN0IG5vdCBkZXBsb3llZCB0byBkZXRlY3RlZCBuZXR3b3JrLicpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIExvYWQgRGFwcFRva2VuXHJcbiAgICAgIGNvbnN0IGRhcHBUb2tlbkRhdGEgPSBEYXBwVG9rZW4ubmV0d29ya3NbbmV0d29ya0lkXVxyXG4gICAgICBpZihkYXBwVG9rZW5EYXRhKSB7XHJcbiAgICAgICAgY29uc3QgZGFwcFRva2VuID0gbmV3IHdlYjMuZXRoLkNvbnRyYWN0KERhcHBUb2tlbi5hYmksIGRhcHBUb2tlbkRhdGEuYWRkcmVzcylcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGFwcFRva2VuIH0pXHJcbiAgICAgICAgbGV0IGRhcHBUb2tlbkJhbGFuY2UgPSBhd2FpdCBkYXBwVG9rZW4ubWV0aG9kcy5iYWxhbmNlT2YodGhpcy5zdGF0ZS5hY2NvdW50KS5jYWxsKClcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGFwcFRva2VuQmFsYW5jZTogZGFwcFRva2VuQmFsYW5jZS50b1N0cmluZygpIH0pXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5zaG93RXJyb3IoJ0RhcHBUb2tlbiBjb250cmFjdCBub3QgZGVwbG95ZWQgdG8gZGV0ZWN0ZWQgbmV0d29yay4nKVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBMb2FkIFRva2VuRmFybVxyXG4gICAgICBjb25zdCB0b2tlbkZhcm1EYXRhID0gVG9rZW5GYXJtLm5ldHdvcmtzW25ldHdvcmtJZF1cclxuICAgICAgaWYodG9rZW5GYXJtRGF0YSkge1xyXG4gICAgICAgIGNvbnN0IHRva2VuRmFybSA9IG5ldyB3ZWIzLmV0aC5Db250cmFjdChUb2tlbkZhcm0uYWJpLCB0b2tlbkZhcm1EYXRhLmFkZHJlc3MpXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHRva2VuRmFybSB9KVxyXG4gICAgICAgIGxldCBzdGFraW5nQmFsYW5jZSA9IGF3YWl0IHRva2VuRmFybS5tZXRob2RzLnN0YWtpbmdCYWxhbmNlKHRoaXMuc3RhdGUuYWNjb3VudCkuY2FsbCgpXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHN0YWtpbmdCYWxhbmNlOiBzdGFraW5nQmFsYW5jZS50b1N0cmluZygpIH0pXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5zaG93RXJyb3IoJ1Rva2VuRmFybSBjb250cmFjdCBub3QgZGVwbG95ZWQgdG8gZGV0ZWN0ZWQgbmV0d29yay4nKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UgfSlcclxuICB9XHJcblxyXG4gIGFzeW5jIGxvYWRXZWIzKCkge1xyXG4gICAgaWYgKCh3aW5kb3cgYXMgYW55KS5ldGhlcmV1bSkge1xyXG4gICAgICAod2luZG93IGFzIGFueSkud2ViMyA9IG5ldyBXZWIzKCh3aW5kb3cgYXMgYW55KS5ldGhlcmV1bSlcclxuICAgICAgYXdhaXQgKHdpbmRvdyBhcyBhbnkpLmV0aGVyZXVtLmVuYWJsZSgpXHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICgod2luZG93IGFzIGFueSkud2ViMykge1xyXG4gICAgICAod2luZG93IGFzIGFueSkud2ViMyA9IG5ldyBXZWIzKCh3aW5kb3cgYXMgYW55KS53ZWIzLmN1cnJlbnRQcm92aWRlcilcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICB0aGlzLnNob3dFcnJvcignTm9uLUV0aGVyZXVtIGJyb3dzZXIgZGV0ZWN0ZWQuIFlvdSBzaG91bGQgY29uc2lkZXIgdHJ5aW5nIE1ldGFNYXNrIScpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gKHdpbmRvdyBhcyBhbnkpLndlYjM7XHJcbiAgfVxyXG5cclxuICBzdGFrZVRva2VucyA9IChhbW91bnQpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiB0cnVlIH0pXHJcbiAgICB0aGlzLnN0YXRlLmRhaVRva2VuLm1ldGhvZHMuYXBwcm92ZSh0aGlzLnN0YXRlLnRva2VuRmFybS5fYWRkcmVzcywgYW1vdW50KS5zZW5kKHsgZnJvbTogdGhpcy5zdGF0ZS5hY2NvdW50IH0pLm9uKCd0cmFuc2FjdGlvbkhhc2gnLCAoaGFzaCkgPT4ge1xyXG4gICAgICB0aGlzLnN0YXRlLnRva2VuRmFybS5tZXRob2RzLnN0YWtlVG9rZW5zKGFtb3VudCkuc2VuZCh7IGZyb206IHRoaXMuc3RhdGUuYWNjb3VudCB9KS5vbigndHJhbnNhY3Rpb25IYXNoJywgKGhhc2gpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UgfSlcclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICB1bnN0YWtlVG9rZW5zID0gKGFtb3VudCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IHRydWUgfSlcclxuICAgIHRoaXMuc3RhdGUudG9rZW5GYXJtLm1ldGhvZHMudW5zdGFrZVRva2VucygpLnNlbmQoeyBmcm9tOiB0aGlzLnN0YXRlLmFjY291bnQgfSkub24oJ3RyYW5zYWN0aW9uSGFzaCcsIChoYXNoKSA9PiB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSB9KVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcylcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGFjY291bnQ6ICcweDAnLFxyXG4gICAgICBkYWlUb2tlbjoge30sXHJcbiAgICAgIGRhcHBUb2tlbjoge30sXHJcbiAgICAgIHRva2VuRmFybToge30sXHJcbiAgICAgIGRhaVRva2VuQmFsYW5jZTogJzAnLFxyXG4gICAgICBkYXBwVG9rZW5CYWxhbmNlOiAnMCcsXHJcbiAgICAgIHN0YWtpbmdCYWxhbmNlOiAnMCcsXHJcbiAgICAgIGxvYWRpbmc6IHRydWVcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGxldCBjb250ZW50XHJcbiAgICBpZighdGhpcy5zdGF0ZS5sb2FkaW5nKSB7XHJcbiAgICAgIGNvbnRlbnQgPSAgPExvYWRpbmdJbmRpY2F0b3IgLz5cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnRlbnQgPSA8TWFpblxyXG4gICAgICAgIGRhaVRva2VuQmFsYW5jZT17dGhpcy5zdGF0ZS5kYWlUb2tlbkJhbGFuY2V9XHJcbiAgICAgICAgZGFwcFRva2VuQmFsYW5jZT17dGhpcy5zdGF0ZS5kYXBwVG9rZW5CYWxhbmNlfVxyXG4gICAgICAgIHN0YWtpbmdCYWxhbmNlPXt0aGlzLnN0YXRlLnN0YWtpbmdCYWxhbmNlfVxyXG4gICAgICAgIHN0YWtlVG9rZW5zPXt0aGlzLnN0YWtlVG9rZW5zfVxyXG4gICAgICAgIHVuc3Rha2VUb2tlbnM9e3RoaXMudW5zdGFrZVRva2Vuc31cclxuICAgICAgLz5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxOYXZiYXIgYWNjb3VudD17dGhpcy5zdGF0ZS5hY2NvdW50fSAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIG10LTVcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgIDxtYWluIHJvbGU9XCJtYWluXCIgY2xhc3NOYW1lPVwiY29sLWxnLTEyIG1sLWF1dG8gbXItYXV0b1wiIHN0eWxlPXt7IG1heFdpZHRoOiAnNjAwcHgnIH19PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudCBtci1hdXRvIG1sLWF1dG9cIj5cclxuXHJcbiAgICAgICAgICAgICAgICB7Y29udGVudH1cclxuXHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbWFpbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxOb3RpZmljYXRpb25Db250YWluZXIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwO1xyXG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtb25lT2YtMi0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMi0yIS4vTG9hZGluZ0luZGljYXRvci5tb2R1bGUuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gZnVuY3Rpb24oZWxlbWVudCl7Ly8gVGhlc2UgZWxlbWVudHMgc2hvdWxkIGFsd2F5cyBleGlzdC4gSWYgdGhleSBkbyBub3QsXG4vLyB0aGlzIGNvZGUgc2hvdWxkIGZhaWwuXG52YXIgYW5jaG9yRWxlbWVudD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjX19uZXh0X2Nzc19fRE9fTk9UX1VTRV9fJyk7dmFyIHBhcmVudE5vZGU9YW5jaG9yRWxlbWVudC5wYXJlbnROb2RlOy8vIE5vcm1hbGx5IDxoZWFkPlxuLy8gRWFjaCBzdHlsZSB0YWcgc2hvdWxkIGJlIHBsYWNlZCByaWdodCBiZWZvcmUgb3VyXG4vLyBhbmNob3IuIEJ5IGluc2VydGluZyBiZWZvcmUgYW5kIG5vdCBhZnRlciwgd2UgZG8gbm90XG4vLyBuZWVkIHRvIHRyYWNrIHRoZSBsYXN0IGluc2VydGVkIGVsZW1lbnQuXG5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LGFuY2hvckVsZW1lbnQpO307XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBwO1xuXG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmb3IgKHAgaW4gYikge1xuICAgIGlmICghYVtwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LW9uZU9mLTItMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTItMiEuL0xvYWRpbmdJbmRpY2F0b3IubW9kdWxlLmNzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS1vbmVPZi0yLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0yLTIhLi9Mb2FkaW5nSW5kaWNhdG9yLm1vZHVsZS5jc3NcIik7XG5cbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGNvbnRlbnQubG9jYWxzKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IHN0eWxlcyBmcm9tICcuL0xvYWRpbmdJbmRpY2F0b3IubW9kdWxlLmNzcyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTG9hZGluZ0luZGljYXRvcihwcm9wczogYW55KSB7XHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e2B3LTIwIGgtMjAgYm9yZGVyLTQgYm9yZGVyLWJsYWNrIHJvdW5kZWQtZnVsbCAke3N0eWxlcy5sb2FkZXJ9YH0+PC9kaXY+XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9
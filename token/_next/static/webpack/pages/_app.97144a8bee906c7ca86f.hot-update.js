webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./src/pages/_app.module.css":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./src/pages/_app.module.css ***!
  \*********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@-webkit-keyframes _app_loader-rotate__20Oui {\n  0% {\n    transform: rotate(0);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes _app_loader-rotate__20Oui {\n  0% {\n    transform: rotate(0);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n._app_loader__K-mFj {\n  border-right-color: transparent;\n  -webkit-animation: _app_loader-rotate__20Oui 1s linear infinite;\n          animation: _app_loader-rotate__20Oui 1s linear infinite;\n}", "",{"version":3,"sources":["webpack://src/pages/_app.module.css"],"names":[],"mappings":"AAAA;EACI;IACI,oBAAoB;EACxB;;EACA;IACI,yBAAyB;EAC7B;AACJ;;AAPA;EACI;IACI,oBAAoB;EACxB;;EACA;IACI,yBAAyB;EAC7B;AACJ;;AACA;EACI,+BAA+B;EAC/B,+DAA2C;UAA3C,uDAA2C;AAC/C","sourcesContent":["@keyframes loader-rotate {\r\n    0% {\r\n        transform: rotate(0);\r\n    }\r\n    100% {\r\n        transform: rotate(360deg);\r\n    }\r\n}\r\n.loader {\r\n    border-right-color: transparent;\r\n    animation: loader-rotate 1s linear infinite;\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"loader": "_app_loader__K-mFj",
	"loader-rotate": "_app_loader-rotate__20Oui"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./src/pages/_app.module.css":
/*!***********************************!*\
  !*** ./src/pages/_app.module.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./_app.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./src/pages/_app.module.css");

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
      /*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./_app.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./src/pages/_app.module.css",
      function () {
        content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./_app.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./src/pages/_app.module.css");

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
/* harmony import */ var _app_module_css__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./_app.module.css */ "./src/pages/_app.module.css");
/* harmony import */ var _app_module_css__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_app_module_css__WEBPACK_IMPORTED_MODULE_20__);










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
        content = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
          className: "w-12 h-12 border-4 border-teal-600 rounded-full ".concat(_app_module_css__WEBPACK_IMPORTED_MODULE_20___default.a.loader)
        }, void 0, false, {
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL19hcHAubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL19hcHAubW9kdWxlLmNzcz82ODhiIiwid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvX2FwcC50c3giXSwibmFtZXMiOlsiQXBwIiwibG9hZFdlYjMiLCJsb2FkQmxvY2tjaGFpbkRhdGEiLCJtc2ciLCJOb3RpZmljYXRpb25NYW5hZ2VyIiwiZXJyb3IiLCJjb25zb2xlIiwid2ViMyIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJzZXRTdGF0ZSIsImFjY291bnQiLCJuZXQiLCJnZXRJZCIsIm5ldHdvcmtJZCIsImRhaVRva2VuRGF0YSIsIkRhaVRva2VuIiwibmV0d29ya3MiLCJkYWlUb2tlbiIsIkNvbnRyYWN0IiwiYWJpIiwiYWRkcmVzcyIsIm1ldGhvZHMiLCJiYWxhbmNlT2YiLCJzdGF0ZSIsImNhbGwiLCJkYWlUb2tlbkJhbGFuY2UiLCJ0b1N0cmluZyIsInNob3dFcnJvciIsImRhcHBUb2tlbkRhdGEiLCJEYXBwVG9rZW4iLCJkYXBwVG9rZW4iLCJkYXBwVG9rZW5CYWxhbmNlIiwidG9rZW5GYXJtRGF0YSIsIlRva2VuRmFybSIsInRva2VuRmFybSIsInN0YWtpbmdCYWxhbmNlIiwibG9hZGluZyIsIndpbmRvdyIsImV0aGVyZXVtIiwiV2ViMyIsImVuYWJsZSIsImN1cnJlbnRQcm92aWRlciIsInByb3BzIiwiYW1vdW50IiwiYXBwcm92ZSIsIl9hZGRyZXNzIiwic2VuZCIsImZyb20iLCJvbiIsImhhc2giLCJzdGFrZVRva2VucyIsInVuc3Rha2VUb2tlbnMiLCJjb250ZW50Iiwic3R5bGVzIiwibG9hZGVyIiwibWF4V2lkdGgiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsd0dBQW1EO0FBQzdGO0FBQ0E7QUFDQSw4QkFBOEIsUUFBUyxp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QUFMLENBQVdZLGNBSG5CO0FBSVIscUJBQVcsRUFBRSxLQUFLZSxXQUpWO0FBS1IsdUJBQWEsRUFBRSxLQUFLQztBQUxaO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQVY7QUFPRDs7QUFFRCwwQkFDRTtBQUFBLGdDQUNFLHFFQUFDLDJEQUFEO0FBQVEsaUJBQU8sRUFBRSxLQUFLNUIsS0FBTCxDQUFXYjtBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUU7QUFBSyxtQkFBUyxFQUFDLHNCQUFmO0FBQUEsaUNBQ0U7QUFBSyxxQkFBUyxFQUFDLEtBQWY7QUFBQSxtQ0FDRTtBQUFNLGtCQUFJLEVBQUMsTUFBWDtBQUFrQix1QkFBUyxFQUFDLDJCQUE1QjtBQUF3RCxtQkFBSyxFQUFFO0FBQUU2Qyx3QkFBUSxFQUFFO0FBQVosZUFBL0Q7QUFBQSxxQ0FDRTtBQUFLLHlCQUFTLEVBQUMseUJBQWY7QUFBQSwwQkFFR0g7QUFGSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGLGVBYUUscUVBQUMsMEVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERjtBQWlCRDs7OztFQW5JZUksZ0Q7O0FBc0lIMUQsa0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC45NzE0NGE4YmVlOTA2YzdjYTg2Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQC13ZWJraXQta2V5ZnJhbWVzIF9hcHBfbG9hZGVyLXJvdGF0ZV9fMjBPdWkge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcXG4gIH1cXG5cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIF9hcHBfbG9hZGVyLXJvdGF0ZV9fMjBPdWkge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcXG4gIH1cXG5cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgfVxcbn1cXG5cXG4uX2FwcF9sb2FkZXJfX0stbUZqIHtcXG4gIGJvcmRlci1yaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogX2FwcF9sb2FkZXItcm90YXRlX18yME91aSAxcyBsaW5lYXIgaW5maW5pdGU7XFxuICAgICAgICAgIGFuaW1hdGlvbjogX2FwcF9sb2FkZXItcm90YXRlX18yME91aSAxcyBsaW5lYXIgaW5maW5pdGU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zcmMvcGFnZXMvX2FwcC5tb2R1bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0k7SUFDSSxvQkFBb0I7RUFDeEI7O0VBQ0E7SUFDSSx5QkFBeUI7RUFDN0I7QUFDSjs7QUFQQTtFQUNJO0lBQ0ksb0JBQW9CO0VBQ3hCOztFQUNBO0lBQ0kseUJBQXlCO0VBQzdCO0FBQ0o7O0FBQ0E7RUFDSSwrQkFBK0I7RUFDL0IsK0RBQTJDO1VBQTNDLHVEQUEyQztBQUMvQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAa2V5ZnJhbWVzIGxvYWRlci1yb3RhdGUge1xcclxcbiAgICAwJSB7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcXHJcXG4gICAgfVxcclxcbiAgICAxMDAlIHtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuLmxvYWRlciB7XFxyXFxuICAgIGJvcmRlci1yaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIGFuaW1hdGlvbjogbG9hZGVyLXJvdGF0ZSAxcyBsaW5lYXIgaW5maW5pdGU7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImxvYWRlclwiOiBcIl9hcHBfbG9hZGVyX19LLW1GalwiLFxuXHRcImxvYWRlci1yb3RhdGVcIjogXCJfYXBwX2xvYWRlci1yb3RhdGVfXzIwT3VpXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LW9uZU9mLTItMSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTItMiEuL19hcHAubW9kdWxlLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKGVsZW1lbnQpey8vIFRoZXNlIGVsZW1lbnRzIHNob3VsZCBhbHdheXMgZXhpc3QuIElmIHRoZXkgZG8gbm90LFxuLy8gdGhpcyBjb2RlIHNob3VsZCBmYWlsLlxudmFyIGFuY2hvckVsZW1lbnQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19fbmV4dF9jc3NfX0RPX05PVF9VU0VfXycpO3ZhciBwYXJlbnROb2RlPWFuY2hvckVsZW1lbnQucGFyZW50Tm9kZTsvLyBOb3JtYWxseSA8aGVhZD5cbi8vIEVhY2ggc3R5bGUgdGFnIHNob3VsZCBiZSBwbGFjZWQgcmlnaHQgYmVmb3JlIG91clxuLy8gYW5jaG9yLiBCeSBpbnNlcnRpbmcgYmVmb3JlIGFuZCBub3QgYWZ0ZXIsIHdlIGRvIG5vdFxuLy8gbmVlZCB0byB0cmFjayB0aGUgbGFzdCBpbnNlcnRlZCBlbGVtZW50LlxucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCxhbmNob3JFbGVtZW50KTt9O1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiKSB7XG4gIGlmICghYSAmJiBiIHx8IGEgJiYgIWIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgcDtcblxuICBmb3IgKHAgaW4gYSkge1xuICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZm9yIChwIGluIGIpIHtcbiAgICBpZiAoIWFbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS1vbmVPZi0yLTEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0yLTIhLi9fYXBwLm1vZHVsZS5jc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtb25lT2YtMi0xIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMi0yIS4vX2FwcC5tb2R1bGUuY3NzXCIpO1xuXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBjb250ZW50LmxvY2FscykpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnXHJcbmltcG9ydCAnLi4vc3R5bGVzL2luZGV4LmNzcydcclxuaW1wb3J0ICdyZWFjdC1ub3RpZmljYXRpb25zL2xpYi9ub3RpZmljYXRpb25zLmNzcyc7XHJcbmltcG9ydCB7Tm90aWZpY2F0aW9uQ29udGFpbmVyLCBOb3RpZmljYXRpb25NYW5hZ2VyfSBmcm9tICdyZWFjdC1ub3RpZmljYXRpb25zJztcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgV2ViMyBmcm9tICd3ZWIzJ1xyXG5pbXBvcnQgRGFpVG9rZW4gZnJvbSAnLi4vYWJpcy9EYWlUb2tlbi5qc29uJ1xyXG5pbXBvcnQgRGFwcFRva2VuIGZyb20gJy4uL2FiaXMvRGFwcFRva2VuLmpzb24nXHJcbmltcG9ydCBUb2tlbkZhcm0gZnJvbSAnLi4vYWJpcy9Ub2tlbkZhcm0uanNvbidcclxuaW1wb3J0IE5hdmJhciBmcm9tICcuL2FwaS9OYXZiYXIvTmF2YmFyJ1xyXG5pbXBvcnQgTWFpbiBmcm9tICcuL2FwaS9NYWluL01haW4nXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9fYXBwLm1vZHVsZS5jc3MnO1xyXG5cclxuY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50PEFwcFByb3BzLCBhbnk+IHtcclxuXHJcbiAgYXN5bmMgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICBhd2FpdCB0aGlzLmxvYWRCbG9ja2NoYWluRGF0YShcclxuICAgICAgYXdhaXQgdGhpcy5sb2FkV2ViMygpXHJcbiAgICApXHJcbiAgfVxyXG5cclxuICBzaG93RXJyb3IobXNnOiBzdHJpbmcpIHtcclxuICAgIE5vdGlmaWNhdGlvbk1hbmFnZXIuZXJyb3IobXNnLCBudWxsLCA1MDAwKTtcclxuICAgIGNvbnNvbGUuZXJyb3IobXNnKTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGxvYWRCbG9ja2NoYWluRGF0YSh3ZWIzOiBhbnkpIHtcclxuICAgIGlmICh3ZWIzKSB7XHJcbiAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKVxyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgYWNjb3VudDogYWNjb3VudHNbMF0gfSlcclxuXHJcbiAgICAgIGNvbnN0IG5ldHdvcmtJZCA9IGF3YWl0IHdlYjMuZXRoLm5ldC5nZXRJZCgpXHJcblxyXG4gICAgICAvLyBMb2FkIERhaVRva2VuXHJcbiAgICAgIGNvbnN0IGRhaVRva2VuRGF0YSA9IERhaVRva2VuLm5ldHdvcmtzW25ldHdvcmtJZF1cclxuICAgICAgaWYoZGFpVG9rZW5EYXRhKSB7XHJcbiAgICAgICAgY29uc3QgZGFpVG9rZW4gPSBuZXcgd2ViMy5ldGguQ29udHJhY3QoRGFpVG9rZW4uYWJpLCBkYWlUb2tlbkRhdGEuYWRkcmVzcylcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGFpVG9rZW4gfSlcclxuICAgICAgICBsZXQgZGFpVG9rZW5CYWxhbmNlID0gYXdhaXQgZGFpVG9rZW4ubWV0aG9kcy5iYWxhbmNlT2YodGhpcy5zdGF0ZS5hY2NvdW50KS5jYWxsKClcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGFpVG9rZW5CYWxhbmNlOiBkYWlUb2tlbkJhbGFuY2UudG9TdHJpbmcoKSB9KVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuc2hvd0Vycm9yKCdEYWlUb2tlbiBjb250cmFjdCBub3QgZGVwbG95ZWQgdG8gZGV0ZWN0ZWQgbmV0d29yay4nKVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBMb2FkIERhcHBUb2tlblxyXG4gICAgICBjb25zdCBkYXBwVG9rZW5EYXRhID0gRGFwcFRva2VuLm5ldHdvcmtzW25ldHdvcmtJZF1cclxuICAgICAgaWYoZGFwcFRva2VuRGF0YSkge1xyXG4gICAgICAgIGNvbnN0IGRhcHBUb2tlbiA9IG5ldyB3ZWIzLmV0aC5Db250cmFjdChEYXBwVG9rZW4uYWJpLCBkYXBwVG9rZW5EYXRhLmFkZHJlc3MpXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRhcHBUb2tlbiB9KVxyXG4gICAgICAgIGxldCBkYXBwVG9rZW5CYWxhbmNlID0gYXdhaXQgZGFwcFRva2VuLm1ldGhvZHMuYmFsYW5jZU9mKHRoaXMuc3RhdGUuYWNjb3VudCkuY2FsbCgpXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRhcHBUb2tlbkJhbGFuY2U6IGRhcHBUb2tlbkJhbGFuY2UudG9TdHJpbmcoKSB9KVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuc2hvd0Vycm9yKCdEYXBwVG9rZW4gY29udHJhY3Qgbm90IGRlcGxveWVkIHRvIGRldGVjdGVkIG5ldHdvcmsuJylcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gTG9hZCBUb2tlbkZhcm1cclxuICAgICAgY29uc3QgdG9rZW5GYXJtRGF0YSA9IFRva2VuRmFybS5uZXR3b3Jrc1tuZXR3b3JrSWRdXHJcbiAgICAgIGlmKHRva2VuRmFybURhdGEpIHtcclxuICAgICAgICBjb25zdCB0b2tlbkZhcm0gPSBuZXcgd2ViMy5ldGguQ29udHJhY3QoVG9rZW5GYXJtLmFiaSwgdG9rZW5GYXJtRGF0YS5hZGRyZXNzKVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB0b2tlbkZhcm0gfSlcclxuICAgICAgICBsZXQgc3Rha2luZ0JhbGFuY2UgPSBhd2FpdCB0b2tlbkZhcm0ubWV0aG9kcy5zdGFraW5nQmFsYW5jZSh0aGlzLnN0YXRlLmFjY291bnQpLmNhbGwoKVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzdGFraW5nQmFsYW5jZTogc3Rha2luZ0JhbGFuY2UudG9TdHJpbmcoKSB9KVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuc2hvd0Vycm9yKCdUb2tlbkZhcm0gY29udHJhY3Qgbm90IGRlcGxveWVkIHRvIGRldGVjdGVkIG5ldHdvcmsuJylcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlIH0pXHJcbiAgfVxyXG5cclxuICBhc3luYyBsb2FkV2ViMygpIHtcclxuICAgIGlmICgod2luZG93IGFzIGFueSkuZXRoZXJldW0pIHtcclxuICAgICAgKHdpbmRvdyBhcyBhbnkpLndlYjMgPSBuZXcgV2ViMygod2luZG93IGFzIGFueSkuZXRoZXJldW0pXHJcbiAgICAgIGF3YWl0ICh3aW5kb3cgYXMgYW55KS5ldGhlcmV1bS5lbmFibGUoKVxyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoKHdpbmRvdyBhcyBhbnkpLndlYjMpIHtcclxuICAgICAgKHdpbmRvdyBhcyBhbnkpLndlYjMgPSBuZXcgV2ViMygod2luZG93IGFzIGFueSkud2ViMy5jdXJyZW50UHJvdmlkZXIpXHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgdGhpcy5zaG93RXJyb3IoJ05vbi1FdGhlcmV1bSBicm93c2VyIGRldGVjdGVkLiBZb3Ugc2hvdWxkIGNvbnNpZGVyIHRyeWluZyBNZXRhTWFzayEnKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuICh3aW5kb3cgYXMgYW55KS53ZWIzO1xyXG4gIH1cclxuXHJcbiAgc3Rha2VUb2tlbnMgPSAoYW1vdW50KSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogdHJ1ZSB9KVxyXG4gICAgdGhpcy5zdGF0ZS5kYWlUb2tlbi5tZXRob2RzLmFwcHJvdmUodGhpcy5zdGF0ZS50b2tlbkZhcm0uX2FkZHJlc3MsIGFtb3VudCkuc2VuZCh7IGZyb206IHRoaXMuc3RhdGUuYWNjb3VudCB9KS5vbigndHJhbnNhY3Rpb25IYXNoJywgKGhhc2gpID0+IHtcclxuICAgICAgdGhpcy5zdGF0ZS50b2tlbkZhcm0ubWV0aG9kcy5zdGFrZVRva2VucyhhbW91bnQpLnNlbmQoeyBmcm9tOiB0aGlzLnN0YXRlLmFjY291bnQgfSkub24oJ3RyYW5zYWN0aW9uSGFzaCcsIChoYXNoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlIH0pXHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgdW5zdGFrZVRva2VucyA9IChhbW91bnQpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiB0cnVlIH0pXHJcbiAgICB0aGlzLnN0YXRlLnRva2VuRmFybS5tZXRob2RzLnVuc3Rha2VUb2tlbnMoKS5zZW5kKHsgZnJvbTogdGhpcy5zdGF0ZS5hY2NvdW50IH0pLm9uKCd0cmFuc2FjdGlvbkhhc2gnLCAoaGFzaCkgPT4ge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UgfSlcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBhY2NvdW50OiAnMHgwJyxcclxuICAgICAgZGFpVG9rZW46IHt9LFxyXG4gICAgICBkYXBwVG9rZW46IHt9LFxyXG4gICAgICB0b2tlbkZhcm06IHt9LFxyXG4gICAgICBkYWlUb2tlbkJhbGFuY2U6ICcwJyxcclxuICAgICAgZGFwcFRva2VuQmFsYW5jZTogJzAnLFxyXG4gICAgICBzdGFraW5nQmFsYW5jZTogJzAnLFxyXG4gICAgICBsb2FkaW5nOiB0cnVlXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBsZXQgY29udGVudFxyXG4gICAgaWYoIXRoaXMuc3RhdGUubG9hZGluZykge1xyXG4gICAgICBjb250ZW50ID0gIDxkaXYgY2xhc3NOYW1lPXtgdy0xMiBoLTEyIGJvcmRlci00IGJvcmRlci10ZWFsLTYwMCByb3VuZGVkLWZ1bGwgJHtzdHlsZXMubG9hZGVyfWB9PjwvZGl2PlxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29udGVudCA9IDxNYWluXHJcbiAgICAgICAgZGFpVG9rZW5CYWxhbmNlPXt0aGlzLnN0YXRlLmRhaVRva2VuQmFsYW5jZX1cclxuICAgICAgICBkYXBwVG9rZW5CYWxhbmNlPXt0aGlzLnN0YXRlLmRhcHBUb2tlbkJhbGFuY2V9XHJcbiAgICAgICAgc3Rha2luZ0JhbGFuY2U9e3RoaXMuc3RhdGUuc3Rha2luZ0JhbGFuY2V9XHJcbiAgICAgICAgc3Rha2VUb2tlbnM9e3RoaXMuc3Rha2VUb2tlbnN9XHJcbiAgICAgICAgdW5zdGFrZVRva2Vucz17dGhpcy51bnN0YWtlVG9rZW5zfVxyXG4gICAgICAvPlxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPE5hdmJhciBhY2NvdW50PXt0aGlzLnN0YXRlLmFjY291bnR9IC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgbXQtNVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgPG1haW4gcm9sZT1cIm1haW5cIiBjbGFzc05hbWU9XCJjb2wtbGctMTIgbWwtYXV0byBtci1hdXRvXCIgc3R5bGU9e3sgbWF4V2lkdGg6ICc2MDBweCcgfX0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50IG1yLWF1dG8gbWwtYXV0b1wiPlxyXG5cclxuICAgICAgICAgICAgICAgIHtjb250ZW50fVxyXG5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9tYWluPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPE5vdGlmaWNhdGlvbkNvbnRhaW5lciAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
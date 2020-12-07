webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/services/Blockchain.service.ts":
/*!********************************************!*\
  !*** ./src/services/Blockchain.service.ts ***!
  \********************************************/
/*! exports provided: BlockchainService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockchainService", function() { return BlockchainService; });
/* harmony import */ var C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! web3 */ "./node_modules/web3/src/index.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Notification.service */ "./src/services/Notification.service.ts");
/* harmony import */ var _abis_WavectToken_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../abis/WavectToken.json */ "./src/abis/WavectToken.json");
var _abis_WavectToken_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../abis/WavectToken.json */ "./src/abis/WavectToken.json", 1);
/* harmony import */ var _abis_TokenFarm_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../abis/TokenFarm.json */ "./src/abis/TokenFarm.json");
var _abis_TokenFarm_json__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../abis/TokenFarm.json */ "./src/abis/TokenFarm.json", 1);
/* harmony import */ var _Event_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Event.service */ "./src/services/Event.service.ts");










var BlockchainService = /*#__PURE__*/function () {
  function BlockchainService() {
    Object(C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, BlockchainService);
  }

  Object(C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(BlockchainService, null, [{
    key: "stakeTokens",
    value: function () {
      var _stakeTokens = Object(C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(amount) {
        return C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return BlockchainService._tokenFarmContract.methods.stakeTokens(amount).send({
                  from: BlockchainService._account,
                  to: BlockchainService._tokenFarmContract.address,
                  value: amount
                });

              case 2:
                return _context.abrupt("return", _context.sent);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function stakeTokens(_x) {
        return _stakeTokens.apply(this, arguments);
      }

      return stakeTokens;
    }()
  }, {
    key: "connectToBlockchain",
    value: function () {
      var _connectToBlockchain = Object(C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.t0 = BlockchainService;
                _context2.next = 4;
                return BlockchainService.loadWeb3();

              case 4:
                _context2.t1 = _context2.sent;
                _context2.next = 7;
                return _context2.t0.loadBlockchainData.call(_context2.t0, _context2.t1);

              case 7:
                _Notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"].showSuccess('Connected to Blockchain.');
                _context2.next = 13;
                break;

              case 10:
                _context2.prev = 10;
                _context2.t2 = _context2["catch"](0);
                _Notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"].showError('You need to allow your browser to connect to our Web3 service.', _context2.t2);

              case 13:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 10]]);
      }));

      function connectToBlockchain() {
        return _connectToBlockchain.apply(this, arguments);
      }

      return connectToBlockchain;
    }()
  }, {
    key: "getWavectTokenBalance",
    value: function () {
      var _getWavectTokenBalance = Object(C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        return C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;

                if (!BlockchainService._wavectTokenBalance) {
                  _context3.next = 5;
                  break;
                }

                _context3.t0 = BlockchainService._wavectTokenBalance;
                _context3.next = 12;
                break;

              case 5:
                _context3.t1 = BlockchainService._wavectTokenContract.methods;
                _context3.next = 8;
                return BlockchainService.getCurrentAccount();

              case 8:
                _context3.t2 = _context3.sent;
                _context3.next = 11;
                return _context3.t1.balanceOf.call(_context3.t1, _context3.t2).call().toString();

              case 11:
                _context3.t0 = _context3.sent;

              case 12:
                return _context3.abrupt("return", _context3.t0);

              case 15:
                _context3.prev = 15;
                _context3.t3 = _context3["catch"](0);
                _Notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"].showError('Could not fetch Wavect Token balance.', _context3.t3);

              case 18:
                return _context3.abrupt("return", '0');

              case 19:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 15]]);
      }));

      function getWavectTokenBalance() {
        return _getWavectTokenBalance.apply(this, arguments);
      }

      return getWavectTokenBalance;
    }()
  }, {
    key: "getStakingBalance",
    value: function () {
      var _getStakingBalance = Object(C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        return C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;

                if (!BlockchainService._stakingBalance) {
                  _context4.next = 5;
                  break;
                }

                _context4.t0 = BlockchainService._stakingBalance;
                _context4.next = 12;
                break;

              case 5:
                _context4.t1 = BlockchainService._tokenFarmContract.methods;
                _context4.next = 8;
                return BlockchainService.getCurrentAccount();

              case 8:
                _context4.t2 = _context4.sent;
                _context4.next = 11;
                return _context4.t1.stakingBalance.call(_context4.t1, _context4.t2).call().toString();

              case 11:
                _context4.t0 = _context4.sent;

              case 12:
                return _context4.abrupt("return", _context4.t0);

              case 15:
                _context4.prev = 15;
                _context4.t3 = _context4["catch"](0);
                _Notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"].showError('Could not fetch staking balance.', _context4.t3);

              case 18:
                return _context4.abrupt("return", '0');

              case 19:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 15]]);
      }));

      function getStakingBalance() {
        return _getStakingBalance.apply(this, arguments);
      }

      return getStakingBalance;
    }()
  }, {
    key: "getCurrentAccount",
    value: function () {
      var _getCurrentAccount = Object(C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
        return C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;

                if (!BlockchainService._account) {
                  _context5.next = 5;
                  break;
                }

                _context5.t0 = BlockchainService._account;
                _context5.next = 8;
                break;

              case 5:
                _context5.next = 7;
                return window.web3.eth.getAccounts()[0];

              case 7:
                _context5.t0 = _context5.sent;

              case 8:
                return _context5.abrupt("return", _context5.t0);

              case 11:
                _context5.prev = 11;
                _context5.t1 = _context5["catch"](0);
                _Notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"].showError('Could not fetch account.', _context5.t1);

              case 14:
                return _context5.abrupt("return", '0x0');

              case 15:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[0, 11]]);
      }));

      function getCurrentAccount() {
        return _getCurrentAccount.apply(this, arguments);
      }

      return getCurrentAccount;
    }()
  }, {
    key: "loadWavectTokenContract",
    value: function () {
      var _loadWavectTokenContract = Object(C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6(networkId) {
        var wavectTokenData;
        return C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                wavectTokenData = _abis_WavectToken_json__WEBPACK_IMPORTED_MODULE_7__.networks[networkId];

                if (wavectTokenData) {
                  BlockchainService._wavectTokenContract = new window.web3.eth.Contract(_abis_WavectToken_json__WEBPACK_IMPORTED_MODULE_7__.abi, wavectTokenData.address);
                } else {
                  _Notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"].showError('WavectToken contract not deployed to detected network.');
                }

                return _context6.abrupt("return", BlockchainService._wavectTokenBalance);

              case 3:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      function loadWavectTokenContract(_x2) {
        return _loadWavectTokenContract.apply(this, arguments);
      }

      return loadWavectTokenContract;
    }()
  }, {
    key: "loadTokenFarmContract",
    value: function () {
      var _loadTokenFarmContract = Object(C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7(networkId) {
        var tokenFarmData;
        return C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                tokenFarmData = _abis_TokenFarm_json__WEBPACK_IMPORTED_MODULE_8__.networks[networkId];

                if (tokenFarmData) {
                  BlockchainService._tokenFarmContract = new window.web3.eth.Contract(_abis_TokenFarm_json__WEBPACK_IMPORTED_MODULE_8__.abi, tokenFarmData.address);
                } else {
                  _Notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"].showError('TokenFarm contract not deployed to detected network.');
                }

              case 2:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }));

      function loadTokenFarmContract(_x3) {
        return _loadTokenFarmContract.apply(this, arguments);
      }

      return loadTokenFarmContract;
    }()
  }, {
    key: "loadBlockchainData",
    value: function () {
      var _loadBlockchainData = Object(C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8(web3) {
        var networkId;
        return C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                if (!web3) {
                  _context8.next = 9;
                  break;
                }

                _context8.next = 3;
                return window.web3.eth.net.getId();

              case 3:
                networkId = _context8.sent;
                _context8.next = 6;
                return BlockchainService.loadWavectTokenContract(networkId);

              case 6:
                _context8.next = 8;
                return BlockchainService.loadTokenFarmContract(networkId);

              case 8:
                _Event_service__WEBPACK_IMPORTED_MODULE_9__["default"].emit(_Event_service__WEBPACK_IMPORTED_MODULE_9__["EVENT_BLOCKCHAIN_INITIALIZED"]);

              case 9:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }));

      function loadBlockchainData(_x4) {
        return _loadBlockchainData.apply(this, arguments);
      }

      return loadBlockchainData;
    }()
  }, {
    key: "loadWeb3",
    value: function () {
      var _loadWeb = Object(C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee9() {
        return C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                if (!window.ethereum) {
                  _context9.next = 6;
                  break;
                }

                window.web3 = new web3__WEBPACK_IMPORTED_MODULE_5___default.a(window.ethereum);
                _context9.next = 4;
                return window.ethereum.enable();

              case 4:
                _context9.next = 7;
                break;

              case 6:
                if (window.web3) {
                  window.web3 = new web3__WEBPACK_IMPORTED_MODULE_5___default.a(window.web3.currentProvider);
                } else {
                  _Notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"].showError('Non-Ethereum browser detected. You should consider trying MetaMask!');
                }

              case 7:
                return _context9.abrupt("return", window.web3);

              case 8:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9);
      }));

      function loadWeb3() {
        return _loadWeb.apply(this, arguments);
      }

      return loadWeb3;
    }()
  }]);

  return BlockchainService;
}();

Object(C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(BlockchainService, "_tokenFarmContract", void 0);

Object(C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(BlockchainService, "_stakingBalance", void 0);

Object(C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(BlockchainService, "_wavectTokenContract", void 0);

Object(C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(BlockchainService, "_wavectTokenBalance", void 0);

Object(C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(BlockchainService, "_account", void 0);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlcnZpY2VzL0Jsb2NrY2hhaW4uc2VydmljZS50cyJdLCJuYW1lcyI6WyJCbG9ja2NoYWluU2VydmljZSIsImFtb3VudCIsIl90b2tlbkZhcm1Db250cmFjdCIsIm1ldGhvZHMiLCJzdGFrZVRva2VucyIsInNlbmQiLCJmcm9tIiwiX2FjY291bnQiLCJ0byIsImFkZHJlc3MiLCJ2YWx1ZSIsImxvYWRXZWIzIiwibG9hZEJsb2NrY2hhaW5EYXRhIiwiTm90aWZpY2F0aW9uU2VydmljZSIsInNob3dTdWNjZXNzIiwic2hvd0Vycm9yIiwiX3dhdmVjdFRva2VuQmFsYW5jZSIsIl93YXZlY3RUb2tlbkNvbnRyYWN0IiwiZ2V0Q3VycmVudEFjY291bnQiLCJiYWxhbmNlT2YiLCJjYWxsIiwidG9TdHJpbmciLCJfc3Rha2luZ0JhbGFuY2UiLCJzdGFraW5nQmFsYW5jZSIsIndpbmRvdyIsIndlYjMiLCJldGgiLCJnZXRBY2NvdW50cyIsIm5ldHdvcmtJZCIsIndhdmVjdFRva2VuRGF0YSIsIldhdmVjdFRva2VuIiwibmV0d29ya3MiLCJDb250cmFjdCIsImFiaSIsInRva2VuRmFybURhdGEiLCJUb2tlbkZhcm0iLCJuZXQiLCJnZXRJZCIsImxvYWRXYXZlY3RUb2tlbkNvbnRyYWN0IiwibG9hZFRva2VuRmFybUNvbnRyYWN0IiwiRW1pdHRlciIsImVtaXQiLCJFVkVOVF9CTE9DS0NIQUlOX0lOSVRJQUxJWkVEIiwiZXRoZXJldW0iLCJXZWIzIiwiZW5hYmxlIiwiY3VycmVudFByb3ZpZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLGlCQUFiO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBLHVVQU9vQ0MsTUFQcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBUXFCRCxpQkFBaUIsQ0FBQ0Us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LElBQWhCLENBQXFCcUIsZUFBOUIsQ0FBdkI7QUFDRCxpQkFGSSxNQUdBO0FBQ0hqQywyRkFBbUIsQ0FBQ0UsU0FBcEIsQ0FBOEIscUVBQTlCO0FBQ0Q7O0FBckdYO0FBQUEsa0RBc0drQlMsTUFBRCxDQUFnQkMsSUF0R2pDOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7Z0pBQWF6QixpQjs7Z0pBQUFBLGlCOztnSkFBQUEsaUI7O2dKQUFBQSxpQjs7Z0pBQUFBLGlCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMWQxY2Y3ZDhhZWRkYzM5MTZlYWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBXZWIzIGZyb20gXCJ3ZWIzXCJcclxuaW1wb3J0IHsgTm90aWZpY2F0aW9uU2VydmljZSB9IGZyb20gXCIuL05vdGlmaWNhdGlvbi5zZXJ2aWNlXCJcclxuaW1wb3J0IFdhdmVjdFRva2VuIGZyb20gJy4uL2FiaXMvV2F2ZWN0VG9rZW4uanNvbidcclxuaW1wb3J0IFRva2VuRmFybSBmcm9tICcuLi9hYmlzL1Rva2VuRmFybS5qc29uJ1xyXG5pbXBvcnQgRW1pdHRlciwgeyBFVkVOVF9CTE9DS0NIQUlOX0lOSVRJQUxJWkVEIH0gZnJvbSBcIi4vRXZlbnQuc2VydmljZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJsb2NrY2hhaW5TZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgc3RhdGljIF90b2tlbkZhcm1Db250cmFjdDtcclxuICAgIHByaXZhdGUgc3RhdGljIF9zdGFraW5nQmFsYW5jZTogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX3dhdmVjdFRva2VuQ29udHJhY3Q7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBfd2F2ZWN0VG9rZW5CYWxhbmNlOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBfYWNjb3VudDogc3RyaW5nO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgc3Rha2VUb2tlbnMoYW1vdW50OiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gYXdhaXQgQmxvY2tjaGFpblNlcnZpY2UuX3Rva2VuRmFybUNvbnRyYWN0Lm1ldGhvZHMuc3Rha2VUb2tlbnMoYW1vdW50KS5zZW5kKHsgXHJcbiAgICAgICAgICBmcm9tOiBCbG9ja2NoYWluU2VydmljZS5fYWNjb3VudCwgXHJcbiAgICAgICAgICB0bzogQmxvY2tjaGFpblNlcnZpY2UuX3Rva2VuRmFybUNvbnRyYWN0LmFkZHJlc3MsXHJcbiAgICAgICAgICB2YWx1ZTogYW1vdW50LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBwdWJsaWMgc3RhdGljIGFzeW5jIGNvbm5lY3RUb0Jsb2NrY2hhaW4oKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgYXdhaXQgQmxvY2tjaGFpblNlcnZpY2UubG9hZEJsb2NrY2hhaW5EYXRhKFxyXG4gICAgICAgICAgICAgIGF3YWl0IEJsb2NrY2hhaW5TZXJ2aWNlLmxvYWRXZWIzKClcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICBOb3RpZmljYXRpb25TZXJ2aWNlLnNob3dTdWNjZXNzKCdDb25uZWN0ZWQgdG8gQmxvY2tjaGFpbi4nKVxyXG4gICAgICAgICAgfSBjYXRjaChlcnIpIHtcclxuICAgICAgICAgICAgTm90aWZpY2F0aW9uU2VydmljZS5zaG93RXJyb3IoJ1lvdSBuZWVkIHRvIGFsbG93IHlvdXIgYnJvd3NlciB0byBjb25uZWN0IHRvIG91ciBXZWIzIHNlcnZpY2UuJywgZXJyKVxyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBwdWJsaWMgc3RhdGljIGFzeW5jIGdldFdhdmVjdFRva2VuQmFsYW5jZSgpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgcmV0dXJuIEJsb2NrY2hhaW5TZXJ2aWNlLl93YXZlY3RUb2tlbkJhbGFuY2VcclxuICAgICAgICAgICAgICAgID8gQmxvY2tjaGFpblNlcnZpY2UuX3dhdmVjdFRva2VuQmFsYW5jZVxyXG4gICAgICAgICAgICAgICAgOiBhd2FpdCBCbG9ja2NoYWluU2VydmljZS5fd2F2ZWN0VG9rZW5Db250cmFjdC5tZXRob2RzLmJhbGFuY2VPZihcclxuICAgICAgICAgICAgICAgICAgICBhd2FpdCBCbG9ja2NoYWluU2VydmljZS5nZXRDdXJyZW50QWNjb3VudCgpKS5jYWxsKCkudG9TdHJpbmcoKTtcclxuICAgICAgICAgIH0gY2F0Y2goZXJyKSB7XHJcbiAgICAgICAgICAgICAgTm90aWZpY2F0aW9uU2VydmljZS5zaG93RXJyb3IoJ0NvdWxkIG5vdCBmZXRjaCBXYXZlY3QgVG9rZW4gYmFsYW5jZS4nLCBlcnIpO1xyXG4gICAgICAgICAgfSBcclxuICAgICAgICAgIHJldHVybiAnMCc7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBhc3luYyBnZXRTdGFraW5nQmFsYW5jZSgpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIEJsb2NrY2hhaW5TZXJ2aWNlLl9zdGFraW5nQmFsYW5jZSBcclxuICAgICAgICAgICAgICAgICAgICA/IEJsb2NrY2hhaW5TZXJ2aWNlLl9zdGFraW5nQmFsYW5jZVxyXG4gICAgICAgICAgICAgICAgICAgIDogYXdhaXQgQmxvY2tjaGFpblNlcnZpY2UuX3Rva2VuRmFybUNvbnRyYWN0Lm1ldGhvZHMuc3Rha2luZ0JhbGFuY2UoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IEJsb2NrY2hhaW5TZXJ2aWNlLmdldEN1cnJlbnRBY2NvdW50KCkpLmNhbGwoKS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICB9IGNhdGNoKGVycikge1xyXG4gICAgICAgICAgICAgICAgTm90aWZpY2F0aW9uU2VydmljZS5zaG93RXJyb3IoJ0NvdWxkIG5vdCBmZXRjaCBzdGFraW5nIGJhbGFuY2UuJywgZXJyKTtcclxuICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgcmV0dXJuICcwJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgZ2V0Q3VycmVudEFjY291bnQoKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBCbG9ja2NoYWluU2VydmljZS5fYWNjb3VudFxyXG4gICAgICAgICAgICAgICAgPyBCbG9ja2NoYWluU2VydmljZS5fYWNjb3VudFxyXG4gICAgICAgICAgICAgICAgOiBhd2FpdCAod2luZG93IGFzIGFueSkud2ViMy5ldGguZ2V0QWNjb3VudHMoKVswXTtcclxuICAgICAgICAgICAgfSBjYXRjaChlcnIpIHtcclxuICAgICAgICAgICAgICAgIE5vdGlmaWNhdGlvblNlcnZpY2Uuc2hvd0Vycm9yKCdDb3VsZCBub3QgZmV0Y2ggYWNjb3VudC4nLCBlcnIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiAnMHgwJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGFzeW5jIGxvYWRXYXZlY3RUb2tlbkNvbnRyYWN0KG5ldHdvcmtJZDogc3RyaW5nKSB7XHJcbiAgICAgICAgICBjb25zdCB3YXZlY3RUb2tlbkRhdGEgPSBXYXZlY3RUb2tlbi5uZXR3b3Jrc1tuZXR3b3JrSWRdXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGlmKHdhdmVjdFRva2VuRGF0YSkge1xyXG4gICAgICAgICAgICBCbG9ja2NoYWluU2VydmljZS5fd2F2ZWN0VG9rZW5Db250cmFjdCA9IG5ldyAod2luZG93IGFzIGFueSkud2ViMy5ldGguQ29udHJhY3QoV2F2ZWN0VG9rZW4uYWJpLCB3YXZlY3RUb2tlbkRhdGEuYWRkcmVzcyk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBOb3RpZmljYXRpb25TZXJ2aWNlLnNob3dFcnJvcignV2F2ZWN0VG9rZW4gY29udHJhY3Qgbm90IGRlcGxveWVkIHRvIGRldGVjdGVkIG5ldHdvcmsuJylcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiBCbG9ja2NoYWluU2VydmljZS5fd2F2ZWN0VG9rZW5CYWxhbmNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgYXN5bmMgbG9hZFRva2VuRmFybUNvbnRyYWN0KG5ldHdvcmtJZDogc3RyaW5nKSB7XHJcbiAgICAgICAgICBjb25zdCB0b2tlbkZhcm1EYXRhID0gVG9rZW5GYXJtLm5ldHdvcmtzW25ldHdvcmtJZF1cclxuICAgICAgICAgIGlmKHRva2VuRmFybURhdGEpIHtcclxuICAgICAgICAgICAgQmxvY2tjaGFpblNlcnZpY2UuX3Rva2VuRmFybUNvbnRyYWN0ID0gbmV3ICh3aW5kb3cgYXMgYW55KS53ZWIzLmV0aC5Db250cmFjdChUb2tlbkZhcm0uYWJpLCB0b2tlbkZhcm1EYXRhLmFkZHJlc3MpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgTm90aWZpY2F0aW9uU2VydmljZS5zaG93RXJyb3IoJ1Rva2VuRmFybSBjb250cmFjdCBub3QgZGVwbG95ZWQgdG8gZGV0ZWN0ZWQgbmV0d29yay4nKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIHByaXZhdGUgc3RhdGljIGFzeW5jIGxvYWRCbG9ja2NoYWluRGF0YSh3ZWIzOiBhbnkpIHtcclxuICAgICAgICBpZiAod2ViMykge1xyXG4gICAgICAgICAgY29uc3QgbmV0d29ya0lkOiBzdHJpbmcgPSBhd2FpdCAod2luZG93IGFzIGFueSkud2ViMy5ldGgubmV0LmdldElkKClcclxuICAgICAgICAgIGF3YWl0IEJsb2NrY2hhaW5TZXJ2aWNlLmxvYWRXYXZlY3RUb2tlbkNvbnRyYWN0KG5ldHdvcmtJZCk7XHJcbiAgICAgICAgICBhd2FpdCBCbG9ja2NoYWluU2VydmljZS5sb2FkVG9rZW5GYXJtQ29udHJhY3QobmV0d29ya0lkKTtcclxuICAgICAgICAgIEVtaXR0ZXIuZW1pdChFVkVOVF9CTE9DS0NIQUlOX0lOSVRJQUxJWkVEKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgICBwcml2YXRlIHN0YXRpYyBhc3luYyBsb2FkV2ViMygpIHtcclxuICAgICAgICAgIGlmICgod2luZG93IGFzIGFueSkuZXRoZXJldW0pIHtcclxuICAgIFxyXG4gICAgICAgICAgICAod2luZG93IGFzIGFueSkud2ViMyA9IG5ldyBXZWIzKCh3aW5kb3cgYXMgYW55KS5ldGhlcmV1bSlcclxuICAgICAgICAgICAgYXdhaXQgKHdpbmRvdyBhcyBhbnkpLmV0aGVyZXVtLmVuYWJsZSgpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlbHNlIGlmICgod2luZG93IGFzIGFueSkud2ViMykge1xyXG4gICAgICAgICAgICAod2luZG93IGFzIGFueSkud2ViMyA9IG5ldyBXZWIzKCh3aW5kb3cgYXMgYW55KS53ZWIzLmN1cnJlbnRQcm92aWRlcilcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBOb3RpZmljYXRpb25TZXJ2aWNlLnNob3dFcnJvcignTm9uLUV0aGVyZXVtIGJyb3dzZXIgZGV0ZWN0ZWQuIFlvdSBzaG91bGQgY29uc2lkZXIgdHJ5aW5nIE1ldGFNYXNrIScpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gKHdpbmRvdyBhcyBhbnkpLndlYjM7XHJcbiAgICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=
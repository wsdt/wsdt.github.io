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
        var res;
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
                res = _context5.t0;
                _Notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"].showSuccess('FETCHED: ' + res);
                return _context5.abrupt("return", res);

              case 13:
                _context5.prev = 13;
                _context5.t1 = _context5["catch"](0);
                _Notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"].showError('Could not fetch account.', _context5.t1);

              case 16:
                return _context5.abrupt("return", '0x0');

              case 17:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[0, 13]]);
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
                _Event_service__WEBPACK_IMPORTED_MODULE_9__["default"].emit(_Event_service__WEBPACK_IMPORTED_MODULE_9__["EVENT_BLOCKCHAIN_DATA_CHANGED"]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlcnZpY2VzL0Jsb2NrY2hhaW4uc2VydmljZS50cyJdLCJuYW1lcyI6WyJCbG9ja2NoYWluU2VydmljZSIsImFtb3VudCIsIl90b2tlbkZhcm1Db250cmFjdCIsIm1ldGhvZHMiLCJzdGFrZVRva2VucyIsInNlbmQiLCJmcm9tIiwiX2FjY291bnQiLCJ0byIsImFkZHJlc3MiLCJ2YWx1ZSIsImxvYWRXZWIzIiwibG9hZEJsb2NrY2hhaW5EYXRhIiwiTm90aWZpY2F0aW9uU2VydmljZSIsInNob3dTdWNjZXNzIiwic2hvd0Vycm9yIiwiX3dhdmVjdFRva2VuQmFsYW5jZSIsIl93YXZlY3RUb2tlbkNvbnRyYWN0IiwiZ2V0Q3VycmVudEFjY291bnQiLCJiYWxhbmNlT2YiLCJjYWxsIiwidG9TdHJpbmciLCJfc3Rha2luZ0JhbGFuY2UiLCJzdGFraW5nQmFsYW5jZSIsIndpbmRvdyIsIndlYjMiLCJldGgiLCJnZXRBY2NvdW50cyIsInJlcyIsIm5ldHdvcmtJZCIsIndhdmVjdFRva2VuRGF0YSIsIldhdmVjdFRva2VuIiwibmV0d29ya3MiLCJDb250cmFjdCIsImFiaSIsInRva2VuRmFybURhdGEiLCJUb2tlbkZhcm0iLCJuZXQiLCJnZXRJZCIsImxvYWRXYXZlY3RUb2tlbkNvbnRyYWN0IiwibG9hZFRva2VuRmFybUNvbnRyYWN0IiwiRW1pdHRlciIsImVtaXQiLCJFVkVOVF9CTE9DS0NIQUlOX0RBVEFfQ0hBTkdFRCIsImV0aGVyZXVtIiwiV2ViMyIsImVuYWJsZSIsImN1cnJlbnRQcm92aWRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxpQkFBYjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQSx1VUFPb0NDLE1BUHBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQVFxQkQsaUJBQWlC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S3RCLE1BQUQsQ0FBZ0JDLElBQXBCLEVBQTBCO0FBQzVCRCx3QkFBRCxDQUFnQkMsSUFBaEIsR0FBdUIsSUFBSW9CLDJDQUFKLENBQVVyQixNQUFELENBQWdCQyxJQUFoQixDQUFxQnNCLGVBQTlCLENBQXZCO0FBQ0QsaUJBRkksTUFHQTtBQUNIbEMsMkZBQW1CLENBQUNFLFNBQXBCLENBQThCLHFFQUE5QjtBQUNEOztBQXhHWDtBQUFBLGtEQXlHa0JTLE1BQUQsQ0FBZ0JDLElBekdqQzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7O2dKQUFhekIsaUI7O2dKQUFBQSxpQjs7Z0pBQUFBLGlCOztnSkFBQUEsaUI7O2dKQUFBQSxpQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjFmNmZlZDMzZGU1NTRjNGExZDYwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgV2ViMyBmcm9tIFwid2ViM1wiXHJcbmltcG9ydCB7IE5vdGlmaWNhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi9Ob3RpZmljYXRpb24uc2VydmljZVwiXHJcbmltcG9ydCBXYXZlY3RUb2tlbiBmcm9tICcuLi9hYmlzL1dhdmVjdFRva2VuLmpzb24nXHJcbmltcG9ydCBUb2tlbkZhcm0gZnJvbSAnLi4vYWJpcy9Ub2tlbkZhcm0uanNvbidcclxuaW1wb3J0IEVtaXR0ZXIsIHsgRVZFTlRfQkxPQ0tDSEFJTl9EQVRBX0NIQU5HRUQgfSBmcm9tIFwiLi9FdmVudC5zZXJ2aWNlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQmxvY2tjaGFpblNlcnZpY2Uge1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX3Rva2VuRmFybUNvbnRyYWN0O1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX3N0YWtpbmdCYWxhbmNlOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBfd2F2ZWN0VG9rZW5Db250cmFjdDtcclxuICAgIHByaXZhdGUgc3RhdGljIF93YXZlY3RUb2tlbkJhbGFuY2U6IHN0cmluZztcclxuICAgIHByaXZhdGUgc3RhdGljIF9hY2NvdW50OiBzdHJpbmc7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBzdGFrZVRva2VucyhhbW91bnQ6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiBhd2FpdCBCbG9ja2NoYWluU2VydmljZS5fdG9rZW5GYXJtQ29udHJhY3QubWV0aG9kcy5zdGFrZVRva2VucyhhbW91bnQpLnNlbmQoeyBcclxuICAgICAgICAgIGZyb206IEJsb2NrY2hhaW5TZXJ2aWNlLl9hY2NvdW50LCBcclxuICAgICAgICAgIHRvOiBCbG9ja2NoYWluU2VydmljZS5fdG9rZW5GYXJtQ29udHJhY3QuYWRkcmVzcyxcclxuICAgICAgICAgIHZhbHVlOiBhbW91bnQsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgY29ubmVjdFRvQmxvY2tjaGFpbigpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBhd2FpdCBCbG9ja2NoYWluU2VydmljZS5sb2FkQmxvY2tjaGFpbkRhdGEoXHJcbiAgICAgICAgICAgICAgYXdhaXQgQmxvY2tjaGFpblNlcnZpY2UubG9hZFdlYjMoKVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIE5vdGlmaWNhdGlvblNlcnZpY2Uuc2hvd1N1Y2Nlc3MoJ0Nvbm5lY3RlZCB0byBCbG9ja2NoYWluLicpXHJcbiAgICAgICAgICB9IGNhdGNoKGVycikge1xyXG4gICAgICAgICAgICBOb3RpZmljYXRpb25TZXJ2aWNlLnNob3dFcnJvcignWW91IG5lZWQgdG8gYWxsb3cgeW91ciBicm93c2VyIHRvIGNvbm5lY3QgdG8gb3VyIFdlYjMgc2VydmljZS4nLCBlcnIpXHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgZ2V0V2F2ZWN0VG9rZW5CYWxhbmNlKCk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICByZXR1cm4gQmxvY2tjaGFpblNlcnZpY2UuX3dhdmVjdFRva2VuQmFsYW5jZVxyXG4gICAgICAgICAgICAgICAgPyBCbG9ja2NoYWluU2VydmljZS5fd2F2ZWN0VG9rZW5CYWxhbmNlXHJcbiAgICAgICAgICAgICAgICA6IGF3YWl0IEJsb2NrY2hhaW5TZXJ2aWNlLl93YXZlY3RUb2tlbkNvbnRyYWN0Lm1ldGhvZHMuYmFsYW5jZU9mKFxyXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IEJsb2NrY2hhaW5TZXJ2aWNlLmdldEN1cnJlbnRBY2NvdW50KCkpLmNhbGwoKS50b1N0cmluZygpO1xyXG4gICAgICAgICAgfSBjYXRjaChlcnIpIHtcclxuICAgICAgICAgICAgICBOb3RpZmljYXRpb25TZXJ2aWNlLnNob3dFcnJvcignQ291bGQgbm90IGZldGNoIFdhdmVjdCBUb2tlbiBiYWxhbmNlLicsIGVycik7XHJcbiAgICAgICAgICB9IFxyXG4gICAgICAgICAgcmV0dXJuICcwJztcclxuICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIGFzeW5jIGdldFN0YWtpbmdCYWxhbmNlKCk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gQmxvY2tjaGFpblNlcnZpY2UuX3N0YWtpbmdCYWxhbmNlIFxyXG4gICAgICAgICAgICAgICAgICAgID8gQmxvY2tjaGFpblNlcnZpY2UuX3N0YWtpbmdCYWxhbmNlXHJcbiAgICAgICAgICAgICAgICAgICAgOiBhd2FpdCBCbG9ja2NoYWluU2VydmljZS5fdG9rZW5GYXJtQ29udHJhY3QubWV0aG9kcy5zdGFraW5nQmFsYW5jZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgQmxvY2tjaGFpblNlcnZpY2UuZ2V0Q3VycmVudEFjY291bnQoKSkuY2FsbCgpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2goZXJyKSB7XHJcbiAgICAgICAgICAgICAgICBOb3RpZmljYXRpb25TZXJ2aWNlLnNob3dFcnJvcignQ291bGQgbm90IGZldGNoIHN0YWtpbmcgYmFsYW5jZS4nLCBlcnIpO1xyXG4gICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICByZXR1cm4gJzAnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBhc3luYyBnZXRDdXJyZW50QWNjb3VudCgpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXMgPSBCbG9ja2NoYWluU2VydmljZS5fYWNjb3VudFxyXG4gICAgICAgICAgICAgICAgPyBCbG9ja2NoYWluU2VydmljZS5fYWNjb3VudFxyXG4gICAgICAgICAgICAgICAgOiBhd2FpdCAod2luZG93IGFzIGFueSkud2ViMy5ldGguZ2V0QWNjb3VudHMoKVswXTtcclxuICAgICAgICAgICAgICAgIE5vdGlmaWNhdGlvblNlcnZpY2Uuc2hvd1N1Y2Nlc3MoJ0ZFVENIRUQ6ICcrcmVzKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc1xyXG4gICAgICAgICAgICB9IGNhdGNoKGVycikge1xyXG4gICAgICAgICAgICAgICAgTm90aWZpY2F0aW9uU2VydmljZS5zaG93RXJyb3IoJ0NvdWxkIG5vdCBmZXRjaCBhY2NvdW50LicsIGVycik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuICcweDAnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgYXN5bmMgbG9hZFdhdmVjdFRva2VuQ29udHJhY3QobmV0d29ya0lkOiBzdHJpbmcpIHtcclxuICAgICAgICAgIGNvbnN0IHdhdmVjdFRva2VuRGF0YSA9IFdhdmVjdFRva2VuLm5ldHdvcmtzW25ldHdvcmtJZF1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgaWYod2F2ZWN0VG9rZW5EYXRhKSB7XHJcbiAgICAgICAgICAgIEJsb2NrY2hhaW5TZXJ2aWNlLl93YXZlY3RUb2tlbkNvbnRyYWN0ID0gbmV3ICh3aW5kb3cgYXMgYW55KS53ZWIzLmV0aC5Db250cmFjdChXYXZlY3RUb2tlbi5hYmksIHdhdmVjdFRva2VuRGF0YS5hZGRyZXNzKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIE5vdGlmaWNhdGlvblNlcnZpY2Uuc2hvd0Vycm9yKCdXYXZlY3RUb2tlbiBjb250cmFjdCBub3QgZGVwbG95ZWQgdG8gZGV0ZWN0ZWQgbmV0d29yay4nKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIEJsb2NrY2hhaW5TZXJ2aWNlLl93YXZlY3RUb2tlbkJhbGFuY2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBhc3luYyBsb2FkVG9rZW5GYXJtQ29udHJhY3QobmV0d29ya0lkOiBzdHJpbmcpIHtcclxuICAgICAgICAgIGNvbnN0IHRva2VuRmFybURhdGEgPSBUb2tlbkZhcm0ubmV0d29ya3NbbmV0d29ya0lkXVxyXG4gICAgICAgICAgaWYodG9rZW5GYXJtRGF0YSkge1xyXG4gICAgICAgICAgICBCbG9ja2NoYWluU2VydmljZS5fdG9rZW5GYXJtQ29udHJhY3QgPSBuZXcgKHdpbmRvdyBhcyBhbnkpLndlYjMuZXRoLkNvbnRyYWN0KFRva2VuRmFybS5hYmksIHRva2VuRmFybURhdGEuYWRkcmVzcyk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBOb3RpZmljYXRpb25TZXJ2aWNlLnNob3dFcnJvcignVG9rZW5GYXJtIGNvbnRyYWN0IG5vdCBkZXBsb3llZCB0byBkZXRlY3RlZCBuZXR3b3JrLicpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgcHJpdmF0ZSBzdGF0aWMgYXN5bmMgbG9hZEJsb2NrY2hhaW5EYXRhKHdlYjM6IGFueSkge1xyXG4gICAgICAgIGlmICh3ZWIzKSB7XHJcbiAgICAgICAgICBjb25zdCBuZXR3b3JrSWQ6IHN0cmluZyA9IGF3YWl0ICh3aW5kb3cgYXMgYW55KS53ZWIzLmV0aC5uZXQuZ2V0SWQoKVxyXG4gICAgICAgICAgYXdhaXQgQmxvY2tjaGFpblNlcnZpY2UubG9hZFdhdmVjdFRva2VuQ29udHJhY3QobmV0d29ya0lkKTtcclxuICAgICAgICAgIGF3YWl0IEJsb2NrY2hhaW5TZXJ2aWNlLmxvYWRUb2tlbkZhcm1Db250cmFjdChuZXR3b3JrSWQpO1xyXG4gICAgICAgICAgRW1pdHRlci5lbWl0KEVWRU5UX0JMT0NLQ0hBSU5fREFUQV9DSEFOR0VEKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgICBwcml2YXRlIHN0YXRpYyBhc3luYyBsb2FkV2ViMygpIHtcclxuICAgICAgICAgIGlmICgod2luZG93IGFzIGFueSkuZXRoZXJldW0pIHtcclxuICAgIFxyXG4gICAgICAgICAgICAod2luZG93IGFzIGFueSkud2ViMyA9IG5ldyBXZWIzKCh3aW5kb3cgYXMgYW55KS5ldGhlcmV1bSlcclxuICAgICAgICAgICAgYXdhaXQgKHdpbmRvdyBhcyBhbnkpLmV0aGVyZXVtLmVuYWJsZSgpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlbHNlIGlmICgod2luZG93IGFzIGFueSkud2ViMykge1xyXG4gICAgICAgICAgICAod2luZG93IGFzIGFueSkud2ViMyA9IG5ldyBXZWIzKCh3aW5kb3cgYXMgYW55KS53ZWIzLmN1cnJlbnRQcm92aWRlcilcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBOb3RpZmljYXRpb25TZXJ2aWNlLnNob3dFcnJvcignTm9uLUV0aGVyZXVtIGJyb3dzZXIgZGV0ZWN0ZWQuIFlvdSBzaG91bGQgY29uc2lkZXIgdHJ5aW5nIE1ldGFNYXNrIScpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gKHdpbmRvdyBhcyBhbnkpLndlYjM7XHJcbiAgICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=
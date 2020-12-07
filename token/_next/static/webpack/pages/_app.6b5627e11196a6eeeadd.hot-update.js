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
                _context2.next = 12;
                break;

              case 9:
                _context2.prev = 9;
                _context2.t2 = _context2["catch"](0);
                _Notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"].showError('You need to allow your browser to connect to our Web3 service.', _context2.t2);

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 9]]);
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

                if (BlockchainService._wavectTokenBalance) {
                  _context3.next = 9;
                  break;
                }

                _context3.t0 = BlockchainService._wavectTokenContract.methods;
                _context3.next = 5;
                return BlockchainService.getCurrentAccount();

              case 5:
                _context3.t1 = _context3.sent;
                _context3.next = 8;
                return _context3.t0.balanceOf.call(_context3.t0, _context3.t1).call().toString();

              case 8:
                BlockchainService._wavectTokenBalance = _context3.sent;

              case 9:
                return _context3.abrupt("return", BlockchainService._wavectTokenBalance);

              case 12:
                _context3.prev = 12;
                _context3.t2 = _context3["catch"](0);
                _Notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"].showError('Could not fetch Wavect Token balance.', _context3.t2);

              case 15:
                return _context3.abrupt("return", '0');

              case 16:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 12]]);
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

                if (BlockchainService._stakingBalance) {
                  _context4.next = 9;
                  break;
                }

                _context4.t0 = BlockchainService._tokenFarmContract.methods;
                _context4.next = 5;
                return BlockchainService.getCurrentAccount();

              case 5:
                _context4.t1 = _context4.sent;
                _context4.next = 8;
                return _context4.t0.stakingBalance.call(_context4.t0, _context4.t1).call().toString();

              case 8:
                BlockchainService._stakingBalance = _context4.sent;

              case 9:
                return _context4.abrupt("return", BlockchainService._stakingBalance);

              case 12:
                _context4.prev = 12;
                _context4.t2 = _context4["catch"](0);
                _Notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"].showError('Could not fetch staking balance.', _context4.t2);

              case 15:
                return _context4.abrupt("return", '0');

              case 16:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 12]]);
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

                if (BlockchainService._account) {
                  _context5.next = 5;
                  break;
                }

                _context5.next = 4;
                return window.web3.eth.getAccounts();

              case 4:
                BlockchainService._account = _context5.sent[0];

              case 5:
                return _context5.abrupt("return", BlockchainService._account);

              case 8:
                _context5.prev = 8;
                _context5.t0 = _context5["catch"](0);
                _Notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"].showError('Could not fetch account.', _context5.t0);

              case 11:
                return _context5.abrupt("return", '0x0');

              case 12:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[0, 8]]);
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
                  _context8.next = 10;
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
                _Event_service__WEBPACK_IMPORTED_MODULE_9__["default"].once(_Event_service__WEBPACK_IMPORTED_MODULE_9__["EVENT_BLOCKCHAIN_DATA_CHANGED"], function () {
                  return _Notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"].showSuccess('Connected to Blockchain.');
                });
                _Event_service__WEBPACK_IMPORTED_MODULE_9__["default"].emit(_Event_service__WEBPACK_IMPORTED_MODULE_9__["EVENT_BLOCKCHAIN_DATA_CHANGED"]);

              case 10:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlcnZpY2VzL0Jsb2NrY2hhaW4uc2VydmljZS50cyJdLCJuYW1lcyI6WyJCbG9ja2NoYWluU2VydmljZSIsImFtb3VudCIsIl90b2tlbkZhcm1Db250cmFjdCIsIm1ldGhvZHMiLCJzdGFrZVRva2VucyIsInNlbmQiLCJmcm9tIiwiX2FjY291bnQiLCJ0byIsImFkZHJlc3MiLCJ2YWx1ZSIsImxvYWRXZWIzIiwibG9hZEJsb2NrY2hhaW5EYXRhIiwiTm90aWZpY2F0aW9uU2VydmljZSIsInNob3dFcnJvciIsIl93YXZlY3RUb2tlbkJhbGFuY2UiLCJfd2F2ZWN0VG9rZW5Db250cmFjdCIsImdldEN1cnJlbnRBY2NvdW50IiwiYmFsYW5jZU9mIiwiY2FsbCIsInRvU3RyaW5nIiwiX3N0YWtpbmdCYWxhbmNlIiwic3Rha2luZ0JhbGFuY2UiLCJ3aW5kb3ciLCJ3ZWIzIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJuZXR3b3JrSWQiLCJ3YXZlY3RUb2tlbkRhdGEiLCJXYXZlY3RUb2tlbiIsIm5ldHdvcmtzIiwiQ29udHJhY3QiLCJhYmkiLCJ0b2tlbkZhcm1EYXRhIiwiVG9rZW5GYXJtIiwibmV0IiwiZ2V0SWQiLCJsb2FkV2F2ZWN0VG9rZW5Db250cmFjdCIsImxvYWRUb2tlbkZhcm1Db250cmFjdCIsIkVtaXR0ZXIiLCJvbmNlIiwiRVZFTlRfQkxPQ0tDSEFJTl9EQVRBX0NIQU5HRUQiLCJzaG93U3VjY2VzcyIsImVtaXQiLCJldGhlcmV1bSIsIldlYjMiLCJlbmFibGUiLCJjdXJyZW50UHJvdmlkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sSUFBTUEsaUJBQWI7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUEsdVVBT29DQyxNQVBwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFRcUJELGlCQUFp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QUFnQkMsSUFBcEIsRUFBMEI7QUFDNUJELHdCQUFELENBQWdCQyxJQUFoQixHQUF1QixJQUFJcUIsMkNBQUosQ0FBVXRCLE1BQUQsQ0FBZ0JDLElBQWhCLENBQXFCdUIsZUFBOUIsQ0FBdkI7QUFDRCxpQkFGSSxNQUdBO0FBQ0hsQywyRkFBbUIsQ0FBQ0MsU0FBcEIsQ0FBOEIscUVBQTlCO0FBQ0Q7O0FBekdYO0FBQUEsa0RBMEdrQlMsTUFBRCxDQUFnQkMsSUExR2pDOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7Z0pBQWF4QixpQjs7Z0pBQUFBLGlCOztnSkFBQUEsaUI7O2dKQUFBQSxpQjs7Z0pBQUFBLGlCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNmI1NjI3ZTExMTk2YTZlZWVhZGQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBXZWIzIGZyb20gXCJ3ZWIzXCJcclxuaW1wb3J0IHsgTm90aWZpY2F0aW9uU2VydmljZSB9IGZyb20gXCIuL05vdGlmaWNhdGlvbi5zZXJ2aWNlXCJcclxuaW1wb3J0IFdhdmVjdFRva2VuIGZyb20gJy4uL2FiaXMvV2F2ZWN0VG9rZW4uanNvbidcclxuaW1wb3J0IFRva2VuRmFybSBmcm9tICcuLi9hYmlzL1Rva2VuRmFybS5qc29uJ1xyXG5pbXBvcnQgRW1pdHRlciwgeyBFVkVOVF9CTE9DS0NIQUlOX0RBVEFfQ0hBTkdFRCB9IGZyb20gXCIuL0V2ZW50LnNlcnZpY2VcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBCbG9ja2NoYWluU2VydmljZSB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBfdG9rZW5GYXJtQ29udHJhY3Q7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBfc3Rha2luZ0JhbGFuY2U6IHN0cmluZztcclxuICAgIHByaXZhdGUgc3RhdGljIF93YXZlY3RUb2tlbkNvbnRyYWN0O1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX3dhdmVjdFRva2VuQmFsYW5jZTogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2FjY291bnQ6IHN0cmluZztcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIHN0YWtlVG9rZW5zKGFtb3VudDogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IEJsb2NrY2hhaW5TZXJ2aWNlLl90b2tlbkZhcm1Db250cmFjdC5tZXRob2RzLnN0YWtlVG9rZW5zKGFtb3VudCkuc2VuZCh7IFxyXG4gICAgICAgICAgZnJvbTogQmxvY2tjaGFpblNlcnZpY2UuX2FjY291bnQsIFxyXG4gICAgICAgICAgdG86IEJsb2NrY2hhaW5TZXJ2aWNlLl90b2tlbkZhcm1Db250cmFjdC5hZGRyZXNzLFxyXG4gICAgICAgICAgdmFsdWU6IGFtb3VudCxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcHVibGljIHN0YXRpYyBhc3luYyBjb25uZWN0VG9CbG9ja2NoYWluKCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGF3YWl0IEJsb2NrY2hhaW5TZXJ2aWNlLmxvYWRCbG9ja2NoYWluRGF0YShcclxuICAgICAgICAgICAgICBhd2FpdCBCbG9ja2NoYWluU2VydmljZS5sb2FkV2ViMygpXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgIH0gY2F0Y2goZXJyKSB7XHJcbiAgICAgICAgICAgIE5vdGlmaWNhdGlvblNlcnZpY2Uuc2hvd0Vycm9yKCdZb3UgbmVlZCB0byBhbGxvdyB5b3VyIGJyb3dzZXIgdG8gY29ubmVjdCB0byBvdXIgV2ViMyBzZXJ2aWNlLicsIGVycilcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgcHVibGljIHN0YXRpYyBhc3luYyBnZXRXYXZlY3RUb2tlbkJhbGFuY2UoKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmICghQmxvY2tjaGFpblNlcnZpY2UuX3dhdmVjdFRva2VuQmFsYW5jZSkge1xyXG4gICAgICAgICAgICAgICAgQmxvY2tjaGFpblNlcnZpY2UuX3dhdmVjdFRva2VuQmFsYW5jZSA9IGF3YWl0IEJsb2NrY2hhaW5TZXJ2aWNlLl93YXZlY3RUb2tlbkNvbnRyYWN0Lm1ldGhvZHMuYmFsYW5jZU9mKFxyXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IEJsb2NrY2hhaW5TZXJ2aWNlLmdldEN1cnJlbnRBY2NvdW50KCkpLmNhbGwoKS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBCbG9ja2NoYWluU2VydmljZS5fd2F2ZWN0VG9rZW5CYWxhbmNlO1xyXG4gICAgICAgICAgfSBjYXRjaChlcnIpIHtcclxuICAgICAgICAgICAgICBOb3RpZmljYXRpb25TZXJ2aWNlLnNob3dFcnJvcignQ291bGQgbm90IGZldGNoIFdhdmVjdCBUb2tlbiBiYWxhbmNlLicsIGVycik7XHJcbiAgICAgICAgICB9IFxyXG4gICAgICAgICAgcmV0dXJuICcwJztcclxuICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIGFzeW5jIGdldFN0YWtpbmdCYWxhbmNlKCk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIUJsb2NrY2hhaW5TZXJ2aWNlLl9zdGFraW5nQmFsYW5jZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIEJsb2NrY2hhaW5TZXJ2aWNlLl9zdGFraW5nQmFsYW5jZSA9IGF3YWl0IEJsb2NrY2hhaW5TZXJ2aWNlLl90b2tlbkZhcm1Db250cmFjdC5tZXRob2RzLnN0YWtpbmdCYWxhbmNlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBCbG9ja2NoYWluU2VydmljZS5nZXRDdXJyZW50QWNjb3VudCgpKS5jYWxsKCkudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEJsb2NrY2hhaW5TZXJ2aWNlLl9zdGFraW5nQmFsYW5jZSBcclxuICAgICAgICAgICAgfSBjYXRjaChlcnIpIHtcclxuICAgICAgICAgICAgICAgIE5vdGlmaWNhdGlvblNlcnZpY2Uuc2hvd0Vycm9yKCdDb3VsZCBub3QgZmV0Y2ggc3Rha2luZyBiYWxhbmNlLicsIGVycik7XHJcbiAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgIHJldHVybiAnMCc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIGFzeW5jIGdldEN1cnJlbnRBY2NvdW50KCk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIUJsb2NrY2hhaW5TZXJ2aWNlLl9hY2NvdW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgQmxvY2tjaGFpblNlcnZpY2UuX2FjY291bnQgPSAoYXdhaXQgKHdpbmRvdyBhcyBhbnkpLndlYjMuZXRoLmdldEFjY291bnRzKCkpWzBdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIEJsb2NrY2hhaW5TZXJ2aWNlLl9hY2NvdW50O1xyXG4gICAgICAgICAgICB9IGNhdGNoKGVycikge1xyXG4gICAgICAgICAgICAgICAgTm90aWZpY2F0aW9uU2VydmljZS5zaG93RXJyb3IoJ0NvdWxkIG5vdCBmZXRjaCBhY2NvdW50LicsIGVycik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuICcweDAnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgYXN5bmMgbG9hZFdhdmVjdFRva2VuQ29udHJhY3QobmV0d29ya0lkOiBzdHJpbmcpIHtcclxuICAgICAgICAgIGNvbnN0IHdhdmVjdFRva2VuRGF0YSA9IFdhdmVjdFRva2VuLm5ldHdvcmtzW25ldHdvcmtJZF1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgaWYod2F2ZWN0VG9rZW5EYXRhKSB7XHJcbiAgICAgICAgICAgIEJsb2NrY2hhaW5TZXJ2aWNlLl93YXZlY3RUb2tlbkNvbnRyYWN0ID0gbmV3ICh3aW5kb3cgYXMgYW55KS53ZWIzLmV0aC5Db250cmFjdChXYXZlY3RUb2tlbi5hYmksIHdhdmVjdFRva2VuRGF0YS5hZGRyZXNzKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIE5vdGlmaWNhdGlvblNlcnZpY2Uuc2hvd0Vycm9yKCdXYXZlY3RUb2tlbiBjb250cmFjdCBub3QgZGVwbG95ZWQgdG8gZGV0ZWN0ZWQgbmV0d29yay4nKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIEJsb2NrY2hhaW5TZXJ2aWNlLl93YXZlY3RUb2tlbkJhbGFuY2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBhc3luYyBsb2FkVG9rZW5GYXJtQ29udHJhY3QobmV0d29ya0lkOiBzdHJpbmcpIHtcclxuICAgICAgICAgIGNvbnN0IHRva2VuRmFybURhdGEgPSBUb2tlbkZhcm0ubmV0d29ya3NbbmV0d29ya0lkXVxyXG4gICAgICAgICAgaWYodG9rZW5GYXJtRGF0YSkge1xyXG4gICAgICAgICAgICBCbG9ja2NoYWluU2VydmljZS5fdG9rZW5GYXJtQ29udHJhY3QgPSBuZXcgKHdpbmRvdyBhcyBhbnkpLndlYjMuZXRoLkNvbnRyYWN0KFRva2VuRmFybS5hYmksIHRva2VuRmFybURhdGEuYWRkcmVzcyk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBOb3RpZmljYXRpb25TZXJ2aWNlLnNob3dFcnJvcignVG9rZW5GYXJtIGNvbnRyYWN0IG5vdCBkZXBsb3llZCB0byBkZXRlY3RlZCBuZXR3b3JrLicpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgcHJpdmF0ZSBzdGF0aWMgYXN5bmMgbG9hZEJsb2NrY2hhaW5EYXRhKHdlYjM6IGFueSkge1xyXG4gICAgICAgIGlmICh3ZWIzKSB7XHJcbiAgICAgICAgICBjb25zdCBuZXR3b3JrSWQ6IHN0cmluZyA9IGF3YWl0ICh3aW5kb3cgYXMgYW55KS53ZWIzLmV0aC5uZXQuZ2V0SWQoKVxyXG4gICAgICAgICAgYXdhaXQgQmxvY2tjaGFpblNlcnZpY2UubG9hZFdhdmVjdFRva2VuQ29udHJhY3QobmV0d29ya0lkKTtcclxuICAgICAgICAgIGF3YWl0IEJsb2NrY2hhaW5TZXJ2aWNlLmxvYWRUb2tlbkZhcm1Db250cmFjdChuZXR3b3JrSWQpO1xyXG5cclxuICAgICAgICAgIEVtaXR0ZXIub25jZShFVkVOVF9CTE9DS0NIQUlOX0RBVEFfQ0hBTkdFRCwgKCkgPT4gTm90aWZpY2F0aW9uU2VydmljZS5zaG93U3VjY2VzcygnQ29ubmVjdGVkIHRvIEJsb2NrY2hhaW4uJykpXHJcbiAgICAgICAgICBFbWl0dGVyLmVtaXQoRVZFTlRfQkxPQ0tDSEFJTl9EQVRBX0NIQU5HRUQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgXHJcbiAgICAgIHByaXZhdGUgc3RhdGljIGFzeW5jIGxvYWRXZWIzKCkge1xyXG4gICAgICAgICAgaWYgKCh3aW5kb3cgYXMgYW55KS5ldGhlcmV1bSkge1xyXG4gICAgXHJcbiAgICAgICAgICAgICh3aW5kb3cgYXMgYW55KS53ZWIzID0gbmV3IFdlYjMoKHdpbmRvdyBhcyBhbnkpLmV0aGVyZXVtKVxyXG4gICAgICAgICAgICBhd2FpdCAod2luZG93IGFzIGFueSkuZXRoZXJldW0uZW5hYmxlKClcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2UgaWYgKCh3aW5kb3cgYXMgYW55KS53ZWIzKSB7XHJcbiAgICAgICAgICAgICh3aW5kb3cgYXMgYW55KS53ZWIzID0gbmV3IFdlYjMoKHdpbmRvdyBhcyBhbnkpLndlYjMuY3VycmVudFByb3ZpZGVyKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIE5vdGlmaWNhdGlvblNlcnZpY2Uuc2hvd0Vycm9yKCdOb24tRXRoZXJldW0gYnJvd3NlciBkZXRlY3RlZC4gWW91IHNob3VsZCBjb25zaWRlciB0cnlpbmcgTWV0YU1hc2shJylcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiAod2luZG93IGFzIGFueSkud2ViMztcclxuICAgICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==
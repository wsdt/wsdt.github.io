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
                return _context3.t0.balanceOf.call(_context3.t0, _context3.t1).call();

              case 8:
                BlockchainService._wavectTokenBalance = _context3.sent.toString();

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
                return _context4.t0.stakingBalance.call(_context4.t0, _context4.t1).call();

              case 8:
                BlockchainService._stakingBalance = _context4.sent.toString();

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
                setTimeout(function () {
                  _Event_service__WEBPACK_IMPORTED_MODULE_9__["default"].emit(_Event_service__WEBPACK_IMPORTED_MODULE_9__["EVENT_BLOCKCHAIN_DATA_CHANGED"]);
                }, 1000);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlcnZpY2VzL0Jsb2NrY2hhaW4uc2VydmljZS50cyJdLCJuYW1lcyI6WyJCbG9ja2NoYWluU2VydmljZSIsImFtb3VudCIsIl90b2tlbkZhcm1Db250cmFjdCIsIm1ldGhvZHMiLCJzdGFrZVRva2VucyIsInNlbmQiLCJmcm9tIiwiX2FjY291bnQiLCJ0byIsImFkZHJlc3MiLCJ2YWx1ZSIsImxvYWRXZWIzIiwibG9hZEJsb2NrY2hhaW5EYXRhIiwiTm90aWZpY2F0aW9uU2VydmljZSIsInNob3dFcnJvciIsIl93YXZlY3RUb2tlbkJhbGFuY2UiLCJfd2F2ZWN0VG9rZW5Db250cmFjdCIsImdldEN1cnJlbnRBY2NvdW50IiwiYmFsYW5jZU9mIiwiY2FsbCIsInRvU3RyaW5nIiwiX3N0YWtpbmdCYWxhbmNlIiwic3Rha2luZ0JhbGFuY2UiLCJ3aW5kb3ciLCJ3ZWIzIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJuZXR3b3JrSWQiLCJ3YXZlY3RUb2tlbkRhdGEiLCJXYXZlY3RUb2tlbiIsIm5ldHdvcmtzIiwiQ29udHJhY3QiLCJhYmkiLCJ0b2tlbkZhcm1EYXRhIiwiVG9rZW5GYXJtIiwibmV0IiwiZ2V0SWQiLCJsb2FkV2F2ZWN0VG9rZW5Db250cmFjdCIsImxvYWRUb2tlbkZhcm1Db250cmFjdCIsIkVtaXR0ZXIiLCJvbmNlIiwiRVZFTlRfQkxPQ0tDSEFJTl9EQVRBX0NIQU5HRUQiLCJzaG93U3VjY2VzcyIsInNldFRpbWVvdXQiLCJlbWl0IiwiZXRoZXJldW0iLCJXZWIzIiwiZW5hYmxlIiwiY3VycmVudFByb3ZpZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLGlCQUFiO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBLHVVQU9vQ0MsTUFQcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBUXFCRCxpQkFBaUIsQ0FBQ0Usa0JBQWxCLENBQXFDQyxPQUFyQyxDQUE2Q0MsV0FBN0MsQ0FBeURILE1BQXpELEVBQWlFSSxJQUFqRSxDQUFzRTtBQUNqRkMsc0JBQUksRUFBRU4saUJBQWlCLENBQUNPLFFBRHlEO0FBRWpGQyxvQkFBRSxFQUFFUixpQkFBaUIsQ0FBQ0Usa0JBQWxCLENBQXFDTyxPQUZ3QztBQUdqRkMsdUJBQUssRUFBRVQ7QUFIMEUsaUJBQXRFLENBUnJCOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFpQmtCRCxpQkFqQmxCO0FBQUE7QUFBQSx1QkFrQm9CQSxpQkFBaUIsQ0FBQ1csUUFBbEIsRUFsQnBCOztBQUFBO0FBQUE7QUFBQTtBQUFBLG9DQWlCb0NDLGtCQWpCcEM7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQXFCWUMseUZBQW1CLENBQUNDLFNBQXBCLENBQThCLGdFQUE5Qjs7QUFyQlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUEsb0JBMkJpQmQsaUJBQWlCLENBQUNlLG1CQTNCbkM7QUFBQTtBQUFBO0FBQUE7O0FBQUEsK0JBNEIrRGYsaUJBQWlCLENBQUNnQixvQkFBbEIsQ0FBdUNiLE9BNUJ0RztBQUFBO0FBQUEsdUJBNkIwQkgsaUJBQWlCLENBQUNpQixpQkFBbEIsRUE3QjFCOztBQUFBO0FBQUE7QUFBQTtBQUFBLG9DQTRCOEdDLFNBNUI5RyxrQ0E2QmlFQyxJQTdCakU7O0FBQUE7QUE0QmdCbkIsaUNBQWlCLENBQUNlLG1CQTVCbEMsa0JBNkJ5RUssUUE3QnpFOztBQUFBO0FBQUEsa0RBK0JtQnBCLGlCQUFpQixDQUFDZSxtQkEvQnJDOztBQUFBO0FBQUE7QUFBQTtBQWlDY0YseUZBQW1CLENBQUNDLFNBQXBCLENBQThCLHVDQUE5Qjs7QUFqQ2Q7QUFBQSxrREFtQ2lCLEdBbkNqQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQSxvQkF3Q3FCZCxpQkFBaUIsQ0FBQ3FCLGVBeEN2QztBQUFBO0FBQUE7QUFBQTs7QUFBQSwrQkF5QytEckIsaUJBQWlCLENBQUNFLGtCQUFsQixDQUFxQ0MsT0F6Q3BHO0FBQUE7QUFBQSx1QkEwQzhCSCxpQkFBaUIsQ0FBQ2lCLGlCQUFsQixFQTFDOUI7O0FBQUE7QUFBQTtBQUFBO0FBQUEsb0NBeUM0R0ssY0F6QzVHLGtDQTBDcUVILElBMUNyRTs7QUFBQTtBQXlDb0JuQixpQ0FBaUIsQ0FBQ3FCLGVBekN0QyxrQkEwQzZFRCxRQTFDN0U7O0FBQUE7QUFBQSxrREE0QzJCcEIsaUJBQWlCLENBQUNxQixlQTVDN0M7O0FBQUE7QUFBQTtBQUFBO0FBOENnQlIseUZBQW1CLENBQUNDLFNBQXBCLENBQThCLGtDQUE5Qjs7QUE5Q2hCO0FBQUEsa0RBZ0RtQixHQWhEbkI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUEsb0JBcURxQmQsaUJBQWlCLENBQUNPLFFBckR2QztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHVCQXNEeURnQixNQUFELENBQWdCQyxJQUFoQixDQUFxQkMsR0FBckIsQ0FBeUJDLFdBQXpCLEVBdER4RDs7QUFBQTtBQXNEb0IxQixpQ0FBaUIsQ0FBQ08sUUF0RHRDLGtCQXNEZ0csQ0F0RGhHOztBQUFBO0FBQUEsa0RBd0R1QlAsaUJBQWlCLENBQUNPLFFBeER6Qzs7QUFBQTtBQUFBO0FBQUE7QUEwRGdCTSx5RkFBbUIsQ0FBQ0MsU0FBcEIsQ0FBOEIsMEJBQTlCOztBQTFEaEI7QUFBQSxrREE0RG1CLEtBNURuQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9WQStEcURhLFNBL0RyRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFnRWdCQywrQkFoRWhCLEdBZ0VrQ0MsbURBQVcsQ0FBQ0MsUUFBWixDQUFxQkgsU0FBckIsQ0FoRWxDOztBQWtFVSxvQkFBR0MsZUFBSCxFQUFvQjtBQUNsQjVCLG1DQUFpQixDQUFDZ0Isb0JBQWxCLEdBQXlDLElBQUtPLE1BQUQsQ0FBZ0JDLElBQWhCLENBQXFCQyxHQUFyQixDQUF5Qk0sUUFBN0IsQ0FBc0NGLG1EQUFXLENBQUNHLEdBQWxELEVBQXVESixlQUFlLENBQUNuQixPQUF2RSxDQUF6QztBQUNELGlCQUZELE1BRU87QUFDTEksMkZBQW1CLENBQUNDLFNBQXBCLENBQThCLHdEQUE5QjtBQUNEOztBQXRFWCxrREF1RWlCZCxpQkFBaUIsQ0FBQ2UsbUJBdkVuQzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtWQTBFbURZLFNBMUVuRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUEyRWdCTSw2QkEzRWhCLEdBMkVnQ0MsaURBQVMsQ0FBQ0osUUFBVixDQUFtQkgsU0FBbkIsQ0EzRWhDOztBQTRFVSxvQkFBR00sYUFBSCxFQUFrQjtBQUNoQmpDLG1DQUFpQixDQUFDRSxrQkFBbEIsR0FBdUMsSUFBS3FCLE1BQUQsQ0FBZ0JDLElBQWhCLENBQXFCQyxHQUFyQixDQUF5Qk0sUUFBN0IsQ0FBc0NHLGlEQUFTLENBQUNGLEdBQWhELEVBQXFEQyxhQUFhLENBQUN4QixPQUFuRSxDQUF2QztBQUNELGlCQUZELE1BRU87QUFDTEksMkZBQW1CLENBQUNDLFNBQXBCLENBQThCLHNEQUE5QjtBQUNEOztBQWhGWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtVQW1GOENVLElBbkY5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFvRllBLElBcEZaO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsdUJBcUYyQ0QsTUFBRCxDQUFnQkMsSUFBaEIsQ0FBcUJDLEdBQXJCLENBQXlCVSxHQUF6QixDQUE2QkMsS0FBN0IsRUFyRjFDOztBQUFBO0FBcUZnQlQseUJBckZoQjtBQUFBO0FBQUEsdUJBc0ZnQjNCLGlCQUFpQixDQUFDcUMsdUJBQWxCLENBQTBDVixTQUExQyxDQXRGaEI7O0FBQUE7QUFBQTtBQUFBLHVCQXVGZ0IzQixpQkFBaUIsQ0FBQ3NDLHFCQUFsQixDQUF3Q1gsU0FBeEMsQ0F2RmhCOztBQUFBO0FBeUZVWSxzRUFBTyxDQUFDQyxJQUFSLENBQWFDLDRFQUFiLEVBQTRDO0FBQUEseUJBQU01Qix5RUFBbUIsQ0FBQzZCLFdBQXBCLENBQWdDLDBCQUFoQyxDQUFOO0FBQUEsaUJBQTVDO0FBRUFDLDBCQUFVLENBQUMsWUFBTTtBQUNmSix3RUFBTyxDQUFDSyxJQUFSLENBQWFILDRFQUFiO0FBQ0QsaUJBRlMsRUFFUCxJQUZPLENBQVY7O0FBM0ZWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQWtHZWxCLE1BQUQsQ0FBZ0JzQixRQWxHOUI7QUFBQTtBQUFBO0FBQUE7O0FBb0dhdEIsc0JBQUQsQ0FBZ0JDLElBQWhCLEdBQXVCLElBQUlzQiwyQ0FBSixDQUFVdkIsTUFBRCxDQUFnQnNCLFFBQXpCLENBQXZCO0FBcEdaO0FBQUEsdUJBcUdtQnRCLE1BQUQsQ0FBZ0JzQixRQUFoQixDQUF5QkUsTUFBekIsRUFyR2xCOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQXVHZSxvQkFBS3hCLE1BQUQsQ0FBZ0JDLElBQXBCLEVBQTBCO0FBQzVCRCx3QkFBRCxDQUFnQkMsSUFBaEIsR0FBdUIsSUFBSXNCLDJDQUFKLENBQVV2QixNQUFELENBQWdCQyxJQUFoQixDQUFxQndCLGVBQTlCLENBQXZCO0FBQ0QsaUJBRkksTUFHQTtBQUNIbkMsMkZBQW1CLENBQUNDLFNBQXBCLENBQThCLHFFQUE5QjtBQUNEOztBQTVHWDtBQUFBLGtEQTZHa0JTLE1BQUQsQ0FBZ0JDLElBN0dqQzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7O2dKQUFheEIsaUI7O2dKQUFBQSxpQjs7Z0pBQUFBLGlCOztnSkFBQUEsaUI7O2dKQUFBQSxpQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjMyYmZmNDUxMTc4YjBhYTgxMTY1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgV2ViMyBmcm9tIFwid2ViM1wiXHJcbmltcG9ydCB7IE5vdGlmaWNhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi9Ob3RpZmljYXRpb24uc2VydmljZVwiXHJcbmltcG9ydCBXYXZlY3RUb2tlbiBmcm9tICcuLi9hYmlzL1dhdmVjdFRva2VuLmpzb24nXHJcbmltcG9ydCBUb2tlbkZhcm0gZnJvbSAnLi4vYWJpcy9Ub2tlbkZhcm0uanNvbidcclxuaW1wb3J0IEVtaXR0ZXIsIHsgRVZFTlRfQkxPQ0tDSEFJTl9EQVRBX0NIQU5HRUQgfSBmcm9tIFwiLi9FdmVudC5zZXJ2aWNlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQmxvY2tjaGFpblNlcnZpY2Uge1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX3Rva2VuRmFybUNvbnRyYWN0O1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX3N0YWtpbmdCYWxhbmNlOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBfd2F2ZWN0VG9rZW5Db250cmFjdDtcclxuICAgIHByaXZhdGUgc3RhdGljIF93YXZlY3RUb2tlbkJhbGFuY2U6IHN0cmluZztcclxuICAgIHByaXZhdGUgc3RhdGljIF9hY2NvdW50OiBzdHJpbmc7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBzdGFrZVRva2VucyhhbW91bnQ6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiBhd2FpdCBCbG9ja2NoYWluU2VydmljZS5fdG9rZW5GYXJtQ29udHJhY3QubWV0aG9kcy5zdGFrZVRva2VucyhhbW91bnQpLnNlbmQoeyBcclxuICAgICAgICAgIGZyb206IEJsb2NrY2hhaW5TZXJ2aWNlLl9hY2NvdW50LCBcclxuICAgICAgICAgIHRvOiBCbG9ja2NoYWluU2VydmljZS5fdG9rZW5GYXJtQ29udHJhY3QuYWRkcmVzcyxcclxuICAgICAgICAgIHZhbHVlOiBhbW91bnQsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgY29ubmVjdFRvQmxvY2tjaGFpbigpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBhd2FpdCBCbG9ja2NoYWluU2VydmljZS5sb2FkQmxvY2tjaGFpbkRhdGEoXHJcbiAgICAgICAgICAgICAgYXdhaXQgQmxvY2tjaGFpblNlcnZpY2UubG9hZFdlYjMoKVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICB9IGNhdGNoKGVycikge1xyXG4gICAgICAgICAgICBOb3RpZmljYXRpb25TZXJ2aWNlLnNob3dFcnJvcignWW91IG5lZWQgdG8gYWxsb3cgeW91ciBicm93c2VyIHRvIGNvbm5lY3QgdG8gb3VyIFdlYjMgc2VydmljZS4nLCBlcnIpXHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgZ2V0V2F2ZWN0VG9rZW5CYWxhbmNlKCk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAoIUJsb2NrY2hhaW5TZXJ2aWNlLl93YXZlY3RUb2tlbkJhbGFuY2UpIHtcclxuICAgICAgICAgICAgICAgIEJsb2NrY2hhaW5TZXJ2aWNlLl93YXZlY3RUb2tlbkJhbGFuY2UgPSAoYXdhaXQgQmxvY2tjaGFpblNlcnZpY2UuX3dhdmVjdFRva2VuQ29udHJhY3QubWV0aG9kcy5iYWxhbmNlT2YoXHJcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgQmxvY2tjaGFpblNlcnZpY2UuZ2V0Q3VycmVudEFjY291bnQoKSkuY2FsbCgpKS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBCbG9ja2NoYWluU2VydmljZS5fd2F2ZWN0VG9rZW5CYWxhbmNlO1xyXG4gICAgICAgICAgfSBjYXRjaChlcnIpIHtcclxuICAgICAgICAgICAgICBOb3RpZmljYXRpb25TZXJ2aWNlLnNob3dFcnJvcignQ291bGQgbm90IGZldGNoIFdhdmVjdCBUb2tlbiBiYWxhbmNlLicsIGVycik7XHJcbiAgICAgICAgICB9IFxyXG4gICAgICAgICAgcmV0dXJuICcwJztcclxuICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIGFzeW5jIGdldFN0YWtpbmdCYWxhbmNlKCk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIUJsb2NrY2hhaW5TZXJ2aWNlLl9zdGFraW5nQmFsYW5jZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIEJsb2NrY2hhaW5TZXJ2aWNlLl9zdGFraW5nQmFsYW5jZSA9IChhd2FpdCBCbG9ja2NoYWluU2VydmljZS5fdG9rZW5GYXJtQ29udHJhY3QubWV0aG9kcy5zdGFraW5nQmFsYW5jZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgQmxvY2tjaGFpblNlcnZpY2UuZ2V0Q3VycmVudEFjY291bnQoKSkuY2FsbCgpKS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gQmxvY2tjaGFpblNlcnZpY2UuX3N0YWtpbmdCYWxhbmNlIFxyXG4gICAgICAgICAgICB9IGNhdGNoKGVycikge1xyXG4gICAgICAgICAgICAgICAgTm90aWZpY2F0aW9uU2VydmljZS5zaG93RXJyb3IoJ0NvdWxkIG5vdCBmZXRjaCBzdGFraW5nIGJhbGFuY2UuJywgZXJyKTtcclxuICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgcmV0dXJuICcwJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgZ2V0Q3VycmVudEFjY291bnQoKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGlmICghQmxvY2tjaGFpblNlcnZpY2UuX2FjY291bnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBCbG9ja2NoYWluU2VydmljZS5fYWNjb3VudCA9IChhd2FpdCAod2luZG93IGFzIGFueSkud2ViMy5ldGguZ2V0QWNjb3VudHMoKSlbMF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gQmxvY2tjaGFpblNlcnZpY2UuX2FjY291bnQ7XHJcbiAgICAgICAgICAgIH0gY2F0Y2goZXJyKSB7XHJcbiAgICAgICAgICAgICAgICBOb3RpZmljYXRpb25TZXJ2aWNlLnNob3dFcnJvcignQ291bGQgbm90IGZldGNoIGFjY291bnQuJywgZXJyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gJzB4MCc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBhc3luYyBsb2FkV2F2ZWN0VG9rZW5Db250cmFjdChuZXR3b3JrSWQ6IHN0cmluZykge1xyXG4gICAgICAgICAgY29uc3Qgd2F2ZWN0VG9rZW5EYXRhID0gV2F2ZWN0VG9rZW4ubmV0d29ya3NbbmV0d29ya0lkXVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBpZih3YXZlY3RUb2tlbkRhdGEpIHtcclxuICAgICAgICAgICAgQmxvY2tjaGFpblNlcnZpY2UuX3dhdmVjdFRva2VuQ29udHJhY3QgPSBuZXcgKHdpbmRvdyBhcyBhbnkpLndlYjMuZXRoLkNvbnRyYWN0KFdhdmVjdFRva2VuLmFiaSwgd2F2ZWN0VG9rZW5EYXRhLmFkZHJlc3MpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgTm90aWZpY2F0aW9uU2VydmljZS5zaG93RXJyb3IoJ1dhdmVjdFRva2VuIGNvbnRyYWN0IG5vdCBkZXBsb3llZCB0byBkZXRlY3RlZCBuZXR3b3JrLicpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gQmxvY2tjaGFpblNlcnZpY2UuX3dhdmVjdFRva2VuQmFsYW5jZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGFzeW5jIGxvYWRUb2tlbkZhcm1Db250cmFjdChuZXR3b3JrSWQ6IHN0cmluZykge1xyXG4gICAgICAgICAgY29uc3QgdG9rZW5GYXJtRGF0YSA9IFRva2VuRmFybS5uZXR3b3Jrc1tuZXR3b3JrSWRdXHJcbiAgICAgICAgICBpZih0b2tlbkZhcm1EYXRhKSB7XHJcbiAgICAgICAgICAgIEJsb2NrY2hhaW5TZXJ2aWNlLl90b2tlbkZhcm1Db250cmFjdCA9IG5ldyAod2luZG93IGFzIGFueSkud2ViMy5ldGguQ29udHJhY3QoVG9rZW5GYXJtLmFiaSwgdG9rZW5GYXJtRGF0YS5hZGRyZXNzKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIE5vdGlmaWNhdGlvblNlcnZpY2Uuc2hvd0Vycm9yKCdUb2tlbkZhcm0gY29udHJhY3Qgbm90IGRlcGxveWVkIHRvIGRldGVjdGVkIG5ldHdvcmsuJylcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICBwcml2YXRlIHN0YXRpYyBhc3luYyBsb2FkQmxvY2tjaGFpbkRhdGEod2ViMzogYW55KSB7XHJcbiAgICAgICAgaWYgKHdlYjMpIHtcclxuICAgICAgICAgIGNvbnN0IG5ldHdvcmtJZDogc3RyaW5nID0gYXdhaXQgKHdpbmRvdyBhcyBhbnkpLndlYjMuZXRoLm5ldC5nZXRJZCgpXHJcbiAgICAgICAgICBhd2FpdCBCbG9ja2NoYWluU2VydmljZS5sb2FkV2F2ZWN0VG9rZW5Db250cmFjdChuZXR3b3JrSWQpO1xyXG4gICAgICAgICAgYXdhaXQgQmxvY2tjaGFpblNlcnZpY2UubG9hZFRva2VuRmFybUNvbnRyYWN0KG5ldHdvcmtJZCk7XHJcblxyXG4gICAgICAgICAgRW1pdHRlci5vbmNlKEVWRU5UX0JMT0NLQ0hBSU5fREFUQV9DSEFOR0VELCAoKSA9PiBOb3RpZmljYXRpb25TZXJ2aWNlLnNob3dTdWNjZXNzKCdDb25uZWN0ZWQgdG8gQmxvY2tjaGFpbi4nKSlcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIEVtaXR0ZXIuZW1pdChFVkVOVF9CTE9DS0NIQUlOX0RBVEFfQ0hBTkdFRCk7XHJcbiAgICAgICAgICB9LCAxMDAwKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgXHJcbiAgICAgIHByaXZhdGUgc3RhdGljIGFzeW5jIGxvYWRXZWIzKCkge1xyXG4gICAgICAgICAgaWYgKCh3aW5kb3cgYXMgYW55KS5ldGhlcmV1bSkge1xyXG4gICAgXHJcbiAgICAgICAgICAgICh3aW5kb3cgYXMgYW55KS53ZWIzID0gbmV3IFdlYjMoKHdpbmRvdyBhcyBhbnkpLmV0aGVyZXVtKVxyXG4gICAgICAgICAgICBhd2FpdCAod2luZG93IGFzIGFueSkuZXRoZXJldW0uZW5hYmxlKClcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2UgaWYgKCh3aW5kb3cgYXMgYW55KS53ZWIzKSB7XHJcbiAgICAgICAgICAgICh3aW5kb3cgYXMgYW55KS53ZWIzID0gbmV3IFdlYjMoKHdpbmRvdyBhcyBhbnkpLndlYjMuY3VycmVudFByb3ZpZGVyKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIE5vdGlmaWNhdGlvblNlcnZpY2Uuc2hvd0Vycm9yKCdOb24tRXRoZXJldW0gYnJvd3NlciBkZXRlY3RlZC4gWW91IHNob3VsZCBjb25zaWRlciB0cnlpbmcgTWV0YU1hc2shJylcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiAod2luZG93IGFzIGFueSkud2ViMztcclxuICAgICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==
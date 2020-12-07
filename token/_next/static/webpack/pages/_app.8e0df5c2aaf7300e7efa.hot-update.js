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
                _context.prev = 0;
                _context.next = 3;
                return BlockchainService._tokenFarmContract.methods.stakeTokens(amount).send({
                  from: BlockchainService._account,
                  to: BlockchainService._tokenFarmContract.address,
                  value: amount
                });

              case 3:
                return _context.abrupt("return", _context.sent);

              case 6:
                _context.prev = 6;
                _context.t0 = _context["catch"](0);
                _Notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"].showError('Could not transfer ETH & stake WACT.', _context.t0);

              case 9:
                _context.prev = 9;
                _Event_service__WEBPACK_IMPORTED_MODULE_9__["default"].emit(_Event_service__WEBPACK_IMPORTED_MODULE_9__["EVENT_BLOCKCHAIN_DATA_CHANGED"]);
                return _context.finish(9);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 6, 9, 12]]);
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
      var _getStakingBalance = Object(C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(refresh) {
        return C_Users_WSDT_Desktop_hugo_wavect_io_token_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;

                if (!(!BlockchainService._stakingBalance || refresh)) {
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

      function getStakingBalance(_x2) {
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

      function loadWavectTokenContract(_x3) {
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

      function loadTokenFarmContract(_x4) {
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
                  _Event_service__WEBPACK_IMPORTED_MODULE_9__["default"].on(_Event_service__WEBPACK_IMPORTED_MODULE_9__["EVENT_BLOCKCHAIN_DATA_CHANGED"], function () {});
                }, 100); // need to wait to let components to subscribe to this event

              case 10:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }));

      function loadBlockchainData(_x5) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlcnZpY2VzL0Jsb2NrY2hhaW4uc2VydmljZS50cyJdLCJuYW1lcyI6WyJCbG9ja2NoYWluU2VydmljZSIsImFtb3VudCIsIl90b2tlbkZhcm1Db250cmFjdCIsIm1ldGhvZHMiLCJzdGFrZVRva2VucyIsInNlbmQiLCJmcm9tIiwiX2FjY291bnQiLCJ0byIsImFkZHJlc3MiLCJ2YWx1ZSIsIk5vdGlmaWNhdGlvblNlcnZpY2UiLCJzaG93RXJyb3IiLCJFbWl0dGVyIiwiZW1pdCIsIkVWRU5UX0JMT0NLQ0hBSU5fREFUQV9DSEFOR0VEIiwibG9hZFdlYjMiLCJsb2FkQmxvY2tjaGFpbkRhdGEiLCJfd2F2ZWN0VG9rZW5CYWxhbmNlIiwiX3dhdmVjdFRva2VuQ29udHJhY3QiLCJnZXRDdXJyZW50QWNjb3VudCIsImJhbGFuY2VPZiIsImNhbGwiLCJ0b1N0cmluZyIsInJlZnJlc2giLCJfc3Rha2luZ0JhbGFuY2UiLCJzdGFraW5nQmFsYW5jZSIsIndpbmRvdyIsIndlYjMiLCJldGgiLCJnZXRBY2NvdW50cyIsIm5ldHdvcmtJZCIsIndhdmVjdFRva2VuRGF0YSIsIldhdmVjdFRva2VuIiwibmV0d29ya3MiLCJDb250cmFjdCIsImFiaSIsInRva2VuRmFybURhdGEiLCJUb2tlbkZhcm0iLCJuZXQiLCJnZXRJZCIsImxvYWRXYXZlY3RUb2tlbkNvbnRyYWN0IiwibG9hZFRva2VuRmFybUNvbnRyYWN0Iiwib25jZSIsInNob3dTdWNjZXNzIiwic2V0VGltZW91dCIsIm9uIiwiZXRoZXJldW0iLCJXZWIzIiwiZW5hYmxlIiwiY3VycmVudFByb3ZpZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLGlCQUFiO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBLHVVQU9vQ0MsTUFQcEM7QUFBQTtBQUFBO0FBQUE7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QUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkE0R2VZLE1BQUQsQ0FBZ0JvQixRQTVHOUI7QUFBQTtBQUFBO0FBQUE7O0FBOEdhcEIsc0JBQUQsQ0FBZ0JDLElBQWhCLEdBQXVCLElBQUlvQiwyQ0FBSixDQUFVckIsTUFBRCxDQUFnQm9CLFFBQXpCLENBQXZCO0FBOUdaO0FBQUEsdUJBK0dtQnBCLE1BQUQsQ0FBZ0JvQixRQUFoQixDQUF5QkUsTUFBekIsRUEvR2xCOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQWlIZSxvQkFBS3RCLE1BQUQsQ0FBZ0JDLElBQXBCLEVBQTBCO0FBQzVCRCx3QkFBRCxDQUFnQkMsSUFBaEIsR0FBdUIsSUFBSW9CLDJDQUFKLENBQVVyQixNQUFELENBQWdCQyxJQUFoQixDQUFxQnNCLGVBQTlCLENBQXZCO0FBQ0QsaUJBRkksTUFHQTtBQUNIdkMsMkZBQW1CLENBQUNDLFNBQXBCLENBQThCLHFFQUE5QjtBQUNEOztBQXRIWDtBQUFBLGtEQXVIa0JlLE1BQUQsQ0FBZ0JDLElBdkhqQzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7O2dKQUFhNUIsaUI7O2dKQUFBQSxpQjs7Z0pBQUFBLGlCOztnSkFBQUEsaUI7O2dKQUFBQSxpQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjhlMGRmNWMyYWFmNzMwMGU3ZWZhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgV2ViMyBmcm9tIFwid2ViM1wiXHJcbmltcG9ydCB7IE5vdGlmaWNhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi9Ob3RpZmljYXRpb24uc2VydmljZVwiXHJcbmltcG9ydCBXYXZlY3RUb2tlbiBmcm9tICcuLi9hYmlzL1dhdmVjdFRva2VuLmpzb24nXHJcbmltcG9ydCBUb2tlbkZhcm0gZnJvbSAnLi4vYWJpcy9Ub2tlbkZhcm0uanNvbidcclxuaW1wb3J0IEVtaXR0ZXIsIHsgRVZFTlRfQkxPQ0tDSEFJTl9EQVRBX0NIQU5HRUQgfSBmcm9tIFwiLi9FdmVudC5zZXJ2aWNlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQmxvY2tjaGFpblNlcnZpY2Uge1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX3Rva2VuRmFybUNvbnRyYWN0O1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX3N0YWtpbmdCYWxhbmNlOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBfd2F2ZWN0VG9rZW5Db250cmFjdDtcclxuICAgIHByaXZhdGUgc3RhdGljIF93YXZlY3RUb2tlbkJhbGFuY2U6IHN0cmluZztcclxuICAgIHByaXZhdGUgc3RhdGljIF9hY2NvdW50OiBzdHJpbmc7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBzdGFrZVRva2VucyhhbW91bnQ6IHN0cmluZykge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCBCbG9ja2NoYWluU2VydmljZS5fdG9rZW5GYXJtQ29udHJhY3QubWV0aG9kcy5zdGFrZVRva2VucyhhbW91bnQpLnNlbmQoeyBcclxuICAgICAgICAgICAgZnJvbTogQmxvY2tjaGFpblNlcnZpY2UuX2FjY291bnQsIFxyXG4gICAgICAgICAgICB0bzogQmxvY2tjaGFpblNlcnZpY2UuX3Rva2VuRmFybUNvbnRyYWN0LmFkZHJlc3MsXHJcbiAgICAgICAgICAgIHZhbHVlOiBhbW91bnQsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gY2F0Y2goZXJyKSB7XHJcbiAgICAgICAgICAgIE5vdGlmaWNhdGlvblNlcnZpY2Uuc2hvd0Vycm9yKCdDb3VsZCBub3QgdHJhbnNmZXIgRVRIICYgc3Rha2UgV0FDVC4nLCBlcnIpO1xyXG4gICAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgICAgIEVtaXR0ZXIuZW1pdChFVkVOVF9CTE9DS0NIQUlOX0RBVEFfQ0hBTkdFRCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBwdWJsaWMgc3RhdGljIGFzeW5jIGNvbm5lY3RUb0Jsb2NrY2hhaW4oKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgYXdhaXQgQmxvY2tjaGFpblNlcnZpY2UubG9hZEJsb2NrY2hhaW5EYXRhKFxyXG4gICAgICAgICAgICAgIGF3YWl0IEJsb2NrY2hhaW5TZXJ2aWNlLmxvYWRXZWIzKClcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgfSBjYXRjaChlcnIpIHtcclxuICAgICAgICAgICAgTm90aWZpY2F0aW9uU2VydmljZS5zaG93RXJyb3IoJ1lvdSBuZWVkIHRvIGFsbG93IHlvdXIgYnJvd3NlciB0byBjb25uZWN0IHRvIG91ciBXZWIzIHNlcnZpY2UuJywgZXJyKVxyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBwdWJsaWMgc3RhdGljIGFzeW5jIGdldFdhdmVjdFRva2VuQmFsYW5jZSgpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKCFCbG9ja2NoYWluU2VydmljZS5fd2F2ZWN0VG9rZW5CYWxhbmNlKSB7XHJcbiAgICAgICAgICAgICAgICBCbG9ja2NoYWluU2VydmljZS5fd2F2ZWN0VG9rZW5CYWxhbmNlID0gKGF3YWl0IEJsb2NrY2hhaW5TZXJ2aWNlLl93YXZlY3RUb2tlbkNvbnRyYWN0Lm1ldGhvZHMuYmFsYW5jZU9mKFxyXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IEJsb2NrY2hhaW5TZXJ2aWNlLmdldEN1cnJlbnRBY2NvdW50KCkpLmNhbGwoKSkudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gQmxvY2tjaGFpblNlcnZpY2UuX3dhdmVjdFRva2VuQmFsYW5jZTtcclxuICAgICAgICAgIH0gY2F0Y2goZXJyKSB7XHJcbiAgICAgICAgICAgICAgTm90aWZpY2F0aW9uU2VydmljZS5zaG93RXJyb3IoJ0NvdWxkIG5vdCBmZXRjaCBXYXZlY3QgVG9rZW4gYmFsYW5jZS4nLCBlcnIpO1xyXG4gICAgICAgICAgfSBcclxuICAgICAgICAgIHJldHVybiAnMCc7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBhc3luYyBnZXRTdGFraW5nQmFsYW5jZShyZWZyZXNoPzogYm9vbGVhbik6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIUJsb2NrY2hhaW5TZXJ2aWNlLl9zdGFraW5nQmFsYW5jZSB8fCByZWZyZXNoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgQmxvY2tjaGFpblNlcnZpY2UuX3N0YWtpbmdCYWxhbmNlID0gKGF3YWl0IEJsb2NrY2hhaW5TZXJ2aWNlLl90b2tlbkZhcm1Db250cmFjdC5tZXRob2RzLnN0YWtpbmdCYWxhbmNlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBCbG9ja2NoYWluU2VydmljZS5nZXRDdXJyZW50QWNjb3VudCgpKS5jYWxsKCkpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBCbG9ja2NoYWluU2VydmljZS5fc3Rha2luZ0JhbGFuY2UgXHJcbiAgICAgICAgICAgIH0gY2F0Y2goZXJyKSB7XHJcbiAgICAgICAgICAgICAgICBOb3RpZmljYXRpb25TZXJ2aWNlLnNob3dFcnJvcignQ291bGQgbm90IGZldGNoIHN0YWtpbmcgYmFsYW5jZS4nLCBlcnIpO1xyXG4gICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICByZXR1cm4gJzAnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBhc3luYyBnZXRDdXJyZW50QWNjb3VudCgpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFCbG9ja2NoYWluU2VydmljZS5fYWNjb3VudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIEJsb2NrY2hhaW5TZXJ2aWNlLl9hY2NvdW50ID0gKGF3YWl0ICh3aW5kb3cgYXMgYW55KS53ZWIzLmV0aC5nZXRBY2NvdW50cygpKVswXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBCbG9ja2NoYWluU2VydmljZS5fYWNjb3VudDtcclxuICAgICAgICAgICAgfSBjYXRjaChlcnIpIHtcclxuICAgICAgICAgICAgICAgIE5vdGlmaWNhdGlvblNlcnZpY2Uuc2hvd0Vycm9yKCdDb3VsZCBub3QgZmV0Y2ggYWNjb3VudC4nLCBlcnIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiAnMHgwJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGFzeW5jIGxvYWRXYXZlY3RUb2tlbkNvbnRyYWN0KG5ldHdvcmtJZDogc3RyaW5nKSB7XHJcbiAgICAgICAgICBjb25zdCB3YXZlY3RUb2tlbkRhdGEgPSBXYXZlY3RUb2tlbi5uZXR3b3Jrc1tuZXR3b3JrSWRdXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGlmKHdhdmVjdFRva2VuRGF0YSkge1xyXG4gICAgICAgICAgICBCbG9ja2NoYWluU2VydmljZS5fd2F2ZWN0VG9rZW5Db250cmFjdCA9IG5ldyAod2luZG93IGFzIGFueSkud2ViMy5ldGguQ29udHJhY3QoV2F2ZWN0VG9rZW4uYWJpLCB3YXZlY3RUb2tlbkRhdGEuYWRkcmVzcyk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBOb3RpZmljYXRpb25TZXJ2aWNlLnNob3dFcnJvcignV2F2ZWN0VG9rZW4gY29udHJhY3Qgbm90IGRlcGxveWVkIHRvIGRldGVjdGVkIG5ldHdvcmsuJylcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiBCbG9ja2NoYWluU2VydmljZS5fd2F2ZWN0VG9rZW5CYWxhbmNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgYXN5bmMgbG9hZFRva2VuRmFybUNvbnRyYWN0KG5ldHdvcmtJZDogc3RyaW5nKSB7XHJcbiAgICAgICAgICBjb25zdCB0b2tlbkZhcm1EYXRhID0gVG9rZW5GYXJtLm5ldHdvcmtzW25ldHdvcmtJZF1cclxuICAgICAgICAgIGlmKHRva2VuRmFybURhdGEpIHtcclxuICAgICAgICAgICAgQmxvY2tjaGFpblNlcnZpY2UuX3Rva2VuRmFybUNvbnRyYWN0ID0gbmV3ICh3aW5kb3cgYXMgYW55KS53ZWIzLmV0aC5Db250cmFjdChUb2tlbkZhcm0uYWJpLCB0b2tlbkZhcm1EYXRhLmFkZHJlc3MpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgTm90aWZpY2F0aW9uU2VydmljZS5zaG93RXJyb3IoJ1Rva2VuRmFybSBjb250cmFjdCBub3QgZGVwbG95ZWQgdG8gZGV0ZWN0ZWQgbmV0d29yay4nKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIHByaXZhdGUgc3RhdGljIGFzeW5jIGxvYWRCbG9ja2NoYWluRGF0YSh3ZWIzOiBhbnkpIHtcclxuICAgICAgICBpZiAod2ViMykge1xyXG4gICAgICAgICAgY29uc3QgbmV0d29ya0lkOiBzdHJpbmcgPSBhd2FpdCAod2luZG93IGFzIGFueSkud2ViMy5ldGgubmV0LmdldElkKClcclxuICAgICAgICAgIGF3YWl0IEJsb2NrY2hhaW5TZXJ2aWNlLmxvYWRXYXZlY3RUb2tlbkNvbnRyYWN0KG5ldHdvcmtJZCk7XHJcbiAgICAgICAgICBhd2FpdCBCbG9ja2NoYWluU2VydmljZS5sb2FkVG9rZW5GYXJtQ29udHJhY3QobmV0d29ya0lkKTtcclxuXHJcbiAgICAgICAgICBFbWl0dGVyLm9uY2UoRVZFTlRfQkxPQ0tDSEFJTl9EQVRBX0NIQU5HRUQsICgpID0+IE5vdGlmaWNhdGlvblNlcnZpY2Uuc2hvd1N1Y2Nlc3MoJ0Nvbm5lY3RlZCB0byBCbG9ja2NoYWluLicpKVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgRW1pdHRlci5lbWl0KEVWRU5UX0JMT0NLQ0hBSU5fREFUQV9DSEFOR0VEKTtcclxuXHJcbiAgICAgICAgICAgIEVtaXR0ZXIub24oRVZFTlRfQkxPQ0tDSEFJTl9EQVRBX0NIQU5HRUQsICgpID0+IHtcclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSwgMTAwKSAvLyBuZWVkIHRvIHdhaXQgdG8gbGV0IGNvbXBvbmVudHMgdG8gc3Vic2NyaWJlIHRvIHRoaXMgZXZlbnRcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgICBwcml2YXRlIHN0YXRpYyBhc3luYyBsb2FkV2ViMygpIHtcclxuICAgICAgICAgIGlmICgod2luZG93IGFzIGFueSkuZXRoZXJldW0pIHtcclxuICAgIFxyXG4gICAgICAgICAgICAod2luZG93IGFzIGFueSkud2ViMyA9IG5ldyBXZWIzKCh3aW5kb3cgYXMgYW55KS5ldGhlcmV1bSlcclxuICAgICAgICAgICAgYXdhaXQgKHdpbmRvdyBhcyBhbnkpLmV0aGVyZXVtLmVuYWJsZSgpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlbHNlIGlmICgod2luZG93IGFzIGFueSkud2ViMykge1xyXG4gICAgICAgICAgICAod2luZG93IGFzIGFueSkud2ViMyA9IG5ldyBXZWIzKCh3aW5kb3cgYXMgYW55KS53ZWIzLmN1cnJlbnRQcm92aWRlcilcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBOb3RpZmljYXRpb25TZXJ2aWNlLnNob3dFcnJvcignTm9uLUV0aGVyZXVtIGJyb3dzZXIgZGV0ZWN0ZWQuIFlvdSBzaG91bGQgY29uc2lkZXIgdHJ5aW5nIE1ldGFNYXNrIScpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gKHdpbmRvdyBhcyBhbnkpLndlYjM7XHJcbiAgICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=
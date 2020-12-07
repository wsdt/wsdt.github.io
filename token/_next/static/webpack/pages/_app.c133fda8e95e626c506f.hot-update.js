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
                return window.web3.eth.getAccounts()[0];

              case 4:
                BlockchainService._account = _context5.sent;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlcnZpY2VzL0Jsb2NrY2hhaW4uc2VydmljZS50cyJdLCJuYW1lcyI6WyJCbG9ja2NoYWluU2VydmljZSIsImFtb3VudCIsIl90b2tlbkZhcm1Db250cmFjdCIsIm1ldGhvZHMiLCJzdGFrZVRva2VucyIsInNlbmQiLCJmcm9tIiwiX2FjY291bnQiLCJ0byIsImFkZHJlc3MiLCJ2YWx1ZSIsImxvYWRXZWIzIiwibG9hZEJsb2NrY2hhaW5EYXRhIiwiTm90aWZpY2F0aW9uU2VydmljZSIsInNob3dTdWNjZXNzIiwic2hvd0Vycm9yIiwiX3dhdmVjdFRva2VuQmFsYW5jZSIsIl93YXZlY3RUb2tlbkNvbnRyYWN0IiwiZ2V0Q3VycmVudEFjY291bnQiLCJiYWxhbmNlT2YiLCJjYWxsIiwidG9TdHJpbmciLCJfc3Rha2luZ0JhbGFuY2UiLCJzdGFraW5nQmFsYW5jZSIsIndpbmRvdyIsIndlYjMiLCJldGgiLCJnZXRBY2NvdW50cyIsIm5ldHdvcmtJZCIsIndhdmVjdFRva2VuRGF0YSIsIldhdmVjdFRva2VuIiwibmV0d29ya3MiLCJDb250cmFjdCIsImFiaSIsInRva2VuRmFybURhdGEiLCJUb2tlbkZhcm0iLCJuZXQiLCJnZXRJZCIsImxvYWRXYXZlY3RUb2tlbkNvbnRyYWN0IiwibG9hZFRva2VuRmFybUNvbnRyYWN0IiwiRW1pdHRlciIsImVtaXQiLCJFVkVOVF9CTE9DS0NIQUlOX0RBVEFfQ0hBTkdFRCIsImV0aGVyZXVtIiwiV2ViMyIsImVuYWJsZSIsImN1cnJlbnRQcm92aWRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxpQkFBYjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQSx1VUFPb0NDLE1BUHBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQVFxQkQsaUJBQWlCLENBQUNF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QixNQUFELENBQWdCQyxJQUFoQixDQUFxQnFCLGVBQTlCLENBQXZCO0FBQ0QsaUJBRkksTUFHQTtBQUNIakMsMkZBQW1CLENBQUNFLFNBQXBCLENBQThCLHFFQUE5QjtBQUNEOztBQXhHWDtBQUFBLGtEQXlHa0JTLE1BQUQsQ0FBZ0JDLElBekdqQzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7O2dKQUFhekIsaUI7O2dKQUFBQSxpQjs7Z0pBQUFBLGlCOztnSkFBQUEsaUI7O2dKQUFBQSxpQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmMxMzNmZGE4ZTk1ZTYyNmM1MDZmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgV2ViMyBmcm9tIFwid2ViM1wiXHJcbmltcG9ydCB7IE5vdGlmaWNhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi9Ob3RpZmljYXRpb24uc2VydmljZVwiXHJcbmltcG9ydCBXYXZlY3RUb2tlbiBmcm9tICcuLi9hYmlzL1dhdmVjdFRva2VuLmpzb24nXHJcbmltcG9ydCBUb2tlbkZhcm0gZnJvbSAnLi4vYWJpcy9Ub2tlbkZhcm0uanNvbidcclxuaW1wb3J0IEVtaXR0ZXIsIHsgRVZFTlRfQkxPQ0tDSEFJTl9EQVRBX0NIQU5HRUQgfSBmcm9tIFwiLi9FdmVudC5zZXJ2aWNlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQmxvY2tjaGFpblNlcnZpY2Uge1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX3Rva2VuRmFybUNvbnRyYWN0O1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX3N0YWtpbmdCYWxhbmNlOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBfd2F2ZWN0VG9rZW5Db250cmFjdDtcclxuICAgIHByaXZhdGUgc3RhdGljIF93YXZlY3RUb2tlbkJhbGFuY2U6IHN0cmluZztcclxuICAgIHByaXZhdGUgc3RhdGljIF9hY2NvdW50OiBzdHJpbmc7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBzdGFrZVRva2VucyhhbW91bnQ6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiBhd2FpdCBCbG9ja2NoYWluU2VydmljZS5fdG9rZW5GYXJtQ29udHJhY3QubWV0aG9kcy5zdGFrZVRva2VucyhhbW91bnQpLnNlbmQoeyBcclxuICAgICAgICAgIGZyb206IEJsb2NrY2hhaW5TZXJ2aWNlLl9hY2NvdW50LCBcclxuICAgICAgICAgIHRvOiBCbG9ja2NoYWluU2VydmljZS5fdG9rZW5GYXJtQ29udHJhY3QuYWRkcmVzcyxcclxuICAgICAgICAgIHZhbHVlOiBhbW91bnQsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgY29ubmVjdFRvQmxvY2tjaGFpbigpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBhd2FpdCBCbG9ja2NoYWluU2VydmljZS5sb2FkQmxvY2tjaGFpbkRhdGEoXHJcbiAgICAgICAgICAgICAgYXdhaXQgQmxvY2tjaGFpblNlcnZpY2UubG9hZFdlYjMoKVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIE5vdGlmaWNhdGlvblNlcnZpY2Uuc2hvd1N1Y2Nlc3MoJ0Nvbm5lY3RlZCB0byBCbG9ja2NoYWluLicpXHJcbiAgICAgICAgICB9IGNhdGNoKGVycikge1xyXG4gICAgICAgICAgICBOb3RpZmljYXRpb25TZXJ2aWNlLnNob3dFcnJvcignWW91IG5lZWQgdG8gYWxsb3cgeW91ciBicm93c2VyIHRvIGNvbm5lY3QgdG8gb3VyIFdlYjMgc2VydmljZS4nLCBlcnIpXHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgZ2V0V2F2ZWN0VG9rZW5CYWxhbmNlKCk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAoIUJsb2NrY2hhaW5TZXJ2aWNlLl93YXZlY3RUb2tlbkJhbGFuY2UpIHtcclxuICAgICAgICAgICAgICAgIEJsb2NrY2hhaW5TZXJ2aWNlLl93YXZlY3RUb2tlbkJhbGFuY2UgPSBhd2FpdCBCbG9ja2NoYWluU2VydmljZS5fd2F2ZWN0VG9rZW5Db250cmFjdC5tZXRob2RzLmJhbGFuY2VPZihcclxuICAgICAgICAgICAgICAgICAgICBhd2FpdCBCbG9ja2NoYWluU2VydmljZS5nZXRDdXJyZW50QWNjb3VudCgpKS5jYWxsKCkudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gQmxvY2tjaGFpblNlcnZpY2UuX3dhdmVjdFRva2VuQmFsYW5jZVxyXG4gICAgICAgICAgfSBjYXRjaChlcnIpIHtcclxuICAgICAgICAgICAgICBOb3RpZmljYXRpb25TZXJ2aWNlLnNob3dFcnJvcignQ291bGQgbm90IGZldGNoIFdhdmVjdCBUb2tlbiBiYWxhbmNlLicsIGVycik7XHJcbiAgICAgICAgICB9IFxyXG4gICAgICAgICAgcmV0dXJuICcwJztcclxuICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIGFzeW5jIGdldFN0YWtpbmdCYWxhbmNlKCk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIUJsb2NrY2hhaW5TZXJ2aWNlLl9zdGFraW5nQmFsYW5jZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIEJsb2NrY2hhaW5TZXJ2aWNlLl9zdGFraW5nQmFsYW5jZSA9IGF3YWl0IEJsb2NrY2hhaW5TZXJ2aWNlLl90b2tlbkZhcm1Db250cmFjdC5tZXRob2RzLnN0YWtpbmdCYWxhbmNlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBCbG9ja2NoYWluU2VydmljZS5nZXRDdXJyZW50QWNjb3VudCgpKS5jYWxsKCkudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEJsb2NrY2hhaW5TZXJ2aWNlLl9zdGFraW5nQmFsYW5jZSBcclxuICAgICAgICAgICAgfSBjYXRjaChlcnIpIHtcclxuICAgICAgICAgICAgICAgIE5vdGlmaWNhdGlvblNlcnZpY2Uuc2hvd0Vycm9yKCdDb3VsZCBub3QgZmV0Y2ggc3Rha2luZyBiYWxhbmNlLicsIGVycik7XHJcbiAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgIHJldHVybiAnMCc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIGFzeW5jIGdldEN1cnJlbnRBY2NvdW50KCk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIUJsb2NrY2hhaW5TZXJ2aWNlLl9hY2NvdW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgQmxvY2tjaGFpblNlcnZpY2UuX2FjY291bnQgPSBhd2FpdCAod2luZG93IGFzIGFueSkud2ViMy5ldGguZ2V0QWNjb3VudHMoKVswXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBCbG9ja2NoYWluU2VydmljZS5fYWNjb3VudDtcclxuICAgICAgICAgICAgfSBjYXRjaChlcnIpIHtcclxuICAgICAgICAgICAgICAgIE5vdGlmaWNhdGlvblNlcnZpY2Uuc2hvd0Vycm9yKCdDb3VsZCBub3QgZmV0Y2ggYWNjb3VudC4nLCBlcnIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiAnMHgwJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGFzeW5jIGxvYWRXYXZlY3RUb2tlbkNvbnRyYWN0KG5ldHdvcmtJZDogc3RyaW5nKSB7XHJcbiAgICAgICAgICBjb25zdCB3YXZlY3RUb2tlbkRhdGEgPSBXYXZlY3RUb2tlbi5uZXR3b3Jrc1tuZXR3b3JrSWRdXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGlmKHdhdmVjdFRva2VuRGF0YSkge1xyXG4gICAgICAgICAgICBCbG9ja2NoYWluU2VydmljZS5fd2F2ZWN0VG9rZW5Db250cmFjdCA9IG5ldyAod2luZG93IGFzIGFueSkud2ViMy5ldGguQ29udHJhY3QoV2F2ZWN0VG9rZW4uYWJpLCB3YXZlY3RUb2tlbkRhdGEuYWRkcmVzcyk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBOb3RpZmljYXRpb25TZXJ2aWNlLnNob3dFcnJvcignV2F2ZWN0VG9rZW4gY29udHJhY3Qgbm90IGRlcGxveWVkIHRvIGRldGVjdGVkIG5ldHdvcmsuJylcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiBCbG9ja2NoYWluU2VydmljZS5fd2F2ZWN0VG9rZW5CYWxhbmNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgYXN5bmMgbG9hZFRva2VuRmFybUNvbnRyYWN0KG5ldHdvcmtJZDogc3RyaW5nKSB7XHJcbiAgICAgICAgICBjb25zdCB0b2tlbkZhcm1EYXRhID0gVG9rZW5GYXJtLm5ldHdvcmtzW25ldHdvcmtJZF1cclxuICAgICAgICAgIGlmKHRva2VuRmFybURhdGEpIHtcclxuICAgICAgICAgICAgQmxvY2tjaGFpblNlcnZpY2UuX3Rva2VuRmFybUNvbnRyYWN0ID0gbmV3ICh3aW5kb3cgYXMgYW55KS53ZWIzLmV0aC5Db250cmFjdChUb2tlbkZhcm0uYWJpLCB0b2tlbkZhcm1EYXRhLmFkZHJlc3MpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgTm90aWZpY2F0aW9uU2VydmljZS5zaG93RXJyb3IoJ1Rva2VuRmFybSBjb250cmFjdCBub3QgZGVwbG95ZWQgdG8gZGV0ZWN0ZWQgbmV0d29yay4nKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIHByaXZhdGUgc3RhdGljIGFzeW5jIGxvYWRCbG9ja2NoYWluRGF0YSh3ZWIzOiBhbnkpIHtcclxuICAgICAgICBpZiAod2ViMykge1xyXG4gICAgICAgICAgY29uc3QgbmV0d29ya0lkOiBzdHJpbmcgPSBhd2FpdCAod2luZG93IGFzIGFueSkud2ViMy5ldGgubmV0LmdldElkKClcclxuICAgICAgICAgIGF3YWl0IEJsb2NrY2hhaW5TZXJ2aWNlLmxvYWRXYXZlY3RUb2tlbkNvbnRyYWN0KG5ldHdvcmtJZCk7XHJcbiAgICAgICAgICBhd2FpdCBCbG9ja2NoYWluU2VydmljZS5sb2FkVG9rZW5GYXJtQ29udHJhY3QobmV0d29ya0lkKTtcclxuICAgICAgICAgIEVtaXR0ZXIuZW1pdChFVkVOVF9CTE9DS0NIQUlOX0RBVEFfQ0hBTkdFRCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICBcclxuICAgICAgcHJpdmF0ZSBzdGF0aWMgYXN5bmMgbG9hZFdlYjMoKSB7XHJcbiAgICAgICAgICBpZiAoKHdpbmRvdyBhcyBhbnkpLmV0aGVyZXVtKSB7XHJcbiAgICBcclxuICAgICAgICAgICAgKHdpbmRvdyBhcyBhbnkpLndlYjMgPSBuZXcgV2ViMygod2luZG93IGFzIGFueSkuZXRoZXJldW0pXHJcbiAgICAgICAgICAgIGF3YWl0ICh3aW5kb3cgYXMgYW55KS5ldGhlcmV1bS5lbmFibGUoKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZWxzZSBpZiAoKHdpbmRvdyBhcyBhbnkpLndlYjMpIHtcclxuICAgICAgICAgICAgKHdpbmRvdyBhcyBhbnkpLndlYjMgPSBuZXcgV2ViMygod2luZG93IGFzIGFueSkud2ViMy5jdXJyZW50UHJvdmlkZXIpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgTm90aWZpY2F0aW9uU2VydmljZS5zaG93RXJyb3IoJ05vbi1FdGhlcmV1bSBicm93c2VyIGRldGVjdGVkLiBZb3Ugc2hvdWxkIGNvbnNpZGVyIHRyeWluZyBNZXRhTWFzayEnKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuICh3aW5kb3cgYXMgYW55KS53ZWIzO1xyXG4gICAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9
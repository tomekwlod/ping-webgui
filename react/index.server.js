module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(log) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.refreshIntervalSet = exports.REFRESH_INTERVAL_SET = exports.formReset = exports.formChangeInterval = exports.formChangeStatus = exports.formChangeUrl = exports.formSubmit = exports.formItemFetchRequest = exports.FORM_ITEM_FETCH_SUCCESS = exports.FORM_ITEM_INTERVAL_RESET = exports.FORM_ITEM_INTERVAL_CHANGE = exports.FORM_ITEM_STATUS_RESET = exports.FORM_ITEM_STATUS_CHANGE = exports.FORM_ITEM_URL_RESET = exports.FORM_ITEM_URL_CHANGE = exports.deleteElementFromList = exports.cancelDelete = exports.showDelete = exports.LIST_DELETE_DELETE = exports.LIST_DELETE_CANCEL = exports.LIST_DELETE_SHOW = exports.fetchList = exports.FETCH_LIST_FAILURE = exports.FETCH_LIST_SUCCESS = exports.FETCH_LIST_REQUEST = exports.loginSignOut = exports.loginError = exports.loginSuccess = exports.loginRequest = exports.LOGIN_SIGNOUT = exports.LOGIN_FAILURE = exports.LOGIN_SUCCESS = exports.LOGIN_REQUEST = exports.loaderMessage = exports.loaderError = exports.loaderOff = exports.loaderOn = exports.loaderButtonsHide = exports.loaderButtonsShow = exports.LOADER_BUTTONS_HIDE = exports.LOADER_BUTTONS_SHOW = exports.LOADER_MESSAGE = exports.LOADER_ERROR = exports.LOADER_OFF = exports.LOADER_ON = undefined;

var _transport = __webpack_require__(31);

var _reducers = __webpack_require__(2);

var errorHandler = function errorHandler(dispatch) {
    return function (error) {

        dispatch(loaderError('Server error: ' + error));

        return 'failure';
    };
};
// ===========================

// loader vvv
var LOADER_ON = exports.LOADER_ON = 'LOADER_ON';
var LOADER_OFF = exports.LOADER_OFF = 'LOADER_OFF';
var LOADER_ERROR = exports.LOADER_ERROR = 'LOADER_ERROR';
var LOADER_MESSAGE = exports.LOADER_MESSAGE = 'LOADER_MESSAGE';
var LOADER_BUTTONS_SHOW = exports.LOADER_BUTTONS_SHOW = 'LOADER_BUTTONS_SHOW';
var LOADER_BUTTONS_HIDE = exports.LOADER_BUTTONS_HIDE = 'LOADER_BUTTONS_HIDE';

var loaderButtonsShow = exports.loaderButtonsShow = function loaderButtonsShow() {
    return { type: LOADER_BUTTONS_SHOW };
};
var loaderButtonsHide = exports.loaderButtonsHide = function loaderButtonsHide() {
    return { type: LOADER_BUTTONS_HIDE };
};

var loaderOn = exports.loaderOn = function loaderOn() {
    return {
        type: LOADER_ON
    };
};

var loaderOff = exports.loaderOff = function loaderOff() {
    return {
        type: LOADER_OFF
    };
};

var definition = function definition(type) {

    var handler = null;

    return function (msg, time) {
        return function (dispatch, getState) {

            dispatch({
                type: type,
                msg: msg
            });

            clearTimeout(handler);

            handler = setTimeout(function () {

                dispatch(loaderOff());
            }, time || 50000);
        };
    };
};
var loaderError = exports.loaderError = definition(LOADER_ERROR);
var loaderMessage = exports.loaderMessage = definition(LOADER_MESSAGE);
// loader ^^^

// jwt vvv
// https://auth0.com/blog/secure-your-react-and-redux-app-with-jwt-authentication/
// https://github.com/auth0-blog/nodejs-jwt-authentication-sample
// https://github.com/auth0-blog/redux-auth

var LOGIN_REQUEST = exports.LOGIN_REQUEST = 'LOGIN_REQUEST';
var LOGIN_SUCCESS = exports.LOGIN_SUCCESS = 'LOGIN_SUCCESS';
var LOGIN_FAILURE = exports.LOGIN_FAILURE = 'LOGIN_FAILURE';
var LOGIN_SIGNOUT = exports.LOGIN_SIGNOUT = 'LOGIN_SIGNOUT';

var loginRequest = exports.loginRequest = function loginRequest(username, password) {
    return function (dispatch, getState) {

        var state = getState();

        if ((0, _reducers.getLoading)(state)) {

            return Promise.resolve('canceled');
        }

        dispatch(loaderOn());

        return new Promise(function (resolve) {
            setTimeout(function () {

                dispatch(loaderOff());
                resolve('done');
            }, 1000);
        });
    };
};

var loginSuccess = exports.loginSuccess = function loginSuccess(__JWT_TOKEN__) {
    return {
        type: LOGIN_SUCCESS,
        payload: __JWT_TOKEN__
    };
};

var loginError = exports.loginError = function loginError(message) {
    return {
        type: LOGIN_FAILURE,
        payload: {
            message: message
        }
    };
};

var loginSignOut = exports.loginSignOut = function loginSignOut() {
    return {
        type: LOGIN_SIGNOUT
    };
};

// jwt ^^^

// list
var FETCH_LIST_REQUEST = exports.FETCH_LIST_REQUEST = 'FETCH_LIST_REQUEST';
var FETCH_LIST_SUCCESS = exports.FETCH_LIST_SUCCESS = 'FETCH_LIST_SUCCESS';
var FETCH_LIST_FAILURE = exports.FETCH_LIST_FAILURE = 'FETCH_LIST_FAILURE';

var fetchList = exports.fetchList = function fetchList() {
    return function (dispatch, getState) {

        var state = getState();

        if ((0, _reducers.getLoaderStatus)(state) === 'on') {

            log('is loading now - stop and return promise', state);

            return Promise.resolve('cancel');
        }

        dispatch(loaderOn());

        return (0, _transport.fetchJson)('/pages').then(function (response) {

            dispatch(loaderOff());

            dispatch({
                type: FETCH_LIST_SUCCESS,
                list: response.data
            });

            return 'success';
        }, errorHandler(dispatch));
    };
};

var LIST_DELETE_SHOW = exports.LIST_DELETE_SHOW = 'LIST_DELETE_SHOW';
var LIST_DELETE_CANCEL = exports.LIST_DELETE_CANCEL = 'LIST_DELETE_CANCEL';
var LIST_DELETE_DELETE = exports.LIST_DELETE_DELETE = 'LIST_DELETE_DELETE';

var showDelete = exports.showDelete = function showDelete(id) {
    return {
        type: LIST_DELETE_SHOW,
        id: id
    };
};

var cancelDelete = exports.cancelDelete = function cancelDelete() {
    return {
        type: LIST_DELETE_CANCEL
    };
};

var deleteElementFromList = exports.deleteElementFromList = function deleteElementFromList(id) {
    return function (dispatch, getState) {

        var state = getState();

        dispatch(cancelDelete());

        dispatch(loaderOn());

        return (0, _transport.fetchData)('/page/' + id, {
            method: 'DELETE',
            headers: {
                Accept: 'application/json'
            }
        }).then(function (res) {
            return res.status;
        }).then(function (response) {

            dispatch(loaderOff());

            if (response === 204) {

                dispatch(fetchList());

                return 'success';
            }

            dispatch(loaderError('Server error: wrong status code'));

            return 'success';
        }, errorHandler(dispatch));
    };
};

var FORM_ITEM_URL_CHANGE = exports.FORM_ITEM_URL_CHANGE = 'FORM_ITEM_URL_CHANGE';
var FORM_ITEM_URL_RESET = exports.FORM_ITEM_URL_RESET = 'FORM_ITEM_URL_RESET';
var FORM_ITEM_STATUS_CHANGE = exports.FORM_ITEM_STATUS_CHANGE = 'FORM_ITEM_STATUS_CHANGE';
var FORM_ITEM_STATUS_RESET = exports.FORM_ITEM_STATUS_RESET = 'FORM_ITEM_STATUS_RESET';
var FORM_ITEM_INTERVAL_CHANGE = exports.FORM_ITEM_INTERVAL_CHANGE = 'FORM_ITEM_INTERVAL_CHANGE';
var FORM_ITEM_INTERVAL_RESET = exports.FORM_ITEM_INTERVAL_RESET = 'FORM_ITEM_INTERVAL_RESET';

var FORM_ITEM_FETCH_SUCCESS = exports.FORM_ITEM_FETCH_SUCCESS = 'FORM_ITEM_FETCH_SUCCESS';

var formItemFetchRequest = exports.formItemFetchRequest = function formItemFetchRequest(id) {
    return function (dispatch, getState) {

        dispatch(loaderOn());

        (0, _transport.fetchJson)('/page/' + id).then(function (response) {

            dispatch(loaderOff());

            if (response.data) {

                return dispatch({
                    type: FORM_ITEM_FETCH_SUCCESS,
                    data: response.data
                });
            }

            errorHandler(dispatch)("Wrong response data format");
        }, errorHandler(dispatch));
    };
};

var formSubmit = exports.formSubmit = function formSubmit(id) {
    return function (dispatch, getState) {

        var state = getState();

        dispatch(loaderOn());

        // return resolved no matter what
        return new Promise(function (resolve) {

            var url = '/page';
            var method = 'POST';

            if (id) {

                method = 'PUT';
                url += '/' + id;
            }

            (0, _transport.fetchData)(url, {
                method: method,
                headers: {
                    Accept: 'application/json',
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    data: (0, _reducers.getFormData)(state)
                } || {})
            }).then(function (response) {

                if (id) {

                    return response;
                }

                return response.json();
            }).then(function (response) {

                dispatch(loaderOff());

                if (id) {

                    if (response.status !== 204) {

                        errorHandler(dispatch)("Wrong response data format after edit");

                        return resolve('error');
                    }

                    setTimeout(function () {
                        return dispatch(loaderMessage('Endpoint edited successfully ...'));
                    }, 500);

                    return resolve(id);
                } else {

                    if (response.data) {

                        dispatch({
                            type: FORM_ITEM_URL_CHANGE,
                            value: response.data.url
                        });

                        dispatch({
                            type: FORM_ITEM_INTERVAL_CHANGE,
                            value: response.data.interval
                        });

                        dispatch({
                            type: FORM_ITEM_STATUS_CHANGE,
                            value: response.data.laststatus
                        });

                        setTimeout(function () {
                            return dispatch(loaderMessage('Endpoint created successfully ...'));
                        }, 500);

                        return resolve(response.data._id);
                    } else {

                        errorHandler(dispatch)("Wrong response data format after create");

                        return resolve('error');
                    }
                }
            }, function (error) {

                if (id) {

                    log('edit error - never happen on server :/');
                } else {

                    errorHandler(dispatch)("Duplicate url");

                    return resolve('error');
                }
            });
        });
    };
};

var formChangeUrl = exports.formChangeUrl = function formChangeUrl(value) {
    return {
        type: FORM_ITEM_URL_CHANGE,
        value: value
    };
};

var formChangeStatus = exports.formChangeStatus = function formChangeStatus(value) {
    return {
        type: FORM_ITEM_STATUS_CHANGE,
        value: value
    };
};

var formChangeInterval = exports.formChangeInterval = function formChangeInterval(value) {
    return {
        type: FORM_ITEM_INTERVAL_CHANGE,
        value: value
    };
};

var formReset = exports.formReset = function formReset() {
    return function (dispatch, getState) {
        dispatch({
            type: [FORM_ITEM_URL_RESET, FORM_ITEM_INTERVAL_RESET, FORM_ITEM_STATUS_RESET]
            // type: FORM_ITEM_URL_RESET
        });
    };
};

// -------- refreshInterval --------- vvv

var REFRESH_INTERVAL_SET = exports.REFRESH_INTERVAL_SET = 'REFRESH_INTERVAL_SET';

var refreshIntervalSet = exports.refreshIntervalSet = function refreshIntervalSet(value) {
    return {
        type: REFRESH_INTERVAL_SET,
        payload: value
    };
};

// -------- refreshInterval --------- ^^^
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getFormData = exports.getInterval = exports.getFormValue = exports.getDelElement = exports.getStatusColor = exports.getList = exports.getLoaderButtonVisible = exports.getLoaderMsg = exports.getLoading = exports.getLoaderStatus = exports.getLoginError = exports.getUsername = exports.getAuthenticated = undefined;

var _redux = __webpack_require__(8);

var _loading = __webpack_require__(35);

var fromLoader = _interopRequireWildcard(_loading);

var _list = __webpack_require__(36);

var fromList = _interopRequireWildcard(_list);

var _form = __webpack_require__(37);

var fromForm = _interopRequireWildcard(_form);

var _authenticated = __webpack_require__(38);

var fromAuthenticated = _interopRequireWildcard(_authenticated);

var _refreshInterval = __webpack_require__(40);

var fromRefreshInterval = _interopRequireWildcard(_refreshInterval);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// top level reducers file

var reducers = (0, _redux.combineReducers)({
    form: fromForm.default,
    loader: fromLoader.default,
    list: fromList.default,
    authenticated: fromAuthenticated.default,
    refreshInterval: fromRefreshInterval.default
});

// import byId, * as fromById from './byId';

// import createList, * as fromList from './createList';

exports.default = reducers;

// selectors

var getAuthenticated = exports.getAuthenticated = function getAuthenticated(state) {
    return fromAuthenticated.getAuthenticated(state.authenticated);
};

var getUsername = exports.getUsername = function getUsername(state) {
    return fromAuthenticated.getUsername(state.authenticated);
};

var getLoginError = exports.getLoginError = function getLoginError(state) {
    return fromAuthenticated.getLoginError(state.authenticated);
};

var getLoaderStatus = exports.getLoaderStatus = function getLoaderStatus(state) {
    return fromLoader.getLoaderStatus(state.loader);
};

var getLoading = exports.getLoading = function getLoading(state) {
    return fromLoader.getLoading(state.loader);
};

var getLoaderMsg = exports.getLoaderMsg = function getLoaderMsg(state) {
    return fromLoader.getLoaderMsg(state.loader);
};

var getLoaderButtonVisible = exports.getLoaderButtonVisible = function getLoaderButtonVisible(state) {
    return fromLoader.getLoaderButtonVisible(state.loader);
};

var getList = exports.getList = function getList(state) {
    return fromList.getIds(state.list).map(function (id) {
        return fromList.getById(state.list, id);
    });
};

var getStatusColor = exports.getStatusColor = function getStatusColor(state) {
    return fromList.getStatusColor(state.list);
};

var getDelElement = exports.getDelElement = function getDelElement(state) {
    return fromList.getById(state.list, fromList.getDel(state.list));
};

var getFormValue = exports.getFormValue = function getFormValue(state, key) {
    return fromForm.getValue(state.form, key);
};

var getInterval = exports.getInterval = function getInterval(state) {
    return fromRefreshInterval.getInterval(state.refreshInterval);
};

var getFormData = exports.getFormData = function getFormData(state) {
    return {
        laststatus: getFormValue(state, 'laststatus'),
        interval: getFormValue(state, 'interval'),
        url: getFormValue(state, 'url')
    };
};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("./../app/public.config.js");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @author Szymon Działowski
 * @license MIT License (c) copyright 2017-present original author or authors
 * @homepage https://github.com/stopsopa/roderic
 */


// -- test --- vvv

// const log = require('./logn');
//
// (function () {
//
//     (function () {
//
//         console.log('------------ 1');
//
//         log('one')('two')('three');
//
//         console.log('------------ 2');
//
//         log('-test-')('+test+')('testddd')('next');
//
//         console.log('------------ 3');
//
//         log.stack(2)('-test-')('+test+')('testddd')('next');
//
//         console.log('------------ 4');
//
//         log.stack(0).log('stack 0', 'two');
//
//         log.stack(1).log('stack 1', 'two');
//
//         log.stack(2).log('stack 2', 'two');
//
//         console.log('------------ stack default 2');
//
//         log.stack(0)('-test-')('+test+')('testddd')('next');
//
//         console.log('------------ json');
//
//         log.json({one: "two", three: [5, 'eight']})
//
//         log.stack(2).json({one: "two", three: [5, 'eight']})({one: "two", three: [5, 'eight']})
//
//         console.log('------------ dump');
//
//         // only one arg
//         log.dump({one: "two", three: [5, 'eight']}, 2 /* show levels (must be int > 0) */);
//
//         console.log('------------ stack dump ');
//
//         // in second cascade call 'level' is not necessary (stil .dump() accept only one ar
//         log.stack(2).dump({one: "two", three: [5, 'eight']}, 2)({one: "two", three: [5, 'eight']})
//
//
//     }());
//
// }());

// -- test --- ^^^


/**
 * log(arg1, arg2, ...)(arg1, arg2, ...)  - line and args
 * log.json(arg1, arg2, ...)(arg1, arg2, ...) - line and args as human readdable json
 * log.dump(arg1, arg2, ...)(arg1, arg2, ...) - line and args (exact description of types)
 *
 * log.stack(5)(arg1, arg2, ...)(arg1, arg2, ...)  - line and args
 * log.stack(5).json(arg1, arg2, ...)(arg1, arg2, ...) - line and args as human readdable json
 * log.stack(5).dump(arg1, arg2, ...)(arg1, arg2, ...) - line and args (exact description of types)
 *
 * and...
 * var tmp = log.stack(4)('test')
 *
 * tmp('test2')
 *
 * gives:
 * /opt/spark_dev/crawler.js:47
 * test
 * /opt/spark_dev/crawler.js:47
 * test2
 *
 */

// web version

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var node = Object.prototype.toString.call(global.process) === '[object process]';

if (!node) {

    module.exports = __webpack_require__(30);
}

// logic from https://github.com/gavinengel/magic-globals/blob/master/index.js
node && function () {
    Object.defineProperty(global, '__stack', {
        get: function tmp() {
            var orig = Error.prepareStackTrace;
            Error.prepareStackTrace = function (_, stack) {
                return stack;
            };
            var err = new Error();
            Error.captureStackTrace(err, tmp);
            // Error.captureStackTrace(err, arguments.callee); // without 'use strict'
            var stack = err.stack;
            Error.prepareStackTrace = orig;
            return stack;
        }
    });
}();

/** returns line number when placing this in your code: __line */
// Object.defineProperty(global, '__line', {
//     get: function(){
//         return String("     " + __stack[2].getLineNumber()).slice(-5);
//     }
// });

// /** return filename (without directory path or file extension) when placing this in your code: __file */
// Object.defineProperty(global, '__file', {
//     get: function(){
//         return __stack[2].getFileName();
//     }
// });

if (node) {

    global.__line = function () {

        function rpad(s, n) {

            typeof n === 'undefined' && (n = 5);

            try {

                if (s && s.length && s.length >= n) {

                    return s;
                }
            } catch (e) {
                console.log('exception', typeof s === 'undefined' ? 'undefined' : _typeof(s), s, e);
            }

            return String(s + " ".repeat(n)).slice(0, n);
        }

        var tool = function tool(n) {

            if (typeof n === 'undefined') {

                var tmp = [];

                for (var i in __stack) {

                    if (__stack.hasOwnProperty(i)) {

                        tmp.push('stack: ' + rpad(i) + ' file:' + __stack[i].getFileName() + ':' + rpad(__stack[i].getLineNumber()) + ' ');
                    }
                }

                return tmp;
            }

            typeof n === 'undefined' && (n = 1);

            if (!__stack[n]) {

                return n + ' not in stack: ' + tool(n - 1);
            }

            var file = __stack[n].getFileName();

            if (file === null) {

                return 'corrected:' + tool(n - 1);
            }

            return file + ':' + rpad(__stack[n].getLineNumber());
        };

        return tool;
    }();
}

var native = function () {

    var nat = function () {

        try {
            return function () {
                Array.prototype.slice.call(arguments, 0).forEach(function (m) {
                    if (typeof m === 'string') {

                        process.stdout.write('\n' + m);

                        return;
                    }
                    m = JSON.stringify(m, null, '    ');

                    process.stdout.write('\n' + m);
                });
            };
            // return console.log.bind(console);
        } catch (e) {

            return function () {};
        }
    }();

    var emmit = true,
        cache = [];
    ;

    var tool = function tool() {

        var args = Array.prototype.slice.call(arguments, 0);

        if (emmit) {

            nat.apply(this, args);
        } else {

            cache = cache.concat(args);
        }
    };

    tool.start = function () {

        emmit = true;

        tool.flush();

        emmit = false;

        return tool;
    };

    tool.flush = function () {

        emmit = true;

        if (emmit && cache.length) {

            tool.call(this, cache.join("\n"));
        }

        cache = [];

        return tool;
    };

    return tool;
}();

var stack = false;

function log() {

    var s = stack === false ? 0 : stack;

    native(__line(s + 2));

    if (this !== true) {

        s += 1;
    }

    stack = false;

    native.apply(this, Array.prototype.slice.call(arguments, 0));

    return function () {

        return log.stack(s).apply(true, Array.prototype.slice.call(arguments, 0));
    };
};

log.log = function () {
    return log.apply(this, Array.prototype.slice.call(arguments, 0));
};

log.json = function () {

    var s = stack === false ? 0 : stack;

    native(__line(s + 2));

    if (this !== true) {

        s += 1;
    }

    stack = false;

    native.start();

    Array.prototype.slice.call(arguments).forEach(function (a) {
        return (JSON.stringify(a, null, '  ') + '').split(/\n/g).forEach(function (l) {
            native(l);
        });
    });

    native.flush();

    return function () {

        return log.stack(s).json.apply(true, Array.prototype.slice.call(arguments, 0));
    };
};

log.stack = function (n /* def: 0 */) {

    if (n === false) {

        stack = n;

        return log;
    }

    var nn = parseInt(n, 10);

    if (!Number.isInteger(n) || n < 0) {

        throw "Can't setup stack to '" + nn + "' (" + n + ")";
    }

    stack = nn;

    return log;
};

(function (ll) {

    // http://stackoverflow.com/a/16608045/5560682
    function isObject(a) {
        // return (!!a) && (a.constructor === Object);
        return Object.prototype.toString.call(a) === '[object Object]'; // better in node.js to dealing with RowDataPacket object
    };
    function isArray(obj) {
        return Object.prototype.toString.call(obj) === '[object Array]';
    };

    var type = function (t) {
        return function (n) {

            if (n === undefined) {

                return 'Undefined';
            }

            if (n === null) {

                return 'Null';
            }

            t = typeof n === 'undefined' ? 'undefined' : _typeof(n);

            if (t === 'Function') {

                return t;
            }

            if (Number.isNaN(n)) {

                return "NaN";
            }

            if (t === 'number') {

                return Number(n) === n && n % 1 === 0 ? 'Integer' : 'Float';
            }

            return n.constructor ? n.constructor.name : t;
            // t = Object.prototype.toString.call(n);
            // if (t.indexOf('[object ') === 0) {
            //     t = t.substring(8);
            //     t = t.substring(0, t.length - 1);
            // }
            // return t;
        };
    }();

    function each(obj, fn, context) {
        var r;
        if (isArray(obj)) {
            for (var i = 0, l = obj.length; i < l; ++i) {
                if (fn.call(context, obj[i], i) === false) {
                    return;
                }
            }
        } else if (isObject(obj) || count(obj)) {
            for (var i in obj) {
                if (obj && obj.hasOwnProperty && obj.hasOwnProperty(i)) {
                    if (fn.call(context, obj[i], i) === false) {
                        return;
                    }
                }
            }
        }
    }

    function toString(o, k) {

        if (typeof o === 'function') {

            k = Object.keys(o).join(',');

            return k ? 'object keys:' + k : '';
        }

        return o;
    }

    // only for function
    function count(o) {

        if (typeof o === 'function') {

            for (var i in o) {

                if (o && o.hasOwnProperty && o.hasOwnProperty(i)) {

                    return true;
                }
            }
        }

        return false;
    }

    log.dump = function () {

        native.start();

        var args = Array.prototype.slice.call(arguments, 0);

        var limit = args[args.length - 1];

        if (args.length > 1 && Number.isInteger(limit) && limit > 0) {

            args.pop();

            limit -= 1;
        } else {

            limit = false;
        }

        function inner(d, l, index) {
            typeof l === 'undefined' && (l = 0);
            index = typeof index === 'undefined' ? '' : '<' + index + '> ';
            var isOb = isObject(d) || count(d);
            if (isOb || isArray(d)) {
                ll('  '.repeat(l) + index + type(d) + ' ' + (isOb ? '{' : '['));
                each(d, function (v, i) {
                    var isOb = isObject(v) || count(v) || isArray(v);
                    if (limit !== false && l >= limit && isOb) {
                        ll('  '.repeat(l + 1) + (typeof i === 'undefined' ? '' : '<' + i + '> ') + '[' + type(v) + ']: ' + '>>more<<');
                        // inner('... more: ' + type(v), l + 1, i);
                    } else {
                        inner(v, l + 1, i);
                    }
                });
                ll('  '.repeat(l) + (isOb ? '}' : ']'));
            } else {
                var t = type(d);
                var c = toString(d);
                ll('  '.repeat(l) + index + '[' + t + ']: ' + '>' + c + '<' + (t === 'String' ? ' len: ' + c.length : ''));
            }
        }

        var s = stack === false ? 0 : stack;

        native(__line(s + 2));

        if (this !== true) {
            s += 1;
        }

        stack = false;

        args.forEach(function (d) {
            inner(d);
        });

        native.flush();

        return function () {

            var args = Array.prototype.slice.call(arguments, 0);

            if (limit !== false) {

                args = args.concat(limit + 1);
            }

            return log.stack(s).dump.apply(true, args);
        };
    };
})(native);

if (node) {

    module.exports = log;
}

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("detect-node");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("core-decorators");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _MainListVisible = __webpack_require__(44);

var _MainListVisible2 = _interopRequireDefault(_MainListVisible);

var _FormComponent = __webpack_require__(50);

var _FormComponent2 = _interopRequireDefault(_FormComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = void 0;

exports.default = routes = [{
    path: "/gui",
    component: _MainListVisible2.default,
    exact: true
}, {
    path: "/gui/create",
    component: _FormComponent2.default,
    exact: true
}, {
    path: "/gui/edit/:id",
    component: _FormComponent2.default,
    exact: true
}];

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _path = __webpack_require__(16);

var _path2 = _interopRequireDefault(_path);

var _fs = __webpack_require__(17);

var _fs2 = _interopRequireDefault(_fs);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _serializeJavascript = __webpack_require__(18);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

var _express = __webpack_require__(19);

var _express2 = _interopRequireDefault(_express);

var _jsonwebtoken = __webpack_require__(20);

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _compression = __webpack_require__(21);

var _compression2 = _interopRequireDefault(_compression);

var _bodyParser = __webpack_require__(22);

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _config = __webpack_require__(23);

var _config2 = _interopRequireDefault(_config);

var _public = __webpack_require__(4);

var _public2 = _interopRequireDefault(_public);

var _server = __webpack_require__(24);

var _server2 = _interopRequireDefault(_server);

var _RootServer = __webpack_require__(25);

var _RootServer2 = _interopRequireDefault(_RootServer);

var _configureStore = __webpack_require__(55);

var _configureStore2 = _interopRequireDefault(_configureStore);

var _reactRouter = __webpack_require__(9);

__webpack_require__(60);

var _server3 = __webpack_require__(61);

var _sourceMapSupport = __webpack_require__(62);

var _sourceMapSupport2 = _interopRequireDefault(_sourceMapSupport);

var _serveFavicon = __webpack_require__(63);

var _serveFavicon2 = _interopRequireDefault(_serveFavicon);

var _actions = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (false) {

    _sourceMapSupport2.default.install();
}

// import { ServerStyleSheet } from 'styled-components'

var host = _config2.default.server.host;
var port = _config2.default.server.port;

process.on('uncaughtException', function (e) {
    switch (true) {
        case e.code === 'EADDRINUSE' && e.errno === 'EADDRINUSE':
            process.stdout.write(('\naddress ' + host + ':' + port + ' already in use - server killed\n\n').red);
            break;
        case e.code === 'EACCES' && e.errno === 'EACCES':
            process.stdout.write(('\nno access to take ' + host + ':' + port + ' address - server killed - (use sudo)\n\n').red);
            break;
        default:
            throw e;
    }
});

var app = (0, _express2.default)();

app.use((0, _compression2.default)({ filter: function filter(req, res) {
        if (req.headers['x-no-compression']) {
            // don't compress responses with this request header
            return false;
        }

        // fallback to standard filter function
        return _compression2.default.filter(req, res);
    } }));

app.use((0, _serveFavicon2.default)(_path2.default.resolve(_config2.default.web, 'favicon.ico')));

app.use(_bodyParser2.default.urlencoded({ extended: false }));

app.use(_bodyParser2.default.json());

app.use(_express2.default.static(_config2.default.web));

// login & check token

var headerName = 'Authorization';
app.use(function (req, res, next) {

    try {
        if (req.body[_public2.default.jwt.loginHiddenInput.name] === _public2.default.jwt.loginHiddenInput.value) {

            var user = _server2.default.jwt.users.find(function (user) {
                return user.username === req.body.username && user.password === req.body.password;
            });

            if (user) {

                var payload = { // directly for loginSuccess redux action
                    username: user.username
                    // role and other
                };

                var token = _jsonwebtoken2.default.sign(payload, _server2.default.jwt.secret, {
                    expiresIn: _server2.default.jwt.tokenExpireAfter
                });

                if (_public2.default.jwt.postToGetReloadShortcut) {

                    if ((req.get('accept') || '').toLowerCase().split(',').indexOf('text/html') > -1) {

                        res.set('Content-Type', 'text/html');

                        return res.end('<script>try{localStorage.setItem(\'' + _public2.default.jwt.localStorageKey + '\',\'' + token + '\');location.href = location.href;}catch(e){document.write = "Error: Can\'t create localstorage session...";}</script>');
                    }
                }

                // res.setHeader(headerName, `Bearer ${token}`);

                // building __JWT_TOKEN__
                // to hydrate loginSuccess redux action
                res[headerName] = token;
            } else {

                // invalid credentials, in other words: login failed
                res[headerName] = false;
            }
        }
    } catch (e) {

        console.log('JWT login error', e);
    }

    // res.set('X-test', 'testvaluse');
    //
    // console.log('baseUrl', req.baseUrl);
    // console.log('url', req.url);
    // console.log('originalUrl', req.originalUrl);

    next();
});

app.use(function (req, res) {

    // read later: TTFB https://hackernoon.com/whats-new-with-server-side-rendering-in-react-16-9b0d78585d67#ee91
    // if we want to handle 301 or 404 i you shouldnt use TTFB

    var store = (0, _configureStore2.default)();

    // data received from authentication middleware
    var data = void 0;
    if (res[headerName] !== undefined) {

        data = res[headerName];

        if (data && data.token && data.payload) {

            store.dispatch((0, _actions.loginSuccess)(data));
        }
    }

    (0, _configureStore.fetchData)(req.url, store).then(function () {

        var context = {};

        // const sheet = new ServerStyleSheet();

        // let html = renderToString(sheet.collectStyles(<RootServer
        //     store={store}
        //     location={req.url}
        //     context={context}
        // />));

        var html = (0, _server3.renderToString)(_react2.default.createElement(_RootServer2.default, {
            store: store,
            location: req.url,
            context: context
        }));

        // https://www.styled-components.com/docs/advanced#server-side-rendering
        // const styleTags = sheet.getStyleTags();

        var htmlTemplate = _path2.default.resolve(_config2.default.app, 'index.server.html');

        htmlTemplate = _fs2.default.readFileSync(htmlTemplate).toString();

        // window.__PRELOADED_STATE__ = ${JSON.stringify(store.getState()).replace(/</g, '\\\\\u003c')};

        var scriptWithPayload = '';

        if (data !== undefined) {

            // it's gonna show only on response after post valid request to login
            scriptWithPayload = '<script>window.__JWT_TOKEN__ = ' + (0, _serializeJavascript2.default)(data) + ';</script>';
        }

        var replace = {
            html: html,
            // styleTags,
            // WARNING: See the following for security issues around embedding JSON in HTML:
            // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
            data: '<script>window.__PRELOADED_STATE__ = ' + (0, _serializeJavascript2.default)(store.getState()) + ';</script>' + scriptWithPayload
        };

        Object.keys(replace).forEach(function (i) {
            htmlTemplate = htmlTemplate.replace('{{' + i + '}}', replace[i]);
        });

        res.send(htmlTemplate);
    });
});

app.listen(port, host, function () {

    console.log(('\n \uD83C\uDF0E  [' + new Date().toISOString().replace(/^(\d{4}\-\d{2}\-\d{2})T(\d{2}:\d{2}:\d{2})\.\d*Z$/, '$1 $2') + '] Server is running ').green + (host + ':' + port + '\n').blue);
});

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("compression");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("./config.js");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("./../app/server.config.js");

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(5);

var _reactRouter = __webpack_require__(9);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Root = __webpack_require__(26);

var _Root2 = _interopRequireDefault(_Root);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RootServer = function RootServer(_ref) {
    var store = _ref.store,
        location = _ref.location,
        context = _ref.context;
    return _react2.default.createElement(
        _reactRedux.Provider,
        { store: store },
        _react2.default.createElement(
            _reactRouter.StaticRouter,
            { location: location, context: context },
            _react2.default.createElement(_Root2.default, null)
        )
    );
};

RootServer.propTypes = {
    store: _propTypes2.default.object.isRequired,
    location: _propTypes2.default.string.isRequired,
    context: _propTypes2.default.object.isRequired
};

exports.default = RootServer;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _GlobalLoaderVisible = __webpack_require__(27);

var _GlobalLoaderVisible2 = _interopRequireDefault(_GlobalLoaderVisible);

var _ContainerVisible = __webpack_require__(41);

var _ContainerVisible2 = _interopRequireDefault(_ContainerVisible);

var _LoginFormVisible = __webpack_require__(52);

var _LoginFormVisible2 = _interopRequireDefault(_LoginFormVisible);

var _reactRouterDom = __webpack_require__(7);

var _public = __webpack_require__(4);

var _public2 = _interopRequireDefault(_public);

var _semanticUiReact = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Root = function Root() {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_GlobalLoaderVisible2.default, null),
        _react2.default.createElement(
            _LoginFormVisible2.default,
            null,
            _react2.default.createElement(
                _reactRouterDom.Switch,
                null,
                _react2.default.createElement(_reactRouterDom.Route, { component: _ContainerVisible2.default })
            )
        )
    );
};

exports.default = Root;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _GlobalLoader = __webpack_require__(28);

var _GlobalLoader2 = _interopRequireDefault(_GlobalLoader);

var _reactRedux = __webpack_require__(5);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _actions = __webpack_require__(1);

var actions = _interopRequireWildcard(_actions);

var _reducers = __webpack_require__(2);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GlobalLoaderVisible = (_temp = _class = function (_Component) {
    _inherits(GlobalLoaderVisible, _Component);

    function GlobalLoaderVisible() {
        _classCallCheck(this, GlobalLoaderVisible);

        return _possibleConstructorReturn(this, (GlobalLoaderVisible.__proto__ || Object.getPrototypeOf(GlobalLoaderVisible)).apply(this, arguments));
    }

    _createClass(GlobalLoaderVisible, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                status = _props.status,
                msg = _props.msg;


            return _react2.default.createElement(_GlobalLoader2.default, this.props);
        }
    }]);

    return GlobalLoaderVisible;
}(_react.Component), _class.propTypes = {
    status: _propTypes2.default.oneOf(['on', 'off', 'err', 'msg']).isRequired,
    msg: _propTypes2.default.string.isRequired
}, _temp);


var mapStateToProps = function mapStateToProps(state) {
    return {
        status: (0, _reducers.getLoaderStatus)(state),
        msg: (0, _reducers.getLoaderMsg)(state),
        buttonsVisible: (0, _reducers.getLoaderButtonVisible)(state)
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, actions)(GlobalLoaderVisible);

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(29);

var _semanticUiReact = __webpack_require__(6);

var _classnames = __webpack_require__(10);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var visible = undefined;

var GlobalLoader = function (_Component) {
    _inherits(GlobalLoader, _Component);

    function GlobalLoader() {
        _classCallCheck(this, GlobalLoader);

        return _possibleConstructorReturn(this, (GlobalLoader.__proto__ || Object.getPrototypeOf(GlobalLoader)).apply(this, arguments));
    }

    _createClass(GlobalLoader, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            var _props = this.props,
                loaderButtonsShow = _props.loaderButtonsShow,
                loaderButtonsHide = _props.loaderButtonsHide;


            this.event = function (e) {
                if (e.keyCode === 192) {
                    console.log('visible', visible);
                    visible ? loaderButtonsHide() : loaderButtonsShow();
                }
            };

            try {
                document.addEventListener('keydown', this.event, true);
            } catch (e) {}
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            try {
                document && document.removeEventListener('keydown', this.event, true);
            } catch (e) {}
        }
    }, {
        key: 'componentWillUpdate',
        value: function componentWillUpdate(nextProps, nextState) {
            visible = nextProps.buttonsVisible;
        }
    }, {
        key: 'render',
        value: function render() {
            var _props2 = this.props,
                status = _props2.status,
                msg = _props2.msg;


            if (status === 'off') {

                return null;
            }

            if (status === 'err' || status === 'msg') {

                return _react2.default.createElement(
                    'div',
                    { className: (0, _classnames2.default)('global-loader-component', status) },
                    _react2.default.createElement(
                        'span',
                        null,
                        msg
                    )
                );
            }

            return _react2.default.createElement(
                'div',
                { className: 'global-loader-component load' },
                _react2.default.createElement(
                    'span',
                    null,
                    'Loading ...'
                )
            );
        }
    }]);

    return GlobalLoader;
}(_react.Component);

exports.default = GlobalLoader;

/***/ }),
/* 29 */
/***/ (function(module, exports) {



/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @author Szymon Działowski
 * @license MIT License (c) copyright 2017-present original author or authors
 * @homepage https://github.com/stopsopa/roderic
 */



var log = function () {
    try {
        if (console.log) {
            return function () {
                console.log.apply(this, Array.prototype.slice.call(arguments));
                return log;
            };
        }
    } catch (e) {
        return function () {
            return log;
        };
    }
}();

log.stack = function () {
    return log;
};

module.exports = log.dump = log.json = log.log = log;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fetchJson = exports.fetchData = exports.getUrl = exports.delay = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _public = __webpack_require__(4);

var config = _interopRequireWildcard(_public);

__webpack_require__(32);

var _delay = __webpack_require__(33);

var _delay2 = _interopRequireDefault(_delay);

var _transportFake = __webpack_require__(34);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var delay = exports.delay = config.delay;

var getUrl = exports.getUrl = function getUrl() {
    var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';


    if (/^https?:\/\//.test(path)) {

        return path;
    }

    return 'http://' + config.pingserver + path;
};

var fetchData = exports.fetchData = function fetchData(path) {
    for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        rest[_key - 1] = arguments[_key];
    }

    var ret = void 0;

    if ((0, _transportFake.fakeTest)(path)) {

        ret = (0, _transportFake.fakeReturn)(path);
    } else {

        var args = [getUrl(path)].concat(rest);

        ret = fetch.apply(undefined, _toConsumableArray(args)).then(function (res) {
            return res.ok ? res : Promise.reject({
                req: [].concat(_toConsumableArray(args)),
                res: res
            });
        });
    }

    return (0, _delay2.default)(delay || 0).then(function () {
        return ret;
    });
};

var fetchJson = exports.fetchJson = function fetchJson(path) {
    for (var _len2 = arguments.length, rest = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        rest[_key2 - 2] = arguments[_key2];
    }

    var opt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};


    opt.headers = _extends({}, opt.headers, {
        Accept: 'application/json'
    });

    return fetchData.apply(undefined, [path, opt].concat(rest)).then(function (res) {
        return res.json();
    });
};

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var delay = void 0;

exports.default = delay = function delay(time, data) {
    return new Promise(function (resolve) {
        return time ? setTimeout(resolve, time, data) : resolve(data);
    });
};

var reject = exports.reject = function reject(time, data) {
    return new Promise(function (resolve, reject) {
        return time ? setTimeout(reject, time, data) : reject(data);
    });
};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(log) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fakeReturn = exports.fakeTest = undefined;

var _public = __webpack_require__(4);

var _detectNode = __webpack_require__(12);

var _detectNode2 = _interopRequireDefault(_detectNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fake = [{
    path: /^\/pages$/,
    data: function data() {
        return Promise.resolve({
            "data": [{
                "_id": "58f762a2cbb458229c0974f8",
                "_created": "2017-04-19T14:14:10.074+01:00",
                "_modified": "2017-10-11T09:50:02.945+01:00",
                "url": "http://domain.com/api/v1/core/es/status",
                "interval": 1,
                "laststatus": 200
            }, {
                "_id": "58f762a8cbb458229c0974f9",
                "_created": "2017-04-19T14:14:16.75+01:00",
                "_modified": "2017-10-11T09:50:02.944+01:00",
                "url": "http://domain-b.com/api/v1/core/jr/status",
                "interval": 1,
                "laststatus": 404
            }, {
                "_id": "58f762adcbb458229c0974fa",
                "_created": "2017-04-19T14:14:21.299+01:00",
                "_modified": "2017-10-11T09:50:02.943+01:00",
                "url": "http://domain-c.com/api/v1/core/jr/status/content",
                "interval": 1,
                "laststatus": 200
            }, {
                "_id": "59162c35cbb4581e4d66769b",
                "_created": "2017-05-12T22:42:13.14+01:00",
                "_modified": "2017-10-11T09:50:02.943+01:00",
                "url": "http://domain-d.com",
                "interval": 1,
                "laststatus": 200
            }]
        });
    }
}];

var fakeTest = exports.fakeTest = function fakeTest(url) {

    if (_public.fake) {

        var tmp = void 0;

        try {

            Object.keys(fake).forEach(function (k) {
                if (fake[k].path.test(url)) {
                    tmp = k;
                    throw 'break';
                }
            });
        } catch (e) {}

        return tmp;
    }

    return false;
};
var fakeReturn = exports.fakeReturn = function fakeReturn(url) {
    for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        rest[_key - 1] = arguments[_key];
    }

    var key = fakeTest(url);

    if (key) {

        _detectNode2.default && log.dump('fakeReturn(), path: ' + fake[key].path + ' url: "' + url + '"');

        var ret = {};

        ret.json = function () {
            var _fake$key;

            return (_fake$key = fake[key]).data.apply(_fake$key, rest);
        };

        return Promise.resolve(ret);
    }
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getLoaderButtonVisible = exports.getLoading = exports.getLoaderMsg = exports.getLoaderStatus = undefined;

var _redux = __webpack_require__(8);

var _actions = __webpack_require__(1);

var status = function status() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'off';
    var action = arguments[1];

    switch (action.type) {
        case _actions.LOADER_ON:
            return 'on';
        case _actions.LOADER_ERROR:
            return 'err';
        case _actions.LOADER_OFF:
            return 'off';
        case _actions.LOADER_MESSAGE:
            return 'msg';
        default:
            return state;
    }
};

var msg = function msg() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var action = arguments[1];

    switch (action.type) {
        case _actions.LOADER_ERROR:
        case _actions.LOADER_MESSAGE:
            return action.msg;
        default:
            return state;
    }
};

var show = function show() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var action = arguments[1];

    switch (action.type) {
        case _actions.LOADER_BUTTONS_SHOW:
            return true;
        case _actions.LOADER_BUTTONS_HIDE:
            return false;
        default:
            return state;
    }
};

exports.default = (0, _redux.combineReducers)({
    status: status,
    msg: msg,
    show: show
});

// selectors

var getLoaderStatus = exports.getLoaderStatus = function getLoaderStatus(state) {
    return state.status;
};

var getLoaderMsg = exports.getLoaderMsg = function getLoaderMsg(state) {
    return state.msg;
};

var getLoading = exports.getLoading = function getLoading(state) {
    return getLoaderStatus(state) === 'on';
};

var getLoaderButtonVisible = exports.getLoaderButtonVisible = function getLoaderButtonVisible(state) {
    return state.show;
};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getStatusColor = exports.getDel = exports.getById = exports.getIds = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _redux = __webpack_require__(8);

var _actions = __webpack_require__(1);

var byId = function byId() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];


    switch (action.type) {

        case _actions.FETCH_LIST_SUCCESS:

            var nextState = _extends({}, state);

            action.list.forEach(function (task) {
                nextState[task._id] = task;
            });

            return nextState;
        default:
            return state;
    }
};

var ids = function ids() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var action = arguments[1];

    switch (action.type) {
        case _actions.FETCH_LIST_SUCCESS:
            return action.list.map(function (task) {
                return task._id;
            });
        default:
            return state;
    }
};

var del = function del() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var action = arguments[1];

    switch (action.type) {
        case _actions.LIST_DELETE_SHOW:
            return action.id;
        case _actions.LIST_DELETE_CANCEL:
        case _actions.LIST_DELETE_DELETE:
            return null;
        default:
            return state;
    }
};

exports.default = (0, _redux.combineReducers)({
    byId: byId,
    ids: ids,
    del: del
});
var getIds = exports.getIds = function getIds(state) {
    return state.ids;
};

var getById = exports.getById = function getById(state, id) {

    if (state && state.byId) {

        return state.byId[id];
    }
};

var getDel = exports.getDel = function getDel(state) {
    return state.del;
};

/**
 * @param state
 * @returns {boolean} - if true - then there is at least one error
 */
var getStatusColor = exports.getStatusColor = function getStatusColor(state) {

    var ids = getIds(state);

    var find = ids.find(function (id) {

        var item = getById(state, id);

        if (item && item.laststatus !== 200) {

            return true;
        }

        return false;
    });

    var status = !!find;

    return status;
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getValue = exports.getUrl = exports.getInterval = exports.getStatus = undefined;

var _redux = __webpack_require__(8);

var _actions = __webpack_require__(1);

var laststatus = function (def) {
    return function () {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : def;
        var action = arguments[1];

        switch (action.type) {
            case _actions.FORM_ITEM_STATUS_CHANGE:
                return parseInt(action.value, 10) || 0;
            case _actions.FORM_ITEM_FETCH_SUCCESS:
                return action.data.laststatus;
            case _actions.FORM_ITEM_STATUS_RESET:
                return def;
            default:
                return state;
        }
    };
}(0);

var interval = function (def) {
    return function () {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : def;
        var action = arguments[1];

        switch (action.type) {
            case _actions.FORM_ITEM_INTERVAL_CHANGE:
                return parseInt(action.value, 10) || 1;
            case _actions.FORM_ITEM_FETCH_SUCCESS:
                return action.data.interval;
            case _actions.FORM_ITEM_INTERVAL_RESET:
                return def;
            default:
                return state;
        }
    };
}(1);

var url = function (def) {
    return function () {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : def;
        var action = arguments[1];

        switch (action.type) {
            case _actions.FORM_ITEM_URL_CHANGE:
                return action.value;
            case _actions.FORM_ITEM_FETCH_SUCCESS:
                return action.data.url;
            case _actions.FORM_ITEM_URL_RESET:
                return def;
            default:
                return state;
        }
    };
}('http://');

exports.default = (0, _redux.combineReducers)({
    laststatus: laststatus,
    interval: interval,
    url: url
});
var getStatus = exports.getStatus = function getStatus(state) {
    return state.status;
};
var getInterval = exports.getInterval = function getInterval(state) {
    return state.interval;
};
var getUrl = exports.getUrl = function getUrl(state) {
    return state.url;
};

var getValue = exports.getValue = function getValue(state, key) {
    return state[key];
};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getLoginError = exports.getUser = exports.getAuthenticated = undefined;

var _actions = __webpack_require__(1);

var _public = __webpack_require__(4);

var _public2 = _interopRequireDefault(_public);

var _redux = __webpack_require__(8);

var _detectNode = __webpack_require__(12);

var _detectNode2 = _interopRequireDefault(_detectNode);

var _jwtExtractPayload = __webpack_require__(39);

var _jwtExtractPayload2 = _interopRequireDefault(_jwtExtractPayload);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var jwtPayload = function jwtPayload() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];

    switch (action.type) {
        case _actions.LOGIN_SUCCESS:

            // {
            //     type: // aciton type
            //     payload: // jwt token (string)
            // }

            if (!_detectNode2.default) {

                try {
                    localStorage.setItem(_public2.default.jwt.localStorageKey, action.payload);
                } catch (e) {
                    console.error('Failed to setup localStorage jwt token', e);
                }
            }

            if (typeof action.payload === 'string') {

                // https://stackoverflow.com/a/38552302/5560682
                action.payload = (0, _jwtExtractPayload2.default)(action.payload);
            } else {
                throw "Wrong type of JWT token";
            }

            return action.payload;
        case _actions.LOGIN_SIGNOUT:

            if (!_detectNode2.default) {

                try {
                    localStorage.removeItem(_public2.default.jwt.localStorageKey);
                } catch (e) {
                    console.error('Failed to setup localStorage jwt token', e);
                }
            }

            return {};
        default:
            return state;
    }
};

var authError = function authError() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var action = arguments[1];

    switch (action.type) {
        case _actions.LOGIN_FAILURE:
            return action.payload.message;
        default:
            return state;
    }
};

exports.default = (0, _redux.combineReducers)({
    jwtPayload: jwtPayload,
    authError: authError
});
var getAuthenticated = exports.getAuthenticated = function getAuthenticated(state) {

    for (var k in state.jwtPayload) {

        return true;
    }

    return false;
};

var getUser = exports.getUser = function getUser(state) {
    return state.jwtPayload;
};

var getLoginError = exports.getLoginError = function getLoginError(state) {
    return state.authError;
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var node = typeof global !== 'undefined' && Object.prototype.toString.call(global.process) === '[object process]';

module.exports = function (token) {

    if (typeof token === 'string') {

        // https://stackoverflow.com/a/38552302/5560682
        try {

            token = token.split('.')[1];

            token = token.replace('-', '+').replace('_', '/');

            if (node) {

                token = Buffer.from(token, 'base64'); // https://stackoverflow.com/a/14573049/5560682
            } else {

                if (!window || !window.atob) {

                    throw "window.atob not exist";
                }

                token = window.atob(token);
            }

            return JSON.parse(token);
        } catch (e) {

            throw 'JWT payload extracting error';
        }
    }

    return token;
};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getInterval = undefined;

var _actions = __webpack_require__(1);

var refreshInterval = function refreshInterval() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 60000;
    var action = arguments[1];

    switch (action.type) {
        case _actions.REFRESH_INTERVAL_SET:
            return action.payload;
        default:
            return state;
    }
};

exports.default = refreshInterval;

// selectors

var getInterval = exports.getInterval = function getInterval(state) {
    return state;
};

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(log) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(5);

var _coreDecorators = __webpack_require__(13);

var _actions = __webpack_require__(1);

var actions = _interopRequireWildcard(_actions);

var _NaviVisible = __webpack_require__(42);

var _NaviVisible2 = _interopRequireDefault(_NaviVisible);

var _classnames = __webpack_require__(10);

var _classnames2 = _interopRequireDefault(_classnames);

var _reducers = __webpack_require__(2);

var _routes = __webpack_require__(14);

var _routes2 = _interopRequireDefault(_routes);

var _semanticUiReact = __webpack_require__(6);

var _reactRouterDom = __webpack_require__(7);

__webpack_require__(51);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ContainerVisible = function (_Component) {
    _inherits(ContainerVisible, _Component);

    function ContainerVisible() {
        _classCallCheck(this, ContainerVisible);

        return _possibleConstructorReturn(this, (ContainerVisible.__proto__ || Object.getPrototypeOf(ContainerVisible)).apply(this, arguments));
    }

    _createClass(ContainerVisible, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                loginSignOut = _props.loginSignOut,
                history = _props.history,
                interval = _props.interval,
                refreshIntervalSet = _props.refreshIntervalSet,
                status = _props.status,
                on = _props.on;


            var link = document.querySelector("link[rel*='icon']");

            if (status) {

                link.href = '/favicon_red.ico';
            } else {

                log('on', on);

                if (on === 'on') {

                    link.href = '/favicon_green.ico';
                } else {

                    link.href = '/favicon.ico';
                }
            }

            return _react2.default.createElement(
                'div',
                { className: 'main-container' },
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        _semanticUiReact.Menu,
                        { inverted: true },
                        _react2.default.createElement(
                            _semanticUiReact.Menu.Item,
                            { onClick: function onClick() {
                                    return history.push('/gui');
                                } },
                            _react2.default.createElement('img', {
                                src: '/ping.ico',
                                alt: 'logo'
                            }),
                            _react2.default.createElement(
                                'span',
                                { className: 'mobile' },
                                'Ping service'
                            )
                        ),
                        _react2.default.createElement(
                            _semanticUiReact.Menu.Item,
                            { onClick: function onClick() {
                                    return history.push('/gui/create');
                                } },
                            _react2.default.createElement(_semanticUiReact.Icon, { name: 'plus' }),
                            _react2.default.createElement(
                                'span',
                                { className: 'mobile' },
                                'Create'
                            )
                        ),
                        _react2.default.createElement(
                            _semanticUiReact.Menu.Item,
                            null,
                            _react2.default.createElement('input', { type: 'range', min: '2000', max: '60000', step: '100', value: interval, onChange: function onChange(e) {
                                    return refreshIntervalSet(parseInt(e.target.value, 10));
                                } }),
                            ' ',
                            interval / 1000,
                            ' sec'
                        ),
                        _react2.default.createElement(
                            _semanticUiReact.Menu.Item,
                            { position: 'right', className: (0, _classnames2.default)('indicator', {
                                    'red': status
                                }) },
                            _react2.default.createElement('div', null)
                        ),
                        _react2.default.createElement(
                            _semanticUiReact.Menu.Item,
                            { position: 'right', onClick: loginSignOut, className: 'sign-out' },
                            _react2.default.createElement(_semanticUiReact.Icon, { name: 'power' }),
                            _react2.default.createElement(
                                'span',
                                { className: 'mobile' },
                                'Sign out'
                            )
                        )
                    )
                ),
                _react2.default.createElement(_NaviVisible2.default, null),
                _react2.default.createElement(
                    'div',
                    { className: 'content' },
                    _react2.default.createElement(
                        _reactRouterDom.Switch,
                        null,
                        _routes2.default.map(function (route, i) {
                            return _react2.default.createElement(_reactRouterDom.Route, _extends({ key: i }, route));
                        }),
                        _react2.default.createElement(_reactRouterDom.Route, { render: function render() {
                                return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/gui' });
                            } })
                    )
                )
            );
        }
    }]);

    return ContainerVisible;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
    return {
        on: (0, _reducers.getLoaderStatus)(state),
        interval: (0, _reducers.getInterval)(state),
        status: (0, _reducers.getStatusColor)(state)
    };
};

exports.default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps, actions)(ContainerVisible));
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Navi = __webpack_require__(43);

var _Navi2 = _interopRequireDefault(_Navi);

var _reactRedux = __webpack_require__(5);

var _actions = __webpack_require__(1);

var actions = _interopRequireWildcard(_actions);

var _reducers = __webpack_require__(2);

var _reactRouterDom = __webpack_require__(7);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
    return {
        on: (0, _reducers.getLoaderStatus)(state),
        buttonsVisible: (0, _reducers.getLoaderButtonVisible)(state)
        // list    : getList(state)
    };
};

exports.default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps, actions)(_Navi2.default));

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(6);

var _reactRouterDom = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Navi = function Navi(_ref) {
    var on = _ref.on,
        loaderOn = _ref.loaderOn,
        loaderOff = _ref.loaderOff,
        loaderError = _ref.loaderError,
        loaderMessage = _ref.loaderMessage,
        buttonsVisible = _ref.buttonsVisible;
    return buttonsVisible ? _react2.default.createElement(
        'div',
        { className: 'navi' },
        buttonsVisible && _react2.default.createElement(
            _semanticUiReact.Button.Group,
            { size: 'mini' },
            _react2.default.createElement(
                _semanticUiReact.Button,
                {
                    size: 'mini',
                    onClick: loaderOn,
                    disabled: on === 'on'
                },
                'on'
            ),
            _react2.default.createElement(
                _semanticUiReact.Button,
                {
                    size: 'mini',
                    color: 'red',
                    onClick: function onClick() {
                        return loaderError("Server error example ...");
                    },
                    disabled: on === 'on'
                },
                'err'
            ),
            _react2.default.createElement(
                _semanticUiReact.Button,
                {
                    size: 'mini',
                    color: 'green',
                    onClick: function onClick() {
                        return loaderMessage("Example message ...");
                    },
                    disabled: on === 'on'
                },
                'msg'
            ),
            _react2.default.createElement(
                _semanticUiReact.Button,
                {
                    size: 'mini',
                    onClick: loaderOff,
                    disabled: on === 'off'
                },
                'off'
            )
        )
    ) : null;
};

exports.default = Navi;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _MainList = __webpack_require__(45);

var _MainList2 = _interopRequireDefault(_MainList);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(5);

var _actions = __webpack_require__(1);

var actions = _interopRequireWildcard(_actions);

var _reducers = __webpack_require__(2);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MainListVisible = (_temp2 = _class = function (_Component) {
    _inherits(MainListVisible, _Component);

    function MainListVisible() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, MainListVisible);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MainListVisible.__proto__ || Object.getPrototypeOf(MainListVisible)).call.apply(_ref, [this].concat(args))), _this), _this.getData = function () {
            var fetchList = _this.props.fetchList;


            return fetchList();
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(MainListVisible, [{
        key: 'componentDidMount',
        value: function componentDidMount() {

            this.getData();

            this.mount();
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            this.mount();
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.unmount();
        }
    }, {
        key: 'unmount',
        value: function unmount() {

            if (this.handler) {

                clearInterval(this.handler);
            }
        }
    }, {
        key: 'mount',
        value: function mount() {

            this.unmount();

            this.handler = setInterval(this.getData, this.props.interval);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_MainList2.default, this.props);
        }
    }]);

    return MainListVisible;
}(_react.Component), _class.propTypes = {
    on: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.bool]).isRequired,
    list: _propTypes2.default.array.isRequired,
    del: _propTypes2.default.any
}, _class.fetchData = function (store, routerParams) {

    // log('MainListVisible::fetchData()');

    return store.dispatch(actions.fetchList());
}, _temp2);


var mapStateToProps = function mapStateToProps(state) {
    return {
        on: (0, _reducers.getLoaderStatus)(state),
        list: (0, _reducers.getList)(state),
        del: (0, _reducers.getDelElement)(state),
        interval: (0, _reducers.getInterval)(state)
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, actions)(MainListVisible);

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _range = __webpack_require__(46);

var _range2 = _interopRequireDefault(_range);

var _FacebookPlaceholder = __webpack_require__(47);

var _FacebookPlaceholder2 = _interopRequireDefault(_FacebookPlaceholder);

var _semanticUiReact = __webpack_require__(6);

var _reactRouterDom = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var date = function date(str) {

    var tmp = str.replace(/^(\d{4}-\d{2}-\d{2})T(\d{2}:\d{2}:\d{2})\.\d{1,3}\+\d{2}:\d{2}$/, '$1 $2');

    if (str === tmp) {

        return '---';
    }

    return tmp;
};

var MainList = function MainList(_ref) {
    var on = _ref.on,
        list = _ref.list,
        del = _ref.del,
        showDelete = _ref.showDelete,
        cancelDelete = _ref.cancelDelete,
        deleteElementFromList = _ref.deleteElementFromList;


    if (on === 'on' && !list.length) {

        return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                _semanticUiReact.Header,
                { as: 'h1' },
                'List of endpoints'
            ),
            _react2.default.createElement(
                _semanticUiReact.List,
                { divided: true, relaxed: true },
                (0, _range2.default)(1, 6).map(function (i) {
                    return _react2.default.createElement(
                        _semanticUiReact.List.Item,
                        { key: i },
                        _react2.default.createElement(
                            _FacebookPlaceholder2.default,
                            null,
                            _react2.default.createElement(_FacebookPlaceholder2.default.box, { className: 'icon' }),
                            _react2.default.createElement(_FacebookPlaceholder2.default.p, { numberOfWords: 20, wordLength: 5 }),
                            _react2.default.createElement(_FacebookPlaceholder2.default.p, { numberOfWords: 5 })
                        )
                    );
                })
            )
        );
    }

    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            _semanticUiReact.Header,
            { as: 'h1' },
            'List of endpoints'
        ),
        _react2.default.createElement(
            'div',
            { className: 'table' },
            list.map(function (item) {
                return _react2.default.createElement(
                    'div',
                    { className: 'cell', key: item._id },
                    _react2.default.createElement(
                        'div',
                        { className: 'ico' },
                        _react2.default.createElement(_semanticUiReact.Icon, { name: 'feed' })
                    ),
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(
                            'div',
                            { className: 'tico' },
                            _react2.default.createElement(
                                _semanticUiReact.Label,
                                {
                                    className: 'right',
                                    size: 'mini',
                                    color: item.laststatus == 200 ? 'teal' : 'red'
                                },
                                item.laststatus
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'ttop' },
                            _react2.default.createElement(
                                'b',
                                null,
                                'Modified:'
                            ),
                            ' ',
                            date(item._modified),
                            ', ',
                            _react2.default.createElement(
                                'b',
                                null,
                                'Created:'
                            ),
                            ' ',
                            date(item._created)
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'tbottom' },
                            _react2.default.createElement(
                                'a',
                                { href: item.url, target: '_blank' },
                                item.url
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'actions' },
                        _react2.default.createElement(
                            _semanticUiReact.Button.Group,
                            { size: 'mini' },
                            _react2.default.createElement(
                                _reactRouterDom.Link,
                                { to: '/gui/edit/' + item._id },
                                _react2.default.createElement(_semanticUiReact.Popup, {
                                    trigger: _react2.default.createElement(_semanticUiReact.Button, {
                                        icon: 'edit',
                                        size: 'mini',
                                        disabled: on === 'on'
                                    }),
                                    content: 'Edit',
                                    inverted: true,
                                    size: 'mini',
                                    position: 'top center'
                                })
                            ),
                            _react2.default.createElement(_semanticUiReact.Popup, {
                                trigger: _react2.default.createElement(_semanticUiReact.Button, {
                                    color: 'red',
                                    icon: 'trash outline',
                                    size: 'mini',
                                    onClick: function onClick() {
                                        return showDelete(item._id);
                                    },
                                    disabled: on === 'on'
                                }),
                                content: 'Delete',
                                inverted: true,
                                size: 'mini',
                                position: 'top center'
                            })
                        )
                    )
                );
            })
        ),
        _react2.default.createElement(
            _semanticUiReact.Modal,
            {
                basic: true,
                size: 'small',
                dimmer: 'blurring',
                open: !!del,
                onClose: cancelDelete
            },
            _react2.default.createElement(_semanticUiReact.Header, { icon: 'trash outline', content: 'Delete endpoint' }),
            _react2.default.createElement(
                _semanticUiReact.Modal.Content,
                null,
                _react2.default.createElement(
                    'p',
                    null,
                    'Do you really want to delete checking endpoint'
                ),
                _react2.default.createElement(
                    'pre',
                    null,
                    del ? del.url : ''
                ),
                _react2.default.createElement(
                    'p',
                    null,
                    '?'
                )
            ),
            _react2.default.createElement(
                _semanticUiReact.Modal.Actions,
                null,
                _react2.default.createElement(
                    _semanticUiReact.Button,
                    {
                        color: 'red',
                        onClick: function onClick() {
                            return deleteElementFromList(del._id);
                        }
                    },
                    _react2.default.createElement(_semanticUiReact.Icon, { name: 'trash outline' }),
                    ' Yes'
                ),
                _react2.default.createElement(
                    _semanticUiReact.Button,
                    {
                        basic: true,
                        color: 'green',
                        inverted: true,
                        onClick: cancelDelete
                    },
                    _react2.default.createElement(_semanticUiReact.Icon, { name: 'remove' }),
                    ' No'
                )
            )
        )
    );
};
MainList.propTypes = {
    on: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.bool]).isRequired,
    list: _propTypes2.default.array.isRequired,
    del: _propTypes2.default.any,
    showDelete: _propTypes2.default.func,
    onCancelDelete: _propTypes2.default.func,
    deleteElementFromList: _propTypes2.default.func
};

exports.default = MainList;

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = require("lodash/range");

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _trim = __webpack_require__(48);

var _trim2 = _interopRequireDefault(_trim);

__webpack_require__(49);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var FacebookPlaceholder = function FacebookPlaceholder(_ref) {
    var children = _ref.children,
        rest = _objectWithoutProperties(_ref, ['children']);

    return _react2.default.createElement(
        'div',
        _extends({ className: 'facebook-paragraph' }, rest),
        children
    );
};

FacebookPlaceholder.p = function (_ref2) {
    var children = _ref2.children,
        numberOfWords = _ref2.numberOfWords,
        wordLength = _ref2.wordLength,
        rest = _objectWithoutProperties(_ref2, ['children', 'numberOfWords', 'wordLength']);

    var newChildren = [];

    if (typeof numberOfWords !== 'undefined') {

        numberOfWords = parseInt(numberOfWords, 10);

        if (numberOfWords < 1) {

            throw 'numberOfWords can\'t be negative or equal 0, given value is: \'' + numberOfWords + '\'';
        }

        if (typeof wordLength === 'undefined') {

            wordLength = 8;
        } else {

            wordLength = parseInt(wordLength, 10);
        }

        if (wordLength < 1) {

            throw 'wordLength can\'t be negative or equal 0, given value is: \'' + wordLength + '\'';
        }

        var word = '_'.repeat(wordLength);

        children = (word + ' ').repeat(numberOfWords);
    }

    if (typeof children === 'string') {

        (children.split(/\s+/gi) || []).map(function (word, i) {
            newChildren.push(_react2.default.createElement(
                'span',
                { key: 'p-' + i, className: 'p' },
                word
            ));
            newChildren.push(_react2.default.createElement(
                'span',
                { key: 's-' + i, className: 's' },
                ' '
            ));
        });
    }

    return _react2.default.createElement(
        'p',
        rest,
        newChildren
    );
};
FacebookPlaceholder.p.propTypes = {
    children: _propTypes2.default.string,
    wordLength: _propTypes2.default.number,
    numberOfWords: _propTypes2.default.number
};

(function (d) {
    Object.keys(d).forEach(function (k) {
        FacebookPlaceholder[k] = function (_ref3) {
            var className = _ref3.className,
                rest = _objectWithoutProperties(_ref3, ['className']);

            var cn = className || '';

            cn += ' ' + d[k];

            cn = (0, _trim2.default)(cn);

            return _react2.default.createElement('div', _extends({ className: cn }, rest));
        };
        FacebookPlaceholder[k].propTypes = {
            className: _propTypes2.default.string
        };
    });
})({
    box: 'fp-box',
    belt: 'fp-belt'
});

exports.default = FacebookPlaceholder;

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = require("lodash/trim");

/***/ }),
/* 49 */
/***/ (function(module, exports) {



/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _desc, _value, _class, _class2, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(5);

var _actions = __webpack_require__(1);

var actions = _interopRequireWildcard(_actions);

var _reducers = __webpack_require__(2);

var _coreDecorators = __webpack_require__(13);

var _reactRouterDom = __webpack_require__(7);

var _semanticUiReact = __webpack_require__(6);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

var FormComponent = (_class = (_temp = _class2 = function (_Component) {
    _inherits(FormComponent, _Component);

    function FormComponent() {
        var _ref;

        _classCallCheck(this, FormComponent);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        var _this = _possibleConstructorReturn(this, (_ref = FormComponent.__proto__ || Object.getPrototypeOf(FormComponent)).call.apply(_ref, [this].concat(args)));

        _this.state = {
            submitting: false,
            redirect: false,
            lasturl: null
        };
        return _this;
    }

    _createClass(FormComponent, [{
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            this.checkReset();
        }
    }, {
        key: 'checkReset',
        value: function checkReset() {

            var last = this.state.lasturl;

            var pathname = this.props.location.pathname;


            if (last !== pathname) {

                if (pathname === '/gui/create') {
                    var formReset = this.props.formReset;


                    formReset();
                }

                this.setState({
                    lasturl: pathname
                });
            }
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var id = this.props.match.params.id;
            var formItemFetchRequest = this.props.formItemFetchRequest;


            if (id) {

                formItemFetchRequest(id);
            }

            this.checkReset();
        }
    }, {
        key: 'send',
        value: function send() {
            var _this2 = this;

            var id = this.props.match.params.id;
            var formSubmit = this.props.formSubmit;


            this.setState({
                submitting: true
            });

            formSubmit(id).then(function (status) {
                _this2.setState({
                    submitting: false,
                    redirect: status === 'error' ? false : status
                });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var id = this.props.match.params.id;
            var _props = this.props,
                status = _props.status,
                formChangeInterval = _props.formChangeInterval,
                formChangeStatus = _props.formChangeStatus,
                formChangeUrl = _props.formChangeUrl,
                history = _props.history;


            if (this.state.redirect) {

                history.push('/gui');

                return null;
            }

            var content = void 0;

            if (id && status === 'on' && !this.state.submitting) {

                content = _react2.default.createElement(
                    'div',
                    null,
                    'populating data ...'
                );
            } else {
                content = _react2.default.createElement(
                    _semanticUiReact.Form,
                    {
                        onSubmit: this.send
                    },
                    _react2.default.createElement(
                        _semanticUiReact.Form.Field,
                        null,
                        _react2.default.createElement(
                            'label',
                            null,
                            'Url:'
                        ),
                        _react2.default.createElement('input', {
                            placeholder: 'http://',
                            value: this.props.url,
                            onChange: function onChange(e) {
                                return formChangeUrl(e.target.value);
                            },
                            disabled: status === 'on'
                        })
                    ),
                    _react2.default.createElement(
                        _semanticUiReact.Form.Field,
                        null,
                        _react2.default.createElement(
                            'label',
                            null,
                            'Interval'
                        ),
                        _react2.default.createElement('input', {
                            value: this.props.interval,
                            onChange: function onChange(e) {
                                return formChangeInterval(e.target.value);
                            },
                            disabled: status === 'on'
                        })
                    ),
                    _react2.default.createElement(
                        _semanticUiReact.Form.Field,
                        null,
                        _react2.default.createElement(
                            'label',
                            null,
                            'Last status'
                        ),
                        _react2.default.createElement('input', {
                            value: this.props.laststatus,
                            onChange: function onChange(e) {
                                return formChangeStatus(e.target.value);
                            },
                            disabled: status === 'on'
                        })
                    ),
                    _react2.default.createElement(
                        _semanticUiReact.Button,
                        {
                            type: 'submit',
                            disabled: status === 'on'
                        },
                        id ? 'Save' : 'Create'
                    )
                );
            }

            return _react2.default.createElement(
                'div',
                { className: 'capone' },
                _react2.default.createElement(
                    _semanticUiReact.Header,
                    { as: 'h1' },
                    id ? "Editing" : "Creating",
                    ' ',
                    "endpoint"
                ),
                content
            );
        }
    }]);

    return FormComponent;
}(_react.Component), _class2.propTypes = {
    status: _propTypes2.default.oneOf(['on', 'off', 'err', 'msg']).isRequired
}, _temp), (_applyDecoratedDescriptor(_class.prototype, 'checkReset', [_coreDecorators.autobind], Object.getOwnPropertyDescriptor(_class.prototype, 'checkReset'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'send', [_coreDecorators.autobind], Object.getOwnPropertyDescriptor(_class.prototype, 'send'), _class.prototype)), _class);
exports.default = (0, _reactRedux.connect)(function (state) {
    return _extends({
        status: (0, _reducers.getLoaderStatus)(state)
    }, (0, _reducers.getFormData)(state));
}, actions)(FormComponent);

/***/ }),
/* 51 */
/***/ (function(module, exports) {



/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(5);

var _LoginForm = __webpack_require__(53);

var _LoginForm2 = _interopRequireDefault(_LoginForm);

var _actions = __webpack_require__(1);

var _reducers = __webpack_require__(2);

var _public = __webpack_require__(4);

var _public2 = _interopRequireDefault(_public);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
    return {
        authenticated: (0, _reducers.getAuthenticated)(state),
        loading: (0, _reducers.getLoading)(state),
        error: (0, _reducers.getLoginError)(state),

        action: _public2.default.jwt.loginUrl,
        redirectAfterAuthenticated: _public2.default.jwt.redirectAfterAuthenticated
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, {
    onSignOut: _actions.loginSignOut
})(_LoginForm2.default);

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _public = __webpack_require__(4);

var _public2 = _interopRequireDefault(_public);

var _classnames = __webpack_require__(10);

var _classnames2 = _interopRequireDefault(_classnames);

var _reactRouterDom = __webpack_require__(7);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _semanticUiReact = __webpack_require__(6);

__webpack_require__(54);

var _reducers = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var node = Object.prototype.toString.call(global.process) === '[object process]';

var LoginForm = (_temp = _class = function (_Component) {
    _inherits(LoginForm, _Component);

    function LoginForm() {
        var _ref;

        _classCallCheck(this, LoginForm);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        var _this = _possibleConstructorReturn(this, (_ref = LoginForm.__proto__ || Object.getPrototypeOf(LoginForm)).call.apply(_ref, [this].concat(args)));

        _this.onChange = function (e, name) {
            return _this.setState(_defineProperty({}, name, e.target.value));
        };

        _this.render = function () {
            var _this$props = _this.props,
                loading = _this$props.loading,
                error = _this$props.error,
                action = _this$props.action,
                redirectAfterAuthenticated = _this$props.redirectAfterAuthenticated,
                authenticated = _this$props.authenticated,
                loginRequest = _this$props.loginRequest;


            var content = null;

            if (authenticated) {

                node || document.body.classList.remove('login-form');

                return _this.props.children || _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        _semanticUiReact.Button,
                        { size: 'tiny', onClick: _this.props.onSignOut },
                        _react2.default.createElement(_semanticUiReact.Icon, { name: 'log out' }),
                        ' Sign out'
                    )
                );
            } else {

                if (!node && location.pathname !== action) {

                    return _react2.default.createElement(_reactRouterDom.Redirect, { to: action });
                }

                node || document.body.classList.add('login-form');

                content = _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        _semanticUiReact.Header,
                        { as: 'h2' },
                        'Log-in to your account.'
                    ),
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(
                            _semanticUiReact.Form,
                            {
                                action: action,
                                size: 'mini',
                                disabled: loading,
                                method: 'POST'
                            },
                            _react2.default.createElement(
                                _semanticUiReact.Form.Field,
                                null,
                                _react2.default.createElement(
                                    'label',
                                    { htmlFor: 'username' },
                                    'First Name'
                                ),
                                _react2.default.createElement(_semanticUiReact.Input, {
                                    name: 'username',
                                    placeholder: 'Username',
                                    autoComplete: 'username',
                                    autoCorrect: 'off',
                                    spellCheck: 'false',
                                    required: true,
                                    loading: loading,
                                    disabled: loading,
                                    icon: 'user',
                                    iconPosition: 'left',
                                    onChange: function onChange(e) {
                                        return _this.onChange(e, 'username');
                                    },
                                    error: !!error
                                })
                            ),
                            _react2.default.createElement(
                                _semanticUiReact.Form.Field,
                                null,
                                _react2.default.createElement(
                                    'label',
                                    { htmlFor: 'password' },
                                    'Password'
                                ),
                                _react2.default.createElement(_semanticUiReact.Input, {
                                    ref: function ref(input) {
                                        return _this.password = input;
                                    },
                                    name: 'password',
                                    type: 'password',
                                    placeholder: 'Password',
                                    autoComplete: 'password',
                                    autoCorrect: 'off',
                                    spellCheck: 'false',
                                    required: true,
                                    loading: loading,
                                    disabled: loading,
                                    icon: 'lock',
                                    iconPosition: 'left',
                                    onChange: function onChange(e) {
                                        return _this.onChange(e, 'password');
                                    },
                                    error: !!error
                                })
                            ),
                            error && _react2.default.createElement(
                                _semanticUiReact.Message,
                                {
                                    negative: true,
                                    size: 'tiny',
                                    color: 'red'
                                },
                                _react2.default.createElement(_semanticUiReact.Icon, { name: 'warning sign' }),
                                error
                            ),
                            _react2.default.createElement(
                                _semanticUiReact.Button,
                                {
                                    type: 'submit',
                                    size: 'mini',
                                    primary: !loading,
                                    disabled: loading
                                },
                                'Login'
                            ),
                            _react2.default.createElement('input', {
                                type: 'hidden',
                                name: _public2.default.jwt.loginHiddenInput.name,
                                value: _public2.default.jwt.loginHiddenInput.value
                            })
                        )
                    )
                );
            }

            return _react2.default.createElement(
                'section',
                { className: (0, _classnames2.default)('login-form-section', { 'shake': !!error }) },
                content
            );
        };

        _this.state = {
            password: '',
            username: ''
        };
        return _this;
    }

    _createClass(LoginForm, [{
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            document.body.classList.remove('login-form');
        }
        // onSubmit = e => {
        //
        //     e.preventDefault();
        //
        //     const {
        //         loginRequest
        //     } = this.props;
        //
        //     loginRequest(this.state.username, this.state.password);
        // }

    }]);

    return LoginForm;
}(_react.Component), _class.fetchData = function (store, routerParams) {
    return Promise.resolve();
}, _class.propTypes = {
    authenticated: _propTypes2.default.bool.isRequired,
    loading: _propTypes2.default.bool.isRequired,
    error: _propTypes2.default.string,
    password: _propTypes2.default.string,
    username: _propTypes2.default.string,
    action: _propTypes2.default.string.isRequired,
    redirectAfterAuthenticated: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.string]).isRequired,
    onSignOut: _propTypes2.default.func
}, _temp);
exports.default = LoginForm;
;

/***/ }),
/* 54 */
/***/ (function(module, exports) {



/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fetchData = undefined;

var _redux = __webpack_require__(8);

var _reducers = __webpack_require__(2);

var _reducers2 = _interopRequireDefault(_reducers);

var _isArray = __webpack_require__(56);

var _isArray2 = _interopRequireDefault(_isArray);

var _reduxLogger = __webpack_require__(57);

var _reduxPromise = __webpack_require__(58);

var _reduxPromise2 = _interopRequireDefault(_reduxPromise);

var _reduxThunk = __webpack_require__(59);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reactRouter = __webpack_require__(9);

var _routes = __webpack_require__(14);

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// for getData
var wrapDispatchWithMiddlewares = function wrapDispatchWithMiddlewares(store, middlewares) {
    middlewares.forEach(function (middleware) {
        return store.dispatch = middleware(store)(store.dispatch);
    });
};

// middlewares


var dom = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

var triggerMultiple = function triggerMultiple(store) {
    return function (next) {
        return function (action) {

            if ((0, _isArray2.default)(action.type)) {

                return action.type.forEach(function (a) {
                    return next({
                        type: a
                    });
                });
            }

            return next(action);
        };
    };
};

var configureStore = function configureStore(preloadedState) {

    var middlewares = [triggerMultiple, _reduxThunk2.default, _reduxPromise2.default];

    // http://extension.remotedev.io/#usage
    var composeEnhancers = _redux.compose;

    if (dom && "production" !== 'production') {

        middlewares.push((0, _reduxLogger.createLogger)());

        composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || _redux.compose;
    }

    if (preloadedState) {

        return (0, _redux.createStore)(_reducers2.default, preloadedState, composeEnhancers(_redux.applyMiddleware.apply(undefined, middlewares) // applyMiddleware returns an redux enhancer
        ));
    }
    return (0, _redux.createStore)(_reducers2.default, composeEnhancers(_redux.applyMiddleware.apply(undefined, middlewares) // applyMiddleware returns an redux enhancer
    ));
};

exports.default = configureStore;
var fetchData = exports.fetchData = function fetchData(url, store) {

    var route = _routes2.default.find(function (route) {
        return (0, _reactRouter.matchPath)(url, route);
    });

    var promise = void 0;

    try {
        promise = route.component.fetchData(store, (0, _reactRouter.matchPath)(url, route));
    } catch (e) {
        /**
         * Find how to find name/namespace of component
         */
        // log('fetchData not found', route ? route.component : {});
    }

    return Promise.resolve(promise);
};

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = require("lodash/isArray");

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = require("redux-logger");

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = require("redux-promise");

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = require("colors");

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = require("source-map-support");

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = require("serve-favicon");

/***/ })
/******/ ]);
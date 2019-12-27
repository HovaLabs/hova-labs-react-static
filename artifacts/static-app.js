(function webpackUniversalModuleDefinition(root, factory) {
	if (typeof exports === 'object' && typeof module === 'object') module.exports = factory();
	else if (typeof define === 'function' && define.amd) define([], factory);
	else {
		const a = factory();
		for (const i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
}(global, () =>
 /** *** */ (function (modules) { // webpackBootstrap
/** *** */ 	// The module cache
/** *** */ 	const installedModules = {};
/** *** */
/** *** */ 	// object to store loaded chunks
/** *** */ 	// "0" means "already loaded"
/** *** */ 	const installedChunks = {
/** *** */ 		0: 0,
/** *** */ 	};
/** *** */
/** *** */ 	// The require function
/** *** */ 	function __webpack_require__(moduleId) {
/** *** */
/** *** */ 		// Check if module is in cache
/** *** */ 		if (installedModules[moduleId]) {
/** *** */ 			return installedModules[moduleId].exports;
/** *** */ 		}
/** *** */ 		// Create a new module (and put it into the cache)
/** *** */ 		const module = installedModules[moduleId] = {
/** *** */ 			i: moduleId,
/** *** */ 			l: false,
/** *** */ 			exports: {},
/** *** */ 		};
/** *** */
/** *** */ 		// Execute the module function
/** *** */ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/** *** */
/** *** */ 		// Flag the module as loaded
/** *** */ 		module.l = true;
/** *** */
/** *** */ 		// Return the exports of the module
/** *** */ 		return module.exports;
/** *** */ 	}
/** *** */
/** *** */ 	// The chunk loading function for additional chunks
/** *** */ 	// Since all referenced chunks are already included
/** *** */ 	// in this file, this function is empty here.
/** *** */ 	__webpack_require__.e = function requireEnsure() {
/** *** */ 		return Promise.resolve();
/** *** */ 	};
/** *** */
/** *** */ 	// expose the modules object (__webpack_modules__)
/** *** */ 	__webpack_require__.m = modules;
/** *** */
/** *** */ 	// expose the module cache
/** *** */ 	__webpack_require__.c = installedModules;
/** *** */
/** *** */ 	// define getter function for harmony exports
/** *** */ 	__webpack_require__.d = function (exports, name, getter) {
/** *** */ 		if (!__webpack_require__.o(exports, name)) {
/** *** */ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/** *** */ 		}
/** *** */ 	};
/** *** */
/** *** */ 	// define __esModule on exports
/** *** */ 	__webpack_require__.r = function (exports) {
/** *** */ 		if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/** *** */ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/** *** */ 		}
/** *** */ 		Object.defineProperty(exports, '__esModule', { value: true });
/** *** */ 	};
/** *** */
/** *** */ 	// create a fake namespace object
/** *** */ 	// mode & 1: value is a module id, require it
/** *** */ 	// mode & 2: merge all properties of value into the ns
/** *** */ 	// mode & 4: return value when already ns object
/** *** */ 	// mode & 8|1: behave like require
/** *** */ 	__webpack_require__.t = function (value, mode) {
/** *** */ 		if (mode & 1) value = __webpack_require__(value);
/** *** */ 		if (mode & 8) return value;
/** *** */ 		if ((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/** *** */ 		const ns = Object.create(null);
/** *** */ 		__webpack_require__.r(ns);
/** *** */ 		Object.defineProperty(ns, 'default', { enumerable: true, value });
/** *** */ 		if (mode & 2 && typeof value !== 'string') for (const key in value) __webpack_require__.d(ns, key, ((key) => value[key]).bind(null, key));
/** *** */ 		return ns;
/** *** */ 	};
/** *** */
/** *** */ 	// getDefaultExport function for compatibility with non-harmony modules
/** *** */ 	__webpack_require__.n = function (module) {
/** *** */ 		const getter = module && module.__esModule
/** *** */ 			? function getDefault() { return module.default; }
/** *** */ 			: function getModuleExports() { return module; };
/** *** */ 		__webpack_require__.d(getter, 'a', getter);
/** *** */ 		return getter;
/** *** */ 	};
/** *** */
/** *** */ 	// Object.prototype.hasOwnProperty.call
/** *** */ 	__webpack_require__.o = function (object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/** *** */
/** *** */ 	// __webpack_public_path__
/** *** */ 	__webpack_require__.p = "/";
/** *** */
/** *** */ 	// uncaught error handler for webpack runtime
/** *** */ 	__webpack_require__.oe = function (err) {
/** *** */ 		process.nextTick(() => {
/** *** */ 			throw err; // catch this error by using import().catch()
/** *** */ 		});
/** *** */ 	};
/** *** */
/** *** */
/** *** */ 	// Load entry module and return exports
/** *** */ 	return __webpack_require__(__webpack_require__.s = 24);
/** *** */ }([
/* 0 */
/***/ (function (module, exports) {
module.exports = require("react");
/***/ }),
/* 1 */
/***/ (function (module, exports) {
module.exports = require("@reach/router");
/***/ }),
/* 2 */
/***/ (function (module, exports) {
module.exports = require("path");
/***/ }),
/* 3 */
/***/ (function (module, exports) {
module.exports = require("babel-plugin-universal-import/universalImport");
/***/ }),
/* 4 */
/***/ (function (module, exports) {
module.exports = require("react-static");
/***/ }),
/* 5 */
/***/ (function (module, exports, __webpack_require__) {
/* WEBPACK VAR INJECTION */(function (module) {
const _typeof = __webpack_require__(9);

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

const _extends = Object.assign || function (target) {
  for (let i = 1; i < arguments.length; i++) {
    const source = arguments[i];

    for (const key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

const _createClass = (function () {
  function defineProperties(target, props) {
    for (let i = 0; i < props.length; i++) {
      const descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}());

const _requireUniversalModule = __webpack_require__(27);

Object.defineProperty(exports, 'CHUNK_NAMES', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.CHUNK_NAMES;
  },
});
Object.defineProperty(exports, 'MODULE_IDS', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.MODULE_IDS;
  },
});

const _reportChunks = __webpack_require__(29);

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks).default;
  },
});
exports.default = universal;

const _react = __webpack_require__(0);

const _react2 = _interopRequireDefault(_react);

const _propTypes = __webpack_require__(15);

const _propTypes2 = _interopRequireDefault(_propTypes);

const _hoistNonReactStatics = __webpack_require__(16);

const _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

const _vm = __webpack_require__(30);

const _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);

const _utils = __webpack_require__(10);

const _helpers = __webpack_require__(31);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj,
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError(`Super expression must either be null or a function, not ${_typeof(superClass)}`);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true,
    },
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

function _objectWithoutProperties(obj, keys) {
  const target = {};

  for (const i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
}

let hasBabelPlugin = false;

const isHMR = function isHMR() {
  return (// $FlowIgnore
    module.hot && (false)
  );
};

const setHasBabelPlugin = exports.setHasBabelPlugin = function setHasBabelPlugin() {
  hasBabelPlugin = true;
};

function universal(asyncModule) {
  let _class; let
_temp;

  const opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  const userRender = opts.render;
      const _opts$loading = opts.loading;
      const Loading = _opts$loading === undefined ? _utils.DefaultLoading : _opts$loading;
      const _opts$error = opts.error;
      const Err = _opts$error === undefined ? _utils.DefaultError : _opts$error;
      const _opts$minDelay = opts.minDelay;
      const minDelay = _opts$minDelay === undefined ? 0 : _opts$minDelay;
      const _opts$alwaysDelay = opts.alwaysDelay;
      const alwaysDelay = _opts$alwaysDelay === undefined ? false : _opts$alwaysDelay;
      const _opts$testBabelPlugin = opts.testBabelPlugin;
      const testBabelPlugin = _opts$testBabelPlugin === undefined ? false : _opts$testBabelPlugin;
      const _opts$loadingTransiti = opts.loadingTransition;
      const loadingTransition = _opts$loadingTransiti === undefined ? true : _opts$loadingTransiti;
      const options = _objectWithoutProperties(opts, ['render', 'loading', 'error', 'minDelay', 'alwaysDelay', 'testBabelPlugin', 'loadingTransition']);

  const renderFunc = userRender || (0, _utils.createDefaultRender)(Loading, Err);
  const isDynamic = hasBabelPlugin || testBabelPlugin;
  options.isDynamic = isDynamic;
  options.usesBabelPlugin = hasBabelPlugin;
  options.modCache = {};
  options.promCache = {};
  return _temp = _class = (function (_React$Component) {
    _inherits(UniversalComponent, _React$Component);

    _createClass(UniversalComponent, [{
      key: 'requireAsyncInner',
      value: function requireAsyncInner(requireAsync, props, state, context, isMount) {
        const _this2 = this;

        if (!state.mod && loadingTransition) {
          this.update({
            mod: null,
            props,
          }); // display `loading` during componentWillReceiveProps
        }

        const time = new Date();
        requireAsync(props, context).then((mod) => {
          const state = {
            mod,
            props,
            context,
          };
          const timeLapsed = new Date() - time;

          if (timeLapsed < minDelay) {
            const extraDelay = minDelay - timeLapsed;
            return setTimeout(() => _this2.update(state, isMount), extraDelay);
          }

          _this2.update(state, isMount);
        }).catch((error) => _this2.update({
            error,
            props,
            context,
          }));
      },
    }, {
      key: 'handleBefore',
      value: function handleBefore(isMount, isSync) {
        const isServer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (this.props.onBefore) {
          const { onBefore } = this.props;
          const info = {
            isMount,
            isSync,
            isServer,
          };
          onBefore(info);
        }
      },
    }, {
      key: 'handleAfter',
      value: function handleAfter(state, isMount, isSync, isServer) {
        const { mod } = state;
            const { error } = state;

        if (mod && !error) {
          (0, _hoistNonReactStatics2.default)(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true,
          });

          if (this.props.onAfter) {
            const { onAfter } = this.props;
            const info = {
              isMount,
              isSync,
              isServer,
            };
            onAfter(info, mod);
          }
        } else if (error && this.props.onError) {
          this.props.onError(error);
        }

        this.setState(state);
      }, // $FlowFixMe

    }, {
      key: 'init',
      value: function init(props, context) {
        const _req = (0, _requireUniversalModule2.default)(asyncModule, options, props);
            const { addModule } = _req;
            const { requireSync } = _req;
            const { requireAsync } = _req;
            const { asyncOnly } = _req;

        let mod = void 0;

        try {
          mod = requireSync(props, context);
        } catch (error) {
          return (0, _helpers.__update)(props, {
            error,
            props,
            context,
          }, this._initialized);
        }

        this._asyncOnly = asyncOnly;
        const chunkName = addModule(props); // record the module for SSR flushing :)

        if (context.report) {
          context.report(chunkName);
        }

        if (mod || _utils.isServer) {
          this.handleBefore(true, true, _utils.isServer);
          return (0, _helpers.__update)(props, {
            asyncOnly,
            props,
            mod,
            context,
          }, this._initialized, true, true, _utils.isServer);
        }

        this.handleBefore(true, false);
        this.requireAsyncInner(requireAsync, props, {
          props,
          asyncOnly,
          mod,
          context,
        }, context, true);
        return {
          mod,
          asyncOnly,
          context,
          props,
        };
      },
    }], [{
      key: 'preload',

      /* eslint-enable react/sort-comp */
      value: function preload(props) {
        const context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        props = props || {};

        const _req2 = (0, _requireUniversalModule2.default)(asyncModule, options, props);
            const { requireAsync } = _req2;
            const { requireSync } = _req2;

        let mod = void 0;

        try {
          mod = requireSync(props, context);
        } catch (error) {
          return Promise.reject(error);
        }

        return Promise.resolve().then(() => {
          if (mod) return mod;
          return requireAsync(props, context);
        }).then((mod) => {
          (0, _hoistNonReactStatics2.default)(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true,
          });
          return mod;
        });
      },
      /* eslint-disable react/sort-comp */

    }, {
      key: 'preloadWeak',
      value: function preloadWeak(props) {
        const context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        props = props || {};

        const _req3 = (0, _requireUniversalModule2.default)(asyncModule, options, props);
            const { requireSync } = _req3;

        const mod = requireSync(props, context);

        if (mod) {
          (0, _hoistNonReactStatics2.default)(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true,
          });
        }

        return mod;
      },
    }]);

    function UniversalComponent(props, context) {
      _classCallCheck(this, UniversalComponent);

      const _this = _possibleConstructorReturn(this, (UniversalComponent.__proto__ || Object.getPrototypeOf(UniversalComponent)).call(this, props, context));

      _this.update = function (state) {
        const isMount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        const isSync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        const isServer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
        if (!_this._initialized) return;
        if (!state.error) state.error = null;

        _this.handleAfter(state, isMount, isSync, isServer);
      };

      _this.state = _this.init(_this.props, _this.context); // $FlowFixMe

      _this.state.error = null;
      return _this;
    }

    _createClass(UniversalComponent, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this._initialized = true;
      },
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps) {
        const _this3 = this;

        if (isDynamic || this._asyncOnly) {
          const _req4 = (0, _requireUniversalModule2.default)(asyncModule, options, this.props, prevProps);
              const { requireSync } = _req4;
              const { requireAsync } = _req4;
              const { shouldUpdate } = _req4;

          if (shouldUpdate(this.props, prevProps)) {
            let mod = void 0;

            try {
              mod = requireSync(this.props, this.context);
            } catch (error) {
              return this.update({
                error,
              });
            }

            this.handleBefore(false, !!mod);

            if (!mod) {
              return this.requireAsyncInner(requireAsync, this.props, {
                mod,
              });
            }

            const state = {
              mod,
            };

            if (alwaysDelay) {
              if (loadingTransition) { this.update({
                mod: null,
              }); } // display `loading` during componentWillReceiveProps

              setTimeout(() => _this3.update(state, false, true), minDelay);
              return;
            }

            this.update(state, false, true);
          }
        }
      },
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._initialized = false;
      },
    }, {
      key: 'render',
      value: function render() {
        const _props = this.props;
            const { isLoading } = _props;
            const userError = _props.error;
            const props = _objectWithoutProperties(_props, ['isLoading', 'error']);

        const _state = this.state;
            const { mod } = _state;
            const { error } = _state;
        return renderFunc(props, mod, isLoading, userError || error);
      },
    }], [{
      key: 'getDerivedStateFromProps',
      value: function getDerivedStateFromProps(nextProps, currentState) {
        const _req5 = (0, _requireUniversalModule2.default)(asyncModule, options, nextProps, currentState.props);
            const { requireSync } = _req5;
            const { shouldUpdate } = _req5;

        if (isHMR() && shouldUpdate(currentState.props, nextProps)) {
          const mod = requireSync(nextProps, currentState.context);
          return { ...currentState, mod };
        }

        return null;
      },
    }]);

    return UniversalComponent;
  }(_react2.default.Component)), _class.contextTypes = {
    store: _propTypes2.default.object,
    report: _propTypes2.default.func,
  }, _temp;
}
/* WEBPACK VAR INJECTION */ }.call(this, __webpack_require__(8)(module)))
/***/ }),
/* 6 */
/***/ (function (module, exports, __webpack_require__) {
Object.defineProperty(exports, "__esModule", {
  value: true,
});

const _utils = __webpack_require__(10);

const requireById = function requireById(id) {
  if (!(0, _utils.isWebpack)() && typeof id === 'string') {
    return __webpack_require__(28)(`${id}`);
  }

  return __webpack_require__(`${id}`);
};

exports.default = requireById;
/***/ }),
/* 7 */
/***/ (function (module, __webpack_exports__, __webpack_require__) {
// EXTERNAL MODULE: external "react"
const external_react_ = __webpack_require__(0);
const external_react_default = /* #__PURE__ */__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-static"
const external_react_static_ = __webpack_require__(4);

// EXTERNAL MODULE: external "@reach/router"
const router_ = __webpack_require__(1);

// CONCATENATED MODULE: /Users/matthewhovanec/Sites/hova-labs-react-static/src/components/FancyDiv.tsx


const FancyDiv_FancyDiv = function FancyDiv(_ref) {
  const { children } = _ref;
  return external_react_default.a.createElement("div", {
    style: {
      border: '1px solid red',
    },
  }, children);
};

/* harmony default export */ const components_FancyDiv = (FancyDiv_FancyDiv);
// CONCATENATED MODULE: /Users/matthewhovanec/Sites/hova-labs-react-static/src/containers/Dynamic.tsx


const Dynamic_Dynamic = function Dynamic() {
  return external_react_default.a.createElement("div", null, "This is a dynamic page! It will not be statically exported, but is available at runtime");
};

/* harmony default export */ const containers_Dynamic = (Dynamic_Dynamic);
// EXTERNAL MODULE: /Users/matthewhovanec/Sites/hova-labs-react-static/src/app.css
const app = __webpack_require__(40);

// CONCATENATED MODULE: /Users/matthewhovanec/Sites/hova-labs-react-static/src/App.tsx


 // Any routes that start with 'dynamic' will be treated as non-static routes

Object(external_react_static_.addPrefetchExcludes)(['dynamic']);

function App() {
  return external_react_default.a.createElement(external_react_static_.Root, null, external_react_default.a.createElement("nav", null, external_react_default.a.createElement(router_.Link, {
    to: "/",
  }, "Home"), external_react_default.a.createElement(router_.Link, {
    to: "/about",
  }, "About"), external_react_default.a.createElement(router_.Link, {
    to: "/blog",
  }, "Blog"), external_react_default.a.createElement(router_.Link, {
    to: "/dynamic",
  }, "Dynamic")), external_react_default.a.createElement("div", {
    className: "content",
  }, external_react_default.a.createElement(components_FancyDiv, null, external_react_default.a.createElement(external_react_default.a.Suspense, {
    fallback: external_react_default.a.createElement("em", null, "Loading..."),
  }, external_react_default.a.createElement(router_.Router, null, external_react_default.a.createElement(containers_Dynamic, {
    path: "dynamic",
  }), external_react_default.a.createElement(external_react_static_.Routes, {
    path: "*",
  }))))));
}

/* harmony default export */ const src_App = __webpack_exports__.a = (App);
/***/ }),
/* 8 */
/***/ (function (module, exports) {
module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      },
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      },
    });
    module.webpackPolyfill = 1;
  }

  return module;
};
/***/ }),
/* 9 */
/***/ (function (module, exports) {
module.exports = require("@babel/runtime/helpers/typeof");
/***/ }),
/* 10 */
/***/ (function (module, exports, __webpack_require__) {
const _typeof2 = __webpack_require__(9);

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.cacheProm = exports.loadFromPromiseCache = exports.cacheExport = exports.loadFromCache = exports.callForString = exports.createDefaultRender = exports.createElement = exports.findExport = exports.resolveExport = exports.tryRequire = exports.DefaultError = exports.DefaultLoading = exports.babelInterop = exports.isWebpack = exports.isServer = exports.isTest = undefined;

const _extends = Object.assign || function (target) {
  for (let i = 1; i < arguments.length; i++) {
    const source = arguments[i];

    for (const key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

const _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
};

const _react = __webpack_require__(0);

const React = _interopRequireWildcard(_react);

const _requireById = __webpack_require__(6);

const _requireById2 = _interopRequireDefault(_requireById);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj,
  };
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }
    const newObj = {};

    if (obj != null) {
      for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }

    newObj.default = obj;
    return newObj;
}

const isTest = exports.isTest = "production" === 'test';
const isServer = exports.isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);

const isWebpack = exports.isWebpack = function isWebpack() {
  return typeof __webpack_require__ !== 'undefined';
};

const babelInterop = exports.babelInterop = function babelInterop(mod) {
  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && mod.__esModule ? mod.default : mod;
};

const DefaultLoading = exports.DefaultLoading = function DefaultLoading() {
  return React.createElement('div', null, 'Loading...');
};

const DefaultError = exports.DefaultError = function DefaultError(_ref) {
  const { error } = _ref;
  return React.createElement('div', null, 'Error: ', error && error.message);
};

const tryRequire = exports.tryRequire = function tryRequire(id) {
  try {
    return (0, _requireById2.default)(id);
  } catch (err) {
    // warn if there was an error while requiring the chunk during development
    // this can sometimes lead the server to render the loading component.
    if (false) {}
  }

  return null;
};

const resolveExport = exports.resolveExport = function resolveExport(mod, key, onLoad, chunkName, props, context, modCache) {
  const isSync = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;
  const exp = findExport(mod, key);

  if (onLoad && mod) {
    const _isServer = typeof window === 'undefined';

    const info = {
      isServer: _isServer,
      isSync,
    };
    onLoad(mod, info, props, context);
  }

  if (chunkName && exp) cacheExport(exp, chunkName, props, modCache);
  return exp;
};

var findExport = exports.findExport = function findExport(mod, key) {
  if (typeof key === 'function') {
    return key(mod);
  } if (key === null) {
    return mod;
  }

  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && key ? mod[key] : babelInterop(mod);
};

const createElement = exports.createElement = function createElement(Component, props) {
  return React.isValidElement(Component) ? React.cloneElement(Component, props) : React.createElement(Component, props);
};

const createDefaultRender = exports.createDefaultRender = function createDefaultRender(Loading, Err) {
  return function (props, mod, isLoading, error) {
    if (isLoading) {
      return createElement(Loading, props);
    } if (error) {
      return createElement(Err, { ...props, error });
    } if (mod) {
      // primary usage (for async import loading + errors):
      return createElement(mod, props);
    }

    return createElement(Loading, props);
  };
};

const callForString = exports.callForString = function callForString(strFun, props) {
  return typeof strFun === 'function' ? strFun(props) : strFun;
};

const loadFromCache = exports.loadFromCache = function loadFromCache(chunkName, props, modCache) {
  return !isServer && modCache[callForString(chunkName, props)];
};

var cacheExport = exports.cacheExport = function cacheExport(exp, chunkName, props, modCache) {
  return modCache[callForString(chunkName, props)] = exp;
};

const loadFromPromiseCache = exports.loadFromPromiseCache = function loadFromPromiseCache(chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)];
};

const cacheProm = exports.cacheProm = function cacheProm(pr, chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)] = pr;
};
/***/ }),
/* 11 */
/***/ (function (module, exports) {
module.exports = require("react-dom");
/***/ }),
/* 12 */
/***/ (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ const _Users_matthewhovanec_Sites_hova_labs_react_static_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22);
/* harmony import */ const _Users_matthewhovanec_Sites_hova_labs_react_static_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0___default = /* #__PURE__ */__webpack_require__.n(_Users_matthewhovanec_Sites_hova_labs_react_static_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports
 // Plugins

const plugins = [{
  location: "/Users/matthewhovanec/Sites/hova-labs-react-static/node_modules/react-static-plugin-typescript",
  plugins: [],
  hooks: {},
}, {
  location: "/Users/matthewhovanec/Sites/hova-labs-react-static/node_modules/react-static-plugin-source-filesystem",
  plugins: [],
  hooks: {},
}, {
  location: "/Users/matthewhovanec/Sites/hova-labs-react-static/node_modules/react-static-plugin-reach-router",
  plugins: [],
  hooks: _Users_matthewhovanec_Sites_hova_labs_react_static_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0___default()({}),
}, {
  location: "/Users/matthewhovanec/Sites/hova-labs-react-static/node_modules/react-static-plugin-sitemap/dist",
  plugins: [],
  hooks: {},
}, {
  location: "/Users/matthewhovanec/Sites/hova-labs-react-static",
  plugins: [],
  hooks: {},
}]; // Export em!

/* harmony default export */ __webpack_exports__.default = (plugins);
/***/ }),
/* 13 */
/***/ (function (module, exports) {
module.exports = require("/Users/matthewhovanec/Sites/hova-labs-react-static/node_modules/react-static/lib/browser");
/***/ }),
/* 14 */
/***/ (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function (__dirname) { /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notFoundTemplate", () => notFoundTemplate);
/* harmony import */ const path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ const path__WEBPACK_IMPORTED_MODULE_0___default = /* #__PURE__ */__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ const babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ const babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default = /* #__PURE__ */__webpack_require__.n(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ const react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ const react__WEBPACK_IMPORTED_MODULE_2___default = /* #__PURE__ */__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ const _Users_matthewhovanec_Sites_hova_labs_react_static_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ const _Users_matthewhovanec_Sites_hova_labs_react_static_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default = /* #__PURE__ */__webpack_require__.n(_Users_matthewhovanec_Sites_hova_labs_react_static_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3__);


Object(_Users_matthewhovanec_Sites_hova_labs_react_static_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3__.setHasBabelPlugin)();
const universalOptions = {
  loading: function loading() {
    return null;
  },
  error: function error(props) {
    console.error(props.error);
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, "An error occurred loading this page's template. More information is available in the console.");
  },
  ignoreBabelRename: true,
};
const t_0 = _Users_matthewhovanec_Sites_hova_labs_react_static_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "/Users/matthewhovanec/Sites/hova-labs-react-static/src/pages/404.tsx",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | Users/matthewhovanec/Sites/hova-labs-react-static/src/pages/404.tsx */).then(__webpack_require__.bind(null, 17))]).then((proms) => proms[0]);
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '/Users/matthewhovanec/Sites/hova-labs-react-static/src/pages/404.tsx');
  },
  resolve: function resolve() {
    return /* require.resolve */(17);
  },
  chunkName: function chunkName() {
    return "Users/matthewhovanec/Sites/hova-labs-react-static/src/pages/404.tsx";
  },
}), universalOptions);
t_0.template = '/Users/matthewhovanec/Sites/hova-labs-react-static/src/pages/404.tsx';
const t_1 = _Users_matthewhovanec_Sites_hova_labs_react_static_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "/Users/matthewhovanec/Sites/hova-labs-react-static/src/pages/about.tsx",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | Users/matthewhovanec/Sites/hova-labs-react-static/src/pages/about.tsx */).then(__webpack_require__.bind(null, 18))]).then((proms) => proms[0]);
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '/Users/matthewhovanec/Sites/hova-labs-react-static/src/pages/about.tsx');
  },
  resolve: function resolve() {
    return /* require.resolve */(18);
  },
  chunkName: function chunkName() {
    return "Users/matthewhovanec/Sites/hova-labs-react-static/src/pages/about.tsx";
  },
}), universalOptions);
t_1.template = '/Users/matthewhovanec/Sites/hova-labs-react-static/src/pages/about.tsx';
const t_2 = _Users_matthewhovanec_Sites_hova_labs_react_static_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "/Users/matthewhovanec/Sites/hova-labs-react-static/src/pages/blog.tsx",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | Users/matthewhovanec/Sites/hova-labs-react-static/src/pages/blog.tsx */).then(__webpack_require__.bind(null, 19))]).then((proms) => proms[0]);
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '/Users/matthewhovanec/Sites/hova-labs-react-static/src/pages/blog.tsx');
  },
  resolve: function resolve() {
    return /* require.resolve */(19);
  },
  chunkName: function chunkName() {
    return "Users/matthewhovanec/Sites/hova-labs-react-static/src/pages/blog.tsx";
  },
}), universalOptions);
t_2.template = '/Users/matthewhovanec/Sites/hova-labs-react-static/src/pages/blog.tsx';
const t_3 = _Users_matthewhovanec_Sites_hova_labs_react_static_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "/Users/matthewhovanec/Sites/hova-labs-react-static/src/pages/index.tsx",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | Users/matthewhovanec/Sites/hova-labs-react-static/src/pages/index.tsx */).then(__webpack_require__.bind(null, 20))]).then((proms) => proms[0]);
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '/Users/matthewhovanec/Sites/hova-labs-react-static/src/pages/index.tsx');
  },
  resolve: function resolve() {
    return /* require.resolve */(20);
  },
  chunkName: function chunkName() {
    return "Users/matthewhovanec/Sites/hova-labs-react-static/src/pages/index.tsx";
  },
}), universalOptions);
t_3.template = '/Users/matthewhovanec/Sites/hova-labs-react-static/src/pages/index.tsx';
const t_4 = _Users_matthewhovanec_Sites_hova_labs_react_static_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "/Users/matthewhovanec/Sites/hova-labs-react-static/src/containers/Post",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | Users/matthewhovanec/Sites/hova-labs-react-static/src/containers/Post */).then(__webpack_require__.bind(null, 21))]).then((proms) => proms[0]);
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '/Users/matthewhovanec/Sites/hova-labs-react-static/src/containers/Post');
  },
  resolve: function resolve() {
    return /* require.resolve */(21);
  },
  chunkName: function chunkName() {
    return "Users/matthewhovanec/Sites/hova-labs-react-static/src/containers/Post";
  },
}), universalOptions);
t_4.template = '/Users/matthewhovanec/Sites/hova-labs-react-static/src/containers/Post'; // Template Map

/* harmony default export */ __webpack_exports__.default = ({
  '/Users/matthewhovanec/Sites/hova-labs-react-static/src/pages/404.tsx': t_0,
  '/Users/matthewhovanec/Sites/hova-labs-react-static/src/pages/about.tsx': t_1,
  '/Users/matthewhovanec/Sites/hova-labs-react-static/src/pages/blog.tsx': t_2,
  '/Users/matthewhovanec/Sites/hova-labs-react-static/src/pages/index.tsx': t_3,
  '/Users/matthewhovanec/Sites/hova-labs-react-static/src/containers/Post': t_4,
}); // Not Found Template

var notFoundTemplate = "/Users/matthewhovanec/Sites/hova-labs-react-static/src/pages/404.tsx";
/* WEBPACK VAR INJECTION */ }.call(this, "/"))
/***/ }),
/* 15 */
/***/ (function (module, exports) {
module.exports = require("prop-types");
/***/ }),
/* 16 */
/***/ (function (module, exports) {
module.exports = require("hoist-non-react-statics");
/***/ }),
/* 17 */
/***/ (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ const react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ const react__WEBPACK_IMPORTED_MODULE_0___default = /* #__PURE__ */__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__.default = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "404 - Oh no's! We couldn't find that page :("));
});
/***/ }),
/* 18 */
/***/ (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ const react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ const react__WEBPACK_IMPORTED_MODULE_0___default = /* #__PURE__ */__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__.default = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "React Static is a progressive static site generator for React."));
});
/***/ }),
/* 19 */
/***/ (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ const react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ const react__WEBPACK_IMPORTED_MODULE_0___default = /* #__PURE__ */__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ const react_static__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ const react_static__WEBPACK_IMPORTED_MODULE_1___default = /* #__PURE__ */__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ const _reach_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ const _reach_router__WEBPACK_IMPORTED_MODULE_2___default = /* #__PURE__ */__webpack_require__.n(_reach_router__WEBPACK_IMPORTED_MODULE_2__);


/* harmony default export */ __webpack_exports__.default = (function () {
  const _useRouteData = Object(react_static__WEBPACK_IMPORTED_MODULE_1__.useRouteData)();
      const { posts } = _useRouteData;

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "It's blog time."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "All Posts:", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, posts.map((post) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: post.id,
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reach_router__WEBPACK_IMPORTED_MODULE_2__.Link, {
      to: "/blog/post/".concat(post.id, "/"),
    }, post.title)))));
});
/***/ }),
/* 20 */
/***/ (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ const react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ const react__WEBPACK_IMPORTED_MODULE_0___default = /* #__PURE__ */__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__.default = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      textAlign: 'center',
    },
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Welcome to React-Static ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), " + TypeScript"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Learn", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://github.com/sw-yx/react-typescript-cheatsheet",
  }, "React + TypeScript")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://twitter.com/swyx",
  }, "Report issues with this template")));
});
/***/ }),
/* 21 */
/***/ (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ const react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ const react__WEBPACK_IMPORTED_MODULE_0___default = /* #__PURE__ */__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ const react_static__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ const react_static__WEBPACK_IMPORTED_MODULE_1___default = /* #__PURE__ */__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ const _reach_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ const _reach_router__WEBPACK_IMPORTED_MODULE_2___default = /* #__PURE__ */__webpack_require__.n(_reach_router__WEBPACK_IMPORTED_MODULE_2__);


/* harmony default export */ __webpack_exports__.default = (function () {
  const _useRouteData = Object(react_static__WEBPACK_IMPORTED_MODULE_1__.useRouteData)();
      const { post } = _useRouteData;

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reach_router__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "/blog/",
  }, '<', " Back"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, post.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, post.body));
});
/***/ }),
/* 22 */
/***/ (function (module, exports, __webpack_require__) {
Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.default = void 0;

const _react = _interopRequireDefault(__webpack_require__(0));

const _reactStatic = __webpack_require__(4);

const _router = __webpack_require__(1);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj,
  };
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (let i = 1; i < arguments.length; i++) {
      const source = arguments[i];

      for (const key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  const target = _objectWithoutPropertiesLoose(source, excluded);

  let key; let
i;

  if (Object.getOwnPropertySymbols) {
    const sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  const target = {};
  const sourceKeys = Object.keys(source);
  let key; let
i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

const _default = function _default(_ref) {
  const _ref$RouterProps = _ref.RouterProps;
      const userRouterProps = _ref$RouterProps === void 0 ? {} : _ref$RouterProps;
  return {
    Root: function Root(PreviousRoot) {
      return function (_ref2) {
        const { children } = _ref2;
            const rest = _objectWithoutProperties(_ref2, ["children"]);

        const basepath = (0, _reactStatic.useBasepath)();
        const staticInfo = (0, _reactStatic.useStaticInfo)();

        const RouteHandler = function RouteHandler(props) {
          return _react.default.createElement(PreviousRoot, { ...rest, ...props }, children);
        };

        const renderedChildren = // Place a top-level router inside the root
        // This will give proper context to Link and other reach components
        _react.default.createElement(_router.Router, {
 ...(basepath ? {
          basepath,
        } : {}),
...userRouterProps,
}, _react.default.createElement(RouteHandler, {
          path: "/*",
        })); // If we're in SSR, use a manual server location


        return typeof document === 'undefined' ? _react.default.createElement(_router.ServerLocation, {
          url: (0, _reactStatic.makePathAbsolute)("".concat(basepath, "/").concat(staticInfo.path)),
        }, renderedChildren) : renderedChildren;
      };
    },
    Routes: function Routes(PreviousRoutes) {
      return function (props) {
        return (// Wrap Routes in location
          _react.default.createElement(_router.Location, null, (location) => _react.default.createElement(PreviousRoutes, { path: "/*", ...props, location }))
        );
      };
    },
  };
};

exports.default = _default;
/***/ }),
/* 23 */
/***/ (function (module, exports) {
module.exports = require("react-hot-loader");
/***/ }),
/* 24 */
/***/ (function (module, exports, __webpack_require__) {
__webpack_require__(25);
__webpack_require__(26);
module.exports = __webpack_require__(32);
/***/ }),
/* 25 */
/***/ (function (module, exports, __webpack_require__) {
/* WEBPACK VAR INJECTION */(function (module) {
/* eslint-disable import/no-dynamic-require */

const plugins = __webpack_require__(12).default;

const _require = __webpack_require__(13);
    const { registerPlugins } = _require;

registerPlugins(plugins);

if (typeof document !== 'undefined' && module && module.hot) {
  module.hot.accept("/Users/matthewhovanec/Sites/hova-labs-react-static/artifacts/react-static-browser-plugins.js", () => {
    registerPlugins(__webpack_require__(12).default);
  });
}
/* WEBPACK VAR INJECTION */ }.call(this, __webpack_require__(8)(module)))
/***/ }),
/* 26 */
/***/ (function (module, exports, __webpack_require__) {
/* WEBPACK VAR INJECTION */(function (module) {
/* eslint-disable import/no-dynamic-require */

const _require = __webpack_require__(13);
    const { registerTemplates } = _require;

const _require2 = __webpack_require__(14);
    const templates = _require2.default;
    const { notFoundTemplate } = _require2;

registerTemplates(templates, notFoundTemplate);

if (typeof document !== 'undefined' && module && module.hot) {
  module.hot.accept("/Users/matthewhovanec/Sites/hova-labs-react-static/artifacts/react-static-templates.js", () => {
    const _require3 = __webpack_require__(14);
        const templates = _require3.default;
        const { notFoundTemplate } = _require3;

    registerTemplates(templates, notFoundTemplate);
  });
}
/* WEBPACK VAR INJECTION */ }.call(this, __webpack_require__(8)(module)))
/***/ }),
/* 27 */
/***/ (function (module, exports, __webpack_require__) {
Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

const _extends = Object.assign || function (target) {
  for (let i = 1; i < arguments.length; i++) {
    const source = arguments[i];

    for (const key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

exports.default = requireUniversalModule;

const _utils = __webpack_require__(10);

const CHUNK_NAMES = exports.CHUNK_NAMES = new Set();
const MODULE_IDS = exports.MODULE_IDS = new Set();

function requireUniversalModule(universalConfig, options, props, prevProps) {
  const { key } = options;
      const _options$timeout = options.timeout;
      const timeout = _options$timeout === undefined ? 15000 : _options$timeout;
      const { onLoad } = options;
      const { onError } = options;
      const { isDynamic } = options;
      const { modCache } = options;
      const { promCache } = options;
      const { usesBabelPlugin } = options;
  const config = getConfig(isDynamic, universalConfig, options, props);
  const { chunkName } = config;
      const { path } = config;
      const { resolve } = config;
      const { load } = config;
  const asyncOnly = !path && !resolve || typeof chunkName === 'function';

  const requireSync = function requireSync(props, context) {
    let exp = (0, _utils.loadFromCache)(chunkName, props, modCache);

    if (!exp) {
      let mod = void 0;

      if (!(0, _utils.isWebpack)() && path) {
        const modulePath = (0, _utils.callForString)(path, props) || '';
        mod = (0, _utils.tryRequire)(modulePath);
      } else if ((0, _utils.isWebpack)() && resolve) {
        const weakId = (0, _utils.callForString)(resolve, props);

        if (__webpack_require__.m[weakId]) {
          mod = (0, _utils.tryRequire)(weakId);
        }
      }

      if (mod) {
        exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache, true);
      }
    }

    return exp;
  };

  const requireAsync = function requireAsync(props, context) {
    const exp = (0, _utils.loadFromCache)(chunkName, props, modCache);
    if (exp) return Promise.resolve(exp);
    const cachedPromise = (0, _utils.loadFromPromiseCache)(chunkName, props, promCache);
    if (cachedPromise) return cachedPromise;
    const prom = new Promise(((res, rej) => {
      const reject = function reject(error) {
        error = error || new Error('timeout exceeded');
        clearTimeout(timer);

        if (onError) {
          const _isServer = typeof window === 'undefined';

          const info = {
            isServer: _isServer,
          };
          onError(error, info);
        }

        rej(error);
      }; // const timer = timeout && setTimeout(reject, timeout)


      var timer = timeout && setTimeout(reject, timeout);

      const resolve = function resolve(mod) {
        clearTimeout(timer);
        const exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache);
        if (exp) return res(exp);
        reject(new Error('export not found'));
      };

      const request = load(props, {
        resolve,
        reject,
      }); // if load doesn't return a promise, it must call resolveImport
      // itself. Most common is the promise implementation below.

      if (!request || typeof request.then !== 'function') return;
      request.then(resolve).catch(reject);
    }));
    (0, _utils.cacheProm)(prom, chunkName, props, promCache);
    return prom;
  };

  const addModule = function addModule(props) {
    if (_utils.isServer || _utils.isTest) {
      if (chunkName) {
        let name = (0, _utils.callForString)(chunkName, props);

        if (usesBabelPlugin) {
          // if ignoreBabelRename is true, don't apply regex
          const shouldKeepName = options && !!options.ignoreBabelRename;

          if (!shouldKeepName) {
            name = name.replace(/\//g, '-');
          }
        }

        if (name) CHUNK_NAMES.add(name);
        if (!_utils.isTest) return name; // makes tests way smaller to run both kinds
      }

      if ((0, _utils.isWebpack)()) {
        const weakId = (0, _utils.callForString)(resolve, props);
        if (weakId) MODULE_IDS.add(weakId);
        return weakId;
      }

      if (!(0, _utils.isWebpack)()) {
        const modulePath = (0, _utils.callForString)(path, props);
        if (modulePath) MODULE_IDS.add(modulePath);
        return modulePath;
      }
    }
  };

  const shouldUpdate = function shouldUpdate(next, prev) {
    const cacheKey = (0, _utils.callForString)(chunkName, next);
    const config = getConfig(isDynamic, universalConfig, options, prev);
    const prevCacheKey = (0, _utils.callForString)(config.chunkName, prev);
    return cacheKey !== prevCacheKey;
  };

  return {
    requireSync,
    requireAsync,
    addModule,
    shouldUpdate,
    asyncOnly,
  };
}

const flushChunkNames = exports.flushChunkNames = function flushChunkNames() {
  const chunks = Array.from(CHUNK_NAMES);
  CHUNK_NAMES.clear();
  return chunks;
};

const flushModuleIds = exports.flushModuleIds = function flushModuleIds() {
  const ids = Array.from(MODULE_IDS);
  MODULE_IDS.clear();
  return ids;
};

const clearChunks = exports.clearChunks = function clearChunks() {
  CHUNK_NAMES.clear();
  MODULE_IDS.clear();
};

var getConfig = function getConfig(isDynamic, universalConfig, options, props) {
  if (isDynamic) {
    let resultingConfig = typeof universalConfig === 'function' ? universalConfig(props) : universalConfig;

    if (options) {
      resultingConfig = { ...resultingConfig, ...options };
    }

    return resultingConfig;
  }

  const load = typeof universalConfig === 'function' ? universalConfig // $FlowIssue
  : function () {
    return universalConfig;
  };
  return {
    file: 'default',
    id: options.id || 'default',
    chunkName: options.chunkName || 'default',
    resolve: options.resolve || '',
    path: options.path || '',
    load,
    ignoreBabelRename: true,
  };
};
/***/ }),
/* 28 */
/***/ (function (module, exports, __webpack_require__) {
const map = {
	".": 6,
	"./": 6,
	"./index": 6,
	"./index.js": 6,
};


function webpackContext(req) {
	const id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if (!__webpack_require__.o(map, req)) {
		const e = new Error(`Cannot find module '${req}'`);
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 28;
/***/ }),
/* 29 */
/***/ (function (module, exports, __webpack_require__) {
const _typeof = __webpack_require__(9);

Object.defineProperty(exports, "__esModule", {
  value: true,
});

const _createClass = (function () {
  function defineProperties(target, props) {
    for (let i = 0; i < props.length; i++) {
      const descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}());

const _react = __webpack_require__(0);

const _react2 = _interopRequireDefault(_react);

const _propTypes = __webpack_require__(15);

const _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj,
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError(`Super expression must either be null or a function, not ${_typeof(superClass)}`);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true,
    },
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

const ReportChunks = (function (_React$Component) {
  _inherits(ReportChunks, _React$Component);

  function ReportChunks() {
    _classCallCheck(this, ReportChunks);

    return _possibleConstructorReturn(this, (ReportChunks.__proto__ || Object.getPrototypeOf(ReportChunks)).apply(this, arguments));
  }

  _createClass(ReportChunks, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        report: this.props.report,
      };
    },
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.Children.only(this.props.children);
    },
  }]);

  return ReportChunks;
}(_react2.default.Component));

ReportChunks.propTypes = {
  report: _propTypes2.default.func.isRequired,
};
ReportChunks.childContextTypes = {
  report: _propTypes2.default.func.isRequired,
};
exports.default = ReportChunks;
/***/ }),
/* 30 */
/***/ (function (module, exports) {
module.exports = require("vm");
/***/ }),
/* 31 */
/***/ (function (module, exports, __webpack_require__) {
Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.__handleAfter = exports.__update = undefined;

const _hoistNonReactStatics = __webpack_require__(16);

const _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

const _index = __webpack_require__(5);

const _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj,
  };
}

const __update = exports.__update = function __update(props, state, isInitialized) {
  const isMount = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  const isSync = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  const isServer = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
  if (!isInitialized) return state;

  if (!state.error) {
    state.error = null;
  }

  return __handleAfter(props, state, isMount, isSync, isServer);
};
/* eslint class-methods-use-this: ["error", { "exceptMethods": ["__handleAfter"] }] */


var __handleAfter = exports.__handleAfter = function __handleAfter(props, state, isMount, isSync, isServer) {
  const { mod } = state;
      const { error } = state;

  if (mod && !error) {
    (0, _hoistNonReactStatics2.default)(_index2.default, mod, {
      preload: true,
      preloadWeak: true,
    });

    if (props.onAfter) {
      const { onAfter } = props;
      const info = {
        isMount,
        isSync,
        isServer,
      };
      onAfter(info, mod);
    }
  } else if (error && props.onError) {
    props.onError(error);
  }

  return state;
};
/***/ }),
/* 32 */
/***/ (function (module, exports, __webpack_require__) {
const _interopRequireWildcard = __webpack_require__(33);

const _interopRequireDefault = __webpack_require__(34);

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.default = void 0;

const _extends2 = _interopRequireDefault(__webpack_require__(35));

const _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(36));

const React = _interopRequireWildcard(__webpack_require__(0));

const _useStaticInfo = __webpack_require__(37);
/* eslint-disable import/no-dynamic-require */


const OriginalSuspense = React.Suspense;

function Suspense(_ref) {
  const { key } = _ref;
      const { children } = _ref;
      const rest = (0, _objectWithoutProperties2.default)(_ref, ["key", "children"]);
  return typeof document !== 'undefined' ? React.createElement(OriginalSuspense, (0, _extends2.default)({
    key,
  }, rest), children) : React.createElement(React.Fragment, {
    key,
  }, children);
} // Override the suspense module to be our own


React.Suspense = Suspense;
React.default.Suspense = Suspense;

const App = __webpack_require__(38).default;

const _default = function _default(staticInfo) {
  return function (props) {
    return React.createElement(_useStaticInfo.staticInfoContext.Provider, {
      value: staticInfo,
    }, React.createElement(App, props));
  };
};

exports.default = _default;
/***/ }),
/* 33 */
/***/ (function (module, exports) {
module.exports = require("@babel/runtime/helpers/interopRequireWildcard");
/***/ }),
/* 34 */
/***/ (function (module, exports) {
module.exports = require("@babel/runtime/helpers/interopRequireDefault");
/***/ }),
/* 35 */
/***/ (function (module, exports) {
module.exports = require("@babel/runtime/helpers/extends");
/***/ }),
/* 36 */
/***/ (function (module, exports) {
module.exports = require("@babel/runtime/helpers/objectWithoutProperties");
/***/ }),
/* 37 */
/***/ (function (module, exports) {
module.exports = require("/Users/matthewhovanec/Sites/hova-labs-react-static/node_modules/react-static/lib/browser/hooks/useStaticInfo");
/***/ }),
/* 38 */
/***/ (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function (module) { /* harmony import */ const react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ const react__WEBPACK_IMPORTED_MODULE_0___default = /* #__PURE__ */__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ const react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ const react_dom__WEBPACK_IMPORTED_MODULE_1___default = /* #__PURE__ */__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ const react_hot_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23);
/* harmony import */ const react_hot_loader__WEBPACK_IMPORTED_MODULE_2___default = /* #__PURE__ */__webpack_require__.n(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ const _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);


 // Your top level component

 // Export your top level component as JSX (for static rendering)

/* harmony default export */ __webpack_exports__.default = (_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]); // Render your app

if (typeof document !== 'undefined') {
  const target = document.getElementById('root');
  const renderMethod = target.hasChildNodes() ? react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.hydrate : react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render;

  const render = function render(Comp) {
    renderMethod(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__.AppContainer, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Comp, null)), target);
  }; // Render!


  render(_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]); // Hot Module Replacement

  if (module && module.hot) {
    module.hot.accept('./App', () => {
      render(_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]);
    });
  }
}
/* WEBPACK VAR INJECTION */ }.call(this, __webpack_require__(39)(module)))
/***/ }),
/* 39 */
/***/ (function (module, exports) {
module.exports = function (originalModule) {
  if (!originalModule.webpackPolyfill) {
    var module = Object.create(originalModule); // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      },
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      },
    });
    Object.defineProperty(module, "exports", {
      enumerable: true,
    });
    module.webpackPolyfill = 1;
  }

  return module;
};
/***/ }),
/* 40 */
/***/ (function (module, exports, __webpack_require__) {
exports = module.exports = __webpack_require__(41)(false);
// Module
exports.push([module.i, "body {\r\n  font-family: 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial,\r\n    'Lucida Grande', sans-serif;\r\n  font-weight: 300;\r\n  font-size: 16px;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: #108db8;\r\n  font-weight: bold;\r\n}\r\n\r\nimg {\r\n  max-width: 100%;\r\n}\r\n\r\nnav {\r\n  width: 100%;\r\n  background: #108db8;\r\n}\r\n\r\nnav a {\r\n  color: white;\r\n  padding: 1rem;\r\n  display: inline-block;\r\n}\r\n\r\n.content {\r\n  padding: 1rem;\r\n}\r\n", ""]);
/***/ }),
/* 41 */
/***/ (function (module, exports, __webpack_require__) {
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader

module.exports = function (useSourceMap) {
  const list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map((item) => {
      const content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return `@media ${item[2]}{${content}}`;
      }
        return content;
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    const alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      const id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      const item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = `(${item[2]}) and (${mediaQuery})`;
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  const content = item[1] || '';
  const cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    const sourceMapping = toComment(cssMapping);
    const sourceURLs = cssMapping.sources.map((source) => `/*# sourceURL=${cssMapping.sourceRoot}${source} */`);
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  const base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  const data = `sourceMappingURL=data:application/json;charset=utf-8;base64,${base64}`;
  return `/*# ${data} */`;
}
/***/ }),
/** *** */ ]))));

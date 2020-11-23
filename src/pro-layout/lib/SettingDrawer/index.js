"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.getFormatMessage = void 0;

require("antd/es/drawer/style");

var _drawer = _interopRequireDefault(require("antd/es/drawer"));

require("antd/es/button/style");

var _button = _interopRequireDefault(require("antd/es/button"));

require("antd/es/alert/style");

var _alert = _interopRequireDefault(require("antd/es/alert"));

require("antd/es/list/style");

var _list = _interopRequireDefault(require("antd/es/list"));

require("antd/es/switch/style");

var _switch = _interopRequireDefault(require("antd/es/switch"));

require("antd/es/divider/style");

var _divider = _interopRequireDefault(require("antd/es/divider"));

require("antd/es/message/style");

var _message2 = _interopRequireDefault(require("antd/es/message"));

require("./index.less");

var _icons = require("@ant-design/icons");

var _proUtils = require("@ant-design/pro-utils");

var _history = require("history");

var _qs = require("qs");

var _react = _interopRequireWildcard(require("react"));

var _reactCopyToClipboard = _interopRequireDefault(require("react-copy-to-clipboard"));

var _useMergedState5 = _interopRequireDefault(require("rc-util/lib/hooks/useMergedState"));

var _omit = _interopRequireDefault(require("omit.js"));

var _defaultSettings = _interopRequireDefault(require("../defaultSettings"));

var _BlockCheckbox = _interopRequireDefault(require("./BlockCheckbox"));

var _ThemeColor = _interopRequireDefault(require("./ThemeColor"));

var _locales = _interopRequireWildcard(require("../locales"));

var _utils = require("../utils/utils");

var _LayoutChange = _interopRequireWildcard(require("./LayoutChange"));

var _RegionalChange = _interopRequireDefault(require("./RegionalChange"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Body = function Body(_ref) {
  var children = _ref.children,
      prefixCls = _ref.prefixCls,
      title = _ref.title;
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      marginBottom: 24
    }
  }, /*#__PURE__*/_react.default.createElement("h3", {
    className: "".concat(prefixCls, "-drawer-title")
  }, title), children);
};

var oldSetting = {};

var getDifferentSetting = function getDifferentSetting(state) {
  var stateObj = {};
  Object.keys(state).forEach(function (key) {
    if (state[key] !== oldSetting[key] && key !== 'collapse') {
      stateObj[key] = state[key];
    }

    if (key.includes('Render')) {
      stateObj[key] = state[key] === 'false' || state[key] === false ? false : undefined;
    }
  });
  delete stateObj.menu;
  return stateObj;
};

var getFormatMessage = function getFormatMessage() {
  var formatMessage = function formatMessage(_ref2) {
    var id = _ref2.id,
        defaultMessage = _ref2.defaultMessage;
    var locales = (0, _locales.default)();

    if (locales[id]) {
      return locales[id];
    }

    if (defaultMessage) {
      return defaultMessage;
    }

    return id;
  };

  return formatMessage;
};

exports.getFormatMessage = getFormatMessage;

var updateTheme = function updateTheme(dark, color) {
  var hideMessageLoading = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var publicPath = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '/theme';

  // ssr
  if (typeof window === 'undefined' || !window.umi_plugin_ant_themeVar) {
    return;
  }

  var formatMessage = getFormatMessage();

  var hide = function hide() {
    return null;
  };

  if (!hideMessageLoading) {
    hide = _message2.default.loading(formatMessage({
      id: 'app.setting.loading',
      defaultMessage: '正在加载主题'
    }));
  }

  var href = dark ? "".concat(publicPath, "/dark") : "".concat(publicPath, "/"); // 如果是 dark，并且是 color=daybreak，无需进行拼接

  var colorFileName = dark && color ? "-".concat(encodeURIComponent(color)) : encodeURIComponent(color || '');

  if (color === 'daybreak' && dark) {
    colorFileName = '';
  }

  var dom = document.getElementById('theme-style'); // 如果这两个都是空

  if (!href && !colorFileName) {
    if (dom) {
      dom.remove();
      localStorage.removeItem('site-theme');
    }

    return;
  }

  var url = "".concat(href).concat(colorFileName || '', ".css");

  if (dom) {
    dom.onload = function () {
      window.setTimeout(function () {
        hide();
      });
    };

    dom.href = url;
  } else {
    var style = document.createElement('link');
    style.type = 'text/css';
    style.rel = 'stylesheet';
    style.id = 'theme-style';

    style.onload = function () {
      window.setTimeout(function () {
        hide();
      });
    };

    style.href = url;

    if (document.body.append) {
      document.body.append(style);
    } else {
      document.body.appendChild(style);
    }
  }

  localStorage.setItem('site-theme', dark ? 'dark' : 'light');
};

var getThemeList = function getThemeList(settings) {
  var formatMessage = getFormatMessage();
  var list = window.umi_plugin_ant_themeVar || [];
  var themeList = [{
    key: 'light',
    title: formatMessage({
      id: 'app.setting.pagestyle.light'
    })
  }];
  var darkColorList = [{
    key: 'daybreak',
    color: '#1890ff',
    theme: 'dark'
  }];
  var lightColorList = [{
    key: 'daybreak',
    color: '#1890ff',
    theme: 'dark'
  }];

  if (settings.layout !== 'mix') {
    themeList.push({
      key: 'dark',
      title: formatMessage({
        id: 'app.setting.pagestyle.dark',
        defaultMessage: ''
      })
    });
  }

  if (list.find(function (item) {
    return item.theme === 'dark';
  })) {
    themeList.push({
      key: 'realDark',
      title: formatMessage({
        id: 'app.setting.pagestyle.dark',
        defaultMessage: ''
      })
    });
  } // insert  theme color List


  list.forEach(function (item) {
    var color = (item.modifyVars || {})['@primary-color'];

    if (item.theme === 'dark' && color) {
      darkColorList.push(_objectSpread({
        color: color
      }, item));
    }

    if (!item.theme || item.theme === 'light') {
      lightColorList.push(_objectSpread({
        color: color
      }, item));
    }
  });
  return {
    colorList: {
      dark: darkColorList,
      light: lightColorList
    },
    themeList: themeList
  };
};
/**
 * 初始化的时候需要做的工作
 * @param param0
 */


var initState = function initState(settings, onSettingChange, publicPath) {
  if (!(0, _proUtils.isBrowser)()) {
    return;
  }

  var loadedStyle = false;

  if (window.location.search) {
    var params = (0, _qs.parse)(window.location.search.replace('?', ''));
    var replaceSetting = {};
    Object.keys(params).forEach(function (key) {
      if (_defaultSettings.default[key] || _defaultSettings.default[key] === undefined) {
        replaceSetting[key] = params[key];

        if (key.includes('Render')) {
          replaceSetting[key] = params[key] === 'false' ? false : undefined;
        }
      }
    });

    if (onSettingChange) {
      onSettingChange(_objectSpread(_objectSpread({}, settings), replaceSetting));
    } // 如果 url 中设置主题，进行一次加载。


    if (oldSetting.navTheme !== params.navTheme && params.navTheme) {
      updateTheme(settings.navTheme === 'realDark', params.primaryColor, true, publicPath);
      loadedStyle = true;
    }
  }

  if (loadedStyle) {
    return;
  } // 如果 url 中没有设置主题，并且 url 中的没有加载，进行一次加载。


  if (_defaultSettings.default.navTheme !== settings.navTheme && settings.navTheme) {
    updateTheme(settings.navTheme === 'realDark', settings.primaryColor, true, publicPath);
  }
};

var getParamsFromUrl = function getParamsFromUrl(settings) {
  if (!(0, _proUtils.isBrowser)()) {
    return _defaultSettings.default;
  } // 第一次进入与 浏览器参数同步一下


  var params = {};

  if (window.location.search) {
    params = (0, _qs.parse)(window.location.search.replace('?', ''));
  }

  Object.keys(params).forEach(function (key) {
    if (params[key] === 'true') {
      params[key] = true;
    }
  });
  return _objectSpread(_objectSpread(_objectSpread({}, _defaultSettings.default), settings || {}), params);
};

var genCopySettingJson = function genCopySettingJson(settingState) {
  return JSON.stringify((0, _omit.default)(_objectSpread(_objectSpread({}, settingState), {}, {
    primaryColor: (0, _utils.genStringToTheme)(settingState.primaryColor)
  }), ['colorWeak']), null, 2);
};
/**
 * 可视化配置组件
 * @param props
 */


var SettingDrawer = function SettingDrawer(props) {
  var _props$settings = props.settings,
      propsSettings = _props$settings === void 0 ? undefined : _props$settings,
      _props$hideLoading = props.hideLoading,
      hideLoading = _props$hideLoading === void 0 ? false : _props$hideLoading,
      hideColors = props.hideColors,
      hideHintAlert = props.hideHintAlert,
      hideCopyButton = props.hideCopyButton,
      getContainer = props.getContainer,
      onSettingChange = props.onSettingChange,
      _props$prefixCls = props.prefixCls,
      prefixCls = _props$prefixCls === void 0 ? 'ant-pro' : _props$prefixCls;
  var firstRender = (0, _react.useRef)(true);

  var _useMergedState = (0, _useMergedState5.default)(false, {
    value: props.collapse,
    onChange: props.onCollapseChange
  }),
      _useMergedState2 = _slicedToArray(_useMergedState, 2),
      show = _useMergedState2[0],
      setShow = _useMergedState2[1];

  var _useState = (0, _react.useState)((0, _locales.getLanguage)()),
      _useState2 = _slicedToArray(_useState, 2),
      language = _useState2[0],
      setLanguage = _useState2[1];

  var _useMergedState3 = (0, _useMergedState5.default)(function () {
    return getParamsFromUrl(propsSettings);
  }, {
    value: propsSettings,
    onChange: onSettingChange
  }),
      _useMergedState4 = _slicedToArray(_useMergedState3, 2),
      settingState = _useMergedState4[0],
      setSettingState = _useMergedState4[1];

  var preStateRef = (0, _react.useRef)(settingState);

  var _ref3 = settingState || {},
      _ref3$navTheme = _ref3.navTheme,
      navTheme = _ref3$navTheme === void 0 ? 'dark' : _ref3$navTheme,
      _ref3$primaryColor = _ref3.primaryColor,
      primaryColor = _ref3$primaryColor === void 0 ? 'daybreak' : _ref3$primaryColor,
      _ref3$layout = _ref3.layout,
      layout = _ref3$layout === void 0 ? 'sidemenu' : _ref3$layout,
      colorWeak = _ref3.colorWeak;

  (0, _react.useEffect)(function () {
    // 语言修改，这个是和 locale 是配置起来的
    var onLanguageChange = function onLanguageChange() {
      if (language !== (0, _locales.getLanguage)()) {
        setLanguage((0, _locales.getLanguage)());
      }
    }; // 记住默认的选择，方便做 diff，然后保存到 url 参数中


    oldSetting = _objectSpread(_objectSpread({}, _defaultSettings.default), propsSettings);
    /**
     * 如果不是浏览器 都没有必要做了
     */

    if (!(0, _proUtils.isBrowser)()) {
      return function () {
        return null;
      };
    }

    initState(settingState, setSettingState, props.publicPath);
    window.addEventListener('languagechange', onLanguageChange, {
      passive: true
    });
    return function () {
      return window.removeEventListener('languagechange', onLanguageChange);
    };
  }, []);
  /**
   * 修改设置
   * @param key
   * @param value
   * @param hideMessageLoading
   */

  var changeSetting = function changeSetting(key, value, hideMessageLoading) {
    var nextState = _objectSpread({}, preStateRef.current);

    nextState[key] = value;

    if (key === 'navTheme') {
      updateTheme(value === 'realDark', undefined, hideMessageLoading, props.publicPath);
      nextState.primaryColor = 'daybreak';
    }

    if (key === 'primaryColor') {
      updateTheme(nextState.navTheme === 'realDark', value === 'daybreak' ? '' : value, hideMessageLoading, props.publicPath);
    }

    if (key === 'layout') {
      nextState.contentWidth = value === 'top' ? 'Fixed' : 'Fluid';
    }

    if (key === 'layout' && value !== 'mix') {
      nextState.splitMenus = false;
    }

    if (key === 'layout' && value === 'mix') {
      nextState.navTheme = 'light';
    }

    if (key === 'colorWeak' && value === true) {
      var dom = document.querySelector('body');

      if (dom) {
        dom.dataset.prosettingdrawer = dom.style.filter;
        dom.style.filter = 'invert(80%)';
      }
    }

    if (key === 'colorWeak' && value === false) {
      var _dom = document.querySelector('body');

      if (_dom) {
        _dom.style.filter = _dom.dataset.prosettingdrawer || 'none';
        delete _dom.dataset.prosettingdrawer;
      }
    }

    preStateRef.current = nextState;
    setSettingState(nextState);
  };

  var formatMessage = getFormatMessage();
  var themeList = getThemeList(settingState);
  (0, _react.useEffect)(function () {
    /**
     * 如果不是浏览器 都没有必要做了
     */
    if (!(0, _proUtils.isBrowser)()) {
      return;
    }

    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    var browserHistory = (0, _history.createBrowserHistory)();
    var params = {};

    if (window.location.search) {
      params = (0, _qs.parse)(window.location.search.replace('?', ''));
    }

    var diffParams = getDifferentSetting(_objectSpread(_objectSpread({}, params), settingState));

    if (Object.keys(settingState).length < 1) {
      return;
    }

    browserHistory.replace({
      search: (0, _qs.stringify)(diffParams)
    });
  }, [JSON.stringify(settingState)]);
  var baseClassName = "".concat(prefixCls, "-setting");
  return /*#__PURE__*/_react.default.createElement(_drawer.default, {
    visible: show,
    width: 300,
    onClose: function onClose() {
      return setShow(false);
    },
    placement: "right",
    getContainer: getContainer,
    handler: /*#__PURE__*/_react.default.createElement("div", {
      className: "".concat(baseClassName, "-drawer-handle"),
      onClick: function onClick() {
        return setShow(!show);
      }
    }, show ? /*#__PURE__*/_react.default.createElement(_icons.CloseOutlined, {
      style: {
        color: '#fff',
        fontSize: 20
      }
    }) : /*#__PURE__*/_react.default.createElement(_icons.SettingOutlined, {
      style: {
        color: '#fff',
        fontSize: 20
      }
    })),
    style: {
      zIndex: 999
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(baseClassName, "-drawer-content")
  }, /*#__PURE__*/_react.default.createElement(Body, {
    title: formatMessage({
      id: 'app.setting.pagestyle',
      defaultMessage: 'Page style setting'
    }),
    prefixCls: baseClassName
  }, /*#__PURE__*/_react.default.createElement(_BlockCheckbox.default, {
    prefixCls: baseClassName,
    list: themeList.themeList,
    value: navTheme,
    configType: "theme",
    key: "navTheme",
    onChange: function onChange(value) {
      return changeSetting('navTheme', value, hideLoading);
    }
  })), /*#__PURE__*/_react.default.createElement(Body, {
    title: formatMessage({
      id: 'app.setting.themecolor',
      defaultMessage: 'Theme color'
    }),
    prefixCls: baseClassName
  }, /*#__PURE__*/_react.default.createElement(_ThemeColor.default, {
    value: primaryColor,
    colors: hideColors ? [] : themeList.colorList[navTheme === 'realDark' ? 'dark' : 'light'],
    formatMessage: formatMessage,
    onChange: function onChange(color) {
      return changeSetting('primaryColor', color, hideLoading);
    }
  })), /*#__PURE__*/_react.default.createElement(_divider.default, null), /*#__PURE__*/_react.default.createElement(Body, {
    prefixCls: baseClassName,
    title: formatMessage({
      id: 'app.setting.navigationmode'
    })
  }, /*#__PURE__*/_react.default.createElement(_BlockCheckbox.default, {
    prefixCls: baseClassName,
    value: layout,
    key: "layout",
    configType: "layout",
    list: [{
      key: 'side',
      title: formatMessage({
        id: 'app.setting.sidemenu'
      })
    }, {
      key: 'top',
      title: formatMessage({
        id: 'app.setting.topmenu'
      })
    }, {
      key: 'mix',
      title: formatMessage({
        id: 'app.setting.mixmenu'
      })
    }],
    onChange: function onChange(value) {
      return changeSetting('layout', value, hideLoading);
    }
  })), /*#__PURE__*/_react.default.createElement(_LayoutChange.default, {
    settings: settingState,
    changeSetting: changeSetting
  }), /*#__PURE__*/_react.default.createElement(_divider.default, null), /*#__PURE__*/_react.default.createElement(Body, {
    prefixCls: baseClassName,
    title: formatMessage({
      id: 'app.setting.regionalsettings'
    })
  }, /*#__PURE__*/_react.default.createElement(_RegionalChange.default, {
    settings: settingState,
    changeSetting: changeSetting
  })), /*#__PURE__*/_react.default.createElement(_divider.default, null), /*#__PURE__*/_react.default.createElement(Body, {
    prefixCls: baseClassName,
    title: formatMessage({
      id: 'app.setting.othersettings'
    })
  }, /*#__PURE__*/_react.default.createElement(_list.default, {
    split: false,
    renderItem: _LayoutChange.renderLayoutSettingItem,
    dataSource: [{
      title: formatMessage({
        id: 'app.setting.weakmode'
      }),
      action: /*#__PURE__*/_react.default.createElement(_switch.default, {
        size: "small",
        className: "color-weak",
        checked: !!colorWeak,
        onChange: function onChange(checked) {
          changeSetting('colorWeak', checked);
        }
      })
    }]
  })), hideHintAlert && hideCopyButton ? null : /*#__PURE__*/_react.default.createElement(_divider.default, null), hideHintAlert ? null : /*#__PURE__*/_react.default.createElement(_alert.default, {
    type: "warning",
    message: formatMessage({
      id: 'app.setting.production.hint'
    }),
    icon: /*#__PURE__*/_react.default.createElement(_icons.NotificationOutlined, null),
    showIcon: true,
    style: {
      marginBottom: 16
    }
  }), hideCopyButton ? null : /*#__PURE__*/_react.default.createElement(_reactCopyToClipboard.default, {
    text: genCopySettingJson(settingState),
    onCopy: function onCopy() {
      return _message2.default.success(formatMessage({
        id: 'app.setting.copyinfo'
      }));
    }
  }, /*#__PURE__*/_react.default.createElement(_button.default, {
    block: true,
    icon: /*#__PURE__*/_react.default.createElement(_icons.CopyOutlined, null),
    style: {
      marginBottom: 24
    }
  }, formatMessage({
    id: 'app.setting.copy'
  })))));
};

var _default = SettingDrawer;
exports.default = _default;
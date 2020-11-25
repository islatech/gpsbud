"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.defaultRenderCollapsedButton = exports.defaultRenderLogoAndTitle = exports.defaultRenderLogo = void 0;

require("antd/es/menu/style");

var _menu = _interopRequireDefault(require("antd/es/menu"));

require("antd/es/layout/style");

var _layout = _interopRequireDefault(require("antd/es/layout"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _icons = require("@ant-design/icons");

require("./index.less");

var _BaseMenu = _interopRequireDefault(require("./BaseMenu"));

var _Counter = _interopRequireDefault(require("./Counter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Sider = _layout.default.Sider;

var defaultRenderLogo = function defaultRenderLogo(logo) {
  if (typeof logo === 'string') {
    return /*#__PURE__*/_react.default.createElement("img", {
      src: logo,
      alt: "logo"
    });
  }

  if (typeof logo === 'function') {
    return logo();
  }

  return logo;
};

exports.defaultRenderLogo = defaultRenderLogo;

var defaultRenderLogoAndTitle = function defaultRenderLogoAndTitle(props) {
  var renderKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'menuHeaderRender';
  var _props$logo = props.logo,
      logo = _props$logo === void 0 ? 'https://gw.alipayobjects.com/zos/antfincdn/PmY%24TNNDBI/logo.svg' : _props$logo,
      title = props.title,
      layout = props.layout;
  var renderFunction = props[renderKey || ''];

  if (renderFunction === false) {
    return null;
  }

  var logoDom = defaultRenderLogo(logo);

  var titleDom = /*#__PURE__*/_react.default.createElement("h1", null, title);

  if (renderFunction) {
    // when collapsed, no render title
    return renderFunction(logoDom, props.collapsed ? null : titleDom, props);
  }

  if (layout === 'mix' && renderKey === 'menuHeaderRender') {
    return null;
  }

  return /*#__PURE__*/_react.default.createElement("a", null, logoDom, props.collapsed ? null : titleDom);
};

exports.defaultRenderLogoAndTitle = defaultRenderLogoAndTitle;

var defaultRenderCollapsedButton = function defaultRenderCollapsedButton(collapsed) {
  return collapsed ? /*#__PURE__*/_react.default.createElement(_icons.MenuUnfoldOutlined, null) : /*#__PURE__*/_react.default.createElement(_icons.MenuFoldOutlined, null);
};

exports.defaultRenderCollapsedButton = defaultRenderCollapsedButton;

var SiderMenu = function SiderMenu(props) {
  var _classNames;

  var collapsed = props.collapsed,
      fixSiderbar = props.fixSiderbar,
      menuFooterRender = props.menuFooterRender,
      _onCollapse = props.onCollapse,
      theme = props.theme,
      siderWidth = props.siderWidth,
      isMobile = props.isMobile,
      onMenuHeaderClick = props.onMenuHeaderClick,
      _props$breakpoint = props.breakpoint,
      breakpoint = _props$breakpoint === void 0 ? 'lg' : _props$breakpoint,
      style = props.style,
      layout = props.layout,
      _props$menuExtraRende = props.menuExtraRender,
      menuExtraRender = _props$menuExtraRende === void 0 ? false : _props$menuExtraRende,
      _props$collapsedButto = props.collapsedButtonRender,
      collapsedButtonRender = _props$collapsedButto === void 0 ? defaultRenderCollapsedButton : _props$collapsedButto,
      links = props.links,
      menuContentRender = props.menuContentRender,
      prefixCls = props.prefixCls,
      onOpenChange = props.onOpenChange,
      headerHeight = props.headerHeight;
  var baseClassName = "".concat(prefixCls, "-sider");

  var _MenuCounter$useConta = _Counter.default.useContainer(),
      flatMenuKeys = _MenuCounter$useConta.flatMenuKeys;

  var siderClassName = (0, _classnames.default)("".concat(baseClassName), (_classNames = {}, _defineProperty(_classNames, "".concat(baseClassName, "-fixed"), fixSiderbar), _defineProperty(_classNames, "".concat(baseClassName, "-layout-").concat(layout), layout && !isMobile), _defineProperty(_classNames, "".concat(baseClassName, "-light"), theme === 'light'), _classNames));
  var headerDom = defaultRenderLogoAndTitle(props);
  var extraDom = menuExtraRender && menuExtraRender(props);

  var menuDom = menuContentRender !== false && flatMenuKeys && /*#__PURE__*/_react.default.createElement(_BaseMenu.default, _extends({}, props, {
    mode: "inline",
    handleOpenChange: onOpenChange,
    style: {
      width: '100%'
    },
    className: "".concat(baseClassName, "-menu")
  }));

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, fixSiderbar && /*#__PURE__*/_react.default.createElement("div", {
    style: _objectSpread({
      width: collapsed ? 48 : siderWidth,
      overflow: 'hidden',
      flex: "0 0 ".concat(collapsed ? 48 : siderWidth, "px"),
      maxWidth: collapsed ? 48 : siderWidth,
      minWidth: collapsed ? 48 : siderWidth
    }, style)
  }), /*#__PURE__*/_react.default.createElement(Sider, {
    collapsible: true,
    trigger: null,
    collapsed: collapsed,
    breakpoint: breakpoint === false ? undefined : breakpoint,
    onCollapse: function onCollapse(collapse) {
      if (!isMobile) {
        if (_onCollapse) {
          _onCollapse(collapse);
        }
      }
    },
    collapsedWidth: 48,
    style: _objectSpread({
      overflow: 'hidden',
      paddingTop: layout === 'mix' && !isMobile ? headerHeight : undefined
    }, style),
    width: siderWidth,
    theme: theme,
    className: siderClassName
  }, headerDom && /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(baseClassName, "-logo"),
    onClick: layout !== 'mix' ? onMenuHeaderClick : undefined,
    id: "logo"
  }, headerDom), extraDom && /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(baseClassName, "-extra ").concat(!headerDom && "".concat(baseClassName, "-extra-no-logo"))
  }, extraDom), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      overflowX: 'hidden'
    }
  }, menuContentRender ? menuContentRender(props, menuDom) : menuDom), /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(baseClassName, "-links")
  }, /*#__PURE__*/_react.default.createElement(_menu.default, {
    theme: theme,
    inlineIndent: 16,
    className: "".concat(baseClassName, "-link-menu"),
    selectedKeys: [],
    openKeys: [],
    mode: "inline"
  }, (links || []).map(function (node, index) {
    return (
      /*#__PURE__*/
      // eslint-disable-next-line react/no-array-index-key
      _react.default.createElement(_menu.default.Item, {
        className: "".concat(baseClassName, "-link"),
        key: index
      }, node)
    );
  }), collapsedButtonRender && !isMobile && /*#__PURE__*/_react.default.createElement(_menu.default.Item, {
    className: "".concat(baseClassName, "-collapsed-button"),
    title: false,
    onClick: function onClick() {
      if (_onCollapse) {
        _onCollapse(!collapsed);
      }
    }
  }, collapsedButtonRender(collapsed)))), menuFooterRender && /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(baseClassName, "-footer")
  }, menuFooterRender(props))));
};

var _default = SiderMenu;
exports.default = _default;
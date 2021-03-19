import "antd/es/drawer/style";
import _Drawer from "antd/es/drawer";
import "antd/es/config-provider/style";
import _ConfigProvider from "antd/es/config-provider";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { useContext, useEffect, useMemo, useImperativeHandle, useRef } from 'react';
import useMergedState from "rc-util/es/hooks/useMergedState";
import { createPortal } from 'react-dom';
import omit from 'omit.js';
import BaseForm from '../../BaseForm';
import { noteOnce } from "rc-util/es/warning";

function DrawerForm(_ref) {
  var _context$getPopupCont;

  var children = _ref.children,
      trigger = _ref.trigger,
      onVisibleChange = _ref.onVisibleChange,
      drawerProps = _ref.drawerProps,
      onFinish = _ref.onFinish,
      title = _ref.title,
      width = _ref.width,
      rest = _objectWithoutProperties(_ref, ["children", "trigger", "onVisibleChange", "drawerProps", "onFinish", "title", "width"]);

  var _useMergedState = useMergedState(!!rest.visible, {
    value: rest.visible,
    onChange: onVisibleChange
  }),
      _useMergedState2 = _slicedToArray(_useMergedState, 2),
      visible = _useMergedState2[0],
      setVisible = _useMergedState2[1];

  noteOnce( // eslint-disable-next-line @typescript-eslint/dot-notation
  !rest['footer'] || !(drawerProps === null || drawerProps === void 0 ? void 0 : drawerProps.footer), 'DrawerForm 是一个 ProForm 的特殊布局，如果想自定义按钮，请使用 submit.render 自定义。');
  useEffect(function () {
    if (visible && rest.visible) {
      onVisibleChange === null || onVisibleChange === void 0 ? void 0 : onVisibleChange(true);
    }
  }, [visible]);
  /** 设置 trigger 的情况下，懒渲染优化性能；使之可以直接配合表格操作等场景使用 */

  var isFirstRender = useRef(!(drawerProps === null || drawerProps === void 0 ? void 0 : drawerProps.forceRender));
  /**
   * IsFirstRender.current 或者 visible 为 true 的时候就渲染 不渲染能会造成一些问题,比如再次打开值不对了 只有手动配置
   * drawerProps?.destroyOnClose 为 true 的时候才会每次关闭的时候删除 dom
   */

  var shouldRenderFormItems = useMemo(function () {
    if (isFirstRender.current && visible === false) {
      return false;
    }

    if (visible === false && (drawerProps === null || drawerProps === void 0 ? void 0 : drawerProps.destroyOnClose)) {
      return false;
    }

    return true;
  }, [visible, drawerProps === null || drawerProps === void 0 ? void 0 : drawerProps.destroyOnClose]);
  /** 同步 props 和 本地 */

  var formRef = useRef();
  var context = useContext(_ConfigProvider.ConfigContext);
  /** 如果 destroyOnClose ，重置一下表单 */

  useEffect(function () {
    if (visible) {
      isFirstRender.current = false;
    } // 再打开的时候重新刷新，会让 initialValues 生效


    if (visible && (drawerProps === null || drawerProps === void 0 ? void 0 : drawerProps.destroyOnClose)) {
      var _formRef$current;

      (_formRef$current = formRef.current) === null || _formRef$current === void 0 ? void 0 : _formRef$current.resetFields();
    }
  }, [drawerProps === null || drawerProps === void 0 ? void 0 : drawerProps.destroyOnClose, visible]);
  useImperativeHandle(rest.formRef, function () {
    return formRef.current;
  }, [formRef.current]);
  /** 不放到 body 上会导致 z-index 的问题 遮罩什么的都遮不住了 */

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/createPortal( /*#__PURE__*/React.createElement("div", {
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }, /*#__PURE__*/React.createElement(BaseForm, _extends({
    layout: "vertical"
  }, omit(rest, ['visible']), {
    formRef: formRef,
    submitter: _objectSpread({
      searchConfig: {
        submitText: '确认',
        resetText: '取消'
      },
      resetButtonProps: {
        preventDefault: true,
        onClick: function onClick(e) {
          var _drawerProps$onClose;

          setVisible(false);
          drawerProps === null || drawerProps === void 0 ? void 0 : (_drawerProps$onClose = drawerProps.onClose) === null || _drawerProps$onClose === void 0 ? void 0 : _drawerProps$onClose.call(drawerProps, e);
        }
      }
    }, rest.submitter),
    onFinish: /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(values) {
        var success, _formRef$current2;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (onFinish) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return");

              case 2:
                _context.next = 4;
                return onFinish(values);

              case 4:
                success = _context.sent;

                if (success) {
                  (_formRef$current2 = formRef.current) === null || _formRef$current2 === void 0 ? void 0 : _formRef$current2.resetFields();
                  setVisible(false);
                }

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(),
    contentRender: function contentRender(item, submitter) {
      return /*#__PURE__*/React.createElement(_Drawer, _extends({
        title: title,
        getContainer: false,
        width: width || 800
      }, drawerProps, {
        visible: visible,
        onClose: function onClose(e) {
          var _drawerProps$onClose2;

          setVisible(false);
          drawerProps === null || drawerProps === void 0 ? void 0 : (_drawerProps$onClose2 = drawerProps.onClose) === null || _drawerProps$onClose2 === void 0 ? void 0 : _drawerProps$onClose2.call(drawerProps, e);
        },
        footer: /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            justifyContent: 'flex-end'
          }
        }, submitter)
      }), shouldRenderFormItems ? item : null);
    }
  }), children)), (context === null || context === void 0 ? void 0 : (_context$getPopupCont = context.getPopupContainer) === null || _context$getPopupCont === void 0 ? void 0 : _context$getPopupCont.call(context, document.body)) || document.body), trigger && /*#__PURE__*/React.cloneElement(trigger, _objectSpread(_objectSpread({}, trigger.props), {}, {
    onClick: function onClick(e) {
      var _trigger$props, _trigger$props$onClic;

      setVisible(!visible);
      (_trigger$props = trigger.props) === null || _trigger$props === void 0 ? void 0 : (_trigger$props$onClic = _trigger$props.onClick) === null || _trigger$props$onClic === void 0 ? void 0 : _trigger$props$onClic.call(_trigger$props, e);
    }
  })));
}

export default DrawerForm;
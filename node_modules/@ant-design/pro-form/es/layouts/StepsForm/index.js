import "antd/es/form/style";
import _Form from "antd/es/form";
import "antd/es/space/style";
import _Space from "antd/es/space";
import "antd/es/button/style";
import _Button from "antd/es/button";
import "antd/es/steps/style";
import _Steps from "antd/es/steps";
import "antd/es/config-provider/style";
import _ConfigProvider from "antd/es/config-provider";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { useRef, useCallback, useEffect, useContext } from 'react';
import toArray from "rc-util/es/Children/toArray";
import useMergedState from "rc-util/es/hooks/useMergedState";
import classNames from 'classnames';
import { useIntl } from '@ant-design/pro-provider';
import { useMountMergeState } from '@ant-design/pro-utils';
import StepForm from './StepForm';
import './index.less';
export var StepsFormProvide = /*#__PURE__*/React.createContext(undefined);

function StepsForm(props) {
  var _useContext = useContext(_ConfigProvider.ConfigContext),
      getPrefixCls = _useContext.getPrefixCls;

  var prefixCls = getPrefixCls('pro-steps-form');

  var current = props.current,
      onCurrentChange = props.onCurrentChange,
      submitter = props.submitter,
      stepsFormRender = props.stepsFormRender,
      stepsRender = props.stepsRender,
      stepFormRender = props.stepFormRender,
      stepsProps = props.stepsProps,
      onFinish = props.onFinish,
      formProps = props.formProps,
      containerStyle = props.containerStyle,
      rest = _objectWithoutProperties(props, ["current", "onCurrentChange", "submitter", "stepsFormRender", "stepsRender", "stepFormRender", "stepsProps", "onFinish", "formProps", "containerStyle"]);

  var formDataRef = useRef(new Map());
  var formMapRef = useRef(new Map());
  var formArrayRef = useRef([]);

  var _useMountMergeState = useMountMergeState([]),
      _useMountMergeState2 = _slicedToArray(_useMountMergeState, 2),
      formArray = _useMountMergeState2[0],
      setFormArray = _useMountMergeState2[1];

  var _useMountMergeState3 = useMountMergeState(false),
      _useMountMergeState4 = _slicedToArray(_useMountMergeState3, 2),
      loading = _useMountMergeState4[0],
      setLoading = _useMountMergeState4[1];

  var intl = useIntl();
  /** 受控的方式来操作表单 */

  var _useMergedState = useMergedState(0, {
    value: props.current,
    onChange: props.onCurrentChange
  }),
      _useMergedState2 = _slicedToArray(_useMergedState, 2),
      step = _useMergedState2[0],
      setStep = _useMergedState2[1];
  /** 注册一个form进入，方便进行 props 的修改 */


  var regForm = useCallback(function (name, childrenFormProps) {
    formMapRef.current.set(name, childrenFormProps);
  }, []);
  /** 接触挂载掉这个 form，同时步数 -1 */

  var unRegForm = useCallback(function (name) {
    formMapRef.current.delete(name);
    formDataRef.current.delete(name);
  }, []);
  /** Children 计算完成之后，重新生成一下当前的步骤列表 */

  useEffect(function () {
    setFormArray(Array.from(formMapRef.current.keys()));
  }, [Array.from(formMapRef.current.keys()).join(',')]);
  /** ProForm处理了一下 from 的数据，在其中做了一些操作 如果使用 Provider 自带的，自带的数据处理就无法生效了 */

  var onFormFinish = useCallback( /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(name, formData) {
      var values, success;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              formDataRef.current.set(name, formData); // 如果是最后一步

              if (!(step === formMapRef.current.size - 1 || formMapRef.current.size === 0)) {
                _context.next = 19;
                break;
              }

              if (props.onFinish) {
                _context.next = 4;
                break;
              }

              return _context.abrupt("return");

            case 4:
              setLoading(true);
              values = Array.from(formDataRef.current.values()).reduce(function (pre, cur) {
                return _objectSpread(_objectSpread({}, pre), cur);
              }, {});
              _context.prev = 6;
              _context.next = 9;
              return props.onFinish(values);

            case 9:
              success = _context.sent;

              if (success) {
                setStep(0);
                formArrayRef.current.forEach(function (form) {
                  var _form$current;

                  return (_form$current = form.current) === null || _form$current === void 0 ? void 0 : _form$current.resetFields();
                });
              }

              _context.next = 16;
              break;

            case 13:
              _context.prev = 13;
              _context.t0 = _context["catch"](6);
              console.log(_context.t0);

            case 16:
              _context.prev = 16;
              setLoading(false);
              return _context.finish(16);

            case 19:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[6, 13, 16, 19]]);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }(), [step]);
  var stepsDom = /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixCls, "-steps-container"),
    style: {
      maxWidth: Math.min(formArray.length * 320, 1160)
    }
  }, /*#__PURE__*/React.createElement(_Steps, _extends({}, stepsProps, {
    current: step,
    onChange: undefined
  }), formArray.map(function (item) {
    var itemProps = formMapRef.current.get(item);
    return /*#__PURE__*/React.createElement(_Steps.Step, {
      key: item,
      title: itemProps === null || itemProps === void 0 ? void 0 : itemProps.title
    });
  })));

  var onSubmit = function onSubmit() {
    var _from$current;

    var from = formArrayRef.current[step];
    (_from$current = from.current) === null || _from$current === void 0 ? void 0 : _from$current.submit();
  };

  var next = submitter !== false && /*#__PURE__*/React.createElement(_Button, _extends({
    key: "next",
    type: "primary",
    loading: loading
  }, submitter === null || submitter === void 0 ? void 0 : submitter.submitButtonProps, {
    onClick: function onClick() {
      var _submitter$onSubmit;

      submitter === null || submitter === void 0 ? void 0 : (_submitter$onSubmit = submitter.onSubmit) === null || _submitter$onSubmit === void 0 ? void 0 : _submitter$onSubmit.call(submitter);
      onSubmit();
    }
  }), intl.getMessage('stepsForm.next', '下一步'));
  var pre = submitter !== false && /*#__PURE__*/React.createElement(_Button, _extends({
    key: "pre"
  }, submitter === null || submitter === void 0 ? void 0 : submitter.resetButtonProps, {
    onClick: function onClick() {
      var _submitter$onReset;

      // 没有判断是因为 step<1 这个按钮不显示
      setStep(step - 1);
      submitter === null || submitter === void 0 ? void 0 : (_submitter$onReset = submitter.onReset) === null || _submitter$onReset === void 0 ? void 0 : _submitter$onReset.call(submitter);
    }
  }), intl.getMessage('stepsForm.prev', '上一步'));
  var submit = submitter !== false && /*#__PURE__*/React.createElement(_Button, _extends({
    key: "submit",
    type: "primary",
    loading: loading
  }, submitter === null || submitter === void 0 ? void 0 : submitter.submitButtonProps, {
    onClick: function onClick() {
      var _submitter$onSubmit2;

      submitter === null || submitter === void 0 ? void 0 : (_submitter$onSubmit2 = submitter.onSubmit) === null || _submitter$onSubmit2 === void 0 ? void 0 : _submitter$onSubmit2.call(submitter);
      onSubmit();
    }
  }), intl.getMessage('stepsForm.submit', '提交'));

  var getActionButton = function getActionButton() {
    var index = step || 0;

    if (index < 1) {
      return [next];
    }

    if (index + 1 === formArray.length) {
      return [pre, submit];
    }

    return [pre, next];
  };

  var renderSubmitter = function renderSubmitter() {
    var submitterDom = getActionButton();

    if (submitter && submitter.render) {
      var _formArrayRef$current;

      var submitterProps = {
        form: (_formArrayRef$current = formArrayRef.current[step]) === null || _formArrayRef$current === void 0 ? void 0 : _formArrayRef$current.current,
        onSubmit: onSubmit,
        step: step,
        onPre: function onPre() {
          if (step < 1) {
            return;
          }

          setStep(step - 1);
        }
      };
      return submitter.render(submitterProps, submitterDom);
    }

    if (submitter && (submitter === null || submitter === void 0 ? void 0 : submitter.render) === false) {
      return null;
    }

    return submitterDom;
  };

  var formDom = toArray(props.children).map(function (item, index) {
    var itemProps = item.props;
    var name = itemProps.name || "".concat(index);
    regForm(name, itemProps);
    /** 是否是当前的表单 */

    var isShow = step === index;
    var config = isShow ? {
      contentRender: stepFormRender,
      submitter: false
    } : {};
    return /*#__PURE__*/React.createElement("div", {
      className: classNames("".concat(prefixCls, "-step"), _defineProperty({}, "".concat(prefixCls, "-step-active"), isShow)),
      key: name
    }, /*#__PURE__*/React.cloneElement(item, _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, config), formProps), itemProps), {}, {
      name: name,
      step: index,
      key: name
    })));
  });
  var finalStepsDom = props.stepsRender ? props.stepsRender(formArray.map(function (item) {
    var _formMapRef$current$g;

    return {
      key: item,
      title: (_formMapRef$current$g = formMapRef.current.get(item)) === null || _formMapRef$current$g === void 0 ? void 0 : _formMapRef$current$g.title
    };
  }), stepsDom) : stepsDom;
  var submitterDom = renderSubmitter();
  return /*#__PURE__*/React.createElement("div", {
    className: prefixCls
  }, /*#__PURE__*/React.createElement(_Form.Provider, rest, /*#__PURE__*/React.createElement(StepsFormProvide.Provider, {
    value: {
      loading: loading,
      setLoading: setLoading,
      keyArray: formArray,
      next: function next() {
        if (step > formArray.length - 2) {
          return;
        }

        setStep(step + 1);
      },
      formArrayRef: formArrayRef,
      formMapRef: formMapRef,
      unRegForm: unRegForm,
      onFormFinish: onFormFinish
    }
  }, stepsFormRender ? stepsFormRender( /*#__PURE__*/React.createElement(React.Fragment, null, finalStepsDom, /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixCls, "-container"),
    style: containerStyle
  }, formDom)), submitterDom) : /*#__PURE__*/React.createElement(React.Fragment, null, finalStepsDom, /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixCls, "-container"),
    style: containerStyle
  }, formDom, /*#__PURE__*/React.createElement(_Space, null, renderSubmitter()))))));
}

StepsForm.StepForm = StepForm;
StepsForm.useForm = _Form.useForm;
export default StepsForm;
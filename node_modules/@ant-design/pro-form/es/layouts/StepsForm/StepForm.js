function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { useContext, useRef, useEffect, useImperativeHandle } from 'react';
import { noteOnce } from "rc-util/es/warning";
import BaseForm from '../../BaseForm';
import { StepsFormProvide } from './index';

function StepForm(_ref) {
  var onFinish = _ref.onFinish,
      step = _ref.step,
      propFormRef = _ref.formRef,
      restProps = _objectWithoutProperties(_ref, ["onFinish", "step", "formRef"]);

  var formRef = useRef();
  var context = useContext(StepsFormProvide); // eslint-disable-next-line @typescript-eslint/dot-notation

  noteOnce(!restProps['submitter'], 'StepForm 不包含提交按钮，请在 StepsForm 上');
  /** 重置 formRef */

  useImperativeHandle(propFormRef, function () {
    return formRef.current;
  }, [formRef.current]);
  /** Dom 不存在的时候解除挂载 */

  useEffect(function () {
    return function () {
      if (restProps.name) {
        context === null || context === void 0 ? void 0 : context.unRegForm(restProps.name);
      }
    };
  }, []);

  if (context && (context === null || context === void 0 ? void 0 : context.formArrayRef)) {
    context.formArrayRef.current[step || 0] = formRef;
  }

  return /*#__PURE__*/React.createElement(BaseForm, _extends({
    formRef: formRef,
    onFinish: /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(values) {
        var success;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (restProps.name) {
                  context === null || context === void 0 ? void 0 : context.onFormFinish(restProps.name, values);
                }

                if (!onFinish) {
                  _context.next = 9;
                  break;
                }

                context === null || context === void 0 ? void 0 : context.setLoading(true); // 如果报错，直接抛出

                _context.next = 5;
                return onFinish === null || onFinish === void 0 ? void 0 : onFinish(values);

              case 5:
                success = _context.sent;

                if (success) {
                  context === null || context === void 0 ? void 0 : context.next();
                }

                context === null || context === void 0 ? void 0 : context.setLoading(false);
                return _context.abrupt("return");

              case 9:
                context === null || context === void 0 ? void 0 : context.next();

              case 10:
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
    layout: "vertical"
  }, restProps));
}

export default StepForm;
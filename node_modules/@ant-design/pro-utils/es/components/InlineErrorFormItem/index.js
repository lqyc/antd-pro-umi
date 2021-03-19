import "antd/es/form/style";
import _Form from "antd/es/form";
import "antd/es/popover/style";
import _Popover from "antd/es/popover";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React, { useState } from 'react';

var InlineErrorFormItem = function InlineErrorFormItem(props) {
  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      visible = _useState2[0],
      setVisible = _useState2[1];

  return /*#__PURE__*/React.createElement(_Form.Item, _extends({
    style: {
      margin: '-5px 0'
    },
    preserve: false // @ts-ignore
    ,
    _internalItemRender: {
      mark: 'pro_table_render',
      render: function render(inputProps, _ref) {
        var input = _ref.input,
            errorList = _ref.errorList,
            extra = _ref.extra;
        var errors = inputProps.errors;
        return /*#__PURE__*/React.createElement(_Popover, {
          trigger: props.trigger,
          placement: "topLeft",
          visible: errors.length > 0 && visible,
          content: /*#__PURE__*/React.createElement("div", null, errorList),
          onVisibleChange: function onVisibleChange(v) {
            return errors.length > 0 && setVisible(v);
          }
        }, /*#__PURE__*/React.createElement("div", null, input, extra));
      }
    }
  }, props), props.children);
};

export default InlineErrorFormItem;
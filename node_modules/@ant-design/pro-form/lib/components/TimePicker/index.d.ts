/// <reference types="moment" />
import React from 'react';
import type { DatePickerProps } from 'antd';
import type { ProFormItemProps } from '../../interface';
/** 时间选择器 */
declare const ProFormTimePicker: React.FC<ProFormItemProps<import("antd/lib/date-picker/generatePicker").PickerProps<import("moment").Moment>>> & {
    RangePicker: React.FC<ProFormItemProps<DatePickerProps>>;
};
export default ProFormTimePicker;

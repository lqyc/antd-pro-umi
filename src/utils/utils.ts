import { parse } from 'querystring';

/* eslint no-useless-escape:0 import/prefer-default-export:0 */
const reg = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/;

export const isUrl = (path: string): boolean => reg.test(path);

export const isAntDesignPro = (): boolean => {
  if (ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION === 'site') {
    return true;
  }
  return window.location.hostname === 'preview.pro.ant.design';
};

// 给官方演示站点用，用于关闭真实开发环境不需要使用的特性
export const isAntDesignProOrDev = (): boolean => {
  const { NODE_ENV } = process.env;
  if (NODE_ENV === 'development') {
    return true;
  }
  return isAntDesignPro();
};

export const getPageQuery = () => parse(window.location.href.split('?')[1]);

// 格式化时间
export const formatTime = (type:string = 'date') => {
  const date = new Date();
  let month: string | number = date.getMonth() + 1;
  let strDate: string | number = date.getDate();

  if (strDate <= 9) {
      strDate = "0" + strDate;
  }
  let _formTime = ''
  if (type == 'date') {
    // 仅日期
    _formTime =  date.getFullYear() + "年" + month + "月" + strDate + "日"
  } else {
    // 时分秒 type = more
    if (month <= 9) {
      month = "0" + month;
    }
    _formTime = date.getFullYear() + "-" + month + "-" + strDate
    + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
  }

  return _formTime
}

import { Settings as ProSettings } from '@ant-design/pro-layout';

type DefaultSettings = Partial<ProSettings> & {
  pwa: boolean;
};

const proSettings: DefaultSettings = {
  navTheme: 'light',
  primaryColor: '#6750D7',
  layout: 'mix',
  contentWidth: 'Fluid',
  fixedHeader: true,
  fixSiderbar: true,
  colorWeak: false,
  title: 'qyc-antd-pro',
  pwa: false,
  iconfontUrl: 'iconfont.js',
  headerHeight: 48,
  footerRender: false,
  splitMenus: true,
  menu: {
    locale: false,
    defaultOpenAll: false
  }
};

export type { DefaultSettings };

export default proSettings;

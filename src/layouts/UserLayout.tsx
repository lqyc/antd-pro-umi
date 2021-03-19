import type { MenuDataItem } from '@ant-design/pro-layout';
import { getMenuData, getPageTitle } from '@ant-design/pro-layout';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import type { ConnectProps } from 'umi';
import { useIntl, connect } from 'umi';
import React from 'react';
import type { ConnectState } from '@/models/connect';
import logo from '../assets/headerLogo.png';
import styles from './UserLayout.less';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';

export type UserLayoutProps = {
  breadcrumbNameMap: Record<string, MenuDataItem>;
} & Partial<ConnectProps>;

const UserLayout: React.FC<UserLayoutProps> = (props) => {
  const {
    route = {
      routes: [],
    },
  } = props;
  const { routes = [] } = route;
  const {
    children,
    location = {
      pathname: '',
    },
  } = props;
  const { formatMessage } = useIntl();
  const { breadcrumb } = getMenuData(routes);
  const title = getPageTitle({
    pathname: location.pathname,
    formatMessage,
    breadcrumb,
    ...props,
  });
  return (
    <ConfigProvider locale={zhCN}>
      <HelmetProvider>
        <Helmet>
          <title>登录</title>
          <meta name="description" content={title} />
        </Helmet>

        <div className={styles.container}>
          <div className={styles.content}>
              <div className={styles.header}>
                  <img alt="logo" className={styles.logo} src={logo} />
                  <span className={styles.title}>qyc-antd-pro</span>
              </div>
            {children}
          </div>
        </div>
      </HelmetProvider>
    </ConfigProvider>
  );
};

export default connect(({ settings }: ConnectState) => ({ ...settings }))(UserLayout);

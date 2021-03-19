/**
 * Ant Design Pro v4 use `@ant-design/pro-layout` to handle Layout.
 * You can view component api by:
 * https://github.com/ant-design/ant-design-pro-layout
 */
import type {
  MenuDataItem,
  BasicLayoutProps as ProLayoutProps,
  Settings,
} from '@ant-design/pro-layout';
import ProLayout, { SettingDrawer } from '@ant-design/pro-layout';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import type { Dispatch } from 'umi';
import { Link, useIntl, connect, history } from 'umi';
import { Result, Button } from 'antd';
import Authorized from '@/utils/Authorized';
import RightContent from '@/components/GlobalHeader/RightContent';
import type { ConnectState } from '@/models/connect';
import { getMatchMenu } from '@umijs/route-utils';
import logo from '../assets/headerLogo.png';
import { uniqueId } from 'lodash';
import { getTabsList } from "@/common/tabsConfig";

const noMatch = (
  <Result
    status={403}
    title="403"
    subTitle="Sorry, you are not authorized to access this page."
    extra={
      <Button type="primary">
        <Link to="/user/login">去登录</Link>
      </Button>
    }
  />
);
export type BasicLayoutProps = {
  breadcrumbNameMap: Record<string, MenuDataItem>;
  route: ProLayoutProps['route'] & {
    authority: string[];
  };
  settings: Settings;
  dispatch: Dispatch;
} & ProLayoutProps;
export type BasicLayoutContext = { [K in 'location']: BasicLayoutProps[K] } & {
  breadcrumbNameMap: Record<string, MenuDataItem>;
};
/**
 * use Authorized check all menu item
 */

const menuDataRender = (menuList: MenuDataItem[]): MenuDataItem[] =>
  menuList.map((item) => {
    const localItem = {
      ...item,
      children: item.children ? menuDataRender(item.children) : undefined,
    };
    return Authorized.check(item.authority, localItem, null) as MenuDataItem;
  });

const BasicLayout: React.FC<BasicLayoutProps> = (props) => {
  const {
    dispatch,
    children,
    settings,
    location = {
      pathname: '/',
    },
  } = props;
  const [collapsed, setCollapsed] = useState(false);
  const menuDataRef = useRef<MenuDataItem[]>([]);
  
  useEffect(() => {
    // 路由监听
    history.listen((location: any, action: any) => {
      const currentTab:any = getTabsList(location.pathname)
      // 标签页全局配置
      if (currentTab && currentTab.title) {
        dispatch({
          type: 'global/changeTagPage',
          payload: currentTab
        })
      } else {
        dispatch({
          type: 'global/clearTagPage'
        })
      }
    })
  }, []);

  useEffect(() => {
    if (dispatch) {
      dispatch({
        type: 'user/fetchCurrent',
      });
    }
  }, []);

  const authorized = useMemo(
    () =>
      getMatchMenu(location.pathname || '/', menuDataRef.current).pop() || {
        authority: undefined,
      },
    [location.pathname],
  );
  // 导航栏菜单
  const onMenuClick = (
    activeKey: string
  ) => {
    // console.log('路径path：',activeKey)
    history.push(activeKey)
  };
  const { formatMessage } = useIntl();
  return (
    <>
      <ProLayout
       locale='zh-CN'
        headerTheme="light"
        navTheme="light"
        logo={logo}
        formatMessage={formatMessage}
        {...props}
        {...settings}
        collapsed={collapsed}
        collapsedButtonRender={false}
        onMenuHeaderClick={() => history.push('/home')}
        menuItemRender={(menuItemProps, defaultDom) => {
          if (
            menuItemProps.isUrl ||
            !menuItemProps.path ||
            location.pathname === menuItemProps.path
          ) {
            return defaultDom;
          }

          // return <Link to={menuItemProps.path}>{defaultDom}</Link>;
          return <div onClick={() =>onMenuClick(`${menuItemProps.path}`)}>{defaultDom}</div>;
        }}
        breadcrumbRender={(routers = []) => [
          ...routers
        ]}
        itemRender={(route) => {
          return (
            <span>{route.breadcrumbName}</span>
          );
        }}
        menuDataRender={menuDataRender}
        rightContentRender={() => <RightContent />}
        postMenuData={(menuData) => {
          menuDataRef.current = menuData || [];
          const _menu = menuData
          if (_menu && _menu[0] && _menu[0].name &&_menu[0].name == '首页') {
            return  [       
              {
                icon: collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />,
                name: ' ',
                key: uniqueId('_icon_'),
                onTitleClick: () => setCollapsed(!collapsed)
              },
              ...(menuData || []),
            ];
          } else {
            return  [
              ...(menuData || []),
            ];
          }
        }}
      >
        <Authorized authority={authorized!.authority} noMatch={noMatch}>
          {children}
        </Authorized>
      </ProLayout>
      <SettingDrawer
        settings={settings}
        onSettingChange={(config) =>
          dispatch({
            type: 'settings/changeSetting',
            payload: config,
          })
        }
      />
    </>
  );
};

export default connect(({ global, settings }: ConnectState) => ({
  collapsed: global.collapsed,
  settings,
}))(BasicLayout);

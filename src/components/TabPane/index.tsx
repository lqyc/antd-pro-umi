
import { Tabs } from 'antd';
import React from 'react';
import { history } from 'umi';
import { connect } from 'umi';
import type { ConnectState } from '@/models/connect';
import type { RoutesItem } from '@/models/global';
import type { ConnectProps } from 'umi';

// import styles from './index.less';

const { TabPane } = Tabs;

type TabProps = {
  currentRoutes?: RoutesItem;
  path?:string;
} & ConnectProps;

const TabPaneBox: React.FC<TabProps> = (props) => {
  const {
    currentRoutes:Panes,
    path,
    dispatch
  } = props
  // 标签页
  const onChangeTab = (
    path: string
  ) => {
    history.push(path)
  };
  const CloseTab = (e: React.MouseEvent | React.KeyboardEvent)=>{
      const pageInfo = {
        currentTab: e,
        currentPath: path
      }
      if (dispatch) {
        dispatch({
          type: 'global/removeCurrentTag',
          payload: pageInfo
        })
      }
  }
  return(
    <Tabs 
    defaultActiveKey={path}
    type="editable-card" 
    hideAdd
    size='small' 
    tabBarGutter={8}
    // activeKey={activeKey}
    onEdit={(e:any)=>CloseTab(e)}
    // onTabClick={(params) => onChangeTab( params)}
    >
      {Panes && Panes.map((pane:any) => (
        <TabPane tab={
          <div onClick={() =>onChangeTab(`${pane.path}`)}>{pane.title}</div>
      } key={pane.path}></TabPane>
      ))}
    </Tabs>
  )
};

export default connect(({global}:ConnectState)=>({
  currentRoutes: global.currentRoutes
}))(TabPaneBox);

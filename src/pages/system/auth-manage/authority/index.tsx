import { Tooltip } from 'antd';
import { FC } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import ProTable, { ProColumns } from '@ant-design/pro-table';
import { TableListItem } from './data.d';
import { queryRule } from './service';
import styles from './index.less';
import {ProFormDateTimeRangePicker} from '@ant-design/pro-form';
import { connect } from 'umi';
import type { ConnectProps } from 'umi';
import type { RoutesItem } from '@/models/global';
import type { ConnectState } from '@/models/connect';
import TabPaneBox from '@/components/TabPane';


type OperationProps = {
  currentRoutes?: RoutesItem;
} & ConnectProps;

const AuthManage:FC<OperationProps> =(props) => {
  const {
    location = {
      pathname: '/',
    }
  } = props
  // console.log('currentRoutes',currentRoutes)

  const columns: ProColumns<TableListItem>[] = [
    {
      title: '权限管理',
      dataIndex: 'name',
      // formItemProps: {
      //   rules: [
      //     {
      //       required: true,
      //       message: '规则名称为必填项',
      //     },
      //   ],
      // },
      valueEnum: {
        0: { text: '关闭', status: 'Default' },
        1: { text: '运行中', status: 'Processing' },
        2: { text: '已上线', status: 'Success' },
        3: { text: '异常', status: 'Error' },
      }
    },
    {
      title: '详细描述',
      dataIndex: 'desc',
      hideInForm: true,
      renderText: (item) => {
        return <Tooltip title={item}>
                <span>{item}</span>
              </Tooltip>
      }
    },
    {
      title: '操作时间',
      dataIndex: 'updatedAt',
      valueType: 'dateTime',
      hideInForm: true,
      renderFormItem: (item, { defaultRender, ...rest }, form) => {
        return <ProFormDateTimeRangePicker name="dateTimeRange" label="" />
      },
    },
    {
      title: '菜单路径',
      dataIndex: 'status',
      valueType: 'textarea',
      hideInSearch: true
    }
  ];

  return (
  <PageContainer header={{
    title: '',
    footer: <TabPaneBox path={location.pathname}/>
  }}>
      <>
      <ProTable<TableListItem>
          headerTitle=""
          toolBarRender= {false}
          rowKey="key"
          search={{
            labelWidth: 120,
            searchText: '查询',
            resetText: '重置',
            defaultCollapsed: false,
            collapseRender:()=>false
          }}
          tableClassName={styles.tableWrapper}
          request={(params, sorter, filter) => queryRule({ ...params, sorter, filter })}
          columns={columns}
        />
      </>
  </PageContainer>
  )
};

export default connect(({global}:ConnectState)=>({
  currentRoutes: global.currentRoutes
}))(AuthManage);
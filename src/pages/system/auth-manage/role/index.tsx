import { FC } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import ProTable, { ProColumns } from '@ant-design/pro-table';
import { TableListItem } from './data.d';
import { getRolelist } from './service';
import styles from './index.less';
import { connect } from 'umi';
import type { RoutesItem } from '@/models/global';
import type { ConnectState } from '@/models/connect';
import type { ConnectProps } from 'umi';
import TabPaneBox from '@/components/TabPane';

type OperationProps = {
  currentRoutes?: RoutesItem;
} & ConnectProps;

const RoleManage: FC<OperationProps> =(props) => {
  const {
    location = {
      pathname: '/',
      }
  } = props
  // console.log('currentRoutes',currentRoutes)
  const removeRole = (selectedRows: any) => {
    console.log('移除角色',selectedRows)
  }
  const columns: ProColumns<TableListItem>[] = [
    {
      title: '编号',
      dataIndex: 'key'
    },
    {
      title: '姓名',
      dataIndex: 'name'
    },
    {
      title: '角色',
      dataIndex: 'role',
      valueType: 'dateTime'
    },
    {
      title: '邮箱',
      dataIndex: 'email',
      valueType: 'textarea',
      hideInSearch: true
    },
    {
      title: '状态',
      dataIndex: 'status',
      renderText: (item: number) => `${item == 0 ? '开启':'关闭'}`,
    },
    {
      title: '操作',
      dataIndex: 'option',
      valueType: 'option',
      hideInSearch: true,
      render: (_, record) => (
        <>
          <a onClick={() => {
              removeRole(record);
            }}>
            移除
          </a>
        </>
      )
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
          search={false}
          tableClassName={styles.tableWrapper}
          request={(params, sorter, filter) => getRolelist({ ...params, sorter, filter })}
          columns={columns}
        />
      </>
  </PageContainer>
  )
};

export default connect(({global}:ConnectState)=>({
  currentRoutes: global.currentRoutes
}))(RoleManage);
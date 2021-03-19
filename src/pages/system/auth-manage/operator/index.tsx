import { FC, useState } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { PlusOutlined } from '@ant-design/icons';
import ProTable, { ProColumns } from '@ant-design/pro-table';
import { TableListItem } from './data.d';
import { queryOperateList } from './service';
import styles from './index.less';
import {ProFormDateTimeRangePicker} from '@ant-design/pro-form';
import { connect } from 'umi';
import type { RoutesItem } from '@/models/global';
import type { ConnectState } from '@/models/connect';
import type { ConnectProps } from 'umi';
import TabPaneBox from '@/components/TabPane';
import {  Button,Switch, Modal } from 'antd';
import EditOperationModal from './components/EditOperationModal';
import { message, Select } from 'antd';

type ManageProps = {
  currentRoutes?: RoutesItem;
} & ConnectProps;


const onChangeStatus = (e: any) => {
  console.log('开关',e)
}

const deleteOperateItem = (currentItem: TableListItem) => {
    console.log('deleteOperateItem',currentItem)
    Modal.confirm({
      centered: true,
      content: '你确定要删除该操作员吗？',
      mask:false,
      okText: '确认',
      cancelText: '取消',
      onOk: () => deleteItem(currentItem.name),
    });
};
const deleteItem = (id: string) => {
  console.log('deleteItem',id)
};

const OperationManager: FC<ManageProps> =(props) => {
  const {
    location = {
      pathname: '/',
    }
  } = props
  const [editModalVisible, handleditModalVisible] = useState<boolean>(false);
  const [done, setDone] = useState<boolean>(false);
  const [visible, setVisible] = useState<boolean>(false);
  console.log('editModalVisible',editModalVisible)
  const [current, setCurrent] = useState<Partial<TableListItem> | undefined>(undefined);

  const handleDone = () => {
    setDone(false);
    setVisible(false);
  };
  // 编辑表格
  const editOperateValue = (key:string,selectedRows: any) => {
    console.log('编辑表格',key,selectedRows)
    setVisible(true);
    if (key == 'create') {
      setCurrent(undefined);
    } else setCurrent(selectedRows);
  }
  const handleCancel = () => {
    setVisible(false);
  };
  const handleSubmit = (values: TableListItem) => {
    console.log('提交',values)
    message.success('🎉 🎉 🎉  操作成功！');
    setDone(true);
    setVisible(false);
  };
  const nameList:any = [
    {key: '',label: '全部'},
    {key: '1',label: '王先森'},
    {key: '2',label: '林先森'},
    {key: '3',label: '王先森2'}
  ]
  const { Option } = Select;
  const columns: ProColumns<TableListItem>[] = [
    {
      title: '编号',
      dataIndex: 'key',
      valueType: 'textarea',
      initialValue: '2',
      hideInSearch: true
    },
    {
      title: '操作员名',
      dataIndex: 'owner',
      order:2,
      hideInSearch: true
    },
    {
      title: '姓名',
      dataIndex: 'name',
      hideInForm: true,
      filters: true,
      onFilter: true,
      renderFormItem: (item, { defaultRender, ...rest }, form) => {
        return <Select placeholder="请输入姓名" defaultValue="">
                {nameList.map((i:any) => (
                  <Option value={i.key}>{i.label}</Option>
                ))}
              </Select>
      }
    },
    {
      title: '角色',
      dataIndex: 'role',
      renderFormItem: (item, { defaultRender, ...rest }, form) => {
        return <Select placeholder="请输入姓名" defaultValue="">
                {nameList.map((i:any) => (
                  <Option value={i.key}>{i.label}</Option>
                ))}
              </Select>
      }
    },
    {
      title: '手机号',
      dataIndex: 'callNo',
      valueType: 'textarea',
      hideInSearch: true
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
      renderFormItem: (item, { defaultRender, ...rest }, form) => {
        return <Select placeholder="请输入姓名" defaultValue="">
                {nameList.map((i:any) => (
                  <Option value={i.key}>{i.label}</Option>
                ))}
              </Select>
      },
      render: () => {
        return <Switch defaultChecked onChange={onChangeStatus}/>
      }
    },
    {
      title: '创建时间',
      dataIndex: 'updatedAt',
      valueType: 'dateTime',
      hideInSearch: true,
      renderFormItem: (item, { defaultRender, ...rest }, form) => {
        return <ProFormDateTimeRangePicker name="dateTimeRange" label="" />
      },
    },
    {
      title: '操作',
      dataIndex: 'option',
      valueType: 'option',
      hideInSearch: true,
      render: (_, record) => (
        <>
          <a
            onClick={() => {
              handleditModalVisible(true);
              editOperateValue('edit',record);
            }}
          >
            编辑
          </a>
          <a
          className="marginLeft"
          onClick={()=> {deleteOperateItem(record)}}
          >删除</a>
        </>
      )
    }
  ];

  return (
    <div>
      <PageContainer header={{
        title: '',
        footer: <TabPaneBox path={location.pathname}/>
      }}>
        <ProTable<TableListItem>
            headerTitle=""
            options={false}
            pagination={{
              showQuickJumper: true
            }}
            toolBarRender={() => [
              <Button type="primary" onClick={()=> {
                handleditModalVisible(true);
                editOperateValue('create', {});
              }}>
                <PlusOutlined /> 新建
              </Button>,
            ]}
            rowKey="key"
            search={{
              labelWidth: 120,
              searchText: '查询',
              resetText: '重置',
              defaultCollapsed: false,
              collapseRender:()=>false
            }}
            columnEmptyText= '-'
            tableClassName={styles.tableWrapper}
            request={(params, sorter, filter) => queryOperateList({ ...params, sorter, filter })}
            columns={columns}
          />
      </PageContainer>
      <EditOperationModal
        done={done}
        current={current}
        visible={visible}
        onDone={handleDone}
        onCancel={handleCancel}
        onSubmit={handleSubmit}
      />
  </div>
  )
};
export default connect(({global}:ConnectState)=>({
  currentRoutes: global.currentRoutes
}))(OperationManager);

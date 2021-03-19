import { FC, useEffect } from 'react';
import { Modal, Form, Input, Select } from 'antd';
import { TableListItem } from '../data.d';
import styles from '../index.less';

interface OperationModalProps {
  done: boolean;
  visible: boolean;
  current: Partial<TableListItem> | undefined;
  onDone: () => void;
  onSubmit: (values: TableListItem) => void;
  onCancel: () => void;
}

const formLayout = {
  labelCol: { span: 7 },
  wrapperCol: { span: 13 },
};

const OperationModal: FC<OperationModalProps> = (props) => {
  const [form] = Form.useForm();
  const { done, visible, current, onDone, onCancel, onSubmit } = props;

  useEffect(() => {
    if (form && !visible) {
      form.resetFields();
    }
  }, [props.visible]);

  useEffect(() => {
    if (current) {
      form.setFieldsValue({
        ...current
      });
    }
  }, [props.current]);

  const handleSubmit = () => {
    if (!form) return;
    form.submit();
  };

  const handleFinish = (values: { [key: string]: any }) => {
    if (onSubmit) {
      onSubmit(values as TableListItem);
    }
  };

  const modalFooter = { okText: '确定', onOk: handleSubmit,cancelText:'取消', onCancel };

  const getModalContent = () => {
    return (
      <Form {...formLayout} form={form} onFinish={handleFinish}>
        <Form.Item
          name="owner"
          label="操作员名"
          rules={[{ required: true, message: '请输入操作员名' }]}
        >
          <Input placeholder="请输入操作员名" />
        </Form.Item>
        <Form.Item
          name="name"
          label="姓名"
          rules={[{ required: true, message: '请输入真实姓名' }]}
        >
          <Input placeholder="请输入姓名" />
        </Form.Item>
        <Form.Item
          name="email"
          label="邮箱"
          rules={[{ required: true, message: '请输入公司邮箱' }]}
        >
          <Input placeholder="请输入公司邮箱" />
        </Form.Item>
        <Form.Item
          name="phone"
          label="手机号"
        >
          <Input placeholder="请输入手机号" />
        </Form.Item>
        <Form.Item
          name="owner"
          label="角色"
          rules={[{ required: true, message: '请选择（可多选）' }]}
        >
          <Select placeholder="请选择">
            <Select.Option value="付晓晓">付晓晓</Select.Option>
            <Select.Option value="周毛毛">周毛毛</Select.Option>
            <Select.Option value="毛毛">周毛毛</Select.Option>
            <Select.Option value="周毛">周毛毛</Select.Option>
          </Select>
        </Form.Item>
      </Form>
    );
  };

  return (
    <Modal
      getContainer={false}
      forceRender
      title={`${current ? '编辑' : '新增'}操作员`}
      className={styles.standardListForm}
      width={640}
      bodyStyle={done ? { padding: '72px 0' } : { padding: '28px 0 0' }}
      destroyOnClose
      visible={visible}
      {...modalFooter}
    >
      {getModalContent()}
    </Modal>
  );
};

export default OperationModal;

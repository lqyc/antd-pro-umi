import { Col, Row } from 'antd';

import { PageContainer } from '@ant-design/pro-layout';
import React from 'react';
import styles from './index.less';


export default () => (
  <PageContainer>
    <div className={styles.editor}>
      <Row className={styles.editorHd}>
        <Col span={24}>
          hhhhh看接口了健康卡
        </Col>
      </Row>
    </div>
  </PageContainer>
);

import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import { RedoOutlined } from '@ant-design/icons';
import { useIntl } from 'umi';

export const ModalReload: React.FC<any> = () => {
  const intl = useIntl();
  const [state, setState] = useState({ visible: true });

  const handleOk = () => {
    setState({
      visible: false,
    });
  };
  return (
    <div>
      <Modal visible={state.visible} closable={false} centered footer={null} width={125}>
        <Button onClick={handleOk} style={{ border: 0 }}>
          <RedoOutlined style={{ fontSize: '40px' }} />
          <br />
          {intl.formatMessage({ id: 'cash.reload' })}
        </Button>
      </Modal>
    </div>
  );
};

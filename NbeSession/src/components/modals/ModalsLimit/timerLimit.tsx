import React from 'react';
import { Alert } from 'antd';
import { getLocale } from 'umi';
import './timerLimit.less';

const AlertErrorSession: React.FC = () => {
  return (
    <>
      <Alert
        message={
          getLocale() === 'es-ES'
            ? 'No fue posible renovar su sesión'
            : 'It was not possible to refresh your session'
        }
        type="warning"
        showIcon
        closable
        className="content"
      />
    </>
  );
};

export default AlertErrorSession;

import React from 'react';
import { Button} from 'antd';
import { useIntl } from "umi";
import { ComponentProps } from '@/interfaces/validate-address.interface';
import styles from './index.less';

const ValidateAddres: React.FC<ComponentProps> = ({ address, fonts, actionBtn }) => {
  const intl = useIntl();
  const userAgent = navigator.userAgent || navigator.vendor;
  const valBlock = (/android/i.test(userAgent) || (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream)) ? true : false;

  return (
    <div className={styles.container} >
      <div className={styles.heading}>
        <h2 style={{ fontFamily: fonts?.fontTitle }}>{intl.formatMessage({ id: 'BLOCK_NAME.title' })}</h2>
        <p style={{ fontFamily: fonts?.fontSubtitle }}>{intl.formatMessage({ id: 'BLOCK_NAME.subtitle' })}</p>
      </div>
      <p style={{ fontFamily: fonts?.fontAddress }}>{address}</p>
      <Button type="primary" shape="round" size='large' block={valBlock} onClick={actionBtn}>{intl.formatMessage({ id: 'BLOCK_NAME.btn' })}</Button>
    </div>
  );
}

export default ValidateAddres;

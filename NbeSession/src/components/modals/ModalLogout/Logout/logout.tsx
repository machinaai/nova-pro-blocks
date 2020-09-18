import React from 'react';
import { Modal } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import { getLocale } from 'umi';
import styles from './logout.less';

async function LogoutModal() {
  // variable to show modal
  let modal: any;
  // Function to destroy modal
  const close = () => {
    modal.destroy();
  };
  // Modal
  modal = Modal.info({
    title: (
      <>
        <div className={styles.header}>
          <div className={styles.title}>
            {getLocale() === 'es-ES' ? 'Cierre de sesión exitoso.' : 'Successful logout'}
          </div>
          <div className={styles.ico} onClick={close}>
            <CloseOutlined className={styles.ico} />
          </div>
        </div>
      </>
    ),
    content: (
      <>
        <div className={styles.subtitle}>
          {getLocale() === 'es-ES'
            ? '¡Gracias por usar Banca Empresarial!'
            : '¡Thank you for using Corporate Banking!'}
        </div>
      </>
    ),
    centered: true,
    width: 480,
    className: styles.logoutmodal,
  });
}
export default LogoutModal;

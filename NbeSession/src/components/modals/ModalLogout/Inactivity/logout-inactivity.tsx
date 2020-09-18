import React from 'react';
import { Modal } from 'antd';
import { CloseOutlined, InfoCircleFilled } from '@ant-design/icons';
import { getLocale } from 'umi';
import { Transaction } from '../interfaces/activityresponse.interface';
import styles from './logout-inactivity.less';

async function InactivityModal(transactions: Transaction[]) {
  const col1 = transactions.slice(0, 3);
  const col2 = transactions.slice(3, 6);
  // temporal variable to show operations
  const serviceOp: boolean = true;
  // variable to show modal
  let modal: any;
  // Function to destroy modal
  const close = () => {
    modal.destroy();
  };
  // Modal
  modal = Modal.info({
    icon: <InfoCircleFilled rotate={180} />,
    title: (
      <>
        <div className={styles.header}>
          <div className={styles.title}>
            {getLocale() === 'es-ES'
              ? 'Por su seguridad su sesión ha sido cerrada.'
              : 'For your security your session has been closed.'}
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
        {serviceOp ? (
          <div className={styles.container}>
            <div className="">
              {getLocale() === 'es-ES' ? 'Operaciones realizadas:' : 'Operation performed:'}
            </div>
            <div className={styles.operations}>
              <div className={styles.colum}>
                {col1.map((element) => {
                  return (
                    <div className={styles.operation}>
                      <div className={styles.description}>{element.transactionDescription} </div>
                      <div className={styles.number}> {element.transactionNumber} </div>
                    </div>
                  );
                })}
              </div>
              <div className={styles.colum}>
                {col2.map((element) => {
                  return (
                    <div className={styles.operation}>
                      <div className={styles.description}>{element.transactionDescription} </div>
                      <div className={styles.number}> {element.transactionNumber} </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ) : null}
      </>
    ),
    centered: true,
    width: 480,
    className: styles.inactivitymodal,
    keyboard: false,
  });
}
export default InactivityModal;

import React from 'react';
import { getLocale } from 'umi';
import { Modal } from 'antd';
import { InfoCircleFilled, ClockCircleOutlined } from '@ant-design/icons';
import styles from './keep-session.less';

const countDown = (time: number) => {
  const toMinutes = Math.floor(time / 60);
  const toSeconds = time % 60;
  if (toMinutes === 0) {
    if (toSeconds < 10) {
      return `${toMinutes}0:0${toSeconds}`;
    }
    return `${toMinutes}0:${toSeconds}`;
  }
  if (toSeconds < 10) {
    return `0${toMinutes}:0${toSeconds}`;
  }
  return `0${toMinutes}:${toSeconds}`;
};

function KeepSessionModal(dispatch: any) {
  let secondsToGo = 120;
  const modal = Modal.confirm({
    icon: <InfoCircleFilled rotate={180} />,
    title: (
      <>
        <p className={styles.title}>
          {' '}
          {getLocale() === 'es-ES'
            ? 'Tu sesión está a punto de terminar'
            : 'Your session will be finished'}{' '}
        </p>{' '}
      </>
    ),
    content: (
      <>
        <div className={styles.subtitle}>
          {getLocale() === 'es-ES'
            ? '¿Desea continuar en Banca Empresarial?'
            : 'Do you like to continue?'}
        </div>
        <div className={styles.counter}>
          <div className={styles.ico}>
            <ClockCircleOutlined />
          </div>
          <div className={styles.text}>
            <p className={styles.message}>
              {getLocale() === 'es-ES' ? 'Cierre de sesión en:' : 'Logout at:'}{' '}
              {countDown(secondsToGo)} min.
            </p>
          </div>
        </div>
      </>
    ),
    centered: true,
    onOk() {
      dispatch({
        type: 'login/refresh',
      });
    },
    okText: getLocale() === 'es-ES' ? 'Continuar' : 'Continue',
    cancelText: getLocale() === 'es-ES' ? 'Cerrar' : 'Close',
    width: 480,
    className: styles.keepmodal,
    keyboard: false,
  });
  const timer = setInterval(() => {
    secondsToGo -= 1;
    modal.update({
      content: (
        <>
          <div className={styles.subtitle}>
            {getLocale() === 'es-ES'
              ? '¿Desea continuar en Banca Empresarial?'
              : 'Do you like to continue?'}
          </div>
          <div className={styles.counter}>
            <div className={styles.ico}>
              <ClockCircleOutlined />
            </div>
            <div className={styles.text}>
              <p className={styles.message}>
                {getLocale() === 'es-ES' ? 'Cierre de sesión en:' : 'Logout at:'}{' '}
                {countDown(secondsToGo)} min.
              </p>
            </div>
          </div>
        </>
      ),
    });
  }, 1000);
  setTimeout(() => {
    clearInterval(timer);
    modal.destroy();
  }, secondsToGo * 1000);
}
export default KeepSessionModal;

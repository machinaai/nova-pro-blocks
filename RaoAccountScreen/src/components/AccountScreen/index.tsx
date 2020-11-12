import { WalletOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React from 'react'
import { useIntl } from 'umi';
import { useWindowSize } from '../../hooks/useWindowSize';
import { PropsAccount } from '../../interfaces/account-screen';
import styles from './index.less';

export const AccountScreen: React.FC<PropsAccount> = ({
  nameUser,
  numberCard,
  actionBtn,
  actionPlayStore,
  actionAppStore,
  actionWallet,
  font,
  logoDesk,
  logoMob,
  imageRobot,
  imgAppStore,
  imgPlayStore
}) => {  
  const intl = useIntl();
  const size = useWindowSize();
  let contScreen;
  let imgStore;
  let imgLogo;

  let wallet;


  const userAgent = navigator.userAgent || navigator.vendor;
  if (/android/i.test(userAgent)) {
    imgStore = <img src={imgPlayStore} alt="PlayStore" className={styles.imgWrapper} onClick={actionPlayStore} />
  } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    imgStore = <img src={imgAppStore} alt="AppStore" className={styles.imgWrapper} onClick={actionAppStore} />
  } else {
    imgStore = <div>
      <img src={imgPlayStore} alt="PlayStore" className={styles.imgWrapper} onClick={actionPlayStore} />
      <img src={imgAppStore} alt="AppStore" className={styles.imgWrapper} onClick={actionAppStore} />
    </div>
  }

  if (size.width <= 5000 && size.width >= 721) {
    imgLogo = <div className={`${styles.icoLogo}`} style={{ backgroundImage: `url(${logoDesk})` }} />
    contScreen =
      <div className={styles.btnContent}>
        <p>{intl.formatMessage({ id: 'BLOCK_NAME.B_desc2' })}</p>
        <Button className={styles.btn} type="primary" shape="round" size='large' onClick={actionBtn}>{intl.formatMessage({ id: 'BLOCK_NAME.text_btn' })}</Button>
        <div className={styles.downloadCont}>
          <p>{intl.formatMessage({ id: 'BLOCK_NAME.F_title1' })}</p>
          {imgStore}
        </div>
      </div>
  } else {
    imgLogo = <div className={`${styles.icoLogo}`} style={{ backgroundImage: `url(${logoMob})` }} />
    contScreen =
      <div className={styles.btnContent}>
        <p>{intl.formatMessage({ id: 'BLOCK_NAME.F_title2' })}</p>
        {imgStore}
        <Button className={styles.btn} type="primary" shape="round" size='large' block onClick={actionBtn}>{intl.formatMessage({ id: 'BLOCK_NAME.text_btn' })}</Button>
      </div>
    wallet = <>
      <p className={styles.cardLabel}>{intl.formatMessage({ id: 'BLOCK_NAME.wallet' })}</p>
      <Button icon={<WalletOutlined />} className={styles.btnWallet} type='primary' shape='round' size='large' block onClick={actionWallet}>{intl.formatMessage({ id: 'BLOCK_NAME.wallet_btn' })}</Button>
    </>
  }
  return (
    <div className={styles.container}>
      {imgLogo}
      <div className={styles.heading}>
        <h2 className={styles.title} style={{ fontFamily: font?.fontTitle }}>
          {`¡${intl.formatMessage({ id: 'BLOCK_NAME.H_title' })} ${nameUser}!`}
        </h2>
        <p className={styles.txt} style={{ fontFamily: font?.fontSubtitle }}>{intl.formatMessage({ id: 'BLOCK_NAME.H_subtitle' })}</p>
      </div>
      <div className={styles.robotWrapper}>
        <img src={imageRobot} className={`${styles.frameRobot}`} alt="robot animado 3" />
      </div>
      <div className={styles.well}>
        <p className={styles.cardLabel}>{intl.formatMessage({ id: 'BLOCK_NAME.B_desc1' })}</p>
        <p className={styles.cardNumber}>{numberCard}</p>
        {wallet}
      </div>
      <div>
        {contScreen}
      </div>
    </div>
  )
}

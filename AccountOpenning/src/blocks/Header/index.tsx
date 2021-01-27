import React from 'react';
import { LeftCircleFilled } from '@ant-design/icons';
import { useIntl } from 'umi';
import logoFixture from './assets/Novabank.svg';
import logoMobileFixture from './assets/Novabank_mobile.svg';
import styles from './style.less';

interface HeaderProps {
  logoMobile?: any;
  logoDesktop?: any;
  currentStage: number;
  onReturn?: Function;
}

const HeaderBanjio: React.FC<HeaderProps> = ({
  logoDesktop = logoFixture,
  logoMobile = logoMobileFixture,
  onReturn,
  currentStage,
}) => {
  // internalization
  const intl = useIntl();

  const back = () => {
    if (onReturn) {
      onReturn(true);
    }
  };

  return (
    <div className={styles.header_container}>
      {currentStage !== 0 && (
        <div className={styles.arrow} onClick={back}>
          <LeftCircleFilled className={styles.arrow_ico} />
        </div>
      )}
      <div className={styles.logo}>
        <img src={logoDesktop} alt="" className={styles.logo} />
      </div>
      <div className={styles.title}>
        {intl.formatMessage({
          id: 'header.banjio.title',
        })}
      </div>

      <div className={styles.logo_mobile}>
        <img src={logoMobile} alt="" className={styles.logoMobile} />
      </div>
    </div>
  );
};

export default HeaderBanjio;

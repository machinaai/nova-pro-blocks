import React from 'react';
import {
  FacebookOutlined,
  TwitterOutlined,
  LinkedinOutlined,
  YoutubeFilled,
} from '@ant-design/icons';
import styles from './styles.less';

const FooterBanjio = () => {
  return (
    <div className={styles.containerFooter}>
      <div className={styles.socialMedia}>
          <p className={styles.title}>Síguenos</p>
          <FacebookOutlined className={styles.icons} />
          <TwitterOutlined className={styles.icons} />
          <LinkedinOutlined className={styles.icons} />
          <YoutubeFilled className={styles.icons} />
      </div>
      <div className={styles.copyRight}>
        <p className={styles.bankName}>Scotiabank</p>
        <p className={styles.derechos}>Todos los Derechos Reservados®</p>
        <p className={styles.costos}>Consulta los costos y Comisiones de Nuestros Productos</p>
      </div>
    </div>
  );
};

export default FooterBanjio;

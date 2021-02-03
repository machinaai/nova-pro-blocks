import React from 'react';
import styles from './style.less';

// assets
// import Sound from './assets/Camera3.mp3';
import { assetsImages } from '../../assets/assets.fixture';

interface VisualIndicatorProps {
  prefixLogo?: any;
  colorPrimary?: string;
  colorSucess?: string;
  legend: string;
  success?: boolean;
  successLegend?: string;
  playSound?: boolean;
  infoCognition?: string | React.ReactNode
}

const VisualIndicator: React.FC<VisualIndicatorProps> = ({
  prefixLogo = assetsImages.Robot,
  colorPrimary = 'red',
  legend,
  colorSucess = '#8bcc00',
  success = false,
  successLegend = '¡Validación exitosa!',
  playSound= false,
  infoCognition
}) => {

  return (
    <>
      <div id="overlay" className={styles.container_overlay}>
        <div
          style={{ backgroundColor: success ? colorSucess : colorPrimary }}
          className={styles.container_robot}
        >
          <img src={prefixLogo} alt="robot" />
        </div>
        <div className={styles.slideTextLeft}>
          <div className={styles.text}>{success ? successLegend : legend}</div>
          {infoCognition && <div className={styles.infoCognition}>{infoCognition}</div>}
        </div>
      </div>
      {playSound && success && (
       <>
        <audio autoPlay >
          <track kind="captions" src={assetsImages.AudioCamera} />
        </audio>
       </>
      )}
    </>
  );
};

export default VisualIndicator;

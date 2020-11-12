import React, { Fragment } from 'react';
import { FirstViewInterface, SecondViewInterface  } from '../../interfaces/interface';
import { useIntl } from 'umi';
import styles from './index.less';

export interface UploadTitlesProps {
    firstView?: FirstViewInterface;
    secondView?: SecondViewInterface;
    changeview?: boolean;
}
 
const UploadTitles: React.FC<UploadTitlesProps> = ({firstView, changeview, secondView}) => {

    const useInt = useIntl();
    
    return ( 
        <Fragment>
        {changeview ? (
            <div className={styles.container}>
            <div className={styles.header}>
              <div className={styles.optional}>{secondView?.secondHeaderTitle}</div>
              <div className={styles.title}>{useInt.formatMessage({ id: 'BLOCK_NAME.upload.second.title' })}</div>
              <div className={styles.subtitle}>
              {useInt.formatMessage({ id: 'BLOCK_NAME.upload.second.subtitle' })}
              </div>
            </div>
          </div>
        )
        :
        (
            <div className={styles.firtsView}>
            <div className={styles.header}>
              <div className={styles.optional}>{firstView?.firstHeaderTitle}</div>
              <div className={styles.title}>{useInt.formatMessage({ id: 'BLOCK_NAME.firstView.title' })}</div>
              <div className={styles.subtitle}>
                {firstView?.firstSubtitle}
              </div>
            </div>
            <div className={styles.details}>
              <div className={styles.secondHeader}>{firstView?.detailsTitle}</div>
              <div className={styles.list}>
                <ul>
                  <li>{firstView?.detailsElement1}</li>
                  <li>{firstView?.detailsElement2}</li>
                </ul>
              </div>
            </div>
        </div>
        )
        }
        </Fragment>
     );
}
 
export default UploadTitles;
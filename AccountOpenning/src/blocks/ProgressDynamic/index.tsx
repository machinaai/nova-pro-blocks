import React, { useEffect, useState } from 'react';
import { Progress } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';
import { useIntl } from 'umi';
import styles from './index.less';
import { ProgressDynamicProp } from './interfaces/progress-dynamic.interface';

const ProgressDynamic: React.FC<ProgressDynamicProp> = ({ data, strokeColor }) => {
  
  const [percent, setPercent] = useState(0);
  // internalization
  const intl = useIntl();
 
  useEffect(() => {
    setPercent(data.percent);
  }, [data]);

  const style = {
    display: data.show,
  };

  return (
    <div className={styles.container} style={style}>
      <div className={styles.firstContainer}>
        <p className={styles.percent}>{percent}% {intl.formatMessage({id: 'ProgressDynamic.completed'})}</p>
        <div className={styles.textClock}>
          <ClockCircleOutlined
            className={styles.clock}
          />
          {data.time} seg.
        </div>
      </div>

      <div>
      <Progress
          percent={percent}
          strokeColor={strokeColor}
          showInfo={false}
        />
      </div>
      <h1 className={styles.stepDescription}>{data.textStep}</h1>
    </div>
  );
};
export default ProgressDynamic;

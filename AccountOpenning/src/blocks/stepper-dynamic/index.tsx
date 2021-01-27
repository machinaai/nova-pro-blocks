import React from 'react';
import { Steps } from 'antd';

import styles from './index.less';
import { StepsProps, StepsInterface } from './interfaces/steps-props.interface';

const StepperDynamic: React.FC<StepsProps> = ({ current, steps }) => {
  return (
    <>
      <div className={styles.stepper}>
        <Steps current={current} labelPlacement="vertical">
          {steps.map((element: StepsInterface) => {
            return <Steps.Step key={element.title} title={<p className={styles.step}>{element.title}</p>}/>;
          })}
        </Steps>
      </div>
    </>
  );
};
export default StepperDynamic;

import React from 'react';
import { Row, Col } from 'antd';
import { dataFixture, iconsFixture } from './fixtures/dataOption.fixture';
import { PropOptions } from './interfaces/dataInterface.interface';
import styles from './index.less';

const ExperienceStatisticBlock: React.FC<PropOptions> = ({ dataOptions = dataFixture, icons = iconsFixture }) => {
  const newData = [...dataOptions];
  newData.pop();
  const lastElement = dataOptions[dataOptions.length - 1];
  
  return (
    <div className={styles.Container}>
      <Row >
      {newData.map((option: any) => (
        <Col flex={1}>
          <div className={styles.option}>
            <Row >
              <Col span={12} offset={6}>
                <Row>
                  <Col span={12}>{icons.icon1}</Col>
                  <Col span={12}><p className={styles.text}>{option.averageTime}</p></Col>
                </Row>
              </Col>
            </Row>
            <Row >
              <Col span={12} offset={6}>
                <Row>
                  <Col span={12}>{icons.icon2}</Col>
                  <Col span={12}><p className={styles.text}>0</p></Col>
                </Row>
              </Col>
            </Row>
            <Row >
              <Col span={12} offset={6}>
                <Row>
                  <Col span={12}>{icons.icon3}</Col>
                  <Col span={12}><p className={styles.text}>0 %</p></Col>
                </Row>
              </Col>
            </Row>
          </div>
        </Col>
      ))}
      <Col flex={1}>
        <div className={styles.option1}>
          <Row >
            <Col span={12} offset={6}>
              <Row>
                <Col span={12}>{icons.icon1}</Col>
                <Col span={12}><p className={styles.text}>{lastElement.averageTime}</p></Col>
              </Row>
            </Col>
          </Row>
          <Row >
            <Col span={12} offset={6}>
              <Row>
                <Col span={12}>{icons.icon2}</Col>
                <Col span={12}><p className={styles.text}>0</p></Col>
              </Row>
            </Col>
          </Row>
          <Row >
            <Col span={12} offset={6}>
              <Row>
                <Col span={12}>{icons.icon3}</Col>
                <Col span={12}><p className={styles.text}>0 %</p></Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Col>
    </Row>
    </div>
    
  );
};
export default ExperienceStatisticBlock;

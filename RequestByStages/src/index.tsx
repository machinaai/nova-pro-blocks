import React, { useEffect } from 'react';
import { connect, useDispatch, useIntl } from 'umi';
import { Button, Card, Tooltip } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import { StateModelStage } from './models/model';
import { getCleanData } from './helpers/getCleanData';
import styles from './index.less';
import { dataFixture, fontFamFixture, iconsFixture } from './fixtures/dataFixture.fixture';
import { DataIcons, DataOption, FunnelChartProps, StatisticProps } from './interfaces/ProblockProps..interface';
import FunnelChartBlock from './components/funnel-chart/src';
import ExperienceStatisticBlock from './components/user-experience-block/src';


interface PAGE_NAME_UPPER_CAMEL_CASEProps {
  fontFam?: Font,
  actionIconHelp?: Function | any;
  icons?: DataIcons,
  dataSteps: StateModelStage['dataSteps'];
  dateRequest: StateModelStage['dateRequest'],
  status?: StateModelStage['error'];
}
interface Font {
  fontTitle: string,
  fontSubtitle: string
}
const PAGE_NAME_UPPER_CAMEL_CASE: React.FC<PAGE_NAME_UPPER_CAMEL_CASEProps> = ({
  fontFam = fontFamFixture,
  actionIconHelp = () => { console.log('Help') },
  icons = iconsFixture,
  dataSteps,
  dateRequest,
  status }) => {
  const dispatch = useDispatch();
  const intl = useIntl();
  
  const getDataDevice = () => {
    dispatch({ type: 'BLOCK_NAME_CAMEL_CASE/getSteps', payload: dateRequest });
  };
  const getTotalReq = () => {
    dispatch({ type: 'BLOCK_NAME_CAMEL_CASE/getTotalRequest', payload: dateRequest });
  };

  useEffect(() => {
    getDataDevice();
    getTotalReq();
  }, [dateRequest]); 

 
  const {dataDevice,dataStatistic} = getCleanData(dataSteps);

  const propsFunnelChart: FunnelChartProps = {
    dataOptions: dataDevice || [],
    heightStatistic: 195,
    heightCanvas: 140
  }

  const propsExperienceStatistic: StatisticProps = {
    dataOptions: dataStatistic || [],
    icons
  }
  return (
    <>
      <Card>
        <div className={styles.header}>
          <h2 className={styles.title} style={{ fontFamily: `${fontFam.fontTitle}` }}>{intl.formatMessage({ id: 'BLOCK_NAME.title' })}</h2>
          <Tooltip placement="top" className={styles.icon} title={intl.formatMessage({ id: 'BLOCK_NAME.titleTooltip' })}>
            <Button type='text' icon={<InfoCircleOutlined onClick={actionIconHelp} />} />
          </Tooltip>
        </div>
        { dataSteps ? (<FunnelChartBlock {...propsFunnelChart} />) : (<p className={styles.data}>{intl.formatMessage({ id: 'BLOCK_NAME.no.data' })}</p> ) }
        
        <h2 className={styles.subtitle} style={{ fontFamily: `${fontFam.fontSubtitle}` }}>{intl.formatMessage({ id: 'BLOCK_NAME.subtitle' })}</h2>
        {dataSteps ? (<ExperienceStatisticBlock {...propsExperienceStatistic} />) : (<p className={styles.data}>{intl.formatMessage({ id: 'BLOCK_NAME.no.data' })}</p>)}
      </Card>
    </>
  );
};

export default connect(({  BLOCK_NAME_CAMEL_CASE }: {  BLOCK_NAME_CAMEL_CASE: StateModelStage }) => ({
  dataSteps:  BLOCK_NAME_CAMEL_CASE.dataSteps,
  dateRequest: BLOCK_NAME_CAMEL_CASE.dateRequest,
  status:  BLOCK_NAME_CAMEL_CASE.error,
}))(PAGE_NAME_UPPER_CAMEL_CASE);

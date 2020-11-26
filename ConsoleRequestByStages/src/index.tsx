import React, { useEffect } from 'react';
import { connect, useDispatch, useIntl } from 'umi';
import { Button, Card, Tooltip } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import { StateModel } from './models/model';
import { getCleanData } from './helpers/getCleanData';
import styles from './index.less';
import { dataFixture, fontFamFixture, iconsFixture } from './fixtures/dataFixture.fixture';
import { DataIcons, DataOption, FunnelChartProps, StatisticProps } from './interfaces/ProblockProps..interface';
import FunnelChartBlock from './blocks/funnel-chart/src';
import ExperienceStatisticBlock from './blocks/user-experience-block/src';


interface PAGE_NAME_UPPER_CAMEL_CASEProps {
  totalRequest?: number,
  fontFam?: Font,
  actionIconHelp?: Function | any;
  icons?: DataIcons,

  dataSteps: StateModel['dataSteps'];
  dateRequest: StateModel['dateRequest'],
  status?: StateModel['error'];
}
interface Font {
  fontTitle: string,
  fontSubtitle: string
}
const PAGE_NAME_UPPER_CAMEL_CASE: React.FC<PAGE_NAME_UPPER_CAMEL_CASEProps> = ({
  totalRequest = 23,
  fontFam = fontFamFixture,
  actionIconHelp = () => { console.log('Help') },
  icons = iconsFixture,
  dataSteps = dataFixture,
  dateRequest,
  status }) => {
  const dispatch = useDispatch();
  const intl = useIntl();

  const getDataDevice = () => {
    dispatch({ type: 'BLOCK_NAME_CAMEL_CASE/getSteps', payload: dateRequest });
  };

  useEffect(() => {
    getDataDevice();
  }, [dateRequest]);

  const cleanData: DataOption[] = getCleanData(dataSteps, totalRequest);

  const propsFunnelChart: FunnelChartProps = {
    dataOptions: cleanData,
    paddingStatistic: 68,
    heightCanvas: 140
  }

  const propsExperienceStatistic: StatisticProps = {
    dataOptions: dataSteps,
    icons
  }
  return (
    <>
      { status === undefined && <Card>
        <div className={styles.header}>
          <h2 className={styles.title} style={{ fontFamily: `${fontFam.fontTitle}` }}>{intl.formatMessage({ id: 'BLOCK_NAME.title' })}</h2>
          <Tooltip placement="top" className={styles.icon} title={intl.formatMessage({ id: 'BLOCK_NAME.titleTooltip' })}>
            <Button type='text' icon={<InfoCircleOutlined onClick={actionIconHelp} />} />
          </Tooltip>
        </div>
        <FunnelChartBlock {...propsFunnelChart} />
        <h2 className={styles.subtitle} style={{ fontFamily: `${fontFam.fontSubtitle}` }}>{intl.formatMessage({ id: 'BLOCK_NAME.subtitle' })}</h2>
        <ExperienceStatisticBlock {...propsExperienceStatistic} />
      </Card>
      }
    </>
  );
};

export default connect(({ BLOCK_NAME_CAMEL_CASE }: { BLOCK_NAME_CAMEL_CASE: StateModel }) => ({
  dataDevice: BLOCK_NAME_CAMEL_CASE.dataSteps,
  status: BLOCK_NAME_CAMEL_CASE.error,
}))(PAGE_NAME_UPPER_CAMEL_CASE);

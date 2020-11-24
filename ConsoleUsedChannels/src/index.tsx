import React, { useEffect, useState } from 'react';
import { Row, Col, Button, Tooltip, Card } from 'antd';
import { connect, useDispatch, useIntl } from 'umi';
import { StateModel } from './models/model';
import { dataFixture } from './fixtures/request.fixture';
import { dataChartFixture } from './fixtures/dataChart.fixture';
import { UsedChannels } from './blocks/used-channels/index';
import PieChart from './blocks/pie-chart/index';
import { ChannelsProps, DataChart, PieChartProps } from './interfaces/ProblockProps..interface';
import { InfoCircleOutlined } from '@ant-design/icons';
import { getPercentage } from './helpers/getPercentage';
import styles from './index.less';

interface PAGE_NAME_UPPER_CAMEL_CASEProps {
  valOptions?: Option[],
  fontTitle?: string,
  actionIconHelp?: Function | any;

  dataDevice: StateModel['dataDevice'];
  dateRequest: StateModel['dateRequest'],
  status?: StateModel['error'];
}
interface Option {
  icon: string,
  name: string,
  backgroungCol?: string
}
const PAGE_NAME_UPPER_CAMEL_CASE: React.FC<PAGE_NAME_UPPER_CAMEL_CASEProps> = ({
  valOptions = dataFixture,
  fontTitle = 'Signika-Regular_Regular',
  actionIconHelp = () => { console.log('Help Btn'); },
  dataDevice,
  dateRequest,
  status }) => {

  const intl = useIntl();
  const dispatch = useDispatch();

  const getDataDevice = () => {
    dispatch({ type: 'BLOCK_NAME_CAMEL_CASE/getDataDevices', payload: dateRequest });
  };

  useEffect(() => {
    getDataDevice();
  }, [dateRequest]);

  const [val, setVal] = useState(0);
  const setIndex = (value: number) => {
    setVal(value);
  }

  const dataUsedChannels: ChannelsProps = {
    dataDevices: [
      {
        icon: valOptions[0].icon,
        name: valOptions[0].name,
        backgroungCol: valOptions[0].backgroungCol,
        action: () => { setIndex(0) }
      },
      {
        icon: valOptions[1].icon,
        name: valOptions[1].name,
        backgroungCol: valOptions[1].backgroungCol,
        action: () => { setIndex(1) }
      },
      {
        icon: valOptions[2].icon,
        name: valOptions[2].name,
        backgroungCol: valOptions[2].backgroungCol,
        action: () => { setIndex(2) }
      }
    ],
    fontTitle,
    valOp: val
  }

  const resultDevices: DataChart[] = dataDevice ? getPercentage(dataDevice) : getPercentage(dataChartFixture);
  const dataPie: PieChartProps = {
    data: resultDevices,
    indexVal: val,
    setVal
  }

  return (
    <Card>
      {status === undefined && <div>
        <div className={styles.container}>
          <h2 style={{ fontFamily: `${fontTitle}` }}>{intl.formatMessage({ id: 'BLOCK_NAME.title' })}</h2>
          <Tooltip placement="top" className={styles.icon} title={intl.formatMessage({ id: 'BLOCK_NAME.titleTooltip' })}>
            <Button type='text' icon={<InfoCircleOutlined onClick={actionIconHelp} />}/>
          </Tooltip>
        </div>
        <Row>
          <Col span={16}><PieChart {...dataPie} /></Col>
          <Col span={8}><UsedChannels {...dataUsedChannels} /></Col>
        </Row>
      </div>}
    </Card>
  );
};

export default connect(({ BLOCK_NAME_CAMEL_CASE }: { BLOCK_NAME_CAMEL_CASE: StateModel }) => ({
  dataDevice: BLOCK_NAME_CAMEL_CASE.dataDevice,
  status: BLOCK_NAME_CAMEL_CASE.error,
}))(PAGE_NAME_UPPER_CAMEL_CASE);

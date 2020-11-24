import React, { useEffect } from "react";
import { connect, useDispatch, useIntl} from 'umi';
import styles from './index.less';
import { StateModel } from './models/model';
import { dataFixture } from './fixture/data.fixture';
import DataRequestBlock from './blocks/card-data-request/src';
import { Fonts, PropsDataReq } from './interfaces/dataReq.interface';
import { InfoCircleOutlined } from '@ant-design/icons';

interface PAGE_NAME_UPPER_CAMEL_CASEProps {
  fontFam?: Fonts,
  imgTitle?: string | React.ReactNode,
  actionOpInfo?: Function,

  usedDevices: StateModel['usedDevices'],
  dateRequest: StateModel['dateRequest'],
  error: StateModel['error'];
}
const PAGE_NAME_UPPER_CAMEL_CASE: React.FC<PAGE_NAME_UPPER_CAMEL_CASEProps> = (props) => {
  const {
    fontFam = dataFixture.font,
    imgTitle = dataFixture.imgTitle,
    actionOpInfo = dataFixture.actionInfo,
    usedDevices,
    dateRequest,
    error
  } = props;
  const dispatch = useDispatch();
  const intl = useIntl();

  const getTotalRequest = () => {
    dispatch({ type: 'BLOCK_NAME_CAMEL_CASE/getUsedDevices', payload: dateRequest });
  };

  useEffect(() => {
    getTotalRequest();
  }, [dateRequest]);

  const dataReq: PropsDataReq = {
    title: intl.formatMessage({ id: 'BLOCK_NAME.usedDevices_title' }),
    fontFam: fontFam,
    imgTitle: imgTitle,
    optionInfo: {
      tooltipTitle:intl.formatMessage({ id: 'BLOCK_NAME.titleTooltip' }),
      icon: <InfoCircleOutlined style={{ fontSize: '16px' }} />,
      action: actionOpInfo
    },
    options: [
      {
        valOp: usedDevices?.android !==undefined ? usedDevices.android : 0,
        nameOp: `${intl.formatMessage({ id: 'BLOCK_NAME.usedDevices_nameOp1' })}`,
      },
      {
        valOp: usedDevices?.ios !==undefined ? usedDevices.ios: 0,
        nameOp: `${intl.formatMessage({ id: 'BLOCK_NAME.usedDevices_nameOp2' })}`,
      }
    ]
  }
  return (
    <>
    {error === undefined && <DataRequestBlock {...dataReq}/> }
      
    </>
  );
};

export default connect(({ BLOCK_NAME_CAMEL_CASE }: { BLOCK_NAME_CAMEL_CASE: StateModel }) => ({
  usedDevices: BLOCK_NAME_CAMEL_CASE.usedDevices,
  dateRequest: BLOCK_NAME_CAMEL_CASE.dateRequest,
  error: BLOCK_NAME_CAMEL_CASE.error,
}))(PAGE_NAME_UPPER_CAMEL_CASE);
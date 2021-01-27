import React, { useEffect } from "react";
import { connect, useDispatch, useIntl } from 'umi';
import { StateModelPercentage } from './models/model';
import { dataFixture } from './fixture/data.fixture';
import DataRequestBlock from './blocks/card-data-request/src';
import { Fonts, PropsDataReq } from './interfaces/dataReq.interface';
import { InfoCircleOutlined } from '@ant-design/icons';

interface PAGE_NAME_UPPER_CAMEL_CASEProps {
  fontFam?: Fonts,
  imgTitle?: string | React.ReactNode,
  actionOpInfo?: Function,

  closeRequest: StateModelPercentage['closeRequest'],
  dateRequest: StateModelPercentage['dateRequest'],
  error: StateModelPercentage['error'];
}
const ConsoleClosingPercentage: React.FC<PAGE_NAME_UPPER_CAMEL_CASEProps> = (props) => {
  const {
    fontFam = dataFixture.font,
    imgTitle = dataFixture.imgTitle,
    actionOpInfo = dataFixture.actionInfo,

    closeRequest,
    dateRequest,
    error
  } = props;
  const dispatch = useDispatch();
  const intl = useIntl();

  const getTotalRequest = () => {
    dispatch({ type: 'Closing_Percentage/getCloseRequest', payload: dateRequest });
  };

  useEffect(() => {
    getTotalRequest();
  }, [dateRequest]);

  const dataReq: PropsDataReq = {
    title: intl.formatMessage({ id: 'BLOCK_NAME.closingPer_title' }),
    fontFam,
    imgTitle,
    optionInfo: {
      tooltipTitle: intl.formatMessage({ id: 'BLOCK_NAME.titleTooltip' }),
      icon: <InfoCircleOutlined style={{ fontSize: '16px' }} />,
      action: actionOpInfo
    },
    options: [
      {
        valOp: closeRequest?.oneSession === undefined ? '0%' : `${closeRequest?.oneSession}%`,
        nameOp: `${intl.formatMessage({ id: 'BLOCK_NAME.closingPer_nameOp1' })}`,
      },
      {
        valOp: closeRequest?.moreSession === undefined ? `0%` : `${closeRequest?.moreSession}%`,
        nameOp: `${intl.formatMessage({ id: 'BLOCK_NAME.closingPer_nameOp2' })}`,
      }
    ]
  }
  return (
    <>
      <DataRequestBlock {...dataReq} />
    </>
  );
};

export default connect(({ Closing_Percentage }: { Closing_Percentage: StateModelPercentage }) => ({
  closeRequest: Closing_Percentage.closeRequest,
  dateRequest: Closing_Percentage.dateRequest,
  error: Closing_Percentage.error,
}))(ConsoleClosingPercentage);
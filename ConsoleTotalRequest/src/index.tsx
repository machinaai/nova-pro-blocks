import React, { useEffect } from "react";
import { connect, useDispatch } from 'umi';
import { Fonts, Icons, PropsComponent } from './interfaces/ProblockProps.interface';
import { StateModel } from './models/model';
import { RequestContainer } from './components/request-container';
import { dataFixture } from './fixture/data.fixture';

interface PAGE_NAME_UPPER_CAMEL_CASEProps {
  fontFam?: Fonts,
  icons?: Icons,
  actionOpInfo?: Function,

  totalReq: StateModel['totalReq'],
  dateRequest: StateModel['dateRequest'],
  error: StateModel['error'];
}
const PAGE_NAME_UPPER_CAMEL_CASE: React.FC<PAGE_NAME_UPPER_CAMEL_CASEProps> = (props) => {
  const {
    fontFam = dataFixture.font,
    icons = dataFixture.icons,
    actionOpInfo = dataFixture.actionInfo,
    totalReq,
    dateRequest,
    error
  } = props;
  const dispatch = useDispatch();

  const getTotalRequest = () => {
    dispatch({ type: 'BLOCK_NAME_CAMEL_CASE/getTotalRequest', payload: dateRequest });
  };

  useEffect(() => {
    getTotalRequest();
  }, [dateRequest]);

  const propsComponent: PropsComponent = {
    requestOptions: totalReq,
    fontFam,
    icons,
    actionOpInfo
  }

  return (
    <>
      {error === undefined && <RequestContainer {...propsComponent} />}
    </>
  );
};

export default connect(({ BLOCK_NAME_CAMEL_CASE }: { BLOCK_NAME_CAMEL_CASE: StateModel }) => ({
  totalReq: BLOCK_NAME_CAMEL_CASE.totalReq,
  dateRequest: BLOCK_NAME_CAMEL_CASE.dateRequest,
  error: BLOCK_NAME_CAMEL_CASE.error,
}))(PAGE_NAME_UPPER_CAMEL_CASE);
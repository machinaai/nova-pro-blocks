import React, { useEffect } from "react";
import { connect, useDispatch } from 'umi';
import styles from './index.less';
import { Fonts, Icons, PropsComponent, RequestProp } from './interfaces/ProblockProps.interface';
import { StateModel } from './models/model';
import { RequestContainer } from './components/request-container';
import { dataFixture } from './fixture/data.fixture';
import NoFoundPage from './blocks/404';

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
  console.log(dateRequest);


  const getTotalRequest = () => {
    dispatch({ type: 'BLOCK_NAME_CAMEL_CASE/getTotalRequest', payload: dateRequest});
  };

  useEffect(() => {
    getTotalRequest();
  }, [dateRequest]);

  console.log(totalReq);
  const propsComponent = {
    requestOptions: totalReq,
    fontFam: fontFam,
    icons: icons,
    actionOpInfo: actionOpInfo
  }

  return (
    <>
      {error === undefined ? <RequestContainer {...propsComponent} /> : <NoFoundPage />}
    </>
  );
};

export default connect(({ BLOCK_NAME_CAMEL_CASE }: { BLOCK_NAME_CAMEL_CASE: StateModel }) => ({
  totalReq: BLOCK_NAME_CAMEL_CASE.totalReq,
  dateRequest:BLOCK_NAME_CAMEL_CASE.dateRequest,
  error: BLOCK_NAME_CAMEL_CASE.error,
}))(PAGE_NAME_UPPER_CAMEL_CASE);
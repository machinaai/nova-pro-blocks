import React, { useEffect } from 'react';
import { connect, useDispatch } from 'umi';
import { StateModelCustomers } from './models/model';
import { TableContainer } from './components/tableContainer';
import { ExtraCont } from './interfaces/ProblockProps.interface';
import { useHistory } from 'react-router';
import { getCleanData } from './helpers/getCleanData';
import { dataFixture } from './fixture/dataFixture';

interface PAGE_NAME_UPPER_CAMEL_CASEProps {
  routePath?: StateModelCustomers['routePath']
  activeCustomer?: StateModelCustomers['activeCustomer'];
  status?: StateModelCustomers['error'];
}

const PAGE_NAME_UPPER_CAMEL_CASE: React.FC<PAGE_NAME_UPPER_CAMEL_CASEProps> = ({
  routePath,
  activeCustomer,
  status }) => {
  const dispatch = useDispatch();
  const router = useHistory();

  const getActiveCustomers = () => {
    dispatch({
      type: 'BLOCK_NAME_CAMEL_CASE/getActiveCustomers',
    });
  };

  useEffect(() => {
    getActiveCustomers();
  }, []);

  const setValField = (val: any) => {
    const { idAccount } = val;    
    dispatch({
      type: 'activeCustomer/setIdAccount',
      payload: idAccount
    });
    router.push(`${routePath}?id=${idAccount}`);
  }

  const propsComponent = {
    dataTable: getCleanData(activeCustomer),
    action: setValField,
  }

  return (
    <>
      <TableContainer {...propsComponent} />
    </>
  );
};

export default connect(({ BLOCK_NAME_CAMEL_CASE }: { BLOCK_NAME_CAMEL_CASE: StateModelCustomers }) => ({
  activeCustomer: BLOCK_NAME_CAMEL_CASE .activeCustomer,
  status: BLOCK_NAME_CAMEL_CASE .error,
  routePath: BLOCK_NAME_CAMEL_CASE .routePath,
}))(PAGE_NAME_UPPER_CAMEL_CASE);

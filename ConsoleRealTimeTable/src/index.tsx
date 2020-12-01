import React, { useEffect } from 'react';
import { connect, useDispatch } from 'umi';
import { StateModel } from './models/model';
import { TableContainer } from './components/tableContainer';
import { dataFixture } from './fixture/dataFixture';
import { ExtraCont } from './interfaces/ProblockProps.interface';

interface PAGE_NAME_UPPER_CAMEL_CASEProps {
  valInputSearch?: string,
  valueFilter?: string,
  extraCont?:ExtraCont,

  dataTable?: StateModel['dataTable'];
  idRequest?: StateModel['idRequest'];
  status?: StateModel['error'];
}

const PAGE_NAME_UPPER_CAMEL_CASE: React.FC<PAGE_NAME_UPPER_CAMEL_CASEProps> = ({
  valInputSearch = '',
  valueFilter = 'all',
  extraCont={
    fontText:'Signika-Medium',
    color:'rgb(90, 37, 153)'
  },
  dataTable,
  status }) => {
  const dispatch = useDispatch();

  const getActiveCustomers = () => {
    dispatch({
      type: 'BLOCK_NAME_CAMEL_CASE/getDataTables',
    });
  };

  useEffect(() => {
    getActiveCustomers();
  }, []);

  const setValField = (val: any) => {
    const { idRequest } = val;
    dispatch({
      type: 'BLOCK_NAME_CAMEL_CASE/setIdRequestClient',
      payload:idRequest
    });
    console.log('idRequest', idRequest);
  }

  const propsComponent = {
    dataTable:status === undefined ? dataTable : dataFixture,
    valueFilter,
    valInputSearch,
    action: setValField,
    extraCont
  }

  return (
    <>
      <TableContainer {...propsComponent} />
    </>
  );
};

export default connect(({ BLOCK_NAME_CAMEL_CASE }: { BLOCK_NAME_CAMEL_CASE: StateModel }) => ({
  dataTable: BLOCK_NAME_CAMEL_CASE.dataTable,
  idRequest: BLOCK_NAME_CAMEL_CASE.idRequest,
  status: BLOCK_NAME_CAMEL_CASE.error,
}))(PAGE_NAME_UPPER_CAMEL_CASE);

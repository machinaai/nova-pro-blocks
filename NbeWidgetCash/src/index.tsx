import React, { useEffect, useState } from 'react';
import { connect, useDispatch } from 'umi';
import AddContent from './AddContent';
import { StateModel } from './model';
import { cash } from './fixures/cashDetail.fixture';
import { dataDebugged } from './helpers/dataDebugged';
import { ModalReload } from '../modal/ModalReload/modalReload';

interface Props {
  details: StateModel['details'];
  error: StateModel['error'];
}

const NbeWidgetCash: React.FC<Props> = ({ details, error }) => {
  const [drop, setValueDrop] = useState();
  const dispatch = useDispatch();

  const getCashDetail = () => {
    dispatch({ type: 'nbeWidgetCash/getCashDetail', payload: cash });
  };

  useEffect(() => {
    getCashDetail();
  }, [drop]);

  const { data } = dataDebugged(details, drop);
  return (
    <>
      <AddContent setDropNew={setValueDrop} data={data} />
      {error && <ModalReload error={error} />}
    </>
  );
};

export default connect(({ nbeWidgetCash }: { nbeWidgetCash: StateModel }) => ({
  details: nbeWidgetCash.details,
  error: nbeWidgetCash.error,
}))(NbeWidgetCash);

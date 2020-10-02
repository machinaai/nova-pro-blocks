import React, {useEffect, useState} from 'react';
import {connect, useDispatch} from 'umi';
import {StateModel} from './model';
import {cash} from './fixures/cashDetail.fixture';
import {dataDebugged} from './helpers/dataDebugged';
import AddContent from './AddContent';
import {ModalReload} from './modal/ModalReload/modalReload';
/**
 * Enumerations
 */
import {CurrencyEnum} from "./enums/currency.enum";
import {AccountTypesEnum} from "./enums/account-types.enum";
import {currency} from "../../../../nova-pro-blocks/NbeWidgetCreditCard/src/helpers/currency.helper";

/**
 * Interface for functional component properties
 */
interface Props {
  request: RequestInterface,
  details: StateModel['details'];
  error: StateModel['error'];
}

interface RequestInterface {
  currency: CurrencyEnum,
  accountType: AccountTypesEnum,
  startDate: string,
}

/**
 * NbeWidgetCash component definition
 * @param request Request info
 * @param details Data to be displayed in chart
 * @param error Error response from service
 */
const NbeWidgetCash: React.FC<Props> = ({request, details, error}) => {
  const [drop, setValueDrop] = useState();
  const dispatch = useDispatch();

  cash.dataAccount[0].currency = request.currency.toUpperCase();
  cash.dataAccount[0].account_type = request.accountType;
  cash.dataAccount[0].startDate = request.startDate;

  const getCashDetail = () => {
    dispatch({type: 'nbeWidgetCash/getCashDetail', payload: cash});
  };

  useEffect(() => {
    getCashDetail();
  }, [drop]);

  const {data} = dataDebugged(details, drop);
  return (
    <>
      <AddContent setDropNew={setValueDrop} data={data} currency={cash.dataAccount[0].currency}/>
      {error && <ModalReload error={error}/>}
    </>
  );
};

export default connect(({nbeWidgetCash}: { nbeWidgetCash: StateModel }) => ({
  details: nbeWidgetCash.details,
  error: nbeWidgetCash.error,
}))(NbeWidgetCash);

import React, {useEffect, useState} from 'react';
import {useDispatch, connect} from 'umi';
import ComboBlock from './components/combo-block/src';
import { formatAccounts } from './helpers/formatAccounts.helper';
import {StateModel} from './model';
import {origin, query} from './fixtures/index.fixture';

interface Props {
  accounts: StateModel['accounts'],
  error: StateModel['error'],
}

const NbeComboAccounts: React.FC<Props> = ({accounts, error}) => {
  const [selected, setSelected] = useState(null);
  const dispatch = useDispatch();
  

  useEffect(() => {
    getAccounts();
  }, []);

  useEffect(() => {
    const res = accounts?.accounts.find((account) => account.idAccount === selected);
    //console.log(res);
  }, [selected]);

  const getAccounts = () => {
    dispatch({type: 'nbeComboAccounts/getAccounts', payload: origin });
  }

  const getAccountsQuery = (value: string) => {

    dispatch({type: 'nbeComboAccounts/getAccountsQuery', payload: query });
  }

  const propsCombo = () => {
    return error ? {
      error,
      retry: getAccounts
    } : {
      title: "Cuentas origen",
      data: formatAccounts(accounts),
      selected: setSelected,
      search: getAccountsQuery
    };
  }

  return (
    <>
      <ComboBlock {...propsCombo()} />
    </>
  );
};

export default connect(({nbeComboAccounts}: {nbeComboAccounts: StateModel}) => ({
  accounts: nbeComboAccounts.accounts,
  error: nbeComboAccounts.error,
}))(NbeComboAccounts);

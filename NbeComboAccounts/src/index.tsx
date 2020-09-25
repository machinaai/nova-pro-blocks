import React, {useEffect, useState} from 'react';
import {useDispatch, connect, useIntl} from 'umi';
import ComboBlock from './components/combo-block/src';
import { formatAccounts } from './helpers/formatAccounts.helper';
import {StateModel} from './model';
import {origin, query} from './fixtures/index.fixture';

interface Props {
  accounts: StateModel['accounts'],
  error: StateModel['error'],
  page: StateModel['page'],
}

const NbeComboAccounts: React.FC<Props> = ({accounts, error, page}) => {
  const [selected, setSelected] = useState(null);
  const dispatch = useDispatch();
  const intl = useIntl();
  

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

  const getAccountsQuery = (value: string, newPage: boolean) => {
    const newQuery = {...query};
    if(page) {
      newQuery.pagination.pageNumber = newPage ? page + 1 : page <= 1 ? page : page -1;
    }
    if(newQuery.pagination.pageNumber !== page || page === 1) {
      dispatch({type: 'nbeComboAccounts/getAccountsQuery', payload: newQuery });
    }
  }

  const propsCombo = () => {
    return error ? {
      error,
      retry: getAccounts
    } : {
      title: intl.formatMessage({id: "NbeComboAccounts.title"}),
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
  page: nbeComboAccounts.page,
}))(NbeComboAccounts);

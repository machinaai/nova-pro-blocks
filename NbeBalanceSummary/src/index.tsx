import React, { useCallback, useEffect } from 'react';
import { connect, useDispatch, useIntl } from 'umi';
import WidgetBalanceSummary from './components/widget-balance-summary';
import { StateType } from './model';
import styles from './style.less';
import { transactions } from './fixtures/request.fixture';
import { formatBalance } from './helpers/formatBalance.helper';

interface FormStepFormProps {
  data: StateType['data'];
  status?: StateType['status'];
}

const NbeBalanceSummary: React.FC<FormStepFormProps> = ({ data, status }) => {
  const intl = useIntl();

  const dispatch = useDispatch();

  const getDataBalance = useCallback(() => {
    dispatch({
      type: 'bneBalanceSummary/getDataBalance',
      payload: transactions,
    });
  },[]);

  useEffect(() => {
    getDataBalance();
  }, []);

  return (
    <>
      
        <WidgetBalanceSummary
          data={formatBalance(data)}
          detail={{
            legend: intl.formatMessage({
              id: 'bneBalanceSummary.details.legend',
            }),
            action: '#',
          }}
          status={status}
          onRetry={getDataBalance}
        />

    </>
  );
};

export default connect(({ bneBalanceSummary }: { bneBalanceSummary: StateType }) => ({
  data: bneBalanceSummary.data,
  status: bneBalanceSummary.status,
}))(NbeBalanceSummary);

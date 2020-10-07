import React, { useCallback, useEffect } from 'react';
import { connect, useDispatch, useIntl } from 'umi';
import { StateType } from './model';
import { transactions } from './fixtures/request.fixture';
import { formatBalance } from './helpers/formatBalance.helper';
import WidgetLayoutNbe from './blocks/layout-widget';
import PieGraph from './blocks/pie-graph';
import RetryBlock from './blocks/retry-block';

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
  }, []);

  useEffect(() => {
    getDataBalance();
  }, []);

  return (
    <>
      <WidgetLayoutNbe
        title={intl.formatMessage({
          id: 'bneBalanceSummary.tittle',
        })}
        detail={{
          legend: intl.formatMessage({
            id: 'bneBalanceSummary.details.legend',
          }),
          action: '#',
          align: 'right',
        }}
      >
        {status !== 200 ? (
          <RetryBlock
            message={intl.formatMessage({
              id: 'bneBalanceSummary.retry',
            })}
            onClick={getDataBalance}
          />
        ) : (
          <PieGraph data={formatBalance(data)} />
        )}
      </WidgetLayoutNbe>
    </>
  );
};

export default connect(({ bneBalanceSummary }: { bneBalanceSummary: StateType }) => ({
  data: bneBalanceSummary.data,
  status: bneBalanceSummary.status,
}))(NbeBalanceSummary);

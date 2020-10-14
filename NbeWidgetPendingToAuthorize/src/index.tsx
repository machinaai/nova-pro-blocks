import React, { useCallback, useEffect } from 'react';
import { connect, useDispatch, useIntl } from 'umi';
import { StateModel } from './model';
import { pendingToAuthorizeRequest } from './fixures/investmentRequest.fixture';

import { DataPendingToAuthorizeInterface } from './interfaces/index';
import RetryBlock from './blocks/retry-block';
import WidgetLayoutNbe from './blocks/layout-widget';
import RowDetails from './blocks/row-details';

import { dataFilter } from './helpers/dataFilter.helper';

/**
 * Interface for functional component properties
 */
interface Props {
  request?: DataPendingToAuthorizeInterface;
  data?: StateModel['data'];
  status: StateModel['status'];
}

/**
 * NbeWidgetPendingToAuthorize component definition
 * 
 * @param request Request info
 * @param data Data to be displayed in chart
 * @param error Error response from service
 */
const NbeWidgetPendingToAuthorize: React.FC<Props> = ({
  request = pendingToAuthorizeRequest,
  data,
  status,
}) => {
  const intl = useIntl();

  const dispatch = useDispatch();

  const getDataInvestments = useCallback(() => {
    dispatch({
      type: 'nbePendingToAuthorizeWidget/getPendingsToAuthorize',
      payload: request,
    });
  }, []);

  useEffect(() => {
    getDataInvestments();
  }, []);

  return (
    <WidgetLayoutNbe>
      {status !== 200 ? (
        <RetryBlock
          message={intl.formatMessage({
            id: 'nbePendingToAuthorizeWidget.retry',
          })}
          onClick={getDataInvestments}
        />
      ) : (
        <>
          <RowDetails
            title={intl.formatMessage({ id: 'nbePendingToAuthorizeWidget.title' })}
            data={dataFilter(data)}
          />
        </>
      )}
    </WidgetLayoutNbe>
  );
};

export default connect(
  ({ nbePendingToAuthorizeWidget }: { nbePendingToAuthorizeWidget: StateModel }) => ({
    data: nbePendingToAuthorizeWidget.data,
    status: nbePendingToAuthorizeWidget.status,
  }),
)(NbeWidgetPendingToAuthorize);

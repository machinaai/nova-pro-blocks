import React, { useCallback, useEffect } from 'react';
import { connect, useDispatch, useIntl } from 'umi';
import { StateModel } from './model';
import { investmentRequest } from './fixures/investmentRequest.fixture';

import { DataInvestments } from './interfaces/index';
import RetryBlock from './blocks/retry-block';
import WidgetLayoutNbe from './blocks/layout-widget';
import styles from './index.less';

import { useDropDown } from './hooks/useDropDown';
import LinealGrafic from './blocks/lineal-grafic';

import { dataFilter } from './helpers/dataFilter.helper';

/**
 * Interface for functional component properties
 */
interface Props {
  request?: DataInvestments;
  dataInvestment?: StateModel['data'];
  status: StateModel['status'];
}

/**
 * NbeWidgetInvestments component definition
 * @param request Request info
 * @param data Data to be displayed in chart
 * @param error Error response from service
 */
const NbeWidgetInvestments: React.FC<Props> = ({ request=investmentRequest, dataInvestment, status }) => {
  const intl = useIntl();

  const [optionsDrop, drop, period] = useDropDown();

  const dispatch = useDispatch();

  const getDataInvestments = useCallback(() => {
    dispatch({
      type: 'nbeInvestmentWidget/getInvestments',
      payload: investmentRequest,
    });
  }, []);

  useEffect(() => {
    getDataInvestments();
  }, []);

  return (

      <WidgetLayoutNbe
        title={intl.formatMessage({
          id: 'nbeInvestmentWidget.title',
        })}
        detail={{
          legend: intl.formatMessage({
            id: 'nbeInvestmentWidget.details.legend',
          }),
          action: '#',
          align: 'right',
        }}
        options={optionsDrop}
      >
        {status !== 200 ? (
          <RetryBlock
            message={intl.formatMessage({
              id: 'nbeInvestmentWidget.retry',
            })}
            onClick={getDataInvestments}
          />
        ) : (
          <>
            <p className={styles.title}>
              {intl.formatMessage({
                id: 'nbeInvestmentWidget.title.period',
              })}
              {period}
            </p>
            <LinealGrafic
              dropValue={drop.toString()}
              data={dataFilter(dataInvestment, drop, request.DataInvestments[0].amount)}
            />
          </>
        )}
      </WidgetLayoutNbe>
  );
};

export default connect(({ nbeInvestmentWidget }: { nbeInvestmentWidget: StateModel }) => ({
  dataInvestment: nbeInvestmentWidget.data,
  status: nbeInvestmentWidget.status,
}))(NbeWidgetInvestments);

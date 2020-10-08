import React, { useEffect, useState } from 'react';
import { connect, useDispatch, useIntl } from 'umi';
import { StateModel } from './model';
import { cash } from './fixures/cashDetail.fixture';
import AddContent from './AddContent';
import { AccountsFields, PeriodFields } from './interfaces/accountResponse';
import WidgetLayoutNbe from './components/layout-widget/src';
import { WidgetLayoutPropsInterface } from './components/layout-widget/src/interfaces/widget-layout.interface';

/**
 * Enumerations
 */
import { CurrencyEnum } from './enums/currency.enum';
import { AccountTypesEnum } from './enums/account-types.enum';
import RetryBlock from './components/retry-block/src';
import { getDataFilter } from './helpers/getDataFilter';

/**
 * Interface for functional component properties
 */
interface Props {
  request: RequestInterface;
  details: StateModel['details'];
  error: StateModel['error'];
}

interface RequestInterface {
  currency: CurrencyEnum;
  accountType: AccountTypesEnum;
  startDate: string;
}

/**
 * NbeWidgetCash component definition
 * @param request Request info
 * @param details Data to be displayed in chart
 * @param error Error response from service
 */
const NbeWidgetCash: React.FC<Props> = ({ request, details, error }) => {
  let dataDetails: PeriodFields[] = [];

  const [drop, setValueDrop] = useState('4');
  const dispatch = useDispatch();
  const intl = useIntl();

  if (request) {
    cash.dataAccount[0].currency = request.currency.toUpperCase();
    cash.dataAccount[0].account_type = request.accountType;
    cash.dataAccount[0].startDate = request.startDate;
  }

  const getCashDetail = () => {
    dispatch({ type: 'nbeWidgetCash/getCashDetail', payload: cash });
  };

  useEffect(() => {
    getCashDetail();
  }, [drop]);

  const mockData = details?.cash;
  mockData?.forEach((value: AccountsFields) => {
    const { period_data: periodData } = value;
    dataDetails = [...dataDetails, periodData];
  });

  const handleKey = (key: any) => {
    setValueDrop(`${key}`);
  };

  const optionsDrop = [
    {
      id: 1,
      label: `${intl.formatMessage({
        id: 'cash.month',
      })}`,
      action: handleKey,
    },
    {
      id: 2,
      label: `${intl.formatMessage({
        id: 'cash.bimester',
      })}`,
      action: handleKey,
    },
    {
      id: 3,
      label: `${intl.formatMessage({
        id: 'cash.trimester',
      })}`,
      action: handleKey,
    },
    {
      id: 4,
      label: `${intl.formatMessage({
        id: 'cash.semester',
      })}`,
      action: handleKey,
    },
  ];
  const data = getDataFilter(dataDetails, drop);

  const titleValue = `${intl.formatMessage({
    id: 'cash.title',
  })}${cash.dataAccount[0].currency}`;

  const detailWidget = {
    legend: `${intl.formatMessage({
      id: 'cash.viewAccounts',
    })}`,
    action: '',
  };
  const handleOk = () => {
    const response = error !== undefined && (
      <AddContent valueDrop={drop} data={data} error={error} />
    );
    return response;
  };

  const propsRetryBlock = {
    onClick: handleOk,
    message: `${intl.formatMessage({ id: 'cash.reload' })}`,
  };
  const valueChildren =
    error !== undefined ? (
      <RetryBlock {...propsRetryBlock} />
    ) : (
      <AddContent valueDrop={drop} data={data} error={error} />
    );

  const props: WidgetLayoutPropsInterface = {
    title: titleValue,
    options: optionsDrop,
    children: valueChildren,
    detail: detailWidget,
  };

  return (
    <>
      <WidgetLayoutNbe {...props} />
    </>
  );
};

export default connect(({ nbeWidgetCash }: { nbeWidgetCash: StateModel }) => ({
  details: nbeWidgetCash.details,
  error: nbeWidgetCash.error,
}))(NbeWidgetCash);

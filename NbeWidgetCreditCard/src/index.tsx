import React, { useEffect, useState } from 'react';
import { useDispatch, connect, useIntl } from 'umi';
import { StateModel } from './model';
import BarGraph from './components/bar-graph/src';
import { transformData } from './helpers/transform-data.helper';
import { orderData } from './helpers/order-data.helper';
import WidgetLayoutNbe from './components/layout-widget/src';
import CurrencyBlock from './components/currency-block/src';
import { widgetLayoutDetail } from './fixtures/widget-layout-detail.fixture';
import { PeriodEnum } from './enums/period.enum';
import { MenuOptionsInterface } from './components/layout-widget/src/interfaces/widget-layout.interface';
import { query } from './fixtures/query.fixture';
import RetryBlock from './components/retry-block/src';


interface Props {
  creditCards: StateModel['creditCards'];
  error: StateModel['error'];
}

const NbeWidgetCreditCard: React.FC<Props> = ({ creditCards, error }) => {
  const [data, newData] = useState(creditCards);
  const [amount, setAmount] = useState(0);
  const dispatch = useDispatch();
  const intl = useIntl();
  const detailLayout = {...widgetLayoutDetail, legend: intl.formatMessage({id: 'NbeWidgetCreditCard.viewCards'})};
  const getCreditCards = () => {
    dispatch({ type: 'nbeWidgetCreditCard/getCreditCards', payload: query });
  };

  useEffect(() => {
    getCreditCards();
    setAmount(getDueAmount());
  }, []);

  useEffect(() => {
    newData(creditCards);
    setAmount(getDueAmount());
  }, [creditCards]);

  const getSeleceted = (value: PeriodEnum) => {
    const cards = creditCards ? { ...creditCards } : undefined;
    if (cards) {
      cards.CreditCards = [...cards.CreditCards.slice(value * -1)];
      newData(cards);
      setAmount(getDueAmount());
    }
  };

  const options: MenuOptionsInterface[] = [
  {
      id: PeriodEnum.month,
      label: intl.formatMessage({id: 'NbeWidgetCreditCard.options.month'}),
      action: getSeleceted
  },
  {
      id: PeriodEnum.bimester,
      label: intl.formatMessage({id: 'NbeWidgetCreditCard.options.bimester'}),
      action: getSeleceted
  },
  {
      id: PeriodEnum.trimester,
      label: intl.formatMessage({id: 'NbeWidgetCreditCard.options.trimester'}),
      action: getSeleceted
  },
  {
      id: PeriodEnum.semester,
      label: intl.formatMessage({id: 'NbeWidgetCreditCard.options.semester'}),
      action: getSeleceted
  }
];

  const getDueAmount = (): number => {
    const res = orderData(creditCards);
    return res?.CreditCards[res?.CreditCards.length - 1].totalDueAmount || 0;
  };

  const onSelected = (data: any) => {
    const {value } = data;
    value !== amount && setAmount(value);
  };

  return (
    <>
      <WidgetLayoutNbe
        detail={{...detailLayout}} 
        title={intl.formatMessage({id: 'NbeWidgetCreditCard.title'})}
        options={options}
        children={(
          <>
            { error ? 
              <RetryBlock message={intl.formatMessage({id: 'NbeWidgetCreditCard.error'})} /> :
              <>
                <CurrencyBlock amount={amount} negative={true} fontSize={20} />
                <BarGraph data={transformData(data)} selected={onSelected} />
              </>
            }
          </>
        )} />
    </>
  );
};

export default connect(({ nbeWidgetCreditCard }: { nbeWidgetCreditCard: StateModel }) => ({
  creditCards: nbeWidgetCreditCard.creditCards,
  error: nbeWidgetCreditCard.error,
}))(NbeWidgetCreditCard);

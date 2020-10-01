import React, {useEffect, useState} from 'react';
import {useDispatch, connect, useIntl} from 'umi';
import { Card } from 'antd';
import {StateModel} from './model';
import BarGraph from './components/bar-graph/src';
import { transformData } from './helpers/transform-data.helper';
import PeriodBlock from './components/period-block/src';
import { PeriodEnum as PeriodBlockEnum } from './components/period-block/src/period.enum';
import { orderData } from './helpers/order-data.helper';
import { currency } from './helpers/currency.helper';
import styles from './index.less';
import { RedoOutlined } from '@ant-design/icons';

interface Props {
  creditCards: StateModel['creditCards'],
  error: StateModel['error'],
}

const NbeWidgetCreditCard: React.FC<Props> = ({creditCards, error}) => {
  const [data, newData] = useState(creditCards);
  const [amount, setAmount] = useState('');
  const dispatch = useDispatch();
  const intl = useIntl();
  const query = {
    "DataCreditCards": [
      {
        "bines": [
          "123456"
        ]
      }
    ]
  }

  const getCreditCards = () => {
    dispatch({type: 'nbeWidgetCreditCard/getCreditCards', payload: query });
  }

  useEffect(() => {
    getCreditCards();
    setAmount(currency(getDueAmount(), true));
  }, []);

  const getSeleceted = (value: PeriodBlockEnum) => {
    const period = parseInt(PeriodBlockEnum[value], 10);
    const cards = creditCards ? {...creditCards} : undefined;
    if(cards) {
      cards.CreditCards = [...cards.CreditCards.slice(0, period)];
      newData(cards);
    }
  }

  const getDueAmount = (): number => {
    const data = orderData(creditCards);
    return data?.CreditCards[data?.CreditCards.length -1].totalDueAmount || 0;
  }

  const onSelected = (data: any) => {
    const value = currency(data.value, true);
    value === amount ? setAmount(currency(getDueAmount(), true)) : setAmount(value);
  }

  return (
    <>
      <Card>
        <div className={styles.header}>
          <h1>{intl.formatMessage({id: 'NbeWidgetCreditCard.title'})}</h1>
          <PeriodBlock selected={getSeleceted}/>
        </div>
        {error ? (
          <div className={styles.error}>
            <RedoOutlined className={styles.errorIcon} />
            <p onClick={getCreditCards} className={styles.errorText}>{intl.formatMessage({id: 'NbeWidgetCreditCard.error'})}</p>
          </div>
        ) : (
          <>
            <div className={styles.amount}>{ amount}</div>
            <div className={styles.graph}>
              <BarGraph data={transformData(data)} selected={onSelected} />
            </div>
          </>
        )}
        <p className={styles.view}>{intl.formatMessage({id: 'NbeWidgetCreditCard.viewCards'})}</p>
      </Card>
    </>
  );
};

export default connect(({nbeWidgetCreditCard}: {nbeWidgetCreditCard: StateModel}) => ({
  creditCards: nbeWidgetCreditCard.creditCards,
  error: nbeWidgetCreditCard.error,
}))(NbeWidgetCreditCard);

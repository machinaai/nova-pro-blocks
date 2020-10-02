import React, { useEffect, useState } from 'react';
import { useIntl } from 'umi';
import { Card } from 'antd';
import styles from './index.css';
import DropDown from './components/DropDown/DropDown';
import Grafics from './components/Grafics/Grafics';
import { getBalanceFormat } from './helpers/getBalanceFormat';

const AddContent: React.FC<any> = ({ setDropNew, data }) => {
  const intl = useIntl();
  const [drop, setDrop] = useState();
  useEffect(() => {
    setDropNew(drop);
  }, [drop]);

  const balance = getBalanceFormat(data);

  return (
    <Card>
      <div className={styles.header}>
        <div className={styles.title}>
          {intl.formatMessage({
            id: 'cash.title',
          })}
        </div>
        <div>
          <DropDown setDrop={setDrop} />
        </div>
      </div>
      <div>
        <p>{`${balance}`}</p>
      </div>
      <div>
        <Grafics item={data} drop={drop} />
      </div>
      <div>
        <a href="/account/users">
          {' '}
          {intl.formatMessage({
            id: 'cash.viewAccounts',
          })}
        </a>
      </div>
    </Card>
  );
};
export default AddContent;

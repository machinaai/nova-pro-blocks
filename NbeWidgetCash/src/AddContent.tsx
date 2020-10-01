import React, { useEffect, useState } from 'react';
import { useIntl } from 'umi';
import { Button } from 'antd';
import styles from './index.css';
import DropDown from './components/DropDown';
import Grafics from './components/Grafics';
import { getBalanceFormat } from './helpers/getBalanceFormat';

const AddContent: React.FC<any> = ({ setDropNew, data }) => {
  const intl = useIntl();
  const [drop, setDrop] = useState();
  useEffect(() => {
    setDropNew(drop);
  }, [drop]);

  const balance = getBalanceFormat(data);

  return (
    <div className={styles.normal}>
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
        <p className={styles.description}>{`${balance}`}</p>
      </div>
      <div className={styles.grafic}>
        <Grafics item={data} drop={drop} />
      </div>
      <div>
        <Button type="text" className={styles.view} href="/account/users">
          {intl.formatMessage({
            id: 'cash.viewAccounts',
          })}
        </Button>
      </div>
    </div>
  );
};
export default AddContent;

import { useEffect, useState } from 'react';
import { useIntl } from 'umi';
import { MenuOptionsInterface } from '../blocks/layout-widget/interfaces/widget-layout.interface';

export const useDropDown = (): [MenuOptionsInterface[], number, string | undefined] => {
  const intl = useIntl();

  const [drop, setValueDrop] = useState(0);

  const handleKey = (key: number) => {
    setValueDrop(key);
  };

  const optionsDrop = [
    {
      id: 0,
      label: intl.formatMessage({
        id: 'nbeInvestmentWidget.diary',
      }),
      action: handleKey,
    },
    {
      id: 1,
      label: intl.formatMessage({
        id: 'nbeInvestmentWidget.thirtyDays',
      }),
      action: handleKey,
    },
    {
      id: 2,
      label: intl.formatMessage({
        id: 'nbeInvestmentWidget.sixtyDays',
      }),
      action: handleKey,
    },
    {
      id: 3,
      label: intl.formatMessage({
        id: 'nbeInvestmentWidget.ninetyDays',
      }),
      action: handleKey,
    },
  ];
  const [period, setPeriod] = useState<string | undefined>(optionsDrop[drop].label);

  useEffect(()=> {
    setPeriod(optionsDrop.find(item => item.id === drop)?.label)
  }, [drop])

  
  return [optionsDrop, drop, period];
};

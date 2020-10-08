import { PeriodFields } from '../interfaces/accountResponse';
import { getTotalBalance } from './getTotalBalance';

export const getDataGrafics = (data: PeriodFields[] | undefined, drop: string | undefined) => {
  let arr: number[] = [];
  let cleanData: any = [];

  if (drop === '1') {
    data?.forEach((val: any) => {
      const {
        specific_balance: { balance_per_day: balance },
      } = val;
      arr = [...arr, balance];
    });
    data?.forEach((value: any) => {
      const {
        specific_balance: { balance_per_day: balance },
        time: { date },
      } = value;
      const max = Math.max(...arr);
      const por = (balance * 100) / max;
      const fecha = date.split('-');
      const [year, month, day] = fecha;

      cleanData = [
        ...cleanData,
        { year, month, day, balance: Math.round(por), totalBalance: balance },
      ];
      cleanData.sort((a: any, b: any) => {
        return a.day - b.day;
      });
    });
  } else {
    let dataFilter: object[] = [];
    let arrMonth: string[] = [];
    let totalBalance: any[] = [];

    data?.forEach((value: any) => {
      const {
        specific_balance: { balance_per_day: balance },
        time: { date },
      } = value;
      const fecha = date.split('-');
      const [yearr, month] = fecha;
      arrMonth = [...arrMonth, month];
      dataFilter = [...dataFilter, { year: yearr, month, balance }];
    });

    const onlyMonth = (value: any, index: any, self: any) => {
      return self.indexOf(value) === index;
    };
    const result = arrMonth.filter(onlyMonth);

    result.forEach((m) => {
      const [newYear, total] = getTotalBalance(dataFilter, m);
      totalBalance = [...totalBalance, total];
      const max = Math.max(...totalBalance);
      const por = (Number(total) * 100) / max;
      cleanData = [
        ...cleanData,
        { year: newYear, month: m, balance: Math.round(por), totalBalance: total },
      ];
    });
  }

  return cleanData;
};

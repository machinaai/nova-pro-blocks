import { getTotalBalance } from './getTotalBalance';

export const getDataGrafics = (data: any, drop: any) => {
  let arr: any = [];
  let cleanData: any = [];

  if (drop === '1') {
    data?.forEach((val: any) => {
      const {
        balance: { balance },
      } = val;
      arr = [...arr, balance];
    });
    data?.forEach((value: any) => {
      const {
        balance: { balance },
        period,
      } = value;
      const max = Math.max(...arr);
      const por = (balance * 100) / max;
      const fecha = period.split('-');
      const [year, month, day] = fecha;

      cleanData = [...cleanData, { year, month, day, balance: por, totalBalance: balance }];
    });
  } else {
    let dataFilter: any = [];
    let arrMonth: string[] = [];
    let totalBalance: any[] = [];

    data?.forEach((value: any) => {
      const {
        balance: { balance },
        period,
      } = value;
      const fecha = period.split('-');
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
      cleanData = [...cleanData, { year: newYear, month: m, balance: por, totalBalance: total }];
    });
  }

  return cleanData;
};

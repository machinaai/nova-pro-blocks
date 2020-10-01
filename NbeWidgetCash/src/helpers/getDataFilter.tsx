import moment from 'moment';
import { AccountResponse } from '../../interfaces/accountResponse';
import { getDataGrafics } from './getDataGrafics';
import {
  getLastBimester,
  getLastMonth,
  getLastSemester,
  getLastTrimester,
} from './getTotalBalance';

export const getDataFilter = (details: AccountResponse | undefined, drop: any) => {
  const cash = details?.cash;
  let cleanData: any = [];
  const today = new Date();
  let lastDate;
  let finalDate;
  let date = [''];
  const currentDate = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;

  const daysBetweenDates = (since: any, limit: any) => {
    const currentDay = since;
    const dates = [];

    while (currentDay.isSameOrBefore(limit)) {
      dates.push(currentDay.format('YYYY-MM-DD'));
      currentDay.add(1, 'days');
    }
    return dates;
  };

  switch (drop) {
    case '1':
      lastDate = moment(getLastMonth(currentDate));
      finalDate = moment(currentDate);
      date = daysBetweenDates(lastDate, finalDate);
      break;
    case '2':
      lastDate = moment(getLastBimester(currentDate));
      finalDate = moment(currentDate);
      date = daysBetweenDates(lastDate, finalDate);
      break;
    case '3':
      lastDate = moment(getLastTrimester(currentDate));
      finalDate = moment(currentDate);
      date = daysBetweenDates(lastDate, finalDate);
      break;
    case '4':
      lastDate = moment(getLastSemester(currentDate));
      finalDate = moment(currentDate);
      date = daysBetweenDates(lastDate, finalDate);
      break;
    default:
      break;
  }

  // console.log(date);
  const result = cash?.filter((per: any) => {
    return date.find((value: string) => {
      return value === per.period;
    });
  });

  cleanData = getDataGrafics(result, drop);

  if (drop === '1') {
    cleanData.sort((a: any, b: any) => {
      return a.day - b.day;
    });
  } else {
    cleanData.sort((a: any, b: any) => {
      return a.month - b.month;
    });
  }
  return cleanData;
};

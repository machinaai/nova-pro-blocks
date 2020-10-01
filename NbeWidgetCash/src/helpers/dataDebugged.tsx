import { AccountResponse } from '../interfaces/accountResponse';
import { getDataFilter } from './getDataFilter';

export const dataDebugged = (details: AccountResponse | undefined, drop: any) => {
  const defaultData = { data: getDataFilter(details, '4') };
  let cleanData: any = [];
  cleanData = getDataFilter(details, drop);
  const filterData = { data: cleanData };

  return drop === undefined ? defaultData : filterData;
};


import moment from 'moment';
import { ArrayInvestment,Investment } from '../interfaces/responseInvestments.interface';

/**
 * Enumerate days between two dates;
 *
 * @param {string} start
 * @param {string} end
 * @return {string[]} 
 */
const enumerateDates = (start: string, end: string) => {
    const startDate = moment(start);
    const endDate = moment(end);
    const dates = [];
    while (startDate.add(1, 'days').diff(endDate) < 0) {
        dates.push(startDate.clone().format("YYYY-MM-DD"));
    }
    return [...dates, end];
};
/**
 * Calculated date from currentDay
 *
 * @param {string} currentDay
 * @param {number} substraccion
 * @return {string} 
 */
const getPeriod = (currentDay: string, substraccion: number): string => {
    return moment(currentDay).subtract(substraccion, 'days').format('YYYY-MM-DD');
}
/**
 * dataFilter clean data and balance
 *
 * @param {(ArrayInvestment | undefined)} data
 * @param {(number | undefined)} drop
 * @param {number} amount
 * @return cleanData
 */
export const dataFilter = (data: ArrayInvestment | undefined, drop: number | undefined, amount: number) => {

    const currentDay = moment().format("YYYY-MM-DD");
    let dates: string[] ;
    switch (drop) {
        case 1:
            dates =  enumerateDates(getPeriod(currentDay, 30), currentDay);
        break;
        case 2:
            dates = enumerateDates(getPeriod(currentDay, 60), currentDay)
        break;
        case 3:
            dates = enumerateDates(getPeriod(currentDay, 90), currentDay)
        break;
        default:
            dates = [currentDay];
        break;
    }

      const result = data?.Investments.filter(({period_data}: Investment) => {
        return dates.find((value: string) => {
          return value === period_data.date;
        });
      }) || [];

      return [...result.map((investment: Investment) => {
          const {period_data: {date}, data_investment: {specific_yield: {yield_per_day: yieldPerDay}} } = investment;

          const dateDestructured = date.split('-');
        
        return {
            year: dateDestructured[0],
            month:dateDestructured[1],
            day: dateDestructured[2],
            balance: yieldPerDay * amount
        }
    }).sort((a: any, b: any) => {
        return a.month - b.month;
      })];
};

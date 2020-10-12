/**
 * CHN-CORPORATE-V-Widgets
 * 1.0.0 
 * response 
 *
 * @export
 * @interface ArrayInvestment
 */
export interface ArrayInvestment {
  Investments: Investment[];
}

export interface Investment {
  period_data: Perioddata;
  data_investment: Datainvestment;
}

interface Datainvestment {
  specific_yield: Specificyield;
}

interface Specificyield {
  yield_per_day: number;
}

interface Perioddata {
  date: string;
  period: string;
}

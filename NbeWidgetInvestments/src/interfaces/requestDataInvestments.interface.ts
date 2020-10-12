/**
 * CHN-CORPORATE-V-Widgets
 * 1.0.0 
 * request
 *  
 * @export
 * @interface DataInvestments
 */
export interface DataInvestments {
  DataInvestments: Investments[];
}

interface Investments {
  dataAccount: DataAccount;
  period_data: Perioddata;
  yield: number;
  amount: number;
}

interface Perioddata {
  start_date: string;
  period: string;
}

interface DataAccount {
  /**
* example: INVESTMENT_TERM
* Account clasification according with operation that can performed
*
* @type {('CASH'| 'CREDIT'| 'INVESTMENT_TERM'| 'INVESTMENT_DP')}
* @memberof DataAccount
*/
  accountClasification: 'CASH' | 'CREDIT' | 'INVESTMENT_TERM' | 'INVESTMENT_DP';
}
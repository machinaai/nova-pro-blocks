/*
 * CHN-CORPORATE-V-Widgets - widgetBalance
 * Response
 * Version 1.0.0
 */
export interface WidgetBalancesResponse {
  /*
   * Transactions widget
   */
  data_balance: BalanceResponse[];
}

interface BalanceResponse {
  /*
 * Example Efectivo MXN
 * Descriptive legend of the type of transaction
 */
  transaction_description: string;
  /*
* Example 50.67
* Percentage that includes this type of transaction
*/
  percentage: number;

  balance: Balancefields;

  account_routing: Accountrouting;
}

interface Accountrouting {
  /*
* Example CASH
* Account clasification according with operation that can performed
*/
  accountClasification: string;
}

interface Balancefields {
  /*
* Example MXN
* Currency of account with ISO 4217
*/
  currency: string;
  /*
* Example 749264926.01
* Available amount on a specific account
*/
  balance: number;
}

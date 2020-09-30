/*
 * CHN-CORPORATE-V-Widgets - widgetBalance
 * Request
 * Version 1.0.0
 */
export interface WidgetBalancesRequest {
  /*
   * Transactions widget
   */
  account_routings: AccountClasificationDefinition;
}
/*
 * Interface for Account Clasification Definition
 */
interface AccountClasificationDefinition {
  /*
   * Example List [ "CASH", "CREDIT" ]
   * Account clasification according with operation that can performed
   */
  accountClasification: string[][];
}

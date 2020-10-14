/**
 * CHN-CORPORATE-V-Widgets
 * 1.0.0 
 * response 
 *
 * @export
 * @interface ArrayPendingToAuthorizeInterface
 */
export interface ArrayPendingToAuthorizeInterface {
  PendingToAuthorize: PendingToAuthorizeInterface[];
}

interface PendingToAuthorizeInterface {
  transaction: Transaction[];
}

interface Transaction {
  /**
   * example: TRANSFER
   * Type of transaction
   *
   * @type {string}
   * @memberof Transaction
   */
  transactionType: string;
  /**
   * example: 34
   * Number of transacction pending to authorize
   *
   * @type {number}
   * @memberof Transaction
   */
  quantity: number;
}
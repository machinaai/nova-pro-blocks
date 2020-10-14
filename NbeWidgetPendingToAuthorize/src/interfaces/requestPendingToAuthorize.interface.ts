/**
 * CHN-CORPORATE-V-Widgets
 * 1.0.0 
 * request
 *  
 * @export
 * @interface DataPendingToAuthorizeInterface
 */
export interface DataPendingToAuthorizeInterface {
  DataPendingToAuthorize: PendingToAuthorizeInterface[];
}

interface PendingToAuthorizeInterface	 {
  /**
   * example: TRANSFER
   * Type of transaction
   *
   * @type {string[]}
   * @memberof PendingToAuthorizeInterface
   */
  Transaction: string[];
}
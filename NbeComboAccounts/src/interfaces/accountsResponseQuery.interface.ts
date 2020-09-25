import { AccountFieldsInterface, PaginationInterface } from './index.interface';

export interface AccountsResponseQueryInterface {
    accounts: AccountFieldsInterface[];
    pagination: PaginationInterface;
  }
  

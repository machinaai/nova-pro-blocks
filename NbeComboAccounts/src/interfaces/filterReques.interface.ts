import { AccountRoutingsFieldsInterace, BalanceFieldsInterface, BeneficiaryFieldsInterface, PaginationInterface } from "./index.interface";

export interface FilterRequestInterface {
    label?: string;
    beneficiary?: BeneficiaryFieldsInterface;
    account_routings?: AccountRoutingsFieldsInterace;
    balance?: BalanceFieldsInterface;
    pagination?: PaginationInterface;
  }
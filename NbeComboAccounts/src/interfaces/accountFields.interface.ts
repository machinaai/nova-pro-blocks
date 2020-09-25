import { BalanceFieldsInterface } from "./balanceField.interface";

export interface AccountFieldsInterface {
    idAccount: string;
    label: string;
    bank: BankFieldsInterface;
    beneficiary: BeneficiaryFieldsInterface;
    account_routings: AccountRoutingsFieldsInterace;
    balance: BalanceFieldsInterface;
  }
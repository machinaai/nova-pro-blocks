export interface AccountResponse {
  cash: AccountsFields[];
}
export interface AccountsFields {
  balance: BalanceFields;
  time: TimeFields;
}
interface BalanceFields {
  currency: string;
  balance: number;
}

interface TimeFields {
  startDate: string;
  endDate: string;
  period: string;
}

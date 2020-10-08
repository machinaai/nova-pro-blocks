export interface AccountResponse {
  cash: AccountsFields[];
}
export interface AccountsFields {
  balance: BalanceFields;
  period_data: PeriodFields;
}
interface BalanceFields {
  currency: string;
  balance: number;
}
export interface PeriodFields {
  time: TimeFields;
  specific_balance: SpecificFields;
}
interface TimeFields {
  date: string;
  period: string;
}
interface SpecificFields {
  balance_per_day: number;
}

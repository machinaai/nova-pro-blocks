export interface ArrayCreditCardsInterface {
    CreditCards: ResponseCreditCardsInterface[];
  }
  
export interface ResponseCreditCardsInterface {
    time: TimeInterface;
    totalDueAmount: number;
  }

export interface TimeInterface {
  startDate: string,
  endDate: string,
  period: string
}
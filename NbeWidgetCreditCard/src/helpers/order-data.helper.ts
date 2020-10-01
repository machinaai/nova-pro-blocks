import { ArrayCreditCardsInterface } from "../interfaces/array-credit-cards.interface";

export const orderData = (data: ArrayCreditCardsInterface | undefined): ArrayCreditCardsInterface | undefined => {
    if (!data) {
        return undefined;
    }
    const res = data.CreditCards.sort((a: any, b: any) => (a.time.period < b.time.period ? -1 : a.time.period > b.time.period ? 1 : 0));
    data.CreditCards = [...res];
    return data;
}
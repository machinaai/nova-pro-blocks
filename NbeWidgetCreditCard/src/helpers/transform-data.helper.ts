import { ArrayCreditCardsInterface } from "../interfaces/array-credit-cards.interface";
import { DataInterface as DataBarGraphInterface } from '../components/bar-graph/src/data.interface';
import { orderData } from "./order-data.helper";


export const transformData = (data: ArrayCreditCardsInterface | undefined): DataBarGraphInterface[] | undefined => {
    if (!data) {
        return undefined;
    }
    let res = orderData({...data});
    return res?.CreditCards.map(card => ({text: card.time.period, value: card.totalDueAmount * -1}));
}


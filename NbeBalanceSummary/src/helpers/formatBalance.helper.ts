import { DataInterface } from "../components/widget-balance-summary/interfaces/dataInterface.interface";
import { WidgetBalancesResponse } from '../interfaces/index';

export const formatBalance = (data: WidgetBalancesResponse | undefined): DataInterface[] | undefined => {
    if (!data) {
        return undefined;
    }
    const {data_balance: dataBalance} = data;

    return [...dataBalance.map((account: any) => {
        return {
            type: account.transaction_description,
            balance: account.balance.balance,
            percentage: account.percentage
        }
    })];
}
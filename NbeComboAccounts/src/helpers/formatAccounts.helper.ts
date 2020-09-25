import { ComboInterface } from "../components/combo-block/src/combo.interface";
import { AccountResponseInterface, AccountFieldsInterface, AccountsResponseQueryInterface } from "../interfaces/index.interface";

export const formatAccounts = (data: AccountResponseInterface | AccountsResponseQueryInterface | undefined): ComboInterface[] | undefined => {
    if(!data) {
        return undefined;
    }
    const {accounts} = data;
    return [...accounts.map((account: AccountFieldsInterface) => {
        return {
            value: account.idAccount,
            text: `${account.account_routings.accountType} ${account.label} ${account.balance.currency} $${account.balance.balance || ''}`,
        }
    })];
}
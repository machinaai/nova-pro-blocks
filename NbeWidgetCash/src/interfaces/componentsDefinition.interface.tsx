import {AccountTypesEnum} from "../enums/account-types.enum";
import {CurrencyEnum} from "../enums/currency.enum";

export interface ComponentsDefinition {
  dataAccount: AccountOptionDestination[];
}

export interface AccountOptionDestination {
  accountType: AccountTypesEnum;
  currency: CurrencyEnum;
}

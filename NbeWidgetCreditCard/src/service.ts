import request from 'umi-request';
import { enviromentEndPoints } from './enviroments/enviroments.fixture';
import { ArrayCreditCardsInterface } from './interfaces/array-credit-cards.interface';
import { DataCreditCardsInterface } from './interfaces/data-credit-cards.interface';

const errorHandler = (error: { response: Response }): Response => {
  return error.response;
};

export function getCreditCards(params: DataCreditCardsInterface): Promise<ArrayCreditCardsInterface> {
  return request(enviromentEndPoints.widgetCreditCards, {
    method: 'POST',
    data: params,
    errorHandler,
  });
}
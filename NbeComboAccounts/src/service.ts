import request from 'umi-request';
import { enviromentEndPoints } from './enviroments/enviroments.fixture';
import { AccountResponseInterface, AccountsOriginInterface, AccountsResponseQueryInterface, FilterRequestInterface } from './interfaces/index.interface';

const errorHandler = (error: { response: Response }): Response => {
  return error.response;
};

export function getOriginAccounts(params: AccountsOriginInterface): Promise<AccountResponseInterface> {
  return request(enviromentEndPoints.origin, {
    method: 'POST',
    data: params,
    errorHandler,
  });
}

export const getOriginQuery = (params: FilterRequestInterface): Promise<AccountsResponseQueryInterface>  => {
  return request(enviromentEndPoints.query, {
    method: 'POST',
    data: params,
    errorHandler,
  })
}
import request from 'umi-request';
import { enviromentEndPoints } from './enviroments/enviroments.fixture';
import { WidgetBalancesRequest, WidgetBalancesResponse } from './interfaces/index';

const errorHandler = (error: { response: Response }): Response => {
  return error.response;
};
export function getWidgetBalance(params: WidgetBalancesRequest): Promise<WidgetBalancesResponse> {
  return request(enviromentEndPoints.balance, {
    method: 'POST',
    data: params,
    errorHandler,
  });
}

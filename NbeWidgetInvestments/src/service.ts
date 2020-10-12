import request from 'umi-request';
import { envEndPoints } from './enviroments/enviroments.fixture';
import { ArrayInvestment,DataInvestments } from './interfaces/index';

const errorHandler = (error: { response: Response }): Response => {
  return error.response;
};
export async function invesmentRequest(params: DataInvestments, token?: string): Promise<ArrayInvestment> {
  return request(envEndPoints.Investments, {
    method: 'POST',
    // headers: {
    //   Authorization: token,
    // },
    data: params,
    errorHandler,
  });
}

import request from 'umi-request';
import { endPoints } from '../enviroments/enviroments.fixture';

const errorHandler = (error: { response: Response }): Response => {
  return error.response;
};

export async function getTransactions(token: string) {
  return request(endPoints.activity, {
    method: 'GET',
    credentials: 'include',
    headers: {
      Authorization: token,
    },
    errorHandler,
  });
}

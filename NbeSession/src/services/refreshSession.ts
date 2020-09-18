import request from 'umi-request';
import { endPoints } from '../enviroments/enviroments.fixture';

const errorHandler = (error: { response: Response }): Response => {
  return error.response;
};

export async function refreshSession(token: string) {
  return request(endPoints.refreshSession, {
    method: 'GET',
    credentials: 'include',
    headers: {
      Authorization: token,
    },
    errorHandler,
  });
}

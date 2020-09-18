import request from 'umi-request';
import { endPoints } from '../enviroments/enviroments.fixture';

const errorHandler = (error: { response: Response }): Response => {
  return error.response;
};

export async function logoutRequest(token: string) {
  return request(endPoints.logout, {
    method: 'GET',
    credentials: 'include',
    headers: {
      Authorization: token,
    },
    errorHandler,
  });
}

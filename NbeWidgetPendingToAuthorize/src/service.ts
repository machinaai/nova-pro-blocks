import request from 'umi-request';
import { envEndPoints } from './enviroments/enviroments.fixture';
import { ArrayPendingToAuthorizeInterface, DataPendingToAuthorizeInterface } from './interfaces/index';

const errorHandler = (error: { response: Response }): Response => {
  return error.response;
};
export async function pendinToAuthorizeService(params: DataPendingToAuthorizeInterface, token?: string): Promise<ArrayPendingToAuthorizeInterface> {
  return request(envEndPoints.pendingToAuthorize, {
    method: 'POST',
    // headers: {
    //   Authorization: token,
    // },
    data: params,
    errorHandler,
  });
}

import request from 'umi-request';
import { enviromentEndPoints } from '../enviroments/enviroments.fixture';

const errorHandler = (error: { response: Response }): Response => {
  return error.response;
};
export async function DataTablesRequest(params: any) {
  return request(enviromentEndPoints.requestDataTables, {
    method: 'GET',
    data: params,
    errorHandler,
  });
}


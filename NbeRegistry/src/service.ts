import request from 'umi-request';
import { enviromentEndPoints } from './enviroments/enviroments.fixture';
import ValidateClient from './interfaces/validateClient.interface';
import RegisterClient from './interfaces/registerClient.interface';

const errorHandler = (error: { response: Response }): Response => {
  return error.response;
};
export async function validateClient(params: ValidateClient) {
  return request(enviromentEndPoints.validateClient, {
    method: 'POST',
    data: params,
    errorHandler,
  });
}
export async function registerClient(params: RegisterClient) {
  return request(enviromentEndPoints.registerClient, {
    method: 'POST',
    data: params,
    errorHandler,
  });
}

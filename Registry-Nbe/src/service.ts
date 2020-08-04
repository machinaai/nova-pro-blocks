import request from 'umi-request';
import ValidateClient from './interfaces/validateClient.interface';
import RegisterClient from './interfaces/registerClient.interface';

const errorHandler = (error: { response: Response }): Response => {
  return error.response;
};

export async function validateClient(params: ValidateClient) {
  return request('/private/v1/corporate/customer/registry/validateClient', {
    method: 'POST',
    data: params,
    errorHandler,
    referrerPolicy: 'unsafe-url',
    mode: 'cors',
  });
}

export async function registerClient(params: RegisterClient) {
  return request('/private/v1/corporate/customer/registry/registerClient', {
    method: 'POST',
    data: params,
    errorHandler,
    referrerPolicy: 'unsafe-url',
    mode: 'cors',
  });
}

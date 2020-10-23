import request from 'umi-request';
import { enviromentEndPoints } from './enviroments/enviroments.fixture';
import { getOtpResponseInterface, getOtpRequestInterface,
validateOtpRequestInterface, validateOtpResponseInterface } from './interfaces/index.interface';
const errorHandler = (error: { response: Response }): Response => {
  return error.response;
};

export function stepGetOtpPhone(params: getOtpRequestInterface): Promise<getOtpResponseInterface> {
  return request(enviromentEndPoints.getOtpPhone, {
    method: 'POST',
    data: params,
    errorHandler,
  });
}

export const stepValidateOtpPhone = (params: validateOtpRequestInterface): Promise<validateOtpResponseInterface>  => {
  return request(enviromentEndPoints.validateOtpPhone, {
    method: 'POST',
    data: params,
    errorHandler,
  })
}
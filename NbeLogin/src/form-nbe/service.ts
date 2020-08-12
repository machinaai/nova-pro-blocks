import request from 'umi-request';
import { enviromentEndPoints } from './enviroments/enviroments.fixture';
import { FormLoginType } from './FormLogin/interfaces/formLogin.interface';
import { FormLoginTypeOTP } from './FormLoginOtp/interfaces/formLoginOTP.interface';

const errorHandler = (error: { response: Response }): Response => {
  return error.response;
};

export async function accountLogin(params: FormLoginType) {
  return request(enviromentEndPoints.login, {
    method: 'POST',
    data: params,
    errorHandler,
    credentials: 'include',
  });
}

export async function getOTPLogin() {
  return request(enviromentEndPoints.requestOTPLogin, {
    method: 'GET',
    errorHandler,
    credentials: 'include',
  });
}

export async function validateOTPLogin(params: FormLoginTypeOTP) {
  return request(enviromentEndPoints.validateOTPLogin, {
    method: 'POST',
    data: params,
    errorHandler,
    credentials: 'include',
  });
}

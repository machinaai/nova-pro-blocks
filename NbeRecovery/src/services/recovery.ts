import request from 'umi-request';
import { enviromentEndPoints } from '../enviroments/enviroments.fixture';
import { ValidateUser } from '../interfaces/validateUser.interface';

const errorHandler = (error: { response: Response }): Response => {
  return error.response;
};

export async function getUserData(params: ValidateUser) {
  return request(enviromentEndPoints.getUserData, {
    method: 'POST',
    data: params,
    errorHandler,
  });
}

export async function validatePhoneNumber(params: any) {
  return request(enviromentEndPoints.validatePhoneNumber, {
    method: 'POST',
    headers: {
      Cookie: 'SESSION=YTk2MDFhNTMtY2Y3Ni00M2I5LWJmYWItZDA0ODFjN',
    },
    data: params,
    errorHandler,
  });
}

export async function setPassword(params: any) {
  return request(enviromentEndPoints.setPassword, {
    method: 'POST',
    headers: {
      Cookie: 'SESSION=YTk2MDFhNTMtY2Y3Ni00M2I5LWJmYWItZDA0ODFjN',
    },
    data: params,
    errorHandler,
    referrerPolicy: 'unsafe-url',
    mode: 'cors',
  });
}

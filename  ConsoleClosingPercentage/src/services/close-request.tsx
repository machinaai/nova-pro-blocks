import { enviromentEndPoints } from '../enviroments/enviroments.fixture';
import { ComponentsDefinition } from '@/interfaces/componentsDefinition.interface';
import request from 'umi-request';

const errorHandler = (error: { response: Response }): Response => {
  return error.response;
};
export async function CloseRequestService(params: ComponentsDefinition) {
  if (params) {
    const { userType, startDate, endDate } = params;
    return request(
      `${enviromentEndPoints.closeRequest}?userType=${userType}&startDate=${startDate}&endDate=${endDate}`,
      {
        method: 'GET',
        errorHandler
      },
    );
  } else {
    return request(
      `${enviromentEndPoints.closeRequest}?userType=&startDate=&endDate=`,
      {
        method: 'GET',
        errorHandler
      },
    );
  }
}


import request from 'umi-request';
import { ComponentsDefinition } from '../interfaces/componentsDefinition.interface';
import { enviromentEndPoints } from '../enviroments/enviroments.fixture';

const errorHandler = (error: { response: Response }): Response => {
  return error.response;
};
export async function cashRequest(params: ComponentsDefinition) {
  return request(enviromentEndPoints.widgetCash, {
    method: 'POST',
    data: params,
    errorHandler,
  });
}

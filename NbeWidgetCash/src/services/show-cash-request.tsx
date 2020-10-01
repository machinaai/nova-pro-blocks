import request from 'umi-request';
import { ComponentsDefinition } from '../interfaces/componentsDefinition.interface';

const errorHandler = (error: { response: Response }): Response => {
  return error.response;
};
export async function cashRequest(token: string, params: ComponentsDefinition) {
  return request('/private/v1/corporate/widgets', {
    method: 'POST',
    headers: {
      Authorization: token,
    },
    data: params,
    errorHandler,
  });
}

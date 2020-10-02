import request from 'umi-request';
import { ComponentsDefinition } from '../interfaces/componentsDefinition.interface';

const errorHandler = (error: { response: Response }): Response => {
  return error.response;
};
export async function cashRequest( params: ComponentsDefinition) {
  return request('/private/v1/corporate/widgets', {
    method: 'POST',
    data: params,
    errorHandler,
  });
}

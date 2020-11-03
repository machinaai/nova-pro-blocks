import request from 'umi-request';
import { enviromentEndPoints } from './enviroments/enviroments.fixture';

const errorHandler = (error: { response: Response }): Response => {
  return error.response;
};

// export async function sendData(params: any) {
//   return request(
//     'https://rao.reboot.vc/services/flowconsole/api/dashboard/_search/request-devices?userType=&startDate=2020-08-31&endDate=2020-08-31',
//     {
//       method: 'GET',
//       errorHandler,
//     },
//   );
// }

export async function ineFromDataService(params: any) {
  return request('services/flowproxyml/api/upload-front', {
    method: 'POST',
    data: params,
    errorHandler,
  });
}
export async function ineBackDataService(params: any) {
  return request('services/flowproxyml/api/upload-back', {
    method: 'POST',
    data: params,
    errorHandler,
  });
}
export async function pdfDataService(params: any) {
  return request('services/flowproxyml/api/upload-document', {
    method: 'POST',
    data: params,
    errorHandler,
  });
}
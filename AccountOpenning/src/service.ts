import request from 'umi-request';
const errorHandler = (error: { response: Response }): Response => {
  return error.response;
};
export async function fakeSubmitForm(params: any) {
  return request('/api/forms', {
    method: 'POST',
    data: params,
  });
}
export async function submitOTPService(params: any) {
  return request('/api/authentication/validateOtp', {
    method: 'POST',
    data: {
      OTP: params,
    },
    errorHandler,
  });
}
export async function validateIdentification(params: any) {
  const elToken: any = sessionStorage.getItem('token');
  const toki = JSON.parse(elToken);
  return request('/api/user/validateIdentification', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${toki.token}`,
    },
    data: {
      confererence: {
        room: params,
      },
    },
    errorHandler,
  });
}
export async function submitPhoneNumberService(params: any) {
  return request('/api/authentication/getOTP', {
    method: 'POST',
    data: {
      phoneNumber: params,
    },
    errorHandler,
  });
}
export async function validateIneFront(params: any) {
  const elToken: any = sessionStorage.getItem('token');
  const toki = JSON.parse(elToken);
  return request('/api/user/INEFront', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${toki.token}`,
    },
    data: {
      confererence: {
        room: params,
      },
    },
  });
}
// // service to activate notification
export async function alertsRegistryService(params: any) {
  const elToken: any = sessionStorage.getItem('token');
  const toki = JSON.parse(elToken);
  return request('/api/registry/alertsRegistry', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${toki.token}`,
    },
    data: {
      enableAlerts: params,
    },
    errorHandler,
  });
}
export async function validateIneBack(params: any) {
  const elToken: any = sessionStorage.getItem('token');
  const toki = JSON.parse(elToken);
  return request('/api/user/INEBack', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${toki.token}`,
    },
    data: {
      confererence: {
        room: params,
      },
    },
    errorHandler,
  });
}
export async function validateUser(params: any) {
  const elToken: any = sessionStorage.getItem('token');
  const toki = JSON.parse(elToken);
  return request('/api/user/validateUser', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${toki.token}`,
    },
    data: {
      confererence: {
        room: params,
      },
    },
    errorHandler,
  });
}
export async function getOtpUser() {
  const elToken: any = sessionStorage.getItem('token');
  const toki = JSON.parse(elToken);
  return request('/api/user/getOTP', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${toki.token}`,
    },
  });
}
// service to get customer data
export async function customerDataService(params: any) {
  const elToken: any = sessionStorage.getItem('token');
  const toki = JSON.parse(elToken);
  return request('/api/user/customerData', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${toki.token}`,
    },
    data: params,
    errorHandler,
  });
}
export async function validateOtpUser(params: any) {
  const elToken: any = sessionStorage.getItem('token');
  const toki = JSON.parse(elToken);
  return request('/api/user/validateOtp', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${toki.token}`,
    },
    data: {
      confererence: {
        room: params,
      },
    },
    errorHandler,
  });
}
export async function acceptContract(params: any) {
  const elToken: any = sessionStorage.getItem('token');
  const toki = JSON.parse(elToken);
  return request('/api/user/acceptContract', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${toki.token}`,
    },
    data: {
      confererence: {
        room: params,
      },
    },
  });
}
export async function submitContractService(params: any) {
  let token: any = sessionStorage.getItem('token');
  token = JSON.parse(token);
  return request('/api/registry/acceptContract', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token.token}`,
    },
    data: {
      accountType: params,
    },
    errorHandler,
  });
}
export async function updateAddress(params: any) {
  let token: any = sessionStorage.getItem('token');
  token = JSON.parse(token);
  return request('/api/user/updateAdress', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token.token}`,
    },
    data: {
      confererence: {
        room: params,
      },
    },
    errorHandler,
  });
}

export async function getFlowId(params: any) {
  return request(
    'http://ec2-34-216-165-19.us-west-2.compute.amazonaws.com:9091/private/v1/rao/flow-id',
    {
      method: 'POST',
      data: {
        phoneNumber: params,
      },
      errorHandler,
    },
  );
}

export async function getStepper(typeFlow='N2') {
  return request(`/services/raoflow/api/flow-versions?name=${typeFlow}`, {
    method: 'GET',
    errorHandler,
  });
}

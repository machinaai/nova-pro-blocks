import type { ResponseDataService } from "../interfaces";

/**
 * Tranform data by manually component
 *
 * @param {*} data
 * @return {*}
 */
export const transformData = (data: ResponseDataService) => {
  const {
    address,
    birth_date,
    curp,
    id,
    gender,
    name,
    last_name,
    second_last_name,
    rectifiedImage,
    register_date,
  } = data;

  if (data) {
    return {
      customerData: {
        residence: address,
        birthplace: 'Mexico',
        gender,
        CURP: curp,
        datebirth: birth_date,
        idIne: id,
        rectifiedImage,
        register_date
      },
      customerName: { name: `${name} ${last_name} ${second_last_name}` },
    };
  }
  
};

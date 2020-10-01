/**
 * Function to format the total balance
 * @param data
 */
export const getBalanceFormat = (data: any) => {
  const regExp1 = /^\d{2,16}$/;
  const regExp2 = /^[0-9]{1,16}$/;
  const regExp3 = /^-([0-9]{1,16})$/;
  let balance = '';
  let bal: number = 0;
  data.forEach((element: any) => {
    bal += element.totalBalance;
  });

  const number = Math.max(bal).toFixed(2);
  const arr = number.split('.');
  const filterData = arr[0];

  if (regExp1.test(filterData) || regExp2.test(filterData) || regExp3.test(filterData)) {
    if (filterData.charAt(0).includes('-')) {
      const onlyNumbers = filterData.slice(1, filterData.length);
      let format = onlyNumbers
        .substr(1)
        .split('')
        .reverse()
        .join('')
        .replace(/(?=\d*\.?)(\d{3})/g, '$1,');
      format = format.split('').reverse().join('').replace(/^[.]/, '');
      balance = `${onlyNumbers.charAt(0)}${format}.${arr[1]}`;
      return `-$${balance}`;
    }
    let format = filterData
      .substr(1)
      .split('')
      .reverse()
      .join('')
      .replace(/(?=\d*\.?)(\d{3})/g, '$1,');
    format = format.split('').reverse().join('').replace(/^[.]/, '');
    balance = `${filterData.charAt(0)}${format}.${arr[1]}`;
    return `$${balance}`;
  }
  return `-`;
};

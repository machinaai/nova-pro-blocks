
export const currency = (data: number, negative?: boolean): string => {
    let res = data.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}).replace('-', '');
    return negative ? `-$${res}`: `$${res}`;
}
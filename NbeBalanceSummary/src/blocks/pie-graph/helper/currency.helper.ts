
export const currencyHelper = (data: number, negative?: boolean): string => {
    const res = data.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}).replace('-', '');
    return negative || data < 0 ? `-$${res}`: `$${res}`;
}
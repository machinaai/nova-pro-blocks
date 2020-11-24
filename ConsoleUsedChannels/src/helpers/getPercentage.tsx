import { DataChart } from '../interfaces/ProblockProps..interface';

export const getPercentage = (data: any) => {
    let dataDevice: DataChart[] = [];
    const totalDev = data.mobile + data.web + data.tablet;

    for (const property in data) {
        dataDevice = [...dataDevice, {
            type: property,
            total: data[property],
            percentage: Number(((100 * data[property]) / totalDev).toFixed(2))
        }]
    }
    return dataDevice
}



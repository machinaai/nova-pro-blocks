import { DataOption } from '../interfaces/ProblockProps..interface';

export const getCleanData = (data: any,totalReq:number) => {
    let dataDevice: DataOption[] = [];
    for (const property in data) {
        const {type,count}=data[property];        
        dataDevice = [...dataDevice, {
            key:Number(property)+1,
            type: type,
            percentage: Number(((100 * count) / totalReq).toFixed(2))
        }]
    }    
    return dataDevice
}



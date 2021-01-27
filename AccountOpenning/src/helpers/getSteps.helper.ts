import { DataStepsInterface } from '../interfaces/dataSteps.interface';


export const getSteps = (stepsData: DataStepsInterface[], position: number): string => {
    const obj = stepsData.find((step:DataStepsInterface) => {
        return step.id === position
    })
    return obj?.component
}
import { StepsInterface } from "../blocks/stepper-dynamic/interfaces/steps-props.interface";
import { DataStepsInterface } from '../interfaces/dataSteps.interface';


export const stepperData = (stepsData: DataStepsInterface[]): StepsInterface[] => {
    return [...stepsData.map((step:DataStepsInterface) => {
        return {
            title: step.title
        }
    })]
}
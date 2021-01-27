import { StepsData } from "@/pages/Account-Opening/fixtures/steps-aplication.fixture";


export interface StepsProps {
    current: number
    steps: StepsInterface[];
}

export interface StepsInterface {
    description?: React.ReactDOM;
    disabled?: boolean;
    icon?: React.ReactDOM;
    status?: "error" | "wait" | "process" | "finish" | undefined;
    subtitle?: React.ReactDOM;
    title: string
}
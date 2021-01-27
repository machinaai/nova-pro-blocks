export interface DataStepsInterface {
    id: number | string;
    title: string;
    component: any;
    current: string;
    steps: {
      numStep: number | string;
    };
    progress: {
      show: string;
      percent: number;
      time: string;
      textStep: string;
    };
}
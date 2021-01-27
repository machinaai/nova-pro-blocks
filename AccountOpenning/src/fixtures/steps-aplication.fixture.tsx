import { Menu } from '../models/model';

// const json = require('../../../../../back/stepper.json');

// export const StepsData: Menu[] = json;
export const StepsData: Menu[] = [
  {
      id: 1,
      title: 'Verificación celular',
      component: '<Step1 />',
      current: 'verification',
      steps: {
        numStep: 0,
      },
      progress: {
        show: 'none',
        percent: 0,
        time: '',
        textStep: ''
      }
    },
    {
      id: 2,
      title: 'Actividad de la cuenta',
      component: 'Step2',
      current: 'activity',
      steps: {
        numStep: 1,
      },
      progress: {
        show: 'block',
        percent: 30,
        time: '30 seg.',
        textStep: 'Paso 1 de 3'
      }
    },
    {
      id: 3,
      title: 'Verificación de identidad',
      component: 'Step3',
      current: 'identity',
      steps: {
        numStep: 2,
      },
      progress: {
        show: 'block',
        percent: 60,
        time: '30 seg.',
        textStep: 'Paso 2 de 3'
      }
    },
    {
      id: 4,
      title: 'Apertura de la cuenta',
      component: 'Step4',
      current: 'result',
      steps: {
        numStep: 3,
      },
      progress: {
        show: 'block',
        percent: 100,
        time: '30 seg.',
        textStep: 'Paso 3 de 3'
      }
    },
];

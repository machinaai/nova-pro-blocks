import { StageInterface } from '../interfaces/stage.interface';
import { assetsImages } from '../assets/assets.fixture';

/**
 * Fixture Stages conference N2 video
 *
 * @type {*}
 */
export const StagesN2Video: StageInterface[] = [
  {
    id: 0,
    legendStage: 'Acerca tu INE del lado frontal',
    name: 'idsFront',
    shapeStage: assetsImages.Scan,
    flipCamera: true
  },
  {
    id: 1,
    legendStage: 'Acerca tu INE del lado reverso',
    name: 'idsBack',
    shapeStage: assetsImages.Scan,
    flipCamera: true
  }
];
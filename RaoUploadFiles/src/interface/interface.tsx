import { TypeFlow } from '../enum/emun';
import {
  FirstViewInterface,
  SecondViewInterface,
} from '../blocks/upload-files-rao/interfaces/interface';

export interface UploadInfoProps {
  typeFlowProp: TypeFlow;
  phoneNumber: string;
  firstView: FirstViewInterface;
  secondView: SecondViewInterface;
}

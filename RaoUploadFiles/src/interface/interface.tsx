import { TypeFlow } from '../enum/emun';
import {
  FirstViewInterface,
  SecondViewInterface,
} from '../blocks/upload-files-rao/interfaces/interface';
import { ModelType } from "../models/model";

export interface UploadInfoProps {
  typeFlowProp: TypeFlow;
  phoneNumber: string;
  firstView: FirstViewInterface;
  secondView: SecondViewInterface;
  onComplete?: Function;
  flagFlowComplete?: ModelType["flowComplete"];
}

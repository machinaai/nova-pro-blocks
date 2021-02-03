import { TypeFlow } from '../block/upload-block/enum/emun';

export interface PAGE_NAME_UPPER_CAMEL_CASEProps {
    typeFlowProp: TypeFlow;
    phoneUser: string | number;
    onComplete?: Function;
    onSetUserData?: Function;
    status?: any;
    dataUpload?:any;
    flagFlowComplete?:any
}
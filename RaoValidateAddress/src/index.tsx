import React from "react";
import { useDispatch, connect } from "umi";
import { addressFixture,dataFonts} from './fixture/dataFixture';
import { ComponentProps, Fonts } from './interfaces/validate-address.interface';
import { StateModel } from './models/model';
import ValidateAddres from './components/ validate-address/src';

interface PAGE_NAME_UPPER_CAMEL_CASEProps {
  font?: Fonts;
  address: StateModel['address'];
  option: StateModel['option'];
  flowComplete: StateModel['flowComplete'];
}

/**
 * Pro block for another time screen
 * @param props 
 */
const PAGE_NAME_UPPER_CAMEL_CASE: React.FC<PAGE_NAME_UPPER_CAMEL_CASEProps> = ({ font = dataFonts, address=addressFixture }) => {
  const dispatch = useDispatch();

  const setVal=(val:string)=>{
    dispatch({
      type: "BLOCK_NAME_CAMEL_CASE/setOption",
      payload: {
        option: val
      },
    }),
      dispatch({
        type: "BLOCK_NAME_CAMEL_CASE/setFlowStatus",
        payload: true
      });
  }

  const propsComponent: ComponentProps={
    address:address,
    fonts:font,
    actionBtn:()=>{setVal('validate_address')}
  }
  return (
    <ValidateAddres {...propsComponent}/>
  );
};

export default connect(({ BLOCK_NAME_CAMEL_CASE }: { BLOCK_NAME_CAMEL_CASE: StateModel }) => ({
  address: BLOCK_NAME_CAMEL_CASE.address,
  option: BLOCK_NAME_CAMEL_CASE.option,
  flowComplete: BLOCK_NAME_CAMEL_CASE.flowComplete,
}))(PAGE_NAME_UPPER_CAMEL_CASE);

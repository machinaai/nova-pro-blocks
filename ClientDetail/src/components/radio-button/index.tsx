import React, { useState } from 'react';
import { Radio } from 'antd';

export interface SelectOptionsProps{
  dataOptions:DataOp[],
  action:Function,
  fontOp?:string
}

interface DataOp {
  key:string,
  label:string,
  value:string
}

const RadioButtonBlock: React.FC<SelectOptionsProps> = ({ dataOptions, action, fontOp='Signika-Medium' }) => {
  const [radio, setRadio] = useState();

  const radioChange = (e: any) => {
    setRadio(e.target.value);
    action(e.target.value);
  } 

  return (
    <Radio.Group
      buttonStyle="solid"
      options={dataOptions}
      onChange={radioChange}
      value={radio}
      optionType="button"
      style={{fontFamily:`${fontOp}`,width:'100%'}}
      size="middle"
    />
  );
};

export default RadioButtonBlock;

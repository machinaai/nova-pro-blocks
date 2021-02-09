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
      onChange={radioChange}
      value={radio}
      style={{fontFamily:`${fontOp}`,width:'100%', display: 'flex'}}
      size="medium"
    >
      {dataOptions.map((e:any)=> {
        return (
          <Radio.Button style={{fontFamily:`${fontOp}`,width:'100%', textAlign: "center"}} value={e.value} key={e.key}>{e.label}</Radio.Button>
        )
      })}
      </Radio.Group>
  );
};

export default RadioButtonBlock;

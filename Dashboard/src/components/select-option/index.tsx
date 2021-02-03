import React, { useState } from 'react';
import { Select } from 'antd';
import styles from './index.less';

interface SelectOptionsProps{
  dataOptions?:DataOp[],
  titleSelect?:TitleProp
  action?:Function
}

interface DataOp {
  op:number,
  nameOp:string
}
interface TitleProp{
  title:string,
  font:string
}

const SelectOptionsBlock: React.FC<SelectOptionsProps> = ({dataOptions=[],titleSelect={},action=()=>{}}) => {
  const { Option } = Select;
  const [valItem, setValItem] = useState(dataOptions[0].nameOp)

  const onChange=(value : any)=> {
    setValItem(value);
    action(value);
  }
  return (
    <Select
    style={{ width: "100%",fontFamily:`${titleSelect.font}`}}
      className={styles.selectOp}
      value={`${titleSelect.title}:${valItem}`}      
      optionFilterProp="children"
      onChange={onChange}      
    >
      {dataOptions.map((op:any)=>(
         <Option key={op.op} value={op.nameOp}>{op.nameOp}</Option>
      ))}
    </Select>
  );
};

export default SelectOptionsBlock;

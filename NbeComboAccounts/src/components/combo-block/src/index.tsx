import React, {useState, useEffect} from 'react';
import {useIntl} from 'umi';
import './index.less';
import { Select, Button } from 'antd';
import { ComboInterface } from './combo.interface';
import { ErrorEnum } from './error.enum';

const { Option } = Select;

interface PropsInterface {
  data?: ComboInterface[],
  title?: string,
  error?: number,
  retry?: Function,
  selected?: Function,
  search?: Function
}

const ComboBlock: React.FC<PropsInterface> =  ({data, title, error, retry, selected, search }) => {
  const [header, setHeader] = useState(title);
  const int = useIntl();
  let valueFilter: string = '';

  const open = error? {open: false} : {}; 

  const placeholder = (
    <>
      { header }
  {ErrorEnum.api === error && <Button type="link" >{int.formatMessage({id: "comboBlock.retry"})}</Button> }
    </>
    )

  const onClick = () => {
    ErrorEnum.api === error && retry && retry();
  }

  const filterOptions = (value: string) => {
    if(value.length < 3) {
      return true;
    } else {
      valueFilter = value;
      search && search(value);
    }
  } 

  const onScroll = (event: any) => {
    const {target} = event; 
    (target.scrollTop + target.offsetHeight) === (target.scrollHeight) && search && search(valueFilter);
    !target.scrollTop && search && search(valueFilter);
  }

  useEffect(() => {
   if(ErrorEnum.api === error){
     setHeader(int.formatMessage({id: "comboBlock.error.api"}));
   } else if(ErrorEnum.accounts === error) {
    setHeader(int.formatMessage({id: "comboBlock.error.accounts"}));
   } else {
     setHeader(title);
   }
  }, [error]);

  return (
    <>
      <Select 
        style={{width: "100%", maxWidth: "500px"}}
        placeholder={placeholder}
        showArrow={!error}
        onClick={onClick}
        {...open}
        showSearch
        onSearch={filterOptions}
        listHeight={32}
        onSelect={(value) => {selected && selected(value)}}
        filterOption={false}
        onPopupScroll={onScroll}
        getPopupContainer={triggerNode => {
          //console.log(triggerNode);
          return triggerNode;
        }}
        >
        {data?.map(opt => (<Option key={opt.value} value={opt.value}>{opt.text}</Option>))}
      </Select>
    </>
  );
}

export default ComboBlock;
import { DatePicker } from 'antd';
import moment from 'moment';
import React from 'react';

interface Props {
  action?: Function,
}


const RangePickerBlock: React.FC<Props> = ({ action = ()=>{} }) => {
  const { RangePicker } = DatePicker;
  let startDate;
  let endDate

  const dateChange = (values: any) => {
    if (values) {
      const eventStartDate = values[0]._d;
      const eventEndDate = values[1]._d;

      startDate = moment(eventStartDate).format('YYYY-MM-DD');
      endDate = moment(eventEndDate).format('YYYY-MM-DD');

      action({ startDate, endDate });
    }else {
      action({ startDate:'', endDate:'' });      
    }
  };

  /**
    * function to can not select days after today
    * 
    */
  const disabledDate = (current: any) => {
    return current && current > moment().endOf('day');
  }

  return (
    <>
      <RangePicker
        format='DD/MM/YYYY'
        inputReadOnly
        onChange={dateChange}
        style={{ width: '100%' }}
        disabledDate={disabledDate}
      />
    </>
  );
};

export default RangePickerBlock;
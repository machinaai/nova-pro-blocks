import React from 'react';
import Block from './components/currency-block/src';
import { DataGraficInterface } from './components/lineal-grafic/src/interfaces/dataGrafic.interface';
import LinealGrafic from './components/lineal-grafic/src';

const AddContent: React.FC<any> = ({ valueDrop, data }) => {
  let dataGrafic: any[] = [];

  let bal: number = 0;
  data.forEach((element: any) => {
    bal += element.totalBalance;
  });

  if (valueDrop === '1') {
    data.forEach((val: any) => {
      const { month, day, balance } = val;
      dataGrafic = [...dataGrafic, { month, day, balance }];
    });
  } else {
    data.forEach((val: any) => {
      const { year, month, balance } = val;
      dataGrafic = [...dataGrafic, { year, month, balance }];
    });
  }
  const newData: DataGraficInterface = {
    data: dataGrafic,
    dropValue: valueDrop,
  };
  return (
    <>
      <div>
        <Block amount={bal} />
      </div>
      <div>
        <LinealGrafic {...newData} />
      </div>
    </>
  );
};
export default AddContent;

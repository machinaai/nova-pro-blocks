import React from 'react';
import { Chart, Geom } from 'bizcharts';
import './index.less';
import { DataInterface } from './data.interface';

interface props {
  data?: DataInterface[],
  height?: number,
  firstColor?: string,
  lastColor?: string,
  selected?: Function,
}

const BarGraph: React.FC<props> =  ({data, height = 100, firstColor = '#ffeeee', lastColor = '#ff6565', selected}) => {

  const onClickInterval = (event: any) => {
    event.data && selected && selected(event.data._origin);
    return [true, {
      mode: 'single',
        style: { 
          fill: 'red',
        }
    }];
  }

  return (
    <>
      <Chart height={height} forceFit={true} data={data} padding='auto' onIntervalClick={onClickInterval}>
        <Geom select={[true, {
            mode: 'single',
              style: { 
                fill: 'black',
              }
          }]} color={["text",`${firstColor}-${lastColor}`]} type="interval" position="text*value" />
      </Chart>
    </>
  );
}

export default BarGraph;
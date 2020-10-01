import React, { useState, useEffect } from 'react';
import { Chart, Tooltip, Geom, Axis, Legend } from 'bizcharts';
import moment from 'moment';

const Grafics: React.FC<any> = ({ item, drop }) => {
  const [charData, setCharData] = useState(item);

  useEffect(() => {
    setCharData(item);
  }, [item]);

  let valX = '';
  valX = drop === '1' ? 'day' : 'month';

  const cols = {
    valX: {
      type: 'linear',
      tickInterval: 50,
    },
  };
  return (
    <div>
      <Chart
        width={219}
        height={100}
        padding={[5, 20, 20, 40]}
        data={charData}
        scale={cols}
        forceFit
      >
        <Axis name={valX} />
        <Axis name="balance" label={{ formatter: (val) => `${val}%` }} />
        <Legend />
        <Tooltip
          useHtml
          htmlContent={(title) => {
            return `<div class="g2-tooltip" style='position:absolute;'>
          <div class="g2-tooltip-title">${drop === '1' ? title : moment.months(Number(title) - 1)} 
          </div>
          </div>`;
          }}
        />
        <Geom type="line" position={`${valX}*balance`} size={2} />
        <Geom type="point" position={`${valX}*balance`} shape="circle" size={3} />
        {/* <Geom type="area" tooltip={false} position={`${valX}*balance`}/> */}
      </Chart>
    </div>
  );
};
export default Grafics;

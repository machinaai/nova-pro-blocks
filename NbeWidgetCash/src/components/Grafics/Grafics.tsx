import React, {useState, useEffect} from 'react';
import {Chart, Tooltip, Geom, Axis, Legend} from 'bizcharts';
import moment from 'moment';

const Grafics: React.FC<any> = ({item, drop}) => {
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
        <Axis name={valX}/>
        <Axis name="balance" label={{formatter: (val) => `${val}%`}}/>
        <Legend/>
        <Tooltip
          useHtml
          htmlContent={(title, items) => {
            let value;
            let yearValue;
            let monthh;
            items?.forEach((val: any) => {
              const {
                point: {_origin: origin},
              } = val;
              const {year, month, balance} = origin;
              value = balance;
              monthh = month;
              yearValue = year;
            });
            return `
          <div class="g2-tooltip" style='position:absolute;'>
          <div class="g2-tooltip-title">
          <p>${
              drop === '1'
                ? `${title} ${moment.months(Number(monthh) - 1)}`
                : `${
                  moment
                    .months(Number(title) - 1)
                    .charAt(0)
                    .toUpperCase() + moment.months(Number(title) - 1).slice(1)
                } ${yearValue}`
            }</p>
          </div>
          <div style='position:absolute;left:35%'>${value}%</div>
          </div>`;
          }}
        />
        <Geom type="line" position={`${valX}*balance`} size={2}/>
        <Geom type="point" position={`${valX}*balance`} shape="circle" size={3}/>
        {/* <Geom type="area" tooltip={false} position={`${valX}*balance`}/> */}
      </Chart>
    </div>
  );
};
export default Grafics;

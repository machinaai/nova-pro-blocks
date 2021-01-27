import React from 'react';
import { Spin } from 'antd';

const Relleno: React.FC<any> = ({ size, name }) => {
  return (
    <div
      style={{
        textAlign: 'center',
      }}
    >
      <Spin />
      <p>In Progress {size}</p>
      <p>{name}</p>
    </div>
  );
};

export default Relleno;

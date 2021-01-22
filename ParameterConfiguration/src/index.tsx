import React from 'react';
import { ConfigParamsContainer } from './components/main-container/config-params';

interface PAGE_NAME_UPPER_CAMEL_CASEProps {
    fontFamily?: {
        fontTitle: string
        fontContent: string
    }
}

const PAGE_NAME_UPPER_CAMEL_CASE: React.FC<PAGE_NAME_UPPER_CAMEL_CASEProps> = ({fontFamily}) => {  
  return (
    <>
      <ConfigParamsContainer font={fontFamily}/>      
    </>
  );
};

export default PAGE_NAME_UPPER_CAMEL_CASE;

import React, { useState } from 'react';
import Paperless from '../paperless';

import FinishPage from '../account-screen';

export default (props) => {
  const { userData, phoneUser } = props;
  const [step, setStep] = useState(false);
  const {
    informationObject: {
      customerName: { name },
    },
  } = userData;
  return (
    <>
      {!step ? (
        <Paperless
          onComplete={() => {
            setStep(true);
          }}
        />
      ) : (
        <FinishPage onNameUser={name} onPhoneUser={phoneUser} />
      )}
    </>
  );
};
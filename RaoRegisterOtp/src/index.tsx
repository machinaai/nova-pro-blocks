import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, connect, useIntl } from "umi";

import Title from "./components/contentTitle";
// step views

import GetOtp from "./blocks/getOTP";
import ValidateOtp from "./blocks/validateOtp";

import { StepEnum } from "./enums";

import { StateModel } from "./models/model";

interface PAGE_NAME_UPPER_CAMEL_CASEProps {
  step?: StateModel["step"];
  status?: StateModel["status"];
  flagFlowComplete?: StateModel["flowComplete"];
  onComplete?: Function;
  phoneSave?: StateModel['phone'];
  onSetPhone?: Function;
}
/**
 * Pro block RegisterOtp
 *
 * @param {Props} { step,onComplete, flagFlowComplete}
 */
const PAGE_NAME_UPPER_CAMEL_CASE: React.FC<PAGE_NAME_UPPER_CAMEL_CASEProps> = ({
  step,
  onComplete,
  flagFlowComplete,
  phoneSave,
  onSetPhone
}) => {
  const Internationalization = useIntl();
  const dispatch = useDispatch();
  const [newData, setNewData] = useState({
    upTitle: '',
    title: '',
    content: ''
  });

    /**
   * Function that mask phone number
   * @param phoneValue 
   */
  const maskNumber = (phoneValue: any) => {
    const phone = phoneValue?.toString();
    const formatPhone = `${phone?.substring(0, 2)} ${phone?.substring(2, 6)} ${phone?.substring(6, 10)} `.trim();
    return formatPhone.replace(formatPhone.substring(0, 7), '** ****');
  }

  useEffect(() => {
    if (phoneSave && onSetPhone) {
      onSetPhone(phoneSave);
    }
    const data = {
      upTitle: Internationalization.formatMessage({
        id: `registerOtp.${step}.upTitle`,
      }),
      title: Internationalization.formatMessage({
        id: `registerOtp.${step}.title`,
      }),
      content: step === 'validate' ? `${Internationalization.formatMessage({
        id: `registerOtp.${step}.content`,
      })} ${maskNumber(phoneSave)}` :
        Internationalization.formatMessage({
          id: `registerOtp.${step}.content`,
        }),
    }
    setNewData(data);
  }, [phoneSave,step]);

  useEffect(() => {
    if (flagFlowComplete && onComplete) {
      onComplete(flagFlowComplete);
    }
  }, [flagFlowComplete]);

  /**
   * Function when submitPhoneNumber
   *
   * @param {string} value
   */
  const getOtp = (value: string) => {
    dispatch({
      type: "BLOCK_NAME_CAMEL_CASE/submitPhoneNumber",
      payload: {
        flowId: 1234,
        phone: Number(value),
      },
    });
  };

  /**
   * Function retry process
   *
   * @param {string} value
   */
  const retryOpt = () => {
    dispatch({
      type: "BLOCK_NAME_CAMEL_CASE/setStep",
      payload: "get",
    });
  };

  /**
   * Function when validate otp
   *
   * @param {string} value
   */
  const validateOtp = (value: string) => {
    dispatch({
      type: "BLOCK_NAME_CAMEL_CASE/validateOtp",
      payload: {
        flowId: 1234,
        phone: Number(value),
      },
    });
  };

  return (
    <>
      <Title data={newData} />
      {step === StepEnum.getOtp ? (
        <GetOtp action={getOtp} />
      ) : (
        <ValidateOtp
          retry={retryOpt}
          action={validateOtp}
          timeCount={60}
          messageTimer={Internationalization.formatMessage({
            id: "BLOCK_NAME.validate.message.timer",
          })}
        />
      )}
    </>
  );
};

export default connect(({ BLOCK_NAME_CAMEL_CASE }: { BLOCK_NAME_CAMEL_CASE: StateModel }) => ({
  step: BLOCK_NAME_CAMEL_CASE.step,
  status: BLOCK_NAME_CAMEL_CASE.status,
  flagFlowComplete: BLOCK_NAME_CAMEL_CASE.flowComplete,
}))(PAGE_NAME_UPPER_CAMEL_CASE);

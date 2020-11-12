import React from "react";
import { useDispatch, connect, useIntl } from "umi";
import { dataFixture, dataFonts, setVal } from './fixture/dataFixture';
import { ComponentProps, Fonts } from './interfaces/anotherTime.interface';
import AnotherTimeBlock from './blocks/another-time/src';
import { StateModel } from './models/model';
import { OptionEnum } from './enums/option.enum';

interface PAGE_NAME_UPPER_CAMEL_CASEProps {
  iconTitle?: string
  color?: string,
  font?: Fonts,
  onCloseModal?: Function

  option: StateModel['option'];
  flowComplete: StateModel['flowComplete'];
}

/**
 * Pro block for another time screen
 * @param props 
 */
const PAGE_NAME_UPPER_CAMEL_CASE: React.FC<PAGE_NAME_UPPER_CAMEL_CASEProps> = ({ iconTitle=dataFixture.iconHeader, color = 'purple', font = dataFonts, onCloseModal = setVal, option }) => {
  const intl = useIntl();
  const dispatch = useDispatch();

  console.log(option);

  const setStep = (val: any) => {
    dispatch({
      type: "BLOCK_NAME_CAMEL_CASE/setOption",
      payload: {
        option: val
      },
    }),
      dispatch({
        type: "BLOCK_NAME_CAMEL_CASE/setFlowStatus",
        payload: true
      })

  }
  const propsAnotherTime: ComponentProps = {
    iconTitle,
    title: `¡${intl.formatMessage({ id: 'BLOCK_NAME.title' })}!`,
    subtitle: `${intl.formatMessage({ id: 'BLOCK_NAME.subtitle' })}`,
    textContent: `${intl.formatMessage({ id: 'BLOCK_NAME.question' })}`,
    optionsButton: {
      btn1: {
        title: `${intl.formatMessage({ id: 'BLOCK_NAME.btn1' })}`,
        type: 'button',
        action: () => { setStep(OptionEnum.yesOption) }
      },
      btn2: {
        title: `${intl.formatMessage({ id: 'BLOCK_NAME.btn2' })}`,
        color,
        type: 'button',
        action: () => { setStep(OptionEnum.continueRequest) }
      }
    },
    fontFamily: font,
    onClose: onCloseModal
  }

  return (
    <AnotherTimeBlock {...propsAnotherTime} />
  );
};

export default connect(({ BLOCK_NAME_CAMEL_CASE }: { BLOCK_NAME_CAMEL_CASE: StateModel }) => ({
  option: BLOCK_NAME_CAMEL_CASE.option,
  flowComplete: BLOCK_NAME_CAMEL_CASE.flowComplete,
}))(PAGE_NAME_UPPER_CAMEL_CASE);

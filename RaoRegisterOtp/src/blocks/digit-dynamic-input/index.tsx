import React, { useState, useEffect } from "react";
import { Input } from "antd";
import styles from "./index.less";

/**
 * props DigitDynamicInputProps
 *
 * @interface DigitDynamicInputProps
 */
interface DigitDynamicInputProps {
  lengthOtp?: number;
  action: Function;
}

/**
 * Block DigitDynamicInput 
 *
 * @param {DigitDynamicInputProps} { lengthOtp = 4, action }
 * 
 */
const DigitDynamicInput: React.FC<DigitDynamicInputProps> = ({ lengthOtp = 4, action }) => {
  const [number, setNumber] = useState('');


  useEffect(() => {
    const inputs = document.getElementById("inputsDigits")?.querySelectorAll("input");
    if (number.length === lengthOtp && inputs !== undefined) {
      inputs[number.length - 1].focus();
      
      // execute action 

      action(number);
    } else if (inputs !== undefined) {
      inputs[number.length].focus();
    }
  }, [number]);

  const onChangeFunction = (e: any) => {
    const { value } = e.target;
    const reg = /^-?\d*(\.\d*)?$/;

    if (value.match(reg)) {
      setNumber(number + e.target.value);
    }
  };

  const KeyPressed = (e: any) => {
    const { keyCode } = e;

    if (keyCode === 8) {
      setNumber(number.slice(0, -1));
    }
  };

  const generateInput = (numberFields: number) => {
    const element = [];
    for (let index = 0; index < numberFields; index+= 1) {
      element.push(
        <Input
          key={`digit${index.toString()}`}
          id={index.toString()}
          onKeyDown={KeyPressed}
          onChange={onChangeFunction}
          className={styles.input}
          value={number[index]}
          type="text"
          maxLength={1}
        />
      );
    }
    return element;
  };

  return (
    <>
     
        <div className={styles.subcontainer} id='inputsDigits' >{generateInput(lengthOtp)}</div>
    </>
  );
};

export default DigitDynamicInput;

import React from 'react'
import { Checkbox } from 'antd';
import './index.less'

interface CheckBoxProps {
    options?: string[],
    setCheck?: Function,
    defValue?: string[]
}

const dataDefault = ['Option1', 'Option2']
export const CheckBoxOptions: React.FC<CheckBoxProps> = ({ options = dataDefault, setCheck=()=>{}, defValue }) => {
    const onChange = (checkedValues: any) => {
        setCheck(checkedValues);
    }
    return (
        <Checkbox.Group
            options={options}
            value={defValue}
            onChange={onChange} />
    )

}

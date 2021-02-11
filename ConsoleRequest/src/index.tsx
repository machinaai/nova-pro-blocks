import { Col, Row } from 'antd'
import React, { useEffect, useState } from 'react';
import { connect, useDispatch, useIntl } from 'umi';
import RadioButtonBlock from './components/radio-button/index';
import InputSearchBlock from './components/input-search-block/index';
import ConsoleRealTimeTable from './pro-blocks/console-real-time-table/index';
import { StateModel } from './pro-blocks/console-real-time-table/models/model'
import styles from './index.less';

const PAGE_NAME_UPPER_CAMEL_CASE: React.FC = () => {
    const intl = useIntl();
    const dispatch = useDispatch();
    const [valRadioBtn, setValRadioBtn] = useState('all');
    const [valInput, setValInput] = useState('')

    const getValRadio = (val: any) => {
        setValRadioBtn(val)
    }
    const getValInput = (val: any) => {
        setValInput(val);
    }

    useEffect(() => {
        dispatch({
            type: 'realTimeTable/setRoutePath',
            payload: '/clientdetail'
        });
    }, [valRadioBtn, valInput]);


    const propsRadioBtn = {
        dataOptions: [
            {
                key: '1',
                label: `${intl.formatMessage({ id: 'BLOCK_NAME.RadioBtnOp1' })}`,
                value: 'all'
            },
            {
                key: '2',
                label: `${intl.formatMessage({ id: 'BLOCK_NAME.RadioBtnOp2' })}`,
                value: 'documentation'
            },
            {
                key: '3',
                label: `${intl.formatMessage({ id: 'BLOCK_NAME.RadioBtnOp3' })}`,
                value: 'validation'
            },
            {
                key: '4',
                label: `${intl.formatMessage({ id: 'BLOCK_NAME.RadioBtnOp4' })}`,
                value: 'benefit'
            },
        ],
        action: getValRadio,
    }

    const propsInput = {
        placeholderVal: `${intl.formatMessage({ id: 'BLOCK_NAME.InputTxt' })}`,
        actionInput: getValInput
    }

    const propsRealTime = {
        valInputSearch: valInput,
        valueFilter: valRadioBtn,
    }

    return (
        <div>
            <Row className={styles.header}>
                <Col xs={24} xl={4}>
                    <p className={styles.title}>{`${intl.formatMessage({ id: 'BLOCK_NAME.titleRequest' })}`}</p>
                </Col>
                <Col xs={24} xl={8} className={styles.radioBtn}>
                    <RadioButtonBlock {...propsRadioBtn} />
                </Col>
                <Col xs={24} xl={10}>
                    <InputSearchBlock {...propsInput} />
                </Col>
            </Row>
            <ConsoleRealTimeTable {...propsRealTime} />
        </div>
    )
}
export default connect(({ realTimeTable }: { realTimeTable: StateModel }) => ({
}))(PAGE_NAME_UPPER_CAMEL_CASE);
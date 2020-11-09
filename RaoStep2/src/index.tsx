import React, { useEffect, useState } from 'react';
import { useDispatch, connect, useIntl } from 'umi';
import OptionsBlock from './blocks/m-d-block-options/src/index';
import { AccountActivity } from './components/accoun-acctivity';
import { StepEnum } from './enums/step.enum';
import { dataFixture, dataFontFixture } from './fixture/dataFixture';
import { Fonts, PropsCheck } from './interfaces/checkOptions.interface';
import { ElementProps } from './interfaces/modal.interface';
import { StateModel } from './models/model';
import styles from './index.less';
import { Color } from 'chalk';

interface PAGE_NAME_UPPER_CAMEL_CASEProps {
    imgOptions?: string[];
    fontFamily?: Fonts;
    colorProblock?:string;

    numberPhone?: StateModel['numberPhone'];
    details: StateModel['details'];
    flowComplete: StateModel['flowComplete'];
    onComplete?: Function;
    onReturn?: Function;
}
const PAGE_NAME_UPPER_CAMEL_CASE: React.FC<PAGE_NAME_UPPER_CAMEL_CASEProps> = (
    {
        imgOptions = dataFixture,
        fontFamily = dataFontFixture,
        colorProblock = 'purple',
        details,
        numberPhone = '55 2039 3401',
        flowComplete,
        onComplete,
        onReturn
    }) => {
    const intl = useIntl();
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);
    const [showDrawer, setShowDrawer] = useState(false);

    const [onClose, setOnClose] = useState(false);
    const [flow, setFlow] = useState('');

    const setStep = (stepVal: any) => {
        dispatch({
            type: "BLOCK_NAME_CAMEL_CASE/setDetails",
            payload: {
                flow: flow,
                step: stepVal,
                numberPhone
            },
        }),
            dispatch({
                type: "BLOCK_NAME_CAMEL_CASE/setFlowStatus",
                payload: true
            })
    }

    const setVal = () => {
        setOnClose(false)
    }

    const optionsCheck: PropsCheck = {
        optionsCheck: [`${intl.formatMessage({ id: 'BLOCK_NAME.optionCheck1' })} $18,000`, `${intl.formatMessage({ id: 'BLOCK_NAME.optionCheck2' })} $18,000`],
        setFlow,
        fontFamily: {
            fontTitle: dataFontFixture.fontTitle,
            fontSubtitle: dataFontFixture.fontSubtitle,
            fontTextTerms: dataFontFixture.fontTextTerms
        },
        setOnClose,
        setShowModal,
        setShowDrawer
    }
    const validateElement = () => {
        setShowModal(true);
        setShowDrawer(true);
    }
    useEffect(() => {
        if (flow === 'n2') {
            validateElement()
        } else if (flow === 'n4') {
            dispatch({
                type: "BLOCK_NAME_CAMEL_CASE/setDetails",
                payload: {
                    flow,
                    step: StepEnum.verificarIdentidad,
                    numberPhone
                },
            });
            dispatch({
                type: "BLOCK_NAME_CAMEL_CASE/setFlowStatus",
                payload: true
            })
        }
    }, [onClose, flow]);

    useEffect(() => {
        if (flowComplete && onComplete) {
            onComplete(true)
        }
        if (!flowComplete && onReturn) {
            onReturn(true)
        }
        return () => {
            dispatch({
                type: "BLOCK_NAME_CAMEL_CASE/setFlowStatus",
                payload: false
            })

        }
    }, [flowComplete]);

    const options = {
        title: `${intl.formatMessage({ id: 'BLOCK_NAME.modalTitle' })}`,
        subtitle: `${intl.formatMessage({ id: 'BLOCK_NAME.modalSubtitle' })}`,
        options: [
            {
                icon: imgOptions[0],
                valOption: `${intl.formatMessage({ id: 'BLOCK_NAME.modalOption1' })}`,
                action: () => { setStep(StepEnum.scanDoc) },
                color:colorProblock
            },
            {
                icon: imgOptions[1],
                valOption: `${intl.formatMessage({ id: 'BLOCK_NAME.modalOption2' })}`,
                action: () => { setStep(StepEnum.uploadDoc) },
                color:colorProblock
            },
            {
                icon: imgOptions[2],
                valOption: `${intl.formatMessage({ id: 'BLOCK_NAME.modalOption3' })}`,
                action: () => { setStep(StepEnum.loadData) },
                color:colorProblock
            },
        ]
    }
    const optionsElement: ElementProps = {
        ...options,
        fontFamily,
        onlyModal: showModal,
        onlyDrawer: showDrawer,
        onClose: setVal
    }

    return (
        <div className={styles.container}>
            <AccountActivity {...optionsCheck} />
            <OptionsBlock {...optionsElement} />
        </div>
    )
}
export default connect(({ BLOCK_NAME_CAMEL_CASE }: { BLOCK_NAME_CAMEL_CASE: StateModel }) => ({
    details: BLOCK_NAME_CAMEL_CASE.details,
    numberPhone: BLOCK_NAME_CAMEL_CASE.numberPhone,
    flowComplete: BLOCK_NAME_CAMEL_CASE.flowComplete,
}))(PAGE_NAME_UPPER_CAMEL_CASE);

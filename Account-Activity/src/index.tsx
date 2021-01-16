import React, { useEffect, useState } from 'react';
import { useDispatch, connect, useIntl } from 'umi';
import OptionsBlock from './blocks/modal-drawer-options/index';
import { AccountActivity } from './components/accoun-acctivity';
import { StepEnum } from './enums/step.enum';
import { dataFixture, dataFontFixture } from './fixture/dataFixture';
import { Fonts, PropsCheck } from './interfaces/checkOptions.interface';
import { ElementProps } from './interfaces/modal.interface';
import { StateModel } from './models/model';
import styles from './index.less';

interface PAGE_NAME_UPPER_CAMEL_CASEProps {
    imgOptions?: string[];
    fontFamily?: Fonts;
    colorProblock?:string;

    numberPhone?: StateModel['numberPhone'];
    details: StateModel['details'];
    flowComplete: StateModel['flowComplete'];
    onComplete?: Function;
    onReturn?: Function;
    setDetail: Function;
}
const PAGE_NAME_UPPER_CAMEL_CASE: React.FC<PAGE_NAME_UPPER_CAMEL_CASEProps> = (
    {
        imgOptions = dataFixture,
        fontFamily = dataFontFixture,
        colorProblock = '#0071ce',
        numberPhone = '55 2039 3401',
        flowComplete,
        onComplete,
        onReturn,
        setDetail
    }) => {
    const intl = useIntl();
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);
    const [showDrawer, setShowDrawer] = useState(false);

    const [onClose, setOnClose] = useState(false);
    const [flow, setFlow] = useState('');

    /**
     * Method to get the value of the selected flow and save the value in a reducer.
     * @param stepVal about the selected flow
     */
    const setStep = (stepVal: any) => {
        dispatch({
            type: "BLOCK_NAME_CAMEL_CASE/setDetails",
            payload: {
                flow,
                step: stepVal,
                numberPhone
            },
        });
            dispatch({
                type: "BLOCK_NAME_CAMEL_CASE/setFlowStatus",
                payload: true
            })

            setDetail({
                flow,
                step: stepVal,
                numberPhone
            });            
    }

    /**
     * Methos that change the value when detecting the closure of the modal or drawer.
     */
    const setVal = () => {
        setOnClose(false)
    }

    /**
     * Props for the account activity component
     */
    const optionsCheck: PropsCheck = {
        optionsCheck: [`${intl.formatMessage({ id:'BLOCK_NAME.optionCheck1' })} $18,000`, `${intl.formatMessage({ id:'BLOCK_NAME.optionCheck2' })} $18,000`],
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
    /**
     * Method to change the value to show the modal or drawer
     */
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
            });
        }
    }, [onClose, flow]);

    /**
     * useEffect to change the value when the flow is over.
     */
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
        title: `${intl.formatMessage({ id:'BLOCK_NAME.modalTitle' })}`,
        subtitle: `${intl.formatMessage({ id:'BLOCK_NAME.modalSubtitle' })}`,
        options: [
            {
                icon: imgOptions[0],
                valOption: `${intl.formatMessage({ id:'BLOCK_NAME.modalOption1' })}`,
                action: () => { setStep(StepEnum.scanDoc) },
                color:colorProblock
            },
            {
                icon: imgOptions[1],
                valOption: `${intl.formatMessage({ id:'BLOCK_NAME.modalOption2' })}`,
                action: () => { setStep(StepEnum.uploadDoc) },
                color:colorProblock
            },
            {
                icon: imgOptions[2],
                valOption: `${intl.formatMessage({ id:'BLOCK_NAME.modalOption3' })}`,
                action: () => { setStep(StepEnum.loadData) },
                color:colorProblock
            },
        ]
    }

    /**
     * Props for the OptionsBlock 
     */
    const optionsElement: ElementProps = {
        ...options,
        backColorOp :'#e1ffff',
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

import React, { useEffect, useState } from 'react';
import { useDispatch, connect, useIntl } from 'umi';
import OptionsBlock from './blocks/m-d-block-options/src/index';
import { UpdateAddress } from './components/update-address';
import { StepEnum } from './enums/step.enum';
import { dataFixture, dataFontFixture } from './fixture/dataFixture';
import { Fonts, PropsAccount } from './interfaces/optionsAccount.interface';
import { ElementProps } from './interfaces/modal.interface';
import { StateModel } from './models/model';
import styles from './index.less';

interface PAGE_NAME_UPPER_CAMEL_CASEProps {
    imgOptions?: string[];
    fontFamily?: Fonts;
    colorProblock?: string;

    step: StateModel['step'];
    flowComplete: StateModel['flowComplete'];
    onComplete?: Function;
    onReturn?: Function;
}
const PAGE_NAME_UPPER_CAMEL_CASE: React.FC<PAGE_NAME_UPPER_CAMEL_CASEProps> = (
    {
        imgOptions = dataFixture,
        fontFamily = dataFontFixture,
        colorProblock = 'purple',
        flowComplete,
        onComplete,
        onReturn
    }) => {
    const intl = useIntl();
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);
    const [showDrawer, setShowDrawer] = useState(false);

    const setVal = () => {
        setShowModal(false);
        setShowDrawer(false);
    }

    const setStep = (stepVal: any) => {
        dispatch({
            type: "BLOCK_NAME_CAMEL_CASE/setStep",
            payload: stepVal,
        }),
            dispatch({
                type: "BLOCK_NAME_CAMEL_CASE/setFlowStatus",
                payload: stepVal !== 'capture_later' ? true : false
            })
    }

    const optionsAccountAct: PropsAccount = {
        fontFamily: {
            fontHeader: dataFontFixture.fontHeader,
            fontTitle: dataFontFixture.fontTitle,
            fontSubtitle: dataFontFixture.fontSubtitle,
            fontBody: dataFontFixture.fontBody,
            fontB_ul: dataFontFixture.fontB_ul,
            fontFooter: dataFontFixture.fontFooter
        },
        colorBtn: colorProblock,
        actionBtn: () => { setStep('capture_later') },
        setShowModal,
        setShowDrawer,
    }

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
                color: colorProblock
            },
            {
                icon: imgOptions[1],
                valOption: `${intl.formatMessage({ id: 'BLOCK_NAME.modalOption2' })}`,
                action: () => { setStep(StepEnum.uploadDoc) },
                color: colorProblock
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
            <UpdateAddress {...optionsAccountAct} />
            <OptionsBlock {...optionsElement} />
        </div>
    )
}
export default connect(({ BLOCK_NAME_CAMEL_CASE }: { BLOCK_NAME_CAMEL_CASE: StateModel }) => ({
    step: BLOCK_NAME_CAMEL_CASE.step,
    flowComplete: BLOCK_NAME_CAMEL_CASE.flowComplete,
}))(PAGE_NAME_UPPER_CAMEL_CASE);

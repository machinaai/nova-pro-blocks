import React, { useEffect, useState } from 'react';
import { useIntl } from 'umi';
import ConfigParamsBlock from '../../config-params-block/src/index';
import SliderBlock from '../../slider-block/src';
import ConectionsBlock from '../../connections-block/src';

interface Props {
    font?: {
        fontTitle: string
        fontContent: string
    }
}

export const ConfigParamsContainer: React.FC<Props> = ({font}) => {
    const intl = useIntl();

    const propsConnectionsBlock = {
        data: [
            {
                title: `${intl.formatMessage({ id: 'BLOCK_NAME.connection.title1' })}`,
                content: `${intl.formatMessage({ id: 'BLOCK_NAME.connection.content1' })}`,
                radioOptions: {
                    val1: `${intl.formatMessage({ id: 'BLOCK_NAME.radioOp1' })}`,
                    val2: `${intl.formatMessage({ id: 'BLOCK_NAME.radioOp2' })}`
                }
            },
            {
                title: `${intl.formatMessage({ id: 'BLOCK_NAME.connection.title2' })}`,
                content: `${intl.formatMessage({ id: 'BLOCK_NAME.connection.content2' })}`,
                radioOptions: {
                    val1: `${intl.formatMessage({ id: 'BLOCK_NAME.radioOp1' })}`,
                    val2: `${intl.formatMessage({ id: 'BLOCK_NAME.radioOp2' })}`
                }
            }
        ],
        fontFam:font
    }

    const propsConfigParams = {
        data: {
            options: [
                {
                    title: `${intl.formatMessage({ id: 'BLOCK_NAME.title1' })}`,
                    cont1: {
                        title: `${intl.formatMessage({ id: 'BLOCK_NAME.op1.title1' })}`,
                        content: `${intl.formatMessage({ id: 'BLOCK_NAME.op1.content1' })}`,
                        sliderCont: <SliderBlock />
                    },
                    cont2: {
                        title: `${intl.formatMessage({ id: 'BLOCK_NAME.op1.title2' })}`,
                        content: `${intl.formatMessage({ id: 'BLOCK_NAME.op1.content2' })}`,
                        sliderCont: <SliderBlock />
                    }
                },
                {
                    title: `${intl.formatMessage({ id: 'BLOCK_NAME.title2' })}`,
                    cont1: {
                        title: `${intl.formatMessage({ id: 'BLOCK_NAME.op2.title1' })}`,
                        content: `${intl.formatMessage({ id: 'BLOCK_NAME.op2.content1' })}`,
                        sliderCont: <SliderBlock />
                    },
                    cont2: {
                        title: `${intl.formatMessage({ id: 'BLOCK_NAME.op2.title2' })}`,
                        content: `${intl.formatMessage({ id: 'BLOCK_NAME.op2.content2' })}`,
                        sliderCont: <SliderBlock />
                    }
                },
            ],
            option3: {
                title: `${intl.formatMessage({ id: 'BLOCK_NAME.title3' })}`,
                cont: <ConectionsBlock {...propsConnectionsBlock} />
            },
            option4: {
                title: `${intl.formatMessage({ id: 'BLOCK_NAME.title4' })}`,
                cont: {
                    title: `${intl.formatMessage({ id: 'BLOCK_NAME.op4.title' })}`,
                    content: `${intl.formatMessage({ id: 'BLOCK_NAME.op4.content' })}`,
                    sliderCont: <SliderBlock />
                },
            }
        },
        fontFam:font
    }

    return (
        <>
            <ConfigParamsBlock {...propsConfigParams} />
        </>
    )
}

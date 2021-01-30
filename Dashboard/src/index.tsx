import { Col, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import { connect, useDispatch, useIntl } from 'umi';
import RadioButtonBlock from './components/radio-button/index';
import RangePickerBlock from './components/rangePicker/index';
import SelectOptionsBlock from './components/select-option/index';
import ConfigDashboardBlock from './components/configure-dashboard/index';
import TotalRequest from './pro-blocks/total-request/src/index';
import ConsoleUsedChannels from './pro-blocks/used-channels/src/index';
import RequestByStages from './pro-blocks/request-by-stages/src/index';
import ConsoleUsedDevices from './pro-blocks/used-devices/src/index';
import { StateModel } from './pro-blocks/total-request/src/models/model';
import { StateModelChannels } from './pro-blocks/used-channels/src/models/model';
import { StateModelStage } from './pro-blocks/request-by-stages/src/models/model';
import { StateModelDevices } from './pro-blocks/used-devices/src/models/model';
import logoDispositivo from './assets/ico-dispositivo.svg';
import logoCierre from './assets/ico-cierre.svg';


import { dateRadioOptions } from './helper/getDate';
import download from './assets/ico-download.svg'
import styles from './index.less';


const PAGE_NAME_UPPER_CAMEL_CASE: React.FC = () => {
    const intl = useIntl();
    const dispatch = useDispatch();

    const [valCombo, setValCombo] = useState('');
    const [dateRequest, setDateRequest] = useState({ startDate: '', endDate: '' });

    const [valComboFunel, setValComboFunel] = useState('');
    const [dateFunel, setDateFunel] = useState({ startDate: '', endDate: '' });

    const getValRadio = (val: any) => {
        setDateRequest(dateRadioOptions(val));
    }

    const getDateRequest = (val: any) => {
        setDateRequest(val);
    }

    const getValCombo = (val: any) => {
        if (val === 'Todos' || val === 'All') {
            setValCombo('')
        } else if (val === 'Mobile') {
            setValCombo('movil')
        } else {
            setValCombo(val.toLowerCase())
        }
    }


    const getValRadioFunel = (val: any) => {
        setDateFunel(dateRadioOptions(val));
    }

    const getDateFunel = (val: any) => {
        setDateFunel(val);
    }

    const getValComboFunel = (val: any) => {
        if (val === 'Todos' || val === 'All') {
            setValComboFunel('')
        } else if (val === 'Mobile') {
            setValComboFunel('movil')
        } else {
            setValComboFunel(val.toLowerCase())
        }
    }

    useEffect(() => {
        const { startDate, endDate } = dateRequest;
        dispatch({
            type: 'totalRequestModel/setDateRequest',
            payload: {
                userType: valCombo,
                startDate,
                endDate
            },
        });

        dispatch({
            type: 'Closing_Percentage/setDateRequest',
            payload: {
                userType: valCombo,
                startDate,
                endDate
            },
        });

        dispatch({
            type: 'usedDevices/setDateRequest',
            payload: {
                userType: valCombo,
                startDate,
                endDate
            },
        });

        dispatch({
            type: 'Used_Channels/setDateRequest',
            payload: {
                userType: valCombo,
                startDate,
                endDate
            },
        });

    }, [dateRequest, valCombo]);


    useEffect(() => {
        const { startDate, endDate } = dateFunel;
        dispatch({
            type: 'RequestByStages/setDateRequest',
            payload: {
                userType: valComboFunel,
                startDate,
                endDate
            },
        });
    }, [dateFunel, valComboFunel]);

    const propsRadio = {
        dataOptions: [
            {
                key: '1',
                label: `${intl.formatMessage({ id: 'BLOCK_NAME.RadioBtn-op1' })}`,
                value: 'day'
            },
            {
                key: '2',
                label: `${intl.formatMessage({ id: 'BLOCK_NAME.RadioBtn-op2' })}`,
                value: 'month'
            },
            {
                key: '3',
                label: `${intl.formatMessage({ id: 'BLOCK_NAME.RadioBtn-op3' })}`,
                value: 'year'
            },
        ],
    }

    const propsCombo = {
        dataOptions: [
            {
                op: 1,
                nameOp: `${intl.formatMessage({ id: 'BLOCK_NAME.Combo-op1' })}`,
            },
            {
                op: 2,
                nameOp: `${intl.formatMessage({ id: 'BLOCK_NAME.Combo-op2' })}`,
            },
            {
                op: 3,
                nameOp: `${intl.formatMessage({ id: 'BLOCK_NAME.Combo-op3' })}`,
            },
            {
                op: 4,
                nameOp: `${intl.formatMessage({ id: 'BLOCK_NAME.Combo-op4' })}`,
            },

        ],
        titleSelect: {
            title: `${intl.formatMessage({ id: 'BLOCK_NAME.titleCombo' })}`,
            font: 'Signika-Regular_Regular'
        }
    }

    const propsDateReq = {
        action: getDateRequest
    }
    const propsRadioRequest = { ...propsRadio, action: getValRadio }
    const propsComboRequest = { ...propsCombo, action: getValCombo }

    const propsDateFunel = {
        action: getDateFunel
    }
    const propsRadioFunel = { ...propsRadio, action: getValRadioFunel }
    const propsComboFunel = { ...propsCombo, action: getValComboFunel }

    const propsUsedDevices = {
        legends: {
            title: intl.formatMessage({ id: 'BLOCK_NAME.titleUsedDevices' }),
            label1: intl.formatMessage({ id: 'BLOCK_NAME.label1UsedDevices' }),
            label2: intl.formatMessage({ id: 'BLOCK_NAME.label2UsedDevices' }),
        },
        enviromentEndPoints: '/services/flowconsole/api/dashboard/_search/request-devices',
        imageCard: logoDispositivo
    }

    const propsClosingPercentage = {
        legends: {
            title: intl.formatMessage({ id: 'BLOCK_NAME.closingPer_title' }),
            label1: intl.formatMessage({ id: 'BLOCK_NAME.closingPer_label1' }),
            label2: intl.formatMessage({ id: 'BLOCK_NAME.closingPer_label2' }),
        },
        enviromentEndPoints: '/services/flowconsole/api/dashboard/_search/request-close',
        imageCard: logoCierre,
        percentage: true
    }

    return (
        <Row >
            <Col className={styles.container} span={24}>
                <Row gutter={{ xs: 16, sm: 16, md: 24, lg: 32 }}>
                    <Col xs={24} md={3} lg={3} >
                        <p className={styles.title}>{intl.formatMessage({ id: 'BLOCK_NAME.titleRequest' })}</p>
                    </Col>
                    <Col xs={24} md={8} lg={6} className={styles.header}>
                        <RadioButtonBlock {...propsRadioRequest} />
                    </Col>
                    <Col xs={24} md={6} lg={6} className={styles.header}>
                        <RangePickerBlock {...propsDateReq} />
                    </Col>
                    <Col xs={24} lg={6} className={styles.header}>
                        <SelectOptionsBlock {...propsComboRequest} />
                    </Col>
                    <Col xs={24} lg={3} className={styles.header}>
                        <div className={styles.registry}>
                            <img src={download} alt="download ico" />
                            <p>{intl.formatMessage({ id: 'BLOCK_NAME.titleReport' })}</p>
                        </div>
                    </Col>
                </Row>
            </Col>
            <Col span={24} className={styles.container}>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col xs={24} xl={8}>
                        <TotalRequest />
                    </Col>
                    <Col xs={24} xl={8}>
                        <div className={styles.percentage}>
                            <ConsoleUsedDevices {...propsClosingPercentage} />
                        </div>
                        <div>
                            <ConsoleUsedDevices {...propsUsedDevices} />
                        </div>
                    </Col>
                    <Col xs={24} xl={8}>
                        <ConsoleUsedChannels />
                    </Col>
                </Row>
            </Col>
            <Col className={styles.container} span={24}>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col xs={24} md={3} lg={3}>
                        <p className={styles.title}>{intl.formatMessage({ id: 'BLOCK_NAME.titleFunel' })}</p>
                    </Col>
                    <Col xs={24} md={8} lg={6} className={styles.header}>
                        <RadioButtonBlock {...propsRadioFunel} />
                    </Col>
                    <Col xs={24} md={6} lg={6} className={styles.header}>
                        <RangePickerBlock {...propsDateFunel} />
                    </Col>
                    <Col xs={24} lg={6} className={styles.header}>
                        <SelectOptionsBlock {...propsComboFunel} />
                    </Col>
                    <Col xs={24} lg={3} className={styles.header}>
                        <div className={styles.registry}>
                            <img src={download} alt="download ico" />
                            <p>{intl.formatMessage({ id: 'BLOCK_NAME.titleReport' })}</p>
                        </div>
                    </Col>
                </Row>
            </Col>
            <Col span={24} className={styles.container}>
                <RequestByStages />
            </Col>
            <Col xs={24} xl={8}>
                <ConfigDashboardBlock title={intl.formatMessage({ id: 'BLOCK_NAME.configDashboard' })} />
            </Col>
        </Row>
    )
}
export default connect((
    {
        totalRequestModel,
        usedDevices,
        Used_Channels,
        RequestByStages
    }
        :
        {
            totalRequestModel: StateModel;
            usedDevices: StateModelDevices;
            Used_Channels: StateModelChannels;
            RequestByStages: StateModelStage
        }) => ({
        }))(PAGE_NAME_UPPER_CAMEL_CASE);

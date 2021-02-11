import { Tabs } from 'antd';
import React, { useEffect } from 'react';
import { connect, useDispatch, useHistory, useIntl } from 'umi';
import ConfigParams from './pro-blocks/parameter-configuration/index';
import ConsoleClientDetails from './pro-blocks/console-client-details/index'
import { StateModelClient } from './pro-blocks/console-client-details/models/model';
import styles from './index.less'

const PAGE_NAME_UPPER_CAMEL_CASE: React.FC = () => {
    const dispatch = useDispatch();
    const intl = useIntl();
    const { TabPane } = Tabs;

    const params = useHistory();
    const { search } = params.location;

    useEffect(() => {
        dispatch({
            type: 'clientDetails/setIdRequest',
            payload: Number(search.slice(4))
        });
        return () => {
            dispatch({
                type: 'clientDetails/setIdRequest',
                payload: null
            });
        }
    }, []);

    const callback = (key: any) => {
        console.log(key);
    }
    const propClientDetais = {
        pathBtnReturn: '/requests/:id'
    }
    return (
        <div className={styles.tabs}>
            <Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane tab={<p className={styles.titleTab}>{`${intl.formatMessage({ id: 'BLOCK_NAME.Title-tab1' })}`}</p>} key="1">
                    <ConsoleClientDetails {...propClientDetais} />
                </TabPane>
                <TabPane tab={<p className={styles.titleTab}>{`${intl.formatMessage({ id: 'BLOCK_NAME.Title-tab2' })}`}</p>} key="2">
                    <ConfigParams />
                </TabPane>
            </Tabs>
        </ div>
    )
}
export default connect(({ clientDetails }: { clientDetails: StateModelClient }) => ({
}))(PAGE_NAME_UPPER_CAMEL_CASE);


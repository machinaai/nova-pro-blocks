import { Tabs } from 'antd';
import React, { useEffect } from 'react';
import { connect, useDispatch, useHistory, useIntl } from 'umi';
import ConfigParams from './pro-blocks/parameter-configuration/src/index';
import ConsoleClientDetails from './pro-blocks/console-client-details/src/index'
import { StateModelClient } from './pro-blocks/console-client-details/src/models/model';
import styles from './index.less'

const DetailsClient: React.FC = () => {
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
                <TabPane tab={<p className={styles.titleTab}>{`${intl.formatMessage({ id: 'detailsClient.Title-tab1' })}`}</p>} key="1">
                    <ConsoleClientDetails {...propClientDetais} />
                </TabPane>
                <TabPane tab={<p className={styles.titleTab}>{`${intl.formatMessage({ id: 'detailsClient.Title-tab2' })}`}</p>} key="2">
                    <ConfigParams />
                </TabPane>
            </Tabs>
        </ div>
    )
}
export default connect(({ clientDetails }: { clientDetails: StateModelClient }) => ({
}))(DetailsClient);


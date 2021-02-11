import React, { useEffect } from 'react';
import { connect, useDispatch } from 'umi';
import ActiveCustomer from './pro-blocks/active-customer/index';
import {StateModelCustomers} from './pro-blocks/active-customer/models/model'

const PAGE_NAME_UPPER_CAMEL_CASE: React.FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({
            type: 'activeCustomer/setRoutePath',
            payload: '/clientdetail'
        });
    }, []);

    return (
        <div>
            <ActiveCustomer />
        </div>
    )
}
export default connect(({activeCustomer}:{activeCustomer: StateModelCustomers})=>({
    }))(PAGE_NAME_UPPER_CAMEL_CASE);

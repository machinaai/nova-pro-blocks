import React, { useEffect } from 'react';
import { connect, useDispatch } from 'umi';
import ActiveCustomer from './pro-blocks/active-customer/src/index';
import {StateModelCustomers} from './pro-blocks/active-customer/src/models/model'

const ActiveCustomerTemplate: React.FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({
            type: 'activeCustomer/setRoutePath',
            payload: '/client-detail'
        });
    }, []);

    return (
        <div>
            <ActiveCustomer />
        </div>
    )
}
export default connect(({activeCustomer}:{activeCustomer: StateModelCustomers})=>({
    }))(ActiveCustomerTemplate);

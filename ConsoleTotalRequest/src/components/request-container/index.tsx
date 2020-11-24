import React from 'react';
import { useIntl } from 'umi';
import { InfoCircleOutlined } from '@ant-design/icons';
import { PropsTotalReq } from '@/interfaces/totalReq.interface';
import { PropsComponent} from '@/interfaces/ProblockProps.interface';
import TotalRequestCard from '../../blocks/total-request/src/index';


export const RequestContainer: React.FC<PropsComponent> = ({
    requestOptions,
    fontFam ,
    icons,
    actionOpInfo
}) => {
    const intl = useIntl();

    const dataTotalReq: PropsTotalReq= {
        title: intl.formatMessage({ id: 'BLOCK_NAME.totalRequest_title' }),
        fontFam,
        imgTitle: icons?.iconTotalReq,
        totalRequest: requestOptions?.totalRequest === undefined ? 0 : requestOptions?.totalRequest,
        optionInfo: {
            tooltipTitle:intl.formatMessage({ id: 'BLOCK_NAME.titleTooltip' }),
            icon: <InfoCircleOutlined style={{ fontSize: '16px' }} />,
            action: actionOpInfo
        },
        subtitle: intl.formatMessage({ id: 'BLOCK_NAME.totalRequest_subtitle' }),
        options: [
            {
                nameOption: `${intl.formatMessage({ id: 'BLOCK_NAME.totalRequest_op1' })}`,
                totalRequest: requestOptions?.initiated === undefined ? 0 : requestOptions?.initiated,
                icon: icons?.iconOp1
            },
            {
                nameOption: intl.formatMessage({ id: 'BLOCK_NAME.totalRequest_op2' }),
                totalRequest: requestOptions?.inProccess === undefined ? 0 : requestOptions?.inProccess,
                icon: icons?.iconOp2
            },
            {
                nameOption: intl.formatMessage({ id: 'BLOCK_NAME.totalRequest_op3' }),
                totalRequest: requestOptions?.abandoned === undefined ? 0 : requestOptions?.abandoned,
                icon: icons?.iconOp3
            },
            {
                nameOption: intl.formatMessage({ id: 'BLOCK_NAME.totalRequest_op4' }),
                totalRequest: requestOptions?.finished === undefined ? 0 : requestOptions?.finished,
                icon: icons?.iconOp4
            }
        ]
    }
    return (
        <div>
            <TotalRequestCard {...dataTotalReq} />
        </div>
    )
}

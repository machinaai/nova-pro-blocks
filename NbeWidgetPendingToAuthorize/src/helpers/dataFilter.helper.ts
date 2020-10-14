
import { useIntl } from 'umi';
import { ArrayPendingToAuthorizeInterface } from '../interfaces/index';
import { DataInterface } from '../blocks/row-details/interfaces/rowDetailsProps.interface';
/**
 * dataFilter clean data section
 *
 * @param {ArrayPendingToAuthorizeInterface} data
 * @return {*}  {DataInterface[]}
 */
export const dataFilter = (data: ArrayPendingToAuthorizeInterface | undefined): DataInterface[] => {
    if (data) {

        const {PendingToAuthorize } = data;
        return [...PendingToAuthorize[0].transaction.map((section) => {
            return {
                titleSection: useIntl().formatMessage({id: `nbePendingToAuthorizeWidget.section.${section.transactionType}`}),
                quantity: section.quantity,
                action: () => {}
            }
        })] 
    }
    return [];

};

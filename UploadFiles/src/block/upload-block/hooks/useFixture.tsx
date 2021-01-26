import React,{Fragment} from 'react'
import { useIntl } from 'umi';
 
export const useFixture = () => {

    const internationalization = useIntl();

    return  {
            UploadFirstView : {
                firstHeaderTitle: internationalization.formatMessage({ id: `BLOCK_NAME.headerTitle`}),
                firstTitle: internationalization.formatMessage({ id: `BLOCK_NAME.firstTitle`}),
                firstSubtitle:  internationalization.formatMessage({ id: `BLOCK_NAME.firstSubtitle`}),
                detailsTitle:  internationalization.formatMessage({ id: `BLOCK_NAME.detailsTitle`}),
                detailsElement1:  internationalization.formatMessage({ id: `BLOCK_NAME.detailsElement1`}),
                detailsElement2:  internationalization.formatMessage({ id: `BLOCK_NAME.detailsElement2`}),
                bntUploadTitle :  internationalization.formatMessage({ id: `BLOCK_NAME.bntUploadTitle`}),
            },
            UploadSecondView : {
                secondHeaderTitle: internationalization.formatMessage({ id: `BLOCK_NAME.headerTitle`}),
                secondTitle: internationalization.formatMessage({ id: `BLOCK_NAME.secondTitle`}),
                secondSubtitle: internationalization.formatMessage({ id: `BLOCK_NAME.secondSubtitle`}),
                bntNextTitle : internationalization.formatMessage({ id: `BLOCK_NAME.bntNextTitle`}),
                linkTitle:internationalization.formatMessage({ id: `BLOCK_NAME.linkTitle`}),
            },
    }
}
 
export default useFixture;
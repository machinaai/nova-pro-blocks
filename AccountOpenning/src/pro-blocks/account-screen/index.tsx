import React from "react";
import { useDispatch, connect} from "umi";
import { AccountScreen } from './components/AccountScreen';
import { dataAccount, dataFonts } from './fixture/dataFixture';
import { Fonts, PropsAccount } from './interfaces/account-screen';
import { OptionEnum } from "./enums/option.enum";
import { StateModel } from './models/model';
import styles from './index.less';

interface PAGE_NAME_UPPER_CAMEL_CASEProps {
  logoDesk?: string;
  logoMob?: string;
  iconCircle?: string;
  imgContent?: string;
  imgAppStore?: string;
  actionAppStore?: Function,
  imgPlayStore?: string;
  actionPlayStore?: Function,
  actionWallet?: Function,
  fontFam?: Fonts;
  cardNumber?: StateModel['cardNumber'];
  nameUser?: StateModel['nameUser'];
  option?: StateModel['option'];
  flowComplete?: StateModel['flowComplete'];
  onPhoneUser?: any
}

/**
 * Pro block AccountScreen
 * @param props 
 */
const  PAGE_NAME_UPPER_CAMEL_CASE: React.FC<PAGE_NAME_UPPER_CAMEL_CASEProps> = (props) => {
  const {
    logoDesk = dataAccount.iconDesk,
    logoMob = dataAccount.iconMob,
    iconCircle = dataAccount.iconCircle,
    imgContent = dataAccount.imgRobot,
    imgAppStore = dataAccount.iconAppStore,
    imgPlayStore = dataAccount.iconPlayStore,
    fontFam = dataFonts,
    cardNumber = '4152 3131 2343 4574',
    nameUser = 'Alejandro ******* *******',
    onPhoneUser,
  } = props
  const dispatch = useDispatch();

  const setOption = (option: any) => {
    dispatch({
      type: "accountScreen/setOption",
      payload: option
    })
    dispatch({
      type: "accountScreen/setFlowStatus",
      payload: true
    })
  }
  const propAccount: PropsAccount = {
    nameUser,
    numberCard: cardNumber,
    actionBtn: () => { 
      setOption(OptionEnum.btnUnderstood) 

      const  objectTwilio = {
        to: `whatsapp:+521${onPhoneUser}`,
        from: 'whatsapp:+14155238886',
        body: 'Notificacion',
        name: nameUser,
      };
      dispatch({
        type: 'accountScreen/twilioService',
        payload: objectTwilio,
      });
    },
    actionAppStore: () => { setOption(OptionEnum.appStore) },
    actionPlayStore: () => { setOption(OptionEnum.playStore) },
    actionWallet: () => { setOption(OptionEnum.wallet) },
    font: fontFam,
    logoDesk,
    logoMob,
    imageRobot: imgContent,
    imgAppStore,
    imgPlayStore,
    iconCircle
  }
  return (
    <>
    <AccountScreen {...propAccount} />
    </>
  );
};

export default connect(({ accountScreen }: { accountScreen: StateModel }) => ({
  cardNumber: accountScreen.cardNumber,
  nameUser: accountScreen.nameUser,
  option: accountScreen.option,
  flowComplete: accountScreen.flowComplete,
}))( PAGE_NAME_UPPER_CAMEL_CASE)

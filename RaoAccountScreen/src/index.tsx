import React from "react";
import { useDispatch, connect, StateModel } from "umi";
import { AccountScreen } from './components/AccountScreen';
import { dataAccount, dataFonts } from './fixture/dataFixture';
import { Fonts, PropsAccount } from './interfaces/account-screen';
import { OptionEnum } from "./enums/option.enum";
import styles from './index.less';

interface PAGE_NAME_UPPER_CAMEL_CASEProps {
  logoDesk?: string;
  logoMob?: string;
  iconCircle?: string;
  imgContent?: string;
  imgAppStore?: string;
  actionAppStore?: Function | any,
  imgPlayStore?: string;
  actionPlayStore?: Function | any,
  actionWallet?: Function | any,
  fontFam?: Fonts;

  cardNumber?: StateModel['cardNumber'];
  nameUser?: StateModel['nameUser'];
  option?: StateModel['option'];
  flowComplete?: StateModel['flowComplete'];
}

/**
 * Pro block AccountScreen
 * @param props 
 */
const PAGE_NAME_UPPER_CAMEL_CASE: React.FC<PAGE_NAME_UPPER_CAMEL_CASEProps> = (props) => {
  const {
    logoDesk = dataAccount.iconDesk,
    logoMob = dataAccount.iconMob,
    iconCircle = dataAccount.iconCircle,
    imgContent = dataAccount.imgRobot,
    imgAppStore = dataAccount.iconAppStore,
    imgPlayStore = dataAccount.iconPlayStore,
    fontFam = dataFonts,
    cardNumber = '4152 3131 2343 4574',
    nameUser = 'Alejandro'
  } = props
  const dispatch = useDispatch();

  const setOption = (option: any) => {
    console.log(option);
    dispatch({
      type: "BLOCK_NAME_CAMEL_CASE/setOption",
      payload: option
    })
    dispatch({
      type: "BLOCK_NAME_CAMEL_CASE/setFlowStatus",
      payload: true
    })
  }
  const propAccount: PropsAccount = {
    nameUser,
    numberCard: cardNumber,
    actionBtn: () => { setOption(OptionEnum.btnUnderstood) },
    actionAppStore: () => { setOption(OptionEnum.appStore) },
    actionPlayStore: () => { setOption(OptionEnum.playStore) },
    actionWallet: () => { setOption(OptionEnum.wallet) },
    font: fontFam,
    logoDesk,
    logoMob,
    imageRobot: imgContent,
    imgAppStore,
    imgPlayStore
  }
  return (
    <div className={`${styles.withBg}`} style={{ backgroundImage: `url(${iconCircle})` }}>
      <div className={`${styles.container}`} >
        <div className={`${styles.row}`}>
          <div className={`${styles.features}`}>
            <AccountScreen {...propAccount} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(({ BLOCK_NAME_CAMEL_CASE }: { BLOCK_NAME_CAMEL_CASE: StateModel }) => ({
  cardNumber: BLOCK_NAME_CAMEL_CASE.cardNumber,
  nameUser: BLOCK_NAME_CAMEL_CASE.nameUser,
  option: BLOCK_NAME_CAMEL_CASE.option,
  flowComplete: BLOCK_NAME_CAMEL_CASE.flowComplete,
}))(PAGE_NAME_UPPER_CAMEL_CASE)

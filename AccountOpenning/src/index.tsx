import React, { useEffect } from 'react';
import { Spin , Layout } from 'antd';
import { connect, Dispatch, useDispatch } from 'umi';

import { urlImages } from './assets/assets.fixture';

import HeaderBanjio from './blocks/Header';
import { StateType } from './models/model';
import styles from './style.less';
import ProgressDynamic from './blocks/ProgressDynamic';

import StepperDynamic from './blocks/stepper-dynamic';

// factory

import * as stepsViews from './pro-blocks';
import * as step3 from './pro-blocks/step3';

import Relleno from './components/Inprogress';
import FooterBanjio from './blocks/Footer';

// helpers
import { stepperData } from './helpers/steperData.helper';
import SplashScreen from './pro-blocks/splash-screen';

/**
 * Layout
 */

const { Header, Footer, Content } = Layout;

interface AccountOpeningProps {
  current: StateType['current'];
  dispatch?: Dispatch;
  stepsDataJson?: StateType['stepsDataJson'];
  loading?: StateType['loading'];
  splashScreen?: StateType['splashScreen'];
  typeFlow?: StateType['typeFlow'];
  phoneUser?: StateType['phoneUser'];
  userData?: StateType['dataUser'];
}

const AccountOpening: React.FC<AccountOpeningProps> = (props) => {
  const { stepsDataJson, loading, current, splashScreen, typeFlow, phoneUser, userData } = props;

  const dispatch = useDispatch();

  const getStepper = () => {
    dispatch({
      type: 'accountOpening/getStepperData',
    });
  };

  useEffect(() => {
    getStepper();
  }, []);

  const changeCurrent = (e: boolean) => {
    if (e) {
      dispatch({
        type: 'accountOpening/changeCurrent',
      });
    }
  };

  const setTypeFlow = (event: any) => {
    dispatch({
      type: 'accountOpening/setTypeFlow',
      payload: event.step,
    });
  };

  const setPhoneUser = (event: any) => {
    dispatch({
      type: 'accountOpening/setPhoneUser',
      payload: event,
    });
  };

  
  const returnCurrent = (model?: string, reducer?: string) => {
    if (model && reducer) {
      dispatch({
        type: `${model}/${reducer}`,
      });
    }else {
      dispatch({
        type: 'accountOpening/changeCurrentReturn',
      });
    }
  };

  const setDataUser = (event: any) => {
    dispatch({
      type: 'accountOpening/setDataUser',
      payload: event,
    });
  };

  const generateFlow = (name: string) => {
    const component = stepsViews[name] || Relleno;

    return React.createElement(component, {
      onComplete: changeCurrent,
      onTypeFlow: typeFlow,
      setDetail: setTypeFlow,
      onSetPhone: setPhoneUser,
      phoneUser,
      setDataUser,
      userData,
      stepsViews:step3
    });
  };

  return (
    <>
      {loading ? (
        <Spin />
      ) : (
        <>
          {splashScreen ? (
            <SplashScreen
              logo1={urlImages.Novabank}
              logo2={urlImages.Novabankwrite}
              imagesCarousel={[urlImages.robot1, urlImages.robot2, urlImages.robot3]}
              iconCircle={urlImages.circlebg}
              onComplete={changeCurrent}
            />
          ) : (
            <>
              {stepsDataJson.length > 0 && (
                <>
                  {current < stepsDataJson.length &&
                  stepsDataJson[current].component === 'Step4' ? (
                    <>{generateFlow(stepsDataJson[current].component)}</>
                  ) : (
                    <>
                      {current === stepsDataJson.length ? (
                        <Relleno />
                      ) : (
                        <Layout className={styles.layout}>
                          <Header className={styles.header}>
                            <HeaderBanjio currentStage={current} onReturn={returnCurrent} />
                            <div className={styles.bar}>
                              <ProgressDynamic data={stepsDataJson[current].progress} />
                            </div>
                          </Header>
                          <Content>
                            <div className={styles.steps}>
                              <StepperDynamic
                                current={current}
                                steps={stepperData(stepsDataJson)}
                              />
                              {generateFlow(stepsDataJson[current].component)}
                            </div>
                          </Content>
                          <Footer className={styles.footer}>
                            <FooterBanjio />
                          </Footer>
                        </Layout>
                      )}
                    </>
                  )}
                </>
              )}
            </>
          )}
        </>
      )}
    </>
  );
};

export default connect(({ accountOpening }: { accountOpening: StateType }) => ({
  current: accountOpening.current,
  stepsDataJson: accountOpening.stepsDataJson,
  loading: accountOpening.loading,
  splashScreen: accountOpening.splashScreen,
  typeFlow: accountOpening.typeFlow,
  phoneUser: accountOpening.phoneUser,
  userData: accountOpening.dataUser,
}))(AccountOpening);

import React, { useEffect, useState } from 'react';
import { Dispatch, connect } from 'umi';
import { StateType } from '../model';
import KeepSessionModal from './modals/ModalKeepSession/keep-session';
import AlertErrorSession from './modals/ModalsLimit/timerLimit';

//  interfaz para redirección y límites
interface Step1Props {
  timeLogout?: StateType['timeLogout'];
  dispatch?: Dispatch;
  limit?: StateType['limit'];
  isError?: StateType['isError'];
}

// functional component that has a counter for the session time of 20 minutes
const TimerLogout: React.FC<Step1Props> = ({ timeLogout, dispatch, limit = 0, isError }) => {
  let temporal;
  if (localStorage.getItem('timer')) {
    temporal = localStorage.getItem('timer');
  } else {
    temporal = 1200;
  }
  const [seconds, setSeconds] = useState(Number(temporal));
  const [error, setError] = useState(<div />);
  const [increment] = useState(undefined);

  useEffect(() => {
    if (isError) {
      setError(<AlertErrorSession />);
    }
    let interval = 0;
    interval = window.setInterval(() => {
      setSeconds((prevSeconds) => {
        localStorage.setItem('timer', String(seconds));
        if (prevSeconds === 0) {
          clearInterval(interval);
          localStorage.clear();
          if (dispatch) {
            dispatch({
              type: 'login/logout',
            });
          }
          return 1200;
        }
        if (prevSeconds === 120) {
          if (limit > 5) {
            setError(<AlertErrorSession />);
          } else {
            KeepSessionModal(dispatch);
          }
        }
        return prevSeconds - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [seconds]);

  const handleCancelClick = () => {
    clearInterval(increment);
    localStorage.clear();
    setSeconds(1200);
  };

  useEffect(() => {
    if (timeLogout) {
      handleCancelClick();
      if (dispatch) {
        dispatch({
          type: 'login/changeTimeLogout',
          payload: false,
        });
      }
    }
  }, [timeLogout]);

  return <>{error}</>;
};

export default connect(({ bneSession }: { bneSession: StateType }) => ({
  timeLogout: bneSession.timeLogout,
  limit: bneSession.limit,
  isError: bneSession.isError,
}))(TimerLogout);

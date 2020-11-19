import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, connect, useIntl } from 'umi';
import { ModelType, StateModel } from './models/model';
import UploadBlock from './blocks/upload-files-rao';
import { PAGE_NAME_UPPER_CAMEL_CASEProps } from './interface/interface';
import { UploadFixture } from './fixtures/fixture';
import { Alert } from 'antd';

const PAGE_NAME_UPPER_CAMEL_CASE: React.FC<PAGE_NAME_UPPER_CAMEL_CASEProps> = ({
  typeFlowProp = UploadFixture.typeFlow,
  phoneNumber = UploadFixture.phoneNumber,
  firstView,
  secondView,
  onComplete,
  flagFlowComplete,
  dataUpload,
  status,
  onSetUserData,
}) => {
  const dispatch = useDispatch();

  // states para INE  FRONT
  // STATE PARA DATA
  const [dataIneFront, srcIneFront] = useState<any>();
  // STATE PARA FILE LIST
  const [ineFrontFileList, fileListIneFront] = useState({ fileList: [] });
  // // STATE PARA EL OBJETO DEL SERVICIO
  const [objectIneFront, setObjectIneFront] = useState<any>({});

  // states para INE  BACK
  // STATE PARA DATA BACK
  const [dataIneback, srcIneBack] = useState<any>();
  // STATE PARA FILE LIST BACK
  const [ineBackFileList, fileListIneBack] = useState({ fileList: [] });
  // // STATE PARA EL OBJETO DEL SERVICIO BACK
  const [objectIneBack, setObjectIneBack] = useState<any>({});

  // states para PDF
  // STATE PARA DATA PDF
  const [dataPdf, srcPdf] = useState<any>();
  // STATE PARA FILE LIST PDF
  const [pdfFileList, fileListPdf] = useState({ fileList: [] });
  // // STATE PARA EL OBJETO DEL SERVICIO PDF
  const [objectpdF, setObjectPdf] = useState<any>({});

  const [resetObject, setResetObject] = useState(false);

  // show spin
  const [showSpin, setShowSpin] = useState(false);
  let messageError: string = '';
  const [btnContinue, setContinue] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    console.log(dataUpload, 'data del servicio');
    if (dataUpload === {}) {
      setShowSpin(false);
    }
    if (dataUpload && onSetUserData) {
      onSetUserData(dataUpload)
    }
  }, [dataUpload]);

  const getData = () => {
    let saveDispatch = objectIneFront.type || objectIneBack.type ? true : false;
    if (saveDispatch) {
      dispatch({
        type: 'requestModel/ine',
        payload: {objectIneFront, objectIneBack},
      });
    } else {
      dispatch({
        type: 'requestModel/pdfData',
        payload: objectpdF,
      });
    }

    if (!flagFlowComplete) {
      setShowSpin(true);
    }

    if (dispatch) {
      dispatch({
        type: 'requestModel/setFlowStatus',
        payload: false,
      });
    }
  };

  useEffect(() => {
    if (ineFrontFileList.fileList) {
      transformObjectIneFront(ineFrontFileList.fileList[0]);
    }
  }, [dataIneFront, ineFrontFileList]);

  useEffect(() => {
    if (ineBackFileList.fileList) {
      transformObjectIneBack(ineBackFileList.fileList[0]);
    }
  }, [dataIneback, ineBackFileList]);

  useEffect(() => {
    if (pdfFileList.fileList) {
      transformObjectPDF(pdfFileList.fileList[0]);
    }
  }, [dataPdf, pdfFileList]);

  // Transform type element
  const transformType = (e: any) => {
    if (e?.type) {
      const arrString = e.type.split('/');
      return arrString[arrString.length - 1];
    }
    return '';
  };

  const getUrlImg = (e: string) => {
    if (e !== undefined) {
      const urlString = e.split('base64,');
      return urlString[urlString.length - 1];
    }
  };

  //FUNCTION TO MAKE OBJECT INE FRONT
  const transformObjectIneFront = (fileList: any) => {
    setObjectIneFront({
      type: transformType(fileList),
      phone: phoneNumber,
      image: getUrlImg(dataIneFront),
    });
    if (resetObject) {
      setObjectIneFront({
        type: '',
        phone: '',
        image: '',
      });
      setResetObject(false);
    }
  };

  //FUNCTION TO MAKE OBJECT INE BACK
  const transformObjectIneBack = (fileList: any) => {
    setObjectIneBack({
      type: transformType(fileList),
      phone: phoneNumber,
      image: getUrlImg(dataIneback),
    });
    if (resetObject) {
      setObjectIneBack({
        type: '',
        phone: '',
        image: '',
      });
      setResetObject(false);
    }
  };

  //FUNCTION TO MAKE OBJECT PDF INES
  const transformObjectPDF = (fileList: any) => {
    setObjectPdf({
      type: transformType(fileList),
      phone: phoneNumber,
      image: getUrlImg(dataPdf),
    });
    if (resetObject) {
      setResetObject(false);
    }
  };

  useEffect(() => {
    if (resetObject) {
      setObjectPdf({});
      setObjectIneBack({});
      setObjectIneFront({});
      dispatch({
        type: 'requestModel/setFlowStatus',
        payload: false,
      });
    }
  }, [resetObject]);

  useEffect(() => {
    if (flagFlowComplete && onComplete) {
      onComplete(flagFlowComplete);
    }
  }, [flagFlowComplete]);

  console.log(flagFlowComplete, 'valor del flow');

  useEffect(() => {
    if (status) {
      setContinue(true);
      if (status.document) {
        if (status.document != 200) {
          messageError = 'Hubo un error en la carga, intenta nuevamente';
          setError(true);
        }
      } else if (status.front !== 200 || status.back !== 200) {
        messageError = 'Hubo un error en la carga, intenta nuevamente';
        setError(true);
      }
    } else {
      setContinue(false);
      setError(false);
    }
  }, [status]);

  let data: any = (
    <Alert
      message="Error"
      type="error"
      showIcon
      description="Hubo un error en la carga, intenta nuevamente"
    />
  );

  return (
    <div>
      <br />
      <>
        {error ? data : null}
        <>
          <UploadBlock
            onClick={getData}
            typeFlowProp={typeFlowProp}
            srcIneFront={srcIneFront}
            fileListIneFront={fileListIneFront}
            srcIneBack={srcIneBack}
            fileListIneBack={fileListIneBack}
            srcPdf={srcPdf}
            fileListPdf={fileListPdf}
            firstView={firstView}
            secondView={secondView}
            setResetObject={setResetObject}
            showSpin={showSpin}
            setShowSpin={setShowSpin}
            btnContinue={btnContinue}
          />
        </>
      </>
    </div>
  );
};

export default connect(({ requestModel }: { requestModel: StateModel }) => ({
  flagFlowComplete: requestModel.flowComplete,
  dataUpload: requestModel.dataUpload,
  status: requestModel.status,
}))(PAGE_NAME_UPPER_CAMEL_CASE);

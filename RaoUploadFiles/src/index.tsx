import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, connect, useIntl } from "umi";
import { ModelType } from "./models/model";
import UploadBlock from './blocks/upload-files-rao';
import { UploadInfoProps } from './interface/interface';
import { UploadFixture } from './fixtures/fixture';

const Upload: React.FC<UploadInfoProps> = ({
  typeFlowProp = UploadFixture.typeFlow,
  phoneNumber = UploadFixture.phoneNumber,
  firstView,
  secondView,
  onComplete,
  flagFlowComplete,
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

  const getData = () => {
    let saveDispatch = objectIneFront.type || objectIneBack.type ? true : false;
    if (saveDispatch) {
      dispatch({
        type: 'requestModel/prueba',
        payload: {objectIneFront, objectIneBack},
      });
    } else {
      dispatch({
        type: 'requestModel/pdfData',
        payload: objectpdF,
      });
    }
    if(dispatch) {
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

  return (
    <div>
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
      />
    </div>
  );
};

export default connect(({ requestModel }: { requestModel: ModelType }) => ({
  flagFlowComplete: requestModel.flowComplete,
}))(Upload);

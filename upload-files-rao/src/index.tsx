import React, { useState, useEffect } from 'react';
import { Upload, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import IframeComm from 'react-iframe-comm';
import { useDispatch } from 'umi';
import { UploadFixture } from './fixtures/fixture';
import { UploadInfoProps } from './interfaces/interface';
import styles from './index.less';
import { TypeFlow } from './enum/emun';

const UploadInfo: React.FC<UploadInfoProps> = ({
  typeFlowProp = UploadFixture.typeFlow,
  firtsView = UploadFixture.UploadFirstView,
  secondView = UploadFixture.UploadSecondView,
}) => {
  let typeFile: any;
  const multiple = typeFlowProp === TypeFlow.INE;
  const dispatch = useDispatch();

  const propsUpload = {
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    multiple: true,
    className: 'upload-list-inline',
  };

  const [filesSelected, setFilesSelected] = useState({
    fileList: [],
  });

  // pdf
  const [ejemplo, setEjemplo] = useState('');

  const attributesPdf = {
    src: ejemplo,
    width: '100%',
    height: '100%',
    frameBorder: 0,
  };

  const handleChange = ({ fileList }: any) => {
    if (fileList.length > 2) {
      fileList = fileList.slice(-2);
      setFilesSelected({ fileList });
    } else {
      setFilesSelected({ fileList });
    }
  };

  const handlePreview = async (file: any) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };

  useEffect(() => {}, [filesSelected]);

  const progressFunction = () => {
    filesSelected?.fileList.forEach((element: any) => {
      if (element.type === 'application/pdf') {
        typeFile = 'pdf';
      }
    });
    // if (filesSelected.fileList.length > 2) {
    //   console.log('es mayor a 2...');
    //   let datos: any = [];
    //   for (let i = 0; i < 2; i++) {
    //     datos.push(filesSelected.fileList[i]);
    //   }
    //   console.log('DATOS: ', datos);
    //   // fileList = fileList.slice(-2);
    //   filesSelected.fileList = datos;
    // }
    // // filesSelected.fileList = filesSelected.fileList.slice(-1);
    // console.log('element: ', filesSelected.fileList);
  };

  const save = () => {
    dispatch({
      type: 'requestModel/getData',
      payload: '',
    });
  };

  progressFunction();

  const reloadFiles = () => {
    setFilesSelected({ fileList: [] });
  };

  return (
    <div>
      {filesSelected.fileList.length >= 1 ? (
        <div className={styles.container}>
          <div className={styles.header}>
            <div className={styles.optional}>{secondView.secondHeaderTitle}</div>
            <div className={styles.title}>{secondView.secondTitle}</div>
            <div className={styles.subtitle}>{secondView.secondSubtitle}</div>
          </div>
        </div>
      ) : (
        <div className={styles.firtsView}>
          <div className={styles.header}>
            <div className={styles.optional}>{firtsView.firstHeaderTitle}</div>
            <div className={styles.title}>{firtsView.firstTitle}</div>
            <div className={styles.subtitle}>{firtsView.firstSubtitle}</div>
          </div>
          <div className={styles.details}>
            <div className={styles.secondHeader}>{firtsView.detailsTitle}</div>
            <div className={styles.list}>
              <ul>
                <li>{firtsView.detailsElement1}</li>
                <li>{firtsView.detailsElement2}</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      <div>
        {typeFile ? (
          <div className={styles.uploadPdf}>
            {/* <div className={styles.pdf}>
              <object data={ejemplo} height="100%"></object>
            </div> */}
            <div className={styles.pdf}>
              <IframeComm attributes={attributesPdf} />
            </div>
            <div className={styles.pdfName}>{filesSelected.fileList[0].name}</div>
          </div>
        ) : (
          <Upload
            {...propsUpload}
            accept=".pdf, .png, .jpg"
            onChange={handleChange}
            fileList={filesSelected.fileList}
            onPreview={handlePreview}
            listType="picture"
            multiple={multiple}
            beforeUpload={(file) => {
              const reader = new FileReader();
              reader.onload = (e) => {
                const stringData = String(e.target?.result);
                setEjemplo(stringData);
              };
              // // reader.readAsText(file);
              reader.readAsDataURL(file);
              return false;
            }}
          >
            {typeFlowProp === TypeFlow.INE ? (
              filesSelected.fileList.length >= 2 ? null : filesSelected.fileList.length === 1 ? (
                <div className={styles.upload}>
                  <div>
                    <PlusOutlined />
                  </div>
                  <div>{UploadFixture.UploadStyle.title}</div>
                </div>
              ) : (
                <div className={styles.uploadBtn}>
                  <Button className={styles.btnUpload} size="large">
                    {firtsView.bntUploadTitle}
                  </Button>
                </div>
              )
            ) : typeFlowProp === TypeFlow.ADDRESS ? (
              filesSelected.fileList.length === 1 ? null : (
                <div className={styles.uploadBtn}>
                  <Button className={styles.btnUpload} size="large">
                    {firtsView.bntUploadTitle}
                  </Button>
                </div>
              )
            ) : null}
          </Upload>
        )}
      </div>
      {filesSelected.fileList.length >= 1 ? (
        <div className={styles.container}>
          <div className={styles.options}>
            <div>
              <Button className={styles.btnUpload} onClick={save}>
                {' '}
                {secondView.bntNextTitle}{' '}
              </Button>
            </div>
            <div className={styles.again} onClick={reloadFiles}>
              {secondView.linkTitle}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default UploadInfo;

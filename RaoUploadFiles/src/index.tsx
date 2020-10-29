import React, { useCallback, useEffect } from 'react';
import { useDispatch } from 'umi';
import UploadFile from './blocks/upload-files-rao';
import { UploadInfoProps } from './interface/interface';
import { UploadFixture } from './fixtures/fixture';

export interface UploadProps {
  typeFlowProp?: UploadInfoProps;
}

const Upload: React.FC<UploadProps> = ({ typeFlowProp = UploadFixture.typeFlow }) => {
  const dispatch = useDispatch();

  const getData = useCallback(() => {
    dispatch({
      type: 'requestModel/getData',
      payload: '',
    });
  }, []);

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <UploadFile onClick={getData} typeFlowProp={typeFlowProp} />
    </div>
  );
};

export default Upload;

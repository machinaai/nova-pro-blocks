import React, { useState } from 'react';
import { Modal } from 'antd';
import { CloseCircleFilled } from '@ant-design/icons';
import { ModalProps } from './interfaces/modal.interface';
import { ButtonsSubmit } from '../../buttons-submit/index';
import { dataFixture } from './fixture/dataFixture';
import { useWindowSize } from './hooks/useWindowSize';
import styles from './index.less';

const AnotherTimeBlock: React.FC<ModalProps> = (props) => {

  const {
    iconTitle = dataFixture.iconHeader,
    title = 'Title',
    subtitle = 'Subtitle',
    textContent = 'text content',
    optionsButton = dataFixture.optionsBtn,
    onClose,
    fontFamily: font } = props

  const size = useWindowSize();
  const [showModal, setShowModal] = useState(true);
  const { btn1, btn2 } = optionsButton;

  let content;
  const closeModal = () => {
    onClose()
    setShowModal(false)
  };

  const propsButton = {
    but_option1: btn1.title,
    actionOp1: btn1.action,
    typeBtn1: btn1.type,
    but_option2: btn2.title,
    colorOp2: btn2.color,
    actionOp2: btn2.action,
    typeBtn2: btn2.type
  }


  if (size.width <= 5000 && size.width >= 721) {
    content =
      <Modal
        onCancel={closeModal}
        closeIcon={<CloseCircleFilled style={{ color: btn2.color }} />}
        visible={showModal}
        mask={showModal}
        footer={null}
      >
        <div className={styles.heading}>
          <div className={styles.image}>
            <img className={styles.img} src={iconTitle} alt='illustration-later'/>
          </div>
          <h1 className={styles.title} style={{ fontFamily: font?.fontTitle }}>{title}</h1>
          <p style={{ fontFamily: font?.fontSubtitle }}>{subtitle} <br /> {textContent}</p>
        </div>
        <div className={styles.btnWrapper}>
          <ButtonsSubmit {...propsButton} />
        </div>
      </Modal>
  } else {
    content =
      <div className={styles.container} >
        <div className={styles.image}>
          <img className={styles.img} src={iconTitle} alt='illustration-later'/>
        </div>
        <h1 style={{ fontFamily: font?.fontTitle }}>{title}</h1>
        <p style={{ fontFamily: font?.fontSubtitle }}>{subtitle} <br /> {textContent}</p>
        <div className={styles.btnWrapper}>
          <ButtonsSubmit {...propsButton} />
        </div>
      </div>
  }
  return (
    <>
      {content}
    </>
  );
}

export default AnotherTimeBlock;

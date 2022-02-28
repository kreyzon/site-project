import React, { useContext } from 'react';
import ModalContext from "../context/ModalContext";
import styles from "../../styles/Home.module.css"

const Modal = () => {
  const context = useContext(ModalContext)
  if (context == undefined) {
    return null
  }
  const { content, isShow, closeModal } = context
  return isShow ? (
  <div id="myModal" className={styles.modal} style={{display: isShow ? 'block' : 'none'}}>
    <div className={styles.modal_content}>
      <div className={styles.modal_header}>
        <span className={styles.close} onClick={closeModal}>&times;</span>
        {content.header}
      </div>
      <div className={styles.modal_body}>
        {content.body}
      </div>
      {content.footer && (<div className={styles.modal_footer}>
        {content.footer}
      </div>)}
    </div>
  </div>
  ) : null;
};

export default Modal;
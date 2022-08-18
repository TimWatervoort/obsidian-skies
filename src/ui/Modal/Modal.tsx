import React from 'react';
import styles from './Modal.module.css';
import classnames from 'classnames';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faXmark} from '@fortawesome/free-solid-svg-icons';

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  closeModal: () => void;
  wide?: boolean;
}

const Modal = (props: ModalProps) => {
  const {children, isOpen, closeModal, wide} = props;

  if (!isOpen) {
    return null;
  }

  return (
    <div onClick={() => closeModal()} className={styles['os-modal']}>
      <div
        onClick={(e: React.SyntheticEvent) => e.stopPropagation()}
        className={classnames(styles['os-modal-body'], {[styles.wide]: wide})}>
        <span onClick={() => closeModal()} className={styles['os-close-modal']}>
          <FontAwesomeIcon icon={faXmark} />
        </span>
        {children}
      </div>
    </div>
  );
};

export default Modal;

import React from 'react';
import styles from './Modal.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faXmark} from '@fortawesome/free-solid-svg-icons';

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  closeModal: () => void;
}

const Modal = (props: ModalProps) => {
  const {children, isOpen, closeModal} = props;

  if (!isOpen) {
    return null;
  }

  return (
    <div onClick={() => closeModal()} className={styles['os-modal']}>
      <div onClick={(e: React.SyntheticEvent) => e.stopPropagation()} className={styles['os-modal-body']}>
        <span onClick={() => closeModal()} className={styles['os-close-modal']}>
          <FontAwesomeIcon icon={faXmark} />
        </span>
        {children}
      </div>
    </div>
  );
};

export default Modal;

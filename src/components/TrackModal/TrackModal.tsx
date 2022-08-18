import {useState} from 'react';
import styles from './TrackModal.module.css';
import Modal from 'ui/Modal';

interface TrackModalProps {
  track: {
    Title: string;
    Length: string;
    Lyrics: string;
  };
}

const TrackModal = ({track}: TrackModalProps) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div onClick={() => setShowModal(true)}>
        {track.Title} ({track.Length})
      </div>
      <Modal wide isOpen={showModal} closeModal={() => setShowModal(false)}>
        <h3 className={styles['os-track-header']}>{track.Title}</h3>
        <hr className={styles['os-divider']} />
        <p className={styles['os-track-lyrics']}>{track.Lyrics}</p>
      </Modal>
    </>
  );
};

export default TrackModal;

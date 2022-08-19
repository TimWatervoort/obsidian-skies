import {useState} from 'react';
import classnames from 'classnames';
import styles from './MemberModal.module.css';
import bio from 'strings/bio';
import Modal from 'ui/Modal';

interface MemberModalProps {
  member: {
    Name: string;
    Instruments: string;
    OtherRoles: string;
    Education: string;
    Gear: string;
  };
  image: string;
  isFirst?: boolean;
}

const MemberModal = ({member, image, isFirst}: MemberModalProps) => {
  const [showModal, setShowModal] = useState(false);

  const getGearItems = () => {
    const gearArray = member.Gear.split(',');
    return gearArray.map((item, i) => {
      return (
        <p key={`${member.Name}-${i}`} className={styles['os-modal-section-content']}>
          {item}
        </p>
      );
    });
  };

  return (
    <>
      <h5
        onClick={() => setShowModal(true)}
        className={classnames(styles['os-bio-header'], {[styles.isFirst]: isFirst, [styles.isSecond]: !isFirst})}>
        {member.Name} - {member.Instruments}
      </h5>
      <Modal isOpen={showModal} closeModal={() => setShowModal(false)}>
        <img src={image} alt="Band member" className={styles['os-member-image']} />
        <h3 className={styles['os-modal-name']}>{member.Name}</h3>
        <h3 className={styles['os-modal-instruments']}>{member.Instruments}</h3>
        <hr className={styles['os-hr']} />
        <h3 className={styles['os-modal-section-header']}>{bio.OtherRoles}</h3>
        <p className={styles['os-modal-section-content']}>{member.OtherRoles}</p>
        <h3 className={styles['os-modal-section-header']}>{bio.Education}</h3>
        <p className={styles['os-modal-section-content']}>{member.Education}</p>
        <h3 className={styles['os-modal-section-header']}>{bio.Gear}</h3>
        {getGearItems()}
      </Modal>
    </>
  );
};

export default MemberModal;

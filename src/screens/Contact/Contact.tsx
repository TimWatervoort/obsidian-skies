import styles from './Contact.module.css';
import OS_2_Cliff from 'assets/OS_2_Cliff.jpg';
import contact from 'strings/contact';

const Contact = () => {
  return (
    <div className={styles['os-contactpage']}>
      <img src={OS_2_Cliff} alt="Obsidian Skies by cliff" className={styles['os-contact-photo']} />
      <hr className={styles['os-divider']} />
      <h3 className={styles['os-info']}>{contact.BandEmail}</h3>
    </div>
  );
};

export default Contact;

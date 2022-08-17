import styles from './Contact.module.css';
import OS_2_Cliff from 'assets/OS_2_Cliff.jpg';
import contact from 'strings/contact';

const Contact = () => {
  return (
    <div className={styles['os-contactpage']}>
      <img src={OS_2_Cliff} alt="Obsidian Skies by cliff" className={styles['os-contact-photo']} />
      <h3 className={styles['os-info']}>
        <strong className={styles['os-label']}>{contact.Email}: </strong>
        {contact.BandEmail}
      </h3>
      <h3 className={styles['os-info']}>
        <strong className={styles['os-label']}>{contact.Phone}: </strong>
        {contact.BandPhone}
      </h3>
    </div>
  );
};

export default Contact;

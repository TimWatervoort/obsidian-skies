import styles from './Bio.module.css';
import OS_1_Creek from 'assets/OS_1_Creek.jpg';
import OS_4_Tim from 'assets/OS_4_Tim.jpg';
import OS_5_Logan from 'assets/OS_5_Logan.jpg';
import bio from 'strings/bio';
import MemberModal from 'components/MemberModal';

const Bio = () => {
  return (
    <div className={styles['os-biopage']}>
      <img className={styles['os-bio-photo']} alt="Obsidian Skies band" src={OS_1_Creek} />
      <MemberModal isFirst image={OS_4_Tim} member={bio.Tim} />
      <MemberModal image={OS_5_Logan} member={bio.Logan} />
      <hr />
      <p className={styles['os-bio-text']}>{bio.BioLine1}</p>
      <p className={styles['os-bio-text']}>{bio.BioLine2}</p>
      <p className={styles['os-bio-text']}>{bio.BioLine3}</p>
      <p className={styles['os-bio-text']}>{bio.BioLine4}</p>
      <p className={styles['os-bio-text']}>{bio.BioLine5}</p>
      <p className={styles['os-bio-text']}>{bio.BioLine6}</p>
      <p className={styles['os-bio-text']}>{bio.BioLine7}</p>
    </div>
  );
};

export default Bio;

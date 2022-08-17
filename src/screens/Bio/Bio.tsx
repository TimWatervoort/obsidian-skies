import styles from './Bio.module.css';
import OS_1_Creek from 'assets/OS_1_Creek.jpg';
import bio from 'strings/bio';
import classnames from 'classnames';

const Bio = () => {
  return (
    <div className={styles['os-biopage']}>
      <img className={styles['os-bio-photo']} alt="Obsidian Skies band" src={OS_1_Creek} />
      <h5 className={classnames(styles['os-bio-header'], styles['os-first-name'])}>{bio.Tim}</h5>
      <h5 className={classnames(styles['os-bio-header'], styles['os-second-name'])}>{bio.Logan}</h5>
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

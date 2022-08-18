import styles from './Links.module.css';
import OS_3_Forest from 'assets/OS_3_Forest.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {externalLinks} from 'constants/navigation';

import type {NavLinkType} from 'constants/navigation';

const ExternalLink = ({to, label}: NavLinkType) => {
  return (
    <Col onClick={() => window.open(to)} className={styles['os-link']} xs={12} xl={6}>
      <span>{label}</span>
    </Col>
  );
};

const renderLinks = () => {
  return externalLinks.map((link: NavLinkType) => {
    return <ExternalLink to={link.to} label={link.label} />;
  });
};

const Links = () => {
  return (
    <Container fluid className={styles['os-linkspage']}>
      <img src={OS_3_Forest} alt="Obsidian Skies band in forest" className={styles['os-links-photo']} />
      <hr className={styles['os-divider']} />
      <Row className={styles['os-links-section']}>{renderLinks()}</Row>
    </Container>
  );
};

export default Links;

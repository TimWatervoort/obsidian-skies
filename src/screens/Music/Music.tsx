import styles from './Music.module.css';
import album_logo from 'assets/album_logo.jpg';
import music from 'strings/music';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Music = () => {
  return (
    <Container className={styles['os-musicpage']}>
      <img className={styles['os-music-photo']} alt="Saturnian cover" src={album_logo} />
      <h3 className={styles['os-music-header']}>{music.Header}</h3>
      <hr />
      <h4 className={styles['os-track-listing-header']}>{music.TrackListing}</h4>
      <Row className={styles['os-track-listing']}>
        <Col xs={12} className={styles['os-track']}>
          {music.Celestial} ({music.CelestialLength})
        </Col>
        <Col xs={12} className={styles['os-track']}>
          {music.Rebirth} ({music.RebirthLength})
        </Col>
        <Col xs={12} className={styles['os-track']}>
          {music.Home} ({music.HomeLength})
        </Col>
      </Row>
    </Container>
  );
};

export default Music;

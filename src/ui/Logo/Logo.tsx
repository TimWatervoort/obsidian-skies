import whiteLogo from 'assets/logo_white.png';
import stylizedLogo from 'assets/logo_stylized.png';

import styles from './Logo.module.css';

interface LogoProps {
  color: 'white' | 'stylized';
  size: 'xs' | 's' | 'm' | 'l' | 'xl';
}

const Logo = (props: LogoProps) => {
  const {color, size} = props;

  const logos = {
    white: whiteLogo,
    stylized: stylizedLogo,
  };

  return (
    <div>
      <img alt="Obsidian Skies" className={styles[`logo-${size}`]} src={logos[color]} />
    </div>
  );
};

export default Logo;

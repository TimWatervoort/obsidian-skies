import whiteLogo from 'assets/logo_white.png';
import stylizedLogo from 'assets/logo_stylized.png';

import styles from './Logo.module.css';

interface LogoProps {
  style: 'white' | 'stylized';
  size: 'xs' | 's' | 'm' | 'l' | 'xl';
}

const Logo = (props: LogoProps) => {
  const {style, size} = props;

  const logos = {
    white: whiteLogo,
    stylized: stylizedLogo,
  };

  return (
    <div>
      <img className={styles[`logo-${size}`]} src={logos[style]} />
    </div>
  );
};

export default Logo;

import Logo from 'ui/Logo';
import NavItem from 'ui/NavItem';
import styles from './Header.module.css';
import {internalLinks} from 'constants/navigation';

import type {NavLinkType} from 'constants/navigation';

const Header = () => {
  const renderNavbar = () => {
    return (
      <div className={styles['os-navbar']}>
        {internalLinks.map((link: NavLinkType) => {
          return <NavItem key={link.to} to={link.to} label={link.label} />;
        })}
      </div>
    );
  };

  return (
    <div className={styles['os-header']}>
      <div className={styles['os-logo']}>
        <Logo size="m" color="white" />
      </div>
      {renderNavbar()}
    </div>
  );
};

export default Header;

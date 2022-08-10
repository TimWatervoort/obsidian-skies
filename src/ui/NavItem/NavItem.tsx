import {useNavigate} from 'react-router-dom';
import styles from './NavItem.module.css';

interface NavItemProps {
  to: string;
  label: string;
}

const NavItem = (props: NavItemProps) => {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(props.to)} className={styles['os-nav-item']}>
      <h3 className="os-cinzel">{props.label}</h3>
    </div>
  );
};

export default NavItem;

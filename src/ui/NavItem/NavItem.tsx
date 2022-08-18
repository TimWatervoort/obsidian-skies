import {useNavigate, useLocation} from 'react-router-dom';
import styles from './NavItem.module.css';
import classnames from 'classnames';

interface NavItemProps {
  to: string;
  label: string;
}

const NavItem = (props: NavItemProps) => {
  const navigate = useNavigate();

  const location = useLocation();
  const isActive = location?.pathname === props.to;

  return (
    <div
      onClick={() => navigate(props.to)}
      className={classnames(styles['os-nav-item'], {[styles['os-active-link']]: isActive})}>
      <h3 className="os-cinzel">{props.label}</h3>
    </div>
  );
};

export default NavItem;

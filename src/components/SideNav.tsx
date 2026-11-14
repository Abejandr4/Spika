import { NavLink } from 'react-router-dom';
import { navItems } from '../utils/mockData';

interface SideNavProps {
  onNavigate?: () => void;
}

export default function SideNav({ onNavigate }: SideNavProps) {
  return (
    <nav className="sidenav" aria-label="Main menu">
      {navItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          onClick={onNavigate}
          className={({ isActive }) => `sidenav__link${isActive ? ' is-active' : ''}`}
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
}

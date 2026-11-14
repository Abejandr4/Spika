import { Link } from 'react-router-dom';
import Icon from './Icon';
import { useApp } from '../utils/appContext';
import { APP_NAME, astronaut } from '../utils/mockData';

interface TopBarProps {
  onMenuClick: () => void;
  menuOpen: boolean;
}

export default function TopBar({ onMenuClick, menuOpen }: TopBarProps) {
  const { location, connection, openAlerts } = useApp();
  const connected = connection === 'connected';
  const locationLabel = location.tag === 'Preview' ? `${location.name} · Preview` : location.name;

  return (
    <header className="topbar">
      <button
        type="button"
        className="icon-btn"
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
        onClick={onMenuClick}
      >
        <Icon name="menu" size={22} />
      </button>

      <span className="topbar__brand">{APP_NAME}</span>

      <span className="avatar" aria-hidden="true">
        {astronaut.initials}
      </span>
      <div className="topbar__who">
        <span className="topbar__name">{astronaut.name}</span>
        <span className="topbar__meta num">
          Mission day {astronaut.missionDay} · {astronaut.timeLabel}
        </span>
      </div>

      <div className="topbar__pills">
        <Link to="/locations" className="pill">
          {locationLabel}
        </Link>
        <span className="pill">
          <Icon
            name={connected ? 'signal' : 'noSignal'}
            color={connected ? 'var(--status-normal)' : 'var(--status-caution)'}
          />
          {connected ? 'Connected' : 'No signal'}
        </span>
      </div>

      <div className="spacer" />

      <span className="pill">
        <Icon name="info" />
        Alerts
        {openAlerts.length > 0 && <span className="pill__count">{openAlerts.length}</span>}
      </span>

      <Link to="/emergency" className="btn btn--emergency">
        <Icon name="warning" />
        Emergency
      </Link>
    </header>
  );
}
